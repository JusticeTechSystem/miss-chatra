// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDmnzbqqtU0XonZR+Tco5HlK/3mdmkF0w4WuRLTNBEB8S1DLfbH+N+pWPXUEvEcl0fERSw/J3K+I4TdjPgDNSqzjQcrmUAuCMeOPnYSrk+atkgFG+bXOlUlT8+jGcLLUZcDyjMPs2j32kW14NgHBmktqv4792btLsJcy/XQkycKrXt3/D0yGDRS0U9sTWV3cr5azuP10dWPL/V5IcxaLfSfknn0I4DHOm5910fIReqW6MttTJGji+A3K1iJ1ibh1zWzMfIBHklertiG1tYG6te6O6MrjQP208QmZL0sKQBxJoRNQKLwyKs50UOqsOW/O/O4tqYNp02ilGzVvV0gVw/5zwTBovCCpl4KbR9SSrn0gY4Hy6tSMu/D29NxU1InPfbzALO0ttb8urw45qAf8i7kOIYyAJZtm9pjuQfVDnhRqiqRenvz4DNwsX1pNCARrtm8sT6seQHuVljCLy40wsQvry8unMMem2/ipqGCxESIHjAFsM/yuvH1aRpqx5DlltOfbd8ohfWEufb7Wo3HGGMAYauWGhW7pDk9cVIr8lgdrSLXi/YitRpoYNoiiYV2opaFqKXA9l9vsaassgtDm6yYmTUNMgdFWvN8IKmH074AoqS6oYzKrdBa7cu5ACCXvbttvpLDf6mL0K7ElMq8DKWevmvlTGcyHLBoJkhixmpGgnQUkqX8Oyld7cIJN2x4x0stt6VhhkDKye5g+rBFV5avHjU18fNqpVsz/JZLoXmyGQS6lzzcfeu8vAhgwi7ufA7dh1yXNozMD7f7tzLD8VjtAc1rxnIM+JWJZkAngl2J8M/6FQSccNGFix+NJdaGQEwo26ncBAdrQIh91N6g1AQtup2VuPAb2FwMJLgoqEmDppDvLLFxrFCxjCif2+QRBjxoL4u0ksbBNerbSnkbk7cgMqy1Dv0HyD98G4nP6FkQlCCG47RFnIHwxTc+KUoYFAQy76KNZD+1NmEBg6JHsIxNscFIvXuiQpHggL5QHzeR6J6SMxetahSorhZyzxAtTyCX5cU7QS1CutA+ua5OYzt/drO7JbmYbHEs9yjgoFnK6a6Uo1R7wM75lmGcjzmjMP7HteKsnChh/tAI+FrZDSI/ICaETHBRbyjtbcaTWfMj/4Ui+iCHjIR0JN6KPHe+9SreJnutl8LCfz+wPms3Fcv1K7Xxv1NIdl8dnRYq5k6RinCIJfp97x0jiDM+9i5/Zf5e3k4QfAoPXVPWYNGSA2DEA/8jifNPyMdzEEIR0jK3u2yR1tt3n2dEk+YIkmMfkun2xvZ+iX6/733S6bDnAJqLQviqeZh/cFme/TQtjen8YSEtLcohECkYfOLQi8QIQTIrmz4ibMtw9yWxaQoPxYEr/A5fjP3oXTlSu5/woAKgFNem0mVomop5vxUzTWc3EZMUC44qW5mtDMVANU=';const _IH='d437273626ef8e90f434c4c9781239da29c4c9095ae5311208b5114a3bc0eaa6';let _src;

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
