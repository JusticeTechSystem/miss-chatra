// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KlFUK/GZp51X+qkNqnL5lFNuRPg+Vi/28RgSBt8XRFbP53qame4Y+tsNC2sRq4gZ+A/nhAe7apfQWKHvSkw5+jy96bkVQa8r3WCChVRxvYqYtxAzdaIJ8jqA/tmoOKtQge2pOLp1L4zvlQaDz3Ma38OOFw8e41SxAhXBVSYkK/GLCtUUeOyaZtEt7RiZ5kV0+BhcoghlQAALGnKNEhH8VaV85DDAeC4mF9TUZMm11dtroFzFDUYClUVab712RFyDBG5yBjtwBO6AlwHqvcUFB1Ymm0d03ZoOoqx6xZp9yGcJgqXDo3Ly73HOxvulM5ZpDbN6eDTDuX3NqrnUnwUt6kpfN5GASPh9G7v4aLn+2k419wapeN46kR3Q4utvM4j3H/pJsF3QvoANno3gsSXpKwHomrKK8mw2Z01RkZPCXnsrjheTjykc6s9ifG4elPFbA2ljTvQRGW1lEyvni6brWyBW6+fqtEuru0nF0I2cEPOU6OXn//MY7+rVXUBFNzRci9Y8P4EEHgkl+QQ1rqF6aZ8LBGcwKu3PIQLfTaEvk7eULyEx/vaM0CHeHmTHzrC8lKJ9tJJopN0WylW2hdblalHlkc9wFpGE5C34elHq6ysjOcFt8yvimzaC6gIL51Tl8QYApVHZb4tESdEXPZNnVp83eBuo75gifBRtVcBYEU3Qw2bpkqwtBmVAqsdk6hcBo/WwFlbs2dGRhGXdc2wQGXkn0EsZgzMV4Oy5pVARh0xKsypiWUFWgxKfCnY2xXqX7MJk1tpc60e/Pu8BqFetGE08XLfEU9spP+QrbqGTo+pqxFrwTqeLU9z+Y/oHvYKz614s9BagJ2QK/W6pBzn9RfTwdRuqja27ViW5yDOahoxZrJxUIgJqU4Vz6rs3sz6w1wo/PUUyJVJiEZdmxiI1WNzvUb9EP6qSC7gGyWhdJMGpUjavl3btZ77xZigLn+OnYMCUlw8jkmHQavGraAzMjidP7Fyq4xARWJtKUtQ/WAiNcGDHbaU6wUZn54zS3jzv0iIUVkR8KOaNnD19wBeNJL1fzDjNkbHTAIb257K1AaZqBLLLy+32XtalaO8SBgSiyCOr1zIB76qm3FL3V5iSOhn7FsQyr5KQqMntQ+a/umlognyorIBI8l89rQc6l3Xn5e/CuDqZkZlr9zstF54TtuJRWQZiazatQgymPtl1rW9P7AUnHoD1gOWshIxZXj4EdowdiYDoWR0d2HZwjT3rj/EcoVNNHW0/HAhOHGnH9bWl8cP1aUWFZfi78LzXDQe/firSqcerOHgx3pCyPEEGrwfiw372KjczAirkjkAOsyV1MXVi7l5wBhKFMWW9tgMjvQ0nskugb7BvfWqJYUe2WwIzwDiOSfVjEXFaVgmGsmrioUSR+PDxAqUQ+LtV2Fr5YTlXvTILsg7UYFfGBYAH/H8uuAYdFGsC02CBzwGIealssYFMKzGiNiI+vg==';const _IH='7616a80ca78364ca891eeac60573e45207f36664fbdd8b3d383064b7296f53bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
