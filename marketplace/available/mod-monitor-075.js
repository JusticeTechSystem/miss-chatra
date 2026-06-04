// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dbJHmRGJmlcbD/sK2uKJqK81f8EbHBDh291lnEoUdBrXyh7EzdWssnB7/IDQ9o5bD7wPHPYQ/GubBMEvkebp61T0TeoGawtkEi8jzaa73fFiMEPOSirVTnmlDX3Z4Kvhw3dcSzSLPTIsEkop1kV70hxpqagpw0R0LFhbT0qieRtfTSH3KwHxN3xO3fITdbrA/xRZpKErkf3OZD+gG9U34Ho8Md9B71mYPG17O3KzN1HopTgUqtMUjVUHFPvNhMx/RfsYJW7Oe9EZjolg/GcyHUOQ/MGA3/Z+hUQyGOLedQFcObPB0u7CYeckyt4uZdxFHspi3/nZkZzkxmsCAecbA/U41P5ALntKyAW9Z4gUljAZ30xOODnsmJTATF/iIJFLR0QKKOW6T28IDAm6UVOE6Rjl0gb+2q5WJD33U91QpLK61BiMq2yXlnnwU7T2fDOn4MPPklh9dihB48E9UC4G8zrLgGpSKrAh5DWLFzRmgoRGUNc+uEBM/jtnYmuYT0dV2u/7fr/uAGVuxLBPlhg1WZ9/+n7dieNg80j/zQYmbxmjepHSI/U7bXDnCIvSkT2JWKUDqZXD2hWXiYB7Qn2M11xmH986p8FkU/Rabkt+l3mqHpb0rxB6rM1jBoYQSItfZKWB19RHexEmcHuussnw4F/NsD1dMGJDbaeXJ0I8KiTc+l6yFujlOD+JU2UewJ4l17kHrDaMXDA4qkXi8JhYCZ5VAREXcrCyii298IpTEzkw1zG7dBaxG6nxuInl0UAGtf0MeuLk6gT1hjED+yLZO0Sg3k06Ijt5UjZxS2JjVVmdTzIvbzK04a/LeF1NB1RJwT3jTrsKMCZPhD1xnyLS9FL4a/Mx0UJIY8H/wAoANb5A7JfIHLeTOwzUsTpZK3WmJ5dj9JKkpkGxLfsWujmChvzoZ7kHfY+QUtM3W3vX6xhuyxeXS0NgIWU6wDBDSCfgkv99EYfW1tAHRb8JWikrJONDJQQ/Gmh/jBzUmsOnRWWVdNVxG00V35DD+rMyY30GG3uZNvgTcgam5Y8+ie5A1I7oiafO6s7zdGXX5PULspsCQg6M3C9eRnkHzHtCRtqAJYnmHHHWab4YxEHxjlA1C8ZYhRs1fFodDfzzHRQ0INTfXctT4BYZlel7owFYWZfWKKLQG0ns4dAB0s3OLgKj4LqGLlghZk9+jAsTB0PuftvR7eoUzjZN9+XY32bKx0lYiVYm43Jd9B/isPQkuaYHrqepXlFAWiozLIBiU0Kb1cwis4Gd8Xc5tfhkHwyDcL3tWfYalRv4afdmFgFVDw19UmZTtIxTMIdsIeuO0bTxJqLnLNU0PVa+8UqWM8cb/g0m3yoNQzy98NuQTDUjkQVlsiU3tsR6OOVtMo321DNiiO5QRdJfN9sIylxVpYq4';const _IH='b06d20c129ac27f8ea4c3cef7a21f0e44ce9151dc9ce8c8a4fe357530aba5705';let _src;

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
