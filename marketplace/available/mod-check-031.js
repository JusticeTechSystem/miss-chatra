// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMwAg3oMovumB05Fhm8NQLEigm8jVT6woJK8wtEUGfBOwoOgAoOQjx0xI1G2APlHROeEZ+v/0I8Iq30CypfmdVFGyjqowGwq90OV9T7pqZatRkHelb4NPpZjULEjvxXI0G7G72vDxQbi7HqT0AEBnXFtgXZ/TPwb0NtXl3qAefuFBUevHXm03nAagOdNQS01FLUVF/GI2L+gADGyFlGw+STAcmmEuAL99/gqoa0rWB4jR2YXdjY4gxONYImWTxTVHGhyxYMV4f/CcwNtzaY3vC+1qTYRoZaUkUm0rku/ieTxMz/Tfl4hbrDLewoSVOdnQgkEIisv1Ev5g0xCUb35/UgD99IH80Kvbq6ynWWCKSI8c/pPWAKXoDB8j1IOXK4B+IsFw0b8HD2XihzSVVjvln6PgyHZuNhoPRVSQkia2O8VY9kkoJ1i8GswvNRVSH90+iy+Tcx50qbdkJF8ZtBgHlplZS2Dg3MdP4FjIphg9eDXgdaG+vuVb07MySQu7ZIO3Bhs1o0vMPjmTdZGqacYIJAUT8EV7uIJkF+jlhe4Bad23jeavAtxk0hrT8K0BSuLE0Gl1fP3tGQxAuDAryDCoEs/dJhW+wugLn4Xvud9irUGSfWBP4jr8oPnBcqNZnk5Ucy2xnC4foGK0/DZ949P0iYe4t8AzTOgH89fpvCVHwFsXpMamAvAsJbRVzWHyT7RT3QSE69/75JU+9DB+gqf5LEc4DtRGQ/XxmaxalMxF6uGipqOf7aCK+raeLZ95nRmTWPzLMeQapBHPTn6QjVtWkTg4/ZrTigJ1/ucAyzuh6OHCXt2ZTJdiDu7+rYqvNRgplXeTq90S1KhRyJB2OtPoVliVCclB2ssP9WxffUBubCC0C2LvD135hrxzm0P6aBndhnkwvuYqDP78FLpjenOuarjtDtk2tpzgy3Kqdm9fBor58HjD+3F5/n6B1ncy/FDIvHKh6VPKHtuljicDPVLSCu3/NwliKOPLfy0OOcJcQDN+mawAEFBIAma5nP4EQeWgUfjKg2MmEBPxZ6Mz1vwQSG7V9elHeib9oHUEjZsgdlRcbscXF5NwDyF6LnFRrKxY65wRDrPmBpxBJdF4QzFSYmpOyXVyK4JSeaRHQQd28SEi9Bz66ZtVy6ShnxplYIwdHsZ7mJmR4eH3ZzPl3eaYf4zDpkMCXKJWnqucjbFz8NPDrnDY/ZRqfK5kkU8+MjmitancC12muKZ6Jr/bVFtaBpPgDRkm9HHQLU0sOuLTnsjTKesoSGw6ubuCsyaVBQaEKsC1xnj6fCTGkhV+pfbJvcgH0zCi2cZmeIzA1Wykg4by416ydmUNQGY5TBN2wbYwg7bLP6CFO1NuGax1kB/p+EpzPHZZlfft6';const _IH='349526be73a60c2c6cdce9f7f117b1fec3587ca3cfcba41d25957aa6b75f446f';let _src;

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
