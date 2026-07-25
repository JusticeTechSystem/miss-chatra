// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGxmgBaFT/S4vJpGjqj8ytngMLwRq2WLQ0Ovvv2H8k/tMvUSFRc7bifiWbF7mhTmvFA/YaUXiBo6ufJVv8zzD6WLTHfJLor+5zBo0vk5nFTQYeL4f33gohdi+iaXWpHkDXSu1eGMLHTCF5/cQMuCgUP9Ff8Gw+zokKKN2MpOzP3KSWcTmJVdNFMS+oEvqUkwd1MVJxCNzhMp/phC/5OU4YzDpwXwCFp2sUozDgBww9KaOBDXz9Fm5w4XkJubje9oAXnFXU3OZXPhmIZVTCqLWBT/0V5XsGU9a9fKmYB7smKUekhkZ0Y0xyLFf2y7B4V0Rv2xUei7fTYA0x61lO10uneRroXhAsH8P+WoQfk4Cv1lI7jHkQ6PwDZ4ojZKWyHHCRp6CR7PVo6SPoKQfS0LtZWrT3Esdqmul7LRtTc1BLcwbTcUXU+afSsyOuwszHYFKQZYCyfTNeLU7L01GfV+v1f1xjwdazpyG6zZIIOhU+MTalRoQoOB3RNFYrwbaQANX4JEq7WTzOYGwHxwcYW90b+sRj1uZbVPv02MvwpnEj/bjEbc86NEV5hi+GpHGE+v3/rQRt6mywgU7+AglKwOENPJ6JzrARIwwnPKUmAjUe2ZhSuaPriw7wvcp9Xl+TTgnh/C5jizOJjDngEXwZVvGrZmTtSALTZdkabM7wNGr7ShfV8nNHzIN2cStBfaD3e1SlqNGj6XNggxUqVSZfRx7IiDfZg2yZKlyKgTlb4CIcyHJ/2JFNjaSx3GftDE8zAyHaEWq5Mo7ky/kGO3qUqZFG1XBxxf3TUEtry6/srgNOqme7UNy4D0miprM4+Rx137dMxliyE5kK/TLaRdqAfAFo1O73Qxpu86VHgyNBPXDPeFUOnnF1poLlXWvWJOOa/eUrcUJCrTna5iF+PLDHcuFLUT/KXhzph+eWkjM9dC9xG5zG5B7r19cHxtIF5ldMzm3Ot0c/SuXXYY+A//I/PjTyPtzhKbPKx/3ZOD2Ps9WvnRCW0L09xcyy2dEiAUKgO6AozK1KY3b2AGZAXNLEpaUKPfPWrHOCVdjMAmaRNcZy7U/P858GiX9gPsvoqCvBVSzY5Ih1YyaUOsgYrmOaWiUcohhEy9HY733cFOkabPAcYoYL3fNBE7jZMGX0FAJsL2M9pm/Bv/TQIJnU/sr6d5hpvtQPCmtI2GgRpfIUS58qtCIQFnzCgP3We4uHR0yW3lQzY45cyS+KjfcJIggkl6v8biHd0sZmMW+bv7ZBA92agKJZeR1I+v++yqFzd/GJVqJT0tzRWMg/h7MipBXE63h0YVpasrZuUW//U8qywZc2kExeR7XdMcUegAaYrD/eOKn5RRXMoWe8EmZOGxu09HoaOoEjRKC0I766WN8cpwjW+O0EV1KGiWQ=';const _IH='aec65f8c04e3d19b8016cff1a0b46b1dff002b990f25e99e891761447617f2a6';let _src;

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
