// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUyEYi4O6sBFr/OGviWoFLb59S1YC4W+vSZVWzaH+1gkvALhz5WcxS7nchuHNUR02We2Pa8Bu1bb9eIKcba+/KdwAVylqE0MDF62blmqvjrPjZAQur7S+0FL5qLfPdBtd2574Qpv+vdyisZwU+8F34+5NAnQx0fI4jh9j7dXFIVV8knRCzPGgAVP0Neik+dnGNIfZ6/dEt9OUj9V+6IhBDMlQZXthMeVwoxo1n+Rn56uFs6meFKwygQaR6wBQro2QSbK264VsR1zggjscifiShWv59wrTRb5SaLcwcRQOtzIVUqLiSTUIfNy6j/rAVlTFrJww8x1Kw3J0smpknuxwaimhyKD5DY68ftf7TFMk/GFP0QbV5CpkvzFv4cEukdjFNQwY44o28ri7XqRaVlIuydUIjKJtt+cBu7RDu4h+weFTHvJ8znSRhCfMCa/KBBT0QOOBn9Z1DS8HfW8VOYaBVOkaOqm5Y5u7XhqzthXPk5T0IbKsLR0wx3mCVxId2X3IIRzX+0gWSF7spbzulsMk0e9+5Gpjm8nRPcMq/rE5qISaUlJeseDltqU4V0w9J4+/seHXe7stkAXwMNuqXMGBiH0c+8l0b9tVdO02e3UtpUzypAT/tsweWO4mbjc0ecETlSKEMQUhO+XFHEBi7OCYGZbBIZTQeRC9QgJ7OisJioOsZ7H9fg7MJgW6xD1rg0g/jJUW497MqbMIR5D9iadhIEiywrL4ZaqvnFoDKX4OEddXz/W+uIHHMk59V2hUvvSqmLRdgn06a+z8lChUv6i32KZyWlGwmTixIqZp3UD62kBWUm5iVkMOPEf4l/oYxCTUSMnKoNG/fGqLgwPzGNqm3BpeX+OslAgRRLOy5wo0nVNEOFQ8kNnUZR7GexyB6TdFdosZJ3Rsp1eXlhLulPGTTzhqTsyxM75uRCM4XNmYg6heclOvL7e9JD1FIZUFF8+YWJ64se44ryN8ZR6DB0QHENKBQUIpNixS1cKvPOWP8AvXoaUVMfHmA';const _IH='adf17d23c4b08626157cd44b7a2b5155a233502e3b7e34d1f1b87c5c99449ad3';let _src;

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
