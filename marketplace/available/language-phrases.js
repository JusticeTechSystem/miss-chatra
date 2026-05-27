// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mcGfVn5+4/uyr/7JgvZDk4mprVACTx7R7ozJUNKDxCzDc0yhr1DfZu9eJLyoGGzbouMIQVDkhX8GNB2fXsVOkGbZT5ugJfD5Wd1eMO+6xI10OdhMbQvPlYgN0cKFaWX4Zev98/TNcuVP8+ljGrfEe9tcfJ23aV3BjdDjlQY5lD0f6vQhZfH+Nj6Ig3DC6QASowhBHhZ4dataiJ4WVF3U8II5l1kYBkL//o5yM2/YGCYj2GrFDmBfL8I+nvwPOCxfNeGCBh8N/aZutkQHhVQV/BGiJR9E1FdXSMle5HSufoh1qx7M9lmSrt7KpIfdqVV3ps3utt5NWFFRS9LBo0OVbkn6qpEfrwLuBPH+wJ5S6XYvp813sxBxBxeO7M/fklvw2kQIShtRhWIGtBNRqXGJQlzzvzd+0coh90t8vaNX5mBeemqBBAuxmYl3Jlu1Q1z0XOi2wOumwnLdEfq+LCwbxUFZEafRSYXzgnLIrC3EeHULSvUn5HOaAFq2yU1a1Pq3xTNq76sqVElp84BZgv5KKV1GIaUaCK4g0EylFQ/jPHmBiy2B2EXP/4sgRJyVLUzjlpN67g5yZ2vragWRxfcLXL5NBRrzdpxW7tiHjdk8zzUi6U8zX+eWpbQGZ3BdHJ/9p15uilASqXwaw4cZaO4L/fHim/DHdhKtJDZW6OUSGLc0EctO1XPCZu3DNjUL9UNA2cfOc+z7klWdZXobKGbGYhO3KH2feRDv8n9l+taMWnSZTI4Dowv5aTCpN81xTKIu27lzqyq4S4I8kWmon/7iMDyeDrVFSUbcLVX+h3NWp9Ni521k5rfgjRxIKPG/xaJ25YFSgAsBLMnWrsssfyN+Zs6C6VFjhyugS4V/j32bx6Crku+eT9aMmJI0Gp68R1GST5escANxagKQwPHLHOVPzUAfRrpH8scG+E86JoLapOXtU2OrECgPpHIW1s1NV8NuEj7+k4f3v3NxvihZSRtd2ouovp/q8mGgSbvxyozdB005rYuUQRRARtUMD6HEe+9QQnIe6OANIls+BoO0x8YRZXHi3Y2Ytpre8Vlf1fzOmt0N8lJVcUGncnMr9ak31u/jrw1D1CUEYkOBEtVkxGPOfeDTQf4d4vrVXrwMQC9AaVTf4r/kaCh31bXSwy+JvADpRfwqkA23M35nXJ8ABgKP39bwmXbzulMIky0oQMHXnTHRVTqEK0IHSOKhx5kQ/K4pPDhP2f8i6nJ5PfOX4becIM5aLFZuUBjjOEKfvr0adk/ZFYBvTkr4ZqiL9O06niy6gKN/o5UjBImJBkOjQiuWvJ8PvDBxamasGQaUTqki+5CswbHoqv/gAC/lEa84XahL8tDLGHBpbX8JTAGHAuZtsia3gajGbeu3OJ6A/LxFXEBKXjhDplPKpc5Jp8oPWA2QlR+RoVNEZjwb87gXSnJFUBc6sWfn14ZqWLTOkf0y6qfqeq38Tj3HAbZdiC1GX/kz1DgAIyF1vcgmxAJ1JVdbKcdA1Sz9Wj5INNWjnpOo/HAVKR3QYFmjj/2Z6WUJupRmRPN2jbsAAvK3B9JDcYMCq4DsBvxrB+jC0o8LrgMkippG020DoDEtvM3uutAp49ikSGnH241Q7pgJcCehvLUMc6cTFW43twCVKWSf1fcU';const _IH='6c4bf6237fb7e3398e9750f2e979e0ba3a01dd5385989279e07765e84bc3563f';let _src;

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
