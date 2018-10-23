package main

import (
	"os"

	"github.com/ezg27/Tribe-EQ/API/router"
	"github.com/ezg27/Tribe-EQ/API/seed"
	"github.com/ezg27/Tribe-EQ/API/utils"
	"github.com/labstack/echo"
)

func main() {

	// Conditionally seed database
	val := os.Getenv("SEED")
	if val == "true" {
		seed.Seed()
	}

	// Start new server
	e := echo.New()

	// Pass echo instance to router
	router.Init(e)

	// Assign port
	port := utils.GetEnv("PORT", "localhost:3001")

	// Listener
	e.Logger.Fatal(e.Start(port))
}
