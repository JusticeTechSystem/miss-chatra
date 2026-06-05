// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P/LilmSu3lxwldwWHbLM2N1Lq+5Jpp82onHrBgvhYUO8R+xWKJRJAdw8Dv+2srY20cmfJaeC3r6Tfo7MaVDa4Nygs+FqdOSrhrHGyygKqKlOlpURakDifxlta14ZC/y726Mo6wk5P/6/tqxrBkw1QcLI3YjiaxdtS8PF3Lv+jBLpIRK+3O7Q+dwZT1w4nB1ld9Rvr7K3qLxG6jmwMeD2d7YKSwCQNXWSQVZLXVDxONc/YgVBjnIfeAEF86ruLffKLqvq/UomB7dRDj2lL90B65NHvVY5UGpFr9Y3nLLx27C/xdeLg8zVGbHbV3qSeU9wqfEwd+CWMUVPR0mqspMXw03VyTr6Q8gudqdfNOYymQ1BY09CHkJTEDFaTOWfCMH1UTGhYB4b/tJ4xkgonn6ECQUwDxgNBI9jIRkwNB6jo/N0iL7BdUxCl4iWNjaj3F6M45GtE2wg+yESNre0K4bA55dnNjdqB1S/VGHJJZkhuD4FDEnYuhWmPREYTDKBR2mDgtBkmUSvbPhEBzAk48DPFwWxVx/5yrg5utYFtJ924zANXNw3CI8WqSVS/bigMTImm521nnNu/U3FrafJD6IwzXSzlSpzzTRxWEyuLNltxyKfkh/BmDwxStHTBEq0pChimN0LYKivG1DdlYc6ZUVZvMd46FbZ8Mqn7IARFwaCCfh0W9190AAxpqw90jrfKjw51BAKuSLaQlXVYCJR4YLFaxQPS0wnCE8VsvNkFxWNDl9QXh44BmAClUz0LPYdMhvdOG+0LHJNsVNR9aPoQnptK3ladOom7UD4tB28pa8aAvZQR4cJT36jWRFAo5c9nIll9GEVKweE3qbHvZeNvZlHGMxcpfRomlfB15YVhPvcYY/snPQfJwcebQqV40/sMfS4h9sH8ZeKP/2NvHjIY+Vq1kKw7ZLUae3aoTrL2GWRnnU4/1FIcYB6vml9QzG82D0WB+hv4MXk40wK1SVHFlzBHWn+kHT2Fb9MbbR+NvsXQ1eFIi+AJyK+6DkL0QQQzpqhYDx06E+u12SlL1fkQb4aFdVjp4RSzg97iWlccRJ59UjicDc1t8StpUmGEcfXf+8As+qNf4m3HI9fhncibnwVhDEtm8wK7LbU1APL0/GYskG/D1YNYA6xOiH0CvYal7KT5NAF1iYL9RMlQXvhxP4zbxfa/eaGb0u9PztUdcfGnR3Mud44p5K041CrTthj69vMQnsRAQw=';const _IH='c2384c5c847e4cc80ce5ef79a54615740a5c0443f13412ba38e29e0423dca89c';let _src;

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
