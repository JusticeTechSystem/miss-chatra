// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9sa0masLIbuW/dXcgYIYkdO1hg+aVmDUEby8UFlBJlwdXhc6NutNFTNf7D9AXjRTjhW/+fwuCzpdCuQ7VjHTYGxzzNj5K2nadcKW+8fyrdgFNchpldJLHJ9s4uBf06Dh2N0LtmuE+qH3jpiIIGPTK3qOE8YwW02qRIQeWZkAzYsa0YoyZQT8hoT0hkqTrc74NC2YM7CvrK6T3cXkj/VXwE8cQ8l6udbd6fS3Z+PdWy24R4zt4Kj50/QuTb5OrS8G2FAk7gSqAqO3zSFV5Gor8SNJAaTjHlAZ/rCL+6dupsDL6XUWTSOhL8gCUHET8UC66GGsYhiyyScejzEUpRkSFJfPBIVNFgw1zpVs3yZ3g6NdVavgydWwlvUTksuIWH7tSANc+QJr8HAOzIcCHq1clifkxQLveugVcJ2NKozAbUS4ZvGaA6Wq9sGqJDePNFoFM6C0CTd6x1UatwCqAmQCG8kvSLoZfjk4ksQM7auT2SFoRK8aJ+OSBTcWY5Yd3p2/HgtGJQYNE3UETsHu99WUlSe/f4PcXXrp7rrkc+IvoDFvrFVg6Ny1P4/3RuNhUeoTYAsXeEnk/DPax68up5NxoY1z5GCPZizMpaScf0kEOY4tJRD4STw3Iv/RlahexwQBYQyvBv9T6xQgJJxvrbu+qG2Z6lUR5gukobYM9s/RLSNy4pngA7MlzkLp5wQLbd195aGeC4o+KY/RsGIfHNeJripXCfxcUx7hJqrYgUGGUb78LgfaHIQXg0EsG5d/a8QDbhn8JYo3ZxXb3eL6Bjtlvinln0MKYUaMetRyJno/ROZf/+jRl89A71lGGMhl6ZMoMKSSWpxMULKESvFIUSVfw7FC+kCCKpo1QtenGGoZn8O6wwcpjXaOV50k352xdDVrDa9dV79deb/4QhM3gQKfInJAYHVAx/2uppKe5VoevqNUKFDhQtFTOZlfMgOw4rZjKvT+lPDGmDYIMRlnfcuHv1idNCfVHs8YQ==';const _IH='3a3f42277b908b72d1742aa5240eab30e055b68a4f485efdd593fb5df9215940';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
