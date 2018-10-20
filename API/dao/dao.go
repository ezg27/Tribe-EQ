package dao

import (
	"net/http"
	"gopkg.in/mgo.v2/bson"
	"github.com/labstack/echo"
	"github.com/ezg27/Tribe-EQ/API/config"
	"github.com/ezg27/Tribe-EQ/API/models"
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
		return res, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to find preset data")
	}

	return res, err
}