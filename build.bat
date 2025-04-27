@echo off
echo Installing dependencies...
npm install

echo Building the application...
npm run build

echo Done! The executable will be in the dist folder.
pause 