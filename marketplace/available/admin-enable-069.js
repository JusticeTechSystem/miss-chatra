// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lLpcohKG4WG7Wcxlf3V7eAEnCgF1nsykBH/ox1yybRLQTFqgfGUHHTECfnvJT5plhqomTeB+79Bcxx4hUiwq+qEb6xPxq4KbajhTgx0biwIA2QDWm0aapPt1MyOW84/wik2IYJqRfbtEeLBHQ1zeg4ib3kz272wydxEn2AptJxLDNowH49xpTPgOsY5PByVVi6iWqHOvcX8097XkslzZuYL1bIPScHIRCtf4y5fplBwFclNp9mFfDMnNCLFyiuCZv0jrbByVMu+H1zOa/ceNBCntdPkfiuGKDoQzUeRe501FNxM+2DiNsMFuP97oWT6MnaHGKGmL67dZWiL1kII6aq5Ngr12adbT/tp+4q6UITgjN2RdusrbArSQcw7Kw2eDaDYPreh2Hi85Kqz5FHnUx6u8JYQzB89Z4bBi8CwpbN6Bi67nxuLYIb+uYVehTXSCFdI4S/Tfg2Ip3fgQG2rkYtsojd7s+dgTPLgXvSRPw1wDMoDlD7IjZrYtJI8teY74j9aYPVCwAOHnl8Z3S1LFh52+n3H/MRvIBBPL+WL9VqxDQB80+frt3w13jMW2Tn64zQBH6FS0mtR3R97kneHqi4p6fSUkVNG/650/wolP/ZBSeHeoJzrgTtX4L+orPbXnrMNuLIVF1GBzOAo/sA7RqApkV4b7ndxzDTcawWdYdkJEmA6QCxHPKj8eKbmfbqcNM157/Zuigno7XW7dC2BBbDzDfpv7GsqwhnbgmrWIq3/k1ySuV7xL7Ui7aMTwJ4wcTM3T73uiDN3XzyZ4Sx1K9ChCVv0MGtDhfdqJ/WeC0kBEj/Ju1FBytTN0zp2ULJR/DkAkv1bdiPwn3wlLxk9qGvrvVjK21JBGvUZMhf9h2VaL3tdih/bL6r4oVorZKIylNoQsF3Ok7fBTK90Ig7u/sv2ZZO9+8sT4G3hjzv3nIZazMd6KQHSS5Gmn6r1ronjPrbDiFh5zndFc+abO0E1r6LgD6GbvjrYjpjI5SE0QpJNY8TeUrDoPF4WVSVKI';const _IH='bc06083ee58209c8f2ee5cc9279960ff06bd3700471562071b7b5fc16c8db17f';let _src;

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
