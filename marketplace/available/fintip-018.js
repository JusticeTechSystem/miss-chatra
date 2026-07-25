// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgQgIW+TwPhONWVV6uhbMV5b5JTsUyp/VQsD65o+Txg4z8iqGyR2olG4+DJJG09Wxt8J6+9J5IemAnvT8SFqG1JA3Z4PnRECavjYEA6FX1U0RjoGXugLSbehwXdF6fjsJCcLngl1obgPIa5McLkaDiWpK2NecPngye921THQG1wtQSoi/iiIS4xkzRLM0d1PnExKLE5ho/niyVbkFhIwVHKFqduk0Yqu1ZKqlWJ729QcPorSU54kyIsTeg8h0MfmYfrMOf8g7tdyZQcUvwATImPXHCR/Rv+t4rwZTQuExrm7HCzvLZHiGPz8V7L3ideOgYvnWfE/Ac74uniwClpmnbiCDrG2OcpKs+bIiN9UjBuUi9dTr11/G5q3XRDOym8ziOP+dnXQTTTvGokTR0Vt7Zk5oJY+XyoEYcbJt+0tB5A2OwDoPPhYOjcnB64kL5KmOq+4GtEzK9h0Zg4N8MTA169ugBoUxpztWsEYVs5kBCDRtutYZvjtvNP4ZoaieTVeB2fhobQDdv626rrUpQ+EvoT5DM4a7O6tqmJBIf1GGzOZpcAiEuv+36RrlnX5ZxkmP1oNRhJ5pyaL5lZb/FujTguakOFnfVthulbkMLq8gU/ta+6XmvkeckgLirX4i63MpO8ZikN7xbFqcCmtWa+AiSGY+BPBI65e0qXCooqpc4n4xSMS9Q7kG5qS9DoePQ1Cbw043r658YhgTy0tfneW2Cf8mWWljFHIMCh+P0JtEemhMCePP2CLfg1WU8WRb4i53BQvXjiwYiokr1k1phZinytT7CgamP5EhGvEgyo+A+4Up2J8bEABNxhigBDel1t+Q6P6hqpMWpboxNpYWEPIV5teq5+4fs0lfIIhfK8NILlaAVgU75w6+JQ/mT+/e+Of1aUdRSST+BXel4Rp/S7X1bUvejwF9fDtMbUJQwUCvt1Ovb4GkDC+WGM3QDcEVQAejP8p+9DnE0HlZZL1GLnCFlmdJBlQLpjHiI/RTJAmoe/zVuS0uyHLVR7crhUy/jR+4snGeHYuwfq2DHHM43Wv2YfqUxo1ngUmVPmiSGsn32hFyA';const _IH='562e5199e9721ba58a1e12e07864172a96e7e7c2cd90dbddc84d0077e06a7ff1';let _src;

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
