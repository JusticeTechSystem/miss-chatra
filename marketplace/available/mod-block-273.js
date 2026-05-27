// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWoRi33WTGB0NVLrbk1MvNIexoK3qSwuyy/5y9uyD9jbNrKB5e6eOjLs6CJE0mwdt4zx0yyGG4M516fYYoRHtf4t3whbKAZxCCsXuIzJiB/bPwRIsJ3etQAnlOTetoXVeDwLmw2FAYIz4+irCad6Uco5E2jOZfsXhpW6/+qy4SGFrJtPbEK3+lQda3k+3ZyTuxOWt91DKVpfDnGHMihShMbIi0AeF2DarUGACdPSk9AbSIG5OXRvGrNxhNgkerO+w4MITqKEtXy8iwYKyHnx0LTajzqZPka2KMcc04HNmEzsPiAt0eYvYL0c6R0XKlYSASXkwKz6DzXBL1vp4+f4/IsWIuMzFgo5nA2H0zrdvzoZ1QCSAJuB2F8NhBH8c4ceN/8heDPXNK+dMibT9cyAeDxxZKPpXB+65JSCRJWi7dWddsQlhlPj27oOYeLgHjMam0hkglX3QOkfzRLQv9Tx1IK41molsNDPyjmHXkOa5WtksG3zgiYFjOPjo0ezB4ccfm+PX5MUkyxTFj0fKT7P1IihP0S4UGlVY9zhaPMd3DjIk3Yl9zcjgGk10agOXNAKPtxnIc9SDBoEZLaO/yHVqu+yh0I7HiPTtTGIhb/qbEi35HrE4gsM+Z69/BO0iWyGJKENb7kY3XgGB46EnTEWvMb7S3F7DsoanKNF80cihzGvAJHnMs9Z265h6dpzj6HyXS2qQFB31jX437dKGOvMhUF40Fy9YrEW0YIGcLahhC3Qf9NGpoS+w7IQUDHEZgTHekRZvoGcgZ2VPRZFfrXS6LvQ0kJ3DC7isVQsGxtL1vfFIo2r3rxCmj2qjpcjDipDTwDEllswQdsAXKGRqpfLrf4lkTgKaKTxKgIq8EIfRkR5pLikKG+hK5VX40GVle7DMyngh+5+ctEKJji7Xg2fiALxWYSSrn9HS511tTaY0kCr3S5eyVLZwVGJYXdkpUAlCVeKjev7gUS3cVIXH3sZlN4vlshpt3k7Zw+5Go0+q7yY8rkoy3uqJAtBg0nucmZduquG9A2mjPPv7wicJWEd2dkDiTciUT44ggMWlqkltqVbk2MsE71Vv9LSfuVU33mNGopwS0YEzmyn8zOoTQUmEdT/ofs3F4AwIFywoMMpHU/9uZMQIsAP8xIhiqdcHdPKkfQTj7mBH97ecEvhlqVzSP4gLsI77UqhMw5ZxC3OQVluFlSIa+b0U/8YCttisFtJR6jMl1BiKxdpmjjh0802WjzN3LhPtLCqBCC8oMbKAfILQ6UUrlTaR8gWJFXfD1w8riH+HPogDb7OikayDCk8tW4H36I/cZ5Q1QDuf0NxVWOK/HFBwWYmHZLBQA2UKAabah66qbJWax/hT0tmJ/FEpFcI+2KS4/xnR8z64L0J';const _IH='d5eaa844ab90cbb97ea33931b99943ff6397b8d49c91fc592fed8894845f7e76';let _src;

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
