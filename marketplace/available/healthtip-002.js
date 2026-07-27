// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTl6VqGLuix4KFCc6VUbkDsAWqjz1xIV1rQay4qnC25Q/Rsfe8LM13zy2qWHejZ8kgnbN3sUV1AVqZT6MY8JVpCa7ZX/qrQJ0zlPEjDRx0TF5qxEnR/dZpy+IUnugPTAmhTDkEKeZ0JN1TZOQvgmRX3093mbulcRgSyEVZbFcYhF+soTpbRd+xirpZRi1lEawnl8s02byNLIEUeWUW/jHh7IyOdGOdCSh7wfrwE2f+tOHqZYehfs3CCFDsk2n+5IeN+i/KqaVO4wbRRTe1YNUjs0llURqZhwrWj7NkUgdx3KrnqjC6+OJmXUh6rlHMTHQHuv/jZ1qDi/gEXHUEkWZtYpAy4gDpdqDAkefwH+4GOdYSINEW5LgRA1j56W2elKSBMHX327DJ8XG0MDRHZHE6gEkEq1d54rkP2bNcnA1CTtnqWMStvIEEektmsEesMoVBdYyH3JyliQN6Eh+NbEuN3F69ZxoivMkL3igxCKAiyZsFgslUAfbJoDn1/uP0eWsURLyX5OCEvDMw+/0SoNgdKU41H0Aw1cb2h93nmbW9cEz9cfbOq7akQ5Ezl+uhG2CtJ6Os+LfogXFKMxKDZmfG/vQ7XSNArqu1ELw8KfUxjza3/gRP/AJXDh5nMnpT4dr0OCormYTyTW62wwlCAcPKm6z2+oV6Ae3lAhY9PifD0YqyHeARIit6QWZZCb1LsKUHOuQo/F77freJtnXV8nkbhghx3FtgyW93GrOH4u6JvFJl2bwV9lT7Tr8fik2rr1zaU3vfiMofcVYYm4Dmxj00avQqpxU1ScoS5ILF8eF81eLSulDd6g25j7ss9XdKbX3yXWmi8PhmJOAn+pNYYiGzDw761JoXsQmEmk1kVqjl3Wmnyeg4MQYDoXKaaGujzd/r9kDIhOMKJZ6/UqgrcauheICSDOjDYnZFHj/nH4VX07UQ2Hu9EoN5J';const _IH='00e4d76ee66e64b7042b7daad024800945165b36506c6b97e854f4663ce75867';let _src;

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
