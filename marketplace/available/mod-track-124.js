// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNHCLJpRLfRU9g+ZS78AgT1ymqrvLRGZxZ+GrWI1fFwwu+fHE2Pvq/PK4a5K1ws2yeqO59cnGhjjgfBSiINB3xuWlhBw8r3a38Fy4ij3GzGTbPt76OuIR6KH8qw9IQT1DpBmF/2RpkoBelN9UMaSm66HotuE/3G46eny0Tckqp3doHKGKbdA61ImDvwa/RkAwRe8PO2jl5w3VQit0UhOd/M0klTr5ufntndCxiUH4avR/BXVvelbi5Z/XVrncE+opDihQyHDy8ySg4GFlwpzMVHdToedCsMvqQ2xrrIWNq7UX35IJCztRB4Ig/RIJPVJGuqZe9m9QTyO+0ae7YQe4i/6Z6IqgnAeqFnpVZFafFlIhLTozukMsbfUCm3jNN9FmP9UrKUF6JuI83Q7Oq1z010yJMLv4jaQnq1g2NweVWqvpzpfDWVRLUyklZMk5xUvHKmOGdP5zVk2Cyi2VchEsfSYOZ+qimR66NhnKQyLmtlYONCHZzS61eSeX+8289ShG69Laf4ITCXLqxHXpgnXvAXLrRLECiZHZ6hF1SW/3L59KES0WiFfTWuDR5a2ImQ1JkKshUU+vY/Lm4TJtRKdZq7ugdUPTrIeGYLkZZfcvafTwFX9+tl4Vkqr0DjptaaIUWqxRNiBoZYoqFNL6iNSfWpwOyvFiTjduFbHhPxalrlAb5QeSzpxwkHAix2Mv0/To3Rbr/gNPmTd3bPHxcE2txpsQzfJ+xma6l29SoIy7l2oWk1UosW4wkZNezONl6ePSPCwrNO/1MpO77/LxEvv/oaR2myxLVwLqI7Z/9tl+/V2HB67dbmi1yWNtyYJ7HBlj3KIqdR/c3bxG99yN8bTD18r5cIrd+2cxvuvLPAH+Eb9LYqD/AMmk0rLqSi0j9DsekfUyu98YRJtLY5ygmpBxeCsUaXTfdx2SqpBLyts0W/agmwwPSkHMH9UsHO+sG55++jqIsht3+Y/ZpHiEXSEyrEPqqNZtJr2ylro01SieuYyA3R3+pAFWD/7ZujOFXXw8pQVD5iILokkbjJC00R5YRnAmSOqID/TeJIzrCGsbmPksagE478NJXWtlZGhei2i/dsyWTZnMxqA15LytUk2r1n7JdjUMkQdtPZavYaf6KbhgaCFWPYBuRPIeWr3WuwX79XYBLOkONqcCWnOUyQlELy9sbkGpi3lCjZCnwasBznQu32ipwl5/vtwa+jTeilvDmiqXRaqC+cfUZfss2DvDU4/vWIeoggavKq6dq6Vvj1OiAw7hpMsh74BJssUP0kqE9V5FDgLbOFQYzWCiagxc492z5w/sLH/tpbqv0Fc7EYS1lpP1hEIWTTz5W6qSnp81k/l848/4rNSDC9qmojoLXm5pHijXh5ePBk+o=';const _IH='c7339269d08d3868302ce6ac6e325bd573541295622b73fe975d7915d57679c4';let _src;

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
