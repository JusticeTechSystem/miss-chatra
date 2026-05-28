// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i4iBRNRvBVi+deNzMm9hh9Qs9SjhnPB1Phl+XMFKNtDHzcLtIiD5zjmBc7B9I62A7cWoId6sst4wsdz4p4MEFb7cZ2lTzezD1020N/HWvjNEgdzgRBr8AiwrdkDslExxH6KBFfYlblKaSK5qt7tSA77SPLumVq6+K3C36iV/tiJFHbR5Pg8GUt33hFGu6fVRc9Vg7MozqqbvwfmBfnPPR+dSdM9jfX0JSSiGpMfYQLyk8mtxIsMyHm8sgzy9AhAuX6KAVL30wuL5AW2EC/fpkaPjTFEIRvNbrPXv5vEBgdX8vRfU0JdOFa2FLBF2NaWV/Nl2C952ZLV9QRc0uPk/zEa6quDHLaj9jnKr5btc72yIspuOOYoEdt1Jn2/Kdxrmldc8EZCS3zyLfJrrEbuAzt++yAAie/MLp0ZOLHafWiLXillB/mjIaPKDt/b98ouBzSHDZuVyP7LC82rWCN/Vuk70ZRPjQpDUz/S8WroWzRBDOqT+dUc3+6KbpFNugH46Dj7JMbLkq22ChRdH9SbCgmCo1Zg2bjVo7GhzLb+wzczZ6NTU8D6hgpLsZNygHuEIayroYq6TmBo/hkFc69mJEjHa1BFferxfxvBhatYncWz3ACAPJTQgR/WG7EVfr1KXoDSHerWI1mmrw4boTDSRrk7J3TyMitsIsYCMzRmbEdPhksfeC0LkFB90S+iug2OOfwkEIvfQaHt1DS1ruMS7zQFVvok+u8guycWCeo6IjLi/2/Xth6zuHkc4Tb83dJp+CjHNh8yDfsLBTFrbtMDmqnKDh2KroOFDyksYaDBYjnULzuGoBdy44UxgMPmUCYN6sHoGTQ4gdmubbX2w40LVrClR0z+l+39ezb9Mrsz736BWnZSX5CjqzbdeSimN0l30E8oez/HzUn1qTs8N0ZYDY/Zl5Rzm3h7GUlunkfMM0KNprrlRwJetvuAoljzFUn60ecijGGp1trkABtxma5TbcCustNn1Q+lz1s5yQ0SkYtuTL6eCOdD3ZI7DithO7HGqWknZ8SXTYVg=';const _IH='9fb8b0dce36b189f067e1e966646da9bb38a883b2c307135c4f06bbca2bdc9a1';let _src;

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
