// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8kshf/kPArjtXABes3TQGQUip+LmGtSdlw4cAWsSJtOQml8K9rDW9vF+fHcHidYpNavjt2zbqW2zqzX3ToiKg+BKRI0kuFXtmE/AGbWAjQLcB8RuBntE0+1Ro23E0nHacFWuU6Mxfgv00O8SNGD67Tdys8V7am83hWzG7V5fhAqBwr24djzEAnXx49epbpT9EBZyteqCohWZflAq5RVWGFKfdeWkXgIrGqHWC1CfDHZhcyEPvqe/Q0PS06laXsQm120Sac8xT6HU2bRtxu5oRcWfv0M9JigAI+WSNiGSHiM2eqLdvKZSQm8s+MdvNKX703ihUetYnrluwAKiXmmw2OaE5xr4dcXW1ILsMk4u9n7qHrKXr0TO0RKRAb5ClX4wl6To203PYeqcfmr8yI8et7lzILdO3E58A/9y7HOb79PefJqE1OEvxkG9Pn0YlutnVywXe25yipfMXo9WielCJC/lCmnA6vm2gpc+W6t9OHODFT22Kp3ItJDXThSMYkByw4LqfKDNWI65OW9hNUkg6B9ABQfg2WHznajcZcT37hxAyaUzt5sS1zgZXihK+TwdfcloINHC5qYB9+VsIvavzO6DdAw0PEQ1K4qdTCxGXbFwmmMzN9S/edwCJnjAPWxx12SyBausu3z0vezRfYQFojP88FDMEGnAmt7MiwFRnfYOcSuYKlepAePtFoT4S9LTPQgtKbqgJS9V+Ioi6oW3SOEaijEWnMteCR62JyFaC7j5JS8VbFw==';const _IH='34471caf939e397cd884387b85809e897277be3ad2e44da183545efa8b816e79';let _src;

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
