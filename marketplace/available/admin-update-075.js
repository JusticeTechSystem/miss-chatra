// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NU7LnqXinUXJy+YybNRucv9SfHMAqMUh9hurr6a5r7GJSyP2QoYeY2/WLr+r5K6rUEnzrs+2xe5mmqYLGUB7fLrLQ8oPgkoVxaHS7I5i1HkR6wxHR2+UgHt4F//jtCyt1v+X7U/ZSSHakBd+etp2OiX5enxGqBJaq2/GcLcc2ICNUhXW1irE7LvouSnN+EJeVeeIwWUNbP4fJFd/3FbNeqm9bq2qqkNNIA4/ZowQPqaZXakay5wq8ioJq/Nk3xqC0KpvNEmKp2rw1iUhD5SLttGDkcwM9vmBHfJW/6+UPXt3Xd3gR6+5MG8TxsdtgT29SbLfIWdoylsGQI7Kn24QBTbuyvuGGO/BGlDsoIehfZ81iyCqLvfbb1V0bKwUyintiho3BZU45VUeebpFMVcEAVkF4w1IxziamoMm5wbwBkw8YPdmDmig0NUBK6ifcMp2OJTzJI1xLjP6mfi0A3QLlA7Lcz0t420KN+bPlK+nq5V0wu7it8u5kr+ag7+jZaDRe2l2uyzfqLGaBEqRt+qEaZEpyj36T0/bNMfSfJoDGBwIB6sGWaI0i3KMkKBQsYuvIyDBlbs7EziHDOlF2pnLYVLhOp3Bra/997FonTxVILAox3xS01wBD+1YlkRIX0p8M0QIbDhjamhSG9mmR1UktCPWbgpI0Fgg1voSTnKieDw1GLQKuJWWP4f+sg0GkJpQqmVwRVacoSc5Heov2WKOgsbgMp5Wkx8F0UJzs4e8aoPgDanDRb+iQ1sUD4VSfMWiqYNijIxM7REUa6s8K2UiZfn91j88gpQ9j+kO7H1FgGDtdbDaNc//tiHawPx1pj8OWXZ82YW/6L5gRTbR2YCbTHFPczi5S1pyU0GS/3BAO4dd012IGKw4pyUrrjE8lgd1CMohBwujZmHzDIHcPDUf4hdIzT0ktkQ8rMwxzIC40u5VEEkhNdRPkXv9YTyiHAJnJuORbZsrtjSDU8jsf6v5mdj66IJBvvxrQlxd4T3lig7EtJdU/y5r0gP4OEtr';const _IH='60c32453ddb712e835426dc20d894f73174ed44bed0bfe8c8f6ff184d73931f5';let _src;

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
