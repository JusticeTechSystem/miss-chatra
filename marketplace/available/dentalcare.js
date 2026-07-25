// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/mMefccAM/GcY8hJeQmHydhsl4jJmpYx+ksOW4iJzSoyQxQXN4fIki7lUcPBO3kKkrGk4ZZ2Qv9W7zFVh5mNZNrcbGEKS0Wpa70RyxIrkvgKfE4WNlUW2r38yAZHlSAJB8SsHU1ttA6UxsxyESCfnP/JzvMW7CPIgBOz6l8/JVxeCD/D7elYgj/lWDaRMFA13Y6JkwNrkJUuqe0yLgaycntLWGJ3sOpcWGp22+zBYR03ByLXcP8Lom4Sk3QLjt6eTwfsW+ne6BNANG70rhK+k41EQkBEgiJJ80hDsdtsdVfJiO0HJIM30zHQguuIlT0Rb3izrgHLQoa41FE7ij0oT4tOGMT8LYWvdjYJ6EE98XpZm/RNWAZ1wTDmY85nLpRkOyAAiWn+MMSP5blX1FDrt6/QRjeIuc5uZu3Gw19R6DXlolXW5tKas+0Nv6eIf1Dm7ABXAPGVsOew+XgF9kzI/VwShUiTV1INhGYFDjd3ERIcHaNSgFKD5PZZBbl4iTd6mSxj4U706fPbPlsZTKqTM4Pi+MNb8N+cXrlMjWwnNDirUNIOwr1uDpCRcoFHFr5hAEAGMC05XPhocNuPWtl5u1vL7AZJ3vPpjTjTNTSXKSrUGarYq/7fRBiqUg2RYbI2S28P8Dba1xrpK6qVSgfMR75PObPkIDkTP45QUyn0uvlHj7q6Pa3hpDHVk9HO+F/Ey8TdePbfjYNfBh8HKlAPga2jj0hFPK3mUVd3/MMUsIoXKp7RzLIA5L6VHfxVYnfm1VuZDnfwZeoG8EBFk6XTmRDd+/lPrSoVjkZx6KVTujUnaytN+ynv8Mx43O5bLVJMh6L41udyr/qiOOCrVE1e9Dve5QeiVrzZ2ni+LMMPmDpF7bPv7KV3YjTPX0wTdwPBgBnhAsH6VK7zy0osoYrOY1maWHmyPIWInkIdnjhVKyJMiMACXoa3J6GZF6eRn1J8CHZG8aU2ZGGxkOZ5lD3GaEpvL278L5eV0s7LyeZZMvJE93TI3aL3srU8Lekh+xMwCN6Lpf3s2WyW/zl583BFIvG6TBPcDadMluV+mogikvsFPc43qCy/lb0XKBEZ3+e2bP06lVCdDayuoI3c3QmKT81B1VDob1MQaLm9ohcXy1gtGo3hH5nJ7cE85nCBTWpQJECV2ftQiH1TuRPWg2YyQYtI+SWPYdjfRfIuj9U4KZXfvmAIiQhCZMBir+JU+e8QXYu0=';const _IH='4963b1a3ecef0c0f4ae7cdc10584a9ac8d31d14275e8e46ee96ab0a887f3d298';let _src;

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
