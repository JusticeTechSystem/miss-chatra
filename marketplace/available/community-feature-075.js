// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q1OvLFbqw9K1Doy/5kwZ/7h8FgkvvlZ0Mpgs0MXvKTJ0FT8mUax9YLCv96TlJgDXn5iGkrj3apM3m1Y0SYLOvIL8hADBHYBEhNwA2pdo9l2CS8tarfi2jFIW+si06yhdPs7uakbv6XnZsP+8rmKJiciC9arUOmvMQ9BHPtB1XwaUvVZeDmAVOAlFK7p3cpnFyBSNG03aYevIkhLtp1nG0NgoVziwa/TPDJmJ/peX60JrEsocoDbqgwpPNd1RRxVxXifHgc6+Gd3Awh2pmtKxIUxa+Nerf68+sIXb5nBuWSrpoTpOgLaVB8jDDz3P+OTj60xA0lXdfsR4I5XOV34Tj9sJOIeRFyvLVBnTJ1wPMnnTpZb8eOdpfD2ECo1+KShSUHn5/0G9BgbZjTuGI5jnAdtrWH0+se0HON/fssVs+dFxPjDcuoCZsj1e+sF7KF4a7VMd8z+Qcw442c0MMrE5Sh8NXp0tqgQ4i5HK3/ybdaR8DfB43b23KRKNU7vKfgBael1TDgGzm17wp0L+qmCnHWoDz19SHo2IgjoiSawNrWBu+di3yHI6DTZoonRdszwpuvsXgnLo4DS74Ub206J5vO4LlPVkK8uwYIgZJZfwVIYodyPqSKazanpVd9nst6IoF1gj59sYhTDPrh3u5v6y/LmM/y9Pali7w2OQB9hROxN6KdMPk40tOozM8Hinr6nO7l4OzCVAm1t9ytIEEQF/W/EN42+uNFrN8B6n/zGJ3ZdN5oIhkCI=';const _IH='51f4884c9137eb5d009d93b09929e65d1ae2add968b9e31ad78474daa45ea24a';let _src;

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
