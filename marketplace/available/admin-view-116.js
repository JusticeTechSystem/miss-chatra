// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FjugzJunAccuUNIqk6inXGvY4Wc0MzVjtkhY9w7eSedaetnCD6p+B5bDLERP83S02kWw+JZrRmnlO1odmB2u9S4qj7NM7XND8TDgdB8wd39CzrfvnzXYd0/r+p+vMBddIY3pYjiNWlNKh5GPTAPaFYO+o/iVBj6u6lOmzefT3Id7DpdT/mAQtPUNvi50ESoSu96PAnUpoRduvsK01+thivHl8sIBNOiEO8PvO7kKfBt9Vzqqi5lToawCqhk+wy1EPUICOhabctk8Il2S6OEQxuf7mel4f/3JV1ho/VBv06YbISJcLxNKSkYEbqFcmvuurqaLC8R44si4ROIWXt5BkMsgcLxUeEbBk79Zpz8EYmk0T0L/w7J4791VMBBd1P61EzIvPSVD1Ggx2MPVH59uYsYYCJWkUMsoKPcyLzrZ/PMKFgF32IZBBrdkfGHoIZjmDNTGNJ6hJ48WoxYIA01XoXnp1/0txy2tO5pPPYWm+A2CBcSMa1coc10ko+bFJYWa2p/RkoBlPt507bna+KLZqssRMj+K0/pBqefU7canSe1cxKXVfx3Yu9QB5INEmT0KH3dxKlwvSeu5UVD9g4QSjf1igl3jHYN2W0N16y+4/Ixa7F69ctre+vRdWUi/LgFkokKa8aWS5bGD7cnIoNB+bL477Q1NbAp7gPB/58r7D+dpF0GKD+P9mcF2/WkOKXqDNrelntGyiktzBrkPl3Cl9cw8BTbBC7iXWzjY3D5ldUK0QfQNsnseS6Ah/tkYl3yFDVwP3gh0kzs9Hw2p9GaQCZsCifSR5qcLIRDjeKJ1U0uQylkbn4VdPuxNwh41pu+KRo2XHByVeo8xlLSB9IqGIC+tQxe5ft+qk5VdP7CWHxeuKu6xkjUmXvVVKKJP/0zExUDzkLVs7wh6JSSIpZAZceYyGGt4Gs+bbJLBEcW5MsvkXjc1I+vQ2cJsiikCnD5pFfrUr3TA2MXW8zniELN6FrF41IJmtdJPv7TVXyaETA/MvvM=';const _IH='e5a299350a2a87e9ebd41905bcd33fe37058a6853b20075c719a34707b1fe6e0';let _src;

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
