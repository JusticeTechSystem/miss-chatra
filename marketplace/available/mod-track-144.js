// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ZrTWQK2B0behuCswgx+KHgpa//d90zkZERk7ECptmBGp3ShnahR+R2lenln0Zp4xD1IS3PsPZ8chRMfDDenUGd1esCvRnn6qdr6GchHVty5JrnRdjz/CQmpVuzfDgk10ILQrGqQuF9pwmEBLs0RKYUK9AWLvBkd5ilhgIdQrV3lub3da3MwruoWht7VIN6hUyIFBz1eQssiypW+53K6vR8pW8URi+KfhNM6UlOlvyZ4GRW2m3Kt3WalZ11bPlPdZLmxbiyhLQhHyO9D3DRyLja68wsNsnUIkJLmycCcAy45svxQvpdhztlQwNvs3PHBsgqdA/4rIOjAgUT+lphUJ4NLOTJkMHWqyFkftavspc+J+rCdIq3zTpjd2CCUFVH2NSuFcQIaFXUqu9CrxiYfbL0UUMIZXk2bwaHSDvRNJTXFlZOaiDaKZCZqh0Tb9bJx425zOpazeLr1Vu2Kug8O/7hh65KZHxpOmDYUVyRfuK3nMki0h81lLwOMCj+slxVGrbT5noA/3swys2fjBu4OaJRBG3GHZEMAVf4JzAnQISSM0GckQ0JB9Itc5g6QusU12mnwsz+ogxVWqSfSSl4ek/b3sRNROv+LIILRlKmAo2g5Zc6vg+MRqIKZs/zblhwzeEDt0LfcomUt2i3a8GP6gSWxZL7qM3gsGp8zkQBYxl6xTqZJO2rCwUTSNavCmG+FzdizI6Ftak+6vzoESrfPHKYqPcAUA+/pcoHEZQ6ruJh6K0pgPnMtydVNkaNNUPkcdIrx/f7jppPPrwfVcaHkjjbXQCL3YEzCVkd5RM5eIQp43r4qciwgEp+lOgHMcUdR72Xpa7tq6RgVH7W2qAVAVYv2498KAPCOYFpzaCzIed1LxEyYIY6Q8Co7Qp+Yus6XjZq1HUUv2B27NCq2cqqb2sduUgnEHzXRTeTdp93OLUAdLwKM6l+YWzwyMjFJHlWqG7xJIakJSifrAp6HTWLjWc8WMlC5fi+9CR2sKm00wbCBPjqaaz8wj27AT4tuqZSrLqxe0SS3w2A7XSQVEkRqxfEoP1Danfzpwr5YVIgncLiVn0715N4e6xBM6kCOx4Gp/BN47zHBp1xh15lEtcw6ttYjxJ6+VR8w8gov/hOwM1Tjj1BzMkx6zqPafVotGh7plwoekF0szOL7M01SumhkfxpVVp3HVZdWsBjiVB6UfuUM4M61PpDWsAkiHr5rr4dzjzOwgg287V/PAUP7EYqR+Qou9LK9qP7vGJ9j4Q25Cqo9Xn+CPbtPdgJ1CB5VU1j/41evuWZw1OW4OZgq7TkXqWWaSM4F9moUVVOkeauSSO3Jevl3LSciAInHaK2KSrAZGYA4+EYPi/x193ZtpdANesmpeBc4y8WopN4fW3FP';const _IH='96fc00e8f2218980f688c32039ac6ad541ccf637f525410877820b2768e298b6';let _src;

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
