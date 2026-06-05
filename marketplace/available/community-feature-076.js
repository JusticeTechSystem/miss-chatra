// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NcofBT1S+iHnOK1EPRXg0mX7UecYp47AymM3G5OPYNhMz7dhAa1HeLmRUVVKW7N91ix+jRTzPOeB0baqMuj5XK3KaCpVXzlYG+PtF3bcsbYHnfzN9G4F+9b7ffqzEx1pUJjlcqPAc0w0KOsXMAmODlDwaqlyE3z5369bq6+zc91KNRK/Nb5To9A+/qjevQb3Rx7SvQZo14atd9pB3F/EwNwxXPQvHkGHOMzj2dMXh2qLlaIBEhxtG6z3Vb3v14TEPilJTzfHCO3gtFLkO1URZnJTnwYhVl0hpnuvUx3emmljfXXWIpqo6yjPKA5mDficFdfIB1odl5JXpXojjA8YNlRE0ipUrQ1VQASXXVAgPGthA/I4d8DXBNshWgS6juwb1iqkn/bNUfRPB/+15fUrvJ/o/IkGTwsQgWBujZyXTHXEraAkplOYIUEZtVEFpPTuviJ5kDZEqZD0O8Ik1NwA3pAgktl9//y+O29nCTz/Lw4Dp74rtKXViADlrtATJ6gRDwhMcz4elCA/byLjKEIDEbi9z/aAg67UFs7hMlfu3K6CYrfNTNFl/4UNmbEBNEGCanxmFs6VDvoE6M6V2VNz72TpLbitVMAbD1TUgJDQ+ozTzfe6hl5fhACViINBNvtQYkTYTnZ6DI46R/Ltd2VrYLu4T3960wPr5PDfp5nlzcMrRF1qbhkO/c+rwkbstxwGPQbwi7VD8yCGctsPCr0wp/3RVOM=';const _IH='dad978606a5b915e39c77f717cbc8f20bfef07372f20deff40fb536ff389f18e';let _src;

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
