package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"

	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/labstack/echo"
	"github.com/stretchr/testify/assert"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

const (
	testDBURL  string = "mongodb://localhost:27017"
	testDB     string = "TribeEQ_test"
	collection string = "presets"
)

var (
	id          = bson.NewObjectId()
	TestPresets *mgo.Collection
	dummyPreset = `{
    "name": "tester",
    "low_band": {
      "on/off": true,
      "peak/shelf": "peak",
      "freq_hz": 60,
      "gain": 0
    },
    "low_mid_band": {
      "on/off": true,
      "hi_low_q": "low",
      "freq_hz": 500,
      "gain": 0
    },
    "hi_mid_band": {
      "on/off": true,
      "hi_low_q": "low",
      "freq_khz": 3.00,
      "gain": 0
    },
    "hi_band": {
      "on/off": true,
      "peak/shelf": "peak",
      "freq_khz": 8.00,
      "gain": 0
    }
  }`
)

// Init: initialize mongo session + seed test database
func Init() {
	session, err := mgo.Dial(testDBURL)
	if err != nil {
		panic(err)
	}
	s = session.DB(testDB).C(collection)

	// Parse JSON from data file
	presetFile, err := os.Open("../seed/test_presets.json")
	defer presetFile.Close()
	var presets []models.Preset
	jsonParser := json.NewDecoder(presetFile)
	err = jsonParser.Decode(&presets)
	if err != nil {
		fmt.Println("hello there")
	}

	// Convert to usable format
	docs := make([]interface{}, len(presets))
	for i := 0; i != len(presets); i++ {
		docs[i] = presets[i]
	}

	// Insert preset data
	err = s.Insert(docs...)
	if err != nil {
		panic(err)
	} else {
		fmt.Println("Preset data seeded to database!")
	}
}

// clearDB: clear database
func clearDB() {
	_, err := s.RemoveAll(bson.M{})
	if err != nil {
		panic(err)
	}
}

func findPresetByID() models.Preset {
	p := models.Preset{}
	err := s.Find(bson.M{"_id": id}).One(&p)
	if err != nil {
		panic(err)
	}
	return p
}

var e = echo.New()

func TestGetAllPresets(t *testing.T) {
	Init()
	e := echo.New()
	req := httptest.NewRequest(http.MethodGet, "/api/presets", nil)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)
	GetAllPresets(c)

	presets := models.Presets{}
	err := json.Unmarshal(rec.Body.Bytes(), &presets)
	if err != nil {
		panic(err)
	}

	// Assertions
	assert.Equal(t, http.StatusOK, rec.Code, "Returns status 200")
	assert.Equal(t, 2, len(presets.Presets), "Returns all presets from database")
	assert.Equal(t, "INIT", presets.Presets[0].Name, "Returns correctly named preset")
	assert.Equal(t, "Vocal Massage", presets.Presets[1].Name, "Returns correctly named preset")
	assert.Equal(t, "peak", presets.Presets[1].LowBand.PeakShelf, "Returns nested values correctly")
}

// func TestGetPresetByID(t *testing.T) {
// 	req := httptest.NewRequest(http.MethodGet, "/api/presets", nil)
// 	rec := httptest.NewRecorder()
// 	c := e.NewContext(req, rec)
// 	c.SetPath("/:id")
// 	c.SetParamNames("id")
// 	c.SetParamValues("5bd0ace8c59db1f056e48c28")
// 	GetPresetByID(c)

// 	resp := rec.Result()
// 	body, err := ioutil.ReadAll(resp.Body)
// 	if err != nil {
// 		t.Fatalf("Error unmarshalling JSON %s",
// 			err.Error())
// 	}

// 	// Assertions
// 	assert.Equal(t, http.StatusOK, rec.Code, "Returns status 201 for succesfully created preset")
// 	assert.JSONEq(t, dummyPreset, string(body), "Returns correctly inserted preset from database")
// 	clearDB()
// }

func TestCreatePreset(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/api/presets", strings.NewReader(dummyPreset))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)
	CreatePreset(c)

	preset := models.Preset{}
	err := json.Unmarshal(rec.Body.Bytes(), &preset)
	if err != nil {
		panic(err)
	}

	// Assertions
	assert.Equal(t, http.StatusCreated, rec.Code, "Returns status 201 for succesfully created preset")
	assert.Equal(t, "tester", preset.Name, "Returns correctly named preset")
	assert.Equal(t, true, preset.LowMidBand.OnOff, "Returns nested values correctly")
}

func TestCreatePresetErrors(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/api/presets", strings.NewReader(dummyPreset))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	// Assertions
	err := CreatePreset(c)
	assert.EqualError(t, err, "code=500, message=Error: Preset name already exists", "Returns error message for duplicate preset")
	clearDB()
}

func TestUpdatePreset(t *testing.T) {

}

func TestDeletePreset(t *testing.T) {

}
