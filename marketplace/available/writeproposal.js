// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UPr7SRohRke6XuYKNHGG6A2XCDwrpkuvT4qhTPnO9sHU2ZczlQs7o00Cu7xsJ/0c2Vl4EUTpJr73aak2l31FBJVmEdpFZhgKn5A1cszDUQQERdY2E61rrhwk2vMe3XL5ZMiSAChsbIvqyFLhrE2163jgU6ZTrrNrNNZHibAwMuUlNOtmYihcZkGWqodB+EufntrSin+DmnRfUhu4K6Ka80QDYendxtdIdsjCQKZS5VIs5zpY10TE6PRGFD7kytQoRoyz//aIT2beNnYKPHLbrOi83qBENolTQtF8D/clIU5+BBR4bjBSqTzzCscXLApj7U3KHfp2vkjyl8r0VkWdx97ioDnuRDCv/8wYt5YalK8wfX+pA+/tIGDeGNzZcfuweZZx+bTfkQARxEwQryYsgbXeymXWxP9gVMdpqQh+inTw32BmZNS4H8nl02ox7+v04FrtYxpDVA+C8oJSXrli4bl3zgxKj2qYdAshNMWY7KIbCB8pAU1yzUhjUlpGpV//+o7Skj+lq/W6sbw7UlGK0KSwsZ6hMdJ4PdRkwjxIWze3chmVMOadxBlEdntk3ubk6VwhDnAqBYvs4PLuD8YD5P2ZVAnYzTt2h6FZH755ZlScwKc3Df+j3ftiIEV483lK5775S1mv2EbCw+3r7IJqBlE8RcLcT3NWBgyt1Em+C6IhJfa8gWk6iJ9+6t4O0znP6hBfHrZUDMtvnAXEDAim/RVaPtcMZN3zQuUAJYBi/Mv0h0gSRuAY7ttwZRsjsVlMgKdpVFPaanvpUKRkMuiYDB+5XJK/n8lZobuh8pGAQGU8Nk3t3rDpe89GzEd4+UEt9MYAWWOypK1ZkXWEBMHxhsVDr69Eazuz0hrs5ox+fc5ObO6SGCZ6J6BVxp+ZN++JKVftLsVCMOQpGPcWMkl5e0/kVLPlaks/3X2HR+qeyKSrT+3f/3MFz2JUccqPGsWyl8zcG79YmTJESZNToL4oo8xh+VFKiLY99fC0FhtS3puUKDI/OZHWh1ym58Sm7R+aL3nDwvVtfU63UbZJXCdsiDelClM1VA0Xu5I7KUu1wfWGiIhJz6jk/XhbmV0bEbDCf90nrr2zvohLdSFl9NtzvSGOzYmreZIyiZH6HYnvG5zrbqZ+agKTNTJlDti/QxXGlMeE1Pv5zwXFNe16oDNJ9JXifhDuTrY7+WBQ9Hs9MufKTA8mNt5IavG+dffiJPJBSnBFYbgMqFg3JIC2hDEkg/UVow==';const _IH='1d89995623f23817bcda2bdd0105cef5cf91d7ce8a654a6e6d0ce9ccfc73513e';let _src;

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
