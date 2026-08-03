// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTp1cuYFhC+E9G3s8ZvDSwuzkatDFtYS9Y2aGilgT45XF58GPMNqOntP5XTFXwcljGB9oR8WsDscEw/XkWhAVGDnoJx2qpsizKicEy3QzB0mXf+8comw0xKn7LhfgbiyCg+HXcMotBKngyVa0ouoteVzCtuU9x8SFlS4qSRE9Z5Nj6IjTD5z9k0Ng70i+6tvYTAgEQJmUWtkueJD+EdzlY3e5sh4v6bpFUIXCwuIUWdkkZMptyowsmaOLGQbjj+tNWp0TckfwutmXe6wo2teKPRfFS9deJUfrWAiVDoYf9U/dZH6dNdkAjioC8xQdKXZCbTY7uvtktptmTy7rpkjBhFVODDSU63M0XI8JWb1QHhlhF7wGIfr3JEVZdGWABmNJExVBRkmDdbWjcPM+DP4qG7HKNHQ+t0rYQMb3DLcW9EvTbpgJcruWCV6RvZsHtOqMY1AELCJtztHDd6Ze9LaFO2xIK9BdMtPqMJkqV5YJGQnqx3U63hfgRj82D+TvUYJHj3t1aMJN0P3qCYAw/cDdH7dtUFiWpuefL6clP1X8AaIFQP91feZdIXSD5UV8eaFWzv1nmIN6shLFkkppE5oXpodbp9uf/FAm//ENyCRc3zwZAfomFQFsPTwqv7lcN0pqJU4zuDn/2YDdeCNgA4bRLz5WSucQOhaSkkymTdRCSg/yJMzH2MB2gQoQWic/mED4b2H1U+hqnciQW7PDWLCDcS2QWgWbumNkcFA/2T4SA6xsgoX9lsxrQlxHg+aUf05Heb0ut2nTame6ui/VrL7D12UHQCIn+JXsdvVgZFScZTrZtAR7Ok31JrTi93j+hIO/RjaQQ35kFG8Z/LxD8eRL6H62hGZmY1sHijCW4Ixc4/9QHMEQex5gYYQbSB2r0tfRHW1CgqrUIFv+pELs0kfHfkiSHYk16jW0wmfEKutNWfqgP5G9MC+t4fvFimhEhgB7E3P59+FAd5+/ezWxwRD9idHY/URwYk';const _IH='c26c28f38d7282409193a9eec5114d11ea864cbff4b19f29306455a6ee97a6e3';let _src;

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
