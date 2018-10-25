package models

import "gopkg.in/mgo.v2/bson"

// Preset struct
type Preset struct {
	ID      bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
	Name    string        `json:"name" bson:"name"`
	LowBand struct {
		OnOff     bool    `json:"on/off" bson:"on/off"`
		PeakShelf string  `json:"peak/shelf" bson:"peak/shelf"`
		FreqHz    uint16  `json:"freq_hz" bson:"freq_hz"`
		Gain      float64 `json:"gain" bson:"gain"`
	} `json:"low_band" bson:"low_band"`
	LowMidBand struct {
		OnOff  bool    `json:"on/off" bson:"on/off"`
		HiLowQ string  `json:"hi_low_q" bson:"hi_low_q"`
		FreqHz uint16  `json:"freq_hz" bson:"freq_hz"`
		Gain   float64 `json:"gain" bson:"gain"`
	} `json:"low_mid_band" bson:"low_mid_band"`
	HiMidBand struct {
		OnOff   bool    `json:"on/off" bson:"on/off"`
		HiLowQ  string  `json:"hi_low_q" bson:"hi_low_q"`
		FreqkHz float64 `json:"freq_khz" bson:"freq_khz"`
		Gain    float64 `json:"gain" bson:"gain"`
	} `json:"hi_mid_band" bson:"hi_mid_band"`
	HiBand struct {
		OnOff     bool    `json:"on/off" bson:"on/off"`
		PeakShelf string  `json:"peak/shelf" bson:"peak/shelf"`
		FreqkHz   float64 `json:"freq_khz" bson:"freq_khz"`
		Gain      float64 `json:"gain" bson:"gain"`
	} `json:"hi_band" bson:"hi_band"`
}

// Presets :
type Presets struct {
	Presets []Preset `json:"presets"`
}