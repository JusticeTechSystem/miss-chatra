// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qgEZSA2Hapo48chwaQW0R6WxLwD0zULHXSWtuiT0DcgiKFosEOtnILXhtS+ElqO9BfkW1k+iwV8ggaDWa4Z4CjLKzZQI+K+Z0XuJlNg7ClcvEVXP4DkA6n9I3NNC2fHBqlpOcrV1XO+pngaCdz62zLy4mBG7MPWcvUle5rLylzPKd0uUFYIO9Opwlr8JfTkOjGtXoCsjq3BwyxAenN0A3QudcUprPaY7REYieMg1zNcC1BhasTjAo52bnfrpjHkh6arleMVbiqbc4aM99d7UTIRq8jAaPt3STUvC/VYQXuWBK3lALzlIu0cgUfqkn+Z73TGP4Gmnsb6uywCeuX4pqsSZ/6fGmIBIWqxuGsQhGmIteeQCSMQ9ARMbxRJyvfQWnVPvFNIdvfFxS8K1FRB8CUypGTazyOP+Tqw8nKcicXquxFeQhvo8PshOmqw5NaDqa0munPWH02LcL2v+uKnzk/rKpxkBL3JwZd9m+ygCfl3IWhnsRl8NOJ+xJWgG6HjZBbfZpMvupMv8cDLxwSdqZtM2PVcZLI0jrCjNzu8jvFX5afM/vJmPj0pDEGwddimBHuQ=';const _IH='eeafc66e387a4d15a414f9c8c2488256f759ada6c40289d2244aeb187340172b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
