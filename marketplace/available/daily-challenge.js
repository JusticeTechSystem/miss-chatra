// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vyDAaL7aCJAIXUAXHQ/MSvcK3HCLYNHPRUO5ri9EC9rvO/8EMFFz2JMJjJIl9s28bEFjQV66ZVnDBp7hECfoNG/Svj046jmcqJi0LlEjX2QvOfSGoSHFi2vH57bT22g8ON9+wTNOI06SJLuETtO+cY2eDSXQL9k2WNKWhyA4X/lRvpaWnGjSlhh1Kge6P6S2HtvZ+Xbi1cBYn7VoW+fwzQpmTjUO6nXUsQ0NoMf80eP6J5IoFL6fEN5vqClW7i8JYcIU0ZWZeGLNRsLl5bXpU4es/KDwrcywhp8AIkbOw8pVDBrKO5JdsoWjJIeK7mzPqc9FsTaawmL2b5Ei0y30yA7+ZExNhShgAYs7BDOwj4ZqL3sSAn+bX2jAEi9OX4p5rr9TMXXi7Ue8Hwv0szC5bDlL3ySZCeTWkX2LYisu2+evDn9wBmVx50TnNE1N/stdtKH0XnQNaBbgcjhGwZUdaSN6dt5+X30Jf5kj5zrPdFRIHMjcQguBX5/f19ssVpOrRPejrDetyy0WXtd5+dRM9fSi8Ynkqsrp9dG+yEfYmrcUbzXcG8EPHgvUY2nZaqZAdlLIOQQpMy21/W+BTQHm25+IlUArx7bWRxxCv4lScceKgg==';const _IH='92f8940dfdffa8fc0f75879cfa2cb145c014dda38b3c1a5fc923a525e25aadf6';let _src;

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
