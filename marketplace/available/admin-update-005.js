// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkK6/eI2855jXXQKtIiPMqhxxsOzVI77JH7ZCvXX3eaxFR88qRiRPJN5jn0HVIVf7f4Wbg2PZXrguVDaMU9HPNo7PsT6f3bdgh91ZobANb97UgxIKKQepCGeE8xYo58XZHl7vNb7xyeeT9P21ODlNHiFEOA8yYggCJ0HgoGndwXwP1HTI8LtbL0c19zziaeBnO31U+U/F840Vqnl4+45l68+BG+BhpL6DJSRS5Z/GVlus5lGtncOtsoPL7ku3WBA8sH3FPTlhbGdkdI35qMUOiZaANdCEQV8/4uulbouIyVXSUy8glkITh5CP5qaV8Szxa2SPpdLMX9NoSPDcNNMBVsnfSt9Lh6AQH8lZC3hoNog/3KZnuEZLMYSt36D3hNC4XAfAl1lj5f2eD9jFA8hdWC1qDnr5g2k0+AcBgGXzomfbcluJ20z9RVlMx8Wrpfx1Z5xcS2kagKLD5qTQYMeCG6prPG+jR7yWdoq5KSYyhze0Fg7zvZ/r4fSfOIY3Ct/LytfiSIvrDy7vKtNKFCYzjA24bE4Gc6GGu8nINZTaCKiANQnakO6yCvwbhaVWZ1GNVGoH6GSa8zttw7w9pD8mhixTOI0cWzosOVTTUEG0pTL2jmd9pHKoRSUHLT4AcCWQoY2AUho4xd0Vad/gZdowU9lMF4DNd9NkkF70TTZY8URTZo/yVKhpFbJmOqF0bX4hfj51W/kG8SPr+Lw2SEWeCW/YPh0E0Al/KklxUJXTBUu4YHA5R+ZjNWzIWug7GMYwciAQzyzzJ5tJTM3lAiwUJKntnJIw1yNSUlofpwUrDPqv+NZ8vB7l7euYhKabMSpJygx9onlpCFoIdDMYyEwaSqXMalXDQwUB8doqNwIK6qQzO87psHtNPLR/AKOufw+Noe+Q+McL1YHldL8mW+5zFXd1YqWIZ6YbSOhOWQQEPHoLx90SLmMtRb26n9IgxO8ePsoJGmqZTmmcbRZLrdyfzhV1UuHKQs2UqTuJ55X/Z2uwutaJubUhMwQ==';const _IH='2d01d70e891ce8f9d39ef2c35aec387cca61ed734356d74d02fe231e4700ca02';let _src;

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
