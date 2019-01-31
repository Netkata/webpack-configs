// tslint:disable-next-line:import-name
import MemoryFS = require('memory-fs');

export function getFileFromFs(memoryInstance: MemoryFS, path: string) {
  let reference = memoryInstance.data;

  path.split('/')
    .slice(1)
    .forEach((dir: string) => {
      reference = reference[dir];
    });

  return reference;
}
