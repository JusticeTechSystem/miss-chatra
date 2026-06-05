// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='saKr4PvbrrUeV0PpM3fh9KYdSJhHF8/1iol+0ppV5Etsus4JZA1zYP0Ri+k+DVGDG9YTQ5EkMmuNdmctQWhQpQz9ZC//p5R7JNCTkGJnFKuirhXIURLgtfokxX66DvxS3TsebAJCJezEXhmDNVRg5U2dkEhQ4fUlyMqK1jzqg52QQPsTTATrCCiyJA54ttD4hIK5eqnv8GVULgFwH6WDUsADd7QFaSRyrpo6ICUtIZkAR8kOWYxPMpoR10UCaQ6ZfK1YKG6ulvi57QTLWNVbkOxpwKKTOxzoc8l8zOv/b8PomAWjbaBiEt7jTDwK7nXmJZQiuqfifyzHt6a4AnL908rQRB2fxb6eOljVLL2cYg/g1dP6TGJyNorWfoTl5JPu/11PFSFoqTEBxLh8owpRuGGNdUkEmdT2eP63uuHqienziSfHwf7bgxC7ONQgz3CIHw3XnRh5SjyKWkkQqkOuvsv3fOEfbCgYz2nNrx5w8ZE8PO6ZBbWYpH3s1NQA5nD4hAOvcVVBtlqlIYRDWv/dBw9zy/K/BKiAhzSP6Hs5M0X/MnN2nObGLmxE6SIRkzhUjpiff4CHgkQFkGfyXIrl29yXdbG5To/Ya+pg3mPt3cdkUVzfxPL6kcfYBJfUHSNKtcdF44T1tXVboIdkc11SXW5+nwzcWkohYeEirN3eELJnr/PMl9Cqqh/PhfFnxoJEn84aXjN4VcP8XhWnQra0Nt3p4KPmCZ6WbGvR5DVCJCf7RZsEJBVZpkGgtluyXyojLhMjO9GA0pe5GxFqQhyqD5bvhK9fzUmY9VlmEKHqed7nzoQcKo2MVUeE3+aa/A0ukozXJiI3oSQ+Sh3iW0vX7Q4Yg0nZAFBffnrsbZgjd7hBlrvQlRyXnRUIytC3eak6LKbwxdCkC61YFSvlJKL85bUWsowjW2/+KVDWJP4=';const _IH='6339fa835ab2711ad98880438cc8e77416e67b919db9f4a5c9593fc49ea1311b';let _src;

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
