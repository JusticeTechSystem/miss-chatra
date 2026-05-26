// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UJqE/FGlYhZdkGb3Onl5Zx4K+jaVU5jqT0IHrk3J+a0PXKtADWtEUB6QxAm70Q1vbEL1fJnpzre9UTMVkNy1ngbIh6WWG62vplQ+FgwjfsIgrY+3XU1I0pi+Dwkw1XFwYHQJ7AMvzhEWF97Q9apK9u1ZKxnUUkYyU0eTP7E0J6sH5X9YZORMK0nzmHXsYNImexSkD6rT9lm9Rg0GtMUBdRi0FfDtcrsaVJsXzvcaz++T2S+Lxl9kNO0J9ElL1euFUIHCHvnytJjCNC4u+xCNqAMuw/iM/UiGADqarbkIDUvI43UmeUE0r5Wmh+4KLce2xm/2JQnUmzpwUqXMapiCUuHtHihnVib1p3SIvM/+gB7phTKgKg62t6y/dByNCpYENtpTnHMYGzWFnbXZqasLZAy5rsOkibIIiq10feoTVGSPKJ9oZmNt8OVw7/QRANLdJZixiwI5hwP+sYkG8s4H2hdpqwupv/O3ZAvfI+4vTi0r4SknWWP4NhgwfvIEqVe1gqzsVWCUHK7f/oiNBqL3jrYfCuQZ62Pq0Oa9fJa/p8GQN9SfyDQZsCtX6tSM+RqDnXHGKxw3b/Gf+bCX7RRiNPg/kTvDo9FJp3xIrJ/KvTBRn+LnYHXzKOMis+sEXE5rcIH5ySVb8kixpiNnyznpaJTmR35c7k1xX6Q46QeA+hAm0QRf5viXAd0velaguvuvLuHo8AwLYKOZSXRRzEpQedixtvbx6q82RQ==';const _IH='964256545860902babc2baa532fa7e0f3cf3e7260e34e01493dd935792fa0adf';let _src;

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
