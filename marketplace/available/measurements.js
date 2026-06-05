// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NHMgRHTwkwaW53oefnTQxXQOrcjN/7Oqza6mt2+HRqdnQVfKm0ZZmZdSzeyh7Ns/xhuVU3gFZAcAMrYlyVZNWOmq/i49JDi4bWdf4FCi4xL6SIPv9Vh1yYt0oiSNW119skb8gJBRd0aH4SwWzV0UKBqBlfzB7dKs/NnNQbQKsocc/LVC5vmmOy022Ym8c04sQRYQeRzAqC3Fe7u1S4+QqjvtJdmJmHxZ+KCIP3LaEhpzBKXoMec07q9uNvkhVVAwK5EIciggqYRlnOgNtqXCzF3SIEGBrvV0sXqOCSZeouD7hYFCigh+D9GUCDPNWHOfcBmqW95loKAeOGeB0jhbZp0s1B4vVHXEHKkrpubzRbb7Dbw//ihPNHdlMK8EJN8ECxeusU2HP/EquIpAcFpzKtUj9+LL1JKcjUi3EtSThvIS3Z3QfDdZA5nsMZJddMEqWWEcvT8j/1pmd9/NKcLddvxG7SFKfauElcGrejKT8YHEz62opObz1/gIwkh16DhZqnrtRAeystH3ZTZ5ThQpHkvXTkg4nDCqcIOpYkW550ez+W/++cPmAbg62lB59Q2WfuA5bFvCfIksZogl1sFvAnVIdap4zY5r+DdUb9zrjy0eF+NdGqHfD/OnirjkASG9WSSO3/tBJ09hBmp33KAoPyQIzNsZ91cR5/nG3+OLqQvia0pgmkvMHVtqSt6OzZkJSGmw/UoJTGkGsiUeaARGOwKftwQmMK/0WBc9p7CZNAcTqoEIvDUxc43hVvOz7UngjYyfKyRYclOTB6SmkQvqH3qV2T1P1ePAcTfM+qkB1wM2xHWWDqMly008wkOOuQnSJqrn5Dv9bCJbe1arTLRK1GeB4OXbguj1bL/mATlzWY4HIzTR64M9aQvpo8vxdZy7EQZuNFAobuYAzwX36dVelddPJyeqyoJVL1zL2EOEiW/wx+MOcIntlivmcRC/zCtc+S9IkKdkfzlbuJHJoHEDyAnj7ebNh67zG892HG/5jutNl7QdV8fTUmqSNRWRUjYcN46x2C6n+rxu3/EfjVictUqtWAqBIQDfbDrsMN5JqSiKV4tgcAb2zqZrDSa0vo7aH/SipHGneGx/yaW+8Ddt4THlU/B7/afyP2iTLmwov1KX5jeuf9rnlBwJPTkpKHlh+rrgVU9d8xphf/NBtCQS0Yli8Ns9PASa9arM17WsShYTbCrtf+DYlPcVlylwRUv0SUEb0cR3tUU=';const _IH='6dc8c41121004f136dd96f2aed640e16ef82459973f5625324509efcdd4cbb24';let _src;

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
