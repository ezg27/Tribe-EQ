package dao

import (
	"net/http"

	"github.com/ezg27/Tribe-EQ/API/config"
	"github.com/ezg27/Tribe-EQ/API/models"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// GetAll : return all presets from database
func GetAll() (models.Presets, error) {
	res := models.Presets{}
	err := config.Presets.Find(bson.M{}).All(&res)
	if err != nil {
		return res, echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find presets data")
	}
	return res, err
}

// GetByID : return preset with passed ID
func GetByID(id string) (models.Preset, error) {
	res := models.Preset{}
	err := config.Presets.Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&res)
	if err != nil {
		return res, echo.NewHTTPError(http.StatusNotFound, "Error: Unable to find preset")
	}
	return res, err
}

// CreatePreset : add new preset to database
func CreatePreset(p models.Preset) (models.Preset, error) {
	err := config.Presets.Insert(p)
	if err != nil {
		return p, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to insert preset into database")
	}
	return p, err
}

// UpdatePreset : update existing preset in database
func UpdatePreset(id string, p models.Preset) (models.Preset, error) {
	objID := bson.ObjectIdHex(id)
	err := config.Presets.Update(bson.M{"_id": objID}, p)
	if err != nil {
		return p, echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to update preset")
	}
	return p, err
}

// // DeletePreset : remove preset from database
// func DeletePreset(id string) error {
// 	db := config.DB{}

// 	session, err := db.DoDial()
// 	if err != nil {
// 		return echo.NewHTTPError(http.StatusInternalServerError, "Error: Unable to connect to database")
// 	}

// 	idoi := bson.ObjectIdHex(id)

// 	defer session.Close()

// 	c := session.DB(db.Name()).C(collection)

// 	err = c.RemoveId(idoi)
// 	if err != nil {
// 		return echo.NewHTTPError(http.StatusNotFound, "Error: Unable to delete preset from database")
// 	}
// 	return err
// }
