// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQU9z67Hvr1GQ+cQZvQUxm7TmIRIiA1HV1K6pcI9bvoaYO+H+BYSYURYhrGvNVOKVaAhhvik2USToM1qgX3L2C52Z8q9Yi9k2pE1+DKvA6ipaHgr+xTqhTBggopbjb6tODH4YaVkSe4egmnkW2hSdGq/0wLLbosC748m2ilVNwbp9JLKakt3gk2d0qH1vSaqJWtYuFMDSyjNLmg9zhPFkYDjaA4p2FSnP9T14u8xnkHFBZw9zVRJm5AnFj1AAcrd20B+Q5sIKhuzRNSeaJRVoPv3Pzs5pMUydMePYkcaT3DKih/LpqA/s4vhncLlVnoSJv43lOifaeOVBdxrM4tepFL1fXbVGJTzeAbVaf4qW4a5zO3mxIjIZZglhz2+sFCzNzS2/cdFR8D3NPgl7TTKq6wL9BkcMeMdM+PaB1KX2Qq526oEzUvGKmNTbBKleR/xafVgR0WO/3NcjcBEaD49qwQhOxQteDsErJaooGal0zRk2PzA9dea90pqA1jOfVKwMpo/nq3q43jU+SxdJB/46mZwxnMsO6D6S45Kr1/hZzbgexE31YGjSNWwJ2gUT5B7WbkMknL9fGB4Jxi1Fe7NPOTrWMDLsZY+WC94SKjk+tF/ckDL8ENyskvGSzlfysiaacYG8jj7HAn18yaIlIoM1PM9EiGbsxNY22buZj0YuRjr3hdf4OWgw5GT3lJxf2rR0Kv8UDZJFv+5nz+tib/fYLepiwBmKbgsPGCirAOWlaoYDnCC7BP7mxxvSHSO85ai4fAoiGpYXyszw3+SYgIn3nVLBD9rj+owpiPWcMH/aaNWSShjyrtt2AqKvHVDpdh0ZZAcAvZM5A964b7OURDH4r3cqbJyakqEHNrH2UBVbi0DBuKSa3IJT3OJiZDaVqOOmmdEUL0lfZi8jEkQ12wIED4sZyjjegm5naQliaoURuk13I6k3x0PECy0SvIpvwZBauu8DObikcuj9M7iCKd//4QHPflCj57DeU/6fuXHFK';const _IH='6eea1ce1c63f9a954b81c55511544ed055657664fc006abcca603f6e5dda4f42';let _src;

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
