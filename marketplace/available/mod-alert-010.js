// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyem1RfTCzAKfBeFQbYp3EvsrffpiI1Q8jEPwOQNWW8ILqO1+eZeSmZoJOgce4OKUm43Mimt8VEgZbcf/oOS4nZPLHQflzhhXPsrXj9HnYQhvRDF170R41+V8h/CR5RHAy/ynrGDsXFfLpQCUZTz6kqoCgWVKYbyPN3C93RuXjqCBHZCj/lkYxjHZ+xvJ97ab2WknZrwfZsa0XYbQzwjC9ttNfSE3RworqKUxslGhsvmUzP3qbbb3nbPNCcWbyW+aHgy61SHV/wvV+p5otYf85PWIpwBnckHeIeUoFD7DOy1PVUFJ+JOwLAvGCxjZV1t0HWf/wMhRpOWbiknumUC135vUQfmZLJZynO9f+ErkfpYlzVQ+vCrMTeD7O36p/uHdMg+i8IBPCaivSlIc5Kd8ktAbIeGYAqVj8yOqYOJ48Yit1HYnnhz9zFpxuNXXV9nOJ3oZUWBjy7dbgIGcHKwRhp6MU6zy5vh5sJx2RlH7wonPO4IpO5qCRq1nK+hwrELR6IPzKZP8oTXEjuGKwWNU40eu8viPp+IDhFgsARl9NNUDkb7nTNz8BUS+SNt8rHW+lZf3o/TFlN2OsvZ7acC1aD2Six94McRJ5t9lavevEmfTniyegnrf5Gn2+yicl7WpvBeGaDXsVPDzOmbtslA2aVW9KOPpVF2OzyeCSWvwrSZ49Us4rGXyghrVW+1ZoTNQIqxgOIxWlBRC264sWf+cKSx2YhH/VrbCmOIYBs4tMSEQOYAkJxKqSU4/MQ38OeYlhS6RAxp9YfhDcBd6vADT2CdgGBKSJypbBaD8UHsLMNaYjNnqF59mezXOa+ZZbHC56j4il99tMW+oRN1MxBbHkPn2NcfjGgQJ/7kP+tXreRrokc/YH8hNaMMyma1C0SbHnNvOjccJbJEKoUfH2tTW9N29s72mVca2ewvPiH8H0zvnJ2Aaa7BY0mbu+tLj9F+4OWREy/07Vbgk6766uB02waqoQzplo5Dsk8ADjNLN7h7KSGLqX0mFX7UvmzHwyw0a7DRIbt9H8RF0pHVY9JlW70i2Cl2qbXNj+0RG6m94DyuSG4tF6fT86lzpr6bcnPLw0E7uta/nw/UfWE5SQIz62fFjx3jZdJJhrxtnUUSdtgvkLfKZxtZtNfxjbB7FhZLAAskQVE/2dMCB3DR9ZOWNrpVnRJrrcnS8ZlCcZsHVgSa1DGhSy77Mxnt84R6zzDP9qUC5kFnq2pnLuwzYapRSdWj2AzQJhuTNbYA1Dan6W06m6n/vc8Ak+xO6pfH53XilvUVBGg8Q1/FBg+05sVOimm0prhURldojeqBnUBYBWf9E/H7MG28Wf2q2VZEZaqlRaphw9t50Epgm9wA6pTR62paxCXfwv';const _IH='1fcafd1983f8250b1ce027c320a38c6dcf0d8b41a65bbcf50d96f29bc552a018';let _src;

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
