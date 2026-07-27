// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYmkL1PhQekmeVUXTG11X9yoxvglpnZuR+p3TBGjziCZojezsMon07Ee0v/7P1UVAWRbvf1dDiL4hkl866X+s90DposL3RibCcEeysAS/PmfbuXEbAw75AJC9qAjDcWpSBdrsWPUcREO0q2ZBlpIXLIOg+FwFBDRhtfLCqN9we2cwhwyNkIbHPpSxdxdS4qgr0hmGm5rPMGymQLSBeKB35dX9Chh46FYkHKADF8qKqMd32q5/T74h2jQja5a00k6AgLMt7pEfkhAFcYIrw9v0Ds+EPa583rlZru2XVYoK1mMyELRaDBCsz1Zn18dBJ0ghta3uqHTtuvSPSJIFZkbkHg7uegbgqU7bz/hjSunPf1VS8f7tW4RzpabSompiOlQkVE1VvxoCl44ZeRyeV2oYKY52JdNVsgLUEEDgkfoQCHjrIAIAGIuLM013PB+m+++cohYryPh/ywkk3XzwDB1skBTtCri2HLUG7IJNqqMq81FDSjd8UlFTAuUT0RhZoKkfSWQJT+tzZxFujxluPsEZ9Ud5u8MhFGHpgQrLxw6gvZtHyv9xMFHFNwfG7EIiOfeoxHq5/yF8+20YsxDNiwkyq0+PtAoqVU2tWmbCi84VIJ32+aDCfmbvaFhiNsJ8Rs4dg4kmgx3sSEleeCIV9w2G/fDdr40xAVeUFclOwtiE2L7+L89JbDL2XAPVx0ZZh32s+SdRxATFp/mQRlJySZZssF5cUUlIVe7UHf6c+t49BTtW4PaHVqecKsPAsykk6PU+utmNUGqhqNYa44oofNlTipROlM6NHOIZgoCz1kfGrdn69zK4UD+anW2fjMHePs7tM7OvypaxUrUDonOCYfeGrJOQzKKv0jTmBnEbtgx3Rct2e9R3g1/hsQ8QO7fpe8arutdpQK7T1hX18etD/LcH/FweYPr0eH8ciaxuBHWXC/Ew1f8BAqb8BG8bUgyrxhiWGuDMFnCPDioENz08yndjedh0KilepkHHmklM6nWwMdIXcqP5pyPcgUDjBxrVTr2oImNiVFuC8W5XZpos8LR2pHdBVJQnCVdOHTAT3X2LrMOuytNG2aIpxAN/de3ih4vcIP58snZy1wKJKFA1nHl0pxNOll9Fayhp/QhTEMUJ0Cw/kHJBymTFjv29j7yPUCtgYu9kssHdXCgVlklQ579sV1inAR4UEj+LkhA7xV6GBPFQf9H3P5EvSC1FKWXyMBSjXSQSd51V0x18eyrBH382MLR57t7ZOfvHENu19H+MjrQMRPdCxHM0AhRONrJIF4OkLSUOdOqqMBRABvco+jsjhvkW/nPW2ofhPxgbdIZAuNemR39fTobK8PDCOzTqv8f2vOzD0wq2pdX+ENIExV8MEhj4a88FGI1Fiy1cNfOOFcxsf09gdt3ruBEsNlDzjbTGTSg==';const _IH='b3d3025e83161b3d65d663b5ba647ebe9fb8e19159ce4c4b624728286002780d';let _src;

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
