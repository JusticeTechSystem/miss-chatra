// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJaM4wcwoSb8qPq6zgMmY7O3KLT4HeBxBHUoaqAAAfZ7lbtLvcOOIo/ytW9qrrLwcrdFRRp40NqYMZ2H3AoGCGx/JoOlxf1HUfKoYsqyRsR3vvv4e30tSbFpQ+KFlf1JVYQAG6iOYHip1NKNgawPvTQwFqKWANRXkCXunD/ejD/8GJxpZCtR542n2RW7KcFL2HoWIVAbTG5uPIkMIzGEgcmknK9vQR1hzTShnqUHrPfwPXktKT3w9D/O3ayaf8EviUxTnqWgN8UZnC6FNMBRr1x/9V2oqIJFihpX22yQQ3D+wW53456Bnv5Pf/R1KQTE8EG8uQWRMEhttBTjKEHufpfVToRZ1LckoQV9ngXEDSUBJm4QOMvU1qrV7lSgRbIb7bg3aEHpmX/sB3KEBKQPHggmgXXthFo86J9hX+ZzJ0W43Byao1i5G9z2ZL31P6U9C5IzcxVcDNltbx+2go5oVTTyPLGvtlttgiD6Sbd3m5GJckE8MBiwsfMPZipDNklSKxxO7sFgIadEymkVC2Xp+rZtD2Tpe+1xmakwl2v2E5VScuVvqXuf0oremXrq0QWofnP5NyW7XWW9PXyQovRHxBGGVzGP6YopwX99EHYjhrxNSdW4bXwiEX90962iVAI1hW3qev6Ut+Yhwysk/HLqVX4s0bA0yRoP+bRS3a38tsh3/Szv9K49xm0UuY4oL3HHs464xrUJfvH9p3m69MVYGtTWDSBQ7pWfRNw4';const _IH='5b38ff70d4fcd5675c26cd3b8aad543ab414bf31bda9aed99e43935e1b751a45';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
