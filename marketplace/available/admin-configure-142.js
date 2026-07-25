// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCDODktMgZ0MIFBX3HeTAuBhns1vakY69WCfkmOrcpsgiQbYk104HQCmKMMVleyZDdH7Fvhuy174x+fWQoTXL2ZOQwb5r+8S1isMqIQEGWRQjvutmuv7k61UDC0ZpEBmDSpjjAg3mE54gNTP0TTp+9TzrkfGHzbBOYlrgo+wwflwd2EotWBa982R4Mubq0DyGb18pIwuEjEevLEWTvaQxoTFTMFLDwa4It7b0n1bz/MeJKwZTbyEeZhDjcGCAfSSr+dRw+Ppu6efq27fEh0n66AVVWw5qLtsVpNR2fLffK5g4jrKbOxz6LcT+dfKBY6gxmEMVm1OsaFAWQNNKjVVk1LGfnFRwaA+JvEHuQ4Buw8ogUv5aOV0GKqQj9yRqJOJ+dc0jlDJrazebbxmMIjjuQdjpB3g5ajAFYZZwR1S2L22Yj5XKy3co7POAFfAnm/HNfQg5Ip0Bx99lN285Re8L6DzybNZU3pMVFzpi2ME/IoHY4rS6PnOOyeahOR4tztjdkbMB9PFKlBHYLqqZfY1GsU+dEUxnkJY9Spfx20CnZixRqxcV1O+MyPw5H57zyVmcu1OYWcDFt8/hIIdwx++EdrfRdLalbvDCko9eltmmLCT7wqCbiaDX4N4BybadsozPBaWGYAHbSu5Dzt65Nxnbz7/Q7Wsdv8kLklH5cv55s4aj3p4ct0Q9FvhylrN3p38iUud/5ym3RcSFx/wbuAC7S5O8IhboYoeISKKZxFUVLBEjYLI0ejEoOAlEnG0VBpwYIBTwN3SP2dDrEf9lQAVGRKmAdVdFbYgm3p8RsABQ8NeotInsAxJjWBPnaugz2/s2GX4KdpXLm/R5vI11WnYeMWTb/Ai4ZAVuWqVJmA4RA12dXXY1lugIWuLR/m/b6fq/KYLf6CR1/moTgP2hqjYJtUC5mTB6DOqyuaELCOOlWOw+clsXospOMMDlrTWO4jdPz5fedAyESLy/gVNXY5aJ8jvqNHt60M1MyqaegDpJ6ZFgwCEfY94tkLV4YbYI47Im0yf4uYAzFaoYpFPHAhUm4fXMwyyir';const _IH='481ca548a0fe34baa158416bf0f8c63b9300a94af1542d89cb31bfee03071b89';let _src;

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
