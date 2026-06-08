// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XauurKPcl1Guwho8fRAAA14X7r1Z12dscAtNPkGG+eeH/nVMKzTLIaAagMWzhd8gu5fHMSM+M+H58GOtdcgms1mDgydBf3DTA0v/lWC6Uz8DVeLstFUDqwlgpjI9794BZSj/jbELDpaH5N+59L+XGm0CBQJwWL5B3Gvk1BnPfejDCnYPMFlnDnemYK5nh9lg0FNqJQ0raFvu6jYNfhTcav3JiB7vHgpnaZXgrCIUafzsU9JzVxoq6nfdams50uBvnXLXtAyE3CwICK88i1a0BdyUTeOD5yLm+CC9z6CZz2zIkC4puEp13OOb9uHgbq+cAQEB3jlzNQwGR8+ViAPy6mtllsKzfKdbHjfLys5OztISh7Vg25pUw0QeiUAT0Ca3vEboV/UbX4rab3XOOmnGdbg5MWOv2fFY0v1CDg6HQXQDyM94Rd6sN/26cKomM6Rl4NymsFJytioYhcyh/OTh3PhOUL3O1WlDtpypVlbnYUy/kDcjmYHkVCK5+p//BiPoBmRpodRXGFOwr9GtOFNkExCjZmVi07oQrmUKH4NXTHyz7ejwl5zVXnH3HdQ77PPyBOEcyoypVtbjiMyQbnWuZfkEvD2/fJvjNIDKwB8kvOCbep3BdkWEPCz+iYIbYIT0hlouTaAchsGcZqcIrOIhTktGVpJ0CaXdD3ngP6k63V3PmwlYEnQqe3AgSSjuQvTZ1XDJbJo16/4FXxV3fCw4e6S8QYH0mPK1Rgar9x4nhyu4vnfFXMX/gAgXE5jvEpnvS2m3uMr8n42ZaQ9IrR47WRTtgC5bOxpt70W4gAAE0KjOSWFvaB3hU0OffbKb9QXIRwnrcLgp2xN5rG4JJJOLsTjeZZwpSNdYKxwCkddpYMCCIV3JOiSMua7HKJlPkSXtCwdH2NFbjvOrB6NlmzppExgAE00k0wtxjdg9RuuGl0Lxgbyq/AWp2gfVG9SeHmsUViI5NmV5yU3b9ZUCc8riABDwSLWZs7GsS0MWfV3+2UTqnA1JAe0RF1gWJUc+nbBwCbfVnIMSc912A1xja1GsUnuvt40w3AQoO9Cud1P3mgpdymjvPWo2m+367OrgS3Q5XXtf/eimHQxP9co5VkNXb5fF0UfZGTXB3zQSixr62jl02/fiXNts7rL0aey9rPqib4Tzd8pOPIh8lCq0UjbiYWc/n8lE0iLGedfd28IyRDmQrFfriVkSBwBmVneptWvBhpB60bn1mm9yWInyP6KEfR+W2uk2zJOLD2lRnx5Y8Etnyo5Bdufq79NSJZBCB0doEWqTrAxdD9whaxqm5G11RhlPMGGZGeTNKqzryawQefdXvkkVCdm2VK62x9GqSF4NZlirpeYEs4o/b7WET9VgCYQu2pqLs1nclse1C9ADi9fSDiQ=';const _IH='b6ece6ab645809737951b951b98de03e94807081741547d0eb1beb180b0d95fe';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
