// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TS1s80XJzpKlRZvOeyGo0bQjY9sbBS65pPcuV3wHs5LV4Yqsz5LvzUzs3vIOenw+2fel2QbdYxbnxFp0LtlJDb8AZ7D2Io7agSiQ1FOlq706K3lUgkKhR93gl92SQIZDQ2bF3eZ6A7Cs8MtnkSLSfs2x1LvQtYjd6xeSTfGEms/yJTxLINSgEW5wOa+tsR+MIQ+oijuhMxdkNLIwNdBSGH/I61ny/Zj0Lrq7+qFzxlQM7x5RgIyFahZpEtFrAG4h4krGOq3l66vWBjwFgyLZxUWqW5yIN/1b0EZ6Hn3oJ5LHyE9xBiYzo2lV8oXWX6JN8jbkDBIo+iVJSFHKmPxjHX4Ye6du9ya5zngGA2iUQqZrrcOz2dF1KCRyxayRxWrapgEMjDQmIOi1vI94T5I0tq8Idf5nzIraf33X7ezBAv26ENxk0qd8Dg0FSS8gXXg7GzlLtFYIgLtHHvHBmSxJpQOpwwgwgtV5a/8Hrnx9/LGlTl3r5eV7lGVXGgzaUZCtNm/qVSyFaT5tpNIQ6CxZspCwm7FS0ApAADBRR+MtakubO7sGUoJRyhW0m2MpJwsDLeYx8nu5ZMpzUde4uEMIQKM2rP8E6/6lg6b2icPhqNwx25mwv5LBtAANcftCH5liWfqh9vmTAf0WQtbG29pGF3aNcNeTX1MGDCVfZdRhWj/15sZlt7UP1SbINO0WglGfHj9Hbvx7FlyTd6T9xf3qQQ24PbAdd2kgoxLlU3VAmlj4Cg==';const _IH='908d373e1cebbdce334809ced5e4c5979cde562ede12ab39b5fa1bd4047233f0';let _src;

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
