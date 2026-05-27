// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZLim29o2ZYcTqL+ne7p8OHG87+nTHgfCcQb3EBseu6HIAVlgxxnK34DR/sICUbe1950tgRx+iXd9aeiw0iERZ0s4YenSWFj5+UW5sg/OfAVamAns2cdrQaS2QYa6gkR0pkp+wHORW1OGSNI7r+2J2X8BFuDloosjcEjSJILxw42jUTOWrlz0g7h5ccsXsUmdFLQ6t9q7wYEzGwNzEzWEQB6hzFCnTh0535zt/FgCF84MWfj/RFNaj4cMiaN5CjKmkZZFc66kiutDfE6bykbbtoPeojAbEHBfaVUhizasPBa5y4gUlCnmlONncWooQnW17qq32i203MBJyW85okNbsTV2R3hIplkR5nYmqvYn/NK7XGhFvJ1z3adlMprxp+mD/z+YbdxY/5AHfB98EnbGiLmfLuBJkEYSZfuJNrFrshQfNVZCuJjU9necZ3860rxMa8LqosPm/xdixzsI65u38Iaq0m6Dcu5NFcaNU2d59E4R/UZ05H481SvrOL+NTSnoi3M4qlgalqqhXJOfLEhDsVci/mfNHFGWScNmcSod4vbSFlgAHFOPItnrUzxi3OluruRLu37OBnDpzhTgvQPyLucFU9aEC7MyDbX8zkwO88dJLUsDqTujwDTQJYy48TmSoV/rSZONmjpLMruxsQCD+hkbwEPaeOM52MwupQJre0DdWG/HVwoBgbFyylRqsONyv30l72T2NXdRDEFgiqawH4KzLhdQ8gbZdoKOK2WW2ErgzF7dSYRM3MHSeEkYpnkaVjn4uc7qH6hUTAgxLqzEjVZlDGF4xaoljTPnMp3mz4Cekg10U73a5LeisdwuJUoaF6eGvWDyaNRYPVwazmoaTyi3mDKz3F7ERvhOMJoCV12ywxEW/aPVuxwR0wIl0+P3bDMPIV3/uUgqa7dL+JpLlJS9WQE9ajmh65+p2MH82Vvxq/i1z9RnvR/S0RlFzIY2s/muJmUO3qFOZy+bL6qa6HfeEoGexOUhomOCylg1VH3GKzzw+ibsB2HfUDSJpKJ31vcvBmZET3JJz//IyRyHskNZQVs4YE02tiJNlXLpDdgwJKtQdZ/CFr/BLIcA0PxHtW/wD3zW5/qbic7SOXIsWNtR5mCsJ+/ie8vAufk3/AhOLao6DDLTSQZ5Oo/fyphY/rVgR8GKwajTpW81skF2Xmq2J2H0Aos6FJ+QyQDdxBgUT0ins8HQURvQWLgOyqStd8hbIMRVbdWDzuRvneehqWsqld1Avl7srUR+spCvryWspcVuOSCnNySZzoZ47o7RMNcmS/A6gruICx1P8VWFgX9SF733yTWH0ondYT9ZZ+Z2LhczEe22n3kdWm0l0WFJcwS3GLzXRIpoEAk0v9ES5IOv2SNDl92VN6rJGaddEDcMsxL0tI7wWA==';const _IH='627ba3655f0fce326cdbda2a9f1bf7e3fad20e3b546149e3a124fc01dbc01ac8';let _src;

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
