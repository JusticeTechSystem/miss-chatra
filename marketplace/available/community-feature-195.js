// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZTuTxjFad7HIRiQMdJrYHzeK6+NyAFYriklKNvWyMbsZihjuoDgkgWg//VG0dF6RGpDAPEwF39LC1NDfTtKRS+7W5/oSekBgfuZww+CkJxNUIUaeMFbZrHzA2bgfUtsIfHKsdglc0YI7K/2HMnFQUYimbKTlnrZ77tqrakCpJtOSa+gdhoO98Uhklf6KC3cxSecaLvZ5CoK/2gdQq75KQAxNPRY9iDFO5kKv4bk9uL7Nd1e+NEQtgWZWWN27Bi2E7HkR8c2X1JdL8VYZSB/h8hhOBtLvb0wFmqQ67IjwBmR3970q1GQJZGPbFafxqq0njpjcO18toK2O8GDxBA7W+Wh/GILrFSsx6ClESWQPoQEigrOdyWfqbTTq9P34ILQcyJtYAxYu2rQPLsFNsNDAPOmBSzbJUFwliZNmGyCySZaOGXsQ9ecD/e0zRKHCXtmELQN09aLufrYzmmFy8D8x6Jm5A9nLNSCosz6Quw3gzbEK2fpfOMg4s8x68V8dZ2b1mCgM0jiZS5w7sl7f8UCZYUP8SvyJgjVniYZfjFicEuah559AJG7h9TJ/w0RpVDishS2qhOuRcURj0G7hG2cGvUokFtElzZkhO67e6V8jKpXr2uizAdNdTwCwafMa6fQHPtmUYYjaiLCyax1l54/vFsowSpN93zMhrfv0sN2SLr7DqmfwGUyDb3qMxzLDYK5GbZUtWJ6pP+3mTZgzERZ78HBj0vL0eRi53fBNw5w0OTkVYJ/LtM11Bl9A=';const _IH='172fa45fc4fe03e836e0d257e289ff929b2373784d4151f368e6a8b6d87560f4';let _src;

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
