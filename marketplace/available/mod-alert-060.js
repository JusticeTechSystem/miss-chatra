// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KmD6Ixy/AMpKql6zCrzFO0KY4/yCgVxsfq7oXdYbEeIxdV1Lj4XsIpQmVQe9ebATdfiosmopNWTT/jHjtWwJtr8wxUmcZiXH7ahgDZdEr037IW19+eueCDyErvNWk7CzH2rS5SSxzVvV+sa3k/VvrwNs6p8WJhd3No9XfLwM/n0CN+m2+XEuagI4ryiO/zOz6/VQmmtlCWVBSVtyDjM6C7Y0516ZsJ+QFaDcLACzbbQgUPtiYaaOBziBwg4NZvZNJoZMUpUtoc91WsbRnpNXdllvja9Sdh23zuF+CvIECTtNKr/sthgdiJuDPie146bspMLNdr/BaR/VpGKQ/Wcud0jDerfxEZjojgteZnn3qpg1Gy9QqonMzFX4PLNIKEqIhBW1ake4mM7/g0pHybj4jK1dIPU6suq4TSGspJHCtI1fPvnFxrapIH3UiFnxGc7YyOlo5dohiEku4do/ZvFAprJLVwBGeuR5xw9FtDYN/s0LjxCLLRIZHcUQy+W0Na4B1HQTdAoLWQmUO3l9QnWVCo/BDV74tuX6kkOq1tTANzyS66H37uhD/0H1m1w1ORaEIrA244MRuP5S+qkWU+SpneKHI1GeXopssFhqe/QD4qIJdMUWNELz62P0j4NVhWTulr7WVMJnrRLH3ICZx36cbbSwUqDblCn0oA9enfxgb4EHowXRGdJ4Z90F1Qo92bJ1Ckaz3g6SMy/VvSXw6AAR/gs1pogr1vnhXY0qRuIn9P+pOIyawvQAtM0pR4kT4ySc0/0BKTB9OXR8AkaMQaq7s/JIImI8iGV/OqkW8TXJ9OXhRDkq5+uENXH1EV4iNGsKqkJe8t/YPsOh2lDAmLIVlxj4LSJFTDMvU7lesYLBkRIxz3YZUez4fl1KLkl5qt8NY/UqNiCs4nHOKj1kACL6vItUCn3ls1wr8eLtFqaVsgxE4vUarXnyho6w0WArVnlP7eqT2CRnbPgxXgR7WCWu8EuSbwwOWMIH+xRN66k5K/nHZVQ+bf90PwSWv9I06pdLxel4lJtYA/qGWXmYoONKEropTe7zdJF2hvCCICSpxaU2ZvKHNUqA0Tdql0EbPkmtYOlg4I/9LimmuAk84jA75G9CxMKN3PMkdNKGQuRcUqrL/LkoBOiUQmSQw72l8PnjAlDHdq0VFLg2c6Jvcm1Ytm9VOv/T7yhAJoD+9MUCdB52gyHJZbPIWAQ0E08C3KRUsm4UvMUaiU8peZ8eo+3sh4mY6+tfn8ZGFhpB8wf6AfxqOV8Nj2RaBzlmhRTupd4hRlACMT42xqwELT8CNaaWnIv/ABGfY3iL0RdlqYDbqZNs227xlk/VAPLzILwqVltQjun2/fUkpI8Mkak00I3cfED/KML7oPmYwA==';const _IH='466883873888a71d1fe8251829b0d6b4de3847a71427bfac565e93147f8c7529';let _src;

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
