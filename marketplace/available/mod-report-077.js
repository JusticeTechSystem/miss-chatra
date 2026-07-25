// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvLmIJkxm/D8rd0ZSTJKuj+ZR6KGJQtnaM+6BpEKEj/NFVniX3QczlhR2sjkgnoOkq4aV2nywVRtXa7rDZ5DusVgNNwH6QBgo15QMACTOunZ7nWUzGG+wlqv6whdB2os7lddK9heU3E6FGBaFNtT3VJS+JVWnpQTP6FPLaE9FKmDf7Rlys28rdtn1C37PoqtyGDJAWQJcyURwp4LjMmNAvTAopYOaaNPYNw1D0t9VaStVAdniU1qpvjnk6/zC+PnXIrh+aAW0Pu3bb+eA3Mw02deF46QLds+8Wq0DkqTfoI6Q4mmimY2IrWnzUeFaqFRVayh0I2HAJRaHAm2mxa7MJYGKDOdtb2RDyCpXaYdYoKHoSuZFzfAmGGigYemQS5WmuBpRuGgt4E0Wi91EXupSyZZEHiMh9ShzTcUnLOSfbBW0m2lFCi3c276z9gihX0/1hfltIXkcHUhl2F4V2E5Pk0aHrWIMMpKKaAyFhDkOnKcwaqxTk7qCj3mtTX1KGfqNbA18A94qRmrOADQ1dFF/VwzdoowokkaTYL/lhu3IzF9iQiL3b0ehaEMGhP7svSPehYx2zyOZap61pQyFg2lcfvWUPvbd0iCFR+gLqCSpUzH4IPwwNr1az9yfz5XlzxnS+v81s02iqOzXSNXudnuqlX//j7G4SE/lyU/GDBan/l3wOrBJjLGmxIJmuKj3SnS4lvU2ffZymNlcATKSqohemJeuMNJuf9+B0DT17hIzLa8hiV2Y2EFce+NWS9GNNas5485krBvMiibPFXVkthqrh6pXVmhSjdl+eneICx+5NYKHUwuJLPmHd9PHwGOtS55A9dLndNI3pVZKhK2RtDAPuzHr3KrRvdEuUBZS0s3VKS+YryfBld5TbRAmiX9jVrABwVlmm6l+yHOkS1hmD+IJcJu0waoiDbwjjVgTAJXE4vPxFmqNNnymQmGgZpm+8AlGOCsXGkcIgmeGfCK37cZHAZhloFsXSLjRc17/H9RX05VwHAQbse+erVCVcBsCGORxwWT+aKIJ8xTm7o37RJRzCEj47zYcXOtdWbYTgHirptScmr286RCn6ZEOASxJPkD/rKdmay4gFlNcZ+HDAtehL5RjB6E5ciApMb7/mpOdTU3+WbKrFGoF4DTO0fbm+5JBv6QQYZtgrGGsyM8VS/l59rDYPSZhjzSQID90V7NtmSBIwo1TUnN8W39D0rfPpNjBePhtZgMAPRGoyI//kevYvAOiw9QOXG78vAyEEbV48iJFZiHCCaKi9riG6IwFa0NYm2M4AlYN6XrGtGfBqEYoZZIJlsRo0mCsj+xixbK4/mU8slMoNXDjKS+PtejMh+1dz2k9JRV24URBrp/j57TCh6+G7ugpojwPqkjHrW+udXb9haw==';const _IH='1dc6ba8400ae28de7f7f0e1d7bfe12803cd04ef5ba4e114dc416a70498108862';let _src;

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
