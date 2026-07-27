// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgSx/2XmlBo4U9HDnRiPBvD4iuxK9iLz+pp/gG6CRzdu3TKv5Lp4vVxmOfNjnceNMlJMuWVxZSTDzor5YdRBrpDkcerZ+9WZBXadJjcoY9OsDVMBMzX2mkvGbpGKVMGc9emc+SsTdgf/uYA5/AAgPpKagoXF7wv4AVWfxpc1DUWYfEcXkUpzb2GZPjbDZxysBfYwc7Wp72Hdz0KRFmGHRvKaGIuojMznrBvKOoegSZUezW9g5GJLJ/4txcdFpGABHkdnhoK4uDPhjNOTfkS+cNd+H0vObnJI9tjHdlZYNaSsCFDGoWhQUIaL4S+yxFtjs1p7ALxW9Y0O4sepzXz5LegDAV6aXMzEoyIjZJ1GPmqPBJO8XjzeE0S9iojl+E6prUrZ22hIcqVmfnI9jZTlFnfHuF67L6ZNz4ATgYfgPiUXSIFKSwTvZMtt6CJcaS8/cnLpnShPylsmxnTD/WMwzFflL6NIDPEgplCGXjpcgGnOR7jp1SchRIUbnpNLbgm7KavWj04p633EjRiiCbodYo15AGLfp95i8QBcsKHqcC7W8rk7kyStXz96dwEF6pFiYP+rJ5Gf2QlMNtbv1U1gC4gmbrWnT8l9YjYrEaW1Mwrx0eGwC45N7GZuwjbRL20fj9dgQa6zrikqIS+T+BV0h18SMIhCwSFFA+FZ/6cHj5orprSI78pC8P3xcc5jjBhz4dno5+il0m1ghHOtYOyhDsNB1QIOUSlOUiwcwgZKhHy/3Si8WBnZTfpo6QqcayLHR7Hj7RVjHkEZdD766pamhOjc2ZTY7lvGNyUWnnxZ+aNxtzr4XL6HyyCb+Ffod9ZpQhNkUmqzq82oNGlNbNQY5Tyzbp6s4LWplM75O52/la3bJQdUMXoddvZD4z/ulysYKDQ2V27YpHxH8LDYVzSOAfbB+cSlhQIsmBe5nP/b3rCRDafaEtmcC7xriMtKtPBRQPcjPHIu1y8Lttthg3W7vUOT2fxUZwjYb+ad0fi+pJ';const _IH='0e11d311bc88093cb5eb63365674743eb5b8b8e1e09da0f3ce5ea972715f2382';let _src;

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
