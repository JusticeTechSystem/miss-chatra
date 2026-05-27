// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JHxRnnXdZ0ii7clZdY5ftc3/n4WhW8FH3vtJpDEc5sut8pFybGH7p6U3wONvR2BaicuSAFwMK5mnzEQMkKZk/SixXpSoTcNdc71V8HSG+HB6wwmWC5JjP6MC42IymDPga0gVReibqIvNmofLMGAlOzlYm9k0LW6FI0miqZuz3t+ktLAM8pxuNCJtsKQ6Ao0OcrnWmxkRctXF9YCkVliDBJ8yXbhJc5WlIJNNYsKETvIDTkFNbKrh39yXLK0zT2RiefRih66Nj20e5GVJ4kBlovnrIH1JSePdgCvr81JuyfOZsdsVuIRmilBo1Jx55isKZ3RvpO7o3hvt2DtdU+9v35OyEOio5Vl4rq7disZePKOABryZAEfK6V6woasA9lnn7bwvy7N5qmaCx+5bjl5AOYfRntV53k58uIDscKj05piVvxpvRayMlNUOAzU6MVZ4zqoyTipACb/ZXbrH7aHJFycHtPWP5U9Kcl1FpVaV0qJO7aioHLbu1VJ++STICkPNlNIrVUQMtn3/VHOufiha4DYMNEEFnfnnc0Lvr8OGLKJJxZ4FhT8O0my5dKXjj/iTgFOy0Li8/gUrACugZ3r3tJnLSg/pm6dB7RucayBlKS69sJ+BUX8XjzcmyvVCwe0n/TILgWYVTuUOM5xvjZgrnCn/r7Og5SA8L8Y28mJaRYXzajjPrlKDr+XMWEG/+3USfleZsyvcXUe/UFrU4NWxT/pGS9AatU7L7y4x9xaQdbus4aM=';const _IH='63c5a9085e3e62ff99c435c7d4e3c23c552212a9c8f9bb99f58d486b7660d2b9';let _src;

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
