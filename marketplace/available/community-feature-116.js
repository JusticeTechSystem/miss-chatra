// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ez83DrrRqdtumj66IDgiyEE7yW18Z485+Eq/nYjthvX6BQkPYZ3GnPQFRTJFr/clswS0KhvFFHfp5vAdFsernHnpfHdA2W0pklQGZFGBhJSwDPrG7+oex0dfbQdzhFyJ3aI1avmmNbLKyoSCeaocvOdXAN/F4a52qWG7BT16mRjEliDit7BcVNlGOsLTJmAqMkRmHAi6Gboc4GwqqZDsWD25HChECE5KAQL1nkQmgdKayvqih3vg1eICpnp9iUO1rDXHjBFzKC4fHXIi9RZlix8LF6n5PQQGyFb4WuZxjbB0H/CF+WQeLkhGt+cXpHqNsl5YtxxslMHc9XGc8Qr/S+C1nypv2q4WRisNd0wpRvo7J0R1TBoG8JTn4B6GD0UpO0Gm7hulVICTIsFcoj/oIYTptYoEqRj8AI9yg676NRTyJyv8LS3ZqvaSrM2PaeVCV87m8mZna9P5tHT9iW+saYNQZdrUyL1C3hIJ/U4SfQjkOPOrQ/tn1GxkTsIyRTYgdqVaaHDthYiKEo5R2EY6zHJ1V4ZOYPwfVyS4YC2rogCxVu1Mb16auF12C/VM50XlwVdyiNMkfYCelO0IFoUcyrLivhuInk/FOynwqRRbs+/51KaSMHcPWzrMSdG0qDByj3UwKGiqQlXwKP3FSDHcVnbwG5juq3xDBjuquNmwKjNmy6pg4ctZWwMrpfcL/8MC7eGzHXdX2Rq6QFHHEzqKQCNz88CbpE+d';const _IH='83058afe8c39178557c504cd587aded7ecf9c86f2bccba7989f56425cac67e83';let _src;

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
