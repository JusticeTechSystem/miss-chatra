// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWdisN7HFiRH/4ZKpecP2PpG6UqsMDd5tgncHQ+DwmaNzdvyPkk66R6hS8/v+5E+6fAvLVDUgWNTzmoo31f7QhTNVhWQosWAksb2EIrjXNn1sL41X1/SAf/wEEUUoVpuy8uC1sqETbRzLY+L1TKmnQm+XTitF7pJRBTbx8CQoJUAt5MtoK+pZHCcIyqHWd2BDThYJ3X3ZCcbEeZFAyMpRb+OCP67UcuPPM0jEzLdKWTJkdkI4mEreqIokD7yJmhOeIYKsZwHzuVBeSedZKvxZsNRMJYTBwb49G4zGLTT4a03QB1S7QoT9aiFaprm6tpKN3XqUg529juGOX+QqZMrj/QpMqVzv6YUk8SdC6PdxFPkxWUUzTafIkiz01L70pfNh9758idbmNaS+JiG0ph0INr3oP/sTBfrYny941xyYCe78EObsWYPAdhvER/Cr3mVhG9B8+cCsj7ZWz09ZHi+aULKEyCzb5CRPgb2xdsQ9EL+aWXN8TR5xuB3w7PeW4OChI+uMK5wAhUsNlhLiKXkH1aZye2C0sfmFnJxr1W5sraCc3IDDMgbjO6+imeDbp4j68Dqxe+bfV4zIjio3wwyofi/7xYAzjcJ6D1Rk0gR0i/XjSTTDPduqBWYp+ya5Uj0CYLLE+y/gIYkge+1YaQIWPI7r+cgB1/lMwhi6h7Kr4hvAK6F56nOTrYYyoSjPjxAeG1CaKVJWvfV0telxR00krbAXMgL7lxbOjmcAeTS2QrEfASIgqkyqXkOw9R5ajSQBp3PNyHJrewXObGw9Jme+3x9YniFMq+WGL4TV1sbvzwbWxGwzBbHTENmlVzqYpxAyXjDggS46oG9BvqMksLpmN39hhxSd+RCmTEzEJsz0zeMVqp4Oi3uBmBnxPAEoOQ7PpGHh/KCZFel7DrJY4JtQvp4sSl6vp1GCqI5+EN4kgXOIkfGsmsb1yOcALReRfWd+Q9SHQC2epmqCv+l++dPGl/kthuD2n+pCIUVMqjxNWlx+yrUW49USM87OCxMY4f8';const _IH='64d84685c86b8fc80fb2b47b5e31b0d518fbe74baafbd7ab75e952643bac99e0';let _src;

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
