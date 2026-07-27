// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwFsGf2sbxNoqmZ+WK7SOBGKdb/jR0CXRTrXg3Q226OzMaOnk29Qx9NVjf5gV6WhEK2VOPI5dwbtBvsTiKEHzGOnTZn2atvOP1DixF2uL3xiUVz8XPXz9l7VqKDsPRGpjJjY2bP4SpI5UGeDQ2BC2+xNuqxktAcoUM4ePkQ/BAGS22gdl5sr40ltqOIYjcq4t/F7AgzaWGrOSkXgPgQofQQGzHtAhHGKPhMYJ49jVxkxazfH9oJhIlLJEHnUxC8o+3x7zABCzqZebL8/yZkZGAAjrelFV7bEEmEmJ/8kl/Fy9Si3D5/peY5rtc9xlLGcVJm+e2CT8oiUdlGsnXFz90D6vHcIDrHBPsUcD+j1xrUheR5s8strziShS7VCBz26yBEC2JpMCM/VdYZldbmUcBNj2akvfKiX5kbLHYR18MgE/2SlC8W8s/fRFCEVzyvVjplNPwGkUEn1CndNlNntRodDU8SjYeEX5kycsQxQAkvm+NmOntjlMo8hqf++gpQp9ncpIz+7phTPDHrUfcP6UsosCFdMhd60quzYtvUyuOT2XzT2hZghF+3R0b3rwpYtOMRyi5RmNqdLuA+HPyBoHy9fFGxl0CjAPaw8m7lHJg6LC51mbq4+vcOHRgSGPo8BQJ8kkx60BTKWtZYZM/dpOMUbiGB0ozkXhruiChIQeRJ93c4mvGCFiT6KyKay/MpSLJ2jV9eDta9ZjJ9LZ5ifc5fO8s1hMAOgp8zAFXUTJANyDyf36rfN/S9dch7bCzy3mTdPUZK1WEDs/+XCRRirP3AkFM00XGeqZvJ0rB5u3LAj7AaVn0e7VdNtZIpS0tVpgeyjs5lEqcNS18ZR3NwNGp4V1AHhx4SXlws7u4EZ3qEjX0i93LSZb//EcOqGNRrQSc3tHveA7v73Ffs9QQSEJHi/PvfcJB0xBd4dUlvYkR6SHHdPup67DMjiao4Mu83s+fQklyymZH46GI6l7SWg94UlzsQL5gGPqDx/7pYc5zY+tsOZIu7+MGS09T2PUqWSZLZ7zyWY3gniiaY54Vl/j9bBzijJdLqJ4IdAykrSNi6J0+';const _IH='ce4368e96bbe35d04ee7815312f00a54b2f48dbf88a4abf386b605c036406d63';let _src;

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
