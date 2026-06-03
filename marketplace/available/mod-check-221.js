// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UJcG3ExBfnxYcQJUasYMkdhbGgMfO9CTtSSts3F/4iGMQscF7wwJrv9PYi4g4F8j3W40kQ2Yu29r9pdIOzNdY2ZbAuHadHi3+u0LIOmLXDUslpHzLUWNtm7qqBBkTqKfOMmi24GxxuLMrpy7Z9HQSiY0yZ9s60w5Gp/j+WMjJ+xDpTSMP3VD9iyou/T+ME6YOG04c1UHRz5HNBV3lfh+tvTR1cMZm1WN37rBgOiGHgLzPl9jiQbD6yxM6BqHNUaOqUkKZi6mRYrZIOiaUwi1iPJChO+bCvmfmQ1w7trW6kl1MwcUyVI29TOCk4fF4wYt8xLtcC1FK6ROX/9bW1Qo1LbAXwrX5kDqPqjND71EyvVifJTpSsew9NmjeM433C/4t4R8Kp4GFLBGgLVELTGRNcmxq6+k/05Yg/JUWFS5KgYncFJPQ6cuCfcX5zRdZkWceqxTUjGNtvnjnEQOlCxuyylJfFL9YLc2KplRLWlm8MijGKHo3BPADy7PtQYReMuAYY22nM56/1lB/o4lBQFgIH6GnHzFvxmn26xYxmjRytOLkJoq26U6k/juj+CqzG/4wRhIQipcTNnYO9NB0qN8zeVWrXMv25L/e77MZaUx6EONJBRWZ0HgSsCcSm50gWOVu4/0MOtKtuzwxpuFS/tUJoG8mo+W1Xhn1Qa+IPi1iTOIPs2lAsjj//qVehF4DFW1FQcYwDgci5nXYJ0keT9z1eqpKKEn7PLV23GSz8TEt+brnrUb8MPKGeqV3ZXFUXTDliYRuDq28BfsPK1t6I2i0AOW/acoF2AJmi6P5A4eLtEZhPMpF8lqSxBR4dGtS2DIOGVUhFz39QdVtXtTi8VRUvxsOpOig6f2BAuFefKvjvAU0atEByPIXeqPZ5I0RdYP8TiCWTHdTmOU7UI4xrZngaxY7RlwVpxQEvCgSe7RSXc1cu8Ko82yE4kzJMFqOLLk6By/iVhi85o3JnHThWLByAfZJW3DKNo/u6nk+TfuKy688hHBS6EjHaZC1R/houXhzlc152ytODf/U0TnSeeg0dFJuq6wXg9N9CBmQQ+dGkA6ZNtZV8Q0Chv6CJ4l5TMVKWYu9eWLmDcvv9Ii4S8EhAVKuSWjIRwBFXPAAJ+DagCqdY6w6S/toMxC+ljBTTdn1d6Kwb19VTdzQus2De/cZWiw2xiNSzQGRxn8ybzIu3D22YtcYzza7zouuNeui3o5kxopgEUtKD5Sgd9vMbFjoCONd8cyBwxWtqNbnZRQ0zABPNPjREiZuUZyQei0M1dydOS2L8AMAYQE3cJSV1or8PCZnNZF1n1XBSvNgu6pX/rDhwOhYvokfsMfeMdpul+Il4cWCvyfpH2/bGm36HuBofgZ/t/DzdJ2E1560aWx';const _IH='34797c3893789d4548615c51d3e60c3056587e43b9319a08ecf1c6aa9e8c3948';let _src;

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
