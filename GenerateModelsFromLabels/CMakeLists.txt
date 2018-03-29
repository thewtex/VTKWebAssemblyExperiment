cmake_minimum_required(VERSION 2.8)

PROJECT(GenerateModelsFromLabels)

find_package(VTK COMPONENTS
  vtkFiltersGeneral
  vtkFiltersGeometry
  vtkIOImage
  vtkIOLegacy
  vtkImagingStatistics
)
include(${VTK_USE_FILE})

if(EMSCRIPTEN)
  include(ITKBridgeJavaScript)
  web_add_executable(GenerateModelsFromLabels MACOSX_BUNDLE GenerateModelsFromLabels.cxx)
  web_target_link_libraries(GenerateModelsFromLabels ${VTK_LIBRARIES})
else()
  add_executable(GenerateModelsFromLabels MACOSX_BUNDLE GenerateModelsFromLabels.cxx)
  target_link_libraries(GenerateModelsFromLabels ${VTK_LIBRARIES})
endif()
