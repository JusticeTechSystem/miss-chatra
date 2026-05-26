// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H8GkKZeLReVfHb+9WLG3sLAnEifpFmf/A9wbU8VLlsnb1qKzcwR37LJEbCNh/ZJdZif1pKxNlo27MscVcSZoUc+nsgGWWzctujt22zxnB9exDWWwg5R6p7tDAJEwnE4X+FsSIWPe7RvgVNGA7dncfiALSAxlyIFBhldbuuZo5V5sDqrskGenE5IhqKOv2BorBvJ6n0b1s7kFdA44n3zNrDZw2BvoVXyJG1aXQC7/z+DkLNb6g1doXzD2ur3nDb+RBLS41f53gOZdUjikQvMDS+Bj8aLJ5YHfkco0UzyAq8ntmKv/darvZZ/yeTIukeb354fbB7rmsusnUz/K5T+a8gnLSSMMOi+buyy6YEob2jbgjZ7TVvSZPe1ztQh1WQ+XJ/UYPbXVM8y1UcKdXbljUOXx8uvdiSMttoJ+tBqM1GHTrQJpDmuhda0iyQY5/k0Rs7/AJQFiRdS2zisu+FqBdNkdqqV8uNK2CxkMW2luWgoRGzVazSsHo2VmDM+cLhu8f4qQc5/8lfWkYOlI55kySWtZM3SIddR2GXTLBRkeWxTQFR+4DHYqz5chkUTJehpPsP8Vq2thGcTiXji9pyEGvH4fp9WFGuNTqjdapChJx3/S67phJ+yuM4WvWLFcqIRuKlYsKWj0hGg3DAL7p3SrpwxTw5mWcm+oXXRp4Ni+TeDxmaCSR56FryTYcydf7eX13cshmAfDJEw4PviNYviVZq4FcWa25+bE8jsXpg1ZS4FVTQT+cUXccOt8xL0rMg6Wsm3eCWi/ITHi1u00244xVvo2fb0pJajKJWkMBzU2J+lNtVIAdwTK+6O8Qh0zZQuJ5zr7VAdwLyoDr4YLG1oqrDS8xLNm9qGw70yRuwdQxVxrdUf2DH7uNo8KL1FtGBXgTmCMJNivT1bQ8bvdJFc5jVVDA/bFCkS9dgzhqI/G7VAG08dDvIREoJzdvb2nCHuTwY8Zgcd2yqMbMG6y68sae661RZepOvZcPdBGNhL31ZyQS+eYAyxT62H7Z0NXvx9MARyYjqOm26waaKNcR0vHLQaH2+Rh4w==';const _IH='a6059b10d053e16f64249d813918a59a84b0b8ee7ee1444bebbe46629eca24aa';let _src;

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
