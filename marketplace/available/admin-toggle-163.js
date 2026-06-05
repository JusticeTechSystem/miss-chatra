// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='twHX6ri33UuqG9LKFoe7Mm2NH7f7QwFQYQJWYfmBBOLSeROEpzbKtqt9DY+IMDkdnyz0Tg+5rhYYQWd01RqP83HGU2NuPoLwekeLFKO6s3CnVlNXhbZFdfGOcJvAHPivzpE8BgyzhzWqbowF/jbw8tP5uZjrzLn2o8c7na2SxnJrEP7OhBQQhzBmJMykV+yfPgm5zwpJEb8RwT4vyuDnW1nw+lJSp84bqs8RwxFotSjeCqTKERhgkzahSXRCyvat4D/6hK5xG5p2WkxYUklJi/MRHe7V5BL+ujXIXtvWdV6J6L+1+nhDSsdnLT0c8h/OaSXx+tGGCmReZwRboDfz2ufa+mAa3xwP25oi3QwWHejDYoH31Bz5HWDzUJ5cJPcdpVsHN1uBLlTTErB1O8PNefwIIEDFKS8aj4wnFvvOUH5GfpjNCr5XeJp7pOfxdYmXTncPVMzhCteSVVuu/hBELkiCca7jaKcjSAbQMgTHzO4jnQ0ucmZdZW+OaosZpb6eZgMoKXypfjdDrPW4tCapH/U9koTo1fJWgkRuC53dfKaLa9EpmnEFInBK0zDIpuo+BGuAgAVURQLBL5O5GRmUP6F7rwjCEmMukW4AjAtY8vw1VKhfyy0RlzfZOhzTtuXJJcOWMbX1ch4GGnu8pBL+15seBy2jws/c+UaK8vUQyoQuB4Pjtahe8Zq3A9g1se9Ax4hnxItwiB4oZp/lzcaO1nfoFfDHbkZrgOyU/zCY6ylN55WvpGpG0K1f/qxiiSig5NjWbh54OBYVZGxb0XJeu0EDHD9QzhyMUJVZ+RDDJKOby/a51j9TjOC2PMg+MvNZnp83aXtiEPZWiLMAlTFkF2aFWp2zu70+yPdJco/tYxdyEQrCO2NjLInN4/UJtC/wyZr2DLjj5xiWxb6zx1xoR2vsbCuqKiruJqhmI2KCWT/J42mO+usIfpiJxYQOvcPsIO3eJnOs5Vx7w5WbfbltdqKZXhpuTxcL2iLCLDGVRG0i1bTzCWGOLazcqGQyHh2p8Q==';const _IH='edd21ab5bc426fd7fa3fcc8795b14f5d27747bb6e0f52c735dfc695aaefb13d8';let _src;

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
