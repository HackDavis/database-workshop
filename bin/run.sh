#!/bin/bash


# POSTGRES CONNECTION INFORMATION

PGUSER='hacker' \
PGHOST='ec2-52-53-164-247.us-west-1.compute.amazonaws.com ' \
PGPASSWORD='hackthecow' \
PGDATABASE='names' \
PGPORT=5432

# RUN NODE STARTING PROCESS

node "./bin/www"
