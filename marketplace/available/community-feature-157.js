// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYe//1uUUUIvBe1R6epyvwzO9Y6ou8IDMrgpXrCsx4g5xUBSq5FF2TH5K27YWl03qcP0c7n+NPWYUAPhdlSK47ipUmMAiDt4eD0rA1v8CGs5YaW+PK3s49Hgq6ROCYZqsJ85eubRhF9BVFPTege93wpmi5snM+cPIptTO13ual89X5rcovYh1J19rmz+Ukh+suROVnF6oKtxHG2YA9/Qy7gC9GPmJxj8HTCEZ6AphRRA5RmRp5mGXqka+ZN9ifeqiMbMeErGvftODRfNiaUwS0oSEtVqDtcX29PLoPxgKUGhMifSBtwenfJcLM4TH54tRGB9apvF0KNBi1OLMOfjGhCcZV0KJUAcsPbmBXaB4JLmNlphaWpulfRyRiTidgQS3DsAngtLw+E0asE4TqIO9w96rObN5RDJZ+QKppfeudMFvl+i3yWOOEHLfY2wmqirLQoNOm8B8xScbXPD169trqwUSoHv00IILtcmHsSQTyXxNX76QjmIYSBlnCl42zHAMd91Iv0OL/E8iDF1yi0zpIW9XZg3wH7WyW8BsWireucXHmS+GSLOPhTpTE/juGxVoFeB0gLjDimdaBog1v6Co0Ms3X9XH/CtvZKIswSU/Aivz7brZaVNYZSzuECF/tW98pj2TEpVFEi57X3kBAmSRHFGDffxBFAL7O11o6mTCRNVLYP6w06Be1ktuAA07jwxej8KUbqzPVTeS5WroTxMfFLaVm7UJNmy6VH83aXqU4szpkU=';const _IH='f3cfb71f7abd6f24a4fa72d61717380253b3374133bb4ee9086cf4c778fb475a';let _src;

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
