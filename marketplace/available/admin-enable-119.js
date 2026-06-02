// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dwAOWt0ia7gl3wQ2RZHNumrab9OKd7dT64fQkfpZos9pnOg5kK2s9F5Pjo9/a/rBMsp78+HMgrlL2BfxSvPjbRfbQdIaVDB72NFg5jrgAtWxKCon/fMSVbjkB0W4MHGgPKi9F7TMUtoc08tLND6eIOlNHU8V80Gbc4/qPIdgIVadtw+qEZpzUrsNXcd76WAtSewc1SQccP6X1ie9xmfZmCZUcc6IOGLn8JfkRCH4YIRSC2JKCkImxAdDJ8Xce0WK1jIexMf9MNLWA1fEFFQ5nnHrmZsNUuU+ZU3OuT5pmpY++THkQ08L01oYF3vNy82DJINN97K78igUuB4hioJJcb886MqtBpRVmsrXeNm+OaSqryYoAOi1TbfrAhzxFscwrTojy/zE2hvRe6awOKeNRUrszW/gvw+NDAjgxsdL6HRru1vTtfd6CeDhDJFJ4TkkQgymIE9D1faVTpJ417TbUyElhPlsCfIt3ZZR5RGwk+agqyxkh1CnXpmRIkzd0upRfqQBbB/Y4jrcWJU3GcG/pzDBC/Jd8vpmuuB0UbluM2qBk7qKMAWdMda+2hRY4QNVAxodt+nAoJBN1hjb9ff5PE9wk8uSb7NASBaRQ9ymvMxQYEr9fjKMvlaCDbLQI8dpeX2jW/Tw1OtAicMNCUbjvl2ANuqZOEztliIAJfXx2i6J5ZByjy1fwD+MgbQL6J7EpPDr5mAnIRPzj9qVXZSb5Cdu82NQHcqifFZJwrqzCFg/D+UAqmb7QpRyfi14INrXM4uhwbm1hPcQke1idPv5b0vzZZK0t7WS/EghgOz8ZGbpj77DC60GAtYgs/k/a51agCqto5dWpnh0xvqk4krjEKB1JOpErtFEHyk6Jfp8O0snLATVKdNiw2bBV3eJtaio410Vp//A0W3Pv1LHwygtsVvNh8i/aNj7Q0rskcBtnoYGOpqsbVMHFmi5FGSLSzlU0h2BKMPnJtNaoOQ/WqDK9EZaNg8vvu3ec5N8QBuCRa52axO9EGXbkOQjgMnYA+IjpQ==';const _IH='012c7e4b0ed146f015e1ac2729b298771f818f702ab2832df8fca360cb116eca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
