// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M5EZeQvk3ed9OnHhtC2HKf3GNChvFMvhSa1np+iJSz9XFTH+BcsarvycmzMrKYStxGoIjkw2Yd1Mi1r3k9fMup23a2kTuoa6nBXV51gJtxWge14C4S0FXly/xqXVoNO5TaTH94XjSWFC4pBRnXwQjWMO6PjZo+vxsREE8cW6TYYclk4c2Cjt7Mb3AuETbH1GXIHEKlT3J49/FmajByDIumQiSBZFTkPK5A3zgXiP2LA9EtbwoH9vmdQdY0GTOKvFDLgjXxnBcOVcHYLCCXFiJ2DYyfWyNel/5ta7W+0l76fHfpzG/G/AOpGg37aw6JtgLIfifghPy0r0Ur3p2ISUUjV1FWzaIKZguxOBDiIDTAykKLYydXPq3/rLhBi0qbksy2R5XgUNR2Gu0whwMitvaTa7EgZNvjUqzsOaMnvQBoe5ZXhnbZc9ujp0/cMkSrWg4MBGFOEFIzSK4df2aDz5SwSWpASulkpz+vAia56Dz+YJLc0cHJJrr54a801BWUdgv54Z2Eyig/Vk7FEMh21szq+WSm1Lr0n8CjQYGtufmpyQQjWBy14YI+tob8uQUOxQSGTaCkKlGSGLlgg++BDDqStergxumxy8ZNdvnGYs0kSJOYJJgyoDicLXE1nuWlQvj7OsjpykYR54MC9buxYKQ/Ef4z8SqSYdVWvzcwTiAlzLinCLKIveNdJqtS6pDchMN9uuZ/YWZwE80Ug=';const _IH='970a4eea9a21a961e5161d91f28d530ca3a011bdbc011ee310c8a8b5f56539e4';let _src;

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
