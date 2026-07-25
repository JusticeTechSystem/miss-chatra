// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXpMuRT9q1J92AfrWZpSglcVzdn35KuO7mRSQ/O0vJGDfDMTFqviF7/QCTRoUiLDv06aUN447X16zJ3jF7KYo3ecAR8Ytn5PoB7SuqarnqKEIBFlxVIK1WFkm4xGtM6V2MMMNKAaiuheT99TZCi0UK9D3KCneaZI1IbzHheB9HE5tZEFA5Z78FNVntzyd979ZPgq1CzWvnAx4Hz7JJdTpOpRjce+IyIqnKppEV16FCgmhU5g0cpuR8lzrRLpnrVLSgfHrCMSY/Co381SEBUGKwmZQXPyr5Jlj8r+x03yi4wS80Ic8gs1amznkNJtK3KXj3CM3Y+Tt1fdtCjp9H9X0StCY/MjUsunf6kbPlelwR8WR3MdDOi3s1WbpEKtjJ/r6xJwh6Kkzkh8Nriiz5rgsOZJNeq8SaHBcYzaOGdmUKM2s4QmrDJ+8R2af9vZSZ9taXzCCmQ7aAXhGKxtYTKEfh2izNRsFFm8Tei3ztcFIjKTuCfFUy2qR+StQa1/pnmJBv4GpKp7U6/2ickm7VoMflla+kc0oeNG294J4YmIfPz6Ez3sWVGjJEdz8z0Z/wvf2IyyEpP/cn09avl7Y7OxN1a+MaNePJIJwLEUNsUkCpxz9PQtmv5u2sfXji832mWWJhf7AO6oZMaTy414dT0qja641bE9NObHv7mOQ21nJMJIENRokVj6huJX9SYOE8+O7EbchE5nNzLdu8N9lsttV36oVNGp1d4HZ7iJiXT/tmjgeiwPLv83cQmfWCMvG03hddgVIZU2dWJLGVb4AyGnWuT57LtZFiVzx/9i8j+ohvEkPbnphv507eLjwuZJu3x/pqaLRYGIjc8X/ray2pZm5gEihhSnw3qbn/soLqSW1WCCANdau/FlAu6RlRbZMvX1NoFsNlPiUlbRH3ba3vkqe8RW74/GcSHhwE9qXIr96nWXPVN2UnrCLJcscLSjlMyR44zMpBOi+U6bhJ1NaKgjHvUeK0KjHdJyjIRFtGKkU3J3uj';const _IH='3da9f7b3d647da191abbe475e2a97b35b271da2bb704d446b1a67c56a4665603';let _src;

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
