// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejsolwgjZIjm/wpewUlgZM4782EhyuZSBLvQPjvHlzNq8YCeaPrnYTui+ZTnHbrf9PL1gVADHtYIaSlVeOBo7/hrgh9Ira3XEJ4bE+QxrhZ2sX7UnvUoz0q2s7/vynyIWyVYN1zvfrEAfWMlkHKmViagQ5l00L3cxCo/1bcLt33k6GArfUaADxMa1AeMmmYCxp9aqmAvXviH6LMoijlbVa9dJOl1kzh1oUCdICEBq8Gdz9mFM64qHhgvK1xPi4PJmWETGSH4gYvFQW08eG0NGVD0b+MQ563smSJR/D2H/5f0xFxxFfrukdKYMScpLlrAWgDbHk5Rt9OBBkEHjCjMPRFI4FLh26qyHsKUy0uAEa64kPO2/jXk8E6QnonW+1Z9RCNaoTj3YMEqPrTjVZFb74ECPeqpn2VkipipjzCDwzY0bjWPP9lqaudUaBpxJyLm86lY97W6OBmssOAw9jD0XWaBqzOuML0IdX31C1V7icsSU/T44Ft+TPN5LW+p11mY59YnH2DvxVsqvH77KvcJewZE8QpSErIUvRaiqsTiNH/NdBPXRUv932eRpS1N1MkiGoBE';const _IH='32e4435a9cdb9e43bbc56e5a2525df61c48d1e5801de073c5affd5dc39c31310';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
