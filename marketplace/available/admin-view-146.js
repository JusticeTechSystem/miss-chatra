// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AG5cktF5uiJdFXwHDeSoHjAjzMJBf7REQyeu3fqfSV93w/EqJYSzkSLby0Ob2z7FutKH1Vwya1Z3oTWCDPuk7OWEV56n6B5C/PDBzEncwHRKyHHCqa9VAchbs030M2uJqai1lDjZCdzeYP2T22DmnHuNDZKPkvnsXwX5ksZ9KD4XqF1aQs+RM537+6t7KHe/4KahkigqMVq6NT10TLyprXHEIQ6kwxHJVaMvMewhGezl39WGoeoROXh0igCRM8pSJ1QzeNb5JaRRpftLrJVID83i41jmW4va+xsRSqeBcngwrO4BeGfY2KrNQ/b+BFHnrJNBpXFG5KaT2XfeSNSMWkRreimmgY1T+wrfq5tIqVNI7xEs0rHuCrXl22JqshqImpt2dTBaPwTIHDMZYDllW7Cnl66ArydDJHnXMQ0Mgxehg1z0+Lx10m5dIlQW+56xWIrrmMe4iGg2mECePigARHVRuwK++VzVEfNfmYlpzBZEnWh0SP9erJLyi449VsFFq0y62u0or6QgJPEKeC7inAMwuG70PlxZG1+iELqhGz3hwb0WY4Ny/lSm8wx5NaEO9fFJVujhtpMcVWIJaJ9ZSRWHtCR1yJ56ZQ7Z5N9pmUmysruoo4TZa4PS5NIpcX7oxcz19AEmkoD+s1TzZ+PyljFWISV+PHibjGOzLO92glVGrDIDqVrxqm8TE1XJ64/6OlSwnT5AvWTrmsMjYrRieqRJ83Emg1dVyKprf8d+fi6bx/D/FHTqsAjvxG+3DDF1QQolRcOfsEu/VvzkWcHmtJQ13WRnfwd2bUMTK1Axg+5U/9L/28CGF9xA/YeneP9BcjWJ0al+IEHTcEkCqX7tICB4ABhF3RaGGxGN4zKlTio7NuDFuezNN13X9FTUtqOMAiDSZiq3sEnz9Bw6DgSPzOosj4GIj9prEwi3hQ4L1QJaZ0GziXpd3u0n06LREnINlHKkzmYVZFPTEPsBvDQP0WaN0rKdNrx08NwS09xI6Y49r6U=';const _IH='238fe62a0ac84d06a48b7904471a40ab289590c73f23037cc37fbc526b503806';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
