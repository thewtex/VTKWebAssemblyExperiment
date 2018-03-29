cmake_minimum_required(VERSION 2.8)

PROJECT(MedicalDemo1)

find_package(VTK COMPONENTS
  vtkFiltersCore
  vtkIOImage
  vtkIOLegacy
)
include(${VTK_USE_FILE})

if(EMSCRIPTEN)
  include(ITKBridgeJavaScript)
  web_add_executable(MedicalDemo1 MACOSX_BUNDLE MedicalDemo1.cxx )
  web_target_link_libraries(MedicalDemo1 ${VTK_LIBRARIES})
else()
  add_executable(MedicalDemo1 MACOSX_BUNDLE MedicalDemo1.cxx )
  target_link_libraries(MedicalDemo1 ${VTK_LIBRARIES})
endif()
