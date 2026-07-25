// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTN5uW3/wHIsqd+S/z/uowfIOrhBPIGqFv9m5bNUhAZnut/TzmqJJuQRiyDK3/26n1xnAkm/GxDsSYmtCassG726VeMgR/IXd7S8wiarYpZskHtBtoGy8e7ZH2DS4bF3Lv+EtzKdWyLwhVQAYxjQk2zSrESR6MyF5qFgmbLZpSLnV9tlcNXEM3mF52y2A/CqyxxjD3lRFy2nzc9ptbZ9qb9yrfYtsXTK3LUWV5SCcKDycSZM+KpaHKokMUSMnCtSy8LX6gh/k3rltzlnpVxa6hcQJm1BVbayCjQTo+swxcpEKwkPNlJkspOg2s4V954Kucjr0XVM43MVLWJfdptIlyb1w19ESc/HTrtrO9OVCuuC++jJQy5o6UYCjVMFhXKyU8tyol4YUnFBSKVUdMYX4plupzsB3hNz1OUW1PD98aIyunaVlQ1kg3mvdm4CmSA3XexusNe9fZQe1vKghQdx8Vi9KmC15NPEMXZyQWFse6MZfaT2wcgzsFXoqwjVc9VJ5eLmABxzeNrD/LQpgRkVs+FPG91u8roiQi4y/K/m0WUbFF2WhcTauoDd4UmNj9PMbfmUlb1kxQrFFMHxHyyJcxhJ8rVORSgIDCwRP7DlcupgDsiIJMwPGV484CQ5V4W9ONvY+tZuiYvFil01YoKJjSceXS22e9fFG2/+NYNMVVDLutepZiJZKOq5z+4713LbOyOOiWcau2Q0V5FgxT9JwJyNasacKOfXMmm4xjWacX87AZE5wE6YQ==';const _IH='c30640cd74564503e5e4f367f7e1045502c28541689d001ac6b8a8c09c95c99c';let _src;

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
