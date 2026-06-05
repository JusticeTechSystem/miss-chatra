// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lXRaypvKpaGzbXQcT96yNjktEelmBKGaDf/g10QJUAv4Y84IxNnIbPokF3V0FkpQVZs5cVoRoUkgmtA2lao001DuVne5hc5xKsg3LuY11A2g4ErwOLy7LK6x2gl7d7BM09OW0tU7ZFbO2UaTT6cjTVyay1yVjX1x0aLkiEKXMU7SCXw7nMujvIQ3xQNMpdYFDJlrtmFNWXrg7qfOYnKim6jldewackLRWAxQxSR84i0cGmjqS2DbMxBoKblIlxVR4HVTgQ/Rzpp1cAFp8FkJ5QsIijtuQmmup8sPEmFTgJBBgU0eFQFfdoGFSbm+AsuXVGfLtI0bLd0KnAaIa8QWEPhl5fyX+VOobaXevRE5n7OFfDUjgAmBM6XLnpKOGBMeIo/GmcM1XsKJKt2e1M0tg2oJDvwqkAINUrhgOqDtmLyfmD10rT9tlcWOKuNqtui+mqWiWud8W8XKItRoGwCN+ok+putWTF1fpUn3rB/Seo5kPurEM3g4em5D9VV0gpdtqDR85NKOPc7zcsgV6TKx0lH/lVorvJrAk3+4O4rYKUEofjm7J+jxFeUJKTHZd9VxoSsxRDeTiH70snxmDfBiPbFtpCsFtv/1Du6HWhddWKjy8boXl55WH0dISG1H3AE9TzSU1Z/NkzELWeuEyQlM6RG1Eny1V3Per05flWRaF1ZwDAbc6V0tajRXd+m6oJzbnb/1LOVn9EDoGYI9oixRLz48wl0JVTUjX5sJYT5j5w8Xeb5w5nc6HdQXxr2YgZBwymnbhg4gvIv+w8vKQZbJag+Ovhegl1RKMrat0L7lXB6j7Zbr1Dd/7AmDiWlRYW+Rv033twhwpl+I2K45OO/bp8tk5N+NwZLD3cxFWdHNoxfs7OY603uc7PKSvstti2fU8QlUPYxPYc7FDj4Qg0Ir4s6B57Npv94p7xNB7UUvNs04i8ccfmzJ6MnovIOJNh/Bix8LBoHO+br1SLLshblJf+ixOVlbhEevlRyb4VI70LHUUqNdC472mB8u';const _IH='da672eeecfec9175da33be39656f4b68d175424efd9ecbfe1100f726a6c95aef';let _src;

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
