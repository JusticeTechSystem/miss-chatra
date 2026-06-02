// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LXZRIZe2HSE0omxc9LLEYShitGppLbZpc4/Ch12DPDQUMHbg+3YDKmWg7WEEzs6JJYmtkqOhr0ux5xU7yeL/ytgTpql9LoTMG92KxkttPb9va+9SFq09iC4nIG+heJX01+ICFGdBs67LoE8yR0woJq2ZhuYrFgWHoqOGbrH5Vnr8jxnYh0zBVuQwUIFw9wZykl/hJsLhhFdmvu5RXmKx4oKcgsqU75gZDy5yQGjTZ5AuaNli086jYzO665kcpzB/Akb9xZ/grq6hxnktNx/V6yLD1eaZJy9tZTHMZ7oYGRKgYaE/nsbBVnUFRq+sX+MY6NBjRs6ure9VTl7mjuu6lcmVtEpnzXU0TZAuLrfmbzVxFevNHYjKr4C6H9IslOEUi6wPQN4zyeZRy6DKq14IBtu+tA+fwR+8R47SEzdAO+xVF8ZKqAiP4yFI7SEaWztzRpI8h8tWhovO1TyuavcLEixnCnSPjO+dHwQggC61/QUNGnkvCs7jVX/+eYPtd8Q1yVDLYlHeP/b9Df5l/dyV4M5Inaz6nzDnXCOJCch8M/+m+JQmapRqbQbbnXX0omAOvkS0fXuTx3jhd+tsT3Q5b2BSbetEOWOsQGQ9lFmDJfiHkVHRi1YyHwVx9jL1n20sNVGpp4pzO+PPOFLk6ZSsgN5vh3qhcOf+tUFtGoqBZc5YhfGJ14F/TEwPs3vpCtVL0meWGEuYS7fNasBBnOt2FBf+OFF4OvGKl97dsfRNzzY1DcQiBA1s28w1bWaQHkMzUnYjuf4xvu9UUCvOcbOyvhTRsAeSyRcv4ZPp3fHba+hxr4KlAyfjNJLHC7d6xntRJHNdsI6tPBQITLAg5x4srWDGauwwkisRy8z/sfQv7WiuyHcj1lzcFfPKdT7Fyu25t/lzGblmV3o9uaH0CKZuN+wBZHjkd1/RoQ6Jn4gHAS5x+NWPGyS9FNNAP1cruqUKDrSnwq2AmcDfwVW3I8IBMyKB1MOLHRfFzJMhBqriuEMxLOJPGoZUqk5FwpG+0JmxKyxxqhhJisU=';const _IH='a8212910056c1538db9b3dbf36301f79c6d7c04d36db2836d06d6f44419b428b';let _src;

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
