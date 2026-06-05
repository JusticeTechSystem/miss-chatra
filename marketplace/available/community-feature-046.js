// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TM5Zf+Lz1mYWXzwNEqhsW+0amCUzymSSISivc+TTzu5Z2RP7kMb6gynedcz+rQYUbbCsJBIonOj5WP1hNUR6uxkBBXYPbgpm2UkTxht20oYNZz18e36inVZEk3NN1sA8UxxgzKSaAX14RngvkKRlVg4EbXH6+bDZyV+Duv4gco41wfAIM0jMtysliKmHn1HkSU8IeaXLkfkNUifzUP2Sb/5/1i9YB7EqCyy1Gh33QZSB5sTnPAPtpe9pLzgREMHNpC1RG5Cg2WcykpmAj1gORAGAss2Tc22oPNqfNEdkhY+oV/ANWxlVkMDpHYHgmwDeY2rnumGQDHVBcGo4M/DtURr4gJppI8/wO0FnfMGPncpEUVm3sNByms/47Q37m9zgc9UbbhvIUmkfShudFONnGgCHy0UIbZBEJUsbwu/I7athLLXP2OsWZxxEwXTrZHlMO4RyvsMk2iAkoQhHuRXiZ9fzK2CusCIh2C+wBYx2pqUa5+Dg1uuxfDBS0hYCMkO291tQvpnxZBeUpLhsS4tuFTE55UyHouN7ZAAW+v026giMZEaK02yTgjmo/oQFjRzrMcj+jm/VoHtzrq6GyJXLXjqtEBkaGGMpYC+bq9+ZDZdPfEXBO9BEoD1pObPy4Yf7ss9yvlLR1FWVRB9jFMKt60ecUY9ZFP8/MhZM4r67nnS0TQAdmPPIF8n04SyTVq6nJSmSEgvMx9FS3+HICQdtb4EjWGk=';const _IH='b7a89700ecc8c353479a95036b20d1b80888fe12601cc8e9ef0f147968fa9686';let _src;

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
