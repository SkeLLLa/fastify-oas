const fs = jest.genMockFromModule('fs');
fs._readFileSync = fs.readFileSync;

function readFileSync(directoryPath) {
  if (directoryPath.includes('package.json')) {
    return '{}';
  }
}

fs.readFileSync = readFileSync;

module.exports = fs;
