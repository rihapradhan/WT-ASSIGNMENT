# File Handling and Pattern Matching


## File Handling
### &nbsp; &nbsp; &nbsp; &nbsp; File Handling Functions

#### &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  fopen():
 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; binds a named resource, specified by filename, to a stream.

#### &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  fwrite():
 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; writes the contents of string to the file stream pointed to by handle.

#### &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  fread():
 &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; reads up to length bytes from the file pointer referenced by stream. Reading stops as soon as one of the following conditions is met:

         *length bytes have been read
         *EOF (end of file) is reached
         *a packet becomes available or the socket timeout occurs (for network streams)
         *if the stream is read buffered and it does not represent a 
          plain file, at most one read of up to a number of bytes equal
          to the chunk size (usually 8192) is made; depending on the 
          previously buffered data, the size of the returned data may be 
          larger than the chunk size.

## Pattern Matching

```
preg_match ( string $pattern , string $subject , array &$matches = null , int $flags = 0 , int $offset = 0 ) : int|false
```
Searches subject for a match to the regular expression given in pattern.