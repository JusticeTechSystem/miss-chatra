// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQ+1lsnYOoTdMN12fR1zDqkvg9kHkHtFCndwUyP2u6h2xwWM0jVDW3jEAweWaHFn+1TgMSHEpmELFBu85xQVuc/4i5hroszmGZsdmfix1GcrzmRrIZWAoLigrCBs4WnlFa4N2Hg8ejDCDtSoa1jXK+zvtPbdnInMXBysper96wk9Sbcxp7Kf9D0MvBg//HC+FIpJqGo4Tkj721520vbWvPkLtpDmoL8wZkxQyNMxXy6xgMZrYhYnEKrSzQbR/LRfhFBDHjRuQkvMexIMd5E3QBAB+JEtEf6FcywpVqKkr4QWvTDDVooGSrcxsi4/8W47j+AUSDn2FHznw8GBBd4KxjcrwKkrVPSyXHtFc5MPrgtj+mtJftC2AVya1i0DiVLV4ROHY7Zxb88SAhBt2mlrttkB3vhiYNmLthUtaPJIOfhBWOuXHseT0u0NaOCEKbFCLPK+BYv19Z9DCknqYAAbJa3U9R7ThDL8Ixhdpmf/5Nw/f0koMCRTipxTnP0sokeY+m/g/JFVc+CqElrR5qmOZ/X4Obx3lApnDjMCPWv5eCje4OlLml/sBjwPhMANsky6rW5XGzQFsnf9zzf8YS230C6bKMKp9LgdZVxdQpU/jBzP9EpVN3GL5lNwqqkVMxiJkaxmaRUNDnGY40ab4k4dXZopgimwcRR+g+Cep7YnVA+utqsgmWhmrMzGYNXh6eQ0uQ3cR7QdRW2M6UVBHc/aD8qsRTRg+XNqvN4TWwfzR7vVFEW/T+/pmymyU+j+JXrOFvHYtpplyUgHJaFGryvg65bYuGFWHoIcNZQGNLMIaeCKT9p+uqLaPvB3OLytyr54ifugI4CtEP8TCaFpFvfpDiiuJ2/YFKfSUxiGcGGtWsXSBRKMMBUEc/AsTQy+yuvkjhWjWiydEbfHHzIDvn7+fH/mb6fI6+Y6PA9eMyjrYHlGfXn9xpssgLzh90w=';const _IH='93e12e27da1b8a2a1a7aef556df27b35deb27cb0e6a4e1b2133074cd03772e25';let _src;

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
