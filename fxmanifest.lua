fx_version "cerulean"
game "gta5"

title "LB Phone - FleecaNow"
description "A simple script to share money anonumously."
author "Maximus Prime"

shared_script "config.lua"
client_script "client/**.lua"

file "ui/dist/**/*"

-- ui_page "ui/dist/index.html"
ui_page "http://localhost:3000/"
