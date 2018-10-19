package main

import (
	"fmt"
	// "net/http"
	"os"

	"github.com/ezg27/Tribe-EQ/API/db"
	// "github.com/labstack/echo"
)

func main() {

	fmt.Println("Hello there!")

	seed := os.Getenv("SEED")
	if seed == "true" {
		db.Seed()
	}

	fmt.Println("Bye then!")
	// e.Logger.Fatal(e.Start("localhost:3001"))
}
