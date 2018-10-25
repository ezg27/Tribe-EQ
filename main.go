package main

import (
	"os"

	"github.com/ezg27/Tribe-EQ/router"
	"github.com/ezg27/Tribe-EQ/seed"
	"github.com/ezg27/Tribe-EQ/utils"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {

	// Conditionally seed database
	val := os.Getenv("SEED")
	if val == "true" {
		seed.Seed()
	}

	// Start new server
	e := echo.New()
	e.Use(middleware.CORS())

	// Pass echo instance to router
	router.Init(e)

	// Assign port
	port := utils.GetEnv("PORT", "3001")

	// Listener
	e.Logger.Fatal(e.Start(":" + port))
}
