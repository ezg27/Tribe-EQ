package controllers

import (
	"github.com/labstack/echo"
	// preset "github.com/ezg27/Tribe-EQ/API/models"
	"github.com/ezg27/Tribe-EQ/API/dao"
	"net/http"
)

// GetAllPresets function
func GetAllPresets(c echo.Context) error {
	res, _ := dao.GetAll()
	return c.JSON(http.StatusOK, res)
}

// GetPresetByID function
func GetPresetByID(c echo.Context) error {
	id := c.Param("id")
	res, _ := dao.GetById(id)
	return c.JSON(http.StatusOK, res)
}

// // CreatePreset function
// func CreatePreset(c echo.Context) error {

// }

// // UpdatePreset function
// func UpdatePreset(c echo.Context) error {

// }

// // DeletePreset function
// func DeletePreset(c echo.Context) error {

// }