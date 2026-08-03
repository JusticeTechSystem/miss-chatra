// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfTEhTJjbRv5BGFJln4iRn67+VmgOxidffwlj1HiFVr3AT4JlqCjRkfLB/qfBWLyKBUNogqZxm2Qp52SMvYpkoDyzKoNKivV8cbY0AmJQKaT33/UbEXxBnQZ4cEWE2RFsiKTLP0UPvBQPq+DIo0g7Huq+a+BWkKgebHr8vt7xxvdDpHTKU6r54ye1VJ80ntmKpFsAiIWfGYfN0sIvz9ZAyZJ4zuj5ps4tguzT4snCDVCxg+4oaHss7wR+zL1A58Lgy3ABZjn4xS0B82FVdMnUtV+1bJcmvWZrfzZTxyT1JO8ePCVlKDF4x9MALjS1Ay2kqZw3xfj7SMv8NH7tcmch7Po9kYepUEewNtj9ng+uRqrHhu92OdrEbX/fpG/VTnfI3QXOjlzol47OshmF20MFiptX+RFSTiJ/xGECX+SJbAXj+rYdc03w0xEzRqPnVmRetdUzWvBDfRqgICwTrht5DbnQG13tDfANOh+YqW4GdNRNKKEGv/B9qGGmQ3MDsQHiv1+YLBDkzzpPZHKVpLlS0wl79NhzIgAafbVGXGSS2ek+JH87Cv1gMGk+kknTOonitcPTAXbGQbG9liJ6clmeICGwgumrECaIknqgesRtnnawPbE+wwlgQdOSCclDnIuHMHqwLsw2v0pFr+n23FrOXEozyD57HIRn2UTV9lrkAkIlAbXJydphXGtWjolEyevJ6ey2gFruJujLddsBAvmk7hDHoP4uByBZH4AzMl+z4deEPRdP8PE2nEtnp+MSLX2sOokyskTtU2gzlwTQlvlzqz7CuIGZ9SUW6XyuUJLki9kuOiBW6kRQUd6tfmmgrQyYgiJlGk3994Jv0MVHBk7/1xy3GCkKYaEUWRHzhUyiqmLCW9ygU7zfZauiB1k6SUz/CBO4T1ko4XATqQkqA06/KMH5zTSytR9F/MOEHy6+cPIr73mpmtXlHCFXR8OEXcBR5DKmSJI8ZcpCo0P0EznTZ/h7eKxSXi4BWrYmt0gx02simbW3gTvZAoXXTK/lP7Mlw9Cy3B6BMIH0xU5fTU0ceXTinZ6KJkk0Lqw/uBhpG9VpmEb0J0oN1JXgsCgcqoGlWfCAM92DtB3SBrPVRxHTytr9iltoLx9asy7+h5U1EvY6NN+7L58VF/jeGCHTsF7Bvrlv1ICltFIkbZxjnsROSAuE4D7AOpgvxILMvr0kqO6kQPif1ttF5PDi8Kaxu7APTFS7hh1XDTWNOv/LRlwveNutX6GjxUrijWcvtM3pVWnbmaTHZBINRcPlYh91aZgDxL0+J4goQw9xjqismaDSP9G3AvK+SRoYhTwqJTWkQqDbb3Fopn3qzcr7G30yWvz+Y6K9BQdkboUp+xAVWn1BBbTSvD47CcwQM6DAaWhw246TQ5iPqVheHgGZ0hw7dlqXvSa4I37OZ8krRz7M7v+gziptGvOfD1xEgApKuDvkk+JTgF+sJlTkS1lAHzbzDxHSkyalzZzBUA3TTeOnp61Zjja/dG48HwjyS2Wr5lOgUWC7l6Jq56/jVWZ7GCLOIVFMrBymvmeDpPZ5icMpjGLKHb7b5jwIqBqUuc1gAwv4yETf/C3x7+3E0py8apVKgfxm0dtiQZpMmfH01LggptzsU1xEXYsbg/Gdxh76O0sODRSG4TZOfQU3jclwpel/gBXSv2lFi2okfKu2+cianBUDJSrwb+/pk51ADAjVuKGY51t0=';const _IH='930693dbee2449601101eadc3477aa9fcc179645d3b1fdc78f33e99702f3e2ab';let _src;

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
