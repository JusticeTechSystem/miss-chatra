// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HWUKj+9SX/p6oYYGhmcroCQ+CJBpTeiAHv0bGxHh8VKDUxcKFnCjkpOGw2mmWqiaSQksdwaeSw9m02G58oka3hCM18CgmGOyi4BDWPs85gcijPzXeOsk55oxLFEBqq4kHIzcbI+Xwh0bjwA18Io3DwseyphjruATGBhK5mlUdSPChuUHcxkpxkjLUjvUGPvxuHIwjCBNSd+6B4PXd6/LmHGyrDeiHkiEUWaKy6vvhSswHPDXcxS1Y3BSTAxOGkh1sP4yiOSPR6v8gIOnt2YClxadpl8STUpiJuq+V7khxK6FeQ9cFELRHDJdh4arfyitnHYX0tbNOmbD6QWI0pv89uTiHtwlnw3ghi4hyvWSo+ecUBAkirx5aA7kEQDedlgfbor0lXInUx4huGsYC6za+uPKL2CX7ePEL23WOLaUia7Qf97Gi2DupseUKL1siTyDpbQRM010XohmSicm+x84I335P6fGWGlU66Lth65a6a5oZXt8g0wsyWXZ9uqKvGN3eF3/qKsJgnYCR2TWJeMpaD5MQWVAk7QBxb8E66fyLQ6/VaxHX8KPp4faOqShkaKda2c9X2gqMLzaYHHTHhDK9DJOZLXO6afp4659r+evSp4yPzECd2Nf1x+WdKkS8WSdzuMjA8HlNfCZFLxNC97bw5vGl2OiWXQzZDKV3B21PVdfC3M4nDzN0LurPPMx2xP11TujzCwRELB0FFm1XrxaL4s/kniNqX/ebFeeL5EsX+hnjhnKVM0/3LMj9N92GME2sS7WXtM5dkwAr2gUa6axZ67nPYi0WHfQXuZcIZwqsVs8yyOgmtMACq/TqkVB2qm1vEYj2pxrlQohw0cZ/+P1sllzo9iQo388AqPU1TwP2nx4Iy8qMNIfmPUsIrv/M+hOQ8IQT7y78q91qA8VWefCc2C3CfQLIF0z1GFlj6ip58jRtQVJTTva+/aMAblI3q9J/3w4JLERVHTcrWD0KALk6hcYUXxPOR5pngjt3nz/2YyTTFA6jbiv/Pk6eUpfSGQ0MdkB39C+UGCyugDSJNtY+cgvu76ouLubnhcqq/EWe8L6hg6LAj4FZQmQtG0ePnI4EP460tvax5J3M3rLluKnuVzd34N+ammkFaxkNFfUg+Osl5pUCyuxLKv23v3brkwBQr/NoO/WLb4Pbre4sMSzlRynxpa96QNR/Bx7lFtmGt1QuXlKy7qD4aaJu+LIkGs69o1msciH39M=';const _IH='e0ff7cc10700fad675f42f596ed03404bce8a729c35a3c9359f70db788638b54';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
