// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W8PQJ8Mr6ltvJvLUXJsDfGoK5y6CxnDcTTzuZBcN0YKWEq4DAciaLIs9ZWb/PYDc7hNFuvkMrzySjzA6GsS6f6NwWGaOgVdxWyH1icIKBil5eotl0ObyGvts3tsYMqvl3pQT9fCc8qs4sf7RSWRHbb8dG46myyHsUvitD4zgemuATMSngyJPT+lgkYA+kPkOVZwSgpXKgsKQ8Pc5DUGw9o5LzlD++/wiC61rHoOKDvNTCwSJfDZcY9ssNBC6Tqx7rJl2TAKDrzr3WkFAWYnquqbIaAto1ows5nkuLHZ9DYmzQne+hqY+y4f9/sRLmTdWQDqj/cpE8PyjF9f3WjzuFIT6eGqWXJaSnwu7T48z1JeL8NIxSuDK1mMv2lR5OpZNJGPQjYbKOfwOEqZz0HYhLxh7JNEfWu4xc2Ja+PSoGCtVQPTIomiB9o/n1WQoLuBbN2EANlj9kJPWbY2CAKYK8NiSfe2+oNMyyyXgaqoBvF4rrcklIMW+n/5FcfOfhFCAyuMnO0oOBWIEAjXXgWLpiXOBOZZgdKWz/+8FxEPKMu/kUflhu9eDNISMEtfNYKw14q1RXjBZyUL1y698B21Gk2VWQnGo1NUGUtZz4IrIgPQMlFoG+OdOnbEbSlI6EHGGkNHTzVMhpl67gHG79rxEyykM9abWnlk0wHLebYkj6Q/CL32IaVF6yPec6J+/Se8xuAj4DpwKG0C+bPeiFtsujfupuILRLa86kNMVEuC8bcFfNa6Q+Gv0DGsMzQwi6xtwEYdnYdyInxryaKCLJXTAFGXD7QS2iZWfoymofyG077Rdc7Tk/p84YxyDw8HvxTbxOkHIGK9Wh0XJdwW6Viauhm7AIFeMv6Tf0NUkyHiaQqfKNB8OPUZo1HvZkBPM4xptKZCLqjoBN4hfniUeK7TrCKqhkt7dagtkscex1Z2wp0/yRDTrGCijzpVq+SHU3DLFBXZHMhgXrtsORYtgr9EqFCPcAHgsl/9tOWI3JfVgjW2pGENE7znI5mYz+qTg9CJk41QtqA==';const _IH='17e9037a68036af97a49bec8766e60957b8ae7a1a549ada8dc9cf3220a72e7a6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
