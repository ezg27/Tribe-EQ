package dao

import (
	"net/http"
	// "encoding/json"
	"github.com/ezg27/Tribe-EQ/API/config"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

const collection string = "presets"

// GetAll : return all presets from database
func GetAll() (models.Presets, error) {
	db := config.DB{}
	res := models.Presets{}

	session, err := db.DoDial()
	if err != nil {
		return res, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to connect to database")
	}

	defer session.Close()

	c := session.DB(db.Name()).C(collection)

	err = c.Find(bson.M{}).All(&res)
	if err != nil {
		return res, echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find presets data")
	}

	return res, err
}

// GetByID : return preset with passed ID
func GetByID(id string) (models.Preset, error) {
	db := config.DB{}
	res := models.Preset{}

	session, err := db.DoDial()
	if err != nil {
		return res, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to connect to database")
	}

	defer session.Close()

	c := session.DB(db.Name()).C(collection)

	err = c.Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&res)
	if err != nil {
		return res, echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find preset")
	}

	return res, err
}

// CreatePreset : add new preset to database
func CreatePreset(p models.Preset) (models.Preset, error) {
	db := config.DB{}

	session, err := db.DoDial()
	if err != nil {
		return p, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to connect to database")
	}

	defer session.Close()

	c := session.DB(db.Name()).C(collection)

	err = c.Insert(p)
	if err != nil {
		return p, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to insert preset into database")
	}

	return p, err
}

// DeletePreset : remove preset from database
func DeletePreset(id string) error {
	db := config.DB{}

	session, err := db.DoDial()
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to connect to database")
	}

	idoi := bson.ObjectIdHex(id)

	defer session.Close()

	c := session.DB(db.Name()).C(collection)

	err = c.RemoveId(idoi)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Error: Unable to delete preset from database")
	}
	return err
}