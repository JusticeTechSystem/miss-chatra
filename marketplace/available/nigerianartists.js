// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZJoPGExbMUBiQAvQR4Qrc3IRRRsslXGPLW3KgUQXcmZFg4cfWIyuwTExpA2IKQhPjIYxRIBrV2i6IRcrNOarcj6Y5iSOsg3oNMOyEU+PhuXkFzkkgcJ80OjVw0Y6kO0VT5ix4B9iugsyvyNBfVChAf4/MQ7M6aAFFsE74OjLDziDaPXsbRp0SJ5RpJBCAyt39zU0kDzMb5eNwBRqeSYdyCnkbxvBiPzDEP0b+7YnzKUY11LZY7Gz4NZ9DP1/dz2lgxKhn+npadMS8jM6mXfe1UIfWroNuxSha9dw4YYYNphe3mJo+vnubJTV10Ty1Qrgu5wvZN1/+8hyix5mj5vOxFqLYwL9Gr7xP7/s0wwQ3gPAJp0wAg9uEMZSi8l5aCv8HLrvLSxV+H7JSkyDpAWbRQYYsNHJEuQ2LtoH+xS1bp+YyYSzPwbAI42SEkVw4GFNgkJTO8y0e6Ke3XyA8qSGxNVJzKK5cDbi34RLE9+ouR0zkk2iBj/ELt0uFmHWT84d6g7pl0CCv830ZOwQWdIWtEvIGfplf7jhvxEhGsElaN5fZ16yzo8U9yCT5ideHDvmdVmglY3q8YF7yknGayqb8Yl4wTrMjNfXuGFQA0xl1B4yGUNPZhiomQbgv6PyKFfCUO/mTqVvnwwhFG1wEPFsLhRNHp04kkt333t4S1JOS5P2nnKfmeWM1QID4MVrpAdpLSkxUaX9vyeRb/HNysCQtTauWEzYSjIxrdWkaywUFVe+dShqSYs4pFLb/xZbj6FwgNwj84IWdju7DijvdBkC9g955jUWh1oWz7p6quo8tV+fkWl0EX35RDsfSO18hZVX1EGkR9X95vLQ+7c+uE6eOM2fJNbPBXh7EbRT2m9N/H6trHxS2jGrMdsQa+lsI4JmxQPeJjdShmLD2COh9d3cXzcqqqH3nxm1sNQo+8Gj19661dPqfocAXsPT4ApxI3XVQKXncQgYAYEhWShTy8c0U/k5ngLt2nEAHCxnlwj93BNeDR29xCqVKPtLBKV6RDnD3snfyRrk8NIqgM5QasTh4tVx8QwzJV86AF+xbuGzF/zwTuKPpgvB60GscGX4qJiTGRkeZ3PvZgz0+ILkiRs4rf9XOArQAumuJDHAxUHDwbqR1iu7A/vHWd17isW+7tUB2BMr7Vijc0xfrrKK5qtUofJuNJ3e03iLThT/4vgqTs/ePtqJyKPuBfzcB0N+Gh376938OJVv2wBlnynpEwy2Dy/a';const _IH='f8b36606a7d3b0b3251a0b1d0957cc6324413f986f1eae572cacb3e65e1605f5';let _src;

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
