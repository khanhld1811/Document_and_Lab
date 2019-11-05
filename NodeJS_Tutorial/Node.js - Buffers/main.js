// Write buffer
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");;

console.log("octets written : " + len);