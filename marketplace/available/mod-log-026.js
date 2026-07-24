// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWbkDAN+4yT6AUuhhfDA8tif9ByJKaf25EGXvpanenRApN+coW0ooAuQYd+TSwL5LJg8Nndy3MdtGBtKZeIXQ3XsimbBB3Ha8VORJxUlk7apoGvIRWCILFnv+gXHGovnA0OFR0H8FyoT5clI2EGUqE+WYO21Fn2hicE/EPbbvstvEhDAe8YwfTMWGvU+j0K7XWYDdlW563nuxZXaxNaM0kC1jWjQIYxYDJAr8PrKa5Jt4JeOiFXUcnhJUvlSCrbUt63sfNTjVFbdhCUri/W+pzEzRSpLjmwZTiWJqUF/hUPZ8msV7yKCDpDCEJ9DZ+R9iKvrYrZEW27SFNbl7WODtYPvhyWetmBKQmqQhlpyLVEYLj3VboLjlHrwQnhBXrBwp/90XDRJw5wnJS0IQoLMbDURmfQusSM56hhh3tIjMYApTW3yPbbbyHUNlMXxrfMC4/Ly4sS193TqjdX84wq4ssP6RdF7vhqKxci8OVo4QE/eZu2PEK2N3zYMeGhG7oVdbWHeD1XJvPPv5v9aTq6sdZ+vk33dhKKRbsqY1T9PlcPGhSMJLQsHYc9Y8ttTMLy1ZYyHTQ2JakaK4a9SKzom+H3fj3n00dHIyvRVVLWGN4htrhSEn2v8MPhjJyM3S4eNN7U434FSipRm5RlnTXM4ynOGDsiM33zcF/KJfitdzVQKjOm2ji5c5KN0VoaI8qp+6k7WWKcdRnUx6XT8vLkdjFzgztBsY6gGfhDpYDHK4CGFhmod3Me8WsoDgdIGfAUI6kmtT2vB2oo0DwdZa9M3mpiHV8EE97mOxvZ114KlqZ2cwH0XiFS0Da54GGQGP62ZOhbXPl6DViHFNXKm230E1cKzyGSgZYGygf6hOhZihiWcY0kjObsKq+A8eaxr/fs7FLAm56+th6akh/sPIlVGi7JWJkADf1IgMWxuOAVZXTcQj1FLAb1WuEX8DCEbYNM6FseB0w3TKXdVlbyP57OBVKmtLGSQnFstIA9SahlCWLmtvJDRPj6uDtgqUbASMIQhu/5Ejm33EA5u1ZwtDAhtBq2gIqu/OeozKvqrSQaIFJpomh2xvk+4U3GzkSLRGe/UqzbPBWHNSdForwfw5EQ9AUy6aDSCjPuiFsW3owytqHYWlRxCK5SUG1Y3iRROO+JLsDwU1Vga/drmLh9eACr1y+PdzOkJEuXX/H14NjH6ih/bXaPBlqt3CnN8hRCYVCPWP2d312Dd8TytulUlLQ1nfATppwvVHK8NoJwn+wk8hBmiKr1EzurTCd5TSvinFv1AmV+Z1o9+pi1Ewz+3Yhq3Mx7Ig2kWSc5EMPTIoRIttA4Qn5KfH8KMKaapsiFYv/OY82XZvRMQ==';const _IH='5db154781d474f3c10dcd6f9893cce2c1886a10bf8025fd51b41256fcd8e4454';let _src;

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
