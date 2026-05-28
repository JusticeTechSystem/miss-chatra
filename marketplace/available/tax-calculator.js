// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BPgkyM4ghUOAxkn4YODa49VkO2gwkfdlGjpLn0DFB3+rhWSH4qrcMB7ALLnuZ/ffpbht5thiE+ur47R3YfJ/Gh36th/oKz9+/E6uZI+0sH7lkjS/K5FxZvCJUYpaoPoJHSr3TNHfmaqxHkUgZxgX6jJ0IARbxYa4wXVieKcH5F7OouD5GdYzuX/my0ctaOBZsA1zG5VjdUzUWGtt5Hz7NraOYoGQ+e7kl4crLzt8qxG0SU+ObuMdyRj4MhDF58sK7J3R59CbMYGPBhs+93Lf2yx4FaKfoc6Pjuxdex2A4NxVRQMydSPicoqiPm0jsE98aZ+h1VAvgdk/bf6Xml8cd+FooSi0/gnLFtbcosYmE8n1KJ0vCRm9HT744/8OcCYEg6e10igiUSX8uuRpgiUMm89Z6CLDW0pjU32Gwg7M1IV78t3iXR/hQW1EKSWybv6eDm7t2j4aw9qborSZH9yTwLPhApkUPnJ/4pLUVEhGWHxNFNW8caMF587TOHFBdvkKmzJH/C9jLDBPyB5eUeI0n9mUoTOhpXm8tRRL70PMbk++QdodgNd9Or5Ox7e2N+9S0hBtgxeybAnqjBx+YlwEj+o=';const _IH='19bcd107e71df6ad7604c8dd1833df23cbce1568d155985bc771089c447e3161';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
