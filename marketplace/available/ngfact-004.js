// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y9y1GE6KTBUf5WbIzd8lBcw9NfZhBKVlIQnqANOrzWcl55fHCvufG+wWNp9TN8rLysNb+P3zDUSyIFaaxHjIt4Gj9RFTbCTKxh7guuuq9vyHN7/nyJImi2aiEfvEzElP1pdgt1XJAyn5lPGNuA01YjcvPwo55ldDCvqwbtZdquZ+ADD++RmXGfJb/3KhgI3Hi0nc5ma83z2ZxI9dhmp36LrARRlnKnH1ta38I622NNMvZZAya+ZEjRLPvUEdy6l1ZdhWTaW2vw1ONJ+egi+bSe9969hBRF2rkC+kparCtW8/TsjztDrKWou7V3Utbh576/vbFUCOauRJswJxaXPT3ZdTpiAJraprphgWFvpi30KTiF5eXnRpcvDaVj4WNM5FKTsmkKe0anDvr5AV7PlLZ7DXLFQQVWZ0kQ2RRhjEAYFhakczx+uxOP0TXimakMVfjYS13FHUIj1zPVGDcfdfsxbRMu1DQv3WK2Fymwk6zBKEnC2GR4biXL2DJ0xxGtlCcItfIgT6IPh1y1OEq+VKUsOHiQaNPo5ZLnQMOHch/HlQuPLiJL9smeHndxqA3yG8mfyGZxBhTijj4dJIhzI6lqK3ka0abDkmbh0QvgGFSPn2sEhUDgcfB81dLywtv84TOTxLbcGzj9rEx2tEZQ5DNln/5Cd5Ip4cjckWJJkFvG29dflnYDKrgQLRQc2MD+Qlc5CGZhrVN+k73S8UBEmL5zmeWjKzi1y+cQ==';const _IH='de6268da26d4e7d46ad5c04dc5653a8c0f6750556c4686679ea5586b34b14e65';let _src;

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
