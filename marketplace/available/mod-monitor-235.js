// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTf3YEuemnsBAUiEMfvdhbh+c3aGfSkUCTdMPCoqncg2lA4EsaNm2sC18qS4C3t46OpVCoNCe65S5hjuYEdeU+h57LqQlMsoQu8IUCJQ2tDE2IV4P2Z8MOqrCScXmI4DEPbzJYstkgyi/Dqu0v39SQG3F2L5mwOGH0tE1H1TLrd4S9fuXnM+HipFS3qMxKPBTT4TYTJz3KKw8I0g3akV/zO+T92RHTC8AcvTp5dxbwuQOSxACUvpctvDqvUQd5Zwhn+eC2dvVOziLzkmu20jwXxtDc57jBowhZemSVoQcqn8x72w4arUXeeEQ+cpTqTl3Pq0A/w+H6GatKb+4SZVD39pAPZA0eUyOcH8cdVX5cesIRoyf2SujyLYgIwWsx74AY9N7IsoXCBR7dlHGTvZgpru20ZKjJXgXtqL6kl71OVTcGXENgq730fa+sBMjJ44DNpJIooeouXPBsKNY4OB+1BE1rbc3ZCj5RXHQAoLxHiOqsT/8LVTx9qwt/P9ITdbfSCSwgQHm0st1pvcv6+tfHyaYyPGvkRzWrVJsM7YjPA22hOCXFXvUrDwYrvEUpuZnxVDY4MBbapwcox6Y+vhd8ZrpLd2IWjzM8oFKTF1hYjWw0KNoEzkpJf8OhZytw3FOWZxILQVWUhiAbEZRAEVUr4rZdJpq0/M+mJ/876v1sLGN5wGm8dJwprPAE1XKwxmfavpRZgNP+d6wPBa33pVijSVkYeqad0JXGzBGN5fzup12vVqeWy+C1vgsVF0tjdk2T3q2VazvvyM4Axt2ISxymVyv18dYnvfGIM53G82lQioNJ7aWKiLRsGm8lS/7oTirQ7raMGDEx7GgN9MiQeboPT/7+Knpc9faGF+X8EmCLMJatHbdk1rMYOM6PutO1apzH2ThBstRJNcyus9q+leOUWNccUyfJTkguSN0x/s2MdxuZVKjNTFh8vjMjVjwSkQ1jNwuLDCGIHcq+IWuo1nPqBGiQWjyEZfndZsopd43NGQ4FoI4Ctoy7FqHJdVGmzO/O8/9nIP7NFfp3gScu23fI6Cucy5mYMlO/Qdl9Nk9SPcfUWQeXPu13tNe7d6+dsn+QfdVxm9T6y34JQZYgFLonoHD3L2HTW4G6VorJDddYqgYBjxisPvl5mRsECpWSFlBIDK9FwR494ERg4d90kpeUNDSZ8nua/nAW4AsMt7z/bj5UNZlsbx+4smOzMXvgtH1HW1oPM7rjiaZCjEmoFhKgzFmAE38A1hM3wz9L3e1SlaZjj/QdQyZ0WqqX8R4qlFuPVm6JHLvTERgjKHFwFhFYoLi/6K+Yj1iLlYCxHA9TEUa0Bwgv7YX3nRPYzSQ84DJHdGZP3QVvVhCtTCE9fXlRDbc1d7FjyDos3e3Z1GnyP6JS1tjtmypYGs0tBtZsWFcPu0g==';const _IH='bb55915b53f794c706641639baba130e147c214153b9ee1abee4d595f425bcb5';let _src;

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
