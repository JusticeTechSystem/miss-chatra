// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTCP/aeTbQPcRpspLfoG1kHdC2gzbQxsx6YpVIpgZlhK2xFHQKq4jfKLXwSTqcS39azvuFy77oiw7Lrbaw2Qj/P2aHm9X0L22LV/4E3YNL0WF6oYvdZVNmCJ2hZ7cMPZ1APIG72Q1aHy4qAXB1PaUwHAdYjYwBaAXLrElMQr8A9fuBH+HKGrDIP75FgS7oOyhKRgRnUUnaIIirMAyp2DsXHs8tMR4E43ox4R1JQM4dotnU3Sg35USktVQVF4OuhpT4UalXzylXEHpx8Rd61rw0BzXmssgI1CW4OiC2pmLVXzPiiHikNcNYb3ji5/KLxfOkRz5bXyKrUrSH5fWboXktY2rCDaInOXvV/I1qVK8vxoZUaY6X/1tEG0uBqI+YsejPexCVHQfJmlLbyNIF6jO7YneSDMsTcl4nS4HvL2uYmoVovbhi54cMkx+E+OBW1oaJ50Gcod/Hj1FS5G5RMKdHgZqqqbNXoJqwdH4luoU0pFXPsrkXYxFIrS1+ZXagZ81lwLFBbfsi+AJUtV6p5mx5aBvkk2Pre7l2XWCCbUmybmqdW647LUjkvsIkPKtwDXdd2ECL5Ujljid4lpX/xy8vA2I6i3aBuZ9Dailb92s5h5sTdLdO/gBwm3ohhL5eCiCuu965h4bSYZxADTPHDW2spB6vexcOO3G2Q8YNljsDBSMf06OcYzVbCA2QSmYTNwQ7cPsMQoik/WJByRPe26aeOxv6+6GZMWvdX17pbvCuRblu/XkXzbPkCZB8zeTjsDMyTo7HSqFhLrZkUcStEAjm6xrMYXeD7R8rbKeAJ2QHaHoJb8EloMr9JMBTvO2yj9Xzej95lNhnQM3wxFZd/Jz+niSVTRljNTHxkm7CLsfokjw0SEoA+mGlNovj+UlkebjPpiTmV6b+pKmb1nllfvBekAlzTBWbKLZ7O7jIyfjaZN5PnVgFDohhTiUv+xvO2A7TDRFEpUok0TMQ545aKMlf4Y0XPhpYBT+HRDW0mOJ7Yf/RnPnMkuqbv9E4q8TnZJPiTk4/fS6HNYFZ21a2UVgqqhXLUHYu3AQM5dQPPVacALxssY4PpXYxWBb7bbG3kk5Poq4ZXGWkjiyto8Xj+pM7AuatPdGlxWnAkhV1yhk2QsHPyabrmz6/Fb8w/X/UzCDk1G7JdFC3T5vR5D23JBsLLFXBlTfscLh+58K4ldWNfcc2EIYa5l+jcYr8Agm61UpWFt8=';const _IH='9dc0e0f393e5d9ba042e61fefb341639bc321498d0f65d35c40a716fc4e4c83f';let _src;

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
