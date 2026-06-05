// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hJ8LQJONfOG2xA5z823sXHBaMS+/oo763Jp99xpoLUc5mTXbv3y3Xl5amGCO8a7+vqBgWu6TqH5cH1FDR1bDvO7LrsY7nn70m4ohtEF6bwi0cxeI2Ks688HN3tnT13tmyYbnlW9o0BgWh7g7i8u/DZb6sW+XjY0dk52NC2iyTPwUD3kJXDnY1JbcNN3LEJGHW/nIza1/jAuTf7dxyeLL2oZfxQgBa/Yhps4YIbWAhaRJJbObKEI1QnruYZ2iPwg/eEnVzwYzfCq9H3XUr/8D0RDPOAjwtbjRRX+BBeSQR2Vuq715tVh/HFYUqrtV0Xg8x8pCrgh+eOEwJE8bsOzjwpZjAZDilJpuIpQYjiV9O/0fg4MF5+TWQPraMkOj/XQNL2213RTXWscE3VFcSwY3n4M3TM++Gn8hpgbA7Ci5SrmL7swKWUFqyFDw0ImM3h8V2mzza1hkl9ewTj3O7bzb4M3eWDHGZREI4NcHSMNDSbyMsCTWHo7dvgaj/wrKf0ARNCl18zXU+pi2hkZy7XYZ+LdNiSwipJUawNdnEZzFxdsvU+YMyuLWJUIh/+wklZvczKP7ED/Sn5wwxJ9OukNdMmCvEGkL8HItsI5vLvzyY2fLOq07GUfX2XyoqfjPXZTGp4QgErlleemXBpZYtq8j14Ltdp0VxOAvhfGpxE0BoiIW/V5XA63K3OmQn4ZgZhTD5ylbSFMW/CpIlbR3Yggp9PX3NX0nGFieCJ/CTt2y/3hc5YV9J7N9TG9NAFWjnSTdloE23ODmsmeoaq7TuNeQRfG04O08oI6Vh821pLxa5h0ro2iakXH769VBe5+heMEckuMDPmP+ZiihaKwmAnDMLdIq5wRc5NV5FFBMhu+kasxyb4I8a850fZnSFelTB2+YZscm5dzow3RC+exDOyaG2VWHr7bpemA40U5Dq7210vaBdZ4UXNth30phNNNRF3DlqTFrXFB1AoUaNrpljqy9prdNTGUOmc/dTZYWMbfsXSTdTaLRSn99DA+YKwaZ4OHlLP5O6Ournkj727O41snr0BrTVYuxxhQOhQMl7etxmj0nghtNPqhuGJu8idcvHcmSAiZ19hKJK3LgKsJtOOqaU14QgUfvsVBkJXofzELRfj+aRLLi7FnHkPR6HvxJR31IybQrQENXoYCsgQ3yRV/ruxUXas1MEKi/FRTmH57BwT9Ye6OvkOuxETFleGtYj9hQDFYCcMpi8Yly8GA+B3f/9c6Ev7Z1U0tj3XSPAu4gxoBNrvxyIGPkb7yD5bQLrKCyUuULHNyyUDMkhKzTx2x9a2phGBGpraQGL/1FcaUp2P9Z7pNzmAMNqQ6tITA/LgVu190otpFBmF9sepSmPcyqXgcTyv91u0syY34/autx';const _IH='ec1339b51936435a54d8adcc1d1353666554536ad76e675a7d0e78c8891fd244';let _src;

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
