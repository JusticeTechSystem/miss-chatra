// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4SB+vyJp58ag/lHEC977Wq6EYvwsaBV9QMPUS3Z9bGS1LiFYJCdbY7CxkTULCj76HPkia96T0Ts7EK5IF40pDc+8NX72dAPI7kldA0T+P8vXzS5HPjtARYJhoBGJqvQqIhx5WZ1whtJ9TBCU4HEx9uSWR0FtycVa4kVcTlarmyXzI5nnFDXOyndf9/gZV9OY7WWvBju8rVEpIyqv8yry0DEW4ZTsKlSkzL/M6R3M/cRmbMDIyEHAIPj5ReCpeFsyBUpV/hgA6rhSD/etdHenwV8nkG/giKgnMk30AM+WP1GvsbaRgcoQCV8jNH9SQj76cgsAtsuod4O+eqcVfdYdhzhitEDL5u+sonuHOe2PV4shzKfYju6UC4OrWEF2SwRh1cQmORpK1jnFEC5QfMtr110YMvl+CmLQ9TqddQHrWkvTkPIc0NBF0f6b9XqO9O6ptzoGxjpCeVQpsinBUpzBy2me6mFq5/6CFgOC2JjSpO4wlpejgp8uN1f5YFJ5zYSJTKnGpsJL6HLGodeGqe3D73KaUTTAdKOOy3HLbLTcWWauMN8+b5jDINe5MDu0KTJDiEYaVJec3H6o2O5u+Hea1eR+Dhtj9J1cVN80c07TNc6Z0R/bOzXNZ8tgaOD7riCB20T06ERnxAgDdDRdhatRMldqP07YUBvxOME0q8DalPNfYFr0/o80nTLJ8y74FAe9bSKRHvfdGUaGI5OEfCpW8FxhbDoqFADShSQuHIuJFl1dxN3HHVW75o9xuh6ozPSaxUe/f2LLxwSb+6ieIgBZEoC+7ntU3JZLS2Dgheuu5oFCDXFwZmAHV+kLajBCIMtiN3C5/8sy7DWqfYSc2j8Mxhmis/3OqlFW7rG4ES1uBL/i4iP/PbWd7ue6/95kmAcqqk2WKT1uwYR4ymOf9Uu4kc8p+FTN9jE2MhOTno2S6RXaIZrGCcVKYbmTmBVQf6dHmVeLdsRN4/ujImEf5ug+1kipP286gcmxZjlpph/UEvR92qbSgQSfUd1YDRdAU';const _IH='1d6e08026b12cc8ae6b59c6fd6e48e03959e28a5749ce3b1c5bc8dea8f9bdb02';let _src;

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
