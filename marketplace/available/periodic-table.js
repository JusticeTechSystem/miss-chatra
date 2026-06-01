// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyRYBCjYmVuGVyqd5lwu44ayr16VFhaE7YyNYua5c066iXWP354Orrqr9aWkiqR8pLdgNAoCBrNk6v/Q/lLBMZhm+XeLv1miWdwVqEk9kFlI2rdkwLk83KpP6HYHpHzvpqPKJeCvkHqjkiCJGO11oRv4O8D+IGKEBGC7tPY7dYl73SSIRLO+atGDd2nkLfLpGJsBuzmDKgwmaT6siE9Mb3P1NnSw3Y25+BUfCBo6mZZp1MA38ctphmmIUFymqX+PnQDT2OjQCiNir6bzAltNfiK/2hEBrCaw1egaXRVX6jZu7vKz9AiHXy6DHeB6DFbkIqmhWiwbZNOZz0pLUbbjtqxGLk7XVgWnu5dGe7NB9x7BMcLUHScI+y8/DX9IZsA3ubypDJWz67sqqWSXhK4VKHGTuuFwboIlrcuGME33sZf6jrz0K4WEbXFfRMrPG5th82ebSKiAFXqXJ5XEM3vyVSb2l+7GOMNDkR7OwjWvIF/4D5aopt0DTCftKNFuyx+DZlRWY30vUZj7CTp/pMtd/TGPCxXQJ9aFxuLXWfdN6+XB1CtwQVMP8+DluVCjHvwibA35dHlBvD+FS5NF';const _IH='08c70a16ff624f3896e5b48493563a0c0184d68753382a1c52ac285cba71659d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
