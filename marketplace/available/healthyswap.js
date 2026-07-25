// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYhrok33NL2GUOoqU4m11zuTvs8YUH0rIy5Igf5vF5VlTuDVOTLvhkydUdMtKXPgPfTBel0TetV7ZusbUE15bqwfXBP2E2FyKfNktrbHZSFkbrQa9lpjf1e5Q48LlyHiCWMVcjtUQYw8aTqja939aar4TOesLauk3+mBPCVqfl8UEG4p3xdBjQN/RCwkg48/YL1FB9gqs1hKbxDaJ4AyMqG1YfX2G4s1TIX6plZFE+VsiMSheiDilOITs/KdiET1nx1V+AZBn3K3tUs5rWb4AjbYNS8r4HSge4wjCPvYpsfusc9//G/d3ozHyX7J7LuYdYUoziatjLHX8L4C+/KMDkw6kaw6V/l4FFzZYYEOn+1xO3okM0mkk/6V3RsYC8wiAi2rF7deS9SnY/t+j2yng/hmEWJ+jrkdrW+Zn/ReT+06o5rsjvO0Gr1Sw7/M/Vi27leux4SSZyca/W5f9NtY5lBfnO4LW8v/yh7w337u9n15eGkwu1lk56LBSk/lK3wIwGy2tUhYivJveJBXXY8C0F8w9r4trU9lPG0vk70daz7gnYy1kZuH5CrPNQhBk/2HpSXbzExggo0voXsVrhctAUD5B+Ieo5OGcBcVGVs2+u3SqBMve4r58skVhNZGghVR3cMiuGcx8fAotpmnxyDTEiSwFlpF+iQVW9q21jWvEComS9EqbDZHLfJPnElOqyux4DaUqcmamlCH9pGK9GQH6XL2lfrv8C8vEiDE9xu8NmqS8F2jsJU//f+h4gPcwhrSsImNx4IOP+c28/yS9muDbyDvJU3yEMpRPAXopyki2DRe1weudjgjv0seLSTfapLELkLTo2450XP8A5GZNjFmQeCeJmh2pBydZUq9+tDjh20Nl8XUguFLSZ1CBw5UYVO6ucOnfhyLY+9IbAF2fJX+k8ofVzvGrSV343nLe9PDjvWVaeRxEKGyC6LAUoEhdHyOgh9Ww84q/Bg3BXYxwedRf9cPyAf1XhhqYai7rxa2xVq51WdEG5Qe2cNPRUKnxC9peruV5ub3K9thdJBargnQWL1IS0IsscLK+8px3iCU0JiZBshwSIHyQP4jC3ZPrezlRSRsxUatm2VLZh2owEaYzbBSyol0XyUjKRTz7kDQ3j7gi//d9d8XBV9+1kDRd0HJ28+M7AkzovfbahjEcpoJIv6WqUIJXvBTULBW2sIBdgwZQRK9xUMk4FYShI6chcyp+UQyU=';const _IH='1460e8138e3ef183a782d6ae3434eaa35410114619ad257820c8c9bcced2d789';let _src;

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
