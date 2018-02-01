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

add_executable(GenerateModelsFromLabels MACOSX_BUNDLE GenerateModelsFromLabels.cxx)
target_link_libraries(GenerateModelsFromLabels ${VTK_LIBRARIES})
set_property(TARGET GenerateModelsFromLabels APPEND_STRING PROPERTY
  LINK_FLAGS " -s FORCE_FILESYSTEM=1 -s NO_EXIT_RUNTIME=1 -s INVOKE_RUN=0")

add_executable(GenerateModelsFromLabelsWasm MACOSX_BUNDLE GenerateModelsFromLabels.cxx)
target_link_libraries(GenerateModelsFromLabelsWasm ${VTK_LIBRARIES})
set_property(TARGET GenerateModelsFromLabelsWasm APPEND_STRING PROPERTY
  LINK_FLAGS " -s WASM=1 -s FORCE_FILESYSTEM=1 -s NO_EXIT_RUNTIME=1 -s INVOKE_RUN=0")
