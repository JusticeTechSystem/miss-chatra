// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ggk8e/K1/9PmrNn3mF2IVyigj5yGvh+sOcngmjNf3C94i1K0au5kPjaBsBxgY6cBiUY2rzQ3gw9ku8dBwFMY4BdmAkdKDGRi6o+kA1IWSwt7t4p81Eb49Q7S9qrrGa7AkYWAUjYhh6wyoTyVq0gkSK52p7jwHxEQicA67AyrsErsRoDOprKA2GnAYZ7Id2aeB9CCkDXMI5gTMy5UdwjD+YWMWh7ywmMX5Ggo5C+hsSq5pg7qyAlqUcr3pLIahQZlP78RzcVrJNUYBeJ+j3wAqF90UCJNUfcnugN4FXFLqXxzFP+kZCew/bHGxrnWcyw3GkxYxO2/NWpLff3l5bu6pkaSJ3ewuBGCd1Z+Nj9WNuT6NEmjft9zkOqgGKLiD9lbMJK25fsomFofRIgWZzUEvjH33STE6Eu5fOGr3iMQyIN8UpVfniiMnjurp2725+y9JAPhq6kuTEbQ/6D5hiLUZ9WjsC0yhG0D2fhwCu6C9CUFD+pPtZUp1clN86Wpuu/asrvEXXbwv8NWrhbC2JWC+ktueuMttz2oy+B/GyiHy4my1xXkTZ2nLNUgnh9A9zHi+xldbJi9d/KEusJeLOP2TU8rLbEdQRCGKVd5U4L/bshUkNr/tqcJYo+5gjL9StSATA+gSQVI6V2i+WnoxpDdMKAgobey5+dSaXbQlGMpYWmGxxfZLfT+lEI+OaAfljRcCK9DWwuaIQrb9XAMsuFl7an/VjezVESDc9te89Hdjc4RJcnBiEe+KqDf';const _IH='972a981dfbf93bba1e16945cf96cff902ba9568eda29333449ac9d63792f0623';let _src;

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
