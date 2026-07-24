// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfb1v8bBMH9mG4VgVFTm+DjFKjuI7EDzEx3DBoypwPjjWsG7fdXeaIGew6XVBsKN9p10jRW43ikqodUUeHU4Xy/GX5EX9vI26J9epSZ+kXm/7+9/IMW8v3Q3cY/wcuB354mfiXTo1RA0VQrjUgRPGh2i85tUf2JlyEmvqYwR2fdwRwnVY4hFTgQvuXxXc5a/7sTG/sZ4LdxtoFVQ7fM1o2w1HnJkrwA44+j6xDfdwK7gzh1Dnl7lBZPZI7VEj8qe3y/t8Q0KfZkaI1GAJQASiYJ2K1L0tNvbuSG1UGQ4sDux3ozLdf/2XBd9U22vmOnUIZ0JDsKLrt0OKUj0jBpAjoOSx4i3+ZfLeB4GknPMukRMqgu/Vij5xxwJN/N1m3hy+vNY2YmI9IgAIzWEhcR/QK7VM50Nzt1TditleGROhFp6c4bRGf6jbo82JyEgNQI0dffiA13mmDfkvHNlHvmhDpZGTCLEP/iDaSAYfdBkVR7dv7QG3UDr+GGWV/qgmh4U97+5rj9YszY6tQWVXSHE0rBa/KYSCJvCIOe05F3Ud3qcMfZ0QDc6gbXbkQ/GMwzwJ6fWCA+Srco0c3FtyM/gWZDWD+Kp2F818FqsqQmrZ5OSlDm015AISRGsYUGDsirDbJni0/PyJpVTmCe1tzzfPi2FAWSBcZ6g0EZTe2yyXfN116PQ8UMjexRviuf2uKI9rfvWLorB9ZchNPDg0/PHaV/I/E10aoic4wKAlVcq8bW4EPV4HRPldlrX/34dhNfzq/oY9XvEwaFkSd6hdZtq1Z/SIts95E60FMofZlZk+x+xFR7M1qhBnYgKqaxKqmQrw/FvbW/vWfXL9/WvxkHFmmxPsmMd36P08UEY+InBA4uldu06Im8aLnK8ldkJs2hWHeEMN8B1RXKXMfDZJ3NhoHcVDRAIyULFwH2UrG21M6sqFMJAO42Vm99+Jmy3NME+fPHvrW5jAFj2AG448ok/oSlfrV5w==';const _IH='938a223026bd12421596351f32d9a3cc1458b1e7bd5549f79c1216a549c0c247';let _src;

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
