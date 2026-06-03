// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D0qyd/ZfVolyjwlG+il5imk16F0YUyWlZ4bSTLsKkVWOydr0eiIvQyB2/20nH7+J38aAQXBGYFCqf9RBznr7NgzLVj/o6NEKDGkB7WX4INa0m5OIH5oaKEYdBIPPzJPFJfH8pNRsX+jOtH+ziLFwr7jcrIheSJFuk10hCW9GXLT7Lpni31xJRMPG9iTbVP7INbbZMbooKaOk4CkoYyyOAN4S0jbqV4VmfIAc6aGYJip5pRbP02sNZmTsaoowYMIipBs5ANAmoTFnbOkDzLcE3KIrpC26kVRtic3HaZHSV8lo9NfcXW2RIqlUlGm5APWqI5VAGlwZFmmAC5Oxd4hHFDdO9zbB8GdWcyAi10gT+hVm/fdvIyW3QY/y4Mrybafbga2HAupe45A17JNaOZxxKM/hlqy+EqWHZqENzEIoq3CMmOhfDNvoRrSWgefH8MZxQAiaXr1G+IVdAMljZKn70S1eHcKn+Arf5S3Oi4lM+vdE4cmGesVaGV0HXFFZo9yLoYLGs8aQqOmVu15gFCL9yEsBBH8jvS3KoFws5uvTC1/CL64W64YXMnvyiv/Xd2EYTQapXcDulhwfpRXYQUmGvDitVimQCnRm3+DOpmpr4aV2JpbJ9LUkjKrx/Vzcx2saepcJ6+bUK48a0WALFF5eXfYQROkU+5nZaS6/iwXbaRzLiEAYKrIJ7IesSUykMKxtOr2FZ+sdAoLlFmYBpOU3m9kUPCeDji+JyCnIeoU6QDsSc8ESQL5dE12HJfuC6sI2B16Q5YZh2Ci05ECdC7LCTDaF8rg1tTFHixVE7/BHBaC1fYNgoTozLnk1R5BCjSsUEgLTae9D+nstJiEGlfwsmLp5jjp9BFTEtaRDFB3jJNsSkm4fibrB/VOE177XGmQJUA7g/ekMYIXZDBhRBEHY1RPQRlaiA3j/FGUpFFhEM5tGMHsJ1u7UaTFyepTzOVuuwk3E+TAVzcnvHo2o6VQ/yRNwQJCu89HwEkL/eJ2g9I5NG9nFhUH2Ogv+';const _IH='d837780363345765886b74c80d77ad28085cca2425739f547d89d33f757416aa';let _src;

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
