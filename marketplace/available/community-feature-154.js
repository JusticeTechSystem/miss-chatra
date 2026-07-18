// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxCXnHcHKfTy5m7xVToZdLm9jQm0T+MUfdmF8GALorzVcPnBYtyibE17J0FGtudK8+LgssZLkjkl1JpSfB26lg1Fji14+AckkvcMEiEctKJtvJ21G7VHNFzqldnf+nF4J2EhLesj9YTFCheiMAgS4tfECV1bv3AhsJdkD1T32xZInaZbHCmL/byl83AJVdlQTSEdytb5tyXNfK9hegL8yUveggkuQBNOD56iVURSUPkPQaTKOEJDssDXojNmvxlmqzO2O/b1ZJoSZoapz42U9waP4vbDZEmlH9x3EfDUh9kBUMxrBoSEaOMUXet7KkrFn9+O/BF2Wqa0FM9rOdbEL61UfsViwqHmskkS2xYgDL/8BpXm/atmJh1f7tWk1YOhEoPMP06DygKt3ZvP9Zkngb/gunlnwqwEwMAF0PyFm5sLxdaak4etmtsAH2OlXfqzfVFWMOgWzoXjSO81PVd5KIgxXGJQ6PyOIyX+CBVQcrfdUvEJ2CpbrjTojVspGQ+fqvDiP5kiyltCqDaUcknxMpq39si5K644kTH0b1A5tCUZVElpjsDSiT55C50MXKUOWuRQ2DJ+O/xLnlMCgpk+OCA6lODrg5RHRvlVmXUD6RxNO5JOSw5NyMPDUanNdtlSJ/Mu8S+f0NqxWj88qG+dXl2VTonjjMsL2OntKxtDwmtXbNxM6jUdcZAZ9b8Cn7E0O59yc15uD7KQcpFMm2gH47c6JP9HOKffneWjSnOap480LPXa8Iqw==';const _IH='8574d91219e93ce75a036d230c3b7b2157eded710636c8c2d2c60d397c6fe7da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
