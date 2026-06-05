// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kA+mofRwXLPGhfE+2jqRtHIjdJ21Ox+yYrrtisNUr3ud4NTsGSm6fE658A6CKPZKDY9lWPJnl54P0hCrAyL0vcEJqwi5M7Zr4pBv0HAdv1rhgorNIbEF798YxQOLRHQ8a3KGsrDzrn8PB+CinVv+ygKyTqgkMbfuE+P7NIpdl7Q9u88bhSqObgtXuKDpEvdYWXME+vntnTbpgBrtPF7c0tUENj0z9wQHVMyaJG9d/flkuQkXdaJ4DQr5sPbEDadhSNyotB8lTCgxZhvaVsTYmh6rc1gSgKmcWKG93O6zj00YO7yJ8OOp9A0O8WQDkrQfXqycnkrXVkDckb+bkn+LNn+5rmnK9CjacCqMaDG2qafBs/o5ue6Rl9pzVkN6abzv3Gaf1CmoA90gux0pKIVvPU8czrBZAqKpXcS+XIcWbAWtC1hOhaY26KqKy8iuAzwfY9vuqeXdFAOJs/8ydnra8lh7va1w2UfLJL6mHlHU+ZQNgMIHhyQs+x2avADzPPVZOWtwht+xN9HhXJclkDDjx+qG1TjbiFAUrBmU1/5dHEak8EI70FRiZRAKhhvIiNCKzbfde7xTgLwN5zzZvIHri5Od4HjjoGe/4VYo7iZLtWWtOdEOtcXKGyV9CgqLclnnsttqB7gjDlMAGXQZuW3vU2Fq7pXxye0RUiFLqvVvYXntKjTyoq4vVGih16I393r0Qbx098MaEt45dig=';const _IH='7b37ae6ba000e52c614cd3b72d9f1f4cd1f10570413fd563a366818a5ad71b12';let _src;

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
