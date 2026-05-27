// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5tgI+pjpq4C+O004zQCymfMJbVN0ICGfxKiZ4Y/flRJpv2sfjHhWOFYyBNdB5BRu7pf4nBsb7HElYjZsFJL6V0cBoU0GFo9b/p3UY99ddIOAf8INKnOYcP6nnHThpH5q8H88di9HTl1o2i9w+k1Dn0EOBABrIQBzYdu40/aRrHdOyAJRdlSSI4SPWMHXxM3sQ3VB8BQqfPGAi1rc1xgEKZaix7ROW1K91I47aLXXtkfNVncsXD4sBB8CuRk7Z4m2xANxrWL1fZr2YjwBaMZleJVsLk6m198P+uAy23nbjuHqGMhSNGVDA17rHD74d+IuUW5Hmoj1uLuZiB1KG+mFn4OTyDbZlOu8iVEmqRvzoq94bgU23TBHk0k1hZ2LhlMh7KudKd5wQyRUgTgaU7jA4EXSuol/CtkBYf+Jam5BBCcHJO4gf0EA6Z6L3bpSaQz2pMxj2WqKhOS1TthtO+mo2xXlDB8YkUoUta+fZDfCOYT+gkctw0+WdsEUXqNnMsPnB2Ek03O+wt0g/R/t0U+fiX12GPCYBk/mNKXBjZ/EBJ6ksP2uRSgz4tylQPqfuRqkv/rB05kUEl5ZRTFF6gWZ6WScn+e3Tdq9KP2PSVCfSpLwODQSZp/uuPo0u37M8RZwQKq+C4Umcnk5j3qjPaCkKMGWAaNeyRrPaFrnVBI9pt+u7dsGqLe9am0Io87fms3MCOCINyHkS5yPzB3nX+Zmwi+3ANSqnVYP5CHjzkM=';const _IH='7ba241fd69e93bc021dd2980669ce67a13d0ded56895f7d263f9192311654d18';let _src;

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
