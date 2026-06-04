// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QV3gT3lfNx4XfhEW1KmVvutYPhi4SHNI2sxJQHsYNKpFNlXYDXzCk95lcf59/9IOavx5Vh3UWlyJ2DJMrva4/0bJJmv9Y1rUkpIU02pBOPYz4N7celK5qV3KzxWLccR18dpLTXiUXzfws9ihP7ju/PMBRVucAL0ulQbj9KUms2ePGVSetCugdOh42ZA3aAvAvz4cyGKE4pxpRukQ1AqsMalxBvRFcEERF4DuO4cmlAl7NM1R9ODbYbpwZJywM/qimq9wZOIe/dBatbIeJ8f92IRYUFeVtqoUtJBfXi7ETDT+tyArWoOJ42sGVeEC9S6iFOAO7b4beLZGC7J/rNG8qyXlijgNTyXq8HCxMEBQZr6jeVMo7/koBW0sYaiVHXmy+v1Tkh4d8FtdNA/LzsWZRKxYEdoScbSEOjFltaabeXrpIOeExCa0aqcJ2mXDxvM/kqbM953RXzYjcH7wlMmUSRm7dvtp+az+teG8TKvN/AGpJYVIa2DP1YBg3SrZzeRPkjWouWHyQIacKWLipoTEmUxnJspPMz1oxnLMRizBaic1DlHQ+0hn/k6Wxt8WnVeVIWe6o7y5mh1yakKVawJNz/+WmsdMvgJbyYk/s80KQ8fBoI9wVDnPiTDpzmhYn+63FfyH5HKqMSK5VatGjerB8/4ridiKTWKugV7QivItnDKKud7jzqc5YN5EXFPAmlkrAD4MQjbEK+oR3io6cxQpxkAM2eEDJbWBQnr+LeCTwugceG4BC6ft5fM5VE9rZelo6YrZwcuykm2EWITBQ2xnpm6WR21Y6IDNEgMkFg6pO6bpcehKcK6ykh5pIM9yeuL2HB1+F/FTSNYosOAHKSPnr9vjkIsmqFPBgsx5W4qDBe5XKucE2/3AqqAKynyv4NNBla8TBYLkGefwn6vEFGt178ruerMvgWNXVMdLv3SBJY5wcUPLcgKIY1n+qX5yGbULTSbQJ3K5/j5Jjkihlxf1kov721P6xkcZU3Ff1cckDPfvdaALX/56LdH6QLQNe6k4QiPVm2eppx9CBKTvgetLBAZhQTzceZ4Ft83N8t6DArVQIMn4cm/aEac/NalERLmZcCbGa4GqYq3DOU7daA5IFfZ1vZEUHPhSjDdQ6u4g/3CuWLEkebV9x6ROiS6jMHx2rsXBF8CvJfA9iNXMXChpeh13mU56Ntq/NbDgiDcOQDXEVxMxqz3c8Pmmc1t10IYiX0JSGIHHeTR6JRNA7m8aCyzE1h2EE2GARhO3y6DochYxdESnukq7dpbWL6E0WlcPkgGvoMx5bd+kXNTeSa5KXLwxiwwABnXritR4oFCTMh/MCji7bvIyggwdtCorfuxWbdzvPxerC8FS6n07f/NTzs3zx52zTJC1PaSo7IdPMJ0LjI37xQkWhwyaj0ugFTLven7lYXiqVg/lR/2HKGKpPuOfK0VktTYfUT/c6BH5nACKEsTGVlh1XwWCVVPeWJJ/RSQNxTlnJCKhZobYcLzZV59KdJ6UdzXqG0uVakEZ3aAdp5vtf3wmiRaKGuGhIx9Fq748r8FCbBzRZHyFK3TWk9gJiWoSEIkSp8YMAR36JbSHPyTVvTPaN1F4eU+n19A8AkYpf5CdCD1nwxKK';const _IH='ed15a6f6b8cbeadaf03699c2e1a029e0155bf2c5c29af892492e59e92fa8c5e7';let _src;

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
