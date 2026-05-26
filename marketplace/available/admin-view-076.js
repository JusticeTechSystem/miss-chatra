// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GGNuzHwNUNqVUElV5ZKMHbGLl9p+5PB0cEY6q+6nVPh8cY7kFGUdi0cls3+oIbSD/bLHFyG4xrAnKgTjiRtvnRG1NavCF679sMalqymZpUfHLJjwKc/c4viRPCUn3RiS/DAvkESSovUMy5XwI0608laPIM5gTpdIq8qzJGI1mNXGR4bU7vXXKglKBpUmys53HbFRG5/5Ci6trU7lTEqtM4GVoIQ754gxiV8bKaWYDIJUaoxdzi8hsJvg1pl+5MzF+xyF9p4QEJrnFWzMkzmXcJpAI2jUZmqTnhG5SzHiUT2iEpLm2814rXUlMbpstZcvTcOwp+LnKt2LboHNORpzpbJvU+wlqCzH1lZujSm3Ec1V2F+15CR5pF8YyHDvGwvcGWIZIJFYCKPssV4PB5diNTubVKksfPtqS5QUELeSGTieGqwxv9uGYQ7A2F1jRtuz5jmf9GUROi7t9mRIxb+R4Rd2UdGIZ9ahqwtI6F21JO9Y7gNrgPNBrpjriBZsI7c9zkCk9/WkhYl049lAKj7iGhUZJzUduZ+7LdjzUHMrTKkkHins8w+Ln1Lvl9NW8pCLjTnFuBDtQHs/6fZ3YFccEB7oM9RW1ojHRkkGRsXr+Tw+JkZ0a+h8gwCCzjv779HFjPafU14hdvHO6THnVTAKv0Pt11n6LMcknSLjBujJ6L5JqfY3aVwdH8danfKVPC5+bKgg5YlIB/WxqrEIsYmolvOzLKrXxXI2WQsmzWj2TTicWMSlYEHZwxUi98YH1on8Ds+ianp2xwm6s2gpCRMr2AgCo0XGy2l4TveRVNpaYOGLfRW+VtTiZfnxfKz0cYeLc9mp2HTMP9GByWnDfgpYe7xCE7C6MgoZcEZul+VuKSogO8XUQyP3skTCGFpV8uCgmAXkah4mzsjt4IBNDg5bBfgKq/vzRSIXlTJbcrUitVFMZrp+8iODdr82wuYUC2PczlcmKwFb6LRn6BxjoH4ZLJ8MXNbI1o34ztt2MroPxg==';const _IH='94c4590d0f6ae04017e9daa467db8c57a2e32574e9aea9c2f5aab61231088a62';let _src;

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
