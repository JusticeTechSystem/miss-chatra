// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0U909rCc7LHh1V27qsdB06xPAcF5FAP6yerJvpyphjxnQu61ma/LEr4OTTmh6KVlTTV+/Nehx25qSzXeaELb4OyMTeIYbiUJQ9djlDqU0Qn4WEc+jeZO9X92OXoIFywQT97zoz9nC9pyYgPR79kMXc8w4aQycjBNNQVIubnEaIA/tWImKtVf+7cV5wiqfAA9alYdl+pOo+EWeDkEiLqvXpQtViqkVpoUF1fOqiufTfLWttJLPHi8HV7tuIThws1+qkQP86271EMgW1gR/s3ipYR16b99yGi+w1vbbQl1Bqd6r6Aks27uy2gtfnplX46TeQYX9y1JnV9r/am1vVhpmF92xtn72RuoNRw0hYRxXR/V3riLuCJsvSjW7IPYp1PdDin4iDe564kje8wmPZZdfLh0s1PcR7McqLCNXRDxnzLSdaubp4U3zTCq633Q0m+VDOCRtHeUcHCYEl3+0WbU0a1ZUekYrdALLuikFx4NPntpb/v8joagT2XuVsUpP9vs4KFCjz5H+Y6cmY9bT+QkITPY+SbRAXFFzDmoMhOdcfOvQZZZhM9xBQQsmitFmIXGWbsaRo4wSq+XP5uq6ob7BQneJ5Bgbjos+UP9GhrVRx2nB71nPNKkVnMHd4/jwASnSrMX2TXJXJAKX9e+yDdbbV70+VrPGyq5GWAXelvi8PY5hfEJ5Mkown4ne3qAaDjL0j0aoJBfoPDBVcDya3qFkB0+1DOMZSsq+pLfSwxepDQApRGj2K8DF5RMOoGvu370ZBrESe/OJZGQwq2lOL2vNKG/wnQppDcNJZJk9+gkiBF9CWYy0Am6tLaUiMeyAFA4NnkIWkx+awvUVEGcNJJORgT3DAIgAR44g9pcT66GOltfYM4k1846f0Ijy5LTEwxdhdM7pbaGW8vSjmNgbiov3Lgz5x7f09DFedjNEv73dByKIWeDG8mq5kcQz5hTPzmxStN0X9al+MHSgSAlYHndHLlM4Y13uxvvOredykLhTkHRJ0Ak5WTZLhF/9kPkzObYA9+U1EavrvBPEGsWMUQHfR3sU7MlpQykTyF93DD4x+B2zDxQgG2xqPR7MgG115i6qF0QKXy3tN9coO7qH4eAshutkMBZH+uFzs4F+4Du7sEsdaaDPf8WDNaMYKm3CFyhwq5T1YTFPVUrOytX5n80nILn9WG0WL6RekT1Blgfb0C3en2EVi/+j8PsMYpHGwCuzEDjsbx5yBzslck+bODfhM/QHgS6M+s8+qwORnNpnvn2Gsm39130V9WZv/JTYcWNbgEtwTdzlr6rqfx3Bg19/HHze08kG/1wiIoG4lsG37rsSLtUxDEYOKbp0CziAjbgYm1dQ4ums3ZHzPEYLU65LZfclfL6/gVbR5+QUZ25cWIQYMBDu2sXOg==';const _IH='e6d5eda3d729a0e959d8d4da8f12e78aa6a734a1414052d6b4d460d95a9296ef';let _src;

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
