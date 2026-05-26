// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jy1cqWzM3sKw/ggTrkDIQ1GFLcGvdT9U0muwSljeloAJYp2z7fwKwBxuPXdzJ2r1aiCwSAjvx76qIjz3fsRJwkueWFtGbpzvbYfGDPfx5AXncdU+D2wGjEnS9PKHLekQr5XrNlb5nA7/PyK0m/nncSGZ9HPsikbeS6Pbulr7ns5udSYIsybKEenPxJBETqqzZ+ryaod8IZx+98rXdd0g9dNulxOZuIVjDJBeLkZqa5ncaQsgduZS6jxiY7vJV4Uk8td8WbmFSiN0STSFJTi1o+T4VNy2COknsfNQpFEn8BEpZbYoiu3g0LPN1BFn/t/jOYWTuwv3fhR6LvHlFzzjA4KRVw59+LJocJaTXUQmi+hk56mT69BOtV3DR/WdZv7mx10D2W4yH8hF9yLlUFgVKAlZJz0qGCd2TgnSnk648LOXNO/L01z5j9EE9IY5BvETgwiA3601X1cKxV7ZMGWOgZESQ56Kb4sR26LTqaQ2j4KS0fh27LjlzA/JUGsmMqa2oRxBpKSwtrBWHiMtC9EYN+Bg1u1HfPNREHNwYXfvKsMp1cyxnNX0Yjz0aoQSVbfMPIR0QmoDXA2QU6KnaAQ6k2D6i1wLy+eHgLrEdeKEjsG73eU0jbtecAc1dBJVXoA3YnAT43mkwQ1zrXJjB8kIurBipvhGV1HsTZGDGMAhxtfJDKxoDpzH+L1f1O1QHT2j8f1z3vlbvFHMU9wiVi9QH4JitPb1mQKbu+Ml5UTnGxe5/vNrRkJz2JpIYsjaBE3pKfPNsdLGLw1LhWRFxH3qK0QwXTDY7WHIY5PavZjTuJGLH0xBRV7lxa2aK79nkRu2U4Y8PmBZv8qgm8se2/1lq5S7L6J7YNvoKjA3P6sfZz9DMGHDwPhtZZ+DXc8WVtMDn7rm2ZYpf6VzSJj7owSOGFgA3BWxkFxPhJflHkIQRFgHMHNnSDZU+Tk0XdYBxbJ5Bm67Bfy+zwbDJIm1w6iJh0k3nDWlyBsWq46tvBXr+PzdHVIFb+8OG5p+mwqwKJn2zPwpbYjTvDMStay/0ggnp/KPLTmrunQt8jaVLk7MS+l24n32Pyl88CaO7lZAT5Ckc6qyK589BZ5VtF4m/7omH9JEGSJlSTbWLGar+H4TylRrh/aoosQC/yetO3z4N1X7AHE9iBEz8EnFsN/hVN+FeFlZcvmm7bnreSD75uxaUPTEimaCUE0Oz8sU3bOThtZPcIP1mxIKSOhJcGGKM3aj/dqwKN0V1MUNwQ4W1pVc363ylzl8ajWT+cWBPufbD2CD3IjTMzvLuR/353jxwbZYRimJjg==';const _IH='c7a1cab97a8145a4f5dc54a6908ef6a2b20b217bf85d36df07c1a5c11f09f827';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
