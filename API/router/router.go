package router

import (
	"github.com/ezg27/Tribe-EQ/API/controllers"
	"github.com/labstack/echo"
)

// Init : Create endpoints
func Init(e *echo.Echo) {
	e.GET("/api/presets", controllers.GetAllPresets)
	e.POST("/api/presets", controllers.CreatePreset)
	e.GET("/api/presets/:id", controllers.GetPresetByID)
	// e.PATCH("/api/presets/:id", controllers.UpdatePreset)
	// e.DELETE("/api/presets/:id", controllers.DeletePreset)
}
