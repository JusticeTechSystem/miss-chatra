// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+VTqfPbV+jvDuZ0y+AYluHXwoXyFlRT15U6dHa8Jmqao8BUrT9LLx2vdkje8Chg5VAAZOVkGeDBvHpJRHKlcDfDka77edq6gU7EdjlYTYyf8sLH01v7H/v7mnfE5FQi8Zqb4mNAzViB52dmSSuTDgDTVGufyAcgpCRpK8+N4Y5h7d7e7QNlPxv4PPoEVgkDM49Idizf0XtnTWf4LDm8MNrm5nOL1Mtam/67Gi3b+Rdn0++IA1VtlN7VwUMZjMasKk7NkVuhOdqTHf8M4Tv5fC86+4hM1UH+O3nfT8v46TDc6KzwMyG2XXOX2VC87HHOgLmAGOffJeJjB3EnZO8oWS7bWhmx/gEsp2al5gKokeeIdOMZakdUyppeYmOVIPCo16KJyTgOO9v7/WerjD5N0fmhXsuXwt7iS4ImMaKz7A/AYxAXwnGLp2zqqbcZ/2uSyWSi7EAs0W7mStpRBlOH2zLcJydiUtAC5hzZCHRPEMKAFYwNvAzTVXdHKH0K7pnTqA7Ftb4LLtFxxvFKi0l4q0OumsnQ6oVDN0lFwdI4Npt1eLbgRAUyqn8BDd2jrxz0JOD41KteECqw7fE9vAH/6ERJj7J44sgZcA/bwTYQp3h/kCgDRpnwqjh/ZcljCYOcK+s6Zt1dESwoH1gltY4GLD3R4sMzaIkDxcxWzNloSm2EPiTIOlgYaDiCijybQEjTh3Hn896orRebWBSTbgHxgQpM/5cctdPZ4klcnJB2ABjJxADl3oZA/tDPNcSe/bc1Q5vanoVN7aqzDiTWmhRtER3lQpNNKdWW814r4WOkXt7jzn2eQElaA2D2psh9hLVSNoVvGt4c35mjS15bgJZziIBMdBNzT2AycI+FZ8Z64omKXsU4kLcRw2S5i71i1HIXjLR4WxOmKfv2LZ2aQMwa+nEL1FoHcxpp9FYnHyXO2rj7WiS+74qS7TWHbV0R9vzoIgiz4VxXgdYNMefW8GXEou2I5C5PyzgRDNaaQdUmdtl1tbvrk9nsY4noUIYY/DqOI2YVHAtm1Zj13OpKGHjYBa95CMFuZ6DfMwMAgLfRe3FDpp2JKCjxYl5nKSU48wB9Er6ivZSFokTXSxMtYPAFdYd3/6aFpO8az0nrCrwPEMK1wNChqvK9lx5y37rB/fVV3dctBAzMuorTMQbzlz3yzrNiKMOMNXLut8O0S0gCFqpFW1FS8N12DijsLI2ML9+bis6SC';const _IH='ff464307ae0e38563e62ece83c93b83a3aa7345f61381a53b8560c268f27faba';let _src;

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
