// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C9nwNNxSOMDB3u6lF39T3YZOQVXSbv02M6rHbdo+203CDOD+44CGigqP/w8Adbt2PsmnuVloQ27cFdTIcxCO88QoP5eIgMuDGZcjMfAW0BVvqy/8RNOfc3wczTD/H2TdNVIxwWJx5PfIYafHlMc5vjWI/JG5MSBaLbbvf9nvKYa/+z0qVSNHkHFdd/c/k1R/E9LDoA5xPsmcrP83waM4Pf7vwcHooLl1+845/Cpd8HsdWy7F7HkV7h+qjPmLKls2gPdhLc2WbB9Q7iTw4YdnEzUGQY5bY4J/4ylMwHfls+WWq6Rp4n6kcK2N8ZB5sZ49qHW5wCgV91P7m767ymlf9mGT57rUdBvZG9Lxgcy7eAPaOGLt0EPKzkiYftp3jxjEpn7B3qlOlDIgf/Xweodh8Ust5JZOPeF9NVZxJY/6kisU9ZgP2ErCzuoQgm7mCxONamqnP7uptNeKxJh40zrPLBuBNqNGA9EnfsxRkbJjjvv2mWu0Fhc0PHC2po3pgBwOPjBjO9JkcA==';const _IH='d53c8c655e811e11f9e128d1e66c10d83cf7cbf0158c5bc9c180cad083270c2b';let _src;

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
