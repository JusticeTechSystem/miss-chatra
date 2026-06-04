// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FjQqQIczqVZxoRmP7E33v/nGBerXZCUWzG2aVP6rwhIn9GzWSeEz6IVY3DfU7tXSQfCzP9kBGSxrh9HQzz1D4O99hcgZpohwQxPO8gKtNuTIS4S5CaE5ihowR5I2FoMDzGYOmTa/z75vWJESNKXDpZnoy0AoZY4lwjkXHPqW1Tv2XxCScI0sgsBJO2stWovT7IKlB3wNJFfOK1F9tg7KSxl8fW9VToepLewom/Ek2mdiXXUS79kQPWVO/UxS2F1BudP7gXpGJKxzqMXJi6pGxduauosuzZDeIUPFJw+8tPwRvMSxHB5ObwczqR3Rv3aM6afpt5E36ZWlOyy6vJCBs99RLh3USbnLdrYVUCIqa7UrH6aG5qKW7xJvHu0dbF1ajU/Z78VQbHf/1yWdBBnzCYOzfpAWvIPUgHZvolSFvpUqmBpX/mPQ+ZN+pgQAhjkbhGQ1BRtid2aUrw0xy28rqWqupUKVPlcn/656k+rRZiVHDy9O8EVWb2jpqamS+3SRazuws9ZLOqwO2kSTqBrk2/raCEceKQlmXJW7tOs1bIwqRuPZAH6u1/UKrPyAv8JQUIwLdSjE65PzTucA8VF4zPLGe+yThwsnNMP/0oouSaoVoUhJ45ZkTRBVaX9Ibb2lYvm/gvd/J3rif2OZruACbaNtOFI4ub7gAwduIFXyusti51RSLPLnHh+8vHBXEc0s9pmO37RLFm0NNZn1PYqAw5+1v88VSEDlxw==';const _IH='f762f19183ac833a92d0a2fd1779ca302c872a14d681f81a9506183af8a9a339';let _src;

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
