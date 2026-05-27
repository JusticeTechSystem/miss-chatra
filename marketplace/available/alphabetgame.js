// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wTAAvGqsuQa0W3srY7ERstUsgowQK/po23ZQ9u2+UhSWymN/j6hEAY8rkYtYItHOD95jTGdLTAomR5uH7KhBJ9fn617kL+N6OhBwWYzixRgLBJmOk0Un0w/j/UVD6cZ+BCO/M8seI0oKQwEWbP2ZlSI/JT8/SxMBt2vKPx4hxuovTmpuFyvX0vQns9isrTmbfOHxMcZPhgfnIyk06wZjNMRPpUyphC5VWJZmXAjj5dktJ8jIjIvrCKd9lyPQqBrKP/1QIE+G1iMwVKd/yJYSZWNQo9zgVkFmGi4lxKzfT+Y3Cj3SBZ2wnUCFtDAcJ0FtH/tfw6waLwDzIW/TqaWgq3843sKlByNKzdBmemtSDRXX/FpiDYJ/TjGzXrdGW15SmKUYWV0GBYjf8Xa38g9AasbxH2LcVVQLwEifiptwabUvdYmH53eaP9ZSMZj/6KUCwQXX88j+/Tp7o6V0ncTtRIGcbqvlg/wIqsqGo+/+ieAxS3lcoc/mtgLasFfZWubayTFm5l4GyJ/rV5yoIkK6nEF/nxSJP5foSoGOE41gsQ0+7XkK4cDIQK0wzPgpUhVXapsxNH/iAUzeFn1RigC2EGW+hx1FInAH8wBdrELxS1cM0qiPSGtTxxSci523ie0d/lE9Lxo5Rud+dwqUvSZhrbAtNa7AuX1XAQWlFcNEjXN+MD6xP5ruFkVHsVoSx/W+4KJBoD5tlTpgppwFjKz1GPeZJYhkjzjhvDGzLjsHpilPBx2MpAuOfNeVTD9sC+nS5EM3KZMtFm0HJMc8JMUvS2yTtvxrDgiEd7DYrFwV6Dd4xR8BJrdtQIyi5zlc4X3RknjanrzA+7QFLLTVN8pPLSNa7WWU5iC5x5rsrwDVWHukpqG8zSDyBL7zFOlg+vgb2siZRBCUcxK5tZ3ibfLLq2d2QMXXHufPTTGCxpv47/VZF0Shvz/bdW+IGKvLuqTOBmNifcX8aK9t6ujiZHLRF1/g14pFly2Jwh8H1ku/A630lTtDp5ZdpHyPvUviMO+t8kle6ucxyOSqxeuGyBtItVkm7st1aaS0MIcnrZZAya5IQBqc/ky5rZribJs4zm/IZS1SuzYHPHGRbe4wm+TmShW7wrC8TyEqRKePrli6liId4JdMwu2pBTHmZHbE5Jt+Cbx4/LuvsWULtO02Nl8rU89MbB8ZgpIcyMGGUzfKeKZJA3GYmO0OE2kVT6NnMTpBbduTrQ==';const _IH='3258f658fec741ebabdc32d6a1b4917edbeabc7cdf734b85739c49c684e9bb24';let _src;

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
