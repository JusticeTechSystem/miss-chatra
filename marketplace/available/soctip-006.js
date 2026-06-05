// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kFJkdwafRBje9g3Q6Y/ARWcgGNqdf+q8yAwDGGAOblTSc1LvzTcCLkxIUPIL2dfEyB51298r2dfJKMWPiX2jVZUVx6Z6Y2qGhVajw4rk+7qsk+bVb6CnEyI02IK8Z35ATsTHodRNFOkVFka1rBY6vyQOS+Al32bk7cgyYu9na7Ad55Zwp4ORe7qHnNXYXlSAfqNhpc21vzIbjGA5Qls3JtIHtSAdDvPsBFV+05heoPSmlNVmAfSoyucKigxxftgrR8U1p2KSFz6ledc5PSBvxz9pit/CQKztU2A3qJINdtJz284tTNH6v0y6WcfwqfTzSOJ1Q8y/zMKo6vekSf/1QmzzfdbaNfJhClc5aYMmOUG7j8PfTWfriRxlzO7J9DmLJB/ZC5pY8yLKEisyafP5E1sIB6FVdDvDs98s6pIV7QNIVv/rF+t65xChcfOLfzTS40GvXbtWYHYAw09iBHPs8I2e+ctF3MrPpMKcoXUPD1G8/IxRXoGXcNn+frahZ7lLtr8d/7OJQ9SJE+6cSmonaS9ZgNaXy+IIOOAYZRMUB5IarRYKE2idNVFRSQb2ZjqAZnRJj1nr4MByzmQ/dVHLK7ZScE0a2vekg01RS0wc+PRk5nJg3ta4jZLiKsKus21QRNQqjoudtcvAOIYqlCuOCNESt8VdVeMBhEOm83Gw2RxQuGaDsZBGQSk4yTnUgYOQAWqwUm2F+7w0/kpCIosPjzRHo6Z5DJ2IPW0ofVnE6QaURsxkr8tnu3qOsEQD1/IJPtwY65jhXvDrEcWcODigXoSfa7UZBKxnVasDImPuBdTrDBcGSgojLP7geC23tamBqdp1x7C9tuktIET52jJhcM66aPvgsXp5BDlgT2m/mEFQcdGDfJu9TmqUcabf384jm24HURFOFmwhgvYhjoS7EFtqqaEceyxnC6jUURHsDhaJC/eHUEWr3qmwp/+GjR12aCzLVy6WCXAUuYlqvSHU5VE9bVYiNypeaJOrmmNcYdLZBS/cJWhVHp6ajPAKMiCkrPzsWylgFNNHq8AYUcpLApbqrATtjpd83/1kRyZq0C6sxFmvAuEmVXSFOcScrFdkl3wk6ROukR5Ph5I=';const _IH='bf5868ae79ece908d79c59bff622bb6d1aa610e4ec1627b9c80e6c4d6163ccae';let _src;

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
