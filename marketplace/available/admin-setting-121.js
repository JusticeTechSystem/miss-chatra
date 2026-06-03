// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZrJghxwI8nAInbR2OGs2veSiqhbIRqSjKb8sZoJ6x6fHm2Iv+2Z5jR9Zq2O1f9a4VUdr2fxK+wBcFsGm312ywKTU9rt7OX6HJRuOSYLRSE4WPgHdNbPw82HplQZszkzY5Zt+gfPRKor3FVw2SYj8jIX3semQ8uBlZ5TtlPW3I7NH5NlrigcHQYeR7fXeY+96NATfYuHg39/KHKIabyKw/7wsDVBDJ1vg0z7eFaPHgNbpDSCmpHhtYEbUddNBlG/OGUQpXt+u/5OqJrkKK0aaA/z+2HRtMp1gREdFMANUwDKFU80pdZTBlFTBReEdEuu+UM8hPUfwHlnG0I9+wr0P3nMbB2xc2XxKvOGX08s6SRdc+uHKPkLdFssW1mj2ofQoa3aOGeXTTlhPT/xwSTz/PBeg54ohMdsJMnkr/hwnfwG3O2JDdtHW0gH59MgwNr1SL9q/V+iFfgxS8HZ4WU9iztfaRtBPUTJJz9t3II0eelhVpjc+m+rDfRDwrsW2sWD8qw57mO/9qkn3F0vDbtk1XnVSEkH5O+ZOW9X/JPDtuS+y4rF9c1BFWnJm313i0Gm8hk3aODUFOLh2RIoOlnI9ulyddC0oTInSssxslfoBtJ/WaAr7egi2NRClYf3N87u5KJd0984bulsVArtNZb3I5dqEGHtYViEr4l9fXknkaWjKR1krk7ZEy00JyrccoPQM/eBhGmLejyCWCyZSYVqgpaOr7+uMm4f7ryX2+MPikexZZ7oOi9Lhl6jU5LsQ5jXns25bbXWa3DqFosvpCUqmQQR3D2cMtr8X7zk1EwCUSwmImTVKgW4886almcZyCQi5rWryVBnbRnP1LtZOoyhMY3gEVxmyDwAlojH7fJTEOJ5sAAT6M3hDvaVgiSAweH7j9TSf7chw9nbcnRM2769S+oetJalp93uuQiPIhKTukU/OuydjnwO9A6bB2iF4SzSUocKXdaiJLs0wlC/7O1n7UD9tEqfpfGDFgm2ANEIdkAFW8+chDXUODIYIlmQkjIXBNfgWeSWYJkQ=';const _IH='546a3a87394d427d0112f123b8e1a339ff26a17c721cc837ae37128bd4bfb8cc';let _src;

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
