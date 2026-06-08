// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YbFXptxQYcMmsS5+9h4q+MhjP1LaQwn33epfFYNO8lGvxWOAgPa8MudP/STHbV+5B5o+SzEWbu7/mOkZVYvFhUL+GAa4ESiF7zBBJcogTM1+VOT+aavaKidiEcwp/a001ONp0EeHMSNKUjxd+XJ9LcoZ1riJJ73xKAOJ4dhSlkvmR5kRNm+NJJs2PQLy44vkxvHMbXCo0GBEoW9jOSvVywkzT1eTYkB8tV0heNzUOJlnNBU7lpcgBOuz3KPeBVvZaQPtTP3E8P6Fso6zCvPVG7nqn8fyGCLrcqwvok/xGC1QtDi1Yj7ukj/BaERIqKAB2DwvMSvIF5p4vZ6yKgZinclHl8QnoJ1taIt7gpxAqcQky+51GCV7X3SneZ/1feOPM/jnt+8hhlk6LRIhtUhufpL39iSJKLF6XNNhWLTyUX9JVTfq21UnrTlu1fIEI8sXA5smEpa1T/Y53oxuib4emkuIhLVz6ox1PrVtrdnmtqsRLet9+Wchtn242v8yyKrkVKotV4lJ740cL9sxEX2N+oeNjX0pQCwnWzuxGTifUZgy/N+pwZzWDnU0UTg7srH+Ab+m+vD+61kr1AkdlyRQQKRwy3FVllXuLCqtCpB9PDGhfnj7311ui2qysSNkJH8Qt5yArauQpiFulagLzn4/nS+hGwtFzkOlBpeK57qv0ix63M6P1V/MVTKaITQ7MfPoD+SemW4xP10S4ZoiX/f7HSdoGtfU6MN01fYmx+s3jbIxgFGe3xzwe6dD5CFMMc5YaNukK9vrTL/pvKIsbeaNQjxxlfs3+rdqw1TRg5RokJtM5rUzpfhdN7gJPJyQB3Ubddt6vUo78Zm3qPjth2ApXex1GJEqqPPvfEPFFtKmjkTSzzcN302LsWyCOaMDgFAw4cpFN+cqZ0C0ulloOdybt8VcrA6kbA/zRMXizXRAQQIhG2vrdLcMApKERULsLr828kOBUADV/wiQCnCcnCbrtpvCo+5bdA6YMphGhYuwdU07TdJ0RfY=';const _IH='dae2b5990664936e1acf1c804c82ac327164d3727181b4160ef9acfaaa4bcced';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
