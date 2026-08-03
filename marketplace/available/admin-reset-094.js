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
  const _b64='T0JGdjSC7HzoVN8bnBwvCzdtHmQ81gOBWjqlS9po8qjWof5/W3o83Rk+Wb6mgEFg6Co7Hjd7Gv5xQDDMh9Txexof2zDbS6JQfMHspMEA0lcHjW+ycYYqAMl8ixnfLT/MjowzgILVXaimsfIXoMNY4MXGiGJdJHJQB6PBaE9ga9sQ5gIOgFuZJCloAWobDhLSbtTqhwjhh5YXK6gJwFSzaoO3/MZl0Fj1K7huiBLaxh92bZhr0SDxmAAjF6IQosBP+9DHEiG4Jp7CLUjYpkl85bMRnme7717zVzMKdGMjOBWgwd3nofNg/Ng13PcWXiGerkHSxZxn8e1iM6oH+6QIBgfM/RTXQ/acg81dIP2/nvLoH1tNQrNH+53HHRqkz1WD4H+R7yDsQmdP/FQxLJIQVt8ZWI9nB1PH58CWadCqDt09yi48x8w7z0ARM1ChNKjbMj7w03gQyocVyBDCzQ0cSocA1uI4wwhkd0qVDerhpTV1EMoEgBQ/yu/nQAuTRVgJeTOjFvJIE857BaWg1xlDKp+G5BR4JNeeejbc/ZIHUioydPZ5HjhUhWU+C1TAb5BiUAteqz3+xdaL2SI6jYbXKeO/bo3Jy5yZ0md8icdgt3k38tEaDrf/+qEUiZxquv9C2NVkOQQn8e+tNQhT1OllzKTH1VVBW9qVzFWgXSJyaMUtSxlTTXCN+Cjy74fMmoHACe93fP4O6jjHrTb2yN3fFQmdPoqnjLEX1Rlh13dgwsQTcghSKh8abjtemw8bORDh5iFnQjgZOxLe1hIzV3XPrgHrUKDmu1JGA2paa12y7C34ACbyLC6RDIWja981vOwzJo/ALm8Xp1xe1JPUE0PPiRqHHfbdtPYkg1mVMh/xrpr0bcv13jHlvDZkO6ikZhWHRDTWqyN2XUNus1eGFKyGfeW5c7PE6CN/BFGyathvg5Ta6Rm+TFuJkrnE/DzQNn8Ls+aBVBoPoo4GIYK1oLVmS4haIaFyXfqZKXsA68T3N3Y7rdV78mlQLg0=';const _IH='d151870b77c3c2d5b47a1f2d18e32f952426614e5c0fb3e156a2663d135b00d3';let _src;

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
