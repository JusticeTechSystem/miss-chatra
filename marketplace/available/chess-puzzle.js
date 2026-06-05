// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ycu6K8jLBVNhN3RRfVK+2ypGlpWDepCtoTO/fbHffkuA4OrG7Zayjco/WwXJYCv3wWoZshgA6kwod/5CPssigu9JjIbmA56wOcHjuFoy5RiAdeOqMI8+8OXmToJurbVXYtT7gs/ZZ5tJJeJ6P9betaoOyBOD7nXO1ae1uS57XpJZfjzmjl2xs53rJi1ZOLi8sdb+K+c8fp/8/0fdjlY3pXKH2Qus/K8Jpe4H0zLWcLncl9iFBWrkhKKMh0mvWDI3W/wEpgcKIbmRHAvj3fNDyoPlVtOhzpzkaQhpKN8X+K0cX5h5mJMoJwNOV06Ee9P2ZrqLsqKJ2ByOTBUhcZSW3HC8/dpdfQMlOrFi5Z7L+iItenxGO/wjBW+eScfkBNimvthfWexvngV2e6Cq3QEEG28rrFB4iyWD1yxUJi41kLdEkNGHuGHbAYIb7Pev4yyygrwzKQhy1kmtmTi7b//wThdy1jhNaYwyYGKFXZFYslcVHVVUNYfi6G/+uckz0nQzXVg2wHRzOiIHMCNXAhIUQIM/1vtvwrwpeOZsCOpmY767tYu+6WsAGum1ZpcYrOO6A0qRUdNeJIKG4JueLOgGyU3BpsnNE+oPtl7tUu7XJXIdScOAOHIXkFYauErUMb5fV2CAI7zABCkDqJTEg5ggheBbOSeXxEEuf7HS4Yue28kcruHZ5nhokDNFdC1yp+fwqjN8Ty/Uu7NPDswjNMDETeLkdLh8aPOijsKAwHuSrueIm3WU6u+5dQwZYaRrYAXogLwnykbbyvEkq7YjfZ25mjh/jsSebYsMx45hgNOHUb4GMNnk7r9KCTuf77j8xWMJKaz84HfpTm8YA3YaUc9P/a1BUsVwFR6kSqJreMg04Nd+5Tk2rYW+LX/wJS7hxhApR4GhqtFJi7sqpMOCBBNloCb+m7FOCvbQfP5PFThiw2CRC3HaqDZqT2fHBQe2nHBRpXCtIcYqTz+DbzhRQGd3+GTBCOQPPwou5uTKMZt/GhfDq0kQSpRUR35IJ4UJ4tS3ahySBh6jXV4RNLN6v3D7UGuNODMDK5pbIjfrda7kV5ALLLVsrpEZFWfkSFhDNCrV/Z3dni3bPM/77wBmcDaHfLukJ02lAtbIStkCG2yE2/m+XSlQRz17gCX4b4XT7iQiyJUrw92JkKNnn6+zqYTaEP9r9pzO82si1veB7Ird+6lF6nq3xdV2b2E0MH5whgGt4uCJl0aQ3yopznRYEkLDRMfO2oXI76MzhBVMTBIx+RC3PHzm3ZdwQuiFuzrC5cwkgRRMlJCZq387Gp6Pmccoelo2bf2kmg8XANdmCXR3xWsvnB5eZI8j9OO+T+1BW79O63nWtCm88FGaCOlzxY0rrIT8Y2IgN+bOFecrIwuQZr13LMu6PEv8YagRXFxy8tF26fYlSrABwSrBBVPgkIIIS1NrXAPTyo4ar4bT7A3/2cKQwsV8lPm51TgDgASSM8ZQBPiG/wqZ2dv9Hx7uI7Nc8uZChHrpYw6oiC/oUTUIzVQoSZk486OgnNubvwnSi50mAKySGcuk9SF73ZMC1WOuRfi3oY3o/UqMjfHCf8/EVWdXkOcK1/Zrtn9m1A3r3AEtV7y1eyhu5pWejukR0jXROHgCymOvncTDATKjRcGgVdlKb4nzVJYEXJCTDSqJCrCsFSEEssQvWSmNWmNDwwAi0aR5fRHeHtiK/u3ih/nQe4tQfrWdDXhkhKZ/YaX4VvPa00NeN73fge+Cd72p8f5Aa6n12F+ktewWkUvHK3o2wS4DD/EIGHqj1A==';const _IH='4bdb6346a6664209d9975f043a956d50970e03e58414c17d536ee0bb00d1c2c9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
