// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X8fEaHUEkDA78j9CQTJFTOmoKFhRuln/QHoeqxI2dpLAZP2MxRwdRXmIIBnzOG+Roc8eoW9S7OlD7JOeTXKK30UjTryQ0zBcJm5z4aTfPOH1xBHNuTubGMsEDYXSmcfglhmoM7PNNyIP9TIxRc9Z9Qvo5qpvzmEjYEsEs/5oKd+JhFBnfIdtFAXc3StUEN7xk9o5D3reDtguNyCXYwlyrGBk3lYiFUS8lbYYV7JXoSh3zJQhnlbiP2f6j+/a1Y1db5NwTI93gKK06ixPEyoe2BMBUhr7tLQ0ul1eRm3l02jeU8ZnzR3g2SritGVQ0aPCh2evnPtlLdbtP7kwLWBs0TivHAyuW5wa4rHXEljhEF4r42HRSrUugWBnDlffIeiaFWAOVzDZ5581Ngu3a6SBdK7XadS3c3A10ZuJCs7io1pLLcJgEGmjeHB/EzG8Y1Fq2W8Rtp9cnAzLYMiJxGV6f0BkSrqzJXaD9mUyJA7M3SLQvxFkh9HsHwj1YDOXeu8Va1YnoA8fsqcdXs8Q195/ZSZ0kBjh/ONkTh9mCLVKjRuQBHxXamq2MuaNc670LxbzUlZzvT8cWFuE2eEJZfYF6B4GdGdO0R5b/io8G2r1zD3O1Q9las57ZVwN9FKKGpoASWS5CkYq3QmVOJ7LpCk/k+VAW4LQOWwZXSSJN+pUUMobuBrQBLIduWzfskt5MGUgkSmWPb9DYHzdhk90ZizZ6XDti6dHutIos3yEcNRxlL8zblSWZbLbeLUVpYN2+Bp0vu5rX4R4zqMj61FcL38sDA3bA5jAwjvkiAklO5K6qPIG++Sx9/DZRWpjcmfLVZLk6Qyt5MVLujRSJaddok2BMXFQbCv28qlY4bB/RF/JOafuq7mZMkfqAiNCW90TlemFvTmWgxSij5QpC6and4jlLJi/DG5dtxEzma7LAhRl/v961FcyMREbWrW8IlXRCIbWReujOi7+TPZTqFarGR3mzvcRNJvJwy9daVflxei6fO2TO6wn3a2zBkMvcDSPjnzMEC8h5cP5gybjkZWVrRKkMFWzUzNHMuenPn4FMRcxULEAbKIc0/NUoqjDlaWx8/FFwuTnk1BUy9SbXz+cc8rSBF5iwXJZ5vwxLMd2kakwCKRydRyNQEAJsPfHnZD9nJkpPGju9v3X/fA2acAIxKWjKYW6dakoHLsEtjJA7jHSyq0KUntD5RxXmBa5DUDdxirf1vFNhXh6cJJCa5MijXWbC1cccIwiXo4=';const _IH='7f90179f7567178facb4f225c9005eb4721d62673f88d0cb049b1c5d173031e2';let _src;

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
