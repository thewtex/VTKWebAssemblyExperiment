
cmake_minimum_required(VERSION 2.8)
 
PROJECT(GenerateModelsFromLabels)
 
find_package(VTK REQUIRED)
include(${VTK_USE_FILE})
 
add_executable(GenerateModelsFromLabels MACOSX_BUNDLE GenerateModelsFromLabels.cxx )
 
target_link_libraries(GenerateModelsFromLabels ${VTK_LIBRARIES})
