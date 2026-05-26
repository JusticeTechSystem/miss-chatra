// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XuC3G//ARI+j27hg9K2/2/+6isr2/DOMUzY2R6WtQcONySIzJrh6BKnnTZtgqmogWxRowRqCNgLTX0ermTDQhQaWmyeNEKelSpMIoo3JH4DxdKB6qLiEXOsKhrZDz+MyXUEwGoG7kQ5IPoup/d4wiovhyqieIm0QOpAfGwnfh/SqkZAJEUeBRtWzjWkQa0HLpg1ADWzsetTlmzJ8A+MetWvojMuYbWKKTodLULxf0zSrJleZGG1dvuK47eKYRvz5lpA5e5cKOlebimuvZsx0rIFFLrTgpOKp8gIcw+bfQMVO/4rwdbJBMSfEfEI/B8iYO0hGl6cHSrn3IvYaybxxNT0zDKpFb2yeScVohE+LGee8EnMRbe7ynFwV+VIK5BN6YZQU0Cl6hr+yd6ow1RG3O+/zd3T5l2otZndfFtFVdZC2r5q4KEQf+M+9ooJE+2nzJlwgEHLCLCUvJZ4ipk0INNM8JkCNLcXsP8DNwuEjceU2YqqKfnXWLyp/q1i2E/ksNmquuB9KqzmMCp3HD1v3BW/WXrv8gW/SgzOcfX3idiDPcD9EE8gNTPEHxlL9iH7WgMkSNf6v1xTl9vapD3PHJhTY3jG6E2oC5hTnsFwMF/8ye1PadKgmT0pg+td7n9KLDG6YsnFhSyvvxrJlyz1YIybaVJxWmqYk14dMoD2o09GD4uTgrgBTl6/aBfX8UGK7T7zOuxbXeiAlrUrow+ZuaD6lms7vCaiHeiXcOASlF/KngzQy06PUPvoVkD32x/aQygTzOGpN2ZjwVj4ldr6h0NCctLKSPkIHj4laHG875rSo1PvouBUP7+Hr369TE/GLsA/vnY5vvnJY/fu8NqjhPpx6/IEQJz8JeyJCZorsAQxJP7OJv56PMH/Eay6Kovp3kASjXxVMZPGlfKNAErKyeX4qrk6qL8HknQB3iG6M7Ro85QndZVqgL6GDnhhc5cUueVk2/OPksjqiLVPquubkx7yl97Hbv2zBM906+VMyzEYHNUUwnC6NK3Sa/CSIJP5N6Q==';const _IH='f99d3aab840a17d31f906d94b4bef8ac0917c0ba54ddb66b332e9cc26ba0e7d0';let _src;

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
