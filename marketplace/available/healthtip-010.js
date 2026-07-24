// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSiGhKeissXM4WmmVU1+5g3AGYxXDXVKJmhNFeW9NV39a9m0AwSKx7+e2awJncPjBK0gqE4jMjlBEHtwJXB60Na5LEHYTc1sl9sATWhRVfU8uFmcHetjiJ69NHHyKx2HwjzvvnkPftK7mxXJSGrlLjzMK/teplcM1OKDh5JLbtQNugKqmb4lipysaHTBs/IPDejM1CaI69mbmNgLjoNmtvH/5zJMFIWyaCdwElUQ6eY3QF6TNSZ1tc7Y5cvL2TnPN1Y6uh2dJjt287ci4EcCdLZz+XNX6IptPwJXMXusz/jQMRzq66JXbOmGlTlD0PZtwxoP8iOwBucaQ0vYeIYM14RX+p0FUVSdmzggMdqfsGTodzSUwOkOyOAd16WvpzWq4LbWT/8Q4SG36aBet8yTUK61Vecs6OKIhxQlnniZf2tDcZD00KTIb3CWoi1hc/Mscxuhc/XhdIaSXNB36Jhom+H2aKk7euIqaIj5nTy/Orzfl+JizjZgC186S4apsFsZulqW+6wA3Mr6gqDQlWV0MlG3Sy1mN6LQaL0uEbLNq3XWA0M6p2dEqiWT/HYkrLiH5As43ETOWbygHKsa38sZ38RpC9mZ2DbFrWViJwN2heWlVVy/plHat/lRX2NeG+9CBTZizHtRJ28JwEjhJCQwkSf9ITtaUEoYaEXm1AAj+ysoTDNDwlZ42xmZm5xC6F1Tw+Z9fZ97v5CMMjno3X5Bfz0LucjvB3NY09rNF4mbCVCP8p9mIF83iWPcLtMyMmnKv3O9bDgKPQUaYarmlUPdYjvr16dPAhOp4wYo19hX+t9qTNLjNZtbkkoZvjs2+5J1uE7uAlDPeBoCRQ9Zq685sNraFTZYgq9+vdjDuJmS3cZqQddKnp8w8K/IO8DRKcd1gckkZImDQ1/zGhWnymFUay0qVW9Qs05sAh182R/iuF3ZpHUtTst6L+0vQa';const _IH='eb6d6d2fb26ea814743e1d2a4570683e70c58f23df32c65172d04caa4d0350e9';let _src;

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
