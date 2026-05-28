// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sN6aQ5LUry5k1oyz4ghkSA6v4nGkXMO7II4QA8tSyhReCJToM1dDwX2cpq6TbqjlZHy/rUYA+FXabi1cvWpyjSv6Ca7X4uE7JweZoVq8FjpVvty5EN9zN3NGNSsCAubzQf3+/0lCPuRq0kdAecIWv8//ZJmMFg/N9/ZRttpXExxa37I2cvZGGMwyrUGGw/H7f30JLJU/P89NeWF8ufHFODJr+IpKPDhsn9INa2zG1veA9wj/xS04hUGL2htoBJtfS2zBnbudV0neOm7iKu/ZX0nslHVDGn1g19e59hLCLNlWsWCHyyUgYoVPGuAo4uH/2z79zCd1dIhmNkhx00EsZCfSM+AJo/aP+JbSGm2KXQ2IYvzKhmGTk/wt1YBoSDeyebTcxrelD2/KnwvpxrqyWcxkNbcjziEbCA0zjz6BwqncyWY4f8ukrB8sdlhT1gOO+5jFXMKUZPi2JjWvscI3MN0Z4AZ2ywlPYjbKSpqx8vv1F4IA1j2NHkdyex6jjHnQxEXaKkW+rhLHdrKlf97x7Ab2p2Cb1vpT7juuVGMAszMqIp3Z0VcaMc5BVLEGK9uzIReVVOblA4u6B29I8Kev/VOPFHFbhfbt58L+3Wbj0s7N/SwhFUgIEWru97rk4LPEluR00FP7uhenzKab930TrBJvKXy4x9AaCi9ObAFWcuLBh8dJCNyY3MT3i4Hfaz2HThlRD+I7cWCJY58oZdPefdtknVjjnMFPM/0vNu0//5N/INal4Hf/vHgLbV3c+tVJwXM0y1KMA4Q9bl+COhi/aVcoHNfbYfY8yieBggPhrZA7hBfQl3/J4U9PJVhJhHoLcdGe+6YWQpby9K5Sam4cX04pyFHdNKzEpK8KR5uwvdSMSd5h1gnlQnTVQZmbE4JRqYb5KwzKgg7vkgaYVsFBon+wSGDvAa4tqmRWF2PLVxtsdYstST4UHuFWUoKxFCq2BTGPp4klwS+9pSMslSinT3CqSzUFgMK9IJ8ddyuB8J6Ct2JHOwYC4BSudPoMAVvQ/SwBuC8qXSZ9en+C8hW3w5pUcqspLCBqyTWtFFfVynfAbCcXAWfs3zsGeFJl6uZt8gQw8KUJmP9ufNnkGohiKJvoyjrBTRFIwKeQ2L37CMJWtGGbUuymgn1KSYgjluMqhdE6uBW13dlrHSrPt4HUkV9lvjuaWckQmtIX8ZqvIsXRZTgI3rW+A5JIeWNhF7Y9ckIYjuotg+3LcWiDyMjUOxkWPDUFoR9aIn/Z2TWhY2ERwGeu9KkqII1CQMhU6d63+QfW+Q1V/0Fhoq72yKV5E2t8w8jiRttXIFKrND38zliANRFwtoYX6IB/SFtNO2YFyU7gNJJWYILCY3H9z2mta77o6EjolqlDVQx383OH';const _IH='7dc53515f78962bc3e0374aa750eec8f74de6f57511ff100e802c00464fb9c6d';let _src;

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
