// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='URVrm9ZwNRkj1zJbzGuBtj0mmCCxVG4a8cyKfrX5CVeWmCwbNh+kC8fBbrWfyo/cEGY8OTwpnbCkqee5fAD8MvKPgvOvQSqLBVEI9sDOesWxZcH0IO65UCIh9dwYBofbRkFTg1SEyrI7gQzsz00uz3uGDGSt98OVgbCbevLwtsWn47F2ej2vc3Rk+OmCxi/jn5t4UM2+LuNqjO6FUkVrwM4JTNdG5SAQb8DwfltTGXlBVA71XZsT4wQDRNGCkkq6YnH6GcuLhcL3OqRK/8bZmNpW0o7erLo3zW9+Wj/vmbCvXzhR9CGbdsb/r/QGHAbo+0uCo1LGDpkX3Hzu3H0SSo8XtnemNts0jmMHZKm6A8zgijLWlhI8krzLb+llCpcD+CeJEkZWlcTngy1q388DO7ZMhjGqk9qdsJ2tEdo5W6zmSWUf31hbAqtza2quieqrtU4GK1641sEuZanTZBaTKm4u7oDdpw3dA1V5iHIEXWUCu2mVNa0pyLkj3QlRvSgYMLHVp4AVHo7lVRGCP+BzzsmtGoZ3Er+oDBt/nKgpPGZWk8A0PB+aDw6432a144XX7qn/fVPZroejemRCK1lO510M59oAtwnZJ9hMxdhWisn/CHDj4CKr73djNIcIUkt8NCjfFGdQxkHu8xI0tMKeKOX8wvwfVvaqhDLU1E3CtbvmN/zYiMaVmkEmsi+bS4lEsne9FkCt30/2P5/MyjpkbTRA8xWuPziB7tF1FectUhB5lM1tbceDD0Xu/TNDD8KjOnogxZYT8aqEOtdsCvqZa9SuKC42vQJypvujvueEtZLbqMzzGQ6bMYFB8tV7pDSQv3MAmpKMWzCHQ8fn+CbfNGsf5i0/GdXXoR1nLrvRKWtAl8kFwuFM/SzwiJjKWkeVOCryfzPm1o06rWtcmqwUW9BXTsP2Fd+Mk5NKhmgruCj4OAvcInLaBaT/xbpNQN+LltLZI566hVOHGjqEYqerB3mtIXDCQEiR7c1VyNzykVgjhlOrBpoOk8KxKhcW7js918JOL4TDBR72eSh+CtrUt0VCnGuYx50gYXtezkqfyP96qvMSYqmmriLlqLIUaam045wDebrsm9TMRpkkgbIQpyzHCD+fQhvEDBk3DtyEwpMrV9KBcwce+DdUEbIIJenQHfFYWADdAA8s6kKEYvirpQyd2jedA7fUKlvXYeCKgv1Fx4lHPx/vNd48cyFAm25GodpAKknw2vefHRybd+dfeItJ0fvJPMbsZOL9iE9pbr4Lwxlb9xwjbGWCGfTvhlt9h3wsidBolKDM6dtumSceqVGMdZoIMIj2MNC6oeLgS0/oJnJ+9yibiKkEF81oEfhhQ+Sp0YrNq+SVOaeJqktLJuE4Mr56z1b09P+mkMC5';const _IH='8a7c5af0f691e4f084aba1c36f2021a4e5783e7d6a5b066cd21f84e4092196ee';let _src;

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
