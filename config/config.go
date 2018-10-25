package config

import (
	"fmt"

	"github.com/ezg27/Tribe-EQ/utils"
	"gopkg.in/mgo.v2"
)

// Presets : presets
var Presets *mgo.Collection

func init() {
	s, err := mgo.Dial(utils.GetEnv("DB_URL", "mongodb://localhost:27017"))
	if err != nil {
		panic(err)
	}

	Presets = s.DB("TribeEQ").C("presets")

	fmt.Println("You are connected to the database...")
}
