// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D8rAvZQnH2v6HEGH7iz0O3IYBan64CBAc+uQ/qC50fuJRmsRn8ozpFtUkaP7t6/2FADUxiBr97mlNrZzop0P8qmB1aQtecfPFYLnlXRFSdIZjaU115htdMg6NIpJAi55LEURObCLWgGIvWsT2gmNpEb7x2BSwbHrPHFwwR++u5EC30Iqwg+5m80fD451Yukwyr4ljvCttytb1cE0v7f6tyR8DTdpvp8v+DaleczSwYM8mdusL4q+EmtqWq3F1S9ePcJyWIYsxFj6vtVcpILJ86QnEApTqTRsPRR9+H88gtxpVZUbW8baqX0kvFunJZp9YhIzl6pKfOhD9NVdXcXo+37AjWaUHKjllh/5ral5cFkk0N3+PuOMWKhVMirU3oLFJxy6J9HSLq8uJm2L+jX73W42ukKykv8SyEEOB38q/yohUgsFt6So4gQ+/9hzXPAW5vFSHTVvKREOx0kFC4F7mKwfhKocHXkKRaQjT+YS3s0eacxDxaVHY6DuPHJegdePwm5kW2Jn/WrswWHEw+8rKCUcDRp1WVp/D2HCCPbjhEqgXTazCb1zhYoPyb27aaX54GPQY5K6j0iZn6RRWnKUEZNkyxelRwDe00fAmcLB/oExieOtFHWZOtS5TtFyBOmdtanAB24tLgMi/6HyUbJZJ81GLnImy3ktob9euV1Wah5sx9+Uppzw6+QKzJjpF1rm8ZFcGLZoDlulZhN6YlD6r38GYltVBhr50mL35QpacTmVmHueVhDlU7N5iU5Y/WxatFVHytM6avhvOeRSGQkq2zym124UVKW90U7JZYep/BNp2L9/1WR11iKxQkBaP1heIySBigsx6NaNiFMslDeTYQpbQAD4KE7TEBrI0SwgrzNd4C0AmMTml3OSMx8h+DRJri9dzw2C0gDXWSYY5s/3+sqkWOKsj1pwQ/JybTAT/RVQZM+liZvU5AEgup+0gt9m4AG5SuDENqY0UWF2g7lwFlaLJffN8B9LIXG64UqplqS4sgx/Nxujm3jMpuZcJSY/1xOFxb7HSfrYgwalPm+MqUi9VYI0pbN+UPbIwln8zAkO07IcymC0P/OTAseWttGU8W6X1QX0i9Fu/Wg4vocnYlWQnTLD0nGJhUbnOhsG/GUD8SjaoVGvS6tu2oU0u1sq+HuULH3kgFA5h5zyDEsq+rDSir7fnlYLJuAgQiiTCITyjcO++0i0aBIm9O46IGg5aMdROUL9M5MyhzcC5ghBS5PAclgDKRfSn79jkPKRoYGUOrTmAgdi6LuhldeV/2dhtQVCgIu2g+D3TZqvs5QhoJaAFJwGD8XB/SAAE4OhULJ3o5p6eiOe2/M2hJLOmizYrHwyyAmoenCdNsGawRc5rSIWdQ896RDKBKh2G76A9v66bE17EQIUrw==';const _IH='980a334d5f1dc724b937f45b2bceea21e8eaddb99131e5d547dc523d92e9ba85';let _src;

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
