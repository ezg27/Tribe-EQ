package main

import (
	"os"
	"github.com/labstack/echo"
	"github.com/ezg27/Tribe-EQ/API/seed"
	"github.com/ezg27/Tribe-EQ/API/utils"
	"github.com/ezg27/Tribe-EQ/API/router"
)

func main() {
	
	// Conditionally seed database
	val := os.Getenv("SEED")
	if val == "true" {
		seed.Seed()
	}

	// Start new server
	e := echo.New()

	router.Init(e)
	
	// Listener
	e.Logger.Fatal(e.Start(utils.GetEnv("PORT", "localhost:3001")))
}
