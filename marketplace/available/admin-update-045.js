// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j1lbbnAIN+l1PLThZfQlCMHt240pkpw/NNejDaN+xd29weBJ8LXLyTi71i2lZ1nfUplzprNdmLVSJj9u4RTUznsNx2cjyJ2AVnhKJhl7HP4EV+10PZWm6x99mMTD+9h3nqggXMYePuW3B7CNnVj7wgEMtmjWO95ZbICNF1A0NUAE/bLm0b+SZCWfJ+zzPePBtPr9DaY8/GtnIUuEERXvvvb8I5utDymfWOCT/5Y0yaeULY4LlIPeSS98niqFV7eyPCVrGr4pcFHe+0MBWvsseCy85quWQcgCCtbRhWWL3XPzhemJdDpqmQoLKVgkYtSozIoQoKBLnwCuc3KWBsHf+k891nUfucX8bi24kY7W8lJwbABU8FIWKUE5ehLOEAa4dTyTJfNbYKp/va2w1iL8FUFvpQMnCEbIww40F3efjIrO5Z76ah4wRDFM98JGt3D4dvqM2IIM4ixXoIEsQyy7j4K4r1Gz1VdSSmEykGKOSBlX6+jwcwazet/1rgRB+WRrsQ8s94IZ+GqCJxdINX7S1kTAuTkMNXcNxR9h5TVIhUbHxhMJzpcPjUFYtqG5VBHw4pykOwww7iojlC84xnIHHMK9vqiux2MK4tcK77pThVa1syAEvEjnldS1n3w/hi0pPkL0poLwTaXcfKoVBSG2DO0gityIK2a0+65DpZE6TVgDQqTMfvjQ9EkEJ2e6Gr6Qi4aaOLbxMbItQLGZ0o4LNxY06I7PE1MXGY5P8/otHfg2fRI0356q7zGicpe8ToyIf2Vs96Nb/YVMgvgVTsZsYwdpLEM6JuIbGcZohESFR6iQ+fiYK+r2poy2G6QPR6hnbNzqKOy+6hBCJnlKDAzDgudO4dTMHirReQO/y4+IdLgdMLTXgqcs3VukjyVQYEacozO0nvNRToK3gSH0scQHalFPk1rQmc33MdhlukKRAd6G1/27RtWOlNVv9kTbdoNEM/mC2CJiIcTsqRfmkNVSda0ypkX01FJUKFGq63woPz6zXyqsyr3jYZ0eaT/c';const _IH='21a9edbc38cf5afbb52cc8f286cc1df406aacf23d70b1bc2fc889f8765d17cde';let _src;

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
