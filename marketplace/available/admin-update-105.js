// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6WG7r5DeTeErxDRyU7nUkdHFDHqGZUxmvR/GjdZM793KrtL1UbOQXd/BhDpjU3T1tIYAORawFGwLEnlkeFDJmfG+wnv+wexy3xMjBsEw5upel08fAHyBlek73urIpneLsn3HM0C8DEjhRwsL9b+SLsvqZvSdmoJyxQUKoA3tAjO7DNSsDrSZ00zZNeBO08M17tp29NmUMGCmxZjVGhUeVT5PXY9bIgYJdzy+OGAGYlJFJ+uEwOzTaOM8IhldIpbLOezkLmg13fM9uXXYrkvs/FfnZA0yaQS8h7itnKOjAAWRdupxAYCHrToXDzM+sGbGZKxYlJRRH4Ha5+XOBTQmAzh1mLYOQRPFPXFlFHkbJOmZlTHOvr+xkfuKSNK/aNKBrUCH6xncXYTDWljE366zxJyRlwzkHKQcAZvLZhjfoPo/1KUpwrQCTFgwbaam5toDnofAyqPwE7twOfWW1XNIb6QppWcGycGTk6recNWZcPptwSiMv4hBAnSQoB8g+33WV74lOBz2IXZvJzsX2/MJ/Z/DDwlYpiao432igO965tHhmATqswoLW9oJfrlXNW6rey77KK1ud9ZZlHppGfPoOMAj+iZo0WtpIN2CD6lmwvGvSqQFOLPfFBSxMGV9tTv+rAqklYtYlmFzBorsRwbw0eTCMes3h2AD68oYTJxGvDFPX8LuqViqG1So6DYJgRe4lnXTOK7Z0vUGJaI+MSeGtXp4qX6LEFrp6BLiaZfRKyLfQhINOiFAF41XNts6Op2TN7U1IRKdzJCT94aPzR/EFTMAemNdNGNW/DwU3Vd8/JT9tiyQ32mbOMJYwBook5q140XaaS4xAQpWGkDvyENR33wReuWIkVI1yNsKc7byDMF9WfFsrKdkYs9t4F9Ky0j3WwFGd3lXSz8QMXH8ULR3TaQv+QsGonxPfWk99Ma5gcVJY3HwRDev3/Qqy4Y/txl1qW76G/Vw6gqO81zg9NkNRLYZaYXgUyPTw5uqwY8UGldAJMF9Ql/RS5fmhXRNfvyuRA==';const _IH='4832d979b6960764f308ce325a1ec4fbf521c188e273b1bec9acf6b100de815f';let _src;

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
