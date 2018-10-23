package controllers

import (
	"net/http"

	"github.com/ezg27/Tribe-EQ/API/config"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

var s = config.Presets

// GetAllPresets function
func GetAllPresets(c echo.Context) error {
	res := models.Presets{}
	err := s.Find(bson.M{}).All(&res.Presets)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find presets data")
	}
	return c.JSON(http.StatusOK, res)
}

// GetPresetByID function
func GetPresetByID(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	res := models.Preset{}
	err := s.Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&res)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Error: Preset not found")
	}
	return c.JSON(http.StatusOK, res)
}

// CreatePreset function
func CreatePreset(c echo.Context) error {
	p := new(models.Preset)
	c.Bind(p)
	p.ID = bson.NewObjectId()
	err := s.Insert(p)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to insert preset into database")
	}
	return c.JSON(http.StatusCreated, p)
}

// UpdatePreset function
func UpdatePreset(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	p := new(models.Preset)
	c.Bind(p)
	objID := bson.ObjectIdHex(id)
	err := s.Update(bson.M{"_id": objID}, p)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to update preset")
	}
	p.ID = objID
	return c.JSON(http.StatusOK, p)
}

// DeletePreset function
func DeletePreset(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	objID := bson.ObjectIdHex(id)
	err := s.RemoveId(objID)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Error: Preset not found")
	}
	return c.String(http.StatusOK, "Preset deleted!")
}
