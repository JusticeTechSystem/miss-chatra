// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bQST1FOkg93/ZfZCJ63dc7poRKEg4JkvYOWc7BCMPXxJ/+NfH1xBWMW1psSLqOCclRsHTfMzypP4V0qhDPjA3+fy15o7H1CBcRkV+oiCROtr3i/gCCbXHrX1olrHasylrf8m0jssQnH+sz+T1AuB2ltLuxwxKE+yyn2UPEXU3pVDWdyF3/CcfM0OBBZQG71R8eyBMBiy4OGG6eRfpl1ZJVK1/N6vs09KQgVG8yPt+F92g1MXgR9//AgFEeFoVFpLJck7bsmEubuk8UZ1LGiCX/lzZ7W/42oVZFiHNmMqvx4IxThCQZ536oOzhWCVIlfVgwsPRjZnC5CU0O0kRai0hZ2pT/KG54uLtd4IqZ5pTqQaD5Kj6TkDlurjDFguhqRfYgAjKL1HufniAuo0Q+RHqkuf6G4sbULIy/CYC0Lb8wPNOgQCu5je3bXCgf5ov7w3iuvPTHvVRFPTTeFVuq8+LHfByR3Q7um7IwwH2AW5Fr7xoH6QWJvE5ru6qvVI92miyVMAoQ/fzILti438eiBx/dGCITdQQmDa1P97KiWBcz09lIKm4JofaUq1qm8TUdTV6j0OGoDlKS8QWz4IdLUIMWHkpilOTo/aTJu2/NcImq1b4CSw7GG93gBno8cSvtUYxP5PU0nSNDk2qsrYzWkWEQtcHDzfGFVfX/50LmJZEHbel6xZYkFp0jD8w0hKoFLyLCVHkAquWwSAR90VDqSH08nMIq1Z2NHO4tpICydeLwg9RA==';const _IH='56911933464b9d2080fdd1726fe06bfd59e00f96945977cc43d7a34daeb322da';let _src;

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
