// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQykQm8V1bnvzQI+Dch1CwNKtnLyI/+6pkKch0+pvKnwlorhHGVL2Sy8xUg17fcGHWad4acNq91g7ep/XW2SgjMug63LJbsMOkhUnk9r9qwaL398xvBOItS6AoKDnzsMLg1EGpwSMbMcIEdCaAfmsKbVyLbSHCLgiVgbO2LTccrrqdatW0O4nv3tj8bXsEVgrBZnjR39V+/r9Ewxfjqt9etpgMLDrq8jfSqpz0yOILpHelWv2zlKpghWAAPzxS46ohBfW6U3N6Vq10TEi+MQUmFVq7qHkLIJcaHpD4YJC+Dt2ts8Ssgk7cN6UykHxJMXdfbzH5Ia6HWaaFDFXNmyhbyNcKBLvEIgyQ+/y3wLUQoY0/We6obW0GhtdDt5UwgomZnPHdpdxi3wFxZ3CzoIQyrevpWp6ONfTfLqK1CEtnKAyZdz0jqpkaXP6CweACYaiPcA38XeP5mQXw7YXVleGTwUwwK3PNAMK/Ut9yRyE38jSEVJeZKLwBMV0TNox21c3yiNumQebj5zJSiqN7TuJYWSuaJvIl/x3TvD512+RgqjOU3vUOb07ugIUNpQsOExAtAWXE5G17uDZ+Q9aH6xLisJQBB+jm21r4Up/izAnJwUEwyjmPIIsH+f3j/Vgp9mnXtPzdQVRafMIDknsJ7UGcMo78EBVphNdBTURrF2TZytHYb9HcjwWGMzigRaosPYYHBp/TI7cucrOj45AFnHniUzeE/rPTIrLKdhVYzCdH3/ehjDa3zqjAJgDThJ3ylmBk2ucG3RsqjwXm6P4I0zshcVQIqeFp7Gmy0bHRNKc7K2DCoQ29CdYh2WSPX2D6Y7t0qoMAevMCzGgUrE+9GRoXdRej/zORSm2R8TZzQe4mQNGPvgpN5HOXtWJ7zCojBtrxIpFqhjYjFbyj/0um+p1TWNrxhuuJLzwEffXFVRK4YxwjvfVekP32HEflkx2ax4eEUIHGOQrBWokJB+4HQd7b2rKRvEFi/1F3Yi9yDasKzld2Oj0sSP7kyReIhPpDR6XaGHwMM4=';const _IH='ed010240f888c1d565487880428a7bad8a56a94133faca9f11cada85128389b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
