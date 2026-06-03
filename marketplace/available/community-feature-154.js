// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/LSxaKLHjBEBiLIaPZK4jkzwUSUd7U0ucTCREC4fjZqCiS4zj3joMF23QgeYSxnyObFXIfk8EiIqIF5VIT6Aq6oIa7zMHFDqJRc0zHI9zklQoHjWESUIFiSO30brHK0+mfqcCKicbMnYBhXELngx8gls87YY+bPtlvrCfuM1ANvzb+DUda4L1imiFtvUTNYcW7YWIfmtB4js69WpPvT16P11UP/TPjRJllqy1zwyTSeSZp6QlT/EKS7YViQ+GiCrO/NE6QV34pqxT5M7laz5fIDhL40jhNkEOwV7ab8b3mBzQmWnYnp3uo+nfuAJTBpUYW0+hbSuwm8V+cQ9DZYEArq7C487GgaQ18jd9GiFHvNJo15SuNOEaswgnNMZ22YAzZMnSCDXO0nRxapk1SO61Wi2VbVCIbLQskbvKr//ZmqFybX3mwDGHTbUG2rvOpDpsCry+B0ZRAV0hT6RNOrO4vHe4Min+1H3mShVtjRMIXKE5OY5zidbbqL9y66Z5XJifcAdGM/f1V/bHXxrHdxQSRNP+uBBRvwOlH6bTaS+6e7sOpWRZx6QIKooJ5maMv5ytrNczaexPKjbj9zZjayVEwE9a3AL3RBMq32WaygAO1vyru6RltOsYgWzqoUJD+zSudj+4BS/h4JFeNJGCrDxEq06qDY4V6Rx/Ezqk2sZKdTl8oNMeTfVX/s870aVK3b30rbWpgCJE9RkUNNmigZxby+SIsIDEZHUpgM83hHXoy+1aRpD9m8=';const _IH='34a87b3051f3846d87548f87a5e18e795f7fdb0f6b3475e4a6a52867376e7255';let _src;

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
