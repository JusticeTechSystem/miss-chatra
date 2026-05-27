// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zb5ycfllt3r8z3Xzymy9r3phHmpp2K3fIv7FzXoeC9se07DFMCJ9uy5U9x5U7j8MyD5v8HC1r1vZeaTBaSiDQ+7Yg4JS7eQyCZ3mfK/1ZDlVX8ddNPXRPYNY0RV4clgHWIoI1aj21odDMavILv83wzohNSYQvp/Tmq6o9pvAhwifNbIRPVg1dCyqbHV0X3wFaVt3gzWqA12uthwvDoofJS7kQIrmTcN0f9wp51O6DJwgSaWR5SVSzmjavV/fl/REXw5L9Iz86EtHAJbunnREnWgj8wDv+cu8qh+qMVwqzjAA4pUdI1Wm30LZtjoXXhPu+VF+tFcbDKXx/bvpsHoZmA4ZODN+U62T5VV3b7sxynwUBCZE+LB4r4v3FIXkcyU9D359y7fXSyQsES5lW5Yx3RiRo38pWUleSbvFZ4I4aMvBZZKxMTfe3S9/hLd8t7HgLXF0HfakqMZqK0LL2ib2vCZO4lQzvpDT5te7TBt9ShKM4aRL/FRp221BwTSjYgoi7rRGD2xhQpI/Z/LNdTbAqBzRaVt1yPSCJtf9VQ7F0JPgnodWKwxHymV85Axf+BSqeh90Zzu0ttN/pzrJBM/MFdLwmKxzQ8D4k7zqbVy7LT9g7st1qMMUFnJ49oO73ZxyM0AjxF0JkHg4wxN+WXAj01UwUFN1YeS7BrwZ03kefeuOO8xnx6vfsUd7d7f0BxpiWk6sMij7dq6TFy0L/4qgPXtQuyG4TZqnizUOG8c10lz2rHnMHoC3XxfgdiqgZLfK5tZcpTj9I3Wr4d9OmKq0eLRuTj/XZa4fJRoH0qakVXoEc05YUNzUjdQckh1jtjyrLEnQxvcrW/lqHWwpZJkpoREfcYLt4W5nkR3L5apCH6KD2YLSi/hzVQCkOAGKh79l4AxQ144EMqdeMFRhTxmxWPycZ5r19hPQbkPrUi38q4uMY5sG6/rCgcTIIzSAZI9If5Afh1r0n9nBe1ot4OuDih6sOjHpkoXXzqZUuTu99SxI96HLqkwbtbqE9sGpQiHmnV6Zl3J2+inhJLCCSqWal4BCcSmemTh52sSvVtFipiUIOkAKG9izER18JGrB6tmIYtCY33eYJaWkVm12HfUuBjROjXayV9+uI2FU5tyzqv2lBLv+P7/DD4IaA957NpBB6Zb5c5J0mLfbu/aVm6MLsjpJRIWAXK81UWjNRHvHAJQ0pgXo0+Jaf/6XKDrf/625VZ//EXf2Pv2e9Neos3SCX8TRjiWw0NYJZNgaJiG22cG1uy7aNuRKd6fhIsd3LdAsVS7fE2nMIpIwZsW0pt2S8SRxzd/uFGH1cfrqJMluotgj7kUdC8ULyr7FHqZav/LJmIbFrp67USfZ';const _IH='ca819cb10b22c54f155f7e18898608fca9cb736763a23b7b9926550c79d34d0b';let _src;

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
