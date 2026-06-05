// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mJE14COSbA2Ts86QzQw9GiayePJHfkCQPTIi9h+1Zh6c+mmV4O6Hzmvb20aWrEa1/ij/gDxX3s8Md0SwtItNOKmCbeMoeC7TelndNV75j5n0QNG+jSTYQ1bjOh/mnljPrmAs5l3qEyHd0juy3Mes73ADD1pqzeJW5/So/uUBYUpM5Z5ldcwGwygAUNGfeK9ZC+AKqZdEdTUzXQhQ2hfR8AVWAvwVBNOT9XXuJN5UTxxhLAo3HRAI49Xi0Q1tnHm2FPfCipei80vW5V2rsxZ+HeN7jjhuHqQ1HmV+6WTs3xLiVRB0YGrmdiaOlQfgtpLuoCpVGxVG1+8sdSFF/IfcuBEG5IqjhnynyXrFgX94Asoh1NCRu6CkV+hilyHeJEPRLcL/SGhkFo2++DkqSrll3ksMbFnDRiFtTK/EtDonrCZ2o2dRxd9XZY71zN+f237iaHguclpFVuFpBsWey9mqRDXGnsSMjmRCFuQisFJFQ28/u4yM4Ji4M7ygj2SLuka3HeSoFz27ULcrqQ/tau0HALeajf/2FGvyip1hYyVIL63WTyUhsF+3xtLE/ZePV/ADBbZrDSdELvzmjbdI8106oPgwzc67LTSw+LYU4VPlJLRd3Co2fHzN6CFYN0PoXUQ7GbdqOKzkTD4YyFPtYcfFokI5xRe47c77875UOymCujsYkGn46Mie/JVJRr3uJxvWogtw+6fIfKpsYzvI21D5+c9AY6liPW2/YfKARZ7TaWac4p2irqI2ISBxklTc+5VG2yG003UHKnsVRZLdd40juFunnt8i81pkQy6UQkDpE2QGnVm60/285FBlTlJnD0rdAKXe+6qa4gKp7v8KGxVfnLZDQMi2AXcRb00dLdgE5sqscNVJ12Bu5wwJHmwlX8BRpX+1XxHrxgQELju9ITQ5XAtQ5Xsa/tXY1svyvQkWHhnMOpQEiZhdhJ8h9q7JAZQOP1Whk4Euh5TxZLmq0eouj7sZiBI9VBkSttl01tzWp4K2Hhd3Hq7rizbYFN7svs/qjVT3P5JO3UB/q1rL168ZQsuBkGcn7w==';const _IH='91f42d5a8b9ebf797a3ba90f6831504bd7e1343e3c268b29454c6186e6ad5265';let _src;

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
