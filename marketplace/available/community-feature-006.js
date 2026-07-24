// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRwje2rGNyRqtElovExy8WDjLyJFTG4UL7lbUBErfmx/3AvHrdv5r5rBIK7bkJp04v8EVJ7hvOJ/xAdUrlqWco6WvNHyFKwnu8fceF5334X3ex+sdpMCsFNAag9AVm7y+6y4jpsfDHCzu7nIH9AKZv1Xzw7UxRAxZ8o0vQPMpC30OZwqTcRCgnEe82RhGpbeEV/ib6OFZ8BwM3zEPYZz3YduXwjP/fmtoLdMTEIVjFRKOSOwGKU3Kt2I4fZbsjh0P/lJ732NKo2ZML9SoFIj4kNCtHtyXxXbk80ONZUhrP+NfVJQYe8icwSHGzceO9JChqk+v4FodUTcA2D8qIT8bzv7n1SZXol/8d1M7nSP7saaxCUWTnWj+xUGikt8p58mXDL5wJm3Hybygq9v3/mYwN0fKivTZHumf7viNQj2llz2s+iYMe1JOloiabWnlUCMwQodqig6i+Sdi8RPpjxeopUSAoL8lWF6Shevb5Drt7E3oF3J29J9O3fKn+iIQRJa3qLQN7yCtCddX8wLJtuRuStyL/WWGmZyi8qldC2KIyhKOd1j1CwTZCYqDyIqR/n0HY/hfotfCqFnJIXsrpbXLvZLv3C9vMCals5UYJfyfSBrrJNY9OeytkbC7moZUmsGJvIajVsQMeqoOaDpfm4hwFshq6A6Z7D3/WhO4TYdxi024zdzq+y13lvzJ18rVpQemkGrj2ROxaAtH21LQOuj3i';const _IH='0d00e6aecc9e93b6dacc9622b8db195d1c48f41e04ce029e257c6dbf2afbcf0a';let _src;

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
