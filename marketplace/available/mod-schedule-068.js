// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3xfo22ej1o77LEJnXWA+Qm0KBrwLKmaho0Kd+eUUCYTFhp021MZ2wf6IKI6q0E7s7xWs901fakI+VhRZ/+fN9TZuyWvAk7TbjVG8FbX667o38UZX8uYJg8mMdTICCiATzpRsNYFILREXzH2MUWW0maTv5OpZgHGLN/A32noUxYnLSprmua/bT0ib8u8KW/2KKR3WMFgkSrrJSDPXXvbyjfG56Jn8pDXqpw8kfgmp/9y4iPXwA3SAfjnxBNYKX6kIswQINC1EQI7Qd6gN/C39SO/OGdYdSpwSb4MZZ5Td4+Pu2pa1J1y7YxMXYKILZvJNgaCjIBzXpkG5OOL/+JxdepPxaWLRebbEaxSajITE0apcQ3AfrGhAYErrwsC1iVdsnpxenCzh9hrVaxwp6hcuMOz/4hOBakM68eheM8VbfL/IFggDh74+zEuMwGyK/diZ6kP5O4B8eVHqqwBsb2/60yti65cTDFZH3M9O6W81arbike5uOuoQ1r7O77Lyc0mIke75LSsa1S4bTueSOYF9ImPPNBxpNZMPoKJ/B4AQKKuv5bwSNiDarCz4L5W2CmxW8w8PtDKgXCplCh3RFo2oDAxxEKbTnZvI7UcmwrRGL0MZUDgEQBJeqw2RJzPwb+G+LkQQjh3dW/S/elC5CDFz/gJw5ZWHAeZDg61zph1sVnuA/K6GEVZxiqxDlcWeHK6LbXHc5cOigNEIR2iS/fETO38SGJuoytm7TyynSemNkqpKcDK8Orn3/cQQlKZ/nEBvvx8aKJlyzuMYCinR/qw3M1JTQCWoxnnXEJT22QaGRZZcPlHZ/rCIajUyoyUCFRhdth/TT1pQ2/ulEq5crwMbGF8SX1bMZZiEqdTiXotLy4r+aXj4KTPBQI12JZV9KO8hy5X7jvCR6lqSW7/muSfZHXohbk410ZWFjPlwQ6JD7X4tW6nd6n0BGmD+97ez+ih7+7VY1QTKMLJ7IvltaX1TkM8F6eBYg6J5vyemiVhVWwd1hmh70A5h9TYuFCBARfIUDaeLh6gHEyO8A3OZzSLzkD7bgmFMfhyVN84VIRanYnyffTIF/uepEEGHZXIBrnQ5zCyNs3KcGIF0ZSNVQa0YjRX9lQZWY2xX4Nhmid4t7lwhQkHVaJDuw261AY0QIcmPNFkhhUeDy84R/ajKPVO8B/XEg4c2wdZqA6LE8V1Jv3OtWN6xMa8jLBAJNT6xwzWie2DPyedHUbMRwquF+/5A8tRXZomppx7af80v2PqD9wJZsaaTLpneUakHHVoxqORhkT+lhWRRcqptRbPXwPqzqrabBPahgWbKg448icFrTQk8kXrB11d9yVFBPs+BsXx3z5MGDErRZQ9yA4w/ahwHef7/s5LAyAGVLDmdo1DX/XPbaQIa1aW8G8l9Nqyt9yABkYb63/ykv';const _IH='d8d3ab8ceae040e1587f02202339eedce27fee12e659768e58b0ebd6c823cb9f';let _src;

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
