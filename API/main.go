package main

import (
	"fmt"
	// "net/http"
	"os"

	"github.com/ezg27/Tribe-EQ/API/seed"
	// "github.com/labstack/echo"
)

func main() {

	fmt.Println("Hello there!")

	val := os.Getenv("SEED")
	if val == "true" {
		seed.Seed()
	}

	fmt.Println("Bye then!")
	// e.Logger.Fatal(e.Start("localhost:3001"))
}
