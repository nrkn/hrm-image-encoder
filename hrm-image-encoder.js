var zlib = require( 'zlib' )

module.exports = function( paths ){
  var len = paths.reduce( ( l, p ) =>
    l + p.length, 0 
  ) + paths.length
  
  //might be nice to truncate instead - PR welcomed!
  if( len > 255 )
    throw Error( 'Maximum of 255 line segments exceeded' )
  
  var buffer = new Buffer( 1028 )
  
  buffer.fill( 0 ) 
  
  buffer.writeUInt32LE( len, 0 )
  
  var offset = 4
  
  paths.forEach( path => {
    path.forEach( point => {
      buffer.writeUInt16LE( point[ 0 ], offset )
      offset += 2
      buffer.writeUInt16LE( point[ 1 ], offset )
      offset += 2
    })
    buffer.writeUInt32LE( 0, offset )
    offset += 4
  })
  
  var deflated = zlib.deflateSync( buffer )
  
  var toBase64 = deflated.toString( 'base64' ).replace( /=/g, ';' )
  
  var split = toBase64.match( /.{1,80}/g ).join( '\n' )
  
  return split
}