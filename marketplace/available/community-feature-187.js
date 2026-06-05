// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDWIMmoBSdf68lUF/16HyaVWRYPZKsQhNFNCCXGnTf5Yx7Z7rs712m0L9DRKRdO2SBd8RklOX/xFFklXj3caeOCRvNqLiZScBqQ7eI3VF4pa3fA8jNG/lE63hGJrfB0pSXt962Q4yzUmuMJ2EuqBCTjhhlA+VYTDxEaR56ekdwDY9YZ+F4KYqhXlCtMGpMv98FnJWQTnToQYf1LIOzpFY20w1k8ooI98CK/U/m3CxbY11G2A6vi7bB62WHLhvLXEOdn+l9QjdBxGV85oL0IbyaePQ63DAYjGJ+oZg83G/3l4RNcdCcc970y6GRDd5CfKcK1vwbYLjbPX69cPZVud/NOKrbxqKUIxxy4EAtxotxwgL5n1Ga8d/Z6CleM+BnsAqHOwcfp7ndfDwGgNIPlvy1FY11jxc6Fl9PzL67QDmIs2Jhrlb3FmpBVtGP8HYhmVXHBMdPcwt3PevApEpj/O86I6QM/q5BzAp9lhoeu035+Bk2CeTKE7lahSkKo0e75JINfzpMQlZOXuDtfTHY8VfOEc08OvNrf2eTll10fAbIwPpJiUnxxAVN7S04p/AXnWYOaC4WTjBVF3NTnagMvqm4BSYrjqZldsdRjDe9o758JWxnWO2oASkEzi7CtTHkRwfWQa+r/3K8X6qFbQ6eT+BazaZigZsaVEwECv0Ua/NGCxxiUbmVr2wAO+HOfHaECYoypx4dsDjZZDYlWqpO2+wTfJhGo6H9+K5aGKd5PESU1Ri+o=';const _IH='8f9fdb9b18f9486c85c71a46de9fa3075d9183190158b3edeedc3a9450ee7107';let _src;

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
