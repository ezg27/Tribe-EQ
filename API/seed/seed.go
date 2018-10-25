package seed

import (
	"fmt"
	"log"
	"os"
	"encoding/json"
	"gopkg.in/mgo.v2"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/ezg27/Tribe-EQ/API/utils"
)

// Seed function
func Seed() {
	session, err := mgo.Dial(utils.GetEnv("DB_URL", "mongodb://localhost:27017"))
	if err != nil {
		log.Fatal(err)
	}
	defer session.Close()

	session.SetMode(mgo.Monotonic, true)

	// Drop database before seeding
	err = session.DB("tribe_eq_data").DropDatabase()
	if err != nil {
		log.Fatal(err)
	}

	// Create database session
	c := session.DB("tribe_eq_data").C("presets")

	index := mgo.Index{
		Key:        []string{"name"},
		Unique:     true,
	}

	// Ensure unique preset names
	err = c.EnsureIndex(index)
	if err != nil {
		log.Fatal(err)
	}

	// Parse JSON from data file
	presetFile, err := os.Open("seed/presets.json")
	defer presetFile.Close()
	var presets []models.Preset
	jsonParser := json.NewDecoder(presetFile)
	err = jsonParser.Decode(&presets)
	if err != nil {
		log.Fatal(err)
	}

	// Convert to usable format
	docs := make([]interface{}, len(presets))
	for i := 0; i != len(presets); i++ {
		docs[i] = presets[i]
	}

	// Insert preset data
	err = c.Insert(docs...)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Preset data seeded to database!")
	}

}
