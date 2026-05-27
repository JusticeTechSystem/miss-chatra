// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KwRMfjo4JseW6HMFX+YIs5ZDYMsZiE2GrOkyTxU99qdt1973LlBZ4Pc5fxYPGf3lY7++VTiRGUz/4hzyrjRBFBhj7VxYZnFFi+6mh3b5FH5un+PL2ntrpt/Ay8fJsJjBLv+WIlqM7J0NazLg62inOsBCIh+yfA9hpbxYHm/dCM6Jmmwd6vtiqIx4b/mu4xJ9qmA85iTMQ379UlZYpcS6W9ICl0tJfeyk1MhnAUFq9qumKRppHskhLHvmXKjkJqV7/GeuiPcDFUOZO2aZZ7TjZhW2ueSHA7scJNzp3WYAyDSKfH7io7EBJ8RGFDnPROLcmaxqWl4RbFgoRVdkzLbLtayaDGEk1G8yXImalggqafSi54e56UmFYSuYIcCgzsmXz5TGbiZefXAxLaG4zoQczXMHEgqA0LoygrUpGh25ZYl9Tgyq/kCJ6Xj+FEGMsu7YpeWmWnRs7fvDhmrofk4YpGrSDRDBKSpNLKcLxovr3o/xrCw+q/DPoqCF39CL9RGnGGG3/xutcOFIF8G6V2ZRucuEwp2WzV78lygTUMeLtMpcs9zZHA2tGuvLKC8Ys5znWXeJkprBR9KV4oUJrxekRF4vlhvvs2RQo+rMExXclLtNslQ8PrO3h1kxo1Hl2MBv55F5JErsDvQ5kdfOiTykUSty8NfVtVXx5Zb+hwUYdxq+Cgtx3mCVI1kIFe+CB0nUcmJe5WgKyv0rdEOZkB8CfHNJIPGQc0EcXInf9gBhwiqK5wM0ucvL/ITB';const _IH='687962fac060568099decd08c750b2c29c6df576e5a5fb91d1d37de2a35f775f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
