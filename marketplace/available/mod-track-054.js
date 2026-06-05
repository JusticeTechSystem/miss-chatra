// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iNrEnD3CcxewDGPFArsXTlR1Y1j5Syruxj6BlAdkHQnfO5RYLRqV34eyYdtQF2MU2xYhEbua5YZtSdCuWf1LmNbMjYeTC7DQ/2v48FMhq+iAhIdyntY7cvOqLcIyN5fMj7Q/JAF8lLbt5SsGMIv55+4Iz3IWZ0HbbnTHNWaEi1oJqHqk40XSQoSrg7Q1JUhxI98pD7ODqltRg7cFO+BOLcS/h2Lv7vTpk7XlRonhrsvy5LKvILKzJCHaKMpwLpeMVQNwo2wDpy6smoEM59RutfO/IMfiXhRJJYK9tLgMe1YBGlUz1jnvk2bFSZgDwMMnYrQ+Eo804ilhaaiYJURSXUCNVh4Igh6aZXEFl0AerIZdPFYVfEeZPuUSBxV+MB1E+v45EC/ge3qRieuV0ibmLQmyEb8J5tB4uqmXc8n32vEp2dSZIrU8W/2zAnTsqkpG3z8VbKoQt8iL4vG6PEHhB7YqF9mDdkRDNAjIp27+HQwyTOE5megcaJy/WaVCiSv0vBFC8/LP2kglbXhIsYwMP8d5GMzFGFO+sf2em6QvtG/ju8LVSRTtk2NMvZNzroEh6gXZyT1NtnUcRl+13wuqkYLxl4h4+L6kylsahUrlLmVNtdGOULYzZLFV0bhtn+u3XIk2ACqbVA/CWlKO/S4b4CkWUIFqiiq3UVR/aPMNkxwU8aSYAYnrBykzOotLXpgxCt6UA9tEN2BRhO4bJ621oYXaWLki1biFyUwZCxMOPesmU7rkR1LiDE4qvfxiM1DIDtDxzTKRcrOdLa07SdKpUHeTZx/37fWiXg+cz20BPDDVTdey8RxO7lHJBy0wYrRkduyfxsGbTdqiWDK9dRSvho16yf7nPksoKEaK/KBgctk6AFGNlRF6MYvZYR4ItclzgrIs34AiyXwOzbJZ4FYCN+D0q7wuf1JAJpUqMzIq9DkcHShMvD11uQeqTy4AKZpkQJIsG3ddEBOVtKjgwDMVIym6a2SKRE67M99JnQG4zCayMrPIvph8K7GQ0QKRLiaFdLDsS25dmYDEzEiaQTId6S1lMeIbMfYbodD/9ZMkSwChOJ/0JdFuoedLSpo8QKc9khzbDtJXQIbZ8ZzZZxxA1n+k4gW5O3QnBjnU4xG5TZ6N/EX8FqvUzj5tVTbt2MyLuBpw8gnN3bWY3P7kiMq9TvGvR3vx+ic/JpCcbP3oSx+tHox3sN1Gp4cd7tT/+Fc7q9mkdXqDqZay1R9C44aOOLutkZ1QDDHDIeO1VxboYODpb66dMsOWXPm3jY9rsQF2T2SP6LeGXvVWVJDQexayVFbAVErdr6NESYwvrowDawQiUd/a1hMN7lZ05DJ0qCDv+4jEah3Ry2vHVnRlmN7GsGwODrkV+I3WQA==';const _IH='85e2868e8b996e79278e0d3e149830647b01dc500e64fb90e3d92d424bc9cd89';let _src;

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
