// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='egDBkV5U7irs5PuIzovPmHOr173VYO/tH1dLM2AKVzjYWablj9b8ZfSvFovUZz/wMl2/gngA2IWGLLQODlK0SHpBzFr7yuq5PZsaYfkbW40BaatcH5eSIuNqsabs6UlCgbYhIam2HtnFJlZxblTKGIf7KiKyN71hP9kCss3sEix0tqlr5NSzTiIudmXyHu/sXyjPmmFFcs4oGn76kXLSXM1+CawFfw0f40wRP9gqh+TAWZcFxUk9qGBM/j0E72teFSyjq92nsQXdZB6T3VSEj0+PgBrZAtoFupwjeCg/IMo1cHi9NzCooN1q9kWITKAslDNrvCn6ZlpjM5ErN3CK4BfT83Go+4ApXIY24mHnEaZj6e2yMguE35K10ohCO7j36/fbsJG56D0Ds2yAoZs/HNLHmrMyutjYFcuhNL0AjLGrkynmSnmW0nmZz7CSPRc7pgW9vmdgJdPQNGqUChpEK2zNsirza2+UVmajT2t2Qjubo1/o1iXKXwIXLn1zQ4XmBmSnnN7LQJTtHK3gkcS0HNKVlrohNcOoZEgvQIyeFB4ynYCoW1FUhMZX5Z3a6mTzIZpNv72J/AN1dUDD1y7xPIxah1CId7aFAAjRKE1uIpEiQ7CoYX9J6yUzI1lw02PTtdaV7OhiPixcsgMVRA6KXU/OCCtBS7Du1AxMtxyX1MwTxSnNE3SZ3EaArl1iLVi810kBPoyirQGcUtdBXS2bFGhUHG3fe/4CRqEpm7vq60uFH7UfimRbVIhQ++h92bTR338jS5r4L/q1iIIOn+SC6f0jt0LvmVnSWypzVQLLdnCL9LNRJC4cUs+21SPFjJNkj70BSuhE93pvFxgf457UzO1VeN6WxdJiHy2y9vpXa7rsUYPKZTXj2+lnlIkvIYEfnsLQ9/3I/NELtINaR7XcyAE/D8M6C/fNupQ9QzIPkGHCckEAdDJ3CGmljns=';const _IH='cd5421e7b99959a49125903ff3c90c41afe015b1f5ed89d9033ab5dcc6a853f8';let _src;

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
