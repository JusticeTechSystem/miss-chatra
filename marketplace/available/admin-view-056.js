// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Amd14+R5ilFrvK3xeZ8pOS9NawE9PxmOHclyQXAFiG6u0Q17tcE6TKCKX3biedFgcjdOfS5ojmbE8bjSuatox4Rb3YmdYbSQW9aYaCptFqz7yTqz+ffotp5FD+2WxUXPo5Hh8+g8bQimftU2Z4yqq7jItlqqBZ9zU/bip0pCMuLIyCqUk8JPZjmRbzR/yS3SNRIuIzs58ucAigggNeN04dXjD0AWAgZeHjhU2Kz4NipEYQKqYG8KVGof723HaNNkM4y1C+Zvn8XZgJSc1gadG0ze+hFWR289l5rwQWlktiJMsxOg3AV+AHvaeNXueuvTpddiyU3L02CEdu3tTJcdzxiuA7idLqP2HacNM6ZuExvCgPkQJ6R9tI5uneNYUux+kdnut6E/xka6ogm4FHWVm1ofGTsGXiSW9hxWwHTsfMirMd+uONqe+XYmxpGi9236XjyrBcAMOJ01EN77dqx9ugp9k4/XrISN8pQKppMXPM9zWB+TrhORQxcvcFD/kuC2a11/0Umkacf5Lx+Xo1Kd9pnkXZddzld9RqJ1dPwNzi3jZdNL+JTjFzl86ad2sMggYXS1hHBrWY7U6ZIqppeW1GQMfb06x2ojee7uKy83dgR5FNHADoFd1lRZvk/NEJtiK0ErrQYdHXwUWF7K+SKhyclIkT3Qrb52278CC2neXr3SSMVLIGx4JRboOAdcfbtOdRmUqmK67gDy+n0hMQWIiJInp81IgwQRRA+fdNwGULyreUqiSED8tL9XxQ2hs3K/b/EywkGZV2fvaGDRreiPf41HedPwfcslSR5c7MW5vjUc4+1edknLvNGu4XovB2yqQh6kUUx6nBELQK7syvhqrQ7iFa5FOjsQ028+Y4IYVifxmm1znjKunbpSRZElzyzUvTbde6SvWPt0TAQP80qLgU3yty394R8e55zBN3CXwHJQ9S6GwSnTkCM7O9UtFuAGEl1ZwT7Ja5ewQGOTD999nzLAPUPnKVJGsslxEZLPg==';const _IH='c575d0e03faa650fc33d93939a8ae969485fb49c1bb1fc20bae14be0fa14cb75';let _src;

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
