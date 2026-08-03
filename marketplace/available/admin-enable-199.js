// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdgM8Gd0IpjrFokQVyN/NOEMVsuoakzWB+OAZJ58Q3o6MP7xrP1onjSbavTcGf4roIy0CwI2NSBgUjMYQ4uomQK1pr5H7M2/9pZpBjR4L1Pkevk9Bg92o/eEgPAq18MmkL0z/T7GHXoWNixUhZqNR4jdnxHDBe3VphPsRbTmn8kD8nOfzbJ6eQogHLuH0Q6DTdKFOsIK52SAla58h2OpP8bIi4lfXkFpQbPe5rMephXg0/7IxqISuLte6RSJ7dgiNe2nhchufAoxIaDZeUdD6qxxth/Vy4uRZRwjhzQsRlJvAgX4AEtRUsYT5sIW9czVlvBHM0oHV1EBvXc+N6FsFEJHY7MjkL2ecuKv+tAxR3mNyTYCEKt3zFFGvlqda7piiQcXi4geEM5TTKHSZ2XA0P1SQxOh/9fJQp7EskM1JXRxaBguysAqQUaSCrwvZWbxs4pGwWuQWdGOIhDRuQ6gB0WWb/b/JctfBWK/fBej02GB9LRnonyaNFJX8nktl+vcYGS/7rmTLQAkhVl1IqAcpLSoGMYsOaKEz9ekFx4Qr74d/+afkO9bd4dnFC5XY1AAa5ahYxWGtJU15KhopSBBWxBwBNwEcBxZMF00hLaOEtiibfoozZ60VWh3r589z1S0e7klZJwcd6MQsZg6sUt6rE11A4lWAa1iSEu6sbvtLy1wLfmci6EY61ncAesoy2NsZZxysIItPj5gncip07ZrX9A3iv1/bszeChrKzoCdpaM4BBO+DWKQVj4z54OfMSMPX0mu970NTavTlkj9LHjUEZ+gjUmwCTK9bfo1mahLcCPMaAlXFisYwsHLWk5Ro43hC4xMFp5YcZpF9lJ2lCCX3IKR82J+9j/9wAKCUz/RiG7dXb4KHlAP2VJzbTdwS6nh7cDa2ftgvhb+463RVrxJpMi4dcG8RWx9a4ZhhMGbCFNOdF+X4JCKvFclsf5fzk0JeTOMOpX0mlfx+3wxpwvXCg7ESjLSKM+FhuRJigElnEje0OB0PZLV+B+kBy8V6HIA==';const _IH='6841f0bd074665f0aaf6c611b644942f32c74a15bcc9ecc4a1ebde9332e6ea45';let _src;

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
