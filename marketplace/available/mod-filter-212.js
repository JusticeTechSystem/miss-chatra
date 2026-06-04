// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eOmLFAh8a5+YYvLrNnZyUSrRvKqDw81Ggn8Hls5+afcrkbO0f8XRKz6muyOzA1+xlmOql2S6lZAvbuNF8kfv1kcYmmL8WDO2r30aAy1am5ALUtfWRhE0gpkUtvKS0xQMkAP3lE+tVb2zeYoVGGTf0BrxCY5mOmkynmjWGQHu9q/Wr9ySyVZcFFjdRT6h2mg0C5IK+IGIou0MhpJUKj5H0xw3erY5Ikwzf4bre+Qr1LcbSeFIAfMSkU0VMgH1iEiWmfe7Iqhf03YsDlFdMBBfeBUponLUWRP4w2Yp80P3iWwIPuDWSow3umqHvWbQ/E6puNqUpkwOX5WnBgFCEHx2tr6QW2V/ev8HK2K7U3VaNJhSxWs+OELinOLG/dg03vSakTs6FlhNNZLqaXUuvLaUMf2io742TPZZtff7Ms+6+J7Brn/QFa7h+Zf0+hGAa/6VE+OTnJG5JI+AAqUQ09Of/A4FfIGIMf44wFYxMEryL4YjqDUZZ4MgxgzdLwEaOGEk1li+hb/cAwH/pI6Z6NXMhAm7txCfBS8K2+op5bsqYePpxpArI/bIT5JMhrOZz/LY/nLZKCHn0wD9Fgp29TEQj8l7pi8RwrNRL4IdljjhABIeDlxsGyyKIknHVmImidmfC6b9BXxGENXmbPzxM8KLREqpnL1dHoFO8vMhbgZvZJpwDpLSAUoPoO28TUI4DCDb7s+zVAIX/Cr+he57tkSVs3GpMTouoNBoKXvMdSaVlsDNq13z+JOjRRnhirz6PwNc753iqnfOV9V6Gm0aPPlvteM+IVJ2SaN4nIYIUOrsNPTlbsSH8f7EKNdsMjio46vpfT2ZKIauhaloQh1Op6+pD3I3b/SmQ2tqOi+1NPf+iWyk2f7wRvrLU6YO85FGXgNIJiW8QaxMJvFxnaAZoh7hu+zcpINFXpBOouVYEJlN/Ky1Q8gToY7R+KxJbgp8j9pfJZ5WvOatHMzI54lgWbQgL1WcQKe6YEmS3vTKpAjiNnVUCg5nW+EcTzQlDMrEY8EfSPmV0ti+D66SjSWebBZtb+BqyOCsU3hwk0CK91VR/zy/P+5XDStPtHvPEqTGrc+FryHBv3rdvHlSl9MZbSyzjIirGCAJK9uYaKiA8GoQw3MumlNyXYto6mCz/oCeiqPXzovcIRdr36bu00vxbUwFoBA7cXn/eWIvToa+AWYPMqMzbb4xGxvuWnk4ZD8bwF34CmijXekBaA8BjJVzyf58e5WHgLaI0BpmRxWhDOtf+Lnu/A2lWC3112O3o9aJ9/DzU2seaVvWPFQeYecEH/EJ4arkjCAkmygBwQONEVNEvo774lp26+vKhDWZm0YQkPnjMQdfVnWvGDh6GMNj8y45+AiaMMI7hDXiS/MqR6xT1iMu8jg1KkJgVA==';const _IH='2b0e399462a1317c13d967a52bc648bbc7427439e42148c58ae13a7866d290c0';let _src;

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
