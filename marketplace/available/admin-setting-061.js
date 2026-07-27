// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvbfElsRfpry63adiWgfFX+5gCeOn5F0vcmVaLRVoLX7d4S+2kKpAibc/a/C5zp8hRlElWVs/xRZIswzDc17NUbDCNtimlm+83QEaKkF7CBEszSPFlOokKgP5t+5cplYdNkgE47tLDu7GGbodlJ4O5HBglskCwMzM6hj4AZYalyJoyPRO/RKIOZaU4i/uKFQPmoRkRig29GvkVW9QpDZm44IYNetYFxUqcJLZESzQUOuhroPeUjDRMPCl5gyRS9nY9YeOmkuguwoi0if2jl3AR4tCldqQ9t10Vu4v//TrSu3Isk63gDXCJCvH7jSnohIc2QMeVIztYz3QAJ/vl+9vvh/wYcAPpkaFl4V8X5Gi8bl03ucCkB97MRxFV5aS4Z7nfCcYTOFWS8eK/3FN5z2+MPJyiT3Bn7yPpps8nYNWZaAwdVNOGv3Xke4dDh0FoJuSI6OGfiwPzGVHhUrtLIlKGWHqH4wFyubGPUUZGEWknQ8tPD1fK88SV1bhV7vVkuZDRLQw9/LDt/jbaGkVWzsClajXfYpZmnp6jhw0/KK723EteluCtY3VM8wkf54YbtYcvo0IBSi5gC8gYCdpwZtsNR4xaAncyh3lIBFEgZZZFAMy+hJwSjF32KwDWWdRi4XhdlgtnrJ3NhqYobYzgGxHldKSM+kbOm6TMgM7W9uwe1bR/8teS+4j2tH7w1TuM4tXypo0Pm5sbzmtw8Jyu5sB4SC22NA1D3Rj4D/NFUhWlgL6IKA8zRoRFX1mXiOGTTDDS+WxAH5nFQJz5VgVNwb8JKsea+kbpjd/+KunmpX//yTS+RYFeCR+rI277mAltxP+J+n18TO0pW0v8lPmxFpWHmfhDhAuNEE5mN8WR7/lXteFG2HwGqAe7daJsFBsLQeOekP0SJ+1MGS/pFuCI3MDf4bus1YXwSxkLB8h1VbNhQMIlDXSowCCHPnbp9xCHduaedvfW9gWrvV72vURZKXhxLdXlC9itqp5hLEVrEUC9L762ilIqGRjQPMRF03CPUrA2PxQd';const _IH='51d56e43bd2b874633af7b25db6683353fc89a4ed2f20e2564b9ac2a5159ea22';let _src;

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
