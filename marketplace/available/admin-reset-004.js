// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7opzqMZoYKKBJwIMMURIP+dLHONZpLkX71cAh8u28cRkrRav876tvi8MC8vYFckIZhDm+7G2lfzt9AacCVvpdbeTpHVQra2pe01nWzEtiXQa3FKXJE8W/+97D7HqBIcZL4QM5tf769TfU+2TXSarXpoh17ba+ILSOByzLGtLCt+LzsMl3tHBlBRkEXeHFXkYQc5HkawZnAFOiLkXUk8SZdQlPm/EtTsBqhj8T38KZxlYCxXrTcohz4U74PsfegmcXIlnWLr4LLDh8DRK7s55DXIoaSdhxLWkcJBVZDuu6s4CoZa7GuuGJ1liwqd7N/TRbpN2nL3+Kdhrqub5mJniLrC0EvrXZL7bqCua2X12Oa0YexqMC0a+d7qODcpS7RqQRJ9/be1T9WhpYU+An88yX8StCowBr/1ESMZ7m38mklfTpplKFJftKgxnDaR9IsJBgXOILEPsITtnmPr5w+SlQjv8uY5IhOlcRBmcb6V+iPrZKqJyBp9BTWrhPVdaTYneoheaMS1aPHWhLysOLQNduxWy4GWvYunGJMc3uYX2HdYAsr08RYoxEwVpK1Tb88vFOq+/mzxdx3M3MUyEbtEPj1Qow0A5tAQwolySVoxFp1QAudvKlxVnvJXdD7XrIlfYxK030JtBSbYyexAOCdF3AmOz1jra4kudaayp1vyO/Qk4A50ZyUwDtaznrbzu31W83/V318wqEtNzTqebfJ9v4mc5K4MSK91a6y/OIjbH/A7Klfixv8gE5Ftf9huMObGZGX9s8fgOjr2n2MBOqKsTqJRnsMde+XH/yQ/iaxhprNir7MULIKOpnKhaB33P+Y2fBug5JkxxY4PTjF7N/l8ztfjYIgjVIaMijuX4n9lcDRpMl4p7IPkE1CJDlTcqWWfsyAxsuvpnssG53sB2flHjDPfZrNW8Wvbfl/KZtA8X17xnj8ILCw9U6CiHLqW9qnrSuuf34ZrXLU8haAMk4a5fagK9+rlKJSRZqi/BusPhpRPgGA==';const _IH='8572cf6d796fb26e6108c3b446b412d81b58534265b46ee7f81cef2c24086d3a';let _src;

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
