// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wi3vg97DSjJvh94SQZ54yElq0J1RDK1yPffeyliOAH4h6y6hP2HNjPHzYL4evo3+hzhBXiMaG9mhwyrsjcKEMWJo1Mm9L4g5rzvGxfKg2+aZpLM9wZiv0XvbAmgN5a87N0bh3p04+o8XROMY5JAL+fOinCDaZdAG4Ik3Y6o/VqKamGkOySVW9tYcEfvlo1mSslmhV/mkuwAbP+MzLp6UZDB7nFKMR4Apln8lOWRuehBfKyT8S1+nwZqrngO0+gs+Rm+jTcpbPmbPcbP7cG/O4AgN2SOgM6etPtEeREMs+dAr00tjH88fCU9UW2mgUT/Dcjso7b0+BRf+CIZIZXGC24Ki0tEHUfMzkVa7Dwpfp6NpdAEbLewEk84L27qfNTjMBjp6nlo7j1m/lxSYUW65fRurGxHEgqJNoVcM/7GVlcIfEFbU/NCJAop142EuGxuby7CNz8d9vUqwXgYNbGuYEWinqe7w0XQvBExBMN2NEAQeyltgkpNTRpFaUc1YbrDGMgw30192qXzvXDIOolFg/44MiKrfw6wS7j6ZnvicL5XK4B1ZKVzXDg06LVXNJ4R6NlsEIez88Als0e5FL1Mn4KF7K5cGwoYcJ5CQT2lgEZbNCugrOiH4z0UfNu3F8LbJZIHRvB/l+dqgfVqi2JOxt/+o4HFcN14hKha1Ih1gq9FfCEGJk4FnuMJzt2nK4102Mp5stTHGCx6yabwbU8/K0S1DLfMIF5jVKfBmiTzHLuvS9+Y09mtENEMb+5G2QRssUgwAkBHtAwuhZNsXEDJblt90PANgUMD7w4ZSS943KMUpNwloPgWs0tly/3gGKrq+8f5hNLsOzlfedKMZRJx3Jgm+xuO9FYLUZuiij4LSIaVxBpgK5slS9bSLzIOGZ4Uf8ydtfK8Jw9Vj8gawgOHPh2zVP9gkKVHfzvR7gx13HcUvm4HcNm5Eu8cYHg==';const _IH='712686305aa4d48d0863d57e969e18f22aa16c029796f68e220c63d6ad98634f';let _src;

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
