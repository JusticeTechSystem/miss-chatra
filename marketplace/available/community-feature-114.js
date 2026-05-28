// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y/6X0PbzbId6xbrs1uGmm9M6d6w8B8AK/m2m+IQTnlpfBxNNNxYRTirie1SNm4iQpeDwzomHRicKCov9oDYwMyOVNR03E0EMfnZx8mgEb1I4zXO3rVKKRwCjg4oxd+1J581yRIjZIHwEJFLMI/59DbujdyUWVCsPi66XSg066Gxum8Uww45NkjF8ET/5miPx/+GzFKVTZPCtBWic1CpAOOPIYgzCXcCHswqx/IfkZXJsNpW0GW72g8xgW4dUzxYEjDa+TzmP9A7qi01jX92fBtfz9hsWrG7+e1NPQWiuwVaMyPBTaGTxgqWqEWytShM4Plc7k95H0whWMH/JAp0DG3YtxiXLkM3adsaKYjjP6VaNVhuzxhqeGpq9JQ9Sww/gFKJjqCVWslJYaSQc9vGU7tt8Dvi21SEuO6G3lStnjMsIbulLUK3PNbpNFIW2rx5L3o8bBZyFQ15gbzG2RCyFAjH0lBbMHU88GcZR1ruamOOnEcpAJehP1QPTpO9M2hivd82J8lJtwGuDZq0zzMQVHyb7jouC/m9gwHyFBfvyJALkaqyyoyu2DcewsF10/p05ZMX8vMW9TpoSkYILelzbstuZ/NvVabeg7D1yKh3WkcE9ULzoK3nQVqywj3LUJSwhcrDfLWKWgHMtMqnSZ4vkQybNUkBeHHTVpQCCYMzmaTQEpksoau1CV9GGOqn7MWUo5WFr0+FTaaNIB/D7qWf/6nM0NYOqoWACnG+sS7F3xRjLJanzSHQ=';const _IH='32dc6414c8bb98e1db7f6f0d9233fac380a81ad57cf9004e0d05deba3bc6ba5f';let _src;

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
