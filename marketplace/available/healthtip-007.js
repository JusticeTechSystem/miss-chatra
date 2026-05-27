// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3UimnCR62uDD9KGJLMzGM23UgD0O+3M2EL3Dfh1Qx93ATKHjDDXzcFMJL0ivJx1UFwYJG7qari4gsV7qeECJhH25q2AJaUnemhZoXRxj7vJB6c9CByGqsE57OtjVGculdE+e/EyJeq3NXN7irxhsDMo58D3LiO/IFhMtBVgV90eYYHjATNuF3g+vph5glSokfayC8jilHZO24fQzzFlzypVg1sWOe6e32R8elHOmR4634ZIedX+bEKrrHafmq5YFWp7r1PhWwb8w7WP3B4k5Gs1UM+5Hf7jXnDPC/U/IC2pAg4271iynZcdO+pKPmasZU2hBRoKHVf6qxaPKkb0J+5T1yZGFgN+KAE1GDqtwgLOOYt2s73llc8QiE26cBat7EKiwhiAi1DPyenZ2RRyFS31HpPneOqLXRinrgeop2aqhcq9bzBgirDaPL/Ej+fHXrlALKae1wfEgY/8AFYYU8p9dovToNzljQHjnnzbduiaBiFB/akjgTrbXaMRLV11c9wPpO9gcGH2sCFeJf7fr2UvCNmw9M5RJTfso+QPGblZ8yVKtAAkn4zgQAE+5JVfM8oYQXkobcqRhqQqMTsAIGOmlz9FcVrQiiMNmyUwPxjD0hYABWg6F7ZmFZlytmokvEvnRKtc4uW0X5E7fuegzqcw0CltMLeLaUNZU/jK8ePHFKcQUNQMQPX2fXaSXshf1V+VHcaRBWb2DBH/FfXxs7+Iu8/QqEfOgzCszXg+lnRpSBejMkJn5Xfo7Yt5CqHj3I6B4eU9LRamc78uQH814oRBibg3doVObEOYdR2Fr1rcsakC14YPXE7i2hHXVJPnhWYcLUFQ9lU5dln+bCb5o/Ur2c0VMRWB6e1pkkxdlVv1BMglMs7b/Jwn6WFd4G+GTd7aHmdjm9Fx9nt+R8b+e2/ZPZ3FqMt6qFJbCuK8mVf9funGi+K+FlA==';const _IH='b2633cc8313fd4d317126cb145f1f8f0fdf56273c20b817ec45c519d6ba82412';let _src;

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
