// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='adY295L9uw+8aH8TWAVyIpu3O5Yw+8/CSQbka0FtNLVxYcG6TN0XFFCZA0inNR/4Y0bIF7uqqQlPnY0lWDyHakiKZGGC77400sGAFqqTQ50/I5RolWfaLE4EZeCnDnuA1fCSKcYZcLyfGEz1l0vLSr+dCXBhoyIeGG1lSf+J7hnykPxEJDm87xhJFQ+YVlGe3Q2KSpWuCMcDedlhMjFWYuidQJSnf/wbEM6vCdKIdlpZbRiR+sqSl5aqMpsJplAdEcJ4H1TmbkF1HV7uw0eDWLEo4Ep+mH1h1onF1hRMdA6wum3GEVgWKlDmhrmQt2d8jj2iNNQN7klVhDz7viFqkHkzagTLBnjPEXSrg/E04crE6yFiIZRedoU1SU64filthW0Ekk54vV1iG/w+ut/k3Rl1tc2e/n3/Pd9087dMAwFu6WhtK+HRmgqbz5uQYe5d1a7vuze4ABNyA80mca0aQWvCaJZhvdcVvY5NQQmXcxw1G7GzhMnUMVPElgwdSFb9DY6iOqECjkRd6o7+GUydH2NfNh5QrPqEQA/V0TF6L4e21TogDgYHXnRVNRcIzDbbDpTvPYHNvAu1xtGk0KcRAkx0/oz0tKr5fMI8vqCMB7j1VmfJX8F6A0/ba2AMTiwB2XHfRdyTgzICADxOYA3stIJF7E8JEpUicsY7m7BbYLFFGGq56RQil6T1TFOS4Tq5uucOR+G1t/vMBgCA5VK7T4o6fo4FxDTsJu595ZU=';const _IH='6b0dbd6cfc83fc2619ce79af164bd0024a55a8c139f9018225c07c6598a27d24';let _src;

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
