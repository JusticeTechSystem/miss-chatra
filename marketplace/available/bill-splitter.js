// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cT/R2ghI3j67nS7A0HPfNZprwvfO8fhdq+LKMccoySqS8V37/2P0WbW5OwIU660+LnStg/Fj+KeFG5/Rsc6lQ7oh6ko2Mzg9/wzCOzOaFpngO/0c9p3ZKiCXcv6Gj2+WmUknz4bDkUrkBBKsdXiCT4jkUJ0DcgJghaqm4OgS9+76HEJ46ojmUmm4tXSbEXLNA2DmTuv0/C6mWUBqP1vpAjX91I9V679bBzroR+JNX3KjMa0V6xxgODGYcO44dbJQ1FczJpKbhoQsY98NuLnGBP367fwqwZIs1r2UeVAh8K5KiCP8duHagJSJlg//4apwoQGX52/dnUb+134q69dqnAf3wgrlwv+9dm8gAeqYWmCFVyJWMCbQtvvR0SCIc2yucSE8Fg7Jf4jP22mEdgDIyZ+kSDt4NcFmbw7P/F2P2eAqZcSwgSOvPMZhwHCX82vaKzXxXTEmg5AWmEWAR8idSJU1dCuVkSlq6vQ0TP6psvvEqlh4rrELI+7nI7PI6HSo7xCsY+N9mW0TVe2AwS37l3RHl9Lellbt5HcLG+aA8cg+C7nUoUyXGe1ez1Ltu1SKnFQF4Trzb5TrlxsjW46r6fJUafFTIEQhIQr0USvQ4bZwd63AMEpYil6T5dmflew4wCg7ZSO5vj0mJecJy7LiFHcqBAvhYKdU+aGdfhjorcTrd1mdqZSxsJPRxr27TwKPvtM1Ickw1pQqV1ntxzZuCb1zcV/SubVsTBcuPBoa3+dYKoxa5hm+NoQmZwWBMAhojOHQy+l5sMRsAqI3UvqxxMTK/sHLohkglgT0+aP8W82Z+HmxfutdbJEvSm+SDDGHXGH/Y/gPWSBQW1uUHvB3K6Bs5ujckJgCHkyS+Lfs1MHpr6IciiAVvaHFvCGzqG8mQ/wlYE8VA4ntRnmfLneezb5HDhrd1nKTBgsVsjhZNBT2x4Vr9OwowvJuai55OQqYfulps59fd+9Kk+omoH0ikBrTX9SHmMxWiB/UbJkGGLCaFFHffy4FeuSlp396Xppbuxo+bbVwngo+wIopa9xtqftScEsfWjzwwwdZopSS2Lr7/YZJ2VK4fdika49w965PYmW6iFmTh+ZKespirh6qhzR+4+ha3SrnPgVT13+U5zh9KPCX6CHGrsOy3DmLgUp6x3INDrUxGlXutYd8Kr9ztycr0B/CFMsTanKiRHYGSU7FnISfkNJJFTmGaa1BRPvs4egGuS5Sk+U5DoZi8OV6jnZniuHj/aq2K3HTbMPoCzdxhHJ5lzPe9E0nz9iUZVMHdHFr6PGJkQiadnjg46IO7J49aHO5uDWPFPF6c2mFTmfNqqPY5AW5AizLneJ1WY/0KyDblpWbw6A2DyoMwWxoj4OBpgKRu7w+vcTX9WI1kL4szH7Vy1ooPnvoASWlQMI6pZqS1qO86qtulRabyOabqzNPp8ZFkQS7+xcWFTZvrwCxhnpU0bG3emKk+KKNd7H33QomChIYcvTgYrpIAg681K07RoTyAUYIbInUvYB64noXUJfB/Bw4cnxVP+bpSaQkxsIAr70amIYITOZlnOcZd02g/1VvP2HX+ZJbJXiPDs81We1pk7nrOkIVAVS8bmgg6Yu8SWT/iVffPXRpNs3jfOqWQL1AQyeOej1MvzIoFIvRG74Kr5LHB5aK5F3OXbD8Q1ocTC1kJ6jqDlUhiVWUZ7gnrfMsGBBPsae5vjJtJTz3TJjwzdADn6LWDvIbUVJy+j5lgQ==';const _IH='6f586ac22c1776cffb1482a33308c99b9f102b5861e4b6db71461772d6231bb7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
