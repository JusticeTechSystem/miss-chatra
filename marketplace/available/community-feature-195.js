// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+cGyPLOctnllbj2n728APJvm4GG1BMj+2J532eyKNokmIm5ExW9OeRvKbjAq1uZfSB5vXShVeoDuonAVNan1fNLF7xuzcakt/62rMMcoPbaimvpzH1SG4ir7Na+FgGUrvVX5VX4hVKk6eoSyQXvLU6BrGy04ZIoY/0GCgbTjqP2ikOFauTNEKpqwfz/tToDCmbeEoSiFXTc8Gz4O7d5L2bvpI5mKnu4SfvsyiVE0FDrFNO27NL4CJtFEyPG0ZuM7LzPP2n/iXb3vlpQ7bvJLJM8fRbbZFTSwaWCjMgTxrMZtX/LGZGayz50OLOqVyF0X2JjOEn8c2+h1wvcjnlMMacjkv/FLUMmxZ+nuLYXCVDh0i/RvSQ8xNS+5AcvNG/FsF481CwS7eeOfCAvM+emFaVOwmP78vrJSPFXljs1Nx7OT2CFK0LQeNbG9AxZYqjIOXDfzIFHu6RcrolEQufbhVpi0jBmrs60chN8ypvK2S1W3iYFNXjuuuviinus8zjJlpm8J0Lxtnp6eP/1j9fOGCUWZQnHJlPcknSZti0bwY8wEqU0XBMCIFScGod55DphPjKwHBQHLtt1TxNLpHns0Lere305/BSkYF1Dwxq5Jc4AjelrQ5aGb4Oq3MZPPKM+AAaiHcvDdipkIudbIujD4ELbMihZBly7hPaqgM5epEB8/la1AWMXhElXI4C1NbhP/A2g7wGZ6rSIkOsgOPC6ETsNsvL3RZ2XzHmoetS9XhNrY9vS/Waeb2WJq';const _IH='f74da920c68dc4ba0ee300fd1588684084000efb3534e5de5a200ea48f0edb42';let _src;

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
