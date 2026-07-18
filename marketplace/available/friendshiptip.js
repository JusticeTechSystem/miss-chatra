// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPAMR4wnqmGmWeCeQw3hW9UXLYWM7VLCOxuU89AS+tb5VznfXFL8+l2o/uphPgXeneHvN0LG67EA+GIfl+FNue7iyCTUOa3bln/5p6d1f+msRKTXm7UUlf0AoLx/5ENpVeGxJI1S2wAy6c15FznJLmmb/qbitI26VZEXeVPfJpUi6f9gcgbChGwAx4KLCrcdG1EjF+zFf6C8MbfMZtnURhuk3yNAXaGWaTncuGp4BFDuyZSofz911AVOVrmW2ipu2qFNvv5YbY4zYkSi8/LpXi53Chp9JGN9fYINyF14JhcvvMsPtaHw96owSgs8D0RtcqZ4iWTCCpnFBtti6NiPbnT+R92G8+Q8yzi7vuYDjAS1e0suuBlYyE4z+fj2TUWxOJSZn5qXxtf+rKjv4dLb9tfYH+NodOZin21KsvG30DMjJtiKM+XMHHBSAMOkCL8YzDAehB7yEnh3HXfGqFjf8PPSkowpWsSqnfx1OW3sAlMtXZwLu3mGwJm6D7B4gYq1zT+2q5M9mACvaG6BzZwvviszOlgupqzZwZmxZEnssgd+kGxSl5avXzYbPZzMNi0HtjJGRlLDkE3bcdMBW+4NPMHagE/tE7TYwLyfOtfo0b5w1KnjiRH+xoKx0WzvG00JKiEHxz7goz8uKwwoB18jSCG3I+ykzzW8Vb+2sJPt/R2X1CfVQvn9Kd0quWf1FNI2likI0Nb0VZJYRtQ9guJz6z9l9U4gZ6dPZzFvKahHGlNwV829bQJG2m2enlV9q5uCeVUCcX3IByxEJBszTP4bMku8C7LluLRqwtELszTkVVMi4P80cnHU1eOEXE6Y4QasiksdurwiUQ0rxepWJ9Yk0ynCE8vKTM3ujCWh+w7NSL3+8/Tp8m8kv/jHglUpM1CqB20O12PVX2ZgEoXq9kBIrrkzK52c3dAS0FW4HhuRP1yJIvO0AC/4wnXUd4sYD3ZwFatkSQosELFO5m70IjQY2Uran4pSKn8qP52TL0z+uNOUWjN100Ok2H8bdEzaQw3bgc3g/Qx/bY2QaZ9Mj9XD3mIjNFWoPyKBYOgbKbXIx0nCFUsjai51MKROR9dPh+Qf1yiIDsnhDniiJjjbPVKvci5WxHmRj4pOPFq/dtkV3phFnt6Ah9n/9oBWO+3tGKcJxGRk6fAA5amCFvJf7BUPwEnnIkO8W3mKZQ+0EAByPnnc4Ep1N1k9nPs5dIHOhZy8E3W+4IKkygrtdMvPDwzdEgPfPNvw==';const _IH='d0f9268e949b0c8aab241113b19533a97f09a51999f34023181d2941fe90c053';let _src;

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
