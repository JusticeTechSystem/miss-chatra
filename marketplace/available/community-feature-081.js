// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jn7cSBPK3Hkv3C1k7nOCyNzTKMWizdf47Upmkuv1Mmx6grdhj2nLRJtSDxz65mGpks7f9Vq/IICFh+XXLjByLUUfn0t1RUP/vfe3g4q4IB2nKnhqpUWnSVJUdUaD4EwnUBev6b2+JEcKUcPXPgJEWeFZ1iwsBq6cwYX5hnCy9ILx/RqgkyQFggZsNAgduTzYaWW2RJLkCFLWiiarhxHtZcfD60JxzPxjzJaoNnIv3tFHjEhf1cbmIJ1XPxb2ojaXay/CUPrHL0RLpeBTi9tA6ALYAXJwIuQ+e4Dmx1UEGlF3gLJF3uDtriWgdetaWN/UnNPMtRMCriXbrxTzbztdGr2WWYtDmCkNEINsOZiGnivTWQ8kV58cWrq70TYMU9JKzxv1t1IJ87H8ecFn/7/zmYMd30Bbx5o6Rs2oLqgdNWWnxtsiZ8C1mKBbjjnYuFfg6Bk6zAFes4Rdka5Svyg3pEp/9x4Bj38HO5g/TIJyOBEIVtuxdjpkwWPHAVjCvJ4ckLyn9E9HkGfQvV3typGXTVGvUiDwWbMqArq38fFvcx2jsj7cEsDVqq5YB045W2DOauqpZgeEcw+dro+jXYezKNs7g4jCRwDjMowLMP+TK5YqDtlqrpHpjtTMYgshq/Al+XvONVtNS13P1dolpAMB+OLiQNKo82vVEiW4DwhCzEgcV7HsJXOdIeKMlMIeybqnqKEE78mKnUqJW0UtfYaRC8iR/ek=';const _IH='3c7cee79533e22384da3ff959a1b2c3dbd008ef1d538d00ffc8e2a5789f10134';let _src;

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
