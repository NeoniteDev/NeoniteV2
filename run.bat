@echo off
start https://discord.gg/fndev
if not exist node_modules (call npm i)
title NeoniteV2
node app.js
cmd /k
