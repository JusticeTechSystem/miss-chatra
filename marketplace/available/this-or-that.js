// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGYUxncHejwDp1L0K5g2bZrPBoqbt4pX1XHL/FtFS7m66wQrrHsRp74PNFO7azr+j4VWt7u1axTNi3NUzSmCCOsffqkaxi1MCZfJsmuQvQU8P3Agr5R3FWG3CKrsQNLTupuVCwzgRFgVQDtWpQKFyO2K00uszDhS8JdTS7MABXgF2C+Ud9ozBvKLNMKwoCxYkSP+UnOX6Y/NaQ01plHsf0zoKoE0q+P6qEjEQW1DgEy4qGlltvNxJE2c3PxiioOrDfAwTLiTuIoQZlRfYrzqeNjZT9Z734LTepKSaN2J4bSN+YfsOk7CLmFAFdeFNbYn+D6fGEAFqs49fzmhXHuEjtN/4PYbdE0Ey8FJ34hNn2mLBtcF3nG7P9XQWqUPX+KaYDLu0i/xhYeR2SPV4ashUb7ZULLkYHp3KEhOkA3XEOR24xOYZb9N79X7smc8Ppuq9/BaSfJQ6lZWpFUgsuITNQGZjN2G7pR3WOKava6h3nHgXLryHunpFqysxNZCFEOHBG46oND+arx6YnVSupTDecnU6pcF6P/+1JRO+fG4Woq0EhKo2AXYguKe3UkDeuKmBMYhQj59u2hHy4vKzro=';const _IH='c2336f262d0b838b91899e0f97ff1ed04ab1529ec07661ef1562f008dc36f580';let _src;

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
