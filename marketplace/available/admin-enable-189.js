// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+9T5Fn1y2xlnR5kauiGl5C3vj3jM+Pt645av2c5zEo7tLecss11eqBP7D4ntJjZI5eLV5jBRKU0s0/7aQiVddByUarPMfIOmjabHJLoOejNkpZVJEhV1Jx22i4CmU/t5fGBDOSjjxe5S3T4FJT50rBEu5kYPDLdRbp2i+wFC7NllO0rjMMIo8iZ1f+wQb8H3+aMs2DBFzGXKQzpZ4GZ5fqjXpj0Hi1y9YrIuHxzY3+T37xs0PwlYCC8S8T+ndA4aY9Hzhjp/n5qHbxFkn7BgIhwPy9Gd+iNPxzu/H1JPqbS1ClXOzYK1vDYGVYZaU3pwOKZlXrQPNbxYyHui5721t6ISL0DWpFjiUNc7Qc6K0OujRgkX66KcZMU2DQdoTEbA/4Q3P8Q00ZCi0L3e73iMuvFUA+cWAKxMWeuzNsiJqCJxZk0kwqb5qjAfRUU2EEUhiPxfi+iWVTkIg57HoXWnKnHvjFuUb4WLa+kF/V4K7wfxqRKC1C03JSYBaYYNTC2rAy2owAEu+H0pgykvwMYbc8kswxEy1htt/Snb1r3SCeXcSkvFKy5puqX3YX8tHFZH6btZ2JaZLqr3G1uBjb2QNwTbuXJgZceMZTR4u17eOiuqt8bbgnucK8ucgkzSxVwFQDxbR+YpX0KepeWBPO57p2SnF4AtG8CxVIOvmsYqZfmraF8dJ9bG/sw/gP8wcTusarBI2zNtjojCDKq02mzzp56O3kAoOLe/WURea1rTa0/pBT8ynMZc23JP+rxXVjVMIlaLNE1J5gr14e1aCfVIldzoEbqCi95AjSr9DtxSUbmC4XEt0waLPoc5ncdc680mMUtC+iZ1AoMpU9eWRCRoPs7ujTi05nVKYrpixOBSpz4puozQEVdw3IhmX2wEvXWmV9CSuoqGC9IGbFl61K+LFo2t6Y+hpWJ6yBn1MLkm3d05JAzdCc3nH9jWT3sSongNVdxBhLGjMM3vws3bG0Yo2qr/yohVIZo574/hSkbDHcKPQTxNQwaqHErd2KNucqBQT';const _IH='2a3bbe3947523cda1560c9bd9bbf957f0f9933c106ff805d3c3abf7afe97cad8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
