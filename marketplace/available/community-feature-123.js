// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROnUxwApbBaMaoQvfk/aIfqtNBsCzDkDW+ooKyJvlw+xtlUs9tmNrc7ka0Bwy935GnYTxBCQq+IMJHgId/Bb1aVsVozV74yHyr62pjAGaazFy9BfcDf7Z9XaYm6TWz4N/6KyjrtmJGHdgB6uxW3s2LMkRr9pk8W4LrRXkaSxDkNjn6oV9YkVSIk5zGnrfly7mkZ4pq3ozg4+o6q/BiqP2hTmKyV6bhRZotoayUHcXc++BJfZyRt18Rm0N14BXtbVOXv35u/TfXw4tAXDilPGW9Ik0ieYbezbo4H05GaYolx86KeSGyE/flh6dVlqXh482l+zv52ds5+MZWEwJXzXO7naOTpw1kwdRZhzrYRSygJSOFmF12ciCTCfaV0NlOWTiaIDJminLAghbwy/oDn+4eGCusQbZIhXy5yq22cC+UZ1ZIKYRqvFPA6lV3iAm0a/CbC5xdS5PwZil1cLiZjXKjChYiHhZd6TVDXznxGjx7v84caFpL9gDKTr9kTbFZfGGoI9bQQAfqMhpaFYig8oUUyMJcLMh2eZRv+yhJzBm+oyGUy9w88kdyU1+grOLFXt9fWeGKXWH2JGhFA6heWzI6vVDCkSd4Guno/9yJk+HtRENwjaJUZE5Zdiyv0Awak58PK09hxPunkSQvJ0MDZj61c3HNCl7cYJraNBCi7QW+M7zQXRJH2/h0PuvNXdCfJIKNgW97wdVfZbc3DEMGLutbV9jC8qi7+LCILo3nEA==';const _IH='5d9a30612311a06ab9ebf0b6f5bae4bbd2d9718aaa524ce2166fa621836df1f7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
