// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaKQ6ztQXD/h8HmWY9aFY7HdhVxxjRYPQom3FyBCR3gdHpz3Zq4sSfkftVkNbJ2RtwWPj3jofhO+SHw69bQyh4Ly9LnifTyoJc/3f8hlPAf1Cuyxltc+ZxnJfZrkk6l2ZsuDHcHY3p6Q2ZG7619JZq33KetVkff+aac3HD1FwJ3Xap7HrFwxn1pMRNCPUELixC9ZdHpGbM5SvdnkUn7F6uPR5nGQFD+/Rd1AlNDjFxutozKAoaiIJX9MmOu3OI/V7Iae5UJnPtnI+/l7TooIYOAN95ol2EypnSO8+uxriwkT1/jcGpmjrZi+/YHYuv6Y9mnV2ohemWl9Sw9pNBevJNzurfxl11Ulj4AWdDoZwydqgxpwnlvAUTEW50atG6sj4hgrkQtcT82tRKn2LHZUiCN35xv1/MOTmDB4E6dsYdMZENe1gdk2LjR2ooimP4RnMt5NyfrWVvTEPeWDCWIvCPZL+0xLdt/J1L/BPS/5A7HZMV3leOkIIjPqhGkP87zlj9jRk9IJ3ENZ0W6MpmeByI/40ARJUal3VLhnhK98zBOOd48Eaj4EYR789hvKGDo+gmKYP0v3sxDtUAz552CK1HPvKxr6pwaV2VMDLnq0uIEzpJzAeSNiyOQW7G0mjDoQuxIlritKo1nQFQn39ICHAdFn02QPlhxARV1ZvkUS2Op18qpjEqTpA2CvVc6QDGp+Ja+2NAa1Dg/PRmuLP43g677Np8EBPNc7YRUNLd7ppL3vJtAdeE3mzQy/nQHqnHqEzljUZYWxCLxbxIgyvfqiyqd39lsD9tn0BLRgf3469pYuFG+BYANbo8Q2JUaT4lma1BPS0lfJ7vDuJPFDwavTCz0QhB3wV7sqhosCRuUWhZLuD8vwQxwS5qlQzyhH6wFRFBwihrwxWledo29rzGgOooPuWT9xWlhfDNYuTqI1C7dOovCQ+5TYLwylIXTA==';const _IH='b240dd7944c36a0e80b580292a56f077092a18670f3aa3ae94ad74259176a503';let _src;

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
