// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQN4zEIOhxqwN5KK1ts9OgjsDJ8XBfSfjmNMm28tVfW/3tCswwZmMfNrcggbzlgYqxgeriEwUnBqM30xZoYyHGuk7szLJQCm7CtqLRdAY6jjZ+qxSd75pGcIRxSDO2HPX8citMfE1Lfn/kuZgfXU2wskc0sMBTZ29vck0bO3Iv1eWmdg4xsQeSSyRXI7fs7jn1Ta57O2Q6Mt/VuQH2ZR4e+ZZ1CUmSr8lx/Hj6sD63v7vm3Sud/jKH/HfALQnIwjSgaDS/WdH97topwt38JL1oudJoxTgHDJKvsWLsFuZsjGd8isWPh0AsAap7wq1Ud7ids5zTEJfDn4JdlrJNTIYd7jNCZZjEJFC+7LCyt8RBO6oCXSGtrM9uv2D8hsaVfuLp3RqDRir6VCLOuMcvPe1H8otG30jjfT9XI2jYokx4mczjRUzqdt2nUNDxdBWb+BsSCVwaPO2JHilUg9tS8dw6s8zEb85/P6TcSAqkvNQN/hcTH5KnNZrxyvL0AlHnJ/iseZghrKGfAOcnXdLJw8MUuql6ZMEbrJ7vU1M1W9UYrYVTf/BN+qD0YNF1yUHdj9s3bsea+rCShiBgl161CgVCJOAFOBWl32GLAkI4QhzPnpsCujO4aB/tqmpfxJcP5I79q5xAf9O+Y+ZCox3uzby7HzgQ2R2EAIWr+cAas9S897Qfhx5YkskL2Q7QslLmdjiB9XiOQcM16QPjvL50u5XH4uIXnyNBUu5uEOcmLTV3/KCmrhLwvS/2aQcz/x2IIgRARsN6W1VeV23kN9NGlUbxnnER50LTCXEss8g3BWZRpm+GmAdmml+WQYx56Ch4I/2lbaYm2NiAKeM3wfOBpbhkyyHRclFysYRz5eYlOW1nttdCTR3PfaaK0CTiYJBtCEJ00cAvX9ex0wXhzqmKJE1B0uRNUh3Dt9KfzPPM/CGXUfzTzPwZ4YpCQ8Y6bs1GN5tI689UTZJS/iUlDJHvkNEEi9OIPH5yykviW6faHP4EQkgCMN0ymZ6bhtgDwcxX0zM0v+lxbqIYI6CmhCW8aarssaCZ2M/5qpCcF0ck';const _IH='373c3077e5536ad90e2d0ba66f92e193c0ebbcc7dbbdc945c8a491b2757697a8';let _src;

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
