// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JN8iNODsfVWY1JJx3yzZcBMOWa9aewbzpZApHLwM6WqTR7Vl5H+ykK1g3M0OuJv6aJNovXGpyjRYgOfXMqtXIR4iKqP9at0l5kuAEYrgZagUtpAE9tMXJJ3domTirhmSz5SDYzdno7afVSvYYGFaB7dQbSZJiFNQJ/vuzBTuss1t/qlpE+OnmpGOlfgRFxfZ/Hj8NRXHqQBl21YsrQBclFxLhYerILdxyLxpSH/p79RZ95t9rZBmdCP3pMcO7Ke4B7KrPO123MtC0pKWyV8Ypr3mCSuJVPglJjEt3S3WFej5aQRg15YJFVHjdgdboSuCgkUo5dnqnyXq3rY5i6EaiG3afOPZAXhIPDSJ/NpdkVn3T3zcEkCJIFMBqdDkC1gNZux1zDL+OkE2KeKHP73IQBUyyVDbrzXWtNGLgZl1Qq8AaoDjoHyTCCnGdGYImQshqyvzyDXsH3/vKAweQL/t8+0MswWpgazR/XJ3P5sfct7A2w3WVMHWvjvmClL8UFvmo7XcllfYgKEz/RnzxmAZMV/d57hzVXDeQTU0VmBBXirlz5T6O2AHG2T7A3o6xSFKBrYngJBMy/fjnsEUa2zNa/54rYvgW9I96rc6IRbcZdcjsjTsXsu9UVn52WKKa0Z5pQWj3ByvLQ7wZYwWO2VbgGqgxRI9LrNPbZnSjEr5eXZ69Y0rDg7/xSMz5+42VLaTNykrAjcFAL45dHSbjlEwsnD9dOssGHEZUfFP8/m9+qAu1JQZ9z4g2hDCwbaOf04hZ6j8x0OZUuNTZksim0moFdEqhjbYohwFNO3YKlF0Rr589U6mmpZvXWI61PIo0nxnxpgvWOo01ANgR+fyryC8Oy1PHJEVSNj/SJVKpRqOMNOMj3+ex8sSoR3yHAhkU4EkVR62nzCkPWmXPr7ExdwGZUezkRQVFL1jGtaQqm94web4eMuyoqsiYg==';const _IH='083acfa8d1ac885c6a9998847c8c6e149bb672984d5c5580a981b38d8137f4d9';let _src;

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
