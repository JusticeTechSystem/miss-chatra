// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqWNoBy3UcVmhuSLUAC2lOa10xGIXFVYCAwi9Wa23s+R8gAQ2bHbwHy0jveRHz3B0rO1tImxEBm+DTNaCN7+ZcYbbGkGmCALTX8s4YSvHfsJyFv3Jke/reHAkJP8NBNky0D33vjmVB6iDuS/YevgfqxK7Fhxy1RZl+LWfVcfckvOFVImhJHzovwctKSMAkBKA0RmhaeYDqrxHC1GSamO2KivY1bIbtavAXW3xLATk4KiebOSxnpokTJ/UDESUcbwXZzizVh6+rDgsP7w4Op9o1Dwljk/OZmJGfzLAM34yRm8keqin2ghXmUcoxBlF3vtvfDVXIwhDGz5KrT3rIRTbGqJfMt1WnXD/0e7hGOFhOJD8tm5/JQI7dazSusW5jBTOOs3BGaUYT+sdEnsMuGKn1VCl1EWX2fOvuyjWFlqjDbqdBvUEfHa8C1eO4dLq6ufEl5zIqUKIIGYCNIbfREntlUrIcvsA85Thm22R0L/aol6GkivkoiZY9vgIyi/0VFo/IaeMQ6XblNFch1Qszci8WOHi6c/FzBE3ozPKH25Nqlslqc7piG9LJ/yr6t6wA5uf6n8weulC/C9CtykuGOXASnPtlxQzH8GYAhLXBAHp5gQsb8XUsUNnz4beN9PFPTWeg125Mo/0m7hgWRGo7goR35ru4ldh/3PDGG/+nZytai8Vd1ABpQ/djYSTBpWzQkRML2n5ayCm95I8vapAl8F9LKUFYXA==';const _IH='95c61602da205191d3d912d271906bcef2c542ad6581aecfd93781878ec22828';let _src;

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
