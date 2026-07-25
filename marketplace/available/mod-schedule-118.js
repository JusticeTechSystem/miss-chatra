// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTS3wX7N6xyq5ImL1AKY/3CI8PlUjbCXsTD+JYdUrD1io2JMRgszUIw4nowwFzQNdCpz/UQzIEDvFQK1ngOcSZ/THmq+/0b9yGGLWd05ThwfLhY/DrYt5GFz+okITKujDWWyaIQwDG229sa5AKlQyn8opDOuj5HUlWj0lKZPt4qtxUwjmtLLYaPZ5mQ1vDvadwrzG675lpVmaZFFyfxkUCYzJHPYAH7MISR5/r6SKC4p0Nvk2L3aBo7ZLgW2mjt3rWGBTmkT+h7XeB+Zd+uCTz8p3M7dqBz1uOTlrC5USNqcEwRU+A7AMuGX9dJbz7ESWkE8Th0xMOCrDxlSrKoLR8Pdw0NZayqzMuzk4+nud/zJoTAb5GEgKC8ns2ekhTeNBpQ/fC8d4niWbazYWE6jZcQZKv6VlCcG9AHW3K5S8vUZQhFXzrrjYtMM9YV6Zk+6YHb4Pz0hActE0JgfmXiqKRMCzYHW+ZPRe6IImKT7JGxIcr8Aj4TEiPVYWZf07T1pwRt3t3fPidFOwx+E4y1z0dmigaXnfHvVH5SQggbEtsbJ59PUH3lAG5WgYNP0FRyM0iRqyfz/mf98MPbnm5P09+NiSDpWYgO2n69diQOiw6lBzvSr4zEDMbub970NMSotbGb4GLayCJM6Y91JgWigpeuXFHwkH4SIQYoluL/z9smCHwZl/fsZLFMjINq/93Mu+YvdSUFBbZ/V6Zxtq9s97ID8rAEUa5C6JlOW4rWQ9pRnBWsqauwMGvtRENKVSWKb9sSiOhYgWRfPzIUxjuFgUFmPweEHcPHbJ74wFxxUBQCmvjVobA1G5UnAU/lvHtwMeeHQlUS6lJuXokL1YB5oE5q8k1iqLicJw0u5BCJrMWTPGbdJrlChJ57P6bLWVJl0GpZxJJ2p2Eof8iiZ1sst8LEghLmFszfVJVOlSzT5hpggU52FhnXpQaCyaLIS/rz+JrGM0FBHsq9QdgFDuLP1xNfYv1kA3I5GJJw7+AE6JFNXINjU1s5Lwv+b0KSMcNs1fDj9jIq0xcDWEwUV/WeH0lN5cqvGZMMgT/N7o79OUABb2SdU02isbThu+HXTKlIPCtz4BWta7Ju6LmuSxG4np8ObwulO2Yag1z08/q/ETIyMTJNHf1E3lFmg1s+DNIJ8mxHMjyA9bmJqaHhxpBVOCY2JjARccsfkJzRl8iDX/Gglkm9FknXMfNRG3CfuuLujCGQeWGJoyQHMQOYivKWsF1KXi5xBT7mZyGQ+/5g9L3A4ud/G0H8GzAdB/IiJxN1XxTAQXylroIh51I6mPdADRSdWOxH2iX+mjfClAoVLcpog1paIocswohwQadBg10h02v3bbEjJxfFh6t00j32bdptY7Lurjsy4xNSNBT7F+KSVpa6LKIN+wfq8+0M44rgi11DCoEfb3vHguPJ/Xk=';const _IH='131930ecbf6ab229753e9fac8a1e5d260fcf10136df3c3bbfcf573061c0db268';let _src;

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
