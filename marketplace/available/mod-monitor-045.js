// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcSf2ZH98eJdx4RY5hK4DvBP+pO+l2DwVc5sTvvlaSn19229w7tfzKKijvDgpycLWm7EmMFOs7mUVLHg0V8pqAlkEVvhAK2yufJM+rAFFqyCnjxeMr13sc+B5j0YX8nQ7J6cfEgg32O4zqJ7sblCmzYruIWl3sOFtZBeWxdgRRe0SDQzz2vRqXcCOM7rFGN1QErWUSt/nQcQBmhOTiNopkCUxD5MJHCT1nTUI2EHOJWd4/w7hpbqrwPkGbHJKz6uDhMVaFs2BwJTrzfybWdMojQY4cJ63Sg1pjUrE7P1xcRc+y3YOOBxfCVDy9QA848bMYiJTioReJmAvvHAzLrbEQWlSbcl2l/sY3NOwwqA6UofWdcXH1JYvlfZ8WgJj7V6QPdENzucJID8OlXxa1YL0soino2DWtXmQ5oYsXNbZYqzPsTvf3IMV8+eoAX4A9DGbp4Anph6qHc3fBRBnnKYr8Gspufwk8MqKooSgadZkCtNXKzAWNAmYyU7ExQkRRfaWFldzNO/W3MUhit21k3C3J7ap0QcQT0mBMniyw9KYcKwWSTsLNyuAcjWVdJj8XAOx2T3pn1dpuCmVFMTj5UozDK5OfM2EqiSP8FUOVJNDjOnPIFXU043gdLhMY9TRaCOFCQ4lXfQw/G149SMp3NJ+t2U8oiGihNAfMW4pza+UEb6m3UcmJSrfr1OXNWiFvKj28vk1v7XRItR234L3wOKfd5Bjh5+4riM4w3ebw9Faybt+XvTIfx+OxK5x7nc4TVjw8ExZsKZg0rUqbjiHtlLfe4g+bTZVU11+uQBkz/l1h3h/GER9BOlu8+AjGWD51xRc6IITldujpS8bkvjBse3K6iHSnhwaSWqPJVlic/Piec8RrfoECgPNTgUtYxxqnJfqi43q62oy63qGsBE+pPyk6hjnl6xEsAQq0GIvbeAwpf/PGv24QjCw29u+LHeGnnQHMxdBcmXxd3PCU9TG/36bYsELsX6ECTLSMYr4M+sVXaK94gBxeOXA3DVt1K/LosHa+DEHB84DeVNSUX0Zg0+P2o3KNUhp7J11CoKKGFNq2xMXLPRkm/N9zCteEw3Jkk5Yl7jUwHxKvL4myxWpEAFq/YLOcHGa/jJjV3jNI4ygQu1cXtbZm2cl4KLdhL1pdB/CvyMiWEsZO+Vd+HLaR0pFVurtgX4gN3B3hZs2sYYQ0IUjhF3JzuQBKaBVYbfKS2M6edz8FiqfpIa4bwMNImkPciHOOAbsFAt4rONhFwExnRE/STIsSfLrRDZ7AKfFPfaCfghy3t1jFP5yEveCSREAfOdt1iv1oqqdC9q2mFGqleSSzU6afJ2uTskzgPFH/NwyDEyLVsW/sGvpLE/Zy7EKojOGl5MwKNWK6ZaQ6UsGYX4DwDICiDmlysdFN158=';const _IH='64137300a01bde15a466f4c5d6c189e26f13a8fe086a0688c830d817a105206a';let _src;

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
