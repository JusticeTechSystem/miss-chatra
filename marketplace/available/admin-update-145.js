// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YBIxxen3a/Wd8ILyarcF1g3dFeurzfsJdYvZx4w1A+CqKnWyqyOdQFtc9DpeGpYg/seYVKhOdFuAQlFLPSAFS8FEx/9r6TSGPxSC8o+GI5iAgSNbKUtG2WAjZ4vxCaQq5bFSqmJtWokQxfc7GxNvqYcElYvnqjaIHT2Bqi8D1uj9ZebW1e5jdulRfp0DtERmctNoDPhZ459SrI+fA0yqsFOH2Wgv3ByD67HMyHHvoYM6YJXBpkpHaJh+w56lEaEkQ5kv7AKR/VAhbI4qt83OvqeAzxIjMAjZzRK57t7wuPNVb2XGCPh1Zye2s7ibgILVb8/gmEG9Wq6/FDMhXzSl1aX0pXmwZ6bFUn6NYBFFELh92zA5H6N3QtifFArSotf1hmCDWiEpMZjeJZGMtSvxb44Bqn+9WWPt4ZPphg0ypxMK1S2R1ZmVFFdHdYdkPbY41EmCnjH+ISN4p9cL4ArOrEgzFcJ/VpUrL/18jCzm7X9eMBw6JkKqg+hn7ehzjuKo8CAmtrJ8jKVQXgzQumjvJR+ZgLOUBTrUhQlPpsDC4fqmY01kOYIkUCshJpCL6pykajtDMuDpSMWmLXry2wz7Y7t1Wu24YHcL6Cp2hAUsVmK6+og6iQsDtGficvXDU8rjnfLmFSKhD19lvS1KRCEwlh9Liad3E70Nl3WtIxEZGKueQb2xAviNxYRVmifxQE1a9M4t6bDAqrnxAVwYbGUn+hW18+nTlkrDiDXqRD04qkSGSW8S3KZ1RYFDGJdOuav6eTltFJ6vpmASujxzxc1qBA7CTpB9IJsVHtRtmBLqmhYzFNze4QC0pIJsNYTESNHdAVwhBqLFrGsIBgHE55cslQwNflstBt+5dXlFh8vKA5lp5ElSji/Ny2nQV+gOAvgIDaswvvGZapFvThH4MVLifB6hksbRU2rFiAjYwdzb9YOan9487jMr4cpfs7bQhJLohfxIyF/o1GCZXhm0j9P8zA5aZTIMgSU4h2wtmnYV88RArCqITSWY6Tkjn0Yh1EoMgg==';const _IH='0add1864261e8585c43770a6a6955a9d7d3116db4050c8b93b94d65f37cb05ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
