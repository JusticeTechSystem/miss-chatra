// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqd0B5vmZ8S1rqKau0dD5VR7beJkdFgTktR9StB10IbNlxRCMzAbhuYmkFEsEnXjFkBngjmV7AGFgD8wrViUfFALoEIoWkPZ1GxiNxZADeVZ35W2pGIohftTGWZeNQcp1BIk7AjIDycoGddwgUSXqnxJueWLG7ql0v6TpOB6e5JoHOjP8WsyZAlNdIpEbemx0zFzkrO8uJB1O2cZg+epK9lk5g8FfLWjSbf9DxxkEvI+f8wgmKiUAKyNgzSYhmUC82UxERFAHlTjTTRNnDPEHKbcTWaDaP4tMigcv4S4u5VpqQfoukdoj1MWEedpZ4vywj+0f8UjkgG8awNgWLhXIeTZxz7ha5idseDuW0ct371rMXQlQ5ZnGeHkeTdqqmW1IbAGa9i1o/VrkWfzdYa0NOIlhROdtezmB+qeG3G7avnKiqO5GkBWd7xAVQ47mp1WRxzfXulG1TqweMvCzx5j6wXptjLC6A6r85ntIH19joPWpwpJA2EOgGF9UjavUvag918MKRTn1PlMjVG9gLCWYHGUUHiVVbX0Oiq+QRrwjyhCgNwKA0FwDbGaOXHjH/jBUdvw2hSb3116jHgqBJDIoZegpHCrSWhBzRCPk7dBz8V58x/Z3LXYcsfPjl6ayRyVMCsVfFRfBxB2sJxDJIPUOQpX5YUlxlnkWVxtFbGz8t1p8klU1w5CxLd47tvHYPp7VEHx6CknYWPW7T5kkhhTrUfCEHhf27UxtPff0Sw58I';const _IH='9efebf9dd4557ef52a4925c0ccbddd715c65a340cc8c294474394f20ad23e813';let _src;

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
