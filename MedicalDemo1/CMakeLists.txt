cmake_minimum_required(VERSION 2.8)

PROJECT(MedicalDemo1)

find_package(VTK COMPONENTS
  vtkFiltersCore
  vtkIOImage
  vtkIOLegacy
)
include(${VTK_USE_FILE})

add_executable(MedicalDemo1 MACOSX_BUNDLE MedicalDemo1.cxx )
target_link_libraries(MedicalDemo1 ${VTK_LIBRARIES})
set_property(TARGET MedicalDemo1 APPEND_STRING PROPERTY
  LINK_FLAGS " -s FORCE_FILESYSTEM=1 -s NO_EXIT_RUNTIME=1 -s INVOKE_RUN=0")

add_executable(MedicalDemo1Wasm MACOSX_BUNDLE MedicalDemo1.cxx )
target_link_libraries(MedicalDemo1Wasm ${VTK_LIBRARIES})
set_property(TARGET MedicalDemo1 APPEND_STRING PROPERTY
  LINK_FLAGS " -s WASM=1 -s FORCE_FILESYSTEM=1 -s NO_EXIT_RUNTIME=1 -s INVOKE_RUN=0")
