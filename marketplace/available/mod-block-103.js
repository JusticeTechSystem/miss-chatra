// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hUhEt+a+1RMEQ9yoZzXjNPwnywHPrX53btfgLAJlXTihcLS5v6Sa0yms5sUImRzlXpevAFuQxjVl3Nm8HPgy9kc/+8NvoUeDFLU9wwU77tL8z6eJwUaxQFY39PBZOzmKSTqi80W5FsAx9ui5HQgkOwxSO4fVn88abfo2S/nDmh//ad5NpotZ7nuLGt3wu62SLyb72y8KPVlyjG2as+nG+GSgYEHKZK5H/zwM5Jhvkp/2aDWiFJ3svI5Mjrhht6/AB9tDCR5FY44+tq7EH4b7v9VBHr0nDpsSOzSSewPE29p3TIgHH44G7mr3hAA5f33dUE8cuMqBeKjsdi8FtYVqHxKUcDdSJ8U36f7lmqhG4nl6QeF0+JZNiOA2No2Vl6tgBjStppmLMrxNAgrWVUdng/X+oFkkoQzsHfpg6uHzAHpQKljMp6fQbS/dLn6cKXxw+EodnDmFUK1Y2T4jxozDoUzMhqit+/8+YDRBMJQ0yIBeLB629uvGL+SsLlmji7NunMM7hivx1xjRJloXuOzgH0RtkTlO8ipq57z6u1TRyWPH2C+O6lUnP+dK4CZrSMCpb+mSIW2ApdeYbb0kVed1TAaFGaC97FZFuLQvLmrK3ssnOEw9N+aTjcSi0Yrb4UnSfjXuqyHFjl6AdS3E/uMImRAdw+5ntGUvB2Yr9yGnKzYJNuMuYF2EIhPcpXDqQaqUh3wzfIqSliWIpEVq/qJN7MwvHOH+k0WsmXo8wziYIq+ckMhcs4dKIeAHcu20yeQV8QhVz8AeSth72Xdf1QzZA2bRJiiVEriMZnmLEWT/qz9bOMWCPvBZr8q+P8rDrIKUmUnIjlaWBVT79Ny8ivrdFJjZdLRwX/JIBPXpynzbMF3H60p+GkVpymmm50fsxbo5ahVFbgjjihTsWrZdtZCQEYbZ7WSRJIn+iK4eCTpW8vi+bC34mlEGfSCU+eIwr5FEkj/vrIsNeiRbbcaR90bXjccU0rtQ4ziQDtpzex7Tq6Mj7paBdANvkmmB/2fOANTUJDvYsGv542ifJbtbJ2qsN33BHRDn9ztVnydMdxccL+hcTQGvadqFLXuBDe8WyI0EDtNjZEqRx4rDFIE43BPJzDEqc1yT//vbHUcBg8W7btfvSPqp8YcsPYQxcyVrdddRN+du5u/a3Nr631iaU7TpRjCRKy5h2UXXdn7ACLhPnlSCprcre9FDUYZdu1vvyvlKhOOW+hr3WMDIK+/J4zOanKed0ODNxCESU8Eal/r7mHUvhz1gOtQbzf8Jra4ZeGNJu+/AymUVDvmnk4AVMLeT4+wrsFbFYsF//RYLATw2tQrIji4sdiXiDX6CTgCJjJkil022qZGPuuu8XZ10uQMjcdZSC111aGfOn2gxE0KR';const _IH='9ca654f38523b000b0f99f4b23834e18a925465b9275771dea51da187763e0de';let _src;

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
