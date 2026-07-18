// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3DMvEQJe5QvP7gpRbPuEXhMuB6ddiyFnAxljAjmWPyRZekEnVlhowPqKrvKMYWDo/81dssiIeFtBTnIcEdq93pJ0ULwIJ1CiB1biXpzLRMB9ziuep5n4bWggbPYprE8rO+cMxzTT4vJ0H0IZDlBsYwSlgNW4VI/shGwaa6N4Thokuk++B60rpndUYAo+SOS2NDP5MQg/FiZByLBE9LQb4rfb3ltjdliccwkz2taZAhDkZe5OFtHwBeIdqEb/w1H4ORJ0QnNhjKnNXu8TtDWZJaPmZkqan5BjhZ55wJmXMe1VFAxOoqCu/3bPaubLctzR+Tmvenq6cdviuMl6yyYKxq3BjdAyuBHokujm7N7bUGkkiHcnKcgOgdHzsvWNhHMss4VEiMkaoKGfFBX8BNNYTMar8DREslGATtkBdDcB7F2m14e4N1MSIiZ2dz6MtPQ+uUgmBXTqwRscCjs5MyV+2VHbV67pUMjOmXbco68ZC4HbLEcWOIz6JropCowy25KlnhPbJVxxtXeUsoqKnUR71DZ5N3ePwvm8Dez1V7NM2UgWiAb96/d8bizIQ2aeHLwODg/2zE97zzWJbaEIe7EiFmuPc8PZeeNPgoOuFr/aVK/yLCd/eoZZ/Eryn5Nd8pk8Mo96syFCw1kzMWGwFBXNevsW5x3Icdh9kuRnw6M2F1qbKn5Mck7T/KmeF9oUKqEH8Sq6KN8rAlXlNAtA+u+PojYmLbJO4y3TT4TlIoldM/MXc';const _IH='66be945d96fcc1e9b33b885e1a100e92453b0f3ade020294936fbf79965b9155';let _src;

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
