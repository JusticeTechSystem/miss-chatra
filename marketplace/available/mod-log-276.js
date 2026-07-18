// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNkr9R6K+dgjlXdFw6+bMX02By5RoSEYLCSqfha9uPU4RPKzoEX3Kd2bHtQ58NsU/El2cDXsKBdChsbM/VqE1aU5uEpsSbk9nUygypwQokECcGk62HVIWLSjNweO0jCDM07pfrRby114epR8ecLmPOD3oM7KCsoBaMPzpLkZMV6/eJdfgfhM85lY1i+5gnQ2psJRH+jrQupIC6sgO/NAcnoNOR/+Z0/uhBblndDx8RdKCqT+b6Ax+jUFnFABj1aa3RKlsSRHH/MOQ30JI8FqKn42HyHHwYRsf2RDA048szjGb/VZuxyT9NZ1SFV+JBOr+wWXuSsjfKdepbqmaKW/uMbPhtUX6on5rnt+g693fFB+ysUL+kmPlHdTyX4Eof3r4Ka9b1sMdBbZmS8/w+wlqdFVsZgFOZhvKTPzlXEEL4DaEBgCObHdBsg2hB3oSZF0KWrBRXaK3hKQ65Mvjdu5+U9vi19V4EjVbTB7pm+3nWVEd202CE+8DRK4EjjKOgfj0oSd3Ust2zUb/lWg5Q3NUzkeeK3gcXwrJlZCr3Z0lRVu+a0EYAi8RMzQJvAlbF3snwGRPLrp9N9DbM9XIzPNg8SCV/UKm8lA9u0Q18vXq+kmFTj7NyL5VeGA6rYQh6wgmdmglL2xTaBaWl0qVpIsQkeV1gFDoGrEp42Pavp8wRCM/+0k25xG4gtemcEG/Ch51FpjqHrke5W6OeAP0AkWvjk3O+Uw7beeJcT1ZnghNHcVA+0l4t2niza8GPbdiI+Ne/kz7qc+44VHNg7C5wHCFlBsu1zlebNgh3qZMFGrf887Gwv+UuaCj8b1M1tuiqHS281MF5d0weIcFn4qNc1MspKFO4iHcJRyy/8MpWayFzXGLgHJ6bIbZrddQ6VTSahD8Y8skbB414YcbQ/m62cig+zD7bCcW7q278JB0dgw3ZIoJCEPPtVu9T17hqxqrbswrlfzAMlUrNKM/XtTDL8+5y4uVuqf8Qwzg10ENnSyivUumq53vKHxDfzk3uEW/wEVWXzCFLTMSA966vQsW9Y4jqIosxf7iGJASwYKW48R+X3g967AlY5nnj6htPXTfqmU1QcQT/mmAWBBqH3Ws7/JNwrK6KnUL/aN5jZh2tFykWoqDcHxDLUIDy7m/kd7fL/HjKaXyCPoV9poySyElXnUZZ323neR5Y2duC4bmKokf9HzXAsDO1aKtlbakiQTFPDs7TNa9qytiZdC7kRGRNf01cTGWw5TuHot68bzAMDl3j3jPlx/kwi9cJHmsD6HJGpERXH2/GlZ/jZnQDjDv0FQh4LALdqBhvyTbRBEFI9Ha149fX3E+gLdBQvzpvoSiDx5R+kFJEi0DbkhSK';const _IH='3e3456661525cb69284501100b00083e20b8320cca5ab9cb8c516f9d647d9e78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
