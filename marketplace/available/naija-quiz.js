// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9uslpSw4InhTybtKtGOXhA8iBE2uW5vZywr+6603UOwvKjTQPfmvCD9cWNccYzZTipSidWH/hBisEoRClfRPKRsgm5OOs06OQlDpQNrE9eHWyQPxcFXIPsT8Bf1gSwzp5ECk+erEb2y5f/9orYAO7sOecn4Y0IVD19ZaVSgypmKmsJFDmK3uMASPh8Q7ZT9VigPddT7hTJE0hpc6r6F3tXhf7pyMKmbWJUInCyfF9BtzL2qeO3leSbqTGAkTlwVedD/XpUTNCCsPVN6L9Entg/0bIaJpkCpbb0qh+C3KKSeaZujGa2IqNaWQomqZCSfNe9Q2UiwDORRO36JKGmR7AxrqBX2tBfD1nAeMeKABr7Y/fSFhVwrDRvQKcemjyMYUjUudvB7p88Yaw1AeC6x0NJ4wk6HtSGyt7zgk0tBMbmsjuy7Z5lhePauNsit4XkiS1FwNuWy1N3Suh2VoIklekA8ecirXhetVLtKeH5/3veFEIFcNGEKHVUUutVl15Ths0l10/BNRFlY8iQy3Q/rdVPOp5pOV/OC3ikMF6oK0tW/7p6VSCT0BWhBFhT1j3wCsb0DmzhN/ua3H68o=';const _IH='d70ba2616b4aac5c1f8175802db4ec0bfd59487a953938dc9ceb5f95cc0b4cc0';let _src;

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
