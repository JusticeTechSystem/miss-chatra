// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wwFNb4Opzut9Wwx0RUrrMU3FQuMVijnTWH8lnIfvrJo9JuU7FdJWye8kU0WuonuKENcOnte0/N+r4S/5RrTUjfZV+0sYXVWhYGqOHy2me5DyX3kWIxgAvKN6lHXRMBK9w6BfbIpWSjUQJYhXc/wU9jpsjiVtG4q3DzrfN/p4WZ+slHpwQf6tODFi2nPQYbSwKybOSPYIcEPTHEs0SEo7a5pRw1/f+qXmJUIVHhiXfqqGP0bCYiZ+yEjjPRMArhdx/JlRCKWD2X4FnfBkZx05rxHJ2O56i5Tw7111Nb3ARbWwG3EU/670ClzAcPAp3YObiYI4Ytm2cGdL+5qOpACOs8i/UMm2vj66cr3kWno5DcILNpJLYkw0oKs3auGZVXu91VOedQIp8rW76htmPHcVYt+MFgJ8JY92Q/0HKmE7O/F1jUnI2Q9HgPdyHKtZPszk73Muoc0P+hS3sjEK7WRJA9/Y5k3aTfROxuoDt0uJnwzLuJn/yEP5loklC6ipjymhjCMs0tafB1hK5pg+arR8QtN+WyYXP2Wz0rMR+pQewdaPLE/BwjninY44ar1aduCpKyLGXU2cTuLARUWPWuzFXj+cXfnSGoQADQdSpOrruaJXnFe0ggR233taQX3bFh6t/+cVxiDhlK9xucsQ/0Ue6amlqs0hkhxGbvqhFDFQkFGuA9DLSa+daaqHRmScqhPgma6/7Iq9YqFOQnDw5apPLOnEMjU43iQxJBxTpxXluna0NBztIewrNUmzuOxn+XiB8eDITou+MYUGi2rbjSrjYEx/Wvw77NPuKwFxeFOTN8KHGcSOZmjQAz4u2jKOrjMJsxzo/ig83BuyUMlRxP/YOhIzUMZpW75GZrIhV5dbXlBwBsjrgNgwLp4YWMkX7YA7KxM3G9yKr57R3Y0Ml3k9u4MqPfIuE4KYnVN5nbCe6LpGTsv7FkIZYM6uke0Ig5Du3qw5M/WfE3HAHiD7o5Ck20VisezRbMgEYet7u/xzUFB/v/n7ik1EaZHC3wbyUmvvoI2i1PZlLpWLD6P0PtagiiJDcEPEW1U12AxH4W+tf6u9a2xFjzRYsnU/HQ1lwZzNZxhaDDce83MhE028VY6Y4+HTFKC4729gk1UpY8c5yea6GGqJn9yzip6E1g1PGMhYYauosyLNEj4Xd0dtoxZI6MPwwBUyPyhjeQmq3gvEHfGVLZmvu6blcnMzrNAO574CQt3P8MmfMp4f61JIBe7s7Yl+wHml8iSnGv5NLlbxJi/p8XdtQsB5iscSwQOELQjeriMrcR7WcDPvDoFqp5qoVTRQa0es1HlWDxmsvXfLmKsVhb3AEV1xzjkgW12vfSs6Nw/SI0ZJy9vrttlVNNQnFaXJTiOUp+f494BQIj+w==';const _IH='205f87e8445becd9d827dba5e069745bf4ac6f3c96d1a65631c735f037d44a5f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
