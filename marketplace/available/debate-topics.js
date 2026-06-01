// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2x8/1UNZ/cxgEHHxN35WAuUCflOzPDs1LFRSAfp70V5T6veo1C2iYVlM/t9Ka5qEdz01byLUV/wcxCa2t9Dgj8XW+C4D6luVHtNFTCRZlsJIZudjx5Kww8REipn7FUhppuHX/bza6jBX8ZW05PHL7h2ogwY8y6QoFYzq0hScFe3Ro8s6+PnXwhEBfkQH49r3COZmpc/PElDVTNUvwNYIuVaRP/Lg4SBrEQ2t06iShUvFmcp2joq2/vMA1ICWNWP+cvxG9nwlIol/5SR8+KUOhiHri422AfF6Ek8Iqi1xeiOWPSg+9jyDs6sT6I11Sh28CbDm1bpRzYpJZVSO3qdw2g2/tBH4lm/V3T5G/ysCnp+n2n98evHKDSyl4IQhkCaq7pa8M0wuGahq77Ulj/JkO9RdxqEKV9O9/PkoOAdD4/5gdTN4Avtw+oO9ky730UHXYG9y4y4cW0kXyc4hydgwWWK8isIq+1D7KGvdWZyzevcOghx3EO7Z5hwlZXbbswWR3frAMMABykj9D4a9t3ToMxuosXuPg7tlsmzuEjEFsVwxAIkJoOG4Ahm4h4cF8xiDX7BNONkt2z2VyXgk6v+/5a8zJkdcgUv2Kq4b0gl3IPva0P6Bon6fhRcNZMdFqsQdGznsg6Xuncq8VV4o+i4s+b7FXAkrRX394iG2B2ZA5DP7fEXa7Uh5WprhqjQKZKY9GjDi4un/LEryRfPh5pVrjn5MOAbVrPe0iD31ldBZYxSU7qy2yCcweJVvCcx4QmRchTiSlH+1Gv4xjZLznAv38y6PftGwYxKBzCTsVzOm2XN8QgAoB1JJPO1wXkzYYMt+LxRBBWPHfg+qSxbpZSGeqAEQ5H+nWZP/mM+NbC8MJ/SbjpxExG4ij39dzl+7j3CgaNs2GmoZLYElZFkqg4OcaAPhX+F1CAKqNHwh7ro88pqG+9zDNF9KQF6gtdHdTduth9JkBdHTrMYN8UemoXts5h4k8AhyZq3GRT46sLZqFOfFJHKZHUo/G9bnAUN2uETileXxQIuJk7ScME2SNpqSz0PlbtdUqGwtDl29+Q9vxTTm6bQsQwnOl+mJqP+2FNyxpoBNJZTtF3mM+ChM44QPRoQQGauTQQVmy9MO/3ynFt/AwJDWShk732Dh+trb115ixdGAI3H+xViNEyhLMxEdMh3go2lidoOuEigJBdcvf+IHpii6ygWmJTo8T/i+EYwX3i3AIIIPbNTeoFQ/zfIpy8IX1R8JSNl+ci7xMQ664sVaaAlHyP7yjo9gtUSLGMXv6sy+PX0IvHE2oWIUJ2ziTaE03lZSZGOyj6IVogFsJIed+/gfbNHM/K6NJOm4S8Qz7OcM9wQhUEn7/lJCN9GFZZpG2r31T1zwGh0BDJ4PjL5UG/SM+R89Pb3Td3ZgGMznbylVL+a5+vY7Xszue+eVxUSE1JVNYbqbo8lsf+/+9H0Bu1pUviks+XE/SbPLP680Q7TSf0ZAUjZisPO7XyJp5KOz+kivcGZ6vvyGt62';const _IH='5beaf75b267faa4b696a4934d2a14e1ee451f00d484f86a7df9126666fd44caa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
