// Derived from VTK/Examples/Cxx/Medical1.cxx
// This example reads a volume dataset, extracts an isosurface that
// represents the skin and displays it.
//

#include <vtkMarchingCubes.h>
#include <vtkMetaImageReader.h>
#include <vtkSmartPointer.h>
#include <vtkPolyDataWriter.h>

int main (int argc, char *argv[])
{
  if (argc < 3)
  {
    cout << "Usage: " << argv[0] << " input.mhd output.vtk" << endl;
    return EXIT_FAILURE;
  }

  vtkSmartPointer<vtkMetaImageReader> reader =
    vtkSmartPointer<vtkMetaImageReader>::New();
  reader->SetFileName (argv[1]);

  // An isosurface, or contour value of 500 is known to correspond to the
  // skin of the patient.
  vtkSmartPointer<vtkMarchingCubes> skinExtractor =
    vtkSmartPointer<vtkMarchingCubes>::New();
  skinExtractor->SetInputConnection(reader->GetOutputPort());
  skinExtractor->SetValue(0, 500);

  vtkSmartPointer<vtkPolyDataWriter> writer =
    vtkSmartPointer<vtkPolyDataWriter>::New();
  writer->SetInputConnection(skinExtractor->GetOutputPort());
  writer->SetFileName(argv[2]);
  writer->Write();

  return EXIT_SUCCESS;
}
