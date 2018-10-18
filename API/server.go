package main

import (
	"net/http"
	
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	type User struct {
		Name  string `json:"name" xml:"name"`
  	Email string `json:"email" xml:"email"`
	}
	e.GET("/", func(c echo.Context) error {
		u := &User {
			Name:  "Jon",
    	Email: "jon@labstack.com",
		}
		return c.JSON(http.StatusOK, u)
	})
	e.Logger.Fatal(e.Start("localhost:3001"))
}