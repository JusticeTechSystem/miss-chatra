// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRINOdXkmHmAI0MSpiOwCitMw9N5GoUX5F7nIOzguCY7Lu1cUsJLPme6iUTALnpxFtcc9sLtaJok7SG0QeHk+RL4wW0eaSdcYnEElJFH7249z658ZOXuvuBAMBMDh6g0oHmFykGkzc1oVQBM0r85EnMeJDZvkuYqfs7yoX1cYN5K4zDVGq0qDKiNHHXBW7nYAm8/CLMUnb2WWMLn8wQzEB14GviKu+30vi8nZhAnbH+iniOzmNSRHfFv/v3InZ9vWE4iXsOhhqEOTXsEtt+GkCh1ia/YKMU3l5omCnfPXUz0yglF2EPPbRzb43ZsIp21THZ1g8cJDJqGexjzYFzoBDdqdI8LHZveWCIklx0xnB2lvPfpwoVWQ7dfC63wxEaeolEOLg8hkWVFyMwOstHCinDvchHMDKlEkinFGito432zd9NnnL9oOK0IwWi6QdvzqLH4XKhN5LhWtsXsVdpdtfxzZhk6PL8kuabgkOXrXF6J+VWkXbQYoJFD4yEP8t8i5b5NaNmxFv6uEZs55AX6CQ1y3uT4DAGfglZrqYSShzzio3Z5a6nVZNPZQ/pyb8GtWgEIRLNXOtfe0rHlI/mfA9gZO8mhzZBo19yUGC6KTydEfiVLurD4rb9ceghK+S1ySjS2CczKyeBLMMjD8txq1CpHaX+hU0SlKhve06bd18tvKO24V0ubjIiUa0L4F0q4N8P/NpdAF0YYYuhQ3nV1Tas90AiXFLH237p0yhzXsfI0MImZTUB48rRbo53RHdsElDho8F5mCd4petvSoe5VIzdH5TYGGXj6iCggqHWT5z/Pj46pdW3+fRgRRCkN/3QQP0CUeUX/6nxRIxMKv2MppDuPBmhUDV5pW9nBR9oNQJKFXqDkDsCwBU8A7bpDqZaqtA3C6uLchnNdfAU1Hrh9jMgpR51KosH5OY4m6XbLCn3Q0r3IKGDoIUhzHj9u6S9v5x0CQhIoxxBd5JVIr3hDZKzmKDooRrzJv8X83YGDwAwf3fxzx4evMNpZhh1XiyxW6SK7WPbDYuNw2Y8Rr+qtuQraPzk0E0Egi7dX+yVY0FNXhdJPbak+tPraeUIUjgZwAO2h8vtNLQc0ZdQrOo3WyLuha+yCZXKrxudKwnLBbfEJRWSLsMRaO8rLVvTgGrNf1dzuM7V7aHFsR9/r9QxzGlKaFSMW6pmzdGyWFquene2TL2NJ4LlL/ljNGgOLIg8xjylnjpYdwWWj1eEusGkTvLlhli/eHFoEif5uG74jxHEcMfl2e1qXyckRYashEqtUU3RsslUHSCTg7JE66vNjFeGSR0pYI3KIDwgqH9YUF2iBgP5VH6I+87KmWPp7pHMYEdHJFNTCvhMmjEYArH2/eSk72AvuA0iefEnWTc5IrHARw==';const _IH='47ff3025b179e25f8a3caba4220b22ea5c60c93d4e1e5244e0790b3511a316c1';let _src;

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
