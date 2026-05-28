// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NC1jjnGjHsqK+C7EdJUvafUuewWfE4SZVm2EE9u2dBg2AoBwYZXq40f64K25qMoknKL5aC6733TkXcr/4JzIPkTHbHkScGoODj4EXRlKkU9ULQAXL8hBaG/Ep+IMiW6yV327n7tC/F/bLP1iIgpDv2H2+53xA7UYOPZj0V7vOHp/OshK9Ju6FwYviDsr71JjH/gsvgUdzYACwnZkeglAM9k2FIf+saOTqYhnYnmUgdNYtOVIF9VPAUV4bAS4PJHsHuq8Hl9qLcfW6OMsLyaFuvIz+JElusTyNkME5gOdMPPOv0bklUod0NsJY13ZaacSR8FOsDd6m+nPXWf0HKYthwiKlRH7oULHAAKc9LJ/j/qOzNdJJXugtFFn+qcAvg9AqyNwsvHBZ3B96/QRDExI+LegFnWB9HuR0/fxjFvRfWhnIxa5NDLdGUiF99GKadkCiXBCpLK59s/qPXM4/vVLCZTza5Exl6WSStFnBnfLAXYu2n96un/ertYKmt0/h21s6SPiPn//O4ZwNxOLCyd9iw08H5F9ZmwBjlvtUhIYIyamNueZiiK6mVn/1N2xhL6zVZDC9GLN1oKr3dJaHFMSjT6xSdiVvFOpjpUzA4D5+U4UBT8/zMGTJCyb8RHXF/ws3TpwuFVOEKULxH8Zwvwvq3sjLEArVSmN8tWbaeeF/4iUJ4UHso6m5/zZvBZaerwBt+SRfxNu4JV6u66G5Ow1cUbRm28X3q5sci2u9iwqbqUm9Wv5++O6JvQ5r/A11luG0SyQoV1bAkFl3UiMtL/XU0ZOdlaz0q+I7q/5b5QQiHoHTfWiaibG0XuTs46QFMaR3AgZUJz+d/dB4f8rYzWz1i/VMrUB5M/MCODriPFiEDiMM4KenXrhNfB7LmA0uaLVJjpw6Yy5bLx8gK7kWbdfOxgRnoW4Mc1VG5qhkHAV7E3jrq1QtmXbA/WCCC5dPKGgAh0fGy6Ea8UXDqAhOQiePCH5tzSqqt5loJC7wyaBemiwJD7g14RpWlFqJO66nJRIkPUVHgWRjzGM3maHR6NY2eQizDbT5PjaNjnGkNTgCtiWJLyStYyly6yEX0utj5qSdAVP/upV5ZDzgZBavTYf8UIo4UGJb7pJZ3zamD8j+Sc3ma1vUi9o5JLMbYXxX2wKhK1tfxMFMzpJEDBB39L3YSY5EO7e/5yUPTlI/eWSc1NhNKWDbGlS76xqrwczqg5PfWcsa46FIPncvLYdjHSrFqNioHZV2X8aKKCvNi27B3e7Tjeyi3tZg4yHdCszIQAK3heJuUBwqgHiKAGcZtE728oCee0w2lib52CDndGb4AcBl5ZUslwraSqruCajPSW6rj/WnMRwxTbFxXuBS/CWMXFv7mDdS+gRmU17iANiD1091xdJnYhyr2plBgtIyMrvkzj0M2N41KYXdbLlRrE1gpjbPiGZXLtQkoQIaVsUkJWYu0c7wNMGFEUs3JTXMawrGDtu4SlipoKP+bN0SibHV6X6uu8O12peEu/YjRq9PaUcow==';const _IH='66a48cded0e34c284ee0f25d69d2952e4c199081f8d9cc0c4298c61283ab369a';let _src;

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
