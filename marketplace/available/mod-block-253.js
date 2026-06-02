// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1qitKhCPeCYY64lAzaKsKmdbYJcK0ebruuyxBZtVSf0pl49JJriFO0Lo5fdeQJbp81vaep4o8licnD31EEuI+fJzVtHQg6h/ExM3Fva45AVUgS/2nYk4W983OrMPKJEL2b3vGJBDMJKTL9vHAvjk0Ar8Pxe11E722QMH6Gu/EUpKAB6SBP+11wnxHJOtAvo2WpvtdeQbTxYT5RcjDl3SrFzS+ZZtKZ/qEbqxdpmPKWDIDIHHyQy3MjFFCj8BPsJTdV4JRuEWCoj8uOKcx4sq14EU6sHgtx6GIigRE/WBI7/v9jfE2J8/ZCt4T2dSk6OM5QFp8bs+GyUswLLeMfwRpRK///8gYlQQYs8kGwKWrxUPRfQ6wX3rn5CyzjfmJEhSkfN2dNh/ciOb6lghWLCqnpeO8FplUVkq3UvSmwyj8X+dcnm5Kcy+Go2axZ7HKsWuXiSIXd0khgne6XoYuG6HWWFBQZd5yf40TwjpwyVkwyoqMyNH3IRHaMxEW9OrUhH/xunaaOOgCeovlrxn7G0Kj+WOp3gtyQqVERijfkSFVBRibU22sEbTpA8LU6b3vUIkMbWr2JsWovDI5M+z/PDIUTAL3GYUlmDA6jXVtxzbgLRATWHhQ2Q70w2MAtxDhs8p4uNYnqDAyZlKHxB4pPrPK876VhMu38/OtmAcNv05vKLk7BSqkigiObJuNJHaRlkhQ8HvFo1KMaNiGO1gHDIE+XpOzi2NrpO8Jy/B+l67DXD/popHQhyZyW7o4KLoTwQwkSBuDsmYvSt2tFXara08txtVU3oqvXm2pUU3GjEFnOhY+da6hHQsJjuDvHPXervRJoZECXHTrB/61O0ywm9bUMP2DQ2BpEo2zQ4HBj/AnWSjoOlQGMV/aP3fKczEjIGOklPOH0efFSFgStaux2j21f2TxuoNlAnlgtp3+iivrYmahP/2D/MkRVXOrIN7LXkOPZZYIGGDe5RLRaJLTViNb8QN2LJsqGQjWUECp527h23XTsMUi0QUXWlpvnhOIlfwwBSLMjFFygg4/XVnpNGlqb1TTfHPZ8TF/CTN49Mlp2wknuAl+gkrSZ4JlTpVnQKVRkE2sBeqFE1qxQS03hZXi1A63JEJvkY2N1Eqr9K+Vmu9+jQF5IWKBpzBEIJN/4J7UGaXjxXzuoKbQ+51qGijZJEwuJBQ/ui0wvyClLssEX4V/BsQaA0l7XrmCq4wGfkUs0xWVPgMJXa+KtGUwTtHkhXOwqV2WXo3PMQ45HBwYwuhDVgSaTcktMuFyt/0UOJZqj3y1hoJ60ew1iDAVQV+onWjaJ32IVXr8skI0cnhLYVSD7Gi6Uay8B2gl5Fts/Ju/YhetYlH6i6mOEYux1GOOGbHbcQHbYXdy3I57KQF';const _IH='85518d382d021e7de47b22dd94a7b7b34e89904fd9328d3a589d53452c300321';let _src;

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
