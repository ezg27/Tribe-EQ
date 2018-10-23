package config

import (
	"fmt"
	"github.com/ezg27/Tribe-EQ/API/utils"
	"gopkg.in/mgo.v2"
)

// DB struct
// type DB struct {
// 	Session *mgo.Session
// }

// // DoDial : create new database session
// func (db *DB) DoDial() (s *mgo.Session, err error) {
// 	return mgo.Dial(utils.GetEnv("DB_URL", "mongodb://localhost:27017/Tribe_EQ"))
// }

// // Name : set mongo db name
// func (db *DB) Name() string {
// 	return "TribeEQ"
// }

// DB : database
var DB *mgo.Database

// Presets : presets
var Presets *mgo.Collection

func init() {
	s, err := mgo.Dial(utils.GetEnv("DB_URL", "mongodb://localhost:27017/Tribe_EQ"))
	if err != nil {
		panic(err)
	}

	DB = s.DB("TribeEQ")
	Presets = DB.C("presets")

	fmt.Println("You are connected to the database...")
}
