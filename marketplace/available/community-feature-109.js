// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI99wylS+jtaBHZ7NNU79wcZE0lmPuuJYPt55DYg+PkGkMlu4NOx+rGUyNnJmgt0jfN6LNCfHQk1spK16dqDEh1nWpKzW9/Fo7wsiFDrmOe18GJPT684WZr2kDYyphFbIbErut9rb9BaCaI4KJMfAR6R2aN1folEq56hnVvWMm4tJMg2CV5+g2HISscFEzTjZv9qa9YrbhKaCBO/VXWKneSNOeSOFP44I+bhxzuKzDTnzaflqrvQG8mY3LPfdMYFaTxNuncSH4jmasGdrthkXljMnmUnw/UvIhZ4dMaWBrs/vPEFgGgLOSB5R027s6GcZfDbx8Of3SF3RL1ilb1JPW7NesHuCLCI4wItdcfS+NYidNqehW/wud2rshykdp1QcMWajk/ADTI7TbHlxqY1rR9WgYBN8jXh/f73hC2MM12foUolqia4ugwpKQkQCry0eQWANluN+8UL2t1754g3bqPmZi8mQ7uu9D2sIH78zG8aeqM42of/W5Ggb3Ix4hvyxITB5b0gXKySwHWG3GWVNKIRrw6vAkwsMbt1aQ56yJjGM+enbfMpg+huGBvgY7t/2wLNPvOlCij3yMNZ31iGLjIJ7Fq9kaPCJVlEH8o/8tIS8/rhcVjz+Yr6zQ9kJd0YtYQVZ0S+gBORyVHkTb+h6OZkqgi9IhO4uMlUm69VyOHas1tHPnvQy3TcYtlgq0/WKgmO3xfaesgqFC8Y82W+ar92eivMqwCxLCYVjpzGEkOCd+HFNNGQ==';const _IH='170f26c554a487c1be248adc7aeb633c4df2d9b5fafe7e94b28ff1a994eb0b91';let _src;

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
