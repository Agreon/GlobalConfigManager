# GlobalConfigManager
Manages Global Config files for npm-modules

## Description
This simple module writes and reads json-files to the users Home-Directory, so that data can be saved globally.

## Usage

set (applicationId, fileName, content, cb)

- applicationId: Id of your application
- fileName: self-explanatory
- content: Content of the file
- cb: Callback (err)

get (applicationId, fileName, cb)

- applicationId: Id of your application
- fileName: self-explanatory
- cb: Callback (err, data)
