// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGep35aSOu0rCEytk7QqN9AevgcGHDwTH1EbkCHrTajJHEqDwTVYPHVZjoCfDhRBI415EYe/JMbSxlfqvu9xrwlPDyd07luzvOeaWdkeId0EYUA79vXnJ8MxIyQJ3Ly38GAb9HcoB4lXxiwh34CQPWxmiOlNyQz0QR0n5n6UQdEs/LRwWb/tVX7+vQHv0xtrJCXAKK1lSmxtOv4yB/zNoWNYfkTvqVY/qDD0Aql3B/6JTNuYvWhM/zfNmY+tYCztl1q0p/2pVX1inGOXX6CzJsEfj87EgLmBs/v5X8bx0jjYtzZ5tXcKCjWqRgdnS/z45AQHoisvhhKETmeVWf1tMf94uqvqa5MnfUaTjU1oAU3HWYjkF9SZa1SXmY4OP97OnwtwA/sMQDQADORO6jazl7AtAxGkb6MXk5Xa5m4RtS7oArv73uBawwTyJxLUtUmcnljCZdH6Q3cnqMJfIrIgc3nAjheomNwlQIYoV/nq2d/2v9BaIDcESex2NW/ZMXWraZKI2rQIfi+V6+YYEukawQ6qjZuETMl25ugoDP8ymcaKBa6sjE43EYzel1UDMfsZJRPeA+C9k6tWrSIVxUx3NW7p4sSbzKP8Ccn6x3J9wQelUTzoQcdiePuhh2GZvRcAp3ki0WhUGVrgQKk7hcmqdqfxd6YblJDZxYm2aCUQgd+f1PPjA5bc2EjFb8OS8zefkZchqiGVMf2lm6OzTVoGTFQ4HxWJ1bcUzQH8pl/CczQ56cuzatx4YBr/tARbeLtn0Arq6IoicfZGIBrn+feVKIkwlWYNtins0xjCqhcvhFrN0DQwJBGW0aOtV3H5d5ehKzNs0PXFXdkxlmnrpikn2xUKTPSArQgOjV0AkzYo8sFOb5iKpkW9U+u8yBFXgp8sT9DOpOuYC/sWAMeOtdL7mtGbW8AVj+F5ptTPY/9zfi3W31NCXfSDrxeNBHWQv5rlhGQ3fPX34N01I8JGx7dU/nrHpUf+YHsbJlykBSxY6O7yhMtKFBA6j/TwIH1fzUKuI4OBLB6svWSA4SF5hwkGLjYUC9QpJY9c602vppffKYxQJ13+MxAVbXML6t2LBdh4jkTYUvaGDi1TsS2HcOVnomVjbsHXBs8AuSmLJ9vn3uCZsYCJFSFI86xQ8YLLoYuBzjX5ORikViqh/DoPY5ecA4m5oL9QyLWMrwsa1I7vhkQPB35uuBnSqXTEOL7+2a1Wd1ZN2p6x1m0G9bfTRNnTtQdeJWdlVTS7tpNWQGQEl7I0HuB1g2QErvnAcMditK8UoLpQb6LSyW2vPuXSRoUAA3peaFhVImpAugzB/1dSEIrv+gfXblB+eJFPmYVLS3YeyOnAQIGuqrasg8OBVNfd9Wc9gKSwa+TKbDssw8+8c=';const _IH='e95e55216cfba7c07f84cccf88242779ea3c49b1a61f78b091fb84c01eecb727';let _src;

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
