// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B7ujrrPJImJivRNR2wfjrq99oxZerGzP6XpAuHn1Uj69G10dsXt4xPHmU2IvwrQLUAyqqrPuU/7kUhEwh40b8JbRNRvZOKR6T93IDIyjEgnmXEF2bvJhkjvxqqFnSL7rAUgA3vkpMiRVWaLc9H9zbb6N/pQIu5zVReBrVN4/A8V+bkRkeN467nWESMyniJlctYF40EnEBgrLlywI/SyCOKGlBsN3+taZJLtImpAVt/KUAenmSiedF/MkOYuude86iwwxd2VnYhBTe3gEziE7MvgQO3RyAjR/1XnxyINwKDCKAciPTEyEV2uxs8h+UiyRpiwcpI4CA0a3b6AjvUfopYJDMaa+8finajWtEIN/XcR9c04NfjTSfYSliPuRAR1MA8Uyn3NoYmYHMInEPu23v9jSG9IJouWR1qQk0TCyvWq0aXoOhZ0dlfOKmSNSQPHIftHT88MW8qvVY0v3USEW0Vh3eTXk/2R+A2/BAxZYBWUoFHz4IXOECX379ld6rVXRIcRr1FviJgmP0JQlQTx3VEs06WESWJEqHUUXm9ogl4hEwObn04auKsUuedVW2akIZd+7vdKniqGcnZqxe3j1GdsShDtX6YN6f/whI3V7edsFqnWSkC6dkgoY8dzofPBchW0fSTERfOcKGclMhmtrQkojbDpUkxHzP4l/h8i0cn+m/zFm/qN1lrpvq2bZAOexRA2Y4lhAke2EEEzlmsZpJAYFG3z9FBxCFgC46z0unZNLw3bCAXai6ZeL5is0ijgdXH1Ih9JdtZoUILwsnV+KDa+PW6WohEErQegq7AVkiCDOhngHm/eOWCzZFzBvfzxa2WrKoXw8IsF1fYTAw3fZ9XvHt83qcxiSpL8SwlMt37GaBKPfCkkKMAR80azrab/EcfCQi+KIk/cRj3ybCafql9t078Z/YPgDgC4ocRe6rTjVR3WGb2p9ZezFZ0pqgxBlH/0prfLpw0ammG8oCS6WqId0R/tWhR1B9POa1w==';const _IH='3718ed073d89bbffb4f2a26db18c056d6fa8adb2b70babd1d213146432beced3';let _src;

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
