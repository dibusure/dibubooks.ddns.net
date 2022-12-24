package main

import (
        "net/http"
)

func main() {
        http.Handle("/", http.FileServer(http.Dir("./")))
        http.Handle("/authors/", http.StripPrefix("/authors/", http.FileServer(http.Dir("./sorts/author"))))
        http.Handle("/pubhouses/", http.StripPrefix("/pubhouses/", http.FileServer(http.Dir("./sorts/pubhouse"))))
        http.ListenAndServe(":80", nil)
}
