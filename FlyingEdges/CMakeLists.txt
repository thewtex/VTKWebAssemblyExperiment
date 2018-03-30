cmake_minimum_required(VERSION 3.8)

PROJECT(FlyingEdges)

find_package(VTK COMPONENTS
  vtkFiltersCore
  vtkIOImage
  vtkIOLegacy
)
include(${VTK_USE_FILE})

if(EMSCRIPTEN)
  include(ITKBridgeJavaScript)
  web_add_executable(FlyingEdges MACOSX_BUNDLE FlyingEdges.cxx)
  web_target_link_libraries(FlyingEdges ${VTK_LIBRARIES})
else()
  add_executable(FlyingEdges MACOSX_BUNDLE FlyingEdges.cxx)
  target_link_libraries(FlyingEdges ${VTK_LIBRARIES})
endif()
