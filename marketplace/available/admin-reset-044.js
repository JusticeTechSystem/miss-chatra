// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YYKQ68bFLSUizmhCVY3kI6sZ4bz3GQsfNNIZrjF+Ij6ecrUGABsdJHPVuOTZ5U4k7q+NoFN/i8l08J3YJqy4X8Rc12cCz4YFLU78feeNeKyo6ekX6wmgM8c+5rNatplmDR8nCx4d/URnAW4MwLFvykhIWruIr7CQROa2+yfW/oqveDYSYHlqBGsTzWJb2wDoPZQZQ7pKiXXTjMUsZyBVznw6Sz7efArZUSSnCN+5YN+cBB7tT8I69i2rHgTzL+u9lqpK5bFMEiu0ROlj97qyjBQg0W9f9TECeaSE7tMrm9rZ0gLw/tBuBtsWxREbDjcTHIvVbNkRIRoxHvNk7K3+PmhD0EHknpAQN3rEOuyYPJob8h0u9Sqm2fonleIaMNXiKodwhAu+84grFT0knPD1PUaFrcZuCg7K0MqdqV5lAWiPNYVBJWWrPPQXHFlbkdD9XyLq/LoiQutAvz4QXVQRuQkZRXtwJdM3LtsQIltsC2tgA6YTuRKVDP1W1TXcw5kgZgHTfAXrR6h5zxiSBxa3di8tj1I4v33jRZz7V4M3S/6h9g2+uoSfS6ndIkmpwk4n54BUtb2YeGp4HhhEc7FVpvetiKIQrKVFhOG9sp+Wk6MXxCN79XrvoAIFXtftETI4QRqWaZbV4oaz8Uhaaz2Pac+uDByxIKILC2zvZTZ9P9pT38eK9sCmjNCbBt70SYguMZPMqjU3eTBiiWbsQ/StjIzrGEcTAk6SKXQrtT3gLS/LGO9hAwHs5yOVrg9k2lFaS7DSLAc8raFPT9O7cacv2Aop+m0UGsCNt41+cebTapWNzchdhmUohKKZIPMCOhMkkqDMu1SojVCo4xCjjzKebvafmmubzv/cfJPUPghP6KX4g74rs91K80HGWVp/CAS2RRH9zvJX54VcWra+9cwJUYdeHO9cF4YnT4IIAyDJsQGofFbADD5B3Fp6IVMU4QMm6puEYQmxe2wJMB2DNGgxYLNkLsiweHxtIeUiyaNu3B0dV67zqhE=';const _IH='3fd90234f56e438a64c22bc669057f63e91411281b61931f98534beb63291faf';let _src;

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
