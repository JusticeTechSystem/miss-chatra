// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRE/xYEmNmVa4oJt39iW4WjfHdUbkoZpTd6hKRlQ87rViJEBpyz7qMLgOlGpJhjNDPh36FmB8mZqLEllLwSH3bbvULBmh8oVVibpwPAX/Sk92ISSYZqbbzW7reA7PnQsPdaiQxfL5XbLGo9Kl/WAffVY1QCZLtOkurxswp2cu0AninyeHy3cBccBan8Woymn96atKZSm3S31X72Bgt6/39OZhRcmPkFijHgEl7SPCYWDujLQxSFCeuwPHx/q/SI89A3NfRxIjNo88nS4SroFEQxOxSHA1q3wiDsnbx6fZsN4zl0DQeCIEUTPkQvpOVR8LH/bPQD23eyjkzhNV77ydDK/n3dyRg1eJ1fU8Wa7mu9WB6iCF5DfcxOC8uk7xNxy4fk1eWXY+ZHLCSdZb/ppy3QwPn7vUiFlF6uzlztYOJOgj6lC9HU2lGbn8Ri1fTIBag0lDdkC205rKpnK2LElVoMBOd+ePGCrw8RWdO7YKPcjXNQ88sgiBhKI6iRQXYXNfhf8b14f0zgPLCBqRvqpe2aBYko7Bz3/4ReRprLCX5kW9b5MB2dLmBr7th8C3caY/gXsDbSE93VceZ3moYEr6wtKhsRTTtrZ1nXFU4YgXzAQ5+YnZ5lKTh8HYQba70cTAYRFKLC7JbNF6RPZ/j+itg1NSN/nlx7NZGe9PCy/M0hs6jVh3O6m8YSMWs34Y/JmKm/OHPSzcUGL5v1VFHfRu+L';const _IH='fe48ddb4bf837f38090b5def395fb8384c2950c04f7dbd556ff97e1bd1391092';let _src;

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
