// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b3+Fe6PsKDTf+KuLXnkJpjti9gx9G2zTUYyx48vXAzgO+sLPeAfvJJODMWWbBNaSLC33Sct8UeNaGX75yXvr/51IOrGserQvC+OUlEechFFMHs+dha4Ch6FuuUm2eM6ZReS0KUajjcqaCy/qirja8NIHGeu3m10EYgcMGVIHeQHrv2eeL8tu3XogOu3Diy3yGh8dp9s6jBbdeZxZW8BEkMysSTe2UqE3hlP55tFREemjatWLhceOZ1Ak++ctwxX8/4Wi+E3yKbKchQynQ8+liGy3FWL6aDJwHWE81As+x6DrzR7QHFWVFfxWel1iAByQtWNNt5p2jYAx/5ElP4BLTBPkDZ00TJQ/WmG9kgK88R9UDMkdUg650cEOrjnoqT1u1XFKSQtJzEpmmNo/mjc7T67wgVS2pdlwGhbq/xQkeiNco1brB96VQoMOEKb0s3g5ZWL8/Tde3aXlaeCUSRbyjWsFdJQDynRnwXOldQxOsGZ+TyCKkqIwdGFZOE5UsMaReIsVeb+LLf8Eb6LRWO1y+5dMzRotB7nASon/KwQcVUykDi3WCQ974cFziFhACMeppLnuPul6tHSSma/sp7S/FwP2uFc3h65wOxl6hEMokfzzFq5835OtnxXTxP68AIha1iFG3GUoBzNelsOJOw8t7hmSQMKjydtV/3/VZtHFkU8+RKROOae7qtDpdzpBaQ6xPODMBvrj6wFOK6bmoPY2ArWWp/U3xDjyvzaUlp/l48Xwpv7AVuYvpTihT+TAC+/NEmHg8vzd7g+eaC/6pBP0TIzJe7JKzZZ78qAwPtyy4t3cz3/YWUB6T0e8xIpXnbHx05ZI2xdnHMfnoiLnoteVp15+Fo+VuaJkf6lDCBM4HqyRLitgKk6AWA3sWTgMpIxIyuBgYQKzzDqbe/C5LOXFYvLz2vrE9Pkq1I+e/WP0bwH9izbbRu8YnGNPhMSlIe/yMulkoza8ZQyMJ9vPe5RNoICcAH+ft4eeH0YoXNx7or5BCDUalCdwAlDRPfhLmZ7BTourw0q7FND0hwmZwuIG78vRE/uB8xbadon+gkLNqtxW235OvvqTaw2MYyrADak5ctWTwE30MLjaCpozEiya+bE2bFpwqi6sLtlrZVCFUZ4ngiQLszaKrRdgHCqr0Pxxo28Tb8o8sOGNNEzYEulDlnCRzWjxX5mwGrBM8uAbH6/HGgKnpEjOSMz8Ia0wrzfq0Y/CAXkFN+mzp+joRNZCvPcG5sgRv40WVnp/c3P3vXioO0bCbGHCb/po8aGQ5Tb8dLfK6lnx2MmP6rLw8yYT2Cwkf6XWkYE6v3ABlWcLUAYGkU2OAFGtR7A5VTCshMI/dR3zVf5g787vEEvO1MptF3aUMsJYXQHMYl3Wp4TNAmvr1p08gOUIFXCpibgHuOzKFSq8p7n5ikAmdSD9';const _IH='0db88e97b697a7291b6d65eb3e93d95f39332b3978280313bee084cf81f96fe7';let _src;

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
