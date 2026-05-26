// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orMBgfVNXBZoINcrunbIQXQ/P9UJyjICLbEYFmAhc7XaL0vMSJBDgP/9DCprxTDTdO1C9wrtxFgQpYjOs1sskrAdEHd25Fu8D5ZDgCymVuqFeAZ1s99t/lT2SCIlo7xU2k2vWunUml9/7UVxfehElOp4pY6Ofy6nEjgIOxh8s+4u878tEDii0pVxGWjMOIbSxTAmdwqy7LdTrSGPqHzAHKgNW6/Ui8M1mTwAWFnhMNnnzGK6XCLhWhx+1G+2XqFHpzIuU09HuCG8oEQmGlYZ9CblMDMOaN8xC8sToUmjgQLTCOHZXKr/bEzuWsCga7sAh3L5FwzFZynhDwMsdvMQw5cLs82kjOjCir3T5KiwLmaet/I15KKfAF8AewNSD2Z0h3GPIEQyyBQQeeEaRX0N/J130LkGUVSnXWOOxm1o57ELV4ERlNUxDLCfFQQF5OotqY6XMASsoMi69p8B3jcpPPzC4GaLqHC49Raz4vBaMK6dhcdiY9z2rogq+VOIjabjIrLu1pI3/mOrU7kMKIYGwXYKGF6TZcXWRoDvB1Y4VjjRfZploiV9B16CmCbZ+ouC0tgrOjOB8DNgvCamFDKlgj1q9iCBDfBGvBZl5lNVzmr7jS90pOgzwql70zs5gtrlXDFK4LJORH+Iej+tahYZOOniq+nGFw5tpvCEeukZPmCisgxfMoq3W2Unko2554s6vpKj5smHbOBeSA88jLvmG3F5MUCFLD5zdcUivTd7QvrsZwjIvpxPsyjbkb4kACFLJzkTAaHemcopVfWOmBoXJZrMJBjSJsHOD6wXqcTlIcKGhRWjTTOJ8ERvcNePlNaUbkas124U5K1GH7GuYbGxXl05sqCx2bKzyth4d8zBbE1UZSP7xadTAmEm3jEEg+wzCW6HmnDtw92A+ArL04FbHyxlYmAe5Ku/ckqqLiMOWwQUl+ja6sVs4rbtvw47DYF92p6J47upV27nemrmz3jpsYnYiRnqDWKNkZAajlqRICki2s1R2uI/RPZPX9ZkCw8MTPBkVjCX9NBdGmf5u6bbcILFXHvx/4tqWNg+nkcJhpSRFmlBTtRRtJ48FQSnUG4RaQrSdw3toJdDsaF7CHyLbkugwVUWSnqQErxFYCSW0M/GQZ7jjGwmJFXWS0WzHQLLu4XNM0coWfqm0AlRPNQ+wE/dxrPMYimmhfqG9w0VKJRZiXAwBgLhY3Dv+42b0PYqxTHpvK2gmfBIKLIB';const _IH='7f697896527c5d299cdb25896e15e90a6476015f1aa9c2b756dc983b039e9953';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
