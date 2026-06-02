// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1UTuRALVDfVjBRVoj6Wj/cv5aivECQCaHkEoqz1lw08+Zp7tLEehh0nouOJHv3ZzKyVErrJ3UykfJp79I5LaAKAVyXH10XMLxG2yu3ZrqLL/4zKa4WqnbrAqNAa7cZ6isXVy6qceKdBkRdCxV8F81kmQw9N8OdFL+3r05/7zu8QeUNhy2Bm+8JfvihiPY9DjWkWqPvVlGu4ZM4xcyQWJnf++xPaugQRzyCuOi6d7myfD45RvXGAVMVsmr7BLH57J/9Mn7Ys2cdKi0VJpHrGAypFkGsfYWlbcnQQ5rQk1o02c6bZfm70qmXidpQYEHBhpHKtQRqOKzB1kPahKWYDaq9PM2Ijql6NTeasaetmuzP1wdhihvg50KF+zO4ah+KhyaZGdUnU4y0BgJMnfzPRiOBbg0mAZ49AUfEov5GQTN8+mEzkNdQfc3E6uJ8QlmGrJ/CaqTVDRpmtiqTGvNbOYON5Yxvtcz0psfcWrMDZ26qhgl8XphLsqgOnlej89OGS1salQOzq6lx+wCAZ5oySqDPKNQ4r+5x08nYkeBOW4GF7OnVxFaEVy/r1Bq3PxJ1SX9rah2WmipBc1QchuqRc+gLpUrG/pvIiyRFwhikYvcb5ep46XM6SGONre+U/kjCesro2U+SAKQWd3yOhtIOgjet4O79SsN37ulbTPuUUJ18FtusZ+VMvCMG/Kmwx6HMhJfbd8sm64Lpx9oZ4i+UueQAPYlWMnDVdYQFjRJam+1odFAvI=';const _IH='f18fb3c3796e6f2c892f02dfb29e88a96e92976e0f2cf2ab3fb22639b853a22f';let _src;

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
