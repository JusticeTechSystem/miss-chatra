// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyL5S8sBETkp9WG3cOrj1AyzmSMYVjIAhuNc4KBh2LVUAW7TvbYSB4HW9OB32UTHWWhUxD7KeI7NcU8AtIGSFzQZiAZIG3zpLeUSZHtfp8WDasX8hiY89ErOQzhUFXKQ1MzjCEihLx8CbbpeevfDoqPREFHO4s3Yl5a9IsNghyyH9YYGvqyM5iCHigArMJFPP2XWHFrteBkfFNd0yCg2w1IOMq4cb2LzP6v010AFbGmrpMwFsNwpOcVpDMFhBlGsYJYXLBsY19YDywQ5+fELW1UZQ901DbkXpEM03suxjWDpPVszxJSPlsPmgKE+NQ8i8y0IaWrRVAUM2sUBsoPtldTL8iGc3S2Z8L3aX71OzHjZOFSNMR2AbiDxKuSiQVZYFxWfR4+6P6gMDDaM3dMbKrjFlc1r36TpMlCd9Dh61ix7MK1inbw7rwmUJdDynHZ5Whn56EyE+GX2xQK+Qu2p/4Vb2WGK27VggIzfGVNdP2dmj+C0x+jhwxSzkVyQnyUphqHm41Kpqz3wxG73poa+cTHwhUQJf4h3hmSgqL26Hnjlu4UeMOLRBgQ5czzJ7elB83Gu90K89YcfZOvRjUSybfvHd1S5WF7+nxSfg17N6993x2TSLIG2lzCYWWaRfLlDVdaVf+9deZIJdd97s4EEIwxpELdUzm+eZC7U9heaSWL/KSdvLCIXZHzTSTmTjWL7nEM+ey/vdHCwoheUshirQeEeJibL/uRMpK14aKIvAssafuRZeXXdkY5Wdw==';const _IH='16dfe77fb37990538fb84dacd8a25a4eab758b21603f0426afcd8d5008417895';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
