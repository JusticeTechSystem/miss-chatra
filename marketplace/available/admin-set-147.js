// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzM9euAr6+El/3UtQ0l3cVajxvgZB8MtmGxnb3QFK2x7q9ZhF9dhhyGVcp7rY1voy73G8aSnTNvKMXb0O7762ZHyMtnSI1epDRu1rmZODELmWUJzqz0lFFxRki/qAIIsKPP3TCAHjoKJSxWC+nKHSG5s7kUoQzIpFIdxO57ZqOfjMr1Rh7D/ADs6YnQ7EoieQWn0U0cGt1caiZFnlAgHpY4CZV4gcJRBGYp1CJzwc20/36yHyYYv1hDPftmoKeeSH/er89fq14JSzTH8Z+i+hnn1pneHQc06T+H34xwM0xjby23JsNYfRJg/rnDGVbmAoQPD1UTiF9KRgSoNLJ31V254OKQ1Lz05IRNA3a2z0w0jCDnX+8wnLHa8XH2HGczO+UJn7eLgGzHZmOD86SBwUAPgsJR4YB92F7kiOdqZcIkny3Qua20EJQHfIiN0vBfXJ8lVxVH6JjZjNvN6Lp0t1ho0XdaNKAaqKZBu67KGC4iUNUIMTe1i3ujQsOhKGOfpJWCcC869Iwl256GtLuFhGm9PmfVoOuOY7wik/pg5vdCvaiVX5N0GISHUUzrJtqYKHIGR/5XwPRky3AwLWPi7bT215LoHdwDHNoT8Pv6dayfVK4EE5CcR8K2LvqXQQ2ZxOd7G+4kD9X1CjCb4Jnqj/v5lkrSxGNpGSDT2FC3vGn6dHyI7GbjwQU1a7okuiu5SfloWJEa6eS8gOaDXrjeEsi0a8BiUW/XSomSqakzQxlyIcgB993NbcMFWJsXDVF3qPLQ4LMi3yBFyI7RQSxTkhbqSWNNINv8L61v3zPTlNJZVc2g+193MyNYKLfAALZfQDdhVDVXR3DUpzB0g/b8rRnB16vzG/aZ6D8sDMSoarEAN7OyDkXiCe2M1Pc4uvpOPPytQ4f/ItJ/FpHvP/iRLShIs4lVIYdhpK8Gr1WmYUHVsy8Nxu5x2DnwBhcslDvRInhrCJQ4zi5+uwp3sQJQnZThW8iL2hGzqekJrlKc=';const _IH='5cdc92cb83ec692e2492711bf97016a5830c88f8285d1557cc50dfaa2be7cf98';let _src;

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
