#!/bin/bash

./vendor/bin/sail build
./vendor/bin/sail up -d
npm run dev
