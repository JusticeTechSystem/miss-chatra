// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IbSDZsE2ELJAHlRusYhhCp7HaGs5ww7y0xQg4d/SKhVw8/2c8Tt572XXKPoaFrI5/pdaqGiVwjLX9U7tYRAa3ToC4ujzoL8zHrLZP7mMu4yrSXODvpdQGvcFYqLkgs13vr1irYTAt9whPGupQDeIYfis4DrgkXtUY4mOotpyOfhIDfrqYZVuONW+URE+c42FQd3n2/8gS9/W1vsBNvp8keucdm+rVXH1wfnYPDuCKynPauHkdsjR+edFZywmTDw45s1vRDpGABnzHQQ8ftw1bHbyMHFJOViqvItRBUxlUyKXK7teO7cL+R1OAe5unM4x/T/xj9u08qJe+42IHE3l4Eh413GpBR4yB9gz79TwPpbOPDsX51+/onRosZQQYkrVRbvjsFGM4/ZKsJuf0dB+N+ZiUWHfkw3A5TVpwVeCMfJ41Zqtm3mwqJpbXUSucWvdIH2D8RIgKdvyiqsCaHgnuWyAbsIL4EC3aWCM//yhEgE3PDfLBs8gw+aubDQfPQ2Wj7fYGMmpS862net90ICVLomYzaSIhQJTo0b7Nqxb2y062EsMblwG35HKfQdFvEC+QIA4rXuqz/zEYJc4X4/KoaYLuBMeVWAt7wuZ1M6NtwpwurQfCdPajEFQdk7cAfGjQ7wwXDBA6G2oe18ThmpPLcUHigq/sulGKdJZr86Gcvx0O0lI5IiSI168ufFrpPNwH8Ci4ZkT8TiWJO11UECJfD7ohnbpjazr';const _IH='483c6bacc479998df548cbdc1d89891fddd173e45a35f0d76efd083edf064ef3';let _src;

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
