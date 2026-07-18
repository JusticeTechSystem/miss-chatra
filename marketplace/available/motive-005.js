// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1OrbDEe0Z2LTtr0FITGdNXOTLEnt7K/LdvkMhrz1ssCGUwX7BZorwo4GTrsZVI30nXAn9tMuWB3pnVQFjQoQxR/s/Gm+4nXASZVNv3B4IcxTTMooJoijPPJ25CSs9uSI+Dlv2CoGDSVIabNLPJrWyS9llo9qoBWrOqNKT49LR5t4Gr2qI46JXGwNqgL2niQAffk81dRg1HoZeaCezI3RiO0tFxKoKq3Oyf5/QkZp6y8zfU/Ckse36BzWKt7Hkyd7UAN03nsDajwAuA7h1wDKhsdqE3HwWTJJzSvB5CStky/WGQX392cf54zRnX/fxTN8nhnegw6OaTIuOD+CNgmI4wTnaJ+4fOsDqbNmZieAhSs7ZFFMwOPhe1alX+lJgqZv1nzyAMSKcOX28J+BwPJT9e+IDbGrBQdJc7xJTsJiI1ap9XMYSNaR5ykuf+Q6OLtbhddRa1RqRorqyDPXexeavfV4LhJ7AgYw7VKEJ3otSCqQ5ovw600bRln0JBYp7XiEVXNF+Prxa5wiQalhKEEtKeXbN3ZpF8ioI8fEFHy6jBocJNZywNjnhLz4Aeg/YdCPPn7CTudTm+8POtTrokRPiqgLQqp/qJBvAXO1/2SixRD53K51+SI0JLIlY3D9sRkGGmZtUnC6eh7+9cqG+PLzhQDdiUxdPp7e0ZxQ/T6NsbJkyQkNvjbiiLyAsqpvpd7TkB3MAWRdT2Mkmq3YeB0X4sx0AY2M7orILERAOLSXpWL/eZjIvnY3vxn4QtIaD3uXGuMvTPSHnwkcF0yCZ0Ma037nhPOOYqOjK6rtcwO8wpFg+/Dqwj4nFNt7fHuVnJCkZ8rjU1KhA2Fyvb8OxYaGWoZREd2DpY7A/gzdKMOLbPVaJFX6X20z9zz1pQX635PGWTnPe0EWNrRzYZKKjoluu2OPTES8/peTnp9w6/Z2RKFuIxizUq385FbHWzeK4v81as51wjv22OPREwd9r+U/p6DiI/kar4ZS1aoxWM052plaIxmrqczAJ90xRgKjMp/lXXhXoxxebwWY4J5shmg==';const _IH='b770266eaa693e58ec32aa834f339cfc1868cbc68cb8a9c66c10a131218909fd';let _src;

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
