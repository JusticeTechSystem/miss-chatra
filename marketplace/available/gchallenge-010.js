// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pGWj0Vl57AxsmcV/0/LEEGrrmZUMKeFTkaegQZz77lXcBasLHOpkFJClYel+yIqrx7T4h3mCushsZpVKruviS0hBUVSP+ttyVXbEbjXqhLSFe72AJ5mURDvY9/D+ksrooHGfAs2EuujVC/9vQ4lSBRTawfnGQl4DfS1pSvqIeiM5+JGsKDaDuyeTK94yzuvS7pewGpmWvEaZl0EiZ3ui2uDkl5e6w6TR1TuQTNOPC80Qfn2NZJ+dHUXSvzSN5g9a1BAUViwDPivs4HGY7SQp9eW2NPvRdHonKmjsypSXGBOq1h30XtN1yIAeagEKMtMleQ6x3DwNWu5J44p1jXg4yovVbIIKjCIQHznHhJcr7oFflK5yQPiXPRtvUZdGwTWQVOoUA7R0XR6m6q9RLCIXoaQdLHzrcu2Bni2/nq5eovrtpyW8KKeiCLYNK/UZAilUSuoMp0Ghx+7o8cmRisMCFegHu5OQAY5Ct+sPbAiyjbtJKxcuFznXqaxDfA8Tku0ZcNPqKbpwX0HM0aUV0GcofYN53sm6hYg/AvBbILl1efsEM5rnLElFFs5XZn9sd16QLxLF6wX5uJUpC5PjNZzg/GLOG69mnt3HEGUMVIUwK0kIFwPfC7ouLBFmSTOXAermT7s=';const _IH='607d2e4a2c19cefe8e3caafd928c9af0c47662233a163c9e311c80ba89f7ea00';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
