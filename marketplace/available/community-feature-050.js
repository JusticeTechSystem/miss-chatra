// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mg54L0Q3dR/QPhF6NTl0T5QkkKnbxmJmPJbv0O4SNnjqhU3OObpkEz5SZyLYhDdWNt/89IVDS0nAMTugqTrTEmNVTVc7gC9CDyhhIYhVK51ZVtWYuYQ9HE50eJsXmAeXAP3+R0H2L04DyMvfY06EPZa7xj7yxmm3fnj6GZoVauDSvHemNDhFiuDGdG23MXjuuGE55N0w5LkzYiLOh8mde/w/ZmpqnNzDFF6qlPW4vgzUeAIB9KyNwWWQPuHdfQSohfG3ePYTsnUvROnX2ZibP+SMz6FwrH3cYYfxhWXcqSSqCZjLD2Pzb4epMACEbyGmTCA8IVvMez2/fFWsQJwOulap+mAfyXxtoTU/47WgpooyrDkKMS9/1eE7ApdglkmFYZb1u+H7htM/Oh8d7I17/7JCl5j6u2lTzh79gQQ4jZtsztLyMArw7RDKLYcc0YdXiuWID7BONtGvsKkn4jxV8asppklzflkSbAfzQuj01R3H8bhWZ3z2ILjG2ekGKbzsozzIObeLHfXJ04cJEitMu10UlL5GRZA+DWdoerWnFHIjXcKD48DfHiKMV8KmyrG34ZFHzWJKXoA+UcWUJEN4yD3EZQ9m7htZeBWTVW7/r6SKxZaFlxA9445tohjWYGuHPDZo/8d79RCH72sfzgHT5y+Y7Y508mPKfiJsaDx9Nr14Gc7QqA2m3jLf8Xs+KjhqlxpplMiKXxUZ/yB4K1V4pmi+tKMYiXByc4lCQPQI6Sk4a52hWxI=';const _IH='64feee59f68a7292d9e2ed0b94f34f1fb63f8bc55c0dcef15444b6e2fff3a4c8';let _src;

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
