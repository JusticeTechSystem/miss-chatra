// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzV0tzGwUPzUUW9AZlCAXMGP3MXe7oNI+wQaFx8c3lVFHJuA+Lkl2r7iZ5GtaYRlI3ueiBwDecrUOyU/6mucvA4wh/7+N0KncsKsRWLNxdB8adiMnO9Ip51P+dP6Jng6IhcORa9um/zSnnp8iVU88PjI1C8+K0Uzq4Ew6QSdCAhbeLt2LnZKSVa1W+CS0agGOSUM83zpsoDPUgKBzTLbqGZwV4LX5nO7s7tb51eyWdazFLzFwDa+aLdPMQ1N1pQ2aAZDLPMWHoux755Ok/Q7oN8geFJ8qLq/f1coKMG/Gw48Jae31CnOeLorvu35zciBYlo4Mt01lWeQjiK69SN+eDoQtB59hH3B9jY5OzlbnGtu8pOMmRMks7kn3NX7L4OoMir7Q8dmx3Scylql324cNKISZkLPFN4BpIybGAOW3OcdRXMTd7hhQvS5LPAX8Z7+CROfo+XQbtSeKTeScLyuW8G3SE6o5scUV+Rhm9yjNE7mc98SbYqml92zlEY7OvNsx3zTFATfKS/cPy2uN1kWzA4sLZY53Lm12w+QHPiGyaX9Un+cpLWF5mY+ifMogtA7RyX9MtH08mHNS5RiRwDw7QoF5IaVvhOsuW6Ipn/YcAnc6Rp3yqS/I2lBCoC8m0O5hpJalJ6xaMIYRvopK6+Qt0XeqKarrWtI279/Bdb5l3RLEJKxJlUP4KkGV3ur6ghcXl4KonT76qLdkUaEjVKVZ5U1RaspusKbF7tqWNqrm6nuWoR1f+y3lItPKxnVEhPFPSB2vPatF6Z2/RUVMgCbSI9HxLDIeUOFG/FISoWo41XMl2ZTO9aSIkLfUAK7D0zGXXqTJ28nJ72OWBbvPOcT52QBDixPgxz8EVGrsw+0weQGqbLXnvl3vbFL5nmaCAA1ig2rHlp3Te2SWDYZSPZcH5kiD6ODVQ7BKs+o8pRAEfAnBf4FWgpL415hlq6W56wWKNWqz7YBdxngJYGcyC0ZL/JMuiwKPzXfaMK2vRY3jq2DY0OyLIqJHSBYPAa+fVJ1hkpJgHM8DUbwUDEyY29i4ACq8SM+baBUZKmMa9XN0LkMV+6+zUaWnKCRYCE3hcs9Pc8OwulN0yPMdBXOIxPJ2HjHikOLdUNJAF0wdPHnEYSVdXh9z1G9+so0Za8lo2PDOU1qvdIxwlXdBQMXHcX+7HH1B7wpfX8wxVKjjMgqzNZhvJ9mOPfa6SMv7nK4K9g6emb4mYp3r9+A==';const _IH='5f8e4b3fca642f2a071585e0c80200009b073022702eb173678506fef9de7334';let _src;

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
