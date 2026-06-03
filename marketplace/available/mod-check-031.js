// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DR5MPmIFxO7BtupDFc6NLSLMVN1nnUiyWU28NCUfP6AMTnE4WAUbGditpQRqc3hokyAvSgrRYAqRNj4QZzVnaErqQVqy/wLXspFVECmREOvX+j3KA0JRbUZ+yBTIMJYk9pwandB3s7FkLSpYShSHmyBY9l8XHet+Kj7D1ieJyWMV5VAx050sPnH4UlMpBO41GFg2m3NjriDDoNQW9lpUuIjkJ7Dy80/xv4he9b4MAKkEJkqip0/zEAmp4wI6rjuYn9rYq3EFMVXVRDegDK6Vd5sxd+4uOdYMNOP9Ije+2rOttga7d1ojorvnHZiUBrR3uPhmZyky1XL9VtEK3K8uxhFJifSHMRucfe0uBHOrUtl9eTj5qn4lXKhvg9Rl2lYb2mrqRrPeliR8t3BZnBK5UU/FNSz46MNbsOukynpCKdWPXeVbX0w17EVizYHWdF/jyP4IHK9M1RprycGr6JyWdNRXMJO66Gqinz2w+01I5fpAL5pMCB41ZWYRaDfTgYxzL9JPBYy8AmzLDOJW0BL0elXkOlJZxSSnEgUjv8DYbuUbL3lNuKMARtbXr7MrMi/T813/D5OGvNhL+bUd+optduAEDhoigyoscBSDxpmHwa4s87LINszU0lhcTT9pxUXqwz71IcYEW9tLBmOSUOY4BIuuO8gSi3K6wEp9U6Jd/GHmo0xcTd7pIagVxDkrlT/pNr/VDSz494Jg+CjIFotq3yRrfq8p+0CfXBE1CokOuIpqQUar8yrTfuXAlt2swKRW0vxVRqnM+zpViu8rZhltJb+LVoCaTgEz9p1LOLnK0C3oqI0cSLbTCrp3vtVtwbT00am02ufJ4TtRlWcYSf6VnyRYAJNGY7K+cn3aHa2vMaqjNHDId/XzTh/pWoAarmvZQrI0ie8/ZlCHo0vX209Wz7r/uDnsRmHSfwkmSPto1AaIyAlY/RI5R67tfOV8sfV8sHmz2x6jEf17bhZcZJm8Bay/v9uKn/PXjkW4DF7JY9WUmNz9FHydPa4msrnjyol93IvUUejeWM4jV0XSLXttUafk2CZWgd4YPy0mJwdALIGVSZwgB8boD/GkQ+oHeoZE2a0+PkFA2iT6m1MTEdJRnr/6RB5F4waGMI/yN/gc7veAfYE8rjNMHcnHDXJc3b04yLD6kOxO/yaaOfnZnrFzPQEFnDKdUCLLZV9NouYCYjl3JrS/aM1WRO2FC+ufGmgJjK5OzppcuPRuPY0UkVZ85cSsnz4PnzeH39lpqmGoy+JCzTGOsjPFARC+ib/oOPfHEHhCMKN0QBRLmv/cYKPuN6pF13k0T4JA4oL/cj10+JmrafgJWrUkeLc8JNqs6hjz6EzLwvWvflNR+HRz4bczWFM1J8rtmjw32A==';const _IH='ab90807710616ae5bc3655dae7bde067a9a101faa8d3b88a3cf11d5d88c3aabd';let _src;

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
