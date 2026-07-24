// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTisKeLiZiBpqll6udFx2NJomBsQSqUf5mwxS4Yds9JjQ/otXwyukrknoioQMeL9kw/cUv3Z1cEobtWlqD56S88XXNlijO74A5ViYlhd2STcccihOEcY05Lg7hg70J6xRxP6pRNfFY30gnrT9fVBW+48/FdWCC4bP8ivDNsOfdlY+SogJMChS3Io9+ZBEMDB5YrIUeO9+4npVwyJl+kybOo0iVUw9NUI2n4AhSxK3QfKOu5Iz/t32QDwHols/78fRrF/tIORgvAY8OMZNutbJUZyIb3B2yrmDZM6txstMZl3SX1MPqJrjq+0D9gAPIDi/uUzWeXQbXLCE5IRoDtl6/OkpEd//e5h9yJKjzVjQLHrwx6kn5TkTNDQIP5daPecX0p2ykZmXiHtltrUrozYAuBu2B+U32PTa39EIOB0wk3fiSbknvY56qnOTX09Zp4MRM6cuYb6u+zI8S/MEfS7QVKzaK5fdoa8AGzSNmT+0njPb2mcrOrcAqpIc3FjS5hPqwiz3W1LOwUBOFrIzhTp9SABAFttR+yPc2ncxFuNsC/Tual0bUx+rb4LdHJQQkWy1MnPIV/VZGxjTEtMGiKdR5XtV0+oARbamw/N1EYr9XWs6wAangDWyeVE1Gq6xTObboNGGisMsnWk1YFQAG8+rIsBnbbdvEz004iK1BmB5Vmzx93zYXw7fn95LTLq8fxFyIUZILKFGI/i//xFpwqcYGGjUQ9DDN8/4cdvYfIglTIgacG+1sqKSKGP87YRMWgsPbQiCGsYne4sNGe67REIenkr27KZOhEwAEkJlNj2xojbP5e1VcGGzLDAUdvuJiWNMWuik5w2KYYFg8Dt6IKboFbGaJwViPTOjlDJXtvjasQc/uKQIUtSr4vdZmUOiPTRGAxE/PQd2OS/XJjy5R6iSVq/N0bTOioa/4NvSSt917/20Umrwfmg+jBIpYBO5zRVZU+92fSCGq/d/7NaXmDd169rLqSqNZfXLU1cLZu6gWCibgh43pKKH1glBw=';const _IH='f51397c925530b9832eb35f9c3207c3af09d124ceea8aee8b48e729741fdb232';let _src;

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
