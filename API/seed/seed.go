package seed

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"gopkg.in/mgo.v2"

	"github.com/ezg27/Tribe-EQ/API/models"
)

// Seed function
func Seed() {
	session, err := mgo.Dial("mongodb://localhost:27017/Tribe_EQ")
	if err != nil {
		log.Fatal(err)
	}
	defer session.Close()

	session.SetMode(mgo.Monotonic, true)

	err = session.DB("test").DropDatabase()
	if err != nil {
		log.Fatal(err)
	}

	c := session.DB("test").C("presets")

	index := mgo.Index{
		Key:        []string{"name"},
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}

	err = c.EnsureIndex(index)
	if err != nil {
		log.Fatal(err)
	}

	presetFile, err := os.Open("seed/presets.json")
	defer presetFile.Close()
	var presets []models.Preset
	jsonParser := json.NewDecoder(presetFile)
	err = jsonParser.Decode(&presets)
	if err != nil {
		log.Fatal(err)
	}

	docs := make([]interface{}, len(presets))
	for i := 0; i != len(presets); i++ {
		docs[i] = presets[i]
	}

	err = c.Insert(docs...)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Preset data seeded to database!")
	}

}
