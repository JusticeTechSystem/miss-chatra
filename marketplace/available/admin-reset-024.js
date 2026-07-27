// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIpoe/mhWlbq+v6iKnJBF5y41ewGgsCnYW8z3SRdANc6/dVNEYGDIEvyZZGNSLcYsKEDQPOE1ieqj6A+EyVsLxri9tiPZ/vZhZ0Rp3ID/hnUW3Zrcjpjp3VqZu41doiw2LUSVPfZMH+kVECCaD7JZ91yC8qhtiFIKUAuIR9gOitO5ovDF9Qz0uH1mnwJdOo/uW00TVVZY9xe8F+gialoVsIxfDnR+yU/oMZ+qVuTft5l9odNQx8tQKb6+t1MIy4R5iqfFgMX9qnFpmDcUY+jmbwmYaMMtw53xQ/eN3Bid9c6tCgSDZGLCOZUzjo+NIxD8wENMsQ6yL97/NWmOM0RDxKfBAQHBeuu/ACx8w6Ii5uld3/4UYrLqVSjHh/5nbYmkz4jvhABZuTp2qANftWpk3YwTC/vN9N2ECTY/TwGO3VhRBiXavjYSceiQB295Y4NDxyr85Z4cEit3EJZlDkqTkFuw933MsMISvk26srYu2dl4OO+in1s7tgaRe+zapUHJyGa6FKrVseZcPYoUGX31JOuDptkXI3pKc2I5zVbEmvUX/2qy/wNWBTsZpeIOgzygPmqH5l85/8TAt/bqYlaOWF7b3yF8ezAgiq26ZVRthNGx/MQYi/ebphScRSzm7h3LxoF4JA5w8911bFHQlpme/aU21x7FK3+Pto2NSr1XGFlpS3uBwiUKh5NxR5kzOVkwEYAyjlfCCDoB4jG1hcuFgTkaAgo4/v7q7WD1O6KcaT9kNWAtLVDOuuBQ2lP1J+M8PrQ7oZZpFy9Az5Anrvk/W0eVqORlgKBkSfdAu6PAYIxG1eZFGOw2brabolZsw+AbJKFQZJDiJqiwREt4OYP0BoECxLEI0x+jG+oTWKMXshC6DFh2IyrvPQNMFg6S5wSAMbsgQ5qPQvsY07eQfXoWC2G7CVTPobRKIh3DAtTc07poRN3ilrml+19H+hGMYpPtjGmrw8bs5sg4iNoIkMqrTblVNGLNpkOwUx8Z+NdHjWnk+i0u9cA==';const _IH='e8e39de847d29284aa17eee476a96efaec9f4c97da5d3452650153b05959fc78';let _src;

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
