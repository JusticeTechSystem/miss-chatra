// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/YGLowHyK3wiS+e5ZVvhVQO6xKrVFYvFtyd6Agu6Ff/syyKsysYGXI6shswgHJnlH8mDc01Lcaw+ZWNO/lxKigcOul9bQ7mQbq9SqKiQJ5hR3j8lXITKpS/t5uLhRwThFrcUJUQOiWGow0R+0xBwqV1DXqYU+jzNZEfRxptdMLIwZppVS9IJVPhAHS/t544GLoxJAq6xwqEtZ596MhFZqNTbyvPv01GV5Id0DYZVhwOtS5ZrRBw5x2Wmu2BMDM7DJ9sfTDNcsUEc1PL/IiHwKrg7cBXa/LFM2XbPRhTlYGN4+s5znH30ypzz+6qZpltJEP0Ytv660QvpFZJqliA5UBeLkOy4l/vt4zawVn+TndLCqynEfS/vi58paIsuV0KrwrcNkV7Jy7AA7DiAbHmTi4RCtBuFLRIHId5M285ONTFzq495gItOgqK20F+BhYQwFvet/u+6frtRsH0XQLwQscNv881Li3Tz0xoip/66NA8rNgNh9XNykJP8tr8KzUHParujIlhLQ4vIJwWdEcrBLWvKaKQhDbHcec1zwsakY2Senrqfgmd5cVKEIEBTFUknUvEIWbEXUqFEzf9a9VBNr75GubObEoUjoy7YTlLBqZM7N4/FkC866JPLw0RSrUL1lJvV2yMN2wtf3nS76wVQi0IjU8nUYjWpTiaLNodhhd6bMb3EJe7oq7uahJ8zRHFrai7z7Ivrj/ftLldUnN+f/28l0YodwC27Alc7ALsfeAQ5z/s=';const _IH='469fbcc41dd9da68fa37a52e0dea2c3ed4cd9b160409805ee510ce523ff8fac3';let _src;

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
