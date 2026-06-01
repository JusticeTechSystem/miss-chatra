// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1B5QOlWYOSyJEBj+rgxTNwi6dgotboZR1aywopwClI/1El9Mq0B3b8qHZC1vmp31r+GswafKued2lTihNXuVVt3MZ3ArJF77uvXR9ZMcxPpgx1A7SGp7HqV0B3LwT/xmn60IP62IhuMcV/8QYvCx+KekHejvuTwQ0biyaArudCIOeeCCY7ZoEzPegWalvUlTe0ntaJ5FtvO6TTerjW2Q+3DlOVZXDsK8oJtpAz8swl9nmadTuMMEpCKhqdbWISCIsgAbXDXTaZfF35Y0RfJJTbCK/zKm+BcmMRK+2QQ8CfbMIcJJcZHo7ovDpDFV+WVM8hn6uoR+syw3BJ2SgB4QC0ZKOmsJoXmVbuHV2CJa0nJqSRAB5TVotrrCHya+wA1+pQVHslt/H6FhHFiGLfR+otZagzkEqRcjXACPEEWjT1mxGNxvm4ju4/oSyrtUwM9b+9b3tpAf7DeHqs+T6vFhgzJNb4bhYESm+ZZo7Kmdqb1M/cORG+R82hgZ9rgDaI8UDgh836gvUsm0XUDftwF7QHjKnJkV/Ixf+xALkjPnqDUngzdX09vuSdudkPAnBgUKex7ME/g4MAZ8HEGYEoajVB6mpekRhKE3VxSXZnxcOxb59HGuF/lcUQDUaj6qe9QvYjDm2v/lQc6ZuTZtDE7wS6sbCE3QuGe3UT5oxNCqliC7aUh44Kh4JNqC4ecWvjJUIQXAnZ4J78iPzb8FHE5IcHtOqKaezUvz92OTkfxmvkYCFjUOEz5';const _IH='fbfcd70adfef14821d4ff5356f7a4d13a0f2df37c34fca88227d5bd1b920d886';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
