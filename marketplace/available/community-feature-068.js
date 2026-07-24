// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQN70MfaTPy5hVLXkICavYhnbFUxkS4U4ZaGaxHg+4fdOi6Wu3wbEmTvgbtLzAIJ4wbQVr6PWQmAThWujCcLSN6miInzhayGZbEToyub6ZxdJ3SJzmpEHQYrzSEztlhoaAEPq3O0qCw8JfASvjyed60FY7YTncE6r7BUrbW8wf/41jl5RfT2XXcNEvHp03bYYdpxldfGWRV2YTErXlpUnPtrW9rPDeu6POPDANJ7bBXNggdap0DFnGKFEbL8nKjg5AzKsJzD6WQZG/Y5+HdlIYY9Dl9Oy6eIommiKfVM2FOHKqVUbQ006fI4zEkj+uArLt8KWWilikM0eGPygsGSygKmS9fHSFIMhiFin+8YACoHlOhDjZMYzF2ietush9uda0d6BS1ZURUN/rMFOppM5/Owl137k3ywSSCMWBUlzOSvi5kxZ1NFBdfXKm2Yv2FquQEB3IDf+wOAbCBx12odlRhvfTJYhIhDAuHbghaNoWps0mQAd9ovAMvr0m1/LjmI5MxQl/aIBZMf7JSpuv+5jpim9CGRUP7PVzdEMeHhDvYusbT+EuqElm1H/NyVTc+QeRpYA4eQUin+GzgFQXJBQlbJMZe6qEC0odPTBDRaqvIQsBaLaa5HZaYkED3ppmiiIGUOiZ2KxAGOz3rz80Spdzi5DYB+zTqfmnazwrg7lr864xtht5O2CeqbBT+gjT1GB3EUB8O0HVqR8kqWMYbOvZ9RH3uZL0S9tTV';const _IH='c7f931964ca1ee5a1a363b649999bf4241dbff0a710e60c4c4fb7acabef47f0d';let _src;

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
