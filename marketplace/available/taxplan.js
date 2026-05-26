// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l2qRohzif1i6QX5Djdzd4D5NHM5YH+CWuwqsAmSlSSttzFCUqXzoNRt5cAG/D5bQ5pJSD3x1V4Yyn0dc9OFVa7b9/oK2vxB0SEi2X8fk79XdV+0JmlzW1qLRy7Scg541obkhAjm1J9vp++zFpl8HVnLPnB96jZ6QzJ+25V0hk5W+yHqtD/YWWFzmyAbUvoaNClhoFl9P5zZ632qkGIlp/TFhlTmb+VTffR6ZISxyVgQgVuixDErwpXyxog0FTO8flOKGo1O3IEFJJbJo9eG8M7fGnFpI60X6JX4J7sTIGp2kh2OxFrmh0i4aNrBD/ZP3yRsWtgfosm6ArTSS+PcMugHxWcWe6IJ/Ora6of0RanTDvFOApcAV2fdzfpo7lxsKiLcUuGI47K48R/4H9D4wwFhRouAUR2rm5H5F9mx2St3Zlwo75Vz3cBK0kGVYXg2hOfZFH3n1VQkU+ntD7kT5pjTODKx3NfJiDSF4sMB+wTY6n0iuXc24lrpFaKD3hMw7KwdjCdWbELT8hN4LrcBXMQIaibY4WBhaX0SSP8VHeTURYNB0FW97NPwQUAN6snW/rFjs4oC3Ea+NbSV75qHsKeRt7t77J2yg3sjWBfFCQEc8P8lySK/efYsH0ictF46ALXnZWmJaTwhWYaPe/kigxBPw9EferdMwoUkFGBb+XQ9JCtuhd18FI5wzA3BkJKObfrPtqENV6ug34TdBXuXlDRFalV1BQ6UJMdoU1OgpPl7VFY+D8NeEHK43oIQI0HD1u51tbqDjYemY1StYKL8vmMbJTU6t8rJM0ytq8gM9VyVrvbX8N23jkIvmUeANR76gORdP61UJHdb4EObIGWFKBmHM4s98UqBj0U1Ork6wBlh0DMXcW7y4kBsffJX8Ajdtjb42s4unPz0viEawRF3A4v1CUqN1XTT4N0QAyn+1PVo5BArQ5gOX1aGM5Fw7FurWfFB1JVuBNwMBzG7ykydq7cOvM7IxUXXcetWrAddWlgvf/TsKRSaGmBLGr1dEvzSnq5GyslgZTf2gol60n2tbrw0wq0Gz8hX24VYuqswVsqRzT8TsoBIg7JI5KIMxtM78WLiS2IIRPnhMOs4zTKz5DWsx4wF72rZ30qFKlriqglGNEDag5Jhv3BQ13WcjVt0DNjHYLl70+4NHec5S2WYsS1pLtSBouf0A6VpnmGXFOVX4uQLmAlD6mwdrFicJiikclw==';const _IH='30b942f455d8ea2e7a89dae8d673b4dba1c5b74cd5bd2d772ada5e13dd9d3c75';let _src;

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
