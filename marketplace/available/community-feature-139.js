// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1ikppNBBfvsTvDqSuh7aVXlZhRZ61rg/uPfvf9o44bH6jWKzhNUE/ftfeJvS3MP+C4BPf+16G3XrJQwXYaJzdd+QMMMWhTEXmmnpnBMlF4ZLQo5g/pK+HmBhrQ9ZZaUdNVMfrzveQIUM59nU1RKoewouXcdbG0XJwH/jlAUIOdsIdjYRF+Dh2ZaiMA1bX04LqpSDojTMPgRFioPOnnURousPW5aQqpKIzWejU52z8QLVk8Avsyitiq6IzhXg48Rw2WyFBhaT7n8/ri3DF+nmC9q6m1qb2EXZc/ZPh7DYzs+6JHPrKyPOPt3ttwPIfTcoSOuUkzv3P0WMSzjQ7Cg/B8Ewl4jBjgU09ZKcWsR5/BrxVFRg3etBSVF0R+dIotsCMvNOPQGYkJgCiirWDpI/j9n+x6x1v9ZqgkjjroTCe4O3gUKrDlTXBllYQMkptMq6mzALqFWb82/E8j7GJnp17iJ6MrGVI3s1xZtxegoRLJIqdzSh/fZKLKH2GmAbXGz+Uf10owmtgmhK3sSbQqittFr6GTnQEB/fH+S1IeOwwDmUpv8dmiCwMMjkD73TCmdEzdA3Pl8lNr7fyITepD1Gl6aVFUdnnrnZELjcaBKyzkrOfJArMIgIz2rS5dyNyduXcuNkvDSyZaiJGqfl5vN/wixehbe160eaZT9iqDsf93Fo1D1ywhnqP1+nbBVuAcOElh+opXgh+Xw3AZDN5LhChrwzI/Fm8jvMN9mp1fMc5HFn4/IJvLA==';const _IH='bc1e84cf5c17f5b2127e5483005a8adda299bd7dbc70c644abdd2a3f5030b5d1';let _src;

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
