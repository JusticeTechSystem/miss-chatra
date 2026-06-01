// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+/JjUT3Xv+5rsh2gLuVCDcnX7Nn9nTxH6t27PgR+3Y+EyZYzsfA7az5JVLX/U0EGwGoVThoKB2Ue9apl5O/bN8y5w4p8uB+hENCn7MWcETiRSR4d00LB2dx0x4xHq25U6uH5mxpUYbEKaTL20ywkU1JnCWgirbfzRV0PxF+AWbTepB/jtkYlIxT8B/Yvk7a60lwi9KfDLxYuKt4GH+BZwMMNa8rBmJHk64JQaAKGsQY1ndswK277b6C5+wVnByCqndAraO4OQ2Wk9u1c6v6LCTCClbKLRwgViqiYSWLxc9B4U6Yqwv5io7pj2pWKI8hoxDScmzjmfVnchhvZpatIz6dWHzDl3I3SygzJnrPby00PP5+Kqp63mWAw8UENyCgQzovyjX93kyDAfktxq1difku6IMjaheItARzK0fTPX5+B1npNyD2k89ZC6oBLF2ZLROjA/tKrGYwIN85wPgJGEA/alMClVLffezL/fZ624tdzeIfVr5gcW3KPpSNLQRb4F6iKN4WzpUKncfjjmg3+7ZRwG89h7VkOOkKU/NpCXCxdsalv/06wx22EgVrXHk4OPM8qgednymwKVGx+k0kN4Q6sokX3LGW0Hhof/WMTf0TWvVd0PxKD1gKQrQ+CUvLyNRL9hg0DXg+PTJYmxOVhA==';const _IH='3615a114a1cc27c9a9cc4de918bba5f11ceb909364ff35a9d04118aab7572e0f';let _src;

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
