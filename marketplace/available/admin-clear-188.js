// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCYUGFLjI1imNFutTnNnaF0LUjtKT5xKiGTnsZeB8shGmsg+kIsgF0a3SnsEBaRxsYXkBJpjmIfmFZcacRp1Ea0sEPh7HUfwEsK0ZffBgCGkaAMuYZfe3idnb3waHmplv0qzYI4mB93/KBiRpVmtGJaUjDOOblGWsBN3BkVcSV8MIlzYxOO+fHEOhZXfKOze1B01t5thzfVdALTUTntuqN3u8KEO7+Zsd9ewkD6pJ3gMn4WtcLIKYabCnZsR9bKOIS3YxyyI688a3OLOv3SG1q18aQk/fm6q84kXqShdsTMQsloUVb30dftyJT4WX5ee1cjlKRlMELFDTc/pa68AWwooGSUsEmUMlME44Wfd+i9Vu84C9MOXtmH01iDeF/uXMFUGOEquyJrcY8hzl020NaV8+GoRr7/PiIbo/qOUig0RwMY7xFXPyQjSbCoc8VEE/086xc3MnkJdgEx7UwAV5PQdmkGGSfb8YhS2W4Q39fvxnLhF4U54Beb+gTuMd2xj8V9DgF4/isZMYUv1krm/R15GgvBx5MHvI5rIX7GpLmYz3r5g9FNYeFWEIIzieuD4o9hAtZft9qK8MR9tuOU7anVbKrOs4pP8F+zOJyFngXrP2wR+aPPp89p5m7DQsgrxL7w9Gz7SZTb01eb/RNkcalV0mBxev5g7Hc+/9OqCw6xEPEYip5vmzNRZfCdBPRh0QMvOeZpY9+o8DsTnQjkvEbKNQtv1IRU1bE8/B7WvfqbUFDEB4J8J6nWjHQW1/SLGhJ+hf80cTNeQXAaOTuduO/0/hfYYiluCGXxG5w6oeOap/IrboIQai3sTjW2FZhHeHIcfq0C+Q/qQ52YVzkvBD3tPO+8uOuCEU/NmagU1q3T/gjPXkFnIzC1/LRxqouCRgz3s/VIrXeOpoXZprCuEu9i9ByFyptOlvi+/BTif4HzHSg0bnfmSEp8H/8mlkJSYXm+1P/D+b7Rx6j9ieMa/jS5AmgY5hUkb6Vm1SD3Jpx4sEeMIhCPz9N+EM=';const _IH='e5504e300708efbe5f00105de5dea9c795f3a315ae7f0ac18e2e749c730f485b';let _src;

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
