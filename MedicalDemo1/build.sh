#!/usr/bin/env bash

script_dir="`cd $(dirname $0); pwd`"
cd $script_dir

docker_image=kitware/itk-js-vtk:latest

dockcross=./build/dockcross

mkdir -p ./build
docker run --rm $docker_image > $dockcross
chmod +x $dockcross

$dockcross cmake -Bbuild -H. -GNinja -DVTK_DIR=/VTK-build -DCMAKE_BUILD_TYPE=Release
$dockcross ninja -Cbuild
