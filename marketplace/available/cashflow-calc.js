// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jyxCa+4uFewo3i0xJ8oN6X1Rt7rePw+MtCNFIn0ha7qbaXaEK4G8N6p4DS613Gbit+cOtIxtB+2UztqPQzCut/NGvAR4ADcdSv17N0g3S/BaK/wxRhS2BTeqAkb2hKkQkBR7F9H+KDPGudR8w5m+pLSF7BJqxZEEoXNDv5acNgXbtALTJnPyDk/inxJ8ranZRrmo94Lfr308zYy39zhRnlwCAqx2Nh3ildDQCyyHp77rLERzr5Ou4s+wVPzAxG0YfNGSMByGMCUqqkr2o9/aFBLCTZ0IVjyftUjDCTVsXB/zn6ZAcwcDzWoNJAC6QqvxNnMoN7GYLn+zma0/99o24mZlUqoGSYTeAshdW0EamZcRBOv7pv3YHMBMH5W1XQUcDAjPixQMojW/8J9IVfu6OpbD15o/PG5eyk/wGSagcxdn/yd/0IA5rOFf1dFtS1hliR5LCxbS+KPXZdyjJrzN/0ByeS81M0v6Ri9M84kVdwn3p9k55gk/615vllR7mrJL0yl9XdQvAoDz/C5llQWSSnowcQkLeo9kGXIh93Csd9/bWDnxYKY1reKgWCtFwdakscs1/VWPRrxqsg63deCs7V8EShtJe/ZIJxzDgGkjdedLohNwrLsRs98YQCVbrUXjzWa73MUS90FWJQmw13jaqO3523DCkohiPITKWauk6vPvvYV9pnbz85rB+UobmBtczcKZddBiD97rNF9NZn0NlYuh5DQ0jwiy+LV0QAD84Mt8dEohYfEQZJVDjJEU870k+JgoVkN6qEUFLm7rdCZ+EnLzdLB4ogOcillnPz7frqfjsmolJa8bUqwthhT+TgYh8bDVOUmUCuhuJBGcJ0viNjsw3diw/G4NiBnqkSbi/MSrrwxaLzHGHCSGJoFDcHiB0EjNtr3NHksuH+XqM8WLK80qmECOwRa28x88YJiSucG65wBcvENlvmRUf3+w/hdN0GxSRMvF/hqW9sragn27YRAHYH79+C6FCmsoTxCCPWuJ/EQHwPjvMk6yfuXoJINY2lg0OaiWzwIGl5lBYapWF0Fc1NofKpc2ALm2Jyg5BHf3DBL6TXYDehKLG4cotHJSNQhFVCVHogc5D3MJUEKC+6am0TOyY3AfOwXu358rPiSjM7VUF2awBo3M68JOoE3bSfWKHveLmvfzt1KBW797FlPRyTUwPtXpP25I+4KoeF/6XtQBjSBMs+tpMz61jut61V5m0gp3P79j+MSoP2nBlQNmDZSbXtlCBohV9+lsGYXNLikI609oLHwN2C2s/7hERGzLPhykGX3+SKrbXKIVezP9+k1yo+ckREoJLlJpR8TnMssNfVNkqAenMQ3YFcIj';const _IH='636fd9a2ed9d4fd640c4cfb57832ab44504ff10e772843f0cf7214e93c7c2f7a';let _src;

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
