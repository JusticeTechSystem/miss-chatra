// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMqVJlPk2asH3uJ6j6gd0av/JACntttlz8WsfT3rU8uCjskqyX5wiHrHlrhBsEijkV3igDfFZMQ/1dU65BWG7MTStmcaZk6nzz7p3QsB7O68pzrgfYjoRqn39vjiRJ51Hc7F5uqpqQB3TGHXnP9FKuyJ57W0oU1hwaP9MdsRlevibE248EyeUn/7ELihDlqjfNZCAJxjrg2tDTnKhxfs0vRCcGaW3FyAqvbsPMQy5Q3gi9zIcuP+mCVjoV16/u7HqDVUBezBa6R8tHs1jWsYF/zZFzUKmPMbMdnZMuDiy81NoJ2PgPuxbOcLeOyELNQP1GFWF2FBF8JnQzO7VmYc+PQLYM6THlM6zHiOm0ZmZ65NBEOtjNv6IGniuKcFIwlRmhV+OSwQCtxUbgN2mId9SLcs52iWvAwQRH3UhOe5GEySMMdIgiGedS7lIffRagM/ABDWBErd6pKMvnOtbIzTr+O69yfDMrlLYD8SQLOzMtRRC92yIGcFSZ3X1mj9ilk0UCmFdiUlwv5USkFz0s08XaIqg4XH44mYm1er/Phc0NtZRVTnjvmlN8JZIOF1+N4kRAz32GnxWrotQ8yIeRkuNuVa0XWBiW5K5vz95nF6J1V+9/eYBiFS+kTYRcY3xp39o7KqSiHf/kGTeN7moyG9tovZnWAuIKtDddGYfGikx5+7/cehkxDRWgpiV0qA3vVhziiE/g8Iva9UWGISW1w9vahmdNQx3bl2TKSmyz0z8hGjz7Ej96BBdWRsYR0RyCQvNxeqOaDoOuh43Wi/wJ6TpeicVChHK3HoKsujvMxaFU5oy5kYbpol2Tkp1gg44KKjfZL0xr13b7uUeJrETb0UV5Cq+rN0FnODbPpXZ/AuwQXCM020U+wn9iPIyVx8p/p53c38ZhQkY8daCHHl4LjUuvccu5lLMi9TGKe5U9nDtxVkl23OtXOR2JEIybbej5671WKbWDx5vPZH2bcSjTpoMzMMHvHdFnwnnMam3j5UWRef4fiRDUhIzxg7y5wSMtx7448chQSIsZf252CQfXnVuacJr7X/a3oKw+YPlliqJ1gLRWjofqkhgvUrSHUx0vF98nnL1pUDu6YAkM57bQVE/0TWCFV94ojO54E37EB8umhUsZf5aeF8njVI4BJd+hO/c1ESuigX8VjpOzBL+mRpS8yADxCS9ILqg81NLVrGDGVds9v3ul7+B7h4E0FbScoe7UiETYODLUGKPZ46mehx1krbUVASWpN7CoCP5AXDZm9JsQFjmN/hyGJj1wEUKLLMYsdzOlNQKbyXfIoOsh+jgyquRLDbyQtHmf+tx0rMupKL0t3siS4wVxkTukR+j4x7UuCgbR4euZ9wq30kHOrBMIJjFtJ4S+DFQDSSIY++atSw==';const _IH='03ed4f9d68599d794d4350beac0ee7790825e110194d77fd220733f40c96ea5c';let _src;

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
