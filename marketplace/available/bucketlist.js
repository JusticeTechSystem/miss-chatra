// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XhrfRarLCGn0kmdbUJ4McVgFgNJEl5gZbVJZe3FW6qBnrZes/25me9vaqUEEXAm3oGjMiTJGxZqMLSSP86G4wJ+9mQGkZngC66CkTZ7sXI1y+ylo332c3u/WB9/Jr0DZpskXRfW86O2Jsphe4mXIzikT0OdGxdguNJEVnAdxUphw3/ueLZ3gv0/Uu0pBaaqXf9RTgauC1jD5hhU9T0DtLhmvUkd5iHwRBoPATUQBwVIf2C0bpTH6+iqn8nrVh2Bpvhw0cKq3kaCZxcuoyUh2f3Af8OJgNNWAaHdBpqB8HNlTqeT8JGi1FwyzHVHxHccPv0enGQmXe4iKMeflg9XZrLuCEDkaWwZYbCssIEgdZrxDPHJGLtFcIRmXMN8P21E9TQScdvuooqXP2GKgUGcsxbtSzO8c+98YQvnl0wGN4HobAwtgNyWuyPJi65g7NwWHBd+vIndjFTIn3WlM4ZRFT3+okhc9BhBcvf24HjpJbUCswU5MVYtc7OjMP6eIDdaFEcR5a3SZ3muTsxbKHmKIvvboy9UNHaAVX4gGHq3NVlJhF6OzpTYilobqgp6Ti/CYWt0aLJrJvGjjQtoz6owayIs+yQ5gJ09m1bQMpHN/QrMiCL0gYJ9sqXKljAhwNWPekTYi+Fa9+57tm+V+v0iJlF6fVwsRo0fobxfRLgR7oUEiIELLL8nS52MlO/0xYk7xzVDTFMOAMpxONlq3RStwNBDfV5qHJJrWcpbDhPMJrvDsUd2iQbYQ1T8pgHBxo35rLDi4FGm/j7Rr2tjea9xfYGh6hO78ImvpXspDfXSngjfqPqYW5FMRKUwzwBtMq0dd1tk0O4/MLEiKKpbLdIo+ZJsZEFi8S1aM/Hp2tomm4vk8rXff6t3tIukn6h4hkhP5SLVkRQ42z1K3bOS5/4exA8nDax/W0jFLThhPPuXRSAQqhwUOglbOQrzA7rxA64n2K3lTbJO0B0wSBPBoGug5amSwBT5GafOaXUQSi4lk8niiyaaOpTp193Uz7aT5jdrADlG0R477TenyV+Tieklze5Eqd5PahRXemFTSdvXePjqNg7FTtNpWRS2svWXFBP5FYyiQ/KnuFN9B8sVELtcAczY8AcgFU57petN9nFa6gt9WdJVQsS4Hao52LoAYKCLajYWI6b2311YpXZovvnQWgv6GqnxpttPSIYmCkTdZOwj71+Snm6tgrcqabAbd06mRCY4RUfbi9A==';const _IH='5104cf3ab792a9da4da8cdd1c52da87bf922748eebabcc0f43f1aaea55d473b9';let _src;

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
