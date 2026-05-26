// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MGkWCH/yoLmu3dnfHyNR9o94L3WNXZkJmOrk+0bM3uvTZ2AKUQbn7u8KfezHSNFLkP4mstDuFSMeTR1iGxy58hcdWGBGiJJS5R89x+xaRc7JguXA+mKwxcMBHVglcP2dxFM9qzAaAPn+lgLQycIWPeq7RS9TTpu9wJD8wOvKB7FyTLCNEEAvprfbR5UvrbWIorXO2yxrxd43cfPnaGrtkQ4lf4u7netSDNyRweht3u296nbT0qmwaACO1Hz1aGuPIt/nvbdy2D9JLkkq9WD63T6XNM1fBg+7pcXzxbaOl7EBPHnxxSYEIdvglbH85kfvYkq8tWTwe+pWkVLzu+nKY8pn+yZlT0asbGj025FSLtLgzjrk+iQf4igtYfU5IWMccfSUu8KZ/Ot3Shi5fKdtQlSkF6jUTAiEZl+GU54Wi8uMAGvDWXZmjgWzGolcz1hVZ0i9ueuZy6b6SRyRtolBMZdGLzSXBMLeDX1fufqCSLN6etHdhi3yHT9ArpGW3MLMwmjzKw6ZPR0FcVPhFXPlCBb83rM5JR5lSrkJg0G3fl2PKiWxzw4Qj1YXYnsk1J9eDMt2Fyv4060o5nDaM/RiFYAoUmGQ2PJUSmj84/7ZsM19ClxAntxbm8TgVx6GYtsTWDiih+i2Uiz0O97Mx0Cp6+oTvkWTrQzDnZyuriwLzQg3iKA9ubeCwW4y3xqVSEeYpaW9Kr9P6AAOK9OJ4nMxF71paJE3wnI4RTV1YpGp3PXO1NiPx/2ZV31iK/kaU/3NpMEo4XB7PNELq4XhK3dVbCvuchOA6qcMEoPaaPzmiKCq4F5srzK7uVhFdgc2S/DsdG+FP/59m2TBkIqIir7uNvdsoHgqZtcLf6VMxhEbOCQZWff9/Wvt2g88GX3XvKMrozG19mBCWJpMcd6YJLhTbF3UdmJjC5OvDZ8JBYP97aSX2fiQF4/fFa307kbqv/bcmdkQUx5L8pN1+fE1jD/k9lNsImchD8T9PHLKYvhB/eJQ1Ieat+6Zn9LiA+bLr/h56MK+0qIatX5ALiPOzwNE0tOObfPQ5yMMak04cf2F5TYLN+J4ZZOCsSNjBiQwLzOHU7TkLJLKB27rLL4sjJ7BCY2WABp4zcrnvnT4N/FmupIofIieXEdfx5i/Yc+tHqPCiL54J966Z8xKDVR/e0nSgKc2t4XCLXIjjAL/2E9OVi2MSNwSvwadQBbn72rKxykfnml/aTwClSs=';const _IH='d9d0acf20325033d43a889db6d1e5216113c3be2d1aa326b74137479b67d9b52';let _src;

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
