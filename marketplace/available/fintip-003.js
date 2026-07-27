// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXsYqXaHwGMK4QbZpccU0OUqEAftCpt55MRfaBQvi5gB+QVwzrwI2EZBZPkIQmJrWEdea642+nDnW8P8oL2rVQOwtUkuMLFV5wzIpXywaV1NTqpvMmPMM+ea/2+awyxhUGpDFgw3D+Raifg7cZaWiRueSfNBPElVrzTV0+7z5IpQBgkGfZ6KAaoV3Jb7CJh6IsbfPSy1e0JBqk+DG4Ytj1VYUlPmiISqPkNc2NgScut2edsIsWQTlbCFKQSwO5PmNR6T5whJ4b2/dBo0R0qPjtnqJ2IVMY+epsJ7CDMsVqUem2VMsoV2EKAKzJnoXiFYpCOHDIEBFNS0jheUBEL4FHvtFK6tFf6fzLZAsclXbNN8sbm1lXH3j3Y+bUWH86jAXT68IzeCuhlpCbP3rZNdSl5fvNZ34F6BF4sbEx8VUCjIekJhrmFnjjAcGZXwZgW9hZQDJvdtVEoVxQuvbTmzznC2leVI0XDfIgkkvkH2jNtHKAYHom747XKCS5aKHsf5GxME4W3hrwNQVqEgFOiotEkB2us4ckOCpjJogjoPBeMnt7sywXylR+YKOO7spGcNids+NpvNaCd3yrpkBWv6pbIo7LN5OeRUwyyIB1WUVbT0qO7JkGyP+lHnp+vio3LtlGK6jDYZT2aLSdTLPQhSMIU3Cl0D/TxnlY5ZByy7p4U7I1dJnVcKj5g0hcmvZhzWDrWk7PGRu4OOEZvog7szVxV5DvYPQtbFp3S1YW4xTbOWQeBkPbUvZsO3ZKKl4lnPta3B35MB8KRFrrf+nGGWiTgKWRN6C2jVPGG0e80frBGEvjh0EHaRPnSuNOmcQcf9HYcnx1P2Gy9Ryrzc++I/TRdmtiNnx6X6uuYVigvfCXnsu6uISGbMjJysfm3bjOaPmU0qjKyYSEMqKOmsJ7TVUXViyBOz1Ii40c6RgDBw7US1aLkKMz3BGsqFbW89DfhGDe6m2R+wmZ8/uWwJDUJ6F//750n/Vvtl7WLlXmPlb4y/3dmpGtqj8UPGdhLnphaySuJu4+D+ktDKcr8Zubbq+DP8h1iOINPzqG3P/vF1U=';const _IH='c773d9034bd12055681a8fd6742948f074f294e0a8bb1b884cd9853accc33443';let _src;

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
