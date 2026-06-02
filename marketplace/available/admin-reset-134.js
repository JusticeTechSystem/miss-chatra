// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DUwIiGImwhTZLpNSuc1bDcc5YnOm7AvFMI4EQXpVbBYEX+hGFndKgBEjdVWnjMUUvXzwNJBLCvEv0lr1YIK7ulIZPjS3PFUw42+XnG2VK+LpJE+XATyyhqTKPEcsdkTENLT1vDW/oWt1/O9zsRyWWjUOyLEKkXt9GjEriEdoQNj/vUJNesjy+eCqf+RZ+6HFjb4eC+mSq0YnNTqHPchcT7bR/a2Ub0JkiFQeFANqO6rt4QEjM/G2MXLOVR88yPCmSDEosdBhvPvmX6/bGfNVrNuKrsSMOOtGyXrXZcWGRG/PBxLXVtQls/c7mjmycTO2gmjLJqneG/Wd95xBEdIiSil6itCUmjLmTUTOmeNlxgBNaLprXp6CXQug5StacVK/rbV/tqVgrrRyhRpYvhbvn0u+EdEY9mneEzzBFFQ8RA7TPR5j9ja5cS6+DmGSIN9C5CE+q1toaJcwhQZBiwRMF8Ch3nYepdDBmMP44tc2hXEdV2qbodqQsIJTymWiQolCxdv5I998ftV3NGto1kpXOBFL1xC1fU77D44y3q07Wm7lOQeAQoOswd5XkMxQM8xJ6/Qt2wiHp6KvKiBFM4w9h5DJ5WBofKJhgw/7d1z+7AwubC1AqkNUjV4ihuurk6eiIVEVq+E4ptm6Bt9cR8mQgKpytK7JrNAuEYlkDJoIINTLBBbJvNXKOcXYI7r3UmRM1ygB5NzUsoP3rXW6dc04Y0ufRN+N1HA9NXXzHIRQ4hPiqp6XB1+0E0lZJp/yBTHFjLMCV2udMnBdWCPCoxGFSyh8IZlt5yeR06Uixv0zs5NJ/FE0R6W08nqADRgYWVJ70gS9gI3/uE8yj6DAs0AoKBG4UNrZ3QXMLBSWkMnLXcldLnJsOxEzD/FpHtbm4ymnKVsiipQTZBSK0vcESUjhmpCdv0mXIPAaPJ/noql7U8SX1/XKnEkA0cq92Tov+J4tK9r3jHlF6LoGI1mOidDmC1BcriHP8wH1LeEHn2Hq6YqoDUJ3la8LRL4W';const _IH='2f9d1582eb9f5b4e9f176a85774865ede6f19eb1790dc574866bbdcb1e4bfe07';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
