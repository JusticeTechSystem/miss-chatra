// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLjV3jX8BybcBGvr3sM6ODyYg1vFSkGOgz5IatyklVKFsNbooKVI0woZSiX/nOG4XONv2z5hpid+CVFw8U97B6+VJHdkCLZU76i9oVmNfsPWx0MN3koxIoMAguVxz0vnGT/IWIDCqxaC+8nC1BXuqiOk0m5xCQ+REiXNCC+F9pnWBaUSqoFLeFNdU/Mp5tW87vEjTX2ZPSIvTzruzVDISh7f/nuVeL8Mq7TjusjT6JrPIyZn4BPeaAuMyjNSe2sXeE/gyPecgGYyKa6InupUUhZc2b2ytT3132aEmOtH+rfo5FcqAaUbCgTMj5oIXcx8s2zTyzC9JcXYZKDS5ZjZhLhK4tE43vOZr49tcH68G9f+UP0DCgmVGgu1Mxg7JbDUwA3vv0sF1QVuyxCxjiSrZVP0UscnWmoM7NL8Ui+mryM/gOEbv+KNGI10bMLGV5yum/ZSQ7wfGJWJRVLr4toFKmKGEvN8ReMQCHfNESU/Dwu/8gpqwhntAl3qUzlhpmEHNnPEeDXbfVDBia4RzVsj79rZbTjweK8et86x6B21NIQPNbWoonGN9ZZ6S/elacNn88dwBICA0Y0yMqXQG/2Ebi9NgFbl5z8kQ3HLWlj3hiJaAv44PSiuONSSqLHdb5XO4AUB6S8tNiThXi7ovsZakdHt9KCMeFTpnRvSAyjSv1WBjY3z615QgfgKmsBGjOyJUTSbRLsswLaaEuG9Ty0lm2/U56NfYcVEj5lY0KlWVdJmclvlDEu3idTXfzkCng/UQkXM+TJhTRJEA3IeMhfwu/yNmacASBytdg3ch1b394Sfyl+ZNG6hqUaM4EjPxlVIneA/3APG+tkUUTZaVj+1NlP9DjAxPYVH82TgIvQg7ad9RPWW6IQKT7kAZCIDxKSfngqaP7jExFlRiCM4/5uSZWT8j/OwPkvdhPvUJJd0sUnM/MTtQ5UPXSBpWKBunrxaQCsOg0q83p2EZ9pLv4hu1tJV6rOd+/UNUqCX5KU6KZzJI5eAbKllK2mHUWtBVDHkZ8L4hR9qVB5rm0nH/6zWv6SrqQQsA4CzuPeaRPxtd7poKE2mZNonMyiBmG8vJbji+hUQjnVYyWLaegwkbwwA4VubOt3eNGYUYg17NcP5/9mFmOQN4wttwrOZ1U/u5tbpnSpIKVouM0N0fde+++8eBCWSL2d8qoZwCZqhQaaCWtGHJUGh2mcsur13x+7BDNHYwoPbWlsnyxeWRMSln+7HaUuz7kbNy6e1GJEE/7adZMaXJ7omlBjWun2YCpl27KQ/sDLsz0ioAQLyBQbxcM2llmvKb9xDWJQhEa0Qw709FHESZ3IBSfW00IqK0OKxcSXpSCHVR3Yb7gFsq/';const _IH='923c5db43367219e6a5d21189f1f6d8fa32bfd1f81bca5a1d98657d547525009';let _src;

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
