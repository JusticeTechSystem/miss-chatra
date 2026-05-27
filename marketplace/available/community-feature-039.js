// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DFZtKRCyvMNsmN5bhktVxhg96aQRdlTL4NAqQHwsT2ZcOJ6QowOzEXnz/XToX/B9Cpk7L/mK82SeFA2XiEO4H/Smi1IVB/vNcS8o2H1jUWsGKOd7BNHxFutYYn3BBa9OFGbZGyKL9H2e3ToewQmxnmDB5kd2QMH+cQBXimBMHCsf1OVEPAh9MmjO275He/J2S9JEOxof4ZUy3S9wSSI3YqgpFDJa/CgT7wpzIa0V0SDFNlswQIeDFk7GNCn7UKXWhHL3iPJe92xb/v5ewZdhaia5PQ0fjCyZhExuxXNQFkgCLlTa30EU87Dwj5giypF2uKsjHNDwxMODxv3sbfhp0PRY3MY5Ov354OjWULhCMprxYDZUSup8fA3JWxebysR5rfSrxFIyAZERBropVrb3nBTYpmEVZNQnKcBVMDuRX2XZf1LRoFxoQfCU2KZeg4zXfPAsqjUc/kZB/NaqXPJFIW2KQvBz37zUDzsejiFVk/gvFhE0pRm6fgZVZ28yHifhZnjkadwnCGqYHbxAk04CjQ6ZTXQ29P9kaNXB6DVE9HnoH15Dc6XUiQPKFXaU0NLXLc7A6QAMa+3Ovtq5PlQb/Ln2GM8xOHvQ41ijmoLFMQZxZFoReHfVx7c+yLjmL8UufJKYMizXj5ihYSza3u3T7uiRXQoN7LAfHyCc0s2M3cyEBDtVkNuY/oQ5vzkWThNGwzOmu2UgWFE+vhsj4n/NawvG6Qaj29nkDqv5bcPJ3GeB3w==';const _IH='da7cce741d290bd845f117b596467c5335d59c8932c2adf247ac5897953ff75a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
