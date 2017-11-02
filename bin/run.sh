#!/bin/bash


# POSTGRES CONNECTION INFORMATION

PGUSER='hacker' \
PGHOST='52.53.164.247' \
PGPASSWORD='hackthecow' \
PGDATABASE='names' \
PGPORT=5432
APP_PORT=8080 \
node "./bin/www"



