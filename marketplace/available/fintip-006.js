// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRju0/0ccLwMBsswRIN+A0+kaDzEV2L2SwT4MgYxpTgV7mamTuIzFk4o7g9ZYLFKUlrnb3eJBop+R93lbbSpqg6W3hKmKDKjdz2D7mZ+BXE4FYdB0NAVVslPAYA2LGGPasnQMdutdBVU9N/910fM2Idu0YaA3INnM8um6g7nu9Aai1zqjCVNl+ugS5WJeWkbxyPkHj+BzPT0L+vU3AXznXcexfbLl4kVlupB7nlYD1TmOoCeFc12slvrAweHiQeJfNLIrw+FThhyimUL0deOub4QxOpdcPh2XR0X0TmIAxPaKMaKO1dz73NM9gCbpHnoN+xAwto4PjN6ZbKa7V25aTAfSxK9PbSZJBDJ00UfgE0jojxwetuaNExJQM9eaSMRPNZEhuanXiMxBLrD90aklh62/U2qhIQvKPH+9NdqX0bG2FugPuj45Zy5tz1ZaVJV1Cq6qoK6QvXzxYTZj+i1uE1zsij/fsgbvDZIHPP4xPH1jKZksUe12Lr/I+lhqemEubddlcM0rOdCEWQ4sWbQNe3WSdW6N5e97IBIx5qGNF6Z5SUw0WuBdgJ8mvd5FSpY2IFNnw0MuV1UsbJgX2WgYi3tn2UWB4n9AF2EGPGvrND56lvYGwwOOFoRVKX2ilWPHoPLFVGpIPJC5Aoamj6Su/P/PkyNjslvfn62KLB0rnwyO6sRTmvkErpHzH9TSzqeIuN8Fx4NLjKpSciW7QV2oz6cPumPtIyuf8fqU6G/ePAj0WJmZOTB05Gl0y5WXHes9/JMjr8iWawNqCojujYxrk1ZkRJ+CyOQocoD0cvw61nblvHoeB0DbPoWY9K3/0kF8d6WRVyBnh5eFd4D6JLQQRVZJ28+YpsZrWEd1XNHe6MpldQjnfneTJBjlBtK4ug3pb4QgplZKkIFtkj702FJYgRoFYAsR5rgfdf8Ahhrm8rsY68SKysJHRe4TNp1lEc3OEXL/HlUKt/bvCxY+jCGwqDksUCDvtR8Mat/BPO7gdXw0iJGYLKdcoh/n8AKy+w6as/ypUzXLVSskF9RhyHQG91q5C0i41pKOY+hWfSWy4=';const _IH='908e762161ae5fefe0c3851e49ba69ab7019f8a257aaae49fd15e6270e324df9';let _src;

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
