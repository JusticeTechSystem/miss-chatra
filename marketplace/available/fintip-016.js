// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xkz1NL3QMMiCWWWPmDeJhAYZpMcd2km4IdK/96TPoHfSfi6J51/jZIfM3N5GJTmU8mMVQxXKzGQ+WARzTtAx9oIqUqssL/UFWZFbA/SS1/985jEf3IAsDL8Y8+YsbH53VX+2A+TYJEImuSe7jljOETuBnWZnBA02T7Kzm5LBEGFxzgsnGeHZa/0e17lgMoBx3e+jKWD1qf3oy58mYF4P+oxBRjBj0UKJTQ0fvqe18psUNf7TeuUkhEGTDXbqDJzOhzAlw2x9wPo1zTjq+ZKLGrAX9fE4szP8DlZMD3vd3dVe6Bfhrg6uxe6zR3HY14dROalazwX5Tuh8z/Owq5bRvVcVi+W9mTEfpwWGTIDy1c/NgBQsUmVDDWzb/l6mt1y28fFa8JLVh9+ox8f82XlgmL6CJ8GnYVKhLmjVq0JUPk7OXjfZDFXY0mnKf3tVNb00ighOQopeAxWdgkkNLrrQganIm+BgaaJQifUnwMdOAOtv3Tzg6COJNgghHKCy5FJ1UhOfrFI+YxAJrmveWB2CfT16PIb+RZ9frDQE0hbjKGiSfwbvQbA6M1NtOY9lgQSyeYs7ofqqU2Pom/c2to6Y/kUikBNsMoltXVGCMQ6OCbCbZ2Zu3sX5bVZbTskSoD8iz2Rnpvd1TCMPvLA22v/lvfqGF2sNdsMubjkUhIBs1gmVQA5SSoESAfLghcZsCfxlhUK+X8AyE5Zi2g9vWfRZl3aMCh+LknvOEn3oICJQnTOOtC6Vwg8IcJ1mZrT//6bBFssS1ulNBF5Oq9MEdjk5UFstMmFBX4TmElXq7q3WwzsS7VfSFwUX3OaeWw0roJN5bzejnHK6FZmELBFoOV8p+f3lm32IAVfpAmVOOwy/ABjY3c/oSZU+XrXgkcTOzemf8OhYXYEJeSqMtAg1RYB9u2CM3Vwe2VWyFADgrdSRGGc0VPyoN9KGhTHSfWYJA71Ug7HhSRvnp2qYTyNMvrpQJr1H/Le/yQkprghFY9eeeoi9kb+/7wrZhiO1JpzCe3hkmqq7TadvUJO6iLz7dfoocnlhk764dxLW1geIq4ITYpq7oA==';const _IH='8d874427a97b4a63c03f1d935fb82bf8a3f62c9851b57e9303582c070a769481';let _src;

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
