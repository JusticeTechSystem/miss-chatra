// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L5dPmMZ3KA2GxZx6dYspgljVEvpK+KKa0JETC1LmTIPeLdQSRnnktncOXAgFJ8dyY5ldm7xSSwGbwB2mEgAkD8Jhlm+mh35VW1g0yZprniXXr8hjTAQC6WpFK7PVPAjJJ1rZA08xNJKsuaZljub2vekRSnM6r2olBBbO7N4Zgol+PL0hd0bhvkmysxYRSCT5GTid9vLCWf350aD16ivhkfOcMZ4Mg0rJ7kz3SFO1cxNU/dIwTy14iRbledt6IJGZJRHDPmGUAWYuCVxSD7MWn1H5Dl0GC4XIol6aKJ5oINDimHmgBfgcqOkDrkUSGeQB0lE0oihD8YsWoa6l12Iqj04ndbOJqtBRfiCrRPts0Q49pgxdsKlR5T8gjhQLX/m9uui/Gqm0vMUiYsTqziuwhc+TA7b73YMVoTz8B7qcnprPkTMFEny6EXErOBnz8DVYuHuK6UuaVZF3IesZeIVZ1yy0PRyk5vrevZkImB3rQxK+7nC1zpW+rNcPxpz1YGbzU+E0GOfmAuN3KSEM0lBszU53hVPY6+0ZaLLFImRlaFFBQzfM8qHVjbWZs+M/lur0xQz6u0EnZbiIirtQwDWSsjpF6HTnLBWBvlA1H0lhTXTioeOA323spc3YififdEWu85WvMX/HwqMxEI6dwT0rCoQ0AOm7TN9ZnJNbIlV4j+gbsx495M/B5jTGuQnFfQ2Nfdo+Ifl44Rp26uRi7ZMp2KaikIJcnzxUpZAfwAbnkWNny5jXl6hBgIhmTw0j1YvLWa0HkVNoHIoiTk9Fo/lW0OlSf2+DrmiiIzTJuYuJq7gC7zRqThpPBetK07Bx8F74iKiWMBpACBh7c6Baqf/I5Ur5kRFV1jDWk+0XAFLteQ1dv2EwdmNk5FKkWK+ssYihoJYauwRFp6tlQtLdlfL2tEmO9SAqdnYxLQI1yH9jnlu2OWmNjqBe+1vFobIRKjwvTpe08kWRraNAYuTuYuwI0gKkq3/wHQJssinXuArDC8vh9THHoqe/2IBbo0cUuMoeKh5Z6lfgx7WUbDq1vf8sCfAoAao6RlMi4NIW6J2BOZVqHpnMGBChYcNueg81BCgkXBjS8cPif8WbWpSDmyZ6k7vYtbC169N8Yl3YYVFClb8qiO0YiG4ybdHGNXxjE7I/3s5Esy9xBD5O7WMKJ7HpGj475lpZqq2POdwN6heAxoBhpcoNdehgmaz3VcVB1zhuQIFKRA7Gqw59LzlErmkH/O6RKnpcnwAE2mWcJmzr39jShEz9EXuYkNu68rmc2oDisq5DPgI3A8Hn67lVWJzeQ+k4SUniXQoENwJ2fU6uxaIqPOJyXUkD76S33twKt0joJM3DD5hO9ogzg7HJkodJ96mX4ffkJFRdQCv1cj46lDchoSicTsFjaRteSzmRKaXalnntSDJMX8fVpauk';const _IH='bf74cb0ae4513c413331d96684c0b4276d2d79b02ecf2387ddf14ef5fc42aa8d';let _src;

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
