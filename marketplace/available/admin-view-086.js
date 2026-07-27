// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyCQpKnLijXQMODLWhAdNeImzcuJwa2xE1GgH5w0PDWOQaIPpEhzUf3kd//rOUXnuRpDgxxikZNo7iqCwGzkBkM98UtnY5oaTHozIMlmaBe8mrAI16YsLFkijOrqGfjcrQtEaJ8WToeTioHI8bUIvzDztO9M4eJfXVEpy75XYFm5TOe2OgQMGvwk62A98S9pGCvbbztgfWtWp2MUM0IOQVRzFIr5qGnhIbupWsgIuy4IBrfC8uv/VhVz+6Agn0nSGWYG9Od35biTp5neOr6E2rv1qoEwQzxhW6Na0kB4g2utcrmSMrHpaTEw1lRs8PPKbHx7EOhYAZxeqkEzBGmxlr7gJ3NNK+FeMIzJdz9Qa0VWI0sO1NJsuSdNqmav/YE04ZUOUm30dXmH5jOsDE0LNUlVyrmZsXY3+ebtTraFk6E57nDgpXLpaVfffII1k3eVZNx3FOA/p71pvrtMEPU77ZppKMTqt2YeIc2ldrVLxb38OgHgKhne6aO98mFUxmxBZGCwqnRQCE7D1JVz8qSuYM4ZuaAHpvWQwm3xHrrxziYFLtZrikpnQWCBe9vJaa/kUoLtAtmuPiOAlXzdeISp4cOCkkos/kVR1xze4KWb+LcMloSS2nrk9Hpvy/rchPeP9CjH6ob+3f320QZlpQivmqcFMjI8VUUCNXRJzTRd7Yyp00k6uX2wD1arwBj8Ugp5yfzT4+hNknxeBniFmQtNWQpGuNLMJRxbtRCnNbUEo5x5LrZiPq+elJaz6NHLxSP0QH2sb6R8NUdU03Y6tqfc5WIPJ7nJxxM5BpggHRxMnQPdqfF9RM/anma0JFQTxd/QIpe9rF2cFTshwZQKrWUJtI0eSfv+kC15MHUDa0RujlU7ZfYk+V9B19GMLeX1kBRyNWfTK/rDbZrVJIwADKVcafvJy5OmqAywGq8zc6n/TSMAz3pkz/nKi4fVSUEC4gbfcG/X+FWKWGhELAzEMRrzHBunfMPRcKtkiFZKBy8RgG';const _IH='955f0f7e0f162edd09955ff88f64f490721ea9f6f919d71bd306174b2badab66';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
