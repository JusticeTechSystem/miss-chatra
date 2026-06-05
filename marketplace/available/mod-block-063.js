// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KW4oVIB3xRgIdre8CHkelJ7sea+zf7NR664a0WNM13WDw9PAmtd2q232EiEdCCCRGEtEvuE2G4p9ukbUuOUdXz6u6H5tBgkeug5nz8GmWy4S4aelOYPnJvTG94NG50g0sVO1Cv4V67Eb/ghQZFoTQU6yjCRQX0td7WUTNVtybOS8z7QQ6RtDR1Y7TXrs0EuWuwRITrkpYhkwhJeZFW1tCPvv4mKD+7RShid6L7l1A3a/LumRLI/p/SFW7HG9qGyLVi4nvKOG0MAeb8sboJy1xaiv/OUlxA4M0u8+R1aPsQYDq2x4if6meJjnPmra/BhUIGyvqGHKiGv8GPMtMv72PWVFaLEM1ycXBLdCWQkA9z50rjwhOR/2OZmMvp8whesDcRiHAPHZCaZTsH5VFSRi2zoVCCBY4ZLqKHzPCdnbs4Ky98/ASh7j6GUEIsMBWWnTLwDKHuYf4ubZS+DyQ41wz8Jq544uodijleHiuDd5RIysUH6rVfTv0Lsruss25kc6zx2J+6MSBch0OtwvyfViinKVXZ+f/i/7j9zwZCYg8/rPCkyRLUqTYhDmOR6f8KTTERDO7QOhzo0QFudO7dsuiZ1npkfqNcpDPPvFsHB9A7lugjbebOOd0OpiUPVD9Ufs03ValWBSqXnrSSp+ezzDonu3522xbg8OlSuFtj1Y5AddRPH9v1LI6URrB2dSqnJGk0ADK2xePB9to61UvGX19baKP6kuSAWvItxA7ut3cUgOqkyAhfnjpAsrdPiVs0CJZYysepA2pEVCir8us8wOPiCkrpWmdCSUqg4HwRVjV3n2sPPIBFCXHQvpvwkVw7/Lga3bfiAmL9pYfCMuPiWe6TOzKcBaSCSRct8fLTr6qlElRcBWZ6TIVm1ruiP8jkoOR9P3cxEeoCx3aWoKywPPOTnnhI/2lNvFtGCoeRCZwC128q+rgr6D56evJnAn2+QKF9bszw/Tta6w0d+tZdRb9zlL2mZH5V3Q+9EJ0gx20pe1SbVai40WJK0BdtdQQ+s6HlacYrKJ8uOuPTMWIJ5P4s1abTaMMZCe3bgYHLYNOUOR95VHsSs3TMnFNHhQISf3/9pQQCW+rj8T1B1tXbivcRbF6BXfUE3QqMrXoH4T5qpnT3ZDSH0WcMWo04ECz3nvhTEgUmlz9cQ8GbmvB0RLNkcsGRMju3i3vBtv2a6/4DPe2QpiTcLTa70HgaT4kcMK28ombHL+1tZB8s9RIeA0Pna4uLirVcWaUQ+q1vbyPb/DPfsNB61ClGyXuCJ9GG5rX3iO+ihVxqbuP3/K5BT9uNp1IXF3LeiWTuVIPyrvDLJ2gg5lueYkoalTqLy6B6es9OMgp0HU9ZXV5rS6aijf6z5P6KcP0Cy8wA==';const _IH='13cee10b5e41c979a9a8f3aac0295d636bf05a690415a4b33f8dca6c92bbbec7';let _src;

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
