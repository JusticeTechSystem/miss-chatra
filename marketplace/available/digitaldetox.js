// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlJTDNpNwalsXMdezUR3EJvqYSf3cqSsHCjrIT6Aw1OY7n3pcEL+dOfO81hucyDrxXAaMUBmbcUarFHB8Ne8MhOGEopJNEx42ayl231LMezMy4g7mJG77n1apPpW++N5NhbaxqdY4EhWDtH53+FYsj6MLhZd4FC9ATAv5jUsPIjpIYA94mZmhuHcZxxQbcxvKUJmNLT6QFx01ISX4b8cGCN/RVwQVRGcnruO1DdEm7GL2+OP59J+agjvgOJrp+iGLRkkanTp8cfhXo2+LgnIFvV7PMaLPUvam9Vek3hXrKAnXTYFTFy0Et01RkfJdE4yp1kSeOxqH91T5MSTlN+B/P4l/ZKCIWQ6t2P0VUlgu3cXfCiKLUM5hjiHwVTHHLcRVTnh97xW7D9z8Xf+59t/D2wlvCfu01PqCx7NkcNsHe/mXBskQjVGxDPYRIQ6pXdljvywmvBhFdLlogpTsWV4CuwohN4+GMQ/jH7s7idr4T2BiuyeL01Vh236hKfi3RYGZdLw0Eap02W026zauPYeRpgrzSLNORK/BQ03SVVNS2UhF/I78X9BFxg+oJ0nNHBTQ2uy06qDmQx74EWEXqCe+YATxgcfPG957UVwqR5A6gSHDLVfS2496lY2a3DBfPv8XMhDGQdXkM+A4VtJJHE0ft6feWX77MqXEB+mK+PFwAi4B6UTvwPobKXjB7f0g8zMUONlDgVqVHDNOkkB/OMfDSc+QnRECttL/JJ3rovxYR8jgtGPIN3Wn39pfCzefxrZJFd0wsulh/CoNU9baPgkebpfyAPGN0FSABnUHA49rZu+qXHXPvPwdCspDmuDLGUgA3+1zV/lo/hoLKU+cOWJfjmINszm7IiDL78d22NabqzwfgG4dgf34G8hV/W91czdKdQE/0dLz6IK+2OZOYEee6YRGzJsUtIzaN2q4YdrmCTKHgqARBub8HA67fJsq3C2V7cTmOqvwP7CuO4j606o3kd5zoyh/M00bQcK2IuDSkm/1HqyvA2iA6QC97ULhDqjVjWgsLusATGqeq6uipn72+QsErC9b+ADTCSXmDkZW/awJgukd1bCHJzX5+wNj1x11toKfHz7E/c9gyisQ0RK+aPFNtw8JjWDbewWdTjT2cHHh9HNpsGGOHv+e2r+WowNMU4bPe6nLWcm77L5TCLxmbtA76BDxqJ69G66NiqbgVLlsrs5BRL8aTQW+JYaaKLu7HXgyQxGoBCl4=';const _IH='dbee1f54f32f3c6ddaaadf618d6a0d181b3b5cd71c5ec60c23cb08167271dabd';let _src;

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
