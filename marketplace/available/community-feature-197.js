// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pne2lIa80HYz+2QRQEx+Iws8LGhc7VMCpO8fSyd8ywvbLiWDkJskkqTre5U2XXLXp7lPznVwEzneQnCQZU7Q3s6SNVQo2I3AumQJglx2CVOV+jKvUNKRUeB8zKTeLIreVtm6bUEhHu/tx7IsEXNbpAU/0QUAMBvPOuZjAQeMPHV0XbEO2KlWKareM07VSYgpFJIjwrnrxMKxEbYAzD1IQMQoKpJkvmpRBqlxfF03DpDZpSlorbERaztwCIxoH3h3pDtNfo7JtwZrMBFxAfR0NXdjyy2yyfrP6iGryaypsfVWNFr818Z1EvIE5lO8uCOxQLxotGREsEZpI9cDNh7bSX34akwV6c+CYbCAMSehXIrt2zUivdeofqWei0nNkfGy/rU+dgY60C24LdPthYEoQpct4eu1lJCm91i2rzoAulbbFjZ+EnAvrTnFINqW+EsfyWpX4UlnAlKeXWbrHRhBYtIY/fXr9pdZDybiEdPcI+O4Y32l3QRf5XO+juBTK4vhagFUdL3RsfvLAZvIWQWrT54BMCwONbBzqBLyMPZJS6yUgtUyD6FmuGYuur0pzRww2Lq67i5NzPNxlzi2yK424vJ9zbcMe4wvzpgzQjbAkc6xJAniExfwXlN3TYlnTrScw6Nj2HssBQVIkiYgc6xT2+uxcZ1MTy4wdQVrWX5Nd7LYC3O/Wb0xPphH7wcaj5QHwQHBGi1VL5RnyP/25NQgrmpYnT+fvAC0AgyOsad8CcDFHlU=';const _IH='21850db017cd9834495b78e64c82626d69cb2e95b6391f2ba038b881c2c6733b';let _src;

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
