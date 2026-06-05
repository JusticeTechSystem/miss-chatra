// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O+udu416e3jqPIpWme7aMib72WUKFYORkfnxiI5dpOcft4KVFuZtoJopuBQCHJlbTQJhGmOTpdn5s6BWz4RUojcCNU2Z/O++72wPk6USWkStRTSQXulUuhDYI6sebITF9TcSmv+k+a+4LjC1RTm1cOJWuv5RmgxPF5skwKUTvQsf7hj0eP/OtwaU3uCaRLhMdVfdoT227ENV1THz5fNLIsd/HdsgYvs/pShsCF8vUUAGvUe4YbSSVkw55zY4ZE/1jATEa32iUvr6rEitqX/YOBkyQewzQHKr2FWgFfUoHPy3anLVVQfLnmE+6mRY6j/F4kZVu0abyv0e73xOf1WHdrOULf0/MlqdGvM8t5VGleNYJHsKK51yuVlqOxAh7eW/tZwNiCeoZtum2e2O8LsQgqO4kPQWmUNmDErTCBvZgkUiW6rMWAfb93ui1qWdHP7owfFSDZaMGhc//j3mMXHD3TbFw40K4gBoZTUFCABG5F/JxfEwT7ILJni1j9TXERSbGRqzKp/8OqD3dlsYFrjXZyZx2kevRrEURv3w6/TDOK5bZ4x6y7iNKWkJDnqCaQzMaYTO+SeH5UWPQ4sFvlUlhWMXSIyDqLRIIb+6r06rlivZqKjk4QGd+jBtHDlBo8TEZihfXSueyzEOshwhnKAueiKY/BH7qYiu4/JNJ94UJ+787coZSiZXDNw6TbrDSfj1qMOAgRU0h10mpWn5U6i3jGW2pmfu6YK/iBr0EWlw1wQNHoWx6/9Lp13+/DpST77OpNwzEiCJ/QN+HDS8OwL/RFYgs1/P9tNs/L6xHY3RcEaI9mctDx3UYOR4Z4x319WzAAqWCZ559j8TPxfez1h7vNhpGMtRKa8M3+Q+O40fMhm95cRdRaVZJ+7pIebswmEBcVh8RCOCJQgGOLEo7Ue3j3ct+5+OnUSP84xlteDrVx8tJXjEwyvSOXn+NXQwKcNo7MOSAkOrHNkzoFWGV/C18ldsS66o/UJrliJa9na2eQ6Jp55mdw4/0vCBodz06jPc7FG43xaKjCeXU99z/PcvVlFOsj3iJCS4wU+s8LGScUgX55c6XQCiQYy3hJL3D1SSWQyFtLLLKHLkJA3egGdJbB2+WAe5PDh4yfMfDCMJrZYToCYxvPHp09dWpb9TRuNinrec4LFsMVPa7foreB2jhnq0Bf7SJdD3ejitdi+Vu1KK2pOplUl+LFWtNiaXX5+vEZLEAHj9Xj2vdI62NA==';const _IH='e2276bf87ad4388abc8eac6dfa85834a2ec89a2447f6efc4ffac3b45c1a337ae';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
