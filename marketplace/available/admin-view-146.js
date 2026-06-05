// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moKfTbLOx/y81HBlZMQ2UDz8+jqTAEkHMle0mHHG4+Wk6+Tt/Wpk5I4nIE1GBcrcmPIX5xS7qcrBPuguPhxHRKf4V60miCAOOWUfesd3vbfLtep74GCPcg+IPR0eIbfWDyQPn1QwPKhFUtGRBC33yYsV3B4j529nCd7nzriw26Lg2hgc6OB3Nofe1Nxbv2DP2ME6yHEcgA8oQqko53ZBEeHWhMu1eORSufHUvSyy5lJ5dK3CWh4ozxKk9H+5gXlOvxjHz5K5FXYPqPDXKeRSbrHv35PlVzBZ5E5OnCWL2oCOAchI03vm1OCjzVjExeyisgChVo6PxvHe/6s9fhVw4GIbQYsjMBqh/OIB2VdWR5pwR2khmEVMt7RXC5xXpQXMExcJfU8m/7k1yS5unGGq7Gy/JVHLpvDuaZXhftefB6zIFeB1c4dCTJtv+ymC7UMj5va19jEWcl4rWvTu96x7bw1kFNWDEAc346LZMUw0pGrktewTFs5IbRCJNxu42rPQx7UO3V//04vleOXxSOZP2qqe/PuctUeM7gYtGYNX/dXvTPlvp9h4h9z1rfXijTvqqHToCTzTUU+SV/KbITIuuJDW8IhPJcbZ3K4rLQNtOY33Aqd0sUqn2DiegkL/iTiZ/UuKqaEtxPRswvZEkeRgNRyLgODkgbU6tuXPR/DEV5t+E8sJQI/IPFN3LE6IRMy2Lplurk9sllxjiZnWYqTs16Dc6Pz7ZQs4GLDWjVMaBowjT68B/iN5kLKEfW0FLbkTFq7mobbqreXP1dVe+uOWc3yo9pQxKjYl+rnrba3RK4tf/5UQVgRZDCLceu+9OJwfxlXldWhpaOAeBYoQuvN+jMBltgq+b6y0W08wmDD+16jJo1+nAEY2HdzQOsgQRqZm6yJfq7NJJwNiP6nkuFhkg7MQsRl55MpmlhwfMTKRPPnC0zh1B8VX1bqUs5m9NHPE7Rb8vWQDJcL3+lpNwbQABuhhmQpSX/CKbqEcGvJq9eZaxgE=';const _IH='cb653e8ce55a75f020a00f8d0ee9135e447cb73655b9a2d8ec5968cc7dd8e16f';let _src;

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
