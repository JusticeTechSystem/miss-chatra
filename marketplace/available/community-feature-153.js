// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VD8EOmTBke9HEL8LJt6tuiXLzRlhtqiYm1flcw4F9x2t8KKQfXAlX0EBuhcAL6gTqIatAHG+j1sWHRDv0r9VKMUFsBv3QCoBQYTGRaK1ikMRFcOMTe/v/PT7LiX/Vk0NOsLzAR710uJg/4hCxdPAm+WJZmdRvYyytbidHe15pwojczVgKDLRR8JRdU0ZchfHSgymmddAlbo95NM9iVaPaAQG9gonxRPYyNxERAwlRNGZkaaQUVH2yV6QLJxHYNwp0Vilhptn9JRrtDqs4dltu2lrxLQ4tA6QWKNtD419EvQSq4yF6hVcQcYFUbEXS+M3yFFblUu2DWc4fJgg9JCn6nTZvPAkZDExdmq1Kc8+RmF7GnQlEzorxscflteCi6qvGOSnSG1To8f9LHSpSAmlS1nu7FagPw+Nlst2a7Vy+QAs6OD/NJ8rBRgbEhvlUpm1FhDxXPV0jSGKwOYxy0kEIjgbpJbvaJrhrCcJmYgVO0YykvQPWs+zxTdA6v8zTuZXin0lR2dLhPE5pyPUUWija7rfH+6TpWA4BYsSRCl4PbXIqUCXlngIrnmjrTyjwjLKuCY6V0KP5hu7+6UX9VLEsWjdAsQXxdSP9kAdsw39PJ1U8g+CYgG9W9HYIBm4z7vSNvlahTIrCfi7C2FBcKvyQ9ewjezMA/pBhf4QGP2l8xDtOzk9uQleTCapO8+MtkLy8hQtGmrwu1DKbptyR8PlgmZkpuy0QQ4tv2xSUXY=';const _IH='d6c0e8dbc5b3b5ae58d8caaf1eec11bb4c1d24b241cc36320a08760d59290bf4';let _src;

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
