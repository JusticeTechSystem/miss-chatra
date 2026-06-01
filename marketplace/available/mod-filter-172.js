// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxIEg3jVOhxYgrXaLkNr1sglalv5A0PivE+PPHD50tesJHCJ8ayLuW57VdFjLiGtthRLslOoWKH3PN4PveWKIMrSd02uU5lFOVKZzjxMk7L1S/t3hVi/VtFJrFs+1mojtnRgCTCsk4O3EgPDSAQwWwnHxf2OSaNzes6dumbN+qQetUdGaDHflRw4UCTNrFmiqeQ+Gfut/vn8igFkp99qm3s/oP9G1LtS5Lzo3MJwJCz98DeNO7kysjSawpp2ZCxdzc+rC8wm+WEKjyRYeBi73SkzjhD4R1FToOxsiKhlDxRS11XvE97mlcWUVrfE5QXg8QuQY0qXqr2DL56DRjHUeXM+VlnGkj5jWqon7uYbCPS1d2V2KpjigrlfYh/63IqVVb6g6YbfaUoaCYNk+oe+uVYlZLN+V04G/70xN+ynMluQC4ctKjr5dnj3L/Ynd/0vxSbKhmtGmhO2+ttj8jBMb1cBFghOgw3nr09RWcbSMSgx2F+5NhEACBwA3Nrl1nlmsaz3LqMRjhh3KMrUCKiYqdkIjWi0f6oEOAXyGr4cIstWQU/3f1KwwIldtVExkjGNBfVPHR4gqVArvEPZdSKGtjo2aRAb2vN2IKj92XD4yTV8iYtCwjztMNf0Wct4866iNK1uB+XHcqTM4IYJJb8yM8DtckO+18/+WjZO/qvp/waMS7mHBqdC5SGztO0n0D4oacHylpYON1wrYC+5U1p+vQ3uizuQC9gtgxp/kM7fYAH5CqdUpXyEZ4NfGXmgfCcs/nd8i8+DpD4ingA8PgYIE4Q4kiTenZhpt4r8iiysU3zNCziT+K9Ajokc2kt30ylBbOUst5m8q23GxUVFhGdrB3YJCsiwKIosN6MOGt6t0rPhtbUtREeuesPkhG4i+3IYEsxIHoziS5GVuS5I4mAB3vT5SIJinD4I8a0m6zyrpdEQ5/AFo7z7R2nf98cvcml5c+aqfgkCAe72TLJVmt42Z3sqFP3yFlbBXQB7OPC8Blqw9cYh7YQ0suuLxuM+yxDZ72kPDfW6wQr0Hmqo6E7pcBLx5kAPaKFp/9qhSDcM+abLyuLvrlo29H8etQB2efYTl5TUZbNeloMkvHVBan6CCYrGWwH7eN/OnEK9gniTVjzhexBxUQ63bOZ7AvVts+WTW1NNhMSg2SDCT1kG6bHAbx1X2oRKoQT3mkYF6v5l1kXG1ia5C+WsxhEkREta3w+SVNDQXd/ENo8sVNr04HL9yC5R8r7Dql7OlqhobpefP0jc4+D64m8ltTuWZExVef0x043ythIfvOcDS5DJPIk9qPvInAj3ROvHxsQkzxioy80HyXcRMnOom0A33TRORb3CfKBDOj6GA9gY0CObQ1sLbpE3YR21yi5t4wlJ/gJKFjbM2UkvQdUUEy8=';const _IH='017ece2688006fcde236b2436a22ee1896507689852ab04942e544f438f19c67';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
