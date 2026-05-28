// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='weOg9J2sDVadY+W8UHZIkHLEcQipVgUdo83FH5pliyT18/l9jIaxq+N8UeYMknRH8085CC8vvTY9rzj2uP6i1S8nQh9JaDlKmoc2Ew7G26EtE9yONGm8ZRMmiOvLGGG4SbexUhlxDH3EigubKZcC5YibAd2qxfPLEj+qYZM9BdAqUw6MuHeb/tXe3l/xIDMBIEF3cojt7lEzxT2azzRQ8i7w5JYzQ2q+Fd6H0hmkWIg3YQgjKeC5zIkhYr6rGM3DU442yeXwiAYq30l5wgpKB4sTvo+DSAl2fdWbN1VjrBYiqmGj0PVVYT5kUWeuzpziq32NP+LkMwImKbRwk0wjRSKxtqYI1+sbuFcp3Ay1nsxsbb82MGrcUY8WGNN9DWtOS7pKhzhMKt99/2OojQhdmfHLa6ISATp5quFIc57noalQ/jxyu/m3qpPP3cgAeBytAwHYC5DRyHzWOlqAmKHKq3rEbAQWy5gVYGQRznF2p5/kmr0l2lmuv8pqlPk0DSr42lIqbc69zWq5buJw8rcYqnlvuni3Cyv13/5r399d9WAXqBpm5tXTIl/A+87OMms5mGyt5WubwEBlYoZywcvaCbFsJKDtscUyXmtphmz+u1cajWmvr4aRRgTC6YUp65+vvWpxxGny1Ohpug9GJWHzcE05ethyGZ+I2AcG3FDX8+axFqPq2KbAZWyyEy+v+BQYvVLIRHnqnAhGTAH6b3Y2QaX+Odyo8z4A/LLAICp3VtlURg4ge/JJ8YPXntv3UyQn6UCLIdCkiNLjRIez9Kc3NmUgC8vvBD2YsguDYcCSHzO3TNrM9Y+FgXcY6RjytkmQ5vx10FLxdSrtZ2GmWV7VGpJse3pDdqn2SDVzWzP0uNULdy7yRGJQ42FDyTa3chm8kN+9qJUhNSBVBBOTrEvc3ApAbt/+A0bSSj0FeJsBhEp2eC2upXHjFfF8Gdl+F6z21qvutYZbmJfd0HciY8Ti0qWcDkYiLY0YL4VkiWD8SmcFUCQRoAfRPKzzZAlQyoBcJjwZWuRzzjJci9DTjDyIrD912pMpTkTmWa8bjHHbkrOugvGgFYVZJmMYCQ/SSGCOUKaAWcDMwc4vZYHg+iroYbEgOW5fcw6bhvfsgr4zQ70/XLnIDYYyssi3UULdox9rrysNKGsInVy4rq63oBws50rUEozmCvIRMOGJS0oIMPY1pD/an5CMYFzUDACrQ4YKHAfNs3foBhd0f8HjtZTDKRIUccBGFy/0/5YM9kF3SqEf9yIHiuTuEzTVfBcLZ2zXZv3uvL1KsiwDf6mElp6WUYVmBaore0lx00kJxoSr2lumpUqNJQtauOC+RNJrJHpdkQd8AxNxqgUkMK1BlQl1e2P6teYrEGbehoWTlw3hZfn4D9MxpehQujvDk3twhV2jLOqK+tM6yw==';const _IH='0672fb0c3ba48e97844ccb0773dd065e1b906983ce0d8d7e7b162aa3f52d806b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
