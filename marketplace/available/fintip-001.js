// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rt9rqUyoZ6V13cI6sBTeEcSLBtQk+tI+vYJgzm5t0Cf+zsxi7Jg9IlYd2sjvER2OXLmk4dXDadefxBIdDM7qJMFFBk7t82Bhrlcf57/3Lfk0UbL0KEP/rUN5kjxe16jusaS2KoAe3tfn12/0v5QpI7OxuBJ8BocNSPIV5i2K2WGQeCot85YUoDjqxdTBXHt4JucHTn8SVCcTlU9Iyfo88UWYUNDzl5JcoLgcpcAF4FXx3FPFcQY+FQZzAyaf2c2OJeu9kaxP4hsJfkUwBv4OuOPGg7HlpbYC5DD3qm1ZbwAmb0tEE5WuESdEFDpEGgJemaiBe8VoMF6Zds7RlDtqKwsOXNNs6wUulsdrCjosWo0+PqYhesU/bI4u2oMnsHcpVUPCUl4H3Pd8tyaW6gdsyAIwl+65kKtrOQXmmU8+mA0FGgqenrkjPCjXRz5CNVfzcmD9vcPCHOuo3Wf/GjWy7qql2K9YFst6iaYzs7++c8/GHjWfvDi29HaPx+y/4MJG/rD/64mIW46k5bMQ/WadOK+EmnUQ4pBGCavClqhB/aBN+oM20528txkkY8Ckgoaq7dVjZv4OBQTrt/4eGVhvd4hwNOKXsELQ5q7xQxmUlz9LNBdW4lGnIMZq4uFQ2uvyLQ6GAmD9EgW1qSnesFYYOiNHwofDL0xcRBZcMX5X6vRn/rw51zDx3emLf79hG0lcLeLKFNAhXCPArsJABAoBkyes8AEe8sMhUI0TYYTotm3qTddlddKWWSjiC0DosT45aP9KqkGNw1RyotWICUpyGskna09aAQdX4qeev7aarNjq5nHCN6IB7De6pvq5csuMCL3ww6ZPWJSoJizigOJfP8asUG4+C2qJk/3Uu+Mw3e0aT0cyXCz2vCU8wZ6CDhls434zodXtm27IPhhcAIuzhVV4bum7TigQZTVvrPajbyuW5ap7rGObWRRtKghehBUN8wrPqgKLXPx+uq6AD8ZcgzQuvKXAcFGOzIZbGHiPAY4jCSHSGnGx5D9mZS2CcVsd6mlAn1zXC1kdA36acatCNLUT9F77XA7qA9qOVz6R';const _IH='e1855b29835ce71b7c2d3eb7fe8ae68f93d968b8bb46400e3cfe1c8f6f7655e5';let _src;

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
