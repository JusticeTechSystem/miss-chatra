// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5letCyMxwzCO2xMnEbqGhYu8RWkxEvKTFRJl+ugdhACCoSUV9ORlG28a+zd7S5QzMh1e4+MEtUR731y8dYZLwtfWFuoEfnI+fBGpwfSleldExJdhvmBRkUjbQNuWz60QvoZ5ovSknWniWyWpLIuclVQNOTtICfD1U5he3gXDnIyaVdlm6k/aUcHn2dHnbvAJoZLMtDKh/45Im+QEkW4ajrfFDrN/wBD9N4JQkYi3DEIo6Hh8jy1cDKeuMeO7GVe+iv4eCRb730Ar2HI36+8xR6cNTYA4arzPoodcUUFvL7GD+7mtzB7nmGTQedTpOuN0uoT6m7J5MVAzSk9GSGNpxaUXtusxihbkniaiRdIauBqFY6lx3+W/5O8h7/Dlb/NsJmvaZ8xlOSoHK2VtqTi6dZx34f2/ANoOeCfp+qdRL5uMuQzPX4Irzqbsdvds4UoKjU0DZsK3IZNxnTgbBqv9srJ7cia5m/5HT/pvGck0lJySMOwaSxxYo4alaLWxzQWiVuIah1ayll/ZDJdyCJfeuR0CqZv/c1iNt4eki7QPCeAHlhWKURq+v7+wT+l5eVz96okpvEyhLXPlmBsDEs4NIn+SyldHsDuzq8Ufz8h9JblgHD4a73tLOdWMCAz9Z05M40gKHq1J9EHQKkw1g7q3wlOjqyj2BlGPxGUbqE6pOw36s+j4aYJzP+6Bs3wLHleEHT76w8LYEbA4tTUx8JhP1AmCUom80xxZ6DHdCAjTQDvCk57y7mnk1d+Xr9fhnTtMD/WSFOaV+T5W92IlCGMQIFBoVFhAa2w3XJPoHf5EkEpbLzGk/I75Xk3b+OMZRbsmFBddtWeYH6Jh6qZs/2TCl90pRPjBQveAZ4+Qd6NSFmgucYZ3Q6D1Ltk+KTVr98QSAxSFSMkBLOsOsakuZfOokxMR5xtQIHKy1Aajk3Ss5tBn+jGR8HnEhUiQmbewp04bPuLN1fY30/9QPYdzaxjXBf+EsP2oRct11yt0/z9Df4GykHvMkQoxsfQrwSiSWbbgTtPlFx0+9VfBIYKxXF+T/QhQ5sCN6idlB0+r+q1LmfcjAavx4+hxC0h9Lb4YJOek/2OSO8S2E41xUDI+oqmiF65rglKp0XUYPtueG7/lfDG1whWu43rlhCdUmjV9r9N/1YjcSlwT7IzQv241gtGqEZM5H7MRzQCJM2t+/vnwz1VJ/yd7xtRADKinmmUZ/66jD8+feY0jBOzOziZedDDw3BEt69z+tLMgj3OpUdLOYTZwdc+uNBdAjN4BUE9zTza1gTSwHvsuAJD4zIg/Qs19KkfS6eK7IWPCav0zToO9yEBiLVqlkslhdWCh5L8PniZOEDqOLO8zcl4Bn6KVMK/3tIsWrhkF0CcC3ug8lV066cnM8KYa3162uYAG8DAarHkcoOyDTNiylkB1h5zvW3rcZKSHdBSYwoSpKgKIeU14KXk4Fgzu/n3UthQUA2AwykwHXSsGDsO1A/IIliSLqTtWQL80/IqGS3RibdYG2Hw==';const _IH='3754bc3c3cc1b3983a19f68b20086f4147dc849cc0e19b771374270cfde64107';let _src;

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
