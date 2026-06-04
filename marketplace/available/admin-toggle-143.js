// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QOpViOA5b7RsAibRP+W0dGXd4nZlpgWzWXuAKGumVMU9clnzsarwEclMDxVO6XF/8JhEwf54/YXPGn6V7zxLF7WFo/Ge/6YsTHwGUQUlk1JRR2Mm6GfCf9biH/JTCjj+84TXHea4Jo+8o+S16Jrfmeb73aQ61R5enmddMmBTkQorNAGBHXYLMAGe18m43lrOMoHFDTvnlWNn5FjsEIVkw7xNz6mt3G8nV9hzzge4A/DvpUr6YA5YCV6JDLRroATgeRaaXNs9Sdc/RHPtol9CnCdJruXgZqOWbV0nIYkE4oJIt0gC8xs/Y+sVgBiBjTH2Bo4tqYbC/ZPlTcecpwlLGE2gpnvrzO6ZjRrT3RuXqdvN3dxSEcOHJwHkiUNncr4eb//LfFsKtlHrK553TFmdzPy0TUW7EXRIEY/8NUI0l9Xz2snqXg2Z2pMnEwl9pKeMgB2j00cHklQXA9hrwIuWEJydQ1eqaWhpeKqSdLTMoXx/oR5GIdGyfJ73J8FRLnVm2Wk5nqgSvlGkoK9by+rocKKSquhDeIrEFGffQkHRIGDza46ZuEFyBSFmCvCYRybqNzV80ay41ZwlXoEOinugpd17NmjmHIacI43wMbqdPNHMKRqtCDzimqfrfcRHdpIxGx+hm49g9yUb3gNjUNp/6wYdKiiMFxHeleyLNKuY55bEIw3aB81xLPG5QQSxRTeP7Bv632WQN8ZVVWqWkCUJZ//l6DdIvUoM2N9g/dWvg9qYYajznJFPz0gDQK++DN/9vs368L1srieo+3BseMMwhIxuC7Z1P+0qoYWLC9PqAV8u/TxFNoOaDlOQEwvd7ryg+s9AsEQCHiG6i/dPOz5eFep640fm2I9SLbafzHH3VqRnrBhyeR38XQeRQCPWbGs3WSLmbbRdMf9NK9K84mUsY/z+a5sFYzP+1qFonwMGHI9dugT9CifsBWOvcxMM397Iu2/JpXiCSknySEQI1IJZGZ4DCjyE8Dvm8ZtjVfOAZ6DpBvVpzMiZaQs+XmwrO4+4Eg==';const _IH='e3e67c96b07c7fbab92156888a42fd12f7f06041b015b94a33df93f2388915da';let _src;

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
