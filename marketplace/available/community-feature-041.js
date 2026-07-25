// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx0GapHMGBBmq2XiGYV6E3nDiYDd21wBzxm52X5UNoyWhIJ8h1grK/F99JuMjoB4M8xxoKn15vQ5KjW0v6CeOrn1DjqtZR46aHQrIlkbbJwYjIJuZnhO3UKk52HE6jONyZ4OBGd+xYpL7Q7gVj5GutL7uiDuwBAozAwq5kKmJJrEdq16WX0Bw6WRWwA+NANUFL+0O6y3uRlMiJXjfvfNRN5WUDliXNkvYcCzru8JCiOtdBY+lL1hMd0L9MS/xA9Z5b8kJfqKMFFCMSh2OtqtDEcncq/d6NY4FA1WMvSrfnd5NmZYISZzuWbhNuj6VB1vUdbAfUWaB5LbarMJAInk0up6OrfLhG4el1Yq/zXvjwaGS5Frz5ojWd4iWn3Hw0453K1tGwSzVlHcirPj2DebKFU0F/D/FnGzYCCrb8GtbSrciP+mOQCQN/d4/YVgo1CAt0M7s59VwVQXHM997nHIp+/2JU113xFvwxbqRAjVZu24gKZt8Eko+UHSHLSW581Z3K0g+W3pqgwKierOdwnXlPhPSfaYVpgSV/m0MwH/GQAtk0Zbdj1C20lHHY6CY0ayX/gjFrRR2u+CozauQhTmE47zwCyLvRqre3OlCHusPl7MSWEN9Q1AUznauCq+j3j3NgkyDcHrQCx22XcFku622NJMZgg6fozGfmBy261Odlo9BeWW5JBOvJyyXoPzxhpdVvAZnW72HvOKa/+hwIsPd8R+o9rQ==';const _IH='25b8bde16d0fc7445448d61430fdfa9f10ba309ddde5db0876cf73f06adfc61a';let _src;

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
