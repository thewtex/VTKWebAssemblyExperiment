cmake_minimum_required(VERSION 2.8)

PROJECT(MedicalDemo1)

#find_package(VTK COMPONENTS
  #vtkCommonColor
  #vtkFiltersModeling
  #vtkIOImage
  #vtkInteractionStyle
  #vtkRenderingOpenGL2
#)
find_package(VTK REQUIRED)
include(${VTK_USE_FILE})

add_executable(MedicalDemo1 MACOSX_BUNDLE MedicalDemo1.cxx )

target_link_libraries(MedicalDemo1 ${VTK_LIBRARIES})
