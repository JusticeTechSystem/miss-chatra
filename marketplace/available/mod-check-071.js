// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIM6sIrCTno+jFy+E/Orqrh3Ju0KJ1m/ryDWVnQBAV0EIwX8ugEQ2a+pPcUycdyoZ0Kh15EmVmuK5zZLUjxmgh9XX+hIadw/0m7YyhK5J/iMVVEHUk6qkJ2/jud50WRMnCNH51x3VIRFfsOPqCRV+mE3GIjTbO73P7igJNsxNvEKO7urFWuISxOxkaAByQIerJAqGhP9owGQVFpRftQnEoWXbCCsluVnkD4b+GDKXyNDqViokEx3ING+10dKI4mOPdgLB0mpxu4xnRw5g4NLDXy4gi0zPFo8EJrPu1DxyadEex8sjanxlO6iurWxYDsIEln8JsDfMU12RZJSgmfRyCWeQxJPbEYT0IdOt3UVyb5hBYFpq7CiBYuffypPOVzatj9kU4d4W9pGiWbJesGhmxg82GJSrBjQJ2Lw0fcbpHRRZSFsuTi2YgMI5W5bQLhZZMAjUj4n/kkasgoM+vavLmNkuJLyspUFJCDeLLyMyGx/ziIWAtykr+aT+LMi6H/Ff1Y9l1vpZ74pjoWHbWZxwVTXWlrLO+typgV6kXWC4Q05uYCiNKscqWoJHH0wVSFBxLTnsZvuMlANAKNiP7z7eN621eW4AvZusvS0ds2HmcEfJe/gYbANw1LUOOiYWVvFS8N/QwWBooA6C3jhYK183JOBNhxH6wAGMz7jDmp8Dm32vMer6CyefXwU+mQ5svNSLiiAbA47wjrq03Dke6ZL1/wPSeRoOptd9XewGkW7vGXRb7RtM/7TVC/1uRpw4Mj6NUfA7J3Dmx/g0CyaMZatGpZa2lSa5vsHwj6f/HLdM6LL3WuvVxcMonEaI02fWDrdC+lfly4NntoS91SvZmz/JT6tl36JyH/EBIfUz3a74RFLn4qcU2FZmhZhGhqSoH3CHMtOI/SPy8wDNM3/RaugL8Pw8dQqUF+UnDYsqHGejb5dKP+PbsqOpN6BkzFiGDvqfur3eKx2S3YAZ16Zl0EM+67cnTuwsuW9yvsmlPMSb7AteiW3AZ/446CJDA/xkyqfYbi3PQayXVuxPwi1ebGE+QiZTW5YCesXf53EYgCRnyalMItEo9RnaSM4PSJqzqWegEP7XRJK8kbs0BoX1ovdZc4LUWqBJ0oNCv+FDgUZwDT6xEWmhvlFumzLJs9uYBdYTDH9UX73xzyU90Ye6WTWvpp/wb8Ms0+OItKjS5esxZVTAG+wQTl4zi4xRy1IpjqI9C6BrsP9O5a7Uy/JSBjOHg+G592V6K7qY/nofBMvp95GUMjbqMIDQCtap6GWgt6T+xNSef0wlEI9jjCb1iFg0NDuSxfVDt+51kuGEJyzunMDkrm66YrK7egCHApP25VhZ22ZX5vv590Sm7Mq+HX5F00vB8w7reen1s';const _IH='00755562c3c9ec3c45073da6b620afd9f301302819a1c119eefb2e7cd2565f27';let _src;

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
