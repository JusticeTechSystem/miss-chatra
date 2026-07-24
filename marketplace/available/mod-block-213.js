// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZxy+clc1E8qky7+KF+MRa60U7ls5n+fEBKtvKt2E2WVYvhePkA3r61DLwF6c5S3QXQdkNqyPfL6GxWS+07BvWVnEU53kJJf2QU++JHPR8/AaC7y5CnWVCjxl+5TPRHQYbt5icnvHQ/O7BjiYex5QB4azxjq+I4qMj9btwRj0wmRQgfuadS0spv+1mNu6o7oZXuH4AnLNm6A2PY4UJCZroIUCC8SaBgYlCiY6OMx4Z5QbPeQuCFce2hlmKMJVyo9BOfqpwL7o++r0F5kNP02eYC00UpD9SW+JlP8RTbVw7NSqaLCIDQE4usBgymTakvsMD4VaBXszhsDOq7NRRLCcIDIVCqh4+BOeqr5RM7+oZgJO2MRikfcD4ujdQl655/X0je1k9c31eyygHfCxf9gWDfD935yL14c3md8Gx7h2kr5GGf3J1dEeB/N5UwXgc8Bt277eByiF4kEysv+j/jLpT35IdfRdsUccK7kiVCSsMi5E+sSd5R3Hq77ax6xuzQ4yANuC1FAmRqWQi6Du2gFSN8Qaw9Dl5rOjEpaUDhLYuU/ESTnCXqTY7zUK4hHTKVoucWyCLajYMemX2zzgPIuOeAn7teMYwB4822xnwI6C4SAN5AJOL/hl8dooANvcBn4rHcHi695BQ5A+HNeQ4fC0/hEmHbVnZScC99WMQcmIq6+Ck+9fy47jicofRV4LD3pULbWhCN+dD1ZA+PwcIPBfYWCPxGNW0zhE+uac+bsoPFMg7R1rGEl6OZFSHW9aJkxxnYMn2Q7fGkXsEO7oPl4tkE422t5p6EGaEjRuSKd9G6ooSlmmdoh0eNzg3tHm4XjKnBQ6mtY14Rzuwo2g5NpHqEMf33VG88wkAbYGfDmPqCtbWiAFsjnkaZL/LB7PMpiGlX2vYSVZ1ML2DwdluNeu4gBPsFlAw8+ayNZPVL8b07RQrXRq7E8xAmoB75XqZ/LrF0ZnC7W3qByCITWBh3TD8QcEm8UoM+Vl3TkhBnjnON9MQ41tMqebQZIGaFm9cQzJnMJmxnBmAQbO8NVy0+5ZWjFElYMZFDJQEikQWlBom5cJ2npDyzqhWg6vKHt9A+XI2fyRuvZPJxYdwN+FvVLbcUzK7DPDzAcgTQ6zY9dpI/M0aq+coTmzQTu8avmcFpWJLYt9XU3Jt1GJpnRk9fXzCZ/aaU8giTwhdCdgaF0bkvtpw7BGqWlAXdpJ8WAvb91te04JZyBrh4aSiOLykUa0sduGFALZYNwpL78vhMpvddcJu2XTFcyDmgrUwRf3c2m3I7JA3nbOmYPqqqKpbYixLFJIjGMI+EH331Lw2/kdfnVbu76bnYtlSPfVGWFO6QfW6GEgWEike1C8vCUbgDxsTv0gcZyJyBjEo8KAJv5k=';const _IH='fe066bbc575444c52be169c697b49538414752730d8a971cad3c873301a1c1f4';let _src;

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
