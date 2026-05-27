// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0YJiwu3PvsgVasPzOhgWZxKcqAncxZq96STKBcKE2otHRD/ojH7n2/K78aagO44PrDSuTVc5GPgIbQZrH18G5HXvRWXjZfGqVF0KwSC5c+CU09PDMVHGo3RbW9QMBu/Beqw/dTSyJpui2/2ZSPZYcV9vXlcwXJRToipWxGXiuUy8mDjrA8V7lvKwkHABHf8CZtVmMdtCf4Wb0I0EA4SqNnjjOAZ9vatkqIsz/MdXcNAghBPAhiTgwVbpxD7EG34kXK00C1NA+GO0o91XkMrXQoOb+EhXG422WaNj98lQyv2d+TAv73xjoPOknmT8lfj9MatrkWhHnn0XgcgyynPutYp6Xm0THb+xUirq3qwf7HouJb1NwuGxOyaXz/KnyoOp8stytqs/HsNTEndgeezIZ5VwqRuTVPzJxxtCx3cs04CLdn0YcWGwmbgvallUQIRm8oOUvapvKz62L+YAfzzktV1rmnerxM8aG4x8UN3aZ67EZ6lu456lyaNZ1GCpGZKK529oGj5mCXyt7JmMdTT1i2277z8AcQi/DCVYyfpgAzWKNc+JCCZ1XOK8zY20/Vl54dr4V55rVa4G0ma/QNq8sEb+Xc6HzwGG58FYo85TdZPIvGCtg/4vQ1BsU41eS0Ai7ICvFpn2sX6Ax4FlxBrA6Y4ytA6GvWXI2VmbezfTOosS5ik3YDg2ISsT37GYG7vrb9RjqzIjA3lZEsBCKWu1H+0QnjUUBbW1oU/jIDSEU72yIZuWCyHMi4ER7F3/lEM4otYrLwNFVYpE49HuxLX1mdZss8MgQ8KxtNyWFHlYISvd+pARrQtx8nxUribPulGg/sDudMLCVqTxVH3HgkCz8ZFJRE89f4Hz+7o4LUnfASFswoUDegBisVGRCeXGdJ7q4X7fKdEYv30SX4fxOo244NyGjXUnLH5yM9mo6jCw7lwcy1h8wxeQv+UNIizTU4gejPmcyvdRSrH5wKoWrRELplOiiT/ifUUlD8FKYdUbk6ZCyVYXd0KptloXuV9nv50+9Hut091xs1KBFgb5u4viMkhD';const _IH='37f8ce21930a5e5b2d7aba92d4fbbc0ca2a119c8b89e092da0a7a1f9ade2441d';let _src;

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
