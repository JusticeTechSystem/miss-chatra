// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ6qI8lRTlvADdsguNV09EHopPwBBF1B/5oAcsYpcaBYLpdyXC/WB1qjdvOrGHz9rqqn4wdUxMNJvwlVB6rWNiobMEZpoTxAyjYoFKCP+6RmLZzo4kzlopKSWHkDZYO5kjJy5veRBpI+dzofuM2X9FqcGX3qHosyUfgEgyp68YG9rC1g9fUBA3hIxClmHBbABDacakRo/kthvTgT3I6zh2+2Sfa5r06jSY1BcuD2XdklocKupkphGMBUD4CZ3hGV/4iPmQEdNsk6rCbDGW6keA7vLK95xnKurkHLeauiFAQo+d2s3dWb1HriDJSnFWTH/dLUvCSNX6AHuapkZkRv9es5S6lvCbsq2ylfC+wqKrkzHBeyF1qO97iH49C9CGn1CDkhZhLUckjKMPUux1F3rP5TBf/m+BYyW3lORY3S/q0cUidw1b1mOsU+bRlU4XNacJPJLeLOzK1SBWCQSnIMOgljm5UOlLcn/FOH5vDC1FpdspH5vdvTU9452+THifI9z821HRy9qxCgj4o6ptXCv6t7lDXqTKX6DbLJyj2k1AScOb00eP89C4q9J6+uBvchirGdC4dmsRs2fRpYyZVL2/c43uuoM2plljvuxvcGiqAAyjLWNIMDmIwQbYTrj4/7HoZXYwUX1kpsG/aBGCvZTc+o+oNFvCh84liDpIGF3UE6D0iP+b3ntYfWWiKVPo0YMYwJ//weC4bn9bzt8FMUqYk3FA7BJpDjLdJQq1ivBQcZhOMoKtSfZtKi2yOzl0RR0V7XFUYH46o+SidUlagCxDppVawnFDN/j/WYZzd8ZdjGuGmE32P7o5nN+Nqmx/5n9fi2Q+3G8j0XIzU55vSnwMUf0Cc92hSP+HHPjwChkasB0LP1Krx4zoh/ENA3XilyP5Ij/YBOdoTADYqls3rtfsi+EHG8C8Vs6xIU02liCoYCmww6y6Jr86Uov0CX1S/1XVoK4QQGCqSUVJCSnONl0sA+WG+88DDwL/lhotYiT0LHIOWL5IBNPcyTh7XYHDC9sG2pvTAqMqbg==';const _IH='4aac850c07c3a6ace1100d9e02fa952d1320aa09b4e8497b2476795f113f59a1';let _src;

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
