// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVdJ2F+clEwcfHZGRSh9YDWuIvOv9ZqQ9tqQbfjYswY2fMDuDddyx8AT3k12/IJ7wsI9vbuCoGEMByLWHJoROldsREQgxyq3NM80aIpjYHKOYWUvk97rFy1CY1Xw1UMXj3q4SHLOjK5mRY03UTPAVRVxLDVHfxKZ5yYxACVSNyCWhCPfuD3Q6D4o6+01tE4YqkPkeC+3ZUEedqrlelpAAxZzFgm5YETOQZTBjP9kMsboC1T6jcTMJ216UTatZmdiA8zbC+iUPoXoQ2rwEZ3OAT5vH+ofegtvHt7WLV63F6Mt11EXjijMZAJu4v+rKLs61pogp5h0b1kjfLbMwzpFeLZ1WTrXxDZFruFSTWwJAWfUu5OmmVr4iIY+BEG6QFFUB4Rc5GOaaS8lu1AtOBqF5mXvc4DrxTs5XYKkqAfBxREo2ZmM1u6B4Yg+xC/Qv1fjoRVHp5LtIepKVSBRuuH0NBUODIvvQpYA7LHoby9p7HyZ0E5TS2WNcqQS1yaZMFO9aUnNKgu6JtDXeofG0bc7WyVYo1ZIOtOTLiHEla3QjKSx3yUg8fpx7TK1yVJdXTkdTb4kE8DTD3HWjvYqgE5kyN/39XM1warJ1RQXGgFXZDvfnRnv+asVcareGdmfZqHLaZhnAcye827BkVlEFgl11+hlSNP53vlOo50OiSbqrdjQ7+XNTYF5TIB2t9lXOw/ozv04ytaAoyMrAhSljel7/RYj+eq6xxV5PFtdmSfZxj95pzLXANniRDjjAe0/jwr3uupktQERnQ0zb1sLREg6w84hVj6QdrdxeJMTpIqdOG3my+RsFKcDXh34AFVhNRCcoJzhZi0+8LlrrVIT9OWkpZsPBsDPMCom7CeXl+mXJ3qKMrFvoYIqe0vrvH7wpQKTTkMXs2WXYJ4DiaWfwmEMou0oOweB2DLaiRQtfPVALL3n7n0++QVKD4rONOLXjlhJEBq0on7FC06LylMfczR1uCiCDSn85u4qsQbYtlAsHRlhsXpSKOQMTYeFr/4Ff0V1oflzZWN7AzMq4R0Rc1Pa95nCUQ/0S5nM1PpdrdqbuGSuotcW1GpDUaVZpHlDBBcX83/3EF1XX/UTX2umYJr7oWAX0NdjmgA+gXYOvoLCvDpgirOm8gs6kGnMGBkMxwpkJwCvs9PUKZzrrvckO9O9IAyVhiFEEEUK7GXJOPYKxUNzDs1/7snk+oDm1P/EvAcL4BXCP5tgSqqja+NQGHcxjw5c7FJH8eu6ocWOWf11NyK0scn9B8YcWkNPFnaTwi6VCi+hOTJEHfPr5IObSsTSwsqcG78xKP4qeaNPYQrp74fM0CwPOF5ovFg4TQheNAW8Axx6Z6yXDZZ8874BmNwK1Q2IAsq6UmE41nj6PsI8o=';const _IH='159221eb2e3d4e21610dc814fc61cdbd7e740ff5f03cf238082dbe236da04351';let _src;

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
