// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sscBcOAuoQRG2WQb/T0rCaUDkV9FK/41OgVqFGr1Es70fTOH6GCxOcWO8NqvBVOMcRAQBBEJYj0Dr39mtrn5TTFwPW6GSGlXqj/xbmWtnxB7+C7nMfybQmsDc0WO9zcMKvLX2opVgxc9KPmmxcpQ9pAZbSlzaHHbj7DpWxtkT8M2KGSf4Ga53YhEa70Z5dVLGhWtvq7z28CRyf3LdsgIK0/46+ECJ5h8X7Z0zApX3h4c1UZE5TE2uV3Pmmyd1HvYE8hzDB8wquwPkvBwOFtTkf/Nk6a1RSgSAjZZ6a1qw2v9eEvCYyCyXRx0Je4Ud+KALRljwdnTh0yuM0FxxntW2ubMUeURrtzipTSi5lePUyTTmUDjnWy83hnvZ/CMrAmUqjmVQiljicZsQIytWX55TaDd0KHsJBloOF/lwYfWRHu06j0Y9RtJvwWTBTa+5dojKYkWFXF1MwmMtez3o0E7wkAJKE3Ng+rPCkFev/P9lUafbP5P4wKUrj+ae+pCFXhtn9DBl2qZT3dzDKSPoVG8TMtQDqH23c+kwYiCo3+FgRAEJFSJoR8uhfBR8qlnLRiAS56QC0lIU1QG4LxJ1HvaekQCipfvhBP7T7LOHGKYESxgzdlDO0Poj2af3h32fXqrHZWLWlWOIPP/ZWlvPOkC+3Stjqv7dU7oagpYv/hjHwEkV6CSbUQ7hk0bE/aDlVfWZIqabkoe7zTkRHGlFzb4MuNn2fASytsehSowap9+hBucSeroyECSJZ7qyT+UBys8XDl4Y/3qc4ooJZtEs594qlht/OoONbo4aB1UcdY4akRenC/w9kHwus5fxvdm4oWpnkK9hlEz7cc3bO10+k9ZE/MlfOpmUTivVYRVAlFmN1eLtntGh/wUnbB3YgsGIhhu3cgpDj0OIiWXHUuWZSX/+zMcbU9rOZPQCEFe87SHtry9AE0E8cdhpglwicM7yYDNp+kZHGIMpic/ear6njXXee4ppZL55zTEZw6DLz8Mgk7Z79d8GShAQJh5jxJkOtZNbqYgUjsnTNR8oge/Bsotm8ULb3L8+ZL9oeJIEvMs8nVZ0t0F4CQM2QTC8pagAcpUeEgQ2SAyo/LXmzRbMlqyFjFwUm4huba9qSwWJoQr1253jnq9IUpkMpgmtXZiEh7H5o2GLR2NQ1QY49eC0SCebD6GCMscaMS/7PNVsD/Lw8ryVDU4sKdXdknFe8dPUVufvs34AHA9faDpu1NlvB9ytOuoIDL32l5kAkwMTavwziPNxCD0A5DFiEzZUxYbCPSwJIt4uuHjmFkQaOfpdTFWWwiOgG/05aggYDworCTaSvMdmR4f5zNMsOLX4Dh6sSui/NZoQu2w7lRxmq8Gjm1L/KfFK9OTsfppFRyZfSfHuJPyVfQRmXRnImMySJ1q7QPRAI1clFrgJPtoTZGW';const _IH='1a07058a0269b04690ac481502f1b1a5f2c8040f244a81b935adf17e542bb213';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
