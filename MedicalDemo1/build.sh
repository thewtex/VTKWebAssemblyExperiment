#!/usr/bin/env bash

script_dir="`cd $(dirname $0); pwd`"
cd $script_dir

docker_image=kitware/itk-js-vtk:latest

# 'itk-js' is provided by npm install -g itk
# Docker must also be installed
itk-js build --image ${docker_image} .
