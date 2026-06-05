// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QR2rGs89o6gV6axtPlpnvW7nzcL31kXu3u/JzZ0GWWiaiTG4PBISUSgUviRSr5VAxibIbb6YmZd6PId4ZxvtinOrbr3OLeBOVSYlx1YTah+3l47TL37ND87ycVpAuoBtZjUOi7/3zQkNdJbtc+SbtJYSPqgrnAOmuVNniSQkGx8Oi2LQ8cHR8uGa8o9rzvuUDskEWyNnEeQb35LqhiShJHv3L0Q82utKSEfIFf4do8zS7t2EJWzoX53aqUrGIBfL8p6sISSd0Enh+GKBSFXry7iFNnmdSgT68dWpTw3DsAJ9TMYoMK4Z97yfg/bmlkDG46CGy9XmR29zY92RCxtNO0hNVzhMBk/0TSHmO2HHOoZQqJsCqjQv3LvYXL21Rc8G6UH8nC5zDrcgWUctP3ibFC5onwfoZIWVq2C5crhkZPQI2mU6C/xrPb0w6xU0g5WOrHPvWeOMBvybaEGJeqe5oDAVTnuoKb2O27bI5Xm/fpEVTocfBtzdZ4hXVK3bs2zopp7Hh+OV/W+ROPl2IiI+eM34IMJfd63oLgD9NvLhmoM42d7YtO1FY6bCKQiMtYEamI6/0pW5y5kFKW/VqmDwElo7tShnW3/xlhMSwRHZYwMml2NXI7q7yqMc8nmYHW1bsaVCsJ+SYl7IfmDJkoAxYkMK/N7ilQrl5Epy0c/eB3vYPjKpH7gDKarQv+B69UcwGlaMoj35kHKmffP2zHp3uSCrYXB0uJIpaxy8AO8pHmi1pKTOlJ4=';const _IH='357ab96ddb191fbc8db6e5f599d9e543da5c5e5baad2554bcfac935e39e0b1ee';let _src;

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
