// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pm/ce/W3YoqMsH/FNzn51h/HLwMjEBsNORpUgwEITakh3a5eh83K6DLlKSgiLA0Np+DYQMCXIDWNgZwglHVqMJ8UimIa/fMdDJGl5x3ZxS3GiVT5bZKqIZ4nFdqPo75Ro6hi6avROcnxTeQ/LCOY9/jvfQRD+UIqx1n+74rO3qEWVV/Dd5ELaBDku2L7ttJGLOdg8ElTz8f/qLmQcklBFrkeDUakwCfUnCa+ZLrlTb9SvD5LHjIb0HvxoyLpyRxM5nwd0zXlfO9u4Q3LILX8E4iOrrDRKqlCImfb73PFK6q6kjEMRxojgMLfweKcVdm2SagKBJHa5xTQ90I93PrUTNd4ebWHDMBcHvzhXjElEzlPKd004Yub83nQ8MJk2ROLCzRasn2VWVn9cZlcroF7y0yIlYnZ5L+DdxcsXDmVnVSAgfGPWawCq0WnYFoqhCXi/LgcgGVFv745H2LC8eh/OH/huv9QMYV44a/zCbgNd6L+TjS+33KkFvgJr99PI64w6+3GP/L8DcAzJT7DeaUOd9wWV7Qre5IaKZ9Ir3lpFtt5jnMzANGkaIunkoPZ3HjvUVLxoxKkXwX8AEj1+RiIVGdT+VbNAGqhHh2X/KqO2R0g1W4Yyr+kSYe2ZiOp5az7TjNJ7HALp8TsQTtWDB+Ydt0MYvE0LcDokYG8AZ0Rw8lwfuaG56XmrFCofcCe2Xc3dKE5TpHxJboP/8jqR94oSmwHhjLwZLkXaLKyr61mfmpoe+cwkKwjg4OpI8EYzoAvCczadnAblDL50wkLohSRXjmTwa/MyB41ksfXfH/HU6SbuBAy1nU1wu+ANKYI1WK/rz14EgR42U8AlfPCam0cWXDJi195QkbE4Y4HDjkgJ5O4571M+E+E0GKHL044Zmz4mcwsz/WYt+2LRzUhBDvy+J5rJNmYj3InG4PjA/tFw6RMMebdBKBxUSyawQ49rME7C5Ut53D7E2rCj793R12eDLXxWHaYJvx5QPqxQM8PQ4rWsPPu+wl7ziY82Rp0xnvBHprsG4IMhZzst0SGGT7jlSrozdNUwQ89+sV4QUSTIwVWAQ==';const _IH='1069153a54a56829aed37b05fe6119f21a086094bcee14788eaea7f78f2a5c4f';let _src;

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
