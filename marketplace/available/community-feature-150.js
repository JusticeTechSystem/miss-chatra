// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UHm1/R0XhgPiaWdha+2MxqPGlBnpdwIU7w4mriIIszVSEZoXgpNqF4PREFy4ck+OMtaTxdacfiIVoKyjEGpoDEbXWd3HZVncNx+XJPOV/C8HUMdRK19v45OZaanfB09Gi1b1y6xpVmLhfOyBcgr6aQa3RdApqEezUGQVHlK0ry+jnMLHUWmJ1kD+an3rMH2JwWxu7yS/CZWpmrfzBcrNz0xpbLVqTzx0BRCnKIXHggLXD8I/0r/i8juIuVgOt3N+bmgePdbvK8oE52NN2NFegV/QDmVT2PV2i9hWNobESOYlskZVXxTDjjdzHR1v/H+e1KYLiPOLJPX/Xa2ViJ2JuggaSvvr/nA1isTtNGrYRz1IGSNR6zPChk+0pSbjm7O+4qFLYAfzHiUrVgO4I4efQQD4kLYNXTPxqm5QZjqT7izUrTsFq2padp8EuIFvptM+GJSeThyMteyWlF3j/YzsCFM4w9Rh/z5FTM43A6uZfdhx6Do5w4Ms5HflImt9Doa2IooBM9CMHQ6VhEEnUsBJu30LG0xLrbz1VfGWKZ8WejDrAXOOf603ZOqy3galvfXMpO2cRuK+JDQz2Fr1OQKp21Nr5kyEcxCGZWp1PYD59ZbP+RNejfpaB3YGrJT/ihQifRy5D0uEFNCpYHKtCO1G990uapKrJZr0dVY1eq4inNGZ4Ig00KTh7GVqOjc/TnJ6QQMV+bh+qxn5axp/toF04XakjEbJuTdXPVSx6IPx0tvxgz1dLovDMKaK';const _IH='2a07626feaeb74657ef6338d7e09b51fc1757b15667586789e3c3043e125e041';let _src;

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
