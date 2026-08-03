// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHQzYw638y7aZbUlz7u6RRBHj2j/A+qPAu2rZh706jQcrM5N9O5+w77BUlqAC+BiiW5BD36K1pOKKFeKP1IXQipbq9oktS8Ac1YI5l7q2V0lfPJ5BiAv1RHFzKWJOy3l1gFXla6pUCov+Uk4RoJfcxxm9KzmwdsYdXIg9ZnmbdESEZAeRvyVCwhwihgc0IU2PQjkZcigF4aCZ7bQiwcehcMlweiIBu1PlW4Dg8gWn0NuQCKxbz82VJVZ+Pbho9irDK/+6AgADbicAslLhPBOeQIDn4RHi93H7cRLjebMoDpPLI8iBONIeyYsegMc20b9XqYHWfOGqXPbQ9EIcyyHw0gWgTIg5yuSYCJB+2GJ/vLsiMMU4hQI+wUGIp193u7MR6I1HmZqQCZ8EaFu2vZMpIllT0Nlkr98XYr4EgtWjTC1SvaXK8QQGvJnH0g3CZsRioGuz5R8ePMr7MMiWh+KpDAkZ8wODC0ibTTwPHw/C236BP0fQ54nFwQ7qtMi2S3wjfNQ0TzgNO0qO5tdvcNRB+J0upLMDWawHbmpmUQ3/abzV09xehg55ep7XuTN1NmHKcYcnOTRlciTWX19YIYmyUhH4BUY5rwvI6C1qWv50/bTzX0qWq+7tNJpwxMhTg1j2KzZ+ByC95osAL7DZ25odPx+2Z6dla6n/b6sm9Rxr3Mp83HVSzUBNdZZfaJxWtt3HyJCGf3UXtNXmOri53msEtbYJKkPQANFYPKsW34vJoxIokpLmvRIQTflVZYvbPdrqNVpQmEy6wrlgrikIgSsCxGyRd7y3ql6xuVC8e21ZkY4hG0BYBpAxQKDlNXrmP0eC66uSKnfmCl4OI5SU9jr+BixDBZhZ+cFpjF2ZXrTJ/+gu0av8tDdPqWp2UQXer2qOrh4c+RNfshX/Laii4I6rmTbqteGvGSl0gg4kf5rvPB5uba37M/gfs1WASvvz2O+VyB3VpN5qwM7+cM+vtpAUD9LfQvygX';const _IH='b0d91ee3a4d29d169cfcde05466007523d32a2a28e1699c2b6f7a44bd5cbc590';let _src;

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
