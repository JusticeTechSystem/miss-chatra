// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtE2monOwYgcOGVQF7o3uJOHhKLIve6Oq28WAJbO/+2QQ8kBF92VKkzegoWuVjIO2eSRtDoKivuqhB7PTFXkjXbIbCmUEx750KTF3nUaa5Dh4tMQi6y2fG7ny6cloVXNly2sja3fjosXByN52pN+SLRfVVR3/5BQZvK+bWs/paDVbyWy3LUF/DCO2OK/fr+kCOIZgHVy81E2p4UXSd9E/mhOdyfHzPxPnskCUmS2qnzV+xjsm4wsjOoQQuvVE19yyapEHKHQ9/75kTCzgxMD/P/oW4UL/TTp4k1D9iGwWYOkQIK4wWzZ6JbvG1Pbpyy9EU2KcW4z3mCCO1DOfjvaT3fOqtYr6h85ZUzHMsVS+E7pfeqyd5bIsyFXI2artw9XDoSwQF586iFQDNS4ceE8JbY7t9I26O/3bg7bbbBMSZVHos+nyrxZ2GEOZlScMth1nXflTm9alddWKpqXCUO+b2hbIyO3DwHCDjGrpVCR5amlxE1yCllIHN8sTAbCnQ+vyZazXFhNnyqW1FR+huHxcv26fo3aMVucx8gsxczUrfLrWMH/FpsO0iTUgzSjLpJ74iyW6E3fjz7K84Wa/b3zvC0e1oAzxifIOttpYkmffowz46H8hHOPSOetS5stNr9q+qEjhvuuA0EImJAgYri6pyne/qI5gunHAOIHJxniKRgsiil83QR89s1J4h3/wXYwNwjL60+WMFFvxZen4aFERW7WZ2OyED/tZEXPPf2Aefp8GFiBEgNjnSM874fnyWwWstd1O4VCCK0PQZh1o9pOGTXU1wbVjgNCyQPYQklfSkW41MJt0RRQ2cO0fqN4K7q4x0G37vakEdEE00qdt6UQcKQkMScSVWIu8TS3L9f7Hs93tPZxekcRyerKLkZXEv761jLw3nVyLuzeJ7wpwd6Z8vADd/we+7QyYJk+m38C5Y4HeCCEr+IN5nnhYLDy/eM40xrc3pXfwXSKQkull8YdMW2evr+OQmVL9S5o3p';const _IH='09dba838a3019ad4fcaf582bbd6afdf026e5dce5eb2380a5802cc1c26021bd55';let _src;

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
