// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='005NSkbQ5LCojgvjFkveo5uqX7NUFDimttrAYOZqkBQZ0m7Bj+UJQYwzopD0OSZveGMzpS7jIFY4Ai1yYeHGajTFZESrSc7D+/VpBKWUnRcSLgZQM9ZpfUJdYiX1pbbiR3BnZvlh6AW4ZAjpuBK/0Rjs+9ASfAtzzuYYRaLWdp0G3kZCAZT+uQQBoC93VOUTa7QfKC1ZeXtu35So7/cUoGwm2TawvU9P1Bl2245tzWD9blBpkjJfceDYj0wJUtq1rbIM6jKS6PFMW6G6Dszl7ihfDkC9CZCvC9qkFIfWj83l+BrtJMQl6kKOZkf3Wdu2rPZH/MVRndorpsL5MqjvxDbHsbHqD0JAFUQLbtCqC7Tr2zlJFr0QvmiibIrgyHSEqbIWA/VvcJxibSI9ZxpT4ZXQvEchzOhnoyNy3+SszypMt0Mlt8lj5veYwf2q+3ypEXDfziuX5GEbM+DSPxai1VEYg1mVB6LVnwsUz31P6Y4g/N8TU48ETzp0ZWlq5+VV0yHmyk6IJR7UyhAtCxmqwnx5dk3JB27n2+Jtc6tvR75sCQnLUaSBshuiY/db3nlq9d542eAb9OdvYP0fN+DYgQHFzdp3dbSCp40TuHKF0ciBLcab9vOQ3clc5G0vqYeUdSCfRDPy3/Qmb48ueqVsUHm3lQvbqsIDszntgWo2st5ly2PAl77o1AzBLaddH1HvSFdRNxNEqCVGCkb+I1zk66IIHjQmnMTFdEPw8hJs5pK/FASeBdeV1V9fWJ2RF9Fp+OD2PdOCYut7EfdVID0OKZJolPyDz7fvz/rLSs+rm+9TJqk8DszCxFh0Ze/bX25vqqBm2qd5yksYO2oexmCr77TF+vopLNN7KzR00KxmkiOG1DGcO11uBoaeuS9r7A0ebp2oLNiCNbZdL340phOAwZzYuxAvaNgpuUjZcbSMXlxjbZfQx16rudzv+rzCgsTmG2Z/OCEYtjfQna4H+J8MEYCCpCtt7wRz8KEXt4UnkewMUOBbekvIXGJtibiubz8IQpedWbJhoyrLRfDL7/IP0APyeaLSHZ8DeGlksr0CCA0BfzeHHDMbxOyQRfz8iYxqhRoQMcgHXJ0Ypa/0kBhBOG+U7Yw/gTdnrzaVdV1NY1WO46UYEilVqvPbrtHg7uOUOmabHzwZRYxZkvHvwSchrHgh+euVacrOz8vPpdVHh7tdVzMri9vBK0gbeEgUHsNn4Pf/zihtE8Gpl4cxiavsu+stDGE77KSISnWUSeh0VHAL3LqW+ofuBdLenDUVzP2PfOXaqNHkVsBwy27GALgqYaFkNT+RTh7qUQvgu4NqIbTQL9Y/0HEM6qqvtTTvHPTdsxwVX9spln72Rg==';const _IH='038c5c387e557c2001aa78a747c4146a0037f6462b9318f7616189fc9866b3d1';let _src;

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
