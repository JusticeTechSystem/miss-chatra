// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PHdrKDKLbNc0ZyboOssDuo6/h6+mLO9C79Sz7CMh/mCHWP4FAP608mloX79n5uoIY3/FEmJAn/9hNr7z3eoGWyNY5e9uNHqFZ/034lFltLBVYgImZDTy7RZHMAbmo3qWRJl8wumjtWUJMifhCr4d6RsYRAfbDUKHwN0IsKEjSK+1rZc5YU6jCBYHrHFq1/R6Uw63NI+WMIrr+iLPB1bP9ZaWQSqo2i4HhEdFxEKishaz6wcCWZbKj2mG9M2N0R8Z70EphB/PXHHkX/T7Mvi+M+eTMZFJITYOlxP0WL93FFWzFvdWHAUhwqU0irIenHz6A8fkuShb/wPYbjYKiCLmSDahRknT1wprGi57dOw/QWCeUMeazU82ey5UGe4Nikc+m6GBZHIfViY7GiGzs2iG7VXQwYz47xw2pRqgBv7ijwDuMVfX36Su1yS/KcKVK7LjoelA7ELUVwMiA5IYiw2cJv84AvtGcI+18GaEXfnNF+/x/+VuDD4dQ058VJQqyXP8Yg4waodY11CAHOPRXBipr85BebzvMWdPfiTLoSPe5d4M9u9W2PqUxyGuyePkd4a7IIsS922K107MoMZNoKdZ9BSI0wUq7RMenvLWpTZMFPkfYgfnVH+EbhBNExVDBi4qfPJqwu1e46wQ6IVp2S0XtBqcW984Cz1rgw6U23F5WqrbWX+eA+sygPHEXs37vqYrvRukUArCwSpve9EuP8iGRtxjqGHYeh+gI/z60qXvUg==';const _IH='e07db2ed4c923b2b558aaef02232e6212bf5c48e7222a164c712001cdc3fc975';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
