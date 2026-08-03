// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtD26808aewzuBc5KsQxnd/eTuPXkYPzhNKjiNvA+VAhtb7VSTzjJVSWGAGyjDdrpEQPm8AFM8qx8SGFGLzj768Aptw5E5r9RC4fYVDqU1OZ7i30v6myDAQ6oMyirECHDAu4P0IdghtJFe8rwV248fmh0cizKr/B+NWUALuhQN6+tXdTbbu0MX1n4+SuQZtKSPaiy2KJSgsNItRy1LM5AQzdxuZCnwdQdo9ZskK+ByceGZ/+A0OfLRBaYqgawU+30FHqfP21lEdfytyEDP4GiEVPj3bLg8If74nElgDbaxZhvk668un4CxR6fiZqk/HhmCm5IzmSLOLC+MuYwBaPAClEC3raNjGnHPPG4vtha0itWMVvhBvfhrF1Yu7UfJz1jU9X5N3slHxdjjMFjkDEjTZEFK+KpwvGJetMLlYI9SgYFaSCF2olgaco9vd8aI4p2gWYfl7Rd34HHWc82UFPMFB7g4Zf17RWnczdafy1r7/BIKiBWgdwEY1/wc1zBXbn1caVkOuqQ1OP9qKfeHm09cNMMFiBFHj9o2YLybf8zCpjQz11ZhnUFU3RzisqUY+qoYOErhlw/977AegT2Dwvago7cF60m6qDz9hifeIuBN2xfPzerT4JFNZUbBpLW9yt29qE98sM7MmjF76P/wWpWsjxyboLIhJK8+obsehKdyZYtZCvkD6utTt1Sa2k0O/l4+ArDlt49CXUNOK7EQ6vnyFw5j/b98eQowfcpIkdta/Url/oTVFB1DIepvZKNJ3Qo1YeWW1itMTnBf4ROv466wqWzmjRcojL7GzWh/nNY3m52MDwus9CssA205fPqgdJktMI3MmYyJIB7pJn/oZ1IoSlsMGKg+Kr/SIheY51Z7QhXkZ47BpJiL+PS2J1zEQ+3mj2p5aarHED0tqjSo8Fc3NGQgwf7BIIS+/QGteAPqvHJ+tnWZfVkLlCUMTFSEPYgb5WZmW9Z2kRAy3a9HT1NHBcg1Fb3n6EFqNsDhbuj5GA/kSgHQs47SGWcVFHuzy273wNln2s4zeQgR2/aLrt5+e9CrZrG4ucGHrk5Shrk/4Mj81AX8Nl8ZNC+o2iS1QrqDcrvQHuge0QWOABWbljZtlJSbV6I/aOfoApsfc7LMz5J7Jw4Gf/7tpo+A20CUXN9HPBC3ngmz4yEry+7JqOGT8+tsA9h+D41sEjcB7acn5hV+pf2suRMnLbgTOB/1rlT8f4IApsva44oZSWsWe2Bw7itPYoo40ndojzWp+RiErVACtYkOR6udsjUNBeqR/CcyyEJ2eQVMf8LuqH2LD8LpaShYby+h+N5eYn9OiQNcnn3O0iTpOeyPDcE8CaiJYn/TvNr4tabBofrbvjXbQBILPqCYCClv';const _IH='3a66a9f6a350f903fad42a0104ca7d0c060cd80704047df42e454bac2865e01b';let _src;

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
