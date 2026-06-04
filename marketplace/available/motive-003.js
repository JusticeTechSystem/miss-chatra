// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5o34o5hdoHbzTZzpADTEMIAfleOmIIZtPB1zu3Fnep3+Qht/qytWCEoyU1FibLprf83EMEq44RrcF8wNE58DW9KjRCkxphOgMvnn4/yyu6XdSbU2dwOcu2gG0oHyfeHhG7/gdTMMFaNSKFnYUSN6VFwCEIswq4R0LUzv6fHrvCrB2VXPP1y6RUDjjCD7AZPM5UypPQYeCqdc+JmdVKU6q2wvOb5FbsCjY2zX/y/12jxCaSim8lIBA8DzQ0sq3CgyB3YiblprpOGLhwgIEsmiyWDOuA4ehPsbPCn7dGvGBF2jQSmlXb393pzZPOl1eUl3lEnaH3D6pU+DJkp+BlU/JOLBQHcwk6mimuEe6i2VLfKcQZApffzJjLZthf1AqxVPbdA/IYvvthdfQflXfNJmBkaWn2i5IlZGZuUqaSxI1jXXv6nl2qjGNV8lHqcCrpNXG7z64tVUyA0BnnFeuLCiiV7BDzfaBQuMtqgEPXkS7E6eiNR9Zmx9lY7W+PV153/5TyT5WihzRlue2zURPxlFE0UxVbtazuk7uhu09gZJLw7OvykXEHLRFjP9Z4J/tcZJ52c5RLMZLPkKFQQPLsAYpYLCG2xXY+tO3nntSdwz1C/NUm90155RUSUgcM5trW1aoMwZAOJglFDaIqZ9gg4ENZiqN3REq8Z4GWBKEjh0om74vsDLL1P46aOnm12lVc+zxhLXoyzBUNSAKvJAACzYCt9+MY1ocOs+zPMsEV1UG6o3c87hs3WrB5wgvug8VrhkRHMDWRaFNoV4kAMbUp4YJYYm5h+RPx7WkGcx/bBzFJhWudicc0Bc1NmGgDW482VssJ4O+egOdSXUPAGhKi0YRkMphG/W5QL128gRmZM787/Ni4bB74DBcj+etACw+Qq690j7G+ViiwUhuFBNLc4LDb/GkQZDgAb26u/EXO9Czkt8/07Q/kGTKyWq1LsnjoN4eEHVpS+1op3orCyNJksXe7Eor/X4PD0ssWDKr/nqkRFYITFig+d4OwqecM+o3FFjUHnUgm7iZUEr8jnU5/E=';const _IH='63381c0e412bcf23ff31115ce416cf0fb074224afe9b4942e51fdcdfb1f21f24';let _src;

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
