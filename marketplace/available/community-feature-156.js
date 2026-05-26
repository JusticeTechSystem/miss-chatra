// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tQ7qce44gEntsCH/hKaPsu8wcSwfzJ1IknJdMVZ88lYiQg3c+WVz/XQh4Hp76xpCg7D9KqEENEXrqkbhgZzhkdehrTvNIO3423fCsHf4pjznDhBIHdp2eYYcv/GjEaJXmI6nSIHS70c1u99s7ncsPCNxenVVmJjzJJT7aaV5alqeAH39RtpHUNhf7+3ifYsWH7GJBy2Plqs07CMDklLlKFgAAf/IrdauJKym4nMkxRqU385GeB212gRTunBlwp00SIkEkZB72WlLaFqONfBR70jg8OPgUUu8VfVSY/SxndNw1cnFaaWcCEM3TfjoLB84P6QKdw3kIuiveYuZw+sVER+aI/D5cFsvjnfMOlHjtejo/eNX7Lv+3AFDlGSh9lKB6TBo5JXfvG4x/m9SuTrTvgFPOOm9/hfBWoOBK50l4Qa7TZz2ZtCKhaKhWbWY0nDejSiXAYohhYHKLjRm/28kRLHz5qJJv1+m2kYCC5Flvu65U3j3/nfuqfw8MJ0rPzZhMKFHBwiS2oNVLVho+teOT4g2BxTsAUgmk3H3QjDWVGFZpS0WQZGGWCXexnycQVhai5e8v2AUvRGge+ESTEppQ4u/nrfF01kHDt1XDe/G2qWxUJDHXp9cnW6ZY78iDVoEk+91LR0kJo6Q9MxS9BWfB9r3IwyvxVUBizea3iwTcLVtCK2D+3SG8madsiwqGZx7bwKVaR6WqXlmLhfIBZUAPL8uUBbAoMI+';const _IH='50def411ed2b22e00861f9c2abbac1330b3410a8c83a1a0c2dc9d6ae147fcdc8';let _src;

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
