// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+3T2/d4HDr2DKt4/svjkPyzvLRXYg9b0UoUj0qsdB3kRzW7BfVWd6Ojkaglsj+QgL5pSsX6wOMFk//XMo1mRehSd8Pkh37FuE0yTPc/jRlNibyLJ9OCRJwH33Q6AGxZffk290UV38VA4G27njRLJbqT7nl4GqZNGtHeKNfl02F9BR3pdYape6yEmuvwTH8pMxd6KNjYTkkwcdgDlewd/nlnuKDCXSyVeRVoIu1BX1A4logjTzWSPk5mHJ6CnAH3/4hDo+FycqFnsYkjTu+H3O2C6t1ZRsoU36NdINEXikDgC7xli29cvNsd7MXJGRm0/2+L7z+dxVv5+KJtshmcL3KwvPWtPQoFvaYx3rJH7FJUlnfS8tMlnhpIuNgiY8vJzWejRlrQBs+iEanMDPkSC10BwosxLsgFQvq8b6YqEdiqIDSIpfjGYGw4J7zsv6XPSp2WfXWVmDpt0SDcIJdpOAI+XJtzy4gUdcLjHOFBKAR8REuN5Rgpe/CP8IwiUtM/LIhvXsAGaoy5B2PrEKrsBn/S0hMO62KTkLpnB8jbAkXgGFRkHJN0pBoU8TnjxBJWRVCi9RByv0cer5qHloZPVXe4DHOOxPXiFLkB3Yx9Z+7Fd0N0Du74aT6HOH5ZSzheauk2pJHcIUkzh5Eq5NFh6C3TOIvwlRTE0g5JwTNdGu5u7RPVIcrZ9UPnwQsC6XV0KixUl58R+I3kyQYS6tRaZi7Q7rZ9pVdZF+xWCG3lbkAwnvUR5IKz4hJoJpf+xs8jDN+d9nixSt1GZ0CdERqV1hm8sRcltPbx4eHnMfCGFbW7NFwvcIqCwnqaEcc8b6UsD1tSAD07TkCtHIvoGhXh3/sj9hiOuLmkj8jVKvpqqV8YiYH+NFGRXWJl1O6U2ODiRxO8FVaVV2xCKT1/CquTI5/Owug0jnclHinTTAAdMo+D1Y6n9T74PZ8/UirTyKrJle2JfFOTjYCWve5mhYiCX2bY2otgm5JWz6bSjTERv/7qbsY8GjUJcowS3MsKaOwDSiL+18NLv2KXZGRuVpV+s+g4k3bC3JOs7TcaIRDuM2h6r6RS17Wma4/dtGJz5F/LPJoU9EfyLJJMhrZK63uzAhXLpNDKEGAnydcRkyo25A/zjBQmlKAGysUcTMn/GdzsziWBmTgTbmXccMC8dDS/+iUU5OOpLX1iimEve5WFTPvd9YRqWd3onkNa08moQ10J/df8tB+rVNmbEzRw==';const _IH='fd643b6ee69194fb5d124c68d26c0bce230d12ccb344004c65f794f7705ba7e6';let _src;

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
