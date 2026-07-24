// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLwseWV09BqIi3SV3fFFZ2mTH/z97x1RsjBwzARNeFJ132AGgZBzmPPzXzFjr2Kcv2mx56rLr+k0v51F1emUcnm3u96U7DuNOndwqHCkrq3nYOlMeu0y4AAIqiVGYdqiruPna3XXDaPwPrQMKniK8YBi4X+8En/vYHFH+CnpJiIm6dznP8VShDLGZl82EByAfbnqRwNq1tQB3ASzCf7an2njKyoB5GBRCvFP9wkg+IDCDz3Sk9QeNAomCHkeY++qJO+Bsc7MgTuCom/Ugp3Se7ZChIh7tHFUbChv79onbhxpa4jJ6b9tRKnU2B92N8wJscXqncvkmH3zB3pLevO3tOpv7Xa4DayumqNHwbjMhSujZc7bEjcjTi1tjpJfMt0jvlXERavcLrgod7OsBmhJmLq491G/TJKR20nhfEmX1cg+tzJ0X4PMVDsVCiP2Hb2qNvhmTIxf10056wNBwwaesGCE13dEiRPj0dQqzXPxFatCEOMGcL8zfqBbltjbRbHN3lFV1XzvzT4WZ1pHWxfOz4F2dD6IenoD3+RLiJNwj9ra84wlxI1vskxxHEQeSdy9bC8xvoscKshzthMZMRg23zR2PafTqJXfUR/StUqdEVJtPstU+ccmOK3mZ7x4/WhDmotWDUfAQqhnlYUDDxaogoAV46JREL/7OQmeuQOyXvIC4pVUQIeu6FjkNDWVsvRGtbE5X6MN2aXoxP2qEBlaALrdQ0mAVHY4MvlDsMAqUNJw6aiTKdJA==';const _IH='975ea1e7f0ce962b5f49e1108ad1a9b7ec8dabd15b38e25d58baa27f57aed509';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
