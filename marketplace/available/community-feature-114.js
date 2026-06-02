// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IWdLVrWPiDcCXVawQNKrNkRE94W7n7/3dmnM/4zPE6RydhrytCy3bTQzsg/3D6x9P+fAPu7t26Ywfq+MsZVyxMrISemPirDscPrrbhgZY8jnIp1WRj5X4PdJx5jZD8MvPV2GM3jjPj/1CZBQQ2O9+eAh2zpnbAaQkNv+4C7p1ijDDRlodwdq0QYg7Y35OGo7mh8s2fvi+9fKi8zEviWJVLvbxH9TOnnxY5DzcYmh06Z3jXzSQwfkmU1ual5PIuw1hAXd4Yw+Fnh9Bs14Q80mnup0RZy84kWCdTc78YQtLi00jO1ktDwYpVFO5pyWJ9OXkyuhNH8BiTy2hulDRbqFN58rLWxcwEHcqqwxOTreMSOH8AiEfWH0dCmqyBhGdR7uSA6f3sQZYf4X+1kfnrY+ZEfzeP7VJzYy/YJxjRNq1dwzrPnmlBBXsAbUtmGPaiW4/vH3nEppxkSmc5IddbSJKR/ZkPSk32sjZbY+9SjbZK6l1YiXzFfrK3xrY9Utnfyn7ms8XGgSXgNlC+ZCARGyU7fvCg8eZZe4lmPpzwuWLX5OjbmujhaC/y8NM2H59gabPIO3i2v0dHYZ4SobCVO/FD/iV1hYjprKon30daiWbEwnGeS2LkY57oSRuOTXVPuZ1nXjaDUliayCHbyFu3ihynTmSmM2/YJJ12CcLGi2H9wBIVuDoe/V/TwFM/npyQEySCRJ/dUNazqr6upe4Oo90900Gz5hR+/s8QaJaUhAjNr0Mu4heKI=';const _IH='1555f9558a7ff631bbdc64f8bef0ff9a0ee472ba05f822edb979791148eeac7c';let _src;

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
