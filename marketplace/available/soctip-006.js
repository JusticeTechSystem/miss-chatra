// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kQKwxlY+/sDa4JQ3auj94yVpVB5OpDLez4qNfuLEAm+2lfwc2N/cZPDYhC1fvXdg2CxrS8SuOGnxrccso8ALkaXdmLNNsZaGgeYxI6eaTkr1ECwgbTOyjQCa85WIDcGOcxt/SnoMiOT+SP8tOUFIOILR0PkSlSVDzmSuPvHhpFLPqrFBpW8enZIuSvgSJnM888Td+ebFCZnvZNq/fCtVsqjalwKJK8LKmGjnCYjys3r4sBpkqX8OkrTyD68xInDkReocnEC/7kPibM2GYNPf8qn/Xn7frvZn7xSxbt4PqDFib5MDPVJy40ne2IKEbEnUeXHpMA9vZ1jF2G3x2rbXG82y9MSVzXzI8fco90tmUNDa8o2yBXGl/UDKP61BJGQu4mhefw1dZr7unaNwlBLb9xevyK2gRWJEjeviX7K6TOPAm/CUUalqjudNpBFv5znNSBKejZPZgxZ+P7p3x4jetOvtzN1L4/y6N7hRZHEItSwH7u91+LWc+AHkMw2bnum04SfmuDcd2ohpCDRXGlft5X6Snb+bsMRC2l3Y7C/uz/4igIPzyrQfOHi27UB17lUcPEQORDkPwpSaxwm8oMvHb8Kco9L/M7o/LPBnvhOwg2naO94kYdB1JAl1/QdD7S33onYfKwPwJAQpCr17TKpoxNecOcUbXk3Wi45C6hiG9mjwd7rm+Zdk+p5foHfGFIicBs0YrbmDFJrBaSqyL3qi0MKscgypUkN9Q/ddeRN02q7LkZmzzJogyZvxkcP9uTZ2/GI+S1ttkZdAhNuMvOXnLbze7PScNuKAMzvaL39t0/1Uwm09umxxJqKdN9gYnP4ARJ2Z2wZJ4vBj8D14f7oVApiNcyDdGWzAAdQpgSLSapP8MedwLaRDNY58xg8lmdNLgiiuyxzS7wGZyMskMxIwqA/54uFddhI4Ot7GXEs5BlNHVISj3SP/f71qGtADWhf9X6tfmC2t2+zJ9pgFAZ6ra51DV9NxmulEPwsaydQ5tbiK6QMd2OxrDfOMMEPUlA5hoeWo5743Xg5soiRyBS0NN4wDd2Bv6xQvVm8Mxb8GploaE9tVuSCtpbRGTPyZ5vqJqyqhKsMDTh/saqg=';const _IH='5563c24635f8d5b0ec1756681cfd7939b10cbbfaa556a59448d80ced31ef3ce3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
