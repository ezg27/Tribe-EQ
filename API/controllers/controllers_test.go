package controllers

import (
	"net/http"
	"net/http/httptest"
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
	dummyPreset = `{"name":"tester","low_band":{"on/off":true,"peak/shelf":"peak","freq_hz":60,"gain":0},"low_mid_band":{"on/off":true,"hi_low_q":"low","freq_hz":500,"gain":0},"hi_mid_band":{"on/off":true,"hi_low_q":"low","freq_khz":3,"gain":0},"hi_band":{"on/off":true,"peak/shelf":"peak","freq_khz":8,"gain":0}}`
)

func init() {
	session, err := mgo.Dial(testDBURL)
	if err != nil {
		panic(err)
	}
	s = session.DB(testDB).C(collection)
}

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

func TestGetAllPresets(t *testing.T) {

}

func TestGetPresetByID(t *testing.T) {

}

func TestCreatePreset(t *testing.T) {
	clearDB()
	e := echo.New()
	req := httptest.NewRequest(http.MethodPost, "/api/presets", strings.NewReader(dummyPreset))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	if assert.NoError(t, CreatePreset(c)) {
		assert.Equal(t, http.StatusCreated, rec.Code, "Returns status 201 for succesfully created preset")
		assert.Equal(t, dummyPreset, rec.Body.String(), "Returns correctly inserted preset from database")
	}
}

func TestCreatePresetErrors(t *testing.T) {
	e := echo.New()
	req := httptest.NewRequest(http.MethodPost, "/api/presets", strings.NewReader(dummyPreset))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	err := CreatePreset(c)
	assert.EqualError(t, err, "code=500, message=Error: Preset name already exists", "Returns error message for duplicate preset")
	clearDB()
}

func TestUpdatePreset(t *testing.T) {

}

func TestDeletePreset(t *testing.T) {

}
