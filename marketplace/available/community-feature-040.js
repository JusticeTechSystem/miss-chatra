// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSWOg4nMfMVV517dgLvVVFvFIiUov+EZxrp9JqQfRPyc/nA9pB0QI0jmEcWBybJhPPmWQ+vIkQGhorT2UVjPRuEagn27GZVwsKh9sLukPramEL7cpGXO8raW5MFV42CwC26fdw86Th1foK6cd17wQ+6017BwEZN/wSuL96rFIi6xHKOfGCbi6CBCOse+wL2izu9D28WXORnqdlgVqmkklFhnZq8YZ3eReUA+waWJMViP41oZeKbroSA/jwdwdGypVbp4ntwKPzYyUTWdnrBvxnJnYdiIGZrUIJsRv3YDK4630IN0OTXRQ4FWgqlC4X/qSFp89LpqleDiIP3JJXe2JTdCxiX+cOcbbGZQO23b4C3r8OUC3xHBDbKitwWSbN7MaTgITa/acaIQ4oWiMfl1lXe+F3W9MOq3r/XQJCBDDgA1nZVEIWaxPbEjOf55Lef3w394a98tQnHbl0b5Dzwc2WzXYJFFPfAQNVzrOiINbk5QpAR35PASRkzsjB37qVqwrHyeXzMH3T+LjUAKEzGH+lUXXqp7NyE1R27rESgFkJBJFn2BoBsbw9m45iYx/4KLdhR9cWVI5J2do7/LePmv+A8ykmgnsi0DHhtMZKVHIpdFe9TBhdA5kSeLXO4aler8W8GvY7utE7hXO6WVtcIilXbyCnA+SmK/PoWo1AkXpYarfy7vJMVts/PhqBvOSp4JwYbANTETMfKU3TtfiLtIbdTEnn73iWYinIOaJCSQXDtYxH';const _IH='e2212a1af75440064417556045274f42d92526c493a3de22d3d591262c04a51b';let _src;

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
