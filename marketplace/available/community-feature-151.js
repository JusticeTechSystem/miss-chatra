// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSusBNMMiIICF3yWf0SMnsnPHq7OXJEiQQxXdmBbAi175qN496WKBSIVb9Ki8kvY561biXttnR2Th7BDTlJTIf6ShGTQUk0F5rQ6OL23XEqcPtgZ6uWVqDeXPU4dyFh+mnG/w/lcKYOzAOCpJV4sDuNUXhF64LPlxg01PALvlcP+34dmJC5Xhgr+n+VgjPwR1qw1KsmGbp1lfD16mSdWZDcYgFgn8xz/pkH8c/YRCxaIgeg55Hrjf4GDhWnLLs7t4XWQaZqv01TjugDb7tJYspplsGmr4IzOIBeKX5nrwuWglTaLKrKPSa/De82NzIZ8UMUhWBitMZggiEe1luFJcqfPSyVAQzgJISJIJezKfQCC94IbedCkhoORJHtGBOU3tnvU9e4BCXI/sYJk8Vzs0KcYS/R5UflBbgM5WMpcdBO7YCf/yCev7VRxNkAtZ/kqAjGMms6tB9a3EbytXASpyIT8CInS0SLaupFhPNC/Srm02T/FnNhSGfe7lERDrjSWwl+PAD8BPArt5MnFs3ab9CMtOdM/mBfbjv4rENWWi/rKkWmOwb7CD3Xfbh8ondzRfuI5rQUq53fMnGApk5af2K5Vk2PISPur3Y0jJL5Wjc1XKtOVP1ihv81Uf+ptbj8HYQAYuv73yNq+CA3fzoNajGiAO3a++iMh8vXVhm7ZJK2zvy/VXguibkOH8dg32KoYmkW7spW6kFdi95Ihgp4yRc+xQsl52MYa4w=';const _IH='63e854d4d6f4cd8128b085eb226a74b50df852cf37448d24256fcfd0a88029e2';let _src;

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
