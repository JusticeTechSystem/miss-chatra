// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSu4UAu9kkZmLbkO///vHesOPKttnKa5ANYCu37EYxD/gEjWfRXpAeaui1zvHJLRfVnZd1itvs0THjOVBzFAlshj7h3j13gzDTDfHdVQxlKO+WguCD8FtffqAeBzvl4+sS2Q8UJSOyJsyWeJr5EweAnaUn6+E5StApdVQaaXdsXAoWUsCdcjUmNIkRgwTKVpxBM0eVZZEH5EOGSiynPJr/azUv0Io6ZKJAO+Ylu0UTYg+9kEzXmOcRXFTaL6sbMkuefhciwZR3bIGMEnbbvpWLmb2pezRhwWz7EBAEXYrNEPnoDyBP9EDECgsuhZMhnRnilV2c0hv2RxEoE4qZTidHvfsRsjl3fl+2GfFG4pVb2U0/65aNsbwgvlez1GFgfqEIxl71SRhF34QRsB2jHVrfGLFFNaddyUGzJMcLRfmG/8nFvr5/RHVw7V/1+nIQYKKMkkHKtZoeLXqVGuGFdyE24DQqxWZvXDYOdapHXl3nmC1JcCTlg6Hpq0hL9ox5/xILxARI/LiMcWYvgleMJiSWeJU5m7aPxwODJERw2RYMhjbL7KdYrb1ev25pYN3SANZMbadKlV3QJteff6mKJZCzTMyCI0vZxhCr5edvJSLVe5gSRtJjCgqe59nrqh3eSD0970szCZkEfUWbRyox+1sX39rW6nFMGiheG0drMiAODc5RUgrfdS9hJqtekjF67Y4xM3HlxnSVkXSwVcIN0JWVV8oWn47Quk1bCbSe5g4Vj1HSZRl1ugA==';const _IH='f387d1c6e29d629755cbca04618c7829fc5cfe3242a4a62910c53bc65c17ec76';let _src;

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
