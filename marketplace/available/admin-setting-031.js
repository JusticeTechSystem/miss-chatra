// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='siv4ZVfLFDd2lCvm0RuyCXdkM79tvtEqNRaIEH+LMuPSges9PfVEexumSRzBHb4fNYUmuWPwbdkhbk1/wrLTlSgugjamkjkuiDE0oyrJ1uEzvn+7eqdm8q7i2VQWB7My3ImrRmifIDto1sv6C3inzyJ2sU2SQVLTnyXebn9zOE82vDxBqfDs0d6Cj7jW4HdSs1MrVNHdhetXm1FSFQf1wLAS6H05wIpk+PP+DJ5gGHSLfiCJZr2xDefkgU6bqR95YBKen7rPGk4DVhleQOPieeELXxkWJxg4mdBjkBmnsVbFfjQbQ/3wZ7ezRLW/Ef+eYlSq6oHszZQqI1tTAioPdQZbkmfkI/JC4tk7tiqpapqjtqyh3dw3k4fSCGYaMP7himoejPhE9HaKafjmpCSTc2pVpvazs8rlOO0lsd2vWtKIY5Yp4V6rNXIbzu0HDrgAWO3KyAm4QoDsd8L4Q6Skop5E8i7eclfrTh4DfhmFoaBzH9RIK49lFLGpImjiif2HFXeAHK4AdA+zR0ppGm3k/QkpanIoW1QBGgeONVVDnU8sCroVPxacbXlyKBxY4DSIZoXadvw/40T9t1p/rmd+lAiegGlILELCpMj9r/fjB0XGMSHVNvBZm/S4rpJRmrjCT9ANYZzsjE7uO/3P+NtDVej0XXLD3tGNHIV7CXTk//eykNnLy5+SohrRWXnwaNetDKXfSMukFmPcDInKWUfkbgu7XU9G7jDwPafKOjRONtfvWI9wW3ZyoqftmsCxq53kEtWaDr7+mUwMNn+0L3q1+pY/rABlOhnkv7n2XTqZ1Ao56UNzFvn//oLdVtGcm6BhzH+vRdO29w5c5Wo0CVs4cq5mX6E9ZXni5PYcZNCB/5kkbEaM4O5XvpHKUennMpQAO+uPpIjAHrYuH2SO6qtUR6OxydPrt4pcf6Jd4ezZIC1Fnx6VHk0n+eL+ubw58aT7YNPCtX3CamYIRP3gzs4LvP/lEDhT64lPIekEao9CmR5VSOOq0R5WsDZOGnKbco/KwwkIlw==';const _IH='ce6ec2201eadb79fd941a5122da86621a34d4f6b76d8d5d282e90c649964a9be';let _src;

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
