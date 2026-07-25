// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWGyNCGfNhvXC5rqVYufTlhKxOZaBxAYYzkm3hsoh2aivOAgil6fMaO/tmWSWGbLwBxVQpy/iHuUtv4oTOsF1C2oA8h6V+bJ37pVBJVavfLcqHGk+tLifRiB93cTRT1dFaT72/+eR3Iq70KenPIt1k7c8RIA/CrYH3T0h/xe+56wPKyNJzLBHS8Vdjk74nsO8IHqDCTQaIVkPpNehVsL0VgkaQm7P3z2JTxJqyeyuzTM/uqmxeb9ieTZh3MKbky9tghB7nkCBFLuQkuq0xAOKbOLBUAfa/nlI1Pzhcj/+mQRbHMrOd1fLJX92A1OrRQG8F4XScGPEQ9AsdRTGjLpZ33Bfhf7weUzIvskO4lk6waveaBpdJAj+n0ibPmvY5BtEEwzAWWmTpFg9Vt+lG5oD9QvYxy1YuWGByEOXn8ICdgmpilaXLNjrX8ogJQ98rJNoIsrFpi4003n4QgINElyy9EoJePalH9LLY87/t+boiTxKH156CVdmoe5dWQtnU4RrYzYR2bhr9msMaSqWSzWkeNMLd0LAV1XrD8IEPvddOlGJuc+1URiEuXvm7HJJfqaGqBZGrHQ7hTMK1hnpdBf95AFfkBd07/MHhkn5+j0fvOOb+ounchDJXjofOlX/swDbksIB+XvnI9hh3mNpeFJNOpIRfzMT8WTq3TKoZbshbd/KlLXhVd/gXjeLgiZn6nnTahA/tjyc+CJscY1cj5ZycrcBRWE/Pbq6fklJg3XNX09yVPs9T3yoJ3nHMS5LRKaznmMnokqeqlz0j4pkrjiF1zYSeBMxRL9lryTUcgW1BLPjBly6TGhDY1K+RhNycU9oNFfoTUIUa/SBVRQzC889vmyOPzJQHDjgygMOPmrUkQnJjdHp3d8EXrjer32YYTPrdksOz8FFU1VE5rKUnKWC3/n9oKZk0XBKdIFuOkQt/59KESIzAEhQMc4iSHugUdjJqktADbl6A1ZJAt2wfspYk6t9GI+ALb4wm4cWZwP9/pcI9jo3w4gEz8JvPNsT80oQTI5sGeIJ4Ko45zpvb0QxUfhdv+Zp/ZleM1xQ8RAQ30xmVADLc/6mbJFtzG101icyOz/R1VZmh2dne79V2HI64a+0tGgMHcH+MzpzjZw41D1tNYQmtvRW0uY0lAC05BAHWhGyG2GHX0j9uUVC3N+B2Ni1xvHhZwhp2695e1DFpBT7t0SXTajhaKIfxYPd8HD/ED58oy4Hdin+bjOxWOmHNoG3zUgUB3OOEVZtUkmxQNuDrnfUS1EMCTbfV3IzYFkXI0BemkfvOXwIH6xDH6Fx7UTb2IhjRqC0Izx+7ilq7VTTt5+1vunVE9CJr5BnJxtluP7d66HR6JI9oV4Talm1AM6seHPLl2k8UAk8CE3jPvP2cSAztAjFO9r+Doe4=';const _IH='2f8174516008ab8f8db09221e912c675574193286281fe52fe31c4f33b002567';let _src;

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
