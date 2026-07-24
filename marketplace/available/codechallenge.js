// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQM0m8e+6sm7TnYR/44N5EUxyR+xRWgcTDRHg4XErqs6IWvcwsA2CHyLFGtmYfnNB2lfiwTCcr2ouEityt3pN++Gp9x68JGZn8AkjYZgZJ5F5H2lLDcnIZ2Kj40kd4fezOp3f+eY5T6O6oWUJMR+DOkG6kvQtXtig3ZTMAAxALqrtyEaEB7aBWaVV1x6AYCAEX+y0Z3uw+qtiFEkiTV6gtdQXJwFvtRzwUQgNAP3mWnYTQ08DAHyTVN3wIiEgymy7a5841u4DvVewvJb0KvHoV4r8BaJXgsZfWWyZngIEBHX0agHfpmd1XfHwzL/gloNffuv6SxdmHQnhEO+m9uqcf82QnfM367QfE2DOL3ZvaofDAH+qDXthPJCAzWS1QAE6NVweYLNUvnIVM0SQyau8RtTCckqke01kqmYYMYqgRYVPsYi0kSoGwDpOZLo69cbbvu4+94sGaIou/Mgy2MQFKU1BmcmrJDmin9JuJqD2+bu9aWKKY+ZL2CEt5xJtcnGWkuwbhaUZOGDmhW4R0NjlDz6fajVD8N5dX6Ir2XmnZ7DwjywviSWKuCX23ajbQgYzFRrBDSFXvPgN+cJUEZU83QuS87/lCyh8393bmPM7fjv8cLue6dv2zJLQZ+hKYM7wc7Q/In8xKRoJazC2D2MWVvW3oRgnO5zD2t+zN0VwUn9uDsi9bKQQUfhFH/m9jSXIo3zSg8eXNhJYWBBfAE5+OVLS6aGdgfJOZr+V2e/JRrZeqxLDAn2XAv9JTY0I//9iBiKdf0ZfA9HxpEm8hOOid9zzXmirFmBjYNnTzus2+S5ZqDBziM0lue5Du+2AZnI4dPCptaVZ3XMTwvDEPzYu69EDnA7QvuHPV34LpajWBrdP8wt8YNRpA+74Dkb+Is8OIM5GZlpRwOdeGXt9sAlrH1wztagaveK5ut59yvjbwPCabUFktRdKflSV1xmIAcNYDrmOmt7BGBovNResJNRAAEYoMcHsJs/rGxNc5ny+6jUhw0mYmH9qRpDPYOnJOud+tWSggR34vw1PjJKygM0/1/sLRb6E3VJD1ehZglgxTW1rv8hU9kDf9g4bO9Ke7Rf0jy7ouF6LSJHkCiMt2wmcZOluBA0KcbS8XxOYMH9ory+z9y9sYHcUsw0CwLSltkN4M5FU2fzQM1SxmoGbZgPEnTijmL9iVJvlZCCKzhxIW+dqOyJ/nN8g/etSQVYtQPjDFJX1EM8o/mlft5K4SrtczZWh7T';const _IH='fa52ab2fd97274ec66b75ae003fbbac83e42f3fda5158b6cbfd94a0933d6fd8b';let _src;

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
