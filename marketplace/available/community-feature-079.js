// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='THx46mEuGgNh7aRhar8kB7UW0lbZFXnEHX7CUVhou/jNyraGyH8mNmnEMLpaX3vTPMjF0bk9lRnF9WOP7SnYY7Iq1nOFEA/cliDYa2r2FsfezjK+AVrWEjZAwFq7zYEhTfIsnixnwR2nm+bnvA8AEfGIKo7BZ31ZooWifafAjT2E0SofvqaHc5V0DNE9EnzixA45/kOTNz8M4/NyW/BKxfSb9nwmTqJkCgSdcqG7DPOnTnBmsodVzjrtHd8QPaqPVk9hU+3ORPuw66Hipjtk/kiXQLVYbM3S8P5OfUcqK7VnTaaeFlEo1cAvxkEmOs5AAk34pyXfouU0L1ojzCgl2gm0KhhLrBsYqGoaPfULUghi0PVXctmzvQrnGc6rEqpihd0LZtuiOjA2iJVAN7mHQOdv2sF/ZjT9pwBS2uLDm92w0hgCHLzs+0GpH462zG+I7c9rofgusEo7fR8AmNGvFVDnzzbFLKp6jMJ3w5YACnMFq3z64g2ooZ5hJ4Z9aRish2Hvk86sz2SiCJUPVLe5BguGcoTBA3MyFo1pqfPwGMD53XIviKrWXS/hDISkYCGTLGFp4BtIgtnimo/myAVXw1Me/dw1zHPC5aeR3++KQcPrsHN46LPH8Tg02h7ZvSYXbWIzbRqiZyBdcEdzBnqzyjuq98jfx1C/dOcsdBaLUcOLewBRGCP0ThvkSunbLD13D8sjkUbhihisoHDjkG+sMXKbW0z1eHebw3UwKkLvOtbcUQ==';const _IH='eb49876e4cdb8922fc91743965f0274bfade1b62e54d58ff116ff5e998e84ed6';let _src;

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
