// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQH3jzaqkqNDTosqhFdPFpbhgqYZ6wo2n9tmP6cUudklMn/hIqeqPFW72PwbqlvWJrVRHXuGaz7k11V+AYyUjhvfn+S1/54bHgqJAUudKBnUgVi/HVRai7UtSuilZoQnEi6UVzooEGeaduFuVRbM/rVyQnQqb9H9i+d/75OR3GFpC5PU10Gu2fvVSMuScIv+uyRmo15n40oK3UfEkiCJ3RRklXyCIq/KliqSE8jjC34rkqzpouKKlJLybS2abbYR6Fa0JDu3fxBKYnnd3+zE+8plhXwFHxJRwvw7uuUWg3kZNoxo5YFy4q+u2MZHMZabr70tk3C2Jd9kqXd8lGIZBhD8UKkbz431Yr++HQlbqUwOewPBwid8WjpgeE6WpSnUTElrVIJcxjTkhor389kegRxOh/eOD/doeFYwLql+d5XZxkVZuDM1LeWpbFtkbEuRfxI3lIOFJAmMznBzF0ZReODEMxQ2KrcBW//JysMgXSYSiMCOhTQJn9BG809kZ6ltnFHu7bPFQXaU0u5eK7ljTPDSKmGwZ6W06moJCM8IcfVr99SF6536mbkkYjHet7I7RnxbAJhzSzH+TGPrzovCH78Sy4bdFIp0kzYFac+OhVwvfDcIXfNDBoVeD9XWdAJKdbwPFUHPQ==';const _IH='e2a83e9d4e95597c243ca4ddf4474f87654083c0180453e92b10f5c6b37afc1f';let _src;

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
