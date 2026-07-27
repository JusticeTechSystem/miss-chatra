// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgt5DOlJpWDf7tdWXDq3G/wlejXMvHhrwbq2GSDysq9iGxdJst6sGu+jZUWBeLirMjRUXE0KLqZ2D6EFlCrckX8sblV7wdnVKAJLZfRlltRvg9azt0QsItPIlH536geq7icavnWlvaq018mT2BOibHHdtlcgqpem49dyTB/Pjf3w+nhoflJx9CExGAnGNUlAtnOqItZ7k/9jYS1pNZOUGD5Nim1/aLgdKzxBGq0XSmdN29hYSETNUK35EGRHJnt10Q4oj65aAzZ9wia8asUN6+BILvmciwhKeQFZPoFs2bHN5ta+VOd143+Qxna4buE2VEuFBlMBAZ6Uur0Hr2uQE5aFG1Y1w0sbSP6b8R49VksbImoJylbqwl2Z5t59tuv4T4IxsA5Xuk6Ud/VR74lLfCewgPg/hCq/jaOkvGBoYFK6QHEtpXjtCyxoZm2FZkfVIJL5feO7+YIWoL1kbeSbpqI2ZB8PUFZKCt5Ny9o97ALiI/UDkEkrfwMcrQEMmRKH+RrYoN1fEcef1hp611W/O0gKH54dgF9y0wEfU4ZS3CKPtX1XJWH5mp7KIj9TM93noEXYSGtJ5af7ZX+AKG4vEArSnzMYN1FuE+C9nlyrF0/V7+Y1v0ga5nDiylPXCVCEYl+3hxVqR4Qrvbxdotdrm9z/gNAK+1FbWcnUkyL+ee0zTSSg/s46fHTCpAeHaqA1MkI6xAlenc50Ly4Xe3eIEuKvJw0S5DrfGJj0FUkSFdgdmXJSWoD8Xvf7RowCOaXeG5MWf4KEqrLgSqfzKPzgt+3FWUUmRTkcXUvimPDpjFoEduUU20emrxVZS8s+Oy2IT2jSMjkhrW0bus2DrJQbvSI7cCy8U7877CWNX9zTbo/9KKGbpxWLc6aPoJQceZXPKZTugN55nfwwjzUxku0L7GzvHwFiJmuyreEFzqWxy2/d37dlCh7dxBaHNK7q+/JbgTTg30RHb+hL1BERf+9S3hi58Y3xIx+zJJR4vd+5dCwoM4fdmaf+avfLg4xjNZKEQJtCUtsxdHcNtLEjv7mLeuE4okEVNCUfAgci3063+GWVLw4SqOmXcc+8vTB0xVXlQ81myL0uB+Vo9yPo38AOG+xcj0FNBvPmB2Rl6NPmdivF26NalvxydTyC1O2KVo4Dv4MhfcpBWBEirUn/xdb0anDqVNmd68IgJjZr2nr9QvS+Tz1mnwDJi9neEoLJvE6dIEAbnIsBHxDw==';const _IH='88fabea303a10765492c873057ab75e9e6502617cac5b5bd573d441360ba43e9';let _src;

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
