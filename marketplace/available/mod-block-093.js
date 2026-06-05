// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JTup639pr7FhVxJN8b9Dh+OQP9Rp5S8LiF6A2IgVA/cl4h56LvexJSFXuZnmCysIuuidtWlpsl2zfwMgPzBtkEGtwE0BQhQaxiCeYul55aX/BIJv/csoZzwGc3I/fj/UqydTEJbOtitCuOfdu5KWDqhGZRH6qsoh5n1QpB3K5viAhhadczt0M55PwjIGcY0bIZfW0tjhiwF1Io+58nbgqxRYpHqQGffoYC2sYnYd/VqlrDvY7HKGGc+g34510Y8aHBpJQ9OhT5p32JuZd7SFMSbqkhE6DdKxx3XZkbye9mS8hkPug1ClAt4V6Rm9gV/vL7OLWQYhUH+TWaLP2syC9cfH1SIh67BYXb3WllwB+Q8hxXpiF5WRWWkKe08dsdmwYAS6eXsCXxp8EM2ouTHNNyQ61cg/MTwm6ez8NkjA3FPFD6uS9t2uCevfNfr2Gy4swrvTbn0MYhuiDQPmoCbseLYlGDQ9+ayBdHEofM/2GQeJ/7+jNsxhgJ2yGGQGGp+5Pc/kXiIPaD+DV8zq0O1lyf+v6C+bEqERnsrrWsgxdC95aZI1pAfYTX0ua70ufks5Qi/yfJwd8kZB87GwZMerGb8YVy/vhpUFatOUho/mUuqJSGu9AmHWLZgBCrTv7NfZAh6zCOLbq3Jd1vOFixdTDbakKImqzGAA4XFHlPqptZg+og1w05E25mqdYlizIx3BxNWA3tIeCe2dY6+MkSLxXBbvU87hWho5lVeqG46TS/4yNDXB/Sa6d9b1/R1/vO9ca6b5ku2P0pGQgc8gwVRN5GOO24bYepjuCNvV2A/X0hHQYAZRwFMKlRp4skhHNV8LJurUlhYOFyHI+LSYPvCuKxzzg3rYWEFP/bBXJXKL+xVGK0vrmgQqXpxTL/klBlZOPaL1PwlRosJf6bBd3sVdNOLbO/ZKjvdJ3G80WWKUO53rzAgiZ8cGkC7C3DNBeLamon8K72F3tH3Lr3JJcL5qLQ5lsQHJ8Rlgiu8sfFE/+HpCQ69j8pVfELO2DqVENUBWKyjneSXSb6w5PLWeEudLbTWNsVOVUjeg1dJduKE/XLImGdnqD3nDhp3PWIwaZDTh3umOv0CdjeDUb+iogVRYMch10DzRquL4R/7mfWuu9/gtXGE25XvdvTWmuAVP3uhm1N7ezIssXbqH7DhyMlCYBNSIQxIsx1r0dfj75LMp0dH8wGq67hJQzfxaxgCDoi7EkupvtrxmgyW5rHoy0TwoBAqzngryeOGq4WyLcPHj6od6rvdhBtECILmXU03y04LCmiooMiP/dPU09V0yhuvDUpW/KbpfyGF/TewNAp43juC+3rlzmV2a1B0m+Y4t8gal7kWBpetuTGvMbAn0Y2rPb/ODuPEKXozu0w==';const _IH='06cecbe45f33adc83e18117ddaf17334a6f77a3da30fcee3318435724e09ed32';let _src;

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
