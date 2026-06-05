// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OqUMwAMJ29XPCwUad4HCItZ09CDTQLSef5ZzuL2i9SC4Kvnn5wKM9nTZsEnzEE5h/fhX8oPfmcxmRw15AwEV5z9KB/5E8jeSZezOwHYfsRYzAeBjN2a4hBJrRjerZTpKPCwm6gDU6Rcvolp9AajG76tsLePfM5WI7YlFr64otnxOEdbwmiilzlILpEDlBkT0oBlQcGXnDoG72Aqg9TbtvckpEzB7XSKk5GbaEkbnP1O9rIru5FEptcbyb3JOMP1Un69oR62Qh42TcrddxpZBkkmp9LBx0TiS9PQujawhAuYnbtY0ftURdl5bIbn6p5b1PXU/aqIfezvkNuKslUNCvVE+kyyEbOW+x4PhzFDjHjZiUgEaFR/CiBxDqWxxJdRcOH1tV4EvzJcgR8ao3gmqkMs4Om6H3jj1Sqycol1o120r6q+qgPmjNX1mjR92Gyw8DXFHjFXYZdnNrIIwa4VkLs0Uu8mhaQSF0E5tL+x32KjgqyaHaNFt+je3CLCiyXy7w3ghnl3A+qPyLZMetqCzx7U+jO/nPlpRWoMXnFbfdn8MScSpJve0NQvaA8meq7Dnlh/qA7VbWyQgApLWZ3kyNYHdU+0KOmGRBPfujfvy42HIDW93G3cghoeL/GlqMyUWavv1djCiL2iTnpd6b6D3RDe4ddCp9vj6NToT1RvjgMTHqfgRS8t3RtIieDSgPg46yCH08PKbKBJxTjWrZxM6hxQCJK3z+c/b3t5D9yswXbR3ByGRJwPQWTKNenDiYHRIKKVVspFx8K78P6wTTXdSpeBcHVXIdoBcu0M37QqQqTSMjPrS5coAJneZ7x/G5UXAu5JdhK73KUH1u8J8pYC6d3493qti6gpb6koQK6JrxEnl6Ji6kOcLtyTBfh/EQdadiQsX+JkCrzP9Dza2C52wTBZM5+ZfwK/5Ul1DLuCYJv+xXJk0chXbxjDaLn3pFxsNjwGQwk4fNdTtRDIkPfqp9Il3MUIezxIhvCR7NBOGmBidIvd4TsNWy1wX/Gs4dRBUngZ4qBHjDbn7R72tSae9jQzeZlRJ3gd2VGL7NL5qOqXvtZnInOoPC+J3Ll+cixEbNqlQz+hiXdb9hOxyNnAso9PdbSLRG4MfUW5NCpDPPM29J/nF8DPqDfttxTIdpD/lcxsB0W+3Nx+ksEc0LjGQVV7WGqHArbTmXXKS+qfPKJTauTpLZZBcdcsrnfsp103mQ+SEkeoApZV3fv09GZ5rsj6LCvoey1Twcg1wB4NN1jAVSQY/dyf+HrMyxlVfCH6B7tD6XC6kt/rcT+ZhLwoRrHQOXFqqTv0pAGbtEDBIVOb52iVHCC5fF4wEaSRn5Id/c2UwCNjO91NA1FJlFZBIfUs/TaUrDP9VDVzKw4rMdEffjE+C33pKkei19eGevfqWeRcGhKRSWbXDwO7c6YOCuGl8hNkZICqrgKlyECpaIOPBT7kOWnQwmDP7/F3Ox3zFs8yS+ISo6DPOjlxDB82M828lDaXJCQ3kpBGwtcDHHV6P2fLTfiOE/F6JF/0dVe89eZrB3RRf0UpI1qdSLhpXCEL/YZ9ktua5DAHvEIlUoSELoIpOzQTVSthYTCfCJmPpUP/ruUlLHeHVD7GbwqLH3gYzbGVnGYj6RHbicX7SrP4/s9f3hZ4BsQ4KcdvqQn6Cmy0eAQsmdoibCz2/ZM6Caxc1VmLG+P30xVvTDzcWlGcJotLpFZrfvuCLr3C06qg/OcZ3zlFWNtCLzJTkk8DAdIKEg3cDpU1XE4FeXSOUw+AVQzeW6+Yuurcz1d7oSQ/w6VHvJis2GeqyZnjkVvJITpAZXA==';const _IH='f62b8947e7a6d8ad6ad0e4690e44849fa5c9fb526ced58576eaf93f46d4692b9';let _src;

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
