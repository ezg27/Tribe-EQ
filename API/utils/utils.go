package utils

import (
	"os"
)

// GetEnv : check env variable
func GetEnv(key, fallback string) string {
    if value, ok := os.LookupEnv(key); ok {
        return value
    }
    return fallback
}