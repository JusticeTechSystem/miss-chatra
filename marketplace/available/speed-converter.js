// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sHiuOBCI+4Fn8bejvkbjjn7ABrnG27oUWsd04qYLQiFTfjkEqqFz2ifXklAOPByTMFqWwCH33bl7Ps/ZusrCbNC/voOCEEetzzIxMRdWQiYXEuH3MY7uFTmmJ1E5OWT7j4rGH/pji51+vUD+bQ9xGPi+hGePvXwy9oPCaxsnTIY9G2JswtJeZuMtF6Fdhr9YJHmfGY5FO7L/FWzIcKY3uFNOzDKNO/1Zw+0oVbOsVg4Ij4AW9r7E3ey9ebRy4Bl01f4JO58WVZ+jGZnuAgt1tj4MPG9QToRj/KdhE/UPHNcGOIWeeQk6Ecnq7TsxzHkK3HkN/rXxglQewTwfOcBSfrvNpXDiubqH4VJwqYXz+OjpL2DLrRAgIaMyZroDd3i3q6f9ZPMcPXSqY2H31hTmqscWK1Xc3G3wMVww1OmbI2JOYdkpSMHpsbVaaZyGaBay8ZLfRS2WDMf+Kwy5hRkcTeu2j/WzoyB6yBSgEMLHcMMNlUPo+JDBdC1hsDqqYHdfbAts/pWaFdByTtGp48Exm2XXx36Q/NctUls6wrqsJzkZHIyGasWSCU2E4g/sBpffNuADRPce2ctfstQn0wtzCzrsYMR32ebuK5ll5IrnH2YTcScNU1zQwzQwznz0MlTVaRMBw66ovaY9LSJo0mXGB9+8k9Uu9BKdw8OB/wInoQKP37DW5s6tWivIaNm9rbiwHN0kgtn6o0xJyQMTv0SWFI2PlUSD9cwf7RdOYoWmP5Vy7V8bpkPNSYFLIV0RUvyst7JRWHaKUtdkwAxZ5T13RtKPl24cx5ZqsZqxPFzcIxEKTPe7v92hg6kNQ0QX4RaaTohrGVLRN21rxBgcxmH/IBWfnCzUM/0eZl9Wvn25dWr1vLSF3MycbBG06wx/OtMh/t4azqOJ5AQxrvsw22Uu5b3eSlPzsJWbxHyBU1goJgNBsUIcIJ/kGAJXtiWBzWdRk6o0lFHisef6XnddeqRZiB0T8gpW0tRGMZLCuDjCqpDCT0+sa6o3LGJicEfEyCpqA/pHQd3saD6K28B6Uv0Lcg39iRz5pltf/5mURq9/OKWBTY8BBpLRZrPUf2r3s7VODOHIMIQtvtcA4I75meOtmWED4LM5beAQr9gk6FzwR6sZ6pwYhJ87MhAy3DuRfhSwq3kWTCFmHtNQDeLakPS6w38mdPQ6VkLaIlC49DCAbr99qFpsAvdv7rCVTQj8qsIrfIJTKRzp8s58H9uDWOnAsW9XYR1+IfufFybQ+pCNikhyMgoQ96r8fspcuGlUAf9AIRuAwhHau4bNJhjN0roqNWSEHYiSiAGwbzWRoJnKfCLlOxZcXC6+MtQYlFTkn21n0Wj12a/nNnK5aBm9u4t4IGWg1NH6Z+TMDXgi2HDkmZgqDM04J5V1i1TgarXHVZqObJYIlNl2uOjYoawe9TW4y2dKwG7LOdnKfUKJoNMY7maBux1Yb5skWNiEo1j+lriNFC1DdoT4UypnkA36oDDw/9smX9u1sOwJDBVIcMLb9vaMtXjQEIUSpITZoZszzMB/NTZrAHvwSkhcusFeNKfNmLZlHprLusuIJ/eSe4WpTgBj8QrqzvorWpdi/x2E+VX2TG1sIMez96MspuIf3uD4zdK//5JYedtR+qsGIjgScrK7UrR8o+hBtEEOyPKYjLhFsdrDtBC8dLxcV40s0tTCVfqFzZbZj2JVRmbiMc/CzoIgpAGk8suUUJOmtA==';const _IH='d3b90b9b25de7b9487a505339a894a03002c4b828928a0e8315df20871e89fea';let _src;

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
