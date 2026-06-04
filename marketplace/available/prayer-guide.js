// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yctYs/hDMMBbhI64X+nTC6TwbbBffPDebKzXWJmCa7YHfK6CWPYw4u8NTpzBZP0ktUwEpH8ku+O1SGq+tIldoZ9XQtoTwYeeNdb45K9KoKpw7yn/ObtLQuvjNl6mYwGBhZ03oQNfnqab7q7S6s8eOaebpHnTKHhu3uEixoWeSgm5tzdoP2lL/w834/4oqEH6w/7XKUG8UgCHmVFvAQSf3LnRoZgx3dPiA3K2w1zGx6Z1rqbfOxMr0J+I0Uw/DSgMhlvaO6GsND6SMVI4abvbGnG5phcjDfk4k6+knEevNukOSvdVFRartcoe78tiFUt1HhXyiQED602MRadplaRqDVWFwdy0PwuYULB08vxTqtWDXTADYtzyMPqJbbBURVR/AK035lKsKNkLUaOlOtbH4iC7jaGBoR+ieg+/ZE1ROoHtRf7P1qaoAHc5RzFvcIaLM9t1fZEq8UVmwvGDQd8I/8Lf2+SiOmONfn0ucIbJb55jO/tgVGzHqQuRd/Qmu5Wb7HivqhRADSWHe3dHNE/84o26ynvk23kA0cKQEW8g6mQUZzVfOXcr7Nr+zhXqUCwf0eGWh2BO0CTY+0psyq2T+WLoRSvKEnVloKggt3lH/16xjtNSViGocBbZs+kc+Et+iBQZFRhvL5at16gawK/WEGXjvk0CDANZEGor1ykgJWVlNY7WvsrYgoxy5e1zXrbJi9WWJcLj2nhxQ7IhitL0CUCEe2tzQGlHUE4U6JFkHFX9RTX3N1wd8EiZcJtnZNFwce1WSdvwomPZwojStOhUMXpw6nqp//J71T/MibmpL4AN6frYd1RX8nHQRwijGk5jnyh3nVliKfuXaFEWUvXXoO5BToQpp4NXAuqQM40t4RCrsNun8tE6FQMf8bDElwLMXCWqovfxqSOlOeWCrfIZFuDG2Y4dvSb6n6WTCkDfQLvQSSIYo18+3syysm2CYA8J35M5dvNx0NWdw7/cqoPc2W2gVrTO4MA4OivrPWDTcImKGcCp82SVe2tTAPAjqygcE/wHS3Qk1I71pai4RksQS/4HlsmNhehn8/b/s2CvgCOheJHXRCcXlItYzuz99BH7sM5wiOzeqo8EXVCjLt3KnnHL3DJ32JoS23vh8nvYtrCr+4Xr8ASj+pLf2ndbkQo1hyknYVxXdESgCOrB9tKOpHtI8VxTKxWi6jhFSKXwlcnMXiwYiQgBzZDIwLCIAo6llzjdjUomujMWJ+jw+FT8AQ7n0G/2UaA8mWrbjuYGJr04g4d71eRpBLfuaiw9eVIzuxamf3WBCJ8QsQARvT/Np3bM8/CUkXXOMV4JPZFqpzejI6/6Zmm1JUajVDxD8wJ1XXUe9A83oD44Xmpv5+6MVkd50f7FRNgDCI8jBinc2exXN6xDmF8xYbMXzPCL40ijMSz6oOaj7uYPZLXD56SYum/9O/ysD5Zs5NjLp2xJQ6AS24hbbOMGJ6nPg/7eptNg+oYIFFDmImx3qUD15hNrwR+POjxh+LVD+H5TkM6EFbTmByapO1HFko1b8yoj4w6Dmg9RHbbSNkeJ7cSeEHhcSMntBiahgON+EgWilUfpx9dAcju++1n8nmsPXUxZMxMxgStP3aRBXFKa9cjPTaOw+MJS5/hpgiAt7iUXz6UR29rI0t+E8AU3qlQedpTrGxZ9lky6RKh49q64ZlkE5N2DZdIxKp0qTZFUbwvokFEPU9wqbS7vIzpRjOvdjIFfyusIDu+bmYHEi7+ILbKexjF2crzzQOWpJs3D2raAHx/xpt/5YZCC7KTon//R9q5kkX63UOvkX1eEZbdzqwB+CN53fH6/x2AptDJ7GbSz9+2/4w==';const _IH='cfe1fa71f8518211beb2ab968525dd10a4b3ae7f3eb3f717eec1b5d6d2179da1';let _src;

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
