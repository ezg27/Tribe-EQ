package controllers

import (
	"net/http"

	"github.com/ezg27/Tribe-EQ/API/dao"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// GetAllPresets function
func GetAllPresets(c echo.Context) error {
	res, _ := dao.GetAll()
	return c.JSON(http.StatusOK, res)
}

// GetPresetByID function
func GetPresetByID(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	res, _ := dao.GetByID(id)
	if res.ID == "" {
		return echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find preset")
	}
	return c.JSON(http.StatusOK, res)
}

// CreatePreset function
func CreatePreset(c echo.Context) error {
	p := new(models.Preset)
	c.Bind(p)
	p.ID = bson.NewObjectId()
	res, _ := dao.CreatePreset(*p)
	return c.JSON(http.StatusCreated, res)
}

// UpdatePreset function
func UpdatePreset(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	p := new(models.Preset)
	c.Bind(p)
	res, _ := dao.UpdatePreset(id, *p)
	return c.JSON(http.StatusOK, res)
}

// DeletePreset function
func DeletePreset(c echo.Context) error {
	id := c.Param("id")
	if !bson.IsObjectIdHex(id) {
		return echo.NewHTTPError(http.StatusBadRequest, "Error: Invalid ObjectId")
	}
	dao.DeletePreset(id)
	return c.String(http.StatusOK, "Preset deleted!")
}
