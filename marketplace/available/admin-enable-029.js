// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFMck+9vt1GmgCBqwchAFdXqrXf/p5OTKkZr8SrTHfuMukpOrqsbaB27wFiIcLGhJ8aq3pRQ0UM/kQCh4y8n65WTD68lRRs7F63AsdJu0Y+qqxQHQLcSh2QWU8vjhcN6V2jlBSK+2+CxK6yDg5Pc3shmox5z1P8guZAVra2y6ABaY1aNy+zEMF9n/nKi9CTNJzbgz7hOfUFuOwEQ4eb+8GBPg3rQTGWgs1K1iNNsPWCpXbnU4z4ITOMeK7re4G9naPhO9TXS2PpvsSwvkisChbk1jrA40iE678rf0ommEAGpuhVGDYU8Q9vFxWsvGWCGc1bhQRtl7APCKmzHKTyvUUjSFkjM7xObRM47zlIFgcU+T7hOEErhXvlLGm7ctl0bzZkYOL1dvA1fO9QNadQlJd1fSExCF5GJC5aQho3yA/FjsRp4lCnyMzbYw9P685MCNbsWxXd72t/9pfgM7IFv+PLefPzDoM5RMkceXUuHrxC2+5lFihaYrtfL83zxMUNKC/qNcJTmmh9A/3gip+yOceEI91UXRvKteJZBzl4M7g0IBXwvpXnJ2k62ItLRpmwudzHywPpLYSFx5ujVaylqTRcAclFxyoEkfgLTRfZIcIiyflUaqBPO2mlp0Ruxv3CFcEdCTpIFBBbVX99lz2KgbPHqHaySw0SknotxAw6lRXo0K5fwM6zJDVEtgylpd7t+UoHuybAnsTIsO0I2KlYGFe0n2GqVWarGfO/tNlJsC7m9FxO6B4TXcB0y5/h8QuPao10oxGSlR+2wbHWvLjaJ8i5w/2GNPKImFtRxlcrLfNoE78rH/3KswfTYed3k5ldA7SaDnCr/beebB9OfkV/BsqNZWr4o4TmpfSlzgy2mrQ5KG0ivpbnssutfJIIC1eg6JlMpRCRIhswyfj7ZJaKhlfUqI6kO2WDBlnPirCvIVgmJdspI4tZFNq1Ue4hAa2xgQTiw7NFiPS/oEeFG132YQQi+/5LijLWjclVjZwPsBRL2pRor+xC/qAPd+0P9w==';const _IH='032ed794016c2f325bcde333c3b4aed40d824d81ce2191024aa0a7cba6e053bf';let _src;

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
