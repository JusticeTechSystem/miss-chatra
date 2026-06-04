// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fol8vUNCG04l7auFphFoXoV63Vt5+mBmRzotnU/XC63SJKeu8QZVsHM+f18Fb5rEA4VqAO7j00ac0R+vN+EqmfewXqBhqd9k7YftTOFt7DTCf2o6V2DRFbl655HnpXJdbxeNsPOa/n0QqXimvNMSCH5JQu1zX7qzUG2I9fNQuzeDGevDseEAqQbv3xOz7npJvXJqTIym2laTIhf0w9rl1b9c43pvr0i1qh5mTwy872xMcDpC2BQSojmRqp0CBq2Zuox53xbLZHm/Q+1rbWq0RFIgI5A2VKeMXP6yAIPDtB7Y9NIPUsO3q+wYMRGkqbb1q1I7Cr73ur2DgvLKnfPMGJU1UzW8OdBa7mkGMKcfDqphegAqWuwV6eZlbqpDIpyy5TbXU9XlM5t7JUJSr5k0e/4i0q/I+qCa1nwpR6gFCzOk4+DH5hYTyMj0hIbXby6Hn3agH+S5OFRUBtCuGmmRZ0qP5NDS3RnjKIQdFTbfKlKgVYeYIvsv4Nlrz+rReYvuxlyNdoK3odhcxHpnNRSIIxr5B3QK5lJTD+L8Z5gF4SVQXgsFnUj64Fm4QPuWE7fuPpHnHKS0OJcgrWPGym58JjOHCHZnDpvwO3+h5mbZu9XRUyTbfAeTFyIpWYUl0fK7u+dd2Y06wFogLjvtQTJNYO62Zmq2wK/2dJSpANi091cEINUusewh3cveFvshjLPRPg/2k43ANfpXhN6TN3c5icPZTFABeCl+WbwxdYzmFUbMqe/dTiU=';const _IH='18d8d61091ccbd5771b70d56b3e6d96297b7dba4e75fe628f514fe530cbe5c01';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
