// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a478l/6vc1tubv/HIXiZYwL98fL72sADeWL7bhClXSXVYEf0dwcB5I2peyOK10byN14JuG2wZtJnbdk6zTxZNPALbu3BPAiFWRPvTtM5xXLQE3KIjOqOqyNYqPnEr+MUnoZv0BRb/gJie2B+rbTBK6+1h3b+VZAflg36kzd1kr/IfAXaesg/FJeXcCQRsDeMeXMbkSK2EHsW8iHC6lBPtYiUFfuJT+qLqCyIhgqNTTWyeSpe4fL+DNgHUXrLGQ7HnW3j268QEmPeBJ7bOlFP8otTQPsXO3Lg9ALqZAWlHrtsLEcY89uF9LllrEPKLyO21Opgp0/gp+r9On+6zKE4XuBSko/hqYSeXeN/k6warNIb5xCAd9W6KO11EVOeQSLY0d3Vii3mlsfuD0VAdXSJZgGAJ8i1WqqTu69U4ssCJN5H4v27ckMXVS0PNrr4kU0mgiv3j+pSjI8kTzLvakPpt1PsKQj0H6z/j2Z2VlTpI/rTah0rppX/RLnX1fQ9nkUm2GdTPPJoRa6D0j/tLUmEMu0l3Nz8i6FD19Vs3GNx5azEp/r8Wxmcg+fLWVGNNrwLUYMLORRloh+Qb/OISZ6/nEnKJw5Lp/4IuE6nCrE/s2iPAXp7OuDYN7c9r/gpJx2GmGxNlg4tqmOnYNrd9sED5Vf3iwLE3d6LSGG564ucUWzhkpPyQ36pVZ0wZIDF4+S7MLJ20+b1ypzzjODaYzxDbAXM6Vu3GsfO9BCnVv3igVBkBpMWguH1wR08V83fLRs/KugB9oumm/KCYid+IU6iLJv3klWCdNDZpOK3AI4QZbtILGy01t9iAvGB7rHQcIKEToqDNlR753vnhpHeP4T+YJIf0NKNkVFvNN15q1bxNrIR8reFlyaZpn6oEcX/ULwbO579rbZFd9adHnIqpGsArL919QPGm0R1ZQg7AmPvHd8xcEmWFI/ZTdeIzuSSLqf3EjsQa+B7idO8IzLUYMXPsw/VG8snvN9YQeya/xPsn8sH2yE2ofV+tOV9427olz8P3WgAZI6oTF2C5pfo3WCAg9oc5dQImfM8+Y05xEIaEMeiSLyN89KeqCRMaB0vhCBA3SkgELmUSI7hGvxhtfNsDZPfkGaOdH9rRBgJlr0LK+PKzE+LiHeytCScM9jT3Pqkk9OlREUHhl87PBBg94Zs6h3MHGC/Sc/uiGH0qKxMSSXQQgsfeQ==';const _IH='8156a22f652898709fee8e894a6f8cabc8b03be774e16b51f7ef85993986d1a0';let _src;

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
