// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cGx88LytBzuEVanJ2BiakU4zZnqJNh3zvOegk2plmd1g7eGgEVAdgScUnQvH1n+PIxpJ1elquLKT0c4FcmAnas8bsG2IXsQC7NMIaVf1Ut7x1HbVSS9oC6jT29TOJjDNlA79GMll+iRaUi2PSKGmX74SD4HsUAwV0CiMZlgv1H+LAPUVZqvn8Q4GCoSPdh27hXHvcjccLQu1xRUQttyC6KV38pt10oD+0IRZXDWCxOSyOrWtQlaOHNnICiRDX+ilBGnHwIs1mMzOVBoXeWxEGAh3/HR7Dxwv9ZPcxX4ZJaWjR9UYCqJD4d6yKFkPJcOvTFrx2ViR08l7AXySZiz+O6l2fbgqj41pGgArl+0IPkbAhEUGiwSf+GJhB0yT0ri0N1WNT+Up5jl49azTDggY4rSW+Yaiby7SewUncL8qi/RtzZZjDY1DyproPKeQ2BwWe10OSc5xx/UNMBFvCjvofINgaUovfjt3XzfueNOzwgOL0mqG1M+brEFqir22uwMNNc9mN9XqjvbZsvt2AHOGDawweFDUTgV9bwAcf35dXplWlMLZh+Wvnft3qynRuRytdHVfv1LlFKGO1ihq9VqAiY7rYlmxUSe6DblbPa9znh2eVBw/avLEo1lxFqFRHPTntO6PSnM3VMhWq5d/LexxFhUnK4w2dgu44HTqajZdvkAvrHAaWl+Gs2Ev2EjslHLfvgynfJ0OUmoh7DXink+wNVSQaAaef/FAQsy4ZT/mXvGhj4t/F6o=';const _IH='1e590f9d74ec274ad7cec6dcb9472010206ad49e6332ecf7743932d6f3da8478';let _src;

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
