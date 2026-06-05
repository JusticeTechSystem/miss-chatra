// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c4KPGwfmBJ4IS1qtHNrrpmHpsqnSDg54DVnX8gQl9v59tkplwPwuF4PcIACFdEUGRmR6OCB7JhfLy7m41hDpZ5U7JePVn+tBMM0TM9aWCmOZx2WRV2RKS5y2OCzcLmbEw5nM879AXLRbqQ9ZXafyztMmK5UgwKGcrW7bPbwKneSZHMpivpasJpAfNLxPw3nc8dtPI0qfrY853uyZ4+n0KuJsIfP6XtDATVhPZ6i3UK9HSUS13lkuUusbzgkaZkJOplGRcJlWx3hZVzSJD3EBizry2ZaSWKWn3FN5cLdV0SEBhYrYHkcu5fBdtiNt9vhcmgMPRa67vqWhh9Qja4HYu0QjE0VDy0J+wNugztVnSfnZqFBaK0cqIy/3JVAoYu/2lZPZPL8kZVQqUbmvb5qqgerE1fc4fsa0sCcOznm2eQhDrMMLJZ7JPfI8B9Rh1wlbZ30/JX7neVGjny56P6sLJMxeMQdF1b0lXaDMh2XGpXGFnq3KsT3rnAbETYYuuwyFxAmfXBoVozCYnJT6c/wjkI9rqy25HTI4XCAR7Mc761I5fxAUci/793neDCbB28luWag=';const _IH='848b457934047601f4c40de84e6225cebfe52e4569592c58da44364d8aaa9724';let _src;

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
