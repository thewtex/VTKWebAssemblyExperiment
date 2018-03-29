// Derived from VTK/Examples/Cxx/Medical1.cxx
// This example reads a volume dataset, extracts an isosurface that
// represents the skin and displays it.
//

#include <vtkMarchingCubes.h>
#include <vtkStructuredPointsReader.h>
#include <vtkSmartPointer.h>
#include <vtkPolyDataWriter.h>

#include <chrono>

int main (int argc, char *argv[])
{
  if (argc < 3)
  {
    cout << "Usage: " << argv[0] << " inputImage.vtk outputMesh.vtk" << endl;
    return EXIT_FAILURE;
  }

  auto start = std::chrono::steady_clock::now();

  vtkSmartPointer<vtkStructuredPointsReader> reader =
    vtkSmartPointer<vtkStructuredPointsReader>::New();
  reader->SetFileName (argv[1]);
  reader->ReadAllScalarsOn();

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

  auto end = std::chrono::steady_clock::now();
  auto diff = end - start;

  std::cout << "Execution took:                                               " << std::chrono::duration< double, std::milli >( diff ).count() << " milliseconds." << std::endl;

  return EXIT_SUCCESS;
}
