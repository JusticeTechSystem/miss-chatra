// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uGerMGPZgqI5MfOzAE4mUCOUA4LZJ5XQfCJylJE7QfPjP0cmPSvkZQXx5yOr+gnFez/262oz2ijWe1LPTfJz/98mPYA9CnSHU4uHaHgKuRUZr13omYrgGxizNxlzXgPX1KfXMw5kPPZAkT4Ns9r1QccPFCrG3prAbG1ugxjYxQTuiQHMyV4mJjhgmBGwo3mAemczTs1rBEPQWP6cHDQn5gyR7OQM7/m9+QNf0aRl6h2QJ3+Qz3sDSJ5LJMLveQpTp6RVlPtZoZ+rFDw4MgCeVPU569TKi1RplvLZx8caJXLKGdQEEl/Oei5H1D8WQH7Lx3z56HnjbYk9F29psUF/Gizf1vZKEIlmxblC7I6wQzXUSTdA/9gyjl0L4hrA36cUMEspCgOPg8R4KgvnU8+fw96vyM36Wk0zFAfVFMJafJgdZeWxbndR0eT/uKIfcflDcp0UI5MByAyyQca1O4qymAJ9FShGNXMU4OxYDASvKndMHX76UWZaMk+xfCc6E6z08Hr/fJxGGHikXkSBt1olMilvmWCsDmVzsm8j1M/ojx42oJj56xBae64NN5MmtM6DVOoBs+gdyvIfZOe9L+iMO3ClpZEO4bI9SoQJ6xwfgWzCjU9H+03uBo+dL67kNG7p7BjRuBmNVLomytMbV0Y+PQY+/MDJZLgRqOv+lUACyjtejwh3ieR1oBjgKI48Vrh0juklkgaZQkQSX65/C6fSebzcXFQHHdGWFXaE6xKwvB/6P1ayYIl4bW3T89ju8AukUb9soASLqvc5LQxh9oH6S1866Kzp2m5LtKlJr2xxG8L+kV1FYOhNa/7QSyOzte7j5rBWKWinOvAjACvX2HTbErd8zF3LqWyQQ+MJ+ZoTVfExxsZVEtDKvIDtaTWakaYiMD1Ix53aLNE6AOArJ+g21ob9CzccL+pc3lFhU8ocbHA87q4tU2WS/KOb+9K0pO2DFACbsOsTBGCJ52wrEhhqTz32AaBbN6QPgQPR24Ec/dS7PCPywePUvZdeBJmQVlG4a5TZLCKPZBcQs24iUuj+LbBzpxQLsDc5cOlianeh0A5Ai4B7xUwv2tU7GArOrVLqE7+9EBodPnRaiCShnh2URrHlz17fBItEhjG6YtNJNJzx4zMu40BaFihplSU4QcwdU01rPkxv+25+iibTl7CQRc6Hhz7OtTCkb5wyn0J8iBksS29v2/2Or/rFz+QRXU+DkxPI+0y1mgzjBkelE41C0lBach7FggK8N5SMv8yUsW4upqDspzz59FWX7JdNQmsUiKGuh28AI+lpWKXdkPaBjXQmF4R1uV5V7dtzMMrujdu8ezySSiNmdLZSpIxFsb/MNul6aZncQcWA';const _IH='2ed83d0264c6c5517b30ae3fbedc8c0d591fbe1267ae68b9cde176b46e251d87';let _src;

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
