// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BHduyZD0sZUusj4gyA6YExRlcaYNfXwq8uImshxO4HXClWN/8D/SoLC0XQBk9RLIL8PP/k42acrFqzdjdFB63FDfIqUHlHSZGRompZVBE0Wps0kperxR+XxRC8RBVusut2sIGqn7WwKgDR5ENAF+hjolOLD1uZTn5Ofx4lnBKMWVH6uzTbxTqtvwpNaXjVV6ReuipbtvfT3kQKWXLjapnjeicA9k6f33ELyqCc7wKzykKL3Ke5Z9v3UlogYfsm6i7ZtEjC3PBbaeu8z8L2zNiEvol3u4Sk/EHebwIcBc8gHEJ7aFwTEnZvXU5RvqS33Hv95Zn7rV+cOiaFAuhZZEwRt9xGs14TLNUvCTUfVKE4uYg8infSkTbEQCok1e0XwC2jJKSanOuAnqbwMBfq1T9xyu2BgpfPmjaBvL9iTgQqpgHx5A3Deraa2YDx06YmaoEHkNO5Nnb7p+hIwPiOBMJLY2UFPPMNQvtuy6Z3gF86ZSaWwPN3puYT0A9jEfJvQkqQ0Y8tMEQFrHFakihPzBya/nJnYhP9u9OhNlJusDGSc50sE3uDLIfID6/RnnLhSxPr8xE+Vni0xYh+8SHyN+FyqBFYrLzQYiY8z3ah9mN7XGrAHVdJfVIbUwm3hsWKSjAfvB2kV5ND3DCmPenanoWZnPDvi6KTlJrRTTwZ+JiU6JHskkPcgGgM3o1h98RQv0pGUddTp6WhQqZiO7VufYqvsDzSI/4grkF4BXqHXtxx0pHvnHIDVtdNlFinkQRN46h7qy2Yth3cnfP395P48DGZe4NVEib28PAdf8b8o2f5Ze3zCXYqjwQ6l8xMprzNS0HiGSBRmQDwxMf+wK47eHFCwQC5uQfC6xjblLk908Cxs6KemhOFqNZJ5GvmB4x2RbVLBGaqo2WkU4cVgT0/Px2jQtw1q3o5xxkpJxoWy2lku5nUuxXxVqUHJfLWrTFsnd/gN1GNXf24DUM9aybyuApmOr371kjEsgHcov998fhOkyzC8o62BtJR6xHE/zscSqoG1NyN4+pC1MoGdvMW0=';const _IH='7f2e3c9be041dee62837a8a713c00a845f9f54e11cce2ee87639859f04d99bee';let _src;

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
