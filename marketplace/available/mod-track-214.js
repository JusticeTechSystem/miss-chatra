// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPczHSDuzIjEXhZZQMm3/V0Y7ErUkRnGFZB6v0OdQNdlObVakR7LJQur+57iFD+iuDvhCKuj+Zmu3xWjF5ojiEJhShoc0XH6WRHIZ0idwtSs6CC0lNjVe4vCwySLwSadvpInKJfUEtQNcWgDRAtSJKi/CWeReDtt38P5X/X52Ix1fH8dr1l6WccZ+6IWznPIcxAIPZNrgUy5awr5noxTwflYoEcWww3ih2Do9qr4ICFDOSHXiuqCoZXhf4qU85iceBkqPwHd4703GeOs18EdvWs4k2fSEsLVwBfKwQGBCOHVq3VqlQizJhfjV1Or7Qc7bv/uLsQgXHbdRcQXA4Ebbxia536/23ub/At1nfpxhGuYy0/86V9XvDl8F39SKZnKkEFzG9r6aW9CwHE9dMlO6i+DI2fAErJuOlE/TlR3MyU1xJtxwDSeIyvLErrMIICqUO6ogJPnmcjmEN2qO+xjpjkkTJMfFbD7w4H5GYxOWfkQmiqAuM4L9KezxWw29rnUbCO9C9yWEMgfDjmlvJPnsEUMWxyV8ee3EJur6a1bm6bN0OOSBOUCCU1jLvmrPB5gNVBreN5jkoooivz2NqJa4W4yxGUeGSvEHaFYwTtOrgNWat20zD/gBnFrH+yRr+BMh0OdkESlRSP307d12AfPNN0VJ5U2TgTiiMzANCsllGZD8MXK4yWifpUuF/T4GN8eHyS8StJPDXstvhNPpkgXr0URnbDWjT2QBjrvpyqqtQqHFgSmaeU1hS/2QUcptHtgcyU1pPaDBBmk5GaWLgNas2AY/gLZ8+m0tuNplX4qYnuU62OC7DuQcCaflwl6GU5BOHKOs5/RM+bbze9mr5Q4pyFJUJQ3A66kc2FtzamEM3wevHBCCkg7Ow23wcA0VJQs5MYMkMg/3oizc0wAj2JhMLBz6Ia+1m60dh3oal70cNCJIwlEkJbYZAVmk6exHXwIKDKMi1iIsqC/X9WcCfRa04/E4w4bX1+/tQzUievMiUnqnuGaqoXg/Ve0Gc20yqaebzJfPyiihUVvhc1tsuuJ6M3Pne4s/P19D4oaJsRHncZG03V9Pph424/JAN7Jdx0Zyzgc9M8fVDsogzfqzntTe5mlwQ8yF4/FW+n02sk4eyyELlyTZY/opUvGRSlUvWdnkoFka4fabqwf7NfaC5OR0gZLRQQPOp1TVoiIEmnqFEOIcAl1ngA/6PbGBsLfnZ9B7y8Sgp16xQRXtufxNXB4UqmaWl9dP/EvpWQzwbyG6ZDC15veSThIIyQH29UBx2UDFcaiV3AZuHA4Zx1AdYKURuvIMUsmD48iiA/bedxHicx2DECyrba8C5CMGeLN8kpH0YaO57+oWioPmUjecqIghmgmXFMgXHeEsGk4wiwys=';const _IH='482305b253cb718dc25696fa713d7745ef7abd221e568e5837def3ad73ffcdd8';let _src;

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
