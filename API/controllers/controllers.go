package controllers

import (
	"net/http"
	"gopkg.in/mgo.v2/bson"
	"github.com/labstack/echo"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/ezg27/Tribe-EQ/API/dao"
)

// GetAllPresets function
func GetAllPresets(c echo.Context) error {
	res, _ := dao.GetAll()
	return c.JSON(http.StatusOK, res)
}

// GetPresetByID function
func GetPresetByID(c echo.Context) error {
	id := c.Param("id")
	res, _ := dao.GetByID(id)
	return c.JSON(http.StatusOK, res)
}

// CreatePreset function
func CreatePreset(c echo.Context) error {
	p := new(models.Preset)
	c.Bind(p)
	p.ID = bson.NewObjectId()
	res, _ := dao.CreatePreset(*p)
	return c.JSON(http.StatusOK, res)
}

// // UpdatePreset function
// func UpdatePreset(c echo.Context) error {

// }

// // DeletePreset function
// func DeletePreset(c echo.Context) error {

// }