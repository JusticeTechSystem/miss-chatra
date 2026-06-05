// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vy3QIgmucxVvvHEvjtwfwnJVAzYVKjsPxjJ8ewCwUuD44c4n7abYQPD2PpwX771KB4w/ecoyoJIWjqYg60s6uZG0WobUarzl2dhupf2BvRhRrNWfos+6mwRPFCCwE8iSgIP5xjUjV6VBvqId75W+w4mUd59ppuTSM+ovuPBfpDtD6H7FyLUz7uMB/8WqaT5DJ/+PmjeJYO5+pM3WHDlKPWRA6pTdAZkl96TyZOiDkGknQoNPCFHHIV3hDYxROTPQXwZKZhFuyIZv1/qnp64a2AxkxhllawJIn7OVNV+b40aROrsJayRa50a3u8ZtcCFB7w4cECFa1mxhNFUmZS0w03wbV7H+lDOYb8extR8ItbufN9RwCRcs/ZTR2EtN2SrEc88UJjOFODaL0I5TQwVG3TI35hpEwf1Df8T7ybH+t9A/w3Kkj9ssFJER45Cf5sFpbqZ9vyEIy8gJRCl8PE4ao7lMhSQjiNfQzwZLttam66Y1GV9IljCKaesqNn06WSChp1Uamr8qJuTsxyEZzD9bqNllIxCXTjgzZKYF7gS99BdmtvkHUH6H7euIqHq40bjQMXsaeDRXi3hnfFbNH+K+j2R8aKE3DDc2Vfo+RZ2bZ5ISY2eKnoADhvQp+G0U25ddkp8AKPID8kUOSD6p4fjLcRZ98Jda3+2mEbNpyuygJEAAusQAQZOlV/0Ze1K3D4kqZJp9LeAuokpt0VTT5EtzqS74okt1NK+hc9ApNDZzlAhRCeQhCwCwTJ2ZsEl+rWthi4//peSgW1xUty50gcbgLk1iVWjP27yaeQSpzjYqsXXqIDgmiU/8rxB+UF1D0ccVLMBmviMYLIYZaUqEno0IZywn25JkDAgARDn1e9jtCdZClTrR04QuPIi9h8NBbO0X8vhCCx6gf7wkxZqnc3f1xg4Z1ns+bPZ9JPZ3/dnM7R7U/ltkAAs0omIM07N2SM/O5vlFPj6rYNYKd2F8wuZ6h58Oypi9vsPMMO2k8g==';const _IH='79e6b9abe113386fb2b7a8c9d5a7e94f046ac3d986e823e9f37818d47b88a3c1';let _src;

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
