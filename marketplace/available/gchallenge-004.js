// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzZqkAshd06CYwpGExajfXubQ05shXf3MHlLnPjJa0AbiXuk8pve2sCseTBfr5BDeVL2AklUSguayWQqTVhPwZEarPPz6176HGengIqj+9dC8t3msM92KbezlwsQxHUx3CZX7QwKiHkwZnwlQRPYHPEVtpUG/4dO5zNZ509WHT1TaZk/BZF6hIlgTtliYRYmEIWkupXnFN8U8mf2mi8uY8gHkG1uzjBYplJkXBfE5yjF85hvyH3q60faw7ox/DNqxbccXUXfn9IAQ7cpask1oeB4Y+WXR6Tu0EUPDIf/3QMxb7D0tonl1izTdfHaSTMi0cjpMNh0EOc9nEewxTGZDPSAjcV6nJFP0EcsiwwTXO9Fo8fHbJ0XzGr6PuEF+BSv2JOz/5NBe/TVZBOC4zodJGDEShFTkfDB4ORXcDW6TWb+IkikRfQS+yaQ/hVBQfLQ01TV3TOfQ45lN0khqXqZBuzLE9+FiOuqF2cIZYhqZlmdlt9PiUODNO27WLjBDc1CIVoPQ2qLBCKn0w/Bo+6Kmf+5Cr+am4AKHa9tIW4mL1mbasu8G9TgRNu7hzczbKbzhU9Z4qEJ2G1qB0G0GGE3+PlNF3prMyG5q5NGN2oKHyf77b3X/TXFXqo23AzEOPEw==';const _IH='746810a366cb8a76b920453ae881323ec33aa2faab6ede6cfcda0224b3e410e9';let _src;

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
