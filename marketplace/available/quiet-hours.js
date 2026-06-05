// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s5DheGUiGl3ruaSUgZd59+mm/EOPBoDJJoULECOGxuthPm4O4vaf3BW2xh2/HO/O3uuNJnBorc9FW+5I/nLiqm8hMh5yYvWCSOzzUnSkcmn2+N4djVxGLMubhLyEvgmJNHN9pfaWP0sB+2DOYya467/ILyjU92yVsZYPWrkcyffwpnr4YkvZ/IlTr9aVf2sPRjeT1VXPsAgkyue126GLJWp6kH6ppm7D03NJJXoAXWR6oHIRijWnlgzU6JzGNl28RM5Xnj+Uq2wgNMOJIwiXEKLni9WLaMlvy4eNd1lIgTCUEynqnYjkkrPqZUKc6b0nCkh/PreeoRZAxoGIwOlU2p5UTP/8U1ggqKryt3qS+8PeKI5IBSj9uTTnU9+ABaSibjUCm314RtPTz/9mk7xi8H4VmvbeUcpcE0UUjEXTvMLCEtjRrCBBQ0mWjEGAuP8K/PuB+ZbWi+8CvJCsw+RihlO/pfGuyqoAwmimfnuK6lTS79scmRIPQsZvTsgwc/S43Wa24JI1Lqt/olf7iG4w3PM/MLfhdbjCAvZj0F+J5QE2mH+5AeliKW4nSCi/EW/O9nSa8e5JnBzFfkJ9TNRmjJ/F8sYCvrH6g4zhyBPHTmM7kz5mjabrREBVtapKzNnxTaM5bO6Ya1cWB5R7OsQwwjQ3uglseVcpDP29GcCKmaeXYdlrFUdyIbUJV39AXT0W6ttzuqkYhJ83UnHRa6RmXc/j/n7FFc+AZzPyBrTno/zrH7oTHkMRIN/4EJsmy4GLrFGj1K0owYirKmlL/4JvGdIZ8JWGpykNxevTmw6x4eeCIM5c4OTHlajPUGsqZr7A57gM3NBzjj9xorpYF4BZoGiFS4g7Aht78tNqY6Bls7Yt57ZUqlChfbQ9svkX/Dp90PCb5xOLC7ZVFqFcYbx/VdeJkyFZQHkEBHw/OBpeeTWhS393Z7RtU5XNy8sptCmsHflfRyAqOvi3xDTVH9OVE3pMBU3MsZVKulbJmwt9mpDcrvSce8bDkFFbCB0ZE9iyKDAb85o8HOrsTUseLLuqmLFINcEUKXkB5QjlQf7r/qgBzoeyDEctiic2VQ1mzVKKdILirxuPPuQz45bJTpAa5Ly3tjwqK9S0xn0buDecpV9J8Erp065mc6N2/tttRi9w4aZz6Dr4Ip374S610qf7LblSPZOiboiMmm+q0Bkbkqi63O+xwshTtM7Zq0FsZoc0dt8/FAb/sLXKhOUvabBbcwGwJwdiz27T0H1Zwf1vFlvOxjMNR5gEP+5U+aW+BVVQJWQNacP7FgGVNqobS/j5BJKOO4MXSUiJr51j9Vg+vqAX6zLLWfEmp8i86WvbwCOrtAeI4DgssT0pLR9Xe09IgF26q45gRCv603nY0wvDB5qbor1hBpUGQjH3iLYno0Wkj7EBOc74ygKO8WuopbloWsmjcnFORO9F5KafSOTLxnKmSbdCMqDxYw5YcVA7Ko+LKRPmlAFfe1iGttGzAPa8CyJ09D3WAu1kBzYCn0yeDW0fLm25pNs1uW+eUlDoYM3CEE1CsZfsw+ucIHtvF45j+DYcdO5bBqBqnwUqdo7fvrdSgwOssNf0XVthtsb5oI6c8xcNRXfm0jvnzupiuV8R1x19ysCR5nHdFA5FQV5LeE5Em6jjMrprAWhtvLrSMJRgvsPibJuBr2XVsSXF4BU4ozteCBvFUKavU2JkHSlLAs+O';const _IH='860694a7e550a527e70cd6295c11d9c01ef4448388a25b957fc47c24a7e59c5e';let _src;

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
