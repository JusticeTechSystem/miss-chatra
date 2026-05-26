// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SlEPl13ONqVLmvcZGAj4QVHSwEkfU2Vqg0iyO0BC+IFWyKvoeYstjwtkoH3hL0wrLvbFhSrOOMmkhp04kdnhuYpmy51BLeq5AvQd6iqN8Yd9ruoDkO3tTS+0A6l5lDX2RWXyETgiYrfs7UeutExY5mhYB51WemOMitPxSbNkFXhSbxtlWLKxEkL0gASmJFMWXFry7iKjOAHyExxWXaWLfBCwAeCB7yjvPgyPQa3ZKmxSNByEEXz4Ti9RhG0hTQSc/yGQrMXZAn2fxjTflBb/5eo6Wi5KYSSBFcXdXseOkkJug5MupmorEoRS1ptVyV+yA3FE05hiKHWmFoFSvULq3p0GlCRJNC7+Nxo8OAeWfhwXu/Z160RYF3cOmQxj2bHORyXGFDz46U6MGSrY0YgK3Vb0c+pVF7YRfqB2J6HcpyoPzDR8oLLvUMy+nYzpaUg5Tqo1fg7GqBc89iQhnqHY6jiZrCNDs9O+jJIDgdQv9b5Z0iRl92o0BXIFIF7DitCPJqb8qM6O5P8odsprTaeHFpaJiGBhmz94th+yzNsWZ4aOlJ6px1cjfglem1T9Ag9ajubMxC7oTY59obgjwmCDiuClNu5kG2OTDOfTa1PQeu4z6B7grR1RRhAZOUxMfaug8zbJaoQtqWa1/xk18rQKUCVktvrzxaKlRIMYqE0ffSrVcGbEv08t65fNb4QVyehsjAqGZbrdMGcaxp4l/tAPb6vq66aFvBjaZa/0g/dCO7r1j8o7Qb4Plg+9eLhSshuBZmZsD3osFQb4lklS654qruL9UuZYmSN1iCvNzBJyB+RYkR9IyLIFda1N5pLkletuX+GxugbHsCKxMBdCPV/o1wd/qKQ06Nea0R45NmQa68cpNPnyJ5SHlWAwPNFRCSWQhIHE2IkIoX82WApq6apDMpZkWpR5DApVLkRIQZxJBf/lawWx4jBetcCkuZRAIHAEJljm3tN+fSKJfPpSBcezwxuY+CpZzemAn0zezHiEPQWsmXOU9XpZ+YWC8ncUeZ0y77NiOepYBiR1l6k66kh9ZZXqwcrG6g4ePBlOCj6pfsY7PPG4u7LDx5GEcXEa+VLTNwncqrf0CA1H4rt5wFyf4ZJ37lcodhTwaF3VEbttJ9ybUMjjPkxPyPC2qI0ZxrPWKx/oxswgrTZqe6X3vzQFtv0J7QMyF4ISbEBe9ZDL5cgGO4yrXuALvhaplsULybfzT008nH0FGyiUf7mGOwkDaEbNJpoSCy29K8UtkyaPP6E/8vdLLO5GGaE188QdQstEN2XnBmknebjxfbVjmG1+ixvwJ8ATOOTHPu2pGpjDoWTDtilpmWKGJR4xcfD4uJ3HWi6F9oENhcdadl/v6Gtf4IC5iDq9gY9V4/I2HJybruyCMnOO7Q+/9A==';const _IH='24536023e176933aa82cf8c35df9fb9ca96c539337ce98f55685b4bdd11a3e51';let _src;

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
