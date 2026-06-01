// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwtSDfGJs/EPQjgeefw4YkTMWWuhDDuFkAvYTw1Pb9nBUAY8osKu1EKMphl1xJ5eKJfrvZqztaGgLUwlh0+oKXIpRmxPl6eOc+W3fmTZACq0G7ScNoUOlsSYdOJVheWbEVahSFp0ywvgPtHoEQmupXfNm71vnuPHWn+8ojewXZuoh37bb/BpW5Sp1rnG1868IDG/QttQh1VcIu9v6uDfYVtES5luigon/ziDDkfG0Tcwnheb5BGKMN1XC/Um05S/zsm4B4eh1whDN6LaPRfzAhsGuFYhhHZXoP8FjjwrBb3XOSEJ5YCyGfyTVwdmb8Rz7uYoxATL5vvnJiWf8+AAl5Dt4y2agE1qIwnLA8WwEADEzN+UeyUjkvEcq9lyMop8EUWp1KZ7Dvb2OZhQaM7JVIOykD/J0Y9MdcS6JInqbY31zVyczpzLwgbFdFWeAwFFz8vlauflP7z6IzmskTEzw6UAOOAM/rZYcogB3bTxQFbADfBlGX4CJFroq4GcYZbgYMcg+Zm/ZJZLlRGxTYFcIJj/GWuEOUbmynAvaO8hw1l63WPMobXGpbJAmv06SN4EQ0iwgqRpH8y9lfgMT697uxLUKiSWh6xBJeG35vfP59VnskmH691el8nANivaMzbSn95W8E0ylmuM55hjUOPXVIIB1WyMosU/0iVOBr792FeI1OT2UWEvmCVYHua1IdTtm0aC/vxONoweM3jG7uoRePN6VuvUOhngUT80eya8gO2DBKgCzVHYZ2IiEdfbTFybAbLGUECLtvtCNck9tzGhZ9fq8l0g68+3AA0ywCplEiXJTsPILqVCI1qLQTcUaqogGspVU1t7mzOnhPPOyM09m/kIz8meVtHbKJErnxEFOHIxC8gebzSdlzQ6RVqdNMVU8zaPPZjKXBevsQSc+0UfcoQ80swt95/w+BtrtovkEVjVq8oPx5mZMdk6lpw1KwbIul4GMqRM1BSAukJtNZbcN+gLHol7bbCHmDO2B+FUY5fnKvB3nXoNCr5FCuC+qd4A7To/qXCbHf1kYBwqbYSWRvaNGom1CYwTSyv+bCR9zgPhM1jy78q5Vaoo2aIKo4pVyyLDjqSR8GygxECbtI00Jn2eMkPdcmaTOg4Aw8g4YnZtFGH7kf/Qq3liv5F1DNm5G1lZasRQOSEUpSITBUjd4NcXfBtanxM7/BSK7ffNgXbqmt4a3v5Rj+MnGn1OxUOFRVmIFE477Atr7DY=';const _IH='cedbc6a93779b3bb03e886eb2a22baeb2e2c68b5192907aad7faa21199b9d76e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
