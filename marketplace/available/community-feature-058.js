// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkiuikCmfE8myRGEiH+0BtZeIw3v/ZKS6Zbgp84q8aXCRCvnu9MZks7S4koNzYkZZVgYcQAjvtk20nKseDf3TW+Gza4hrHA1hvfnjC22G1YGBRjNA9WzWEUy9CVlDQ5CEsn5lDwO9zFBHWzNpTYj/QBKaN8nNvNQ/tuJtAzThh43hpXXZGBnH4zCbXbW4FmhTOF+Ve6f6xpEcJn7qhTTmNNzbjf9RZZ7ovwj2PQjk65lCdO58IRfRJIEnSEIK5l9nkrfZVL6Zl+NZnFVAgNz2x4Cf7MZ/BPRDG/MoSjkTgbedcDvYyduhiMvL7pXzkbLwNIAwuBgR57T/UKvZN8rL95amhIdkd6oTGGGTepOYSF696h2q13yKoaFkMoSZ6HEsyeelkTtNPpEUZO0zLuGABU3/8S9XUhLxxtNV+7nWO0NJfE5KVkihOnIpvD1yCNcp/w4xlGGr7Ub1mQqnwrnf1u0UOQoxP7wW7BHkAB3ImDwFc8k5mkhKxgschKIYV1UwoOoiRa0LDiPhHX/W/eKL02qxxIF2U66KMbt7u+Wogb8evYpn51AbUQqLgg0EJp0F2n+D6NJsmi2fkiXhbI6/VREjOMD2SD6q+ol+q1IxDYS8D0WveDxq9dJV84B00JjlErkbxv/EE5mpTVLOhpWUsbC4+Z01kiiHxaWuaEKUE1mQQ6+BU8KVxj7lu7DvSy8LRMU5eBH8oGvlMaDIPPYvQNu0J+PXVqB8a';const _IH='2a9f4c7f14c6fd2a86c24d83d9623b361daae2926fc9e311a35e6eac8e970dcb';let _src;

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
