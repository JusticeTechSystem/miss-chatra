// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yt1prflv0ywmHQLhd/EvRq19NB02Z4BfTfU2ZOczdcaB2Xc7i1wpTwHDV6+tOHecyf63DwhtlyAWmJcEjlGV0ezOk7LTeYmddGTzbGO1PvoFt2qAwdq4d/FnVqvF1G3ORVbhTJYYHuTRXR7JAFDo2hRM0099CkLqh19+zs3QM9Eoc1D+fxBa2Cidpi7AJiSf740QEKcuXuQcpIm/kWP60Zcmoz8dzIyapdofJ48n1BRANoXfKA1rB5qtL8sp8DRMd5K6WCbLDo8S/hvDldeqIy6ZTFZCnzJRqGdNTSt73YRyVFHlNFoPPnl0ntfLlsdgay9KJAXTEQtsBw3TyiUmrLN9FCFjbeh5h0MoPkvI0HNyXyqwKUqIdQ1tKOkphuZsR2lDCIJbHhYPPOLWySbJ+Jt/6oQxYuqjuKYni+EOJnGXb5ifXyznlpnKtpO1xPWJGVmz2nNoEMXDJ7wP99HmOcmNehxwk4vBJrQp8EEXSoqdNLZ7pENeG876EK8rCDi2HbPVJUfspQ2rvWpM3IUqFbSY+3tGzBe94D2GXBwpaqLU+8ENwK2PSTdLoFLJAIgImyPgJkKcRqSQM3MaE+q/eaf+dyrEmGM+60gzBKoKsDUqrZ+j/z0LS+AqwU5ovb4=';const _IH='51b85f7da9d2b853e6d545b56915c42a83f3737ad23f055dcbfc15efbc4bbc4e';let _src;

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
