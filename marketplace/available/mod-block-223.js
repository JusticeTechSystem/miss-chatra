// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ECjREKKL41iHzatU2MOexSKglYqZKmMHzTulDJN6BQ/Fm9zL+aJja2jMcRKd6s09GomAD3tzk8h73qpQBcdXng/kBFgmgX1jvab56Uo6kLk5+kDi0EjfOljD28cNdtELZJPOIxS7Sj2cUeZNoU4rf8hETjg49Dok3sajsj5A+l/PzBQ11eiN93Xy9QSOmI77ug0Y6Vg6Z7K7LYl+qWuzRmQlnbvehBTXGIAXXe1I1o6lWkGbIn3f78zQ0eWH7JVLgDic8+MfMCzJKAATRM42iGwZigDrOyg4hsdfTaqKubzEIfcTsibSVs/BQhjDBJ0HxGZDC+6ck1+eCLVWBXyiFdYT2AYU8NSMVspIE+c6Pssmmb/UMS1AQ8MZdXOcaYrVagaZpQ20MqLW80LRE4kpOFoJBadEZPrN68PWaRFnixyy7zb6MPXfw0ETjlvF7iEHfC2o74jbxrllvAGRrku7W2gL7AAqS2dja8xjadkmBxwOW+Rx4ifnhfiThh7dXy1feDgjrbHQLnFITJTsQ1oLVmAFkDZV9gfmTQJRh8OdbDHb4FrEvz9TL6xy4wILYP5GDS8Yn0qc6HTPmrt8G55ADhGYAXEiKInLUAT2WhcbR14drtIgVaNdSi/kEw+htApVAmxnP+nBSCVM/jzvZ5KqOr/g/okA9wIfHYrlY0eJeHhjCbYA9h7TCICV6SJq7f7+eb1bICeDu2KlmEIXQhXwtT1zeNIgUJ53cQw7RKulmU39R36z5TlgaH91SKg9AZyXnFrrH2ppT2F9PO3LWGYpOx2SO4LOUYWiAXB/bTvL/3yInngvnVk8TmOeY97HSWRBdTK0B7oclSNh4NXAjEZwwGA3H2bn/RhYVsyzH4BfH2kx7/1Ff0NBO02+7XyHcKDGUOIXvQ5p9AKUInyaF0vYsfmjuUFcI6KvFxLsuSp9TH1hwSmYHYlAbtHVdE0bvmeHXlV5EuhVSn+mAhN99g028EG2yqwz0a44u6xfzO8Mi57gPsB2gqgjNlw8xuY5dsvc/ZrvBEiKMYXKw5nrCGYGP5vD+ot4678mmtuqXu8C0JHzGWCBnLcalUHlghcV3QLGG1GbjoXEWysJe02co918zMYmYBsyN2+/CBCH4JU7zgdLIQISRDD5uQIJrjqJq3WK5obAd63WdWy0Rwzv3Map8o+Sk7I18aXZExXPa5yFulvr/6TLfgQKCJCrYKZgBpzJw2zKYRvvR+8uw0H1DAD+OyZWHCfn9thmdCI9fQ20nUy2LlC5WQ9TIUd+TjY4/OfRD357aV8tlwgXU1EqhpRU3/EtsIHrmlJOYDWyI7TU33hUKIqPBoXdczbD09WjnulTcyq8wYqzAn2Df97kFwa4Fw3HPO79q49QdKpghIV0';const _IH='78dcd4980b922d50094a4405a7abff406d7df3401203aae45054c4c294073826';let _src;

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
