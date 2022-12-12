@echo off
if not exist node_modules (call npm i)
title NeoCommunismV2
node app.js
cmd /k
