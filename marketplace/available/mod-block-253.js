// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZEyUZ+m3QQqg3JNLWV9gX2mh8u8LYWbbzkk68rd9xtCI0ZhLXSUwyQWG2EOmYXOZHMYJwMcvgmSI9BWMChpqvrKNCvPA1BeEEju/rMR7JrljcXFjphxAn2snaE9Fw/CLapWwUUlM0WkbvJtP9kCbEKETY0HJV8+c4l9FOmkOx3AJb+Ye2vDjaxN0STPfeq+6c50EB3CaPesetYOTVVGLCe7eP7WYEYiR3DCVSf+7HQjGpZaiBEtlYqa6GK35XYmlIgaD2TeesiCt79JOX3rVFksjX9+Ln0IJyI5jvi4AAXY0jYIkNbf2lQ6/jd9s8xd4sgmKhNk4m17UWCnDKTGcTHoZhmGrH5bzLy1besxNRBWZ2cj2aRojTD5sMgPeKwPc9yMUJ+5tUxtja1cnFey9MS9ilVV2Cxwa55HO0nN8kWpkug5lsMczoX4+Bze6J2IzwN937mxTv4rA8/8982+I9giKylLSlrgbCaZE4K0nR9BgqmsxHrEzAwa/+2o+BFwWqwZVjz2+ArWaN7ytr3p3Cnn4PSeYhRIwX9LOkB28C45tEWyNQ0/586FabFSeRKVn6H1DBV9ifvkMWX08K1RPdNWnvNe6R7FXTkqKj67ATq5s8z7Eze1hPcBSmbRUu4EmKi1oCZT1SdWYc5k6YfS43QVxmZes54RcZM0lDqYvZfCRevekmYpfrVJObz2/hFqA8ZISuycO4CGAsm7FyeSzhMrlJ/0ziVN77zUgiss5shYXuzMFJPtmhwlPW0ZXGfvzmI9fkoZ52sguobtq1miidh0NL1kSloiHu/FExA2yWeWIRLGM1f6oQQ1w+xPVFyJfHpC7PS/z+dz7C/cpN95S3vh96vE7SplRNpWYh0+GgIkW7s90se4lmuQRk4jCjIMylJTA24RJRLPWFDghB4eR84i+HvSPWM66N7UG8kMdUNP9j8Q+Zg/e4pAD/7uzSsZGc03u8n85qEbN5JeRCFdZ1y7gP+ZUEIFLiqDB45gNU7k4RVYl1q0MPC77HrViTBbD+oph+Sh0dZ3PGSa+8XX+rMkMBP4wKIkc/g5ZspyE2AUI9IJOpSLvrLmNehqlVbs+84hVLMvgcufBrBFvqfbIRIR4BZZhCRhPrlNTbYWzadjxEurdQjFh+ZgOxJqYm3TSOlpGIge1TLSW1qVj9+Yy9LnNx1UoC/qsBSjZzidhicd6KscazwlLPTDy9T54Yc6N3s4y2jZZHaehAmdoLVVjx9HhZIDAbnRIj3qn4I4qa/V12oql5+lk08FaxyPTk2pT4Pw/rKenK+hcRBPBMWWWmT3Wbi+xUHzxR2FsZTrZVq8tOFZZgy1DjWFjAOqSmpuD0oiqfnT222KzcN/7DmywfMMPHlZkcGLC8sTeOjA';const _IH='66993a98cee4755119a3dadb8befd1c470337471abdef2babae5095657331bdb';let _src;

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
