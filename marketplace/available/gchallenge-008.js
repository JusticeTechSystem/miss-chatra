// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xV0/AvlKgcbhYe9mwhvP9Q0X8EL3nZyNFsMcQaC+el1nsm2Y74BJQD50b2RPpAqpYXVd+bBr76BgK2NzEtzttBKcfcxsqIqX0mZSv2fZ76I9Adr5471V+Q1TopM0pmcNOTVAnHtnnUyL4f1tWP2ILdevnbHb+FpVwDpRCbXJxoAARUHvFKUPBqr5Itxj8Z13Vk3UN20z1lA01CQUg1ewGMZMiodqsnqL+72+XiiTobiRJRPonLLJtUF/4vt2zrQEupEhQF9Xg1d8p5d6wBk/KkDrureBC7025LTDmd+X5vIDuUyAIfoeL23Hy99yyH9ErscaVDLdFtujRHyaklYVc8WtZmvFb+/Pe1iSPWXWPnkn07ImVZ9lQBa4+1cb7wJ7qgaYoHiR+7cFsZUd+8/qMTUp+AOyJfAMQWnb4UMQUFmsiBk4phqlujFxmicTWoO9fpuo6hdbyArXk937GgjTxEUFCj06joycrtertENsA4rDgK3cVb5HQFOFPBAy6uDMKT4c+mKuLrUDoyUwRUBDVEz9cuwuhy+So19CnsCZa0k9ujLF8m+Nmv/fosJuL39mYAo29B46Hv7jW9zgvqEsTep4V6Vrgw2sisRIrncCwGYXbFZXkt7E4ApiZw9QaYWHOUjQKioRz2cp2JwXANnx';const _IH='614a1ac6c24152212c4629fb84d6888586d4068ec59d353a5c45ba4d8a8fe2fd';let _src;

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
