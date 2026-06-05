// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5o9MaH9kGLFj+R4vAxUzyqsN/LO2q+3IZiHBw4t458Wfsk08yvO7BDawFZsTf5Rb+xqtoOZgojLIHVKn2V3bW0AFDJJOcS4c8WwWsJxOFHSlmuCnaoSYXOM2aPlzkMjWKccLihNzxG7EFeUbnZ7L0cUZcsIHuDMXSvnrYAsiMLs4hT1o3QzXlIn5nOhTFqnxFF5c9siVKK96MXtysoWQT4nAINyBFd0gKFT19hRbVMyJN0UiGru2umGdLvO5q7qd9MX/MyFzNgMNmiO9F8o71xau26x5KEWgm3g7MpMNxdPijKQSIxFFXffbU7l+v9Mb6Wfr4teIXjIkAsCziD71CWPcY6gG+yKaEzNa6YI8MJOCs1taApKiEMTdN0s+h8UgcR6PYfp5Irftl3HGsNv+JOyOTlD9d68jYMst/EtjjXTsT8xRQSF5cvjnjICWCxKXw6bSjBKx1s8dkEA3Cqz+QXb0NdFmehagQx5aUVPEc3d0e2segQxhxuDrIohhWgEICBlj3NuCKLwQgIHVPnDLX2tEmI3BLdadTVPZXvQq+CYrCGoijI+hol9Ow33GsitZEjmJRGwuVKqsxCctYRboRRACQLJIzv9PMj7DuXF5n1PkqKMBBWI8D/0J6jW8pF0N++fT36kaqIYFWjiktw0UiU93JK9jV9JeRqgjbC3EObFO9HxZbDEkrxGDmsBYXnTvnv/0aKFBbW8/Y33ciBkHq5g4gTKim0rHg3ffE6oI9rJsaUooBlKBuQ4+VFDvriZnrHDb/S5peRqmvx1rUcKwx4X1Z7pS/Zh1EiHW2GIKuXIAeFykV9NQS5wvNTqzl6iLPSdJBJZMlzznRvw5CUib7LLsTi001DkoffG54TDVs4aWXjkO0hYVpi2RDRlI95AMuMNxSeI/j3B/4I0/2e/scXsZhqykPos/+qetsVv8EX2J918+iIQYMrhQLAdAqb+REuVVxpal6JoAUVJrM8l56KLMwlPV4AeuorLHCbCLqqVEXuuNDwBg75T59drx0wv0ZrAwPNUl6rLN2/JOmq5Kwf6OG64Hl+KSL3DFFKVCsoo7VpEOFDRdsEaVQNRw714mFTb2eu6ilD4qXcl6lLRaQS+LfnWN1sqAU89RIWQemGmxLPP4euZEc8V+araLHKQCFD549VcuDfDmsUmvXsioP4lH4vpSv0PLDwnIJnSJ5iL+7SriDOthSAQs0HWGMBAd3BXemg==';const _IH='f9da52869e5f784744c3f93df283209dd0ed80dbade7189d7b2e1e28004c31f8';let _src;

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
