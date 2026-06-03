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
  const _b64='wR7d89hcgitNnnQ6WRWUKl/38Cz3lgIcA1mZkTETxoF8jJzurxx5yaj81MlW/Ef8y0UPl/dZR19ERmdEwfIb3Ry9dg9xObNlgvx384Idb1K8ed7ip/ujr4ewyoYiS3Na1pRnc15sQOYyPAIwDsq18O5J4jOb0Xssz+2Ug9ZHdxOqmG4i85rTzPdEYuPv0L+iPr9kSoFXlrOu1FLgmiaiH1FDMJT0cWAsIzszPl03duFEqt5u5yI1OSInqzkwB2DXKQaV2WB0rdsc6rVp/H76HixnaNi+fHDBQ8/+dbDClfaXRMmLMDsrnA6kr0Bf4csFrznHBos23ArdCmHfModujA2HiNXtyJLz474WSzWQOGq5y4OL4lEgu2MVyCkWl/SYsqxHYThMhL4nOF9HhdHZ/hHvdSeyUFa7n/tPP6U/8dMaqL45IwBQqVt32TMIJwA3AlNggjVgdM08NjGgKNUqhRIRnZjZ/NfHj6KAvQvVOhuswWpldoF6vhFOun6FTyoGOVdl8PA7O/kGFHfyt+1D9SyRY8XjqqWiWnNbo01B4ds+/LQbq0M5McjemHLr5K/1JSV2FeCDdFzldN/cuO8+k/H+5TZcHO/tQHAAoX/+Xul7Uaim/WnBgUrcYq/cZNKo289eTtgfNsFt0UrcHnzpFIxUB+nq8dXLabn08eGUN1CeI7yk8ekfrS12hkMnHc37Gx3k+9NZ/2Lr/w+EQUbANRBM0zEPR5kKCU4Wsy1ildDY8UU=';const _IH='9c43d1cad6d219117b722309a2355a8a905481aa33a209e755846fd4b971fc15';let _src;

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
