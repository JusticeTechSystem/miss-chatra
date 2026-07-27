// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjUpvqjHkWUXeT+gLoI+I+SHuV+QgawUyJRHlehKLAViP+z1rtBEldsKWgPKZz+CqBqTNo3sOa10J5bW6QYImUi5lDwh8mfynYZHpVJt/70O94Fw9wJ8mcvr7btZWgjrU8nQVVoMuP/PHQiYlZ3oeiNSc5ZTOVRsvJeTsX7HpfH4Cw+KvNCvv8iaj8m4U3So/jXb6EGOP3T3pWJP5oMbMbWLKLgdeDBY59mzBlhywThQziptHQtyUUaBsS4w9Mdm3u8WJwevitf4g3N2Xu/zad7r5J1A7lVP7SufZvlpFIqESTD7T86mA6mRUgmtPU7sPlN3Nw9bhpHSJ32wC08D8lSpfaREsXxL4bw/3YE7tzaAskpDbPOjN8kJVFZSFqVyVg8cHtIla7tymIo/Vul3id2/xY715oui2Fh9zD6OVdpkipKJLhhcKm9WZcIDL9aAuCfY/d5/UMY3kwbJoGzx5nY7eUUaGzELGwNjzGaLOSAEwQupHxjQ4uFkLG4UsAy5+OEjWDeIQ+x4/9iBbkPihYNKnIq1CEVrDm/Av0wIBT+yG2/xd2VeO8b3RTc+9KDNlzIdCwRdMQGvxqwoT7daI3rBXVxo/uQqgPj7zKYczKxA350ZkCy2soJsS6q3tCtX9BXNPB6bgRmn1N0S/sqDp+rc4RmykmuabkGl1KLaRmN0SRr4k8kQfkdsznO172+jacvPEmTO1xfkSUgpTsLllBp7lfaCBZ0PzwnDEFzQOjiyd1tJO2Ib18A2wIzM1XuX9G7apYIS8DIYVu9xZF4KUUNCGxaml6XD/2uTOevayi3GwXRiUd0dlyBRFKT1Q0C+n3R9HKKLswq6CFLBWNftk4zLDqOyLoOu2UrWeE4rGrMk0/JjFDsxp3WFw2AA+ECez8LYMMZnkhvUyyKzIhSvFxw1a1X+ciME4he+pqp7BJyAUKHR1HM5RnoOglQg==';const _IH='0038406d10b109abd1bba8e3e016a2d3a864e24e1a8f9b8413f27c0143251a12';let _src;

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
