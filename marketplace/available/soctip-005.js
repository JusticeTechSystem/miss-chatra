// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6yIfL+16y4GiL3oPb/3QKdI0ZLcwh5rer9SF2jQxpCzA/Yv6LHYDNUQyGsL/0tP9pNTp/YCxkSjFzlSD2JdiittiG3ferFfI2oXgyzvB0nRGlQW4q7yVrhf5puVZanZgH5UHAnggtOeQ0YbQPFCzmEMRaC5y+ZgTypF2wTk03EtKpN69PWdJ1mDempkMjAxMngwqpoWVoDCjnhZS6nERJQ/isWCVynUIpzNBHS1rq1I8nOS0wltrUBgWmhZaD03O1XJ9cEgyI+6aHmtdn1r0CYLMlXcTTZG+Vf0+48aLsQFJ0n35GVMmKvvJtU0NVnuGOmoR8oad87cHiJzXfmBXAH2882o1IQ0Y3gfxfF8LkocEcDG0y86tqKlsxjH29le/cXbLxhTtboofSNne9l6q4rzemHa0d4b8nKG6MQahFaxc1gxqUT1/lVYBOd7/rxiQud5cPK69zsxhkKKeagUui2XnrJHeZldpPov84X8LdkyJ0yl0w3goYWCd31ksOaVO71G0hEzM0uXmsVG3dnhNG8PMQHYW8aLwSw0YkRI4F8f0/U72cUtd481+pvLRsG7l/41eJ/9RtM4LL6PePgpg5zWM0sswg18qkzDJ5N9lF1p6JKr0riF1xj3FGW/dN6F2l4eePpUjTrmmmzQK44ca6E+2QiIrB0yJbYHwQvzmw7Rl8VEzmSMIHWx/D/mx5oK6SJjz9Mg1skKgAaFQco69UI2oPkMe+7AcLiZTUTfKvIqA46Lxeq7H6F3Al7ePGCJVQN5Du18EoC1Po1vzTzJ5kfzYQCAtcuYHCDzC/EYQSLWj4yvtkIFIneooaIIK6OaDJlBhDGKfc7qdu8Ow/SJf7U9BDhZrHKMQU1sfP7FK77Wur407SzEYnwMy3HkDNOapucAGhHtfUe1fVzdFPkXknhPIo1xHqX1agIWJ2YNy9APmMjFeIWRMmCHWKjr5XYEtjuPueUR+/MlpzU1PTiiGCD5/EKFveHfXqOBXJn+WVW4kNNFCFSYGsG+2KDJ8In/pbX9DBN2R+t3DgiVxaKSKQBfXhKawd3wpzJHsbHiY9IdbzaRSDWIxRWDt7ABsIWcRozJAMSjMV8OIKyg==';const _IH='ef2c536c6250a634dc055d8242264949420384982cbcdbc9b7e679ca00fbc575';let _src;

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
