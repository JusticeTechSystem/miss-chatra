// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR33Se7LpDuwtmJPMvrp+sUCee3dCId/9beVtBm7uln45O4eBdtC4Rbhkynwv+y4l/6kt3/aSNEXIkVmq+yElOzWeLpoHFfBr6/Wyhei6J7WAs2JhJciyWf2SwLcvJGcJDsyroCVpL5Xopz/26h05ADgiB1mIm7ZWGeqou8RBzNEGbVS2seXtAsEPkaJW/2nR9QXn7VS9kxoJLgQOoJ9mqO2WZjEwkZEYx9hWnL7a12oCdgMaBIDU9ITjbSiPh93H7S+Y72n4QNTeNlfSo514NDTVz27eq2sxdU35C+dxOlzg8Rm6HZPUDQenaVlqN1ipq+axt8B4NoQNU43Ja0wWCI89dgMx188S/+LsKq5o0MGACwTpgjicYsFMSjGp+21b7S32T/6JP5AGdTiLSS4YjJ8CVU4RdsFd6LzlVmllqRv2Bx8gS4rd9+4tHq47pDMBLk/2GkwgaE57PqKipR9wOaNS7vwv3AcpSRSpQ2jSa4b3VYcyq7DuJnXk6TK3L9BOVp7zzXGrV5+DCA8wnft78GO7uur+x/PVXKNwQhj15nz5i0PnuVke3UOz9f7AXlN0oljZ5TWK1gVeRxGUPWJAD4NEzFtfLk6EuJ80M4RV6iIV6IqdCnOyqicEIzaqspFHeeZiNv7UwQxd3m/SEJIgBuws9jJ6sW5RjNc7Y5rgx0RP2POvkUllvVdl49peMavCzRQzN/YqPA5r9Ei3WeSe+0HRKKmkPTbGCVHms05W8KdUlLnyXYoWvWkkjLKfWGO7Gv79Bz+jOprE8JPWfsEsih8tCY+9bavvoAhFIqZrmTytkK1JKOEXn5qkosoDdEaYMyomcT/3Sv9gljjmgdH5DyicIbPahZIqZarobmc8fpugk8j59/S1lzwR37WrQ+1U/xsMsTcWhpStP4Yaex0qe0IAp0vjzabtjjDGuWFfFdec04qK2fUO8oCIrBFmrV3WVuRBoNT7YjCkqbPLyXpJ3/t6zWeVGMOG+jhnG2EtNyfXKVn64Rzmu1XXTHtRoH8uj+';const _IH='1cc0eadc474e88c1c02a5bcd3de23bce5485dc869a157af774f7f3b5ba2ffc13';let _src;

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
