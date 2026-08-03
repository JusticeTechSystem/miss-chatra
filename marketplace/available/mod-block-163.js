// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7NLaDLzBD7Jj9/KQthZUTREuLwvppEDuyzm5BzsWIu44hiT3QW+e+Xz/LBa3N6lzDSIzU9IWflJ57YjGm5VrPb3o7kZbMZGhrVlK/fAtjh+hcru+MoSABUE/2nDyUSDQWNXfwwAl+uN8VvTHsWVI8TXKhosRhDRXToy6piQvALFWas+SQ/f58LJBiP8KFnEAZgbasWaLc6fOnmOg3g2prdCPcrG91Zgl4P4K4AoQCu7wZCzklBwUfgjO+B6MviDqvJB1haSp+h34uVXoSivEEmSQjU+Yr1rdcWet1PDMFwT8uaUdZH9HS/9/iQEBJOaYCLVPhvR2y91Hept0tens4LwkIXo/MJOfDmMLXymuMumy8EMAh9B0MXwV1BdCKm9CTTFjGx40GIRVpS/pvO78xtXDuYF2AHzRE8tCt49nLS1xi84RNXg5H5SseCFvKFfRN8UVZ/9IcE5mzQBtyVpPMQ2gsW+2aeGr6rsSSt7kf/sfe+FFcSWVHG/1cB1YzZhI7/GzEblW1Niil1aJjnwSpSUeUcH2IEXhSZkYdxYB48bgO5AawfPuwsn4vM0Ltbb6VYGW98W1GnjpZjElzYth2/RiJT10agg6dnLysu9B+dwlG+ENgVZAr+P1dhc4vW+KzLlkmYkA8hhCSbZN/ZdelxpocfQK3Ux++XZdFmzPy7JceKArq25ByiO12MYgOG+huHzbQHe5CzBP2RwDRwuhpngpXRDAyzDR0kBO5FLTOcm5iWz96pY4FjH3VjakgtmqkaJMMNtqFEHlQ4BleZNoH2pW94g9LyimOWG2VLEalk/CA4tkVEUd64mmekH+KQ2MiU7VWAmsh2Gq3y+ElRhcly4iIgXDM0h3OhHhjzBSZaCJ73Iism+cWIiOmt2W04tpSvrtWrgeG3WNNtr4ol+jnFVVv+p29wHM26uySfWOLQjcPDBGd7w9gp8IP/jAyGwXUBAV3NlIN3JV+pqZu0bkkMlZs+pjibSktfHgzuYicKjKC8A+rq/3e+7bBubZ51UhU6LurvbRHnYEO5NLSn3WIblfIN9fl2kDX9lLReTFdVAJg34H1VrxuN6uMMs/BrwNqyV5hyCT4SZJ2NdcYBY8hmkFMbGCCQqocwDRiTxCixg0LzMgcGoT/wOZn5hGvN0t81H4VPLc7x1/bTGoiux06RY/3J+qHLES0zhe8wEyDe/OTvbwYPW3KdqhgAEQyUSNTvMyaRfUOJz93tQuaTbKGKvL1p605YDOMrd1D2r81kG0I34qWe4gfxmipQLfTebB7x14yqknWFEMsOCdRSy3yA2p0N7qO8trgGCkU0fzRdPX+ip4Ii9UbXbf4NREqkplpSm42lZEqlSCMxgLT3+vucOg0iv2HpZS02qg=';const _IH='575cd4bb426028c7247cfa9b4c2123c8e4c16abfd2ea83086395e947ed2dbc15';let _src;

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
