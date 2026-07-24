// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+fV40+rG7UKBDTsEtEl4/mpkCHAb/+aRvM5SEHa7ws1BDnQJ72IOe5AMIRABZ+mHlEe8X53oVo39XfAT14MYQGhL/9QI7zFP4cvyyiD6ql3M1+/2JRZJ5t5QNym8DGla9tId3khNLTf6eQTxckC53zv5NZEPWgIl8Ge/7jzHI6aAIYNxyGsd6xXkgvoDrTR30/KutPxG4MntfI0YignQHOCSNKp/6Cx9Yy+i8jsRFHhEKoCcL7dkxv24fxYrb9nyfUmUg5PzV6aKAd4eXo5OrWFSH3jQ6yFKavk62pf6YRD3Ozc2egZLf2UZm3l0GUvJztcJUtnYKikLds0LowJSiKb8at9+0mQb8u01jWrAhDb4kAtWs4PYA9E4FmcjJkhIFCgf/qXgD2d4p4uk14NfayegwgWAmUj9RnkJiZHAld6uaN+vl2YNY8y2QZQ3T2cxDXCkCqJrrZZ1eLSCTE5GCDI9ItbQ3o1ZwtvDV0JEUsOmbFPZ/897utRRmKhueQs42VpnvUOcjn56VgWeY2Zx4wrli4NbwruzWY5cbjMFG4YxtDP+c5xjav+Yk+NUkwLAfSifCnNgosUG+2o4TiWIUtatm2O8KT9GXEg4290aFa0513XmuCnegHQ4CGjY2MvoFpWFyO/FZai7ic5eoKj7yEMbD8BBJdQ68K2Kcfih5FbtCg02SKinRC6GY0hjD43RlvbljpGGdDwhb9jIL8hgYbZ0/MQ2IEfEpKNONtMzzl+pLO5wclg40JLbT1u9CfJx4ayJq7eK6w+vlt/dmPJ7/AF64jSbfivvmd3MbFTNMKsUTDerO/+zsNtkcYUjW9JmicJBQL+Q186SK5UiPUvaarIdhOwcZexeRcPEYPNsyZP20n5iSmbzqoGAN3qTJfZx/WhAOH8a0/+F3JjvvkMqUqm71qcRRmcbACvs3m0SGBNpuoTzVWQmqys7fUwDD+1t4+sxdtTz8Do4/k6uH7b2SXzNucdcpKYQ2etthEBnvAlOwgs2vzVZfAdKAttdIq3+0Y5PlveI9yCvqaaETnpF5JcZC/BL33mtmtzlQOam/iJX+XBxwQzgdiBJM+8KDbDfLvG8eeH4JzvSDvSefVZET1h2yh4sqCyMZnwe3aVe3Wh65Ek37zWxm7u6DWRVKIiFpnkct5xBFWK8k3y6Q7TffNVvDTFZrYHhvPThb6GknUESy5puhXMdaj152cAtyN2fZiYNuXQuVeIlF81VJYZE9V423SA4wtJMLK5WVPcfAz88G+rJwb7yXT4CymYdrIOavAx470PaWXatU4A/hmMHFaUetlVZtq6DReI3/69ivN107r4gBCkVQNZaWdBOabmI4Fdfxq39GQ0ZKjoGCQ9lou7Ps9Zju3aVVIlezeCtrz+y7blEtudGw6C0RP1Kt5kK54X9KcvLq3+8ZQKklkJz5g9vzt18ErRnl7Uz7oqFqT1SKKhPiKlVInj6QBPFWmwF6ZZ8MEjHh89V+jT33YHRhqtdmlMdNhYv2yYQqyrl2/wab';const _IH='259e2019f76410dc26f18dff232753302481f5b4f026532ff8c511891fbe5839';let _src;

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
