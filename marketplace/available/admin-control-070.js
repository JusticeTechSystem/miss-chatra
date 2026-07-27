// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRr8thtJhuS3p3aDhaK1L8I0Ob7PW/cpAgC12FZSFRPRFT6lnpkTuoF3xIsgqSb3o7uboDUkpRJgAaan35xXjQspoFfc48GXKc+DJAQgTFKmMSOYiLXOWg1VygR7Kb1GHGk14d0RDjqqt7YNa0MRm6Z6VXpW9mpRhuVUZyag8CQr+lY9cJkB9DD8hlrTK5n3s4uAmsSKDvWWEgOYsuQ0Zb0NXodQOsVnDE5aomVuqZO/IFX/GbEg9e8fKt3v4x+U60qhQ2oJrChwFA6H01oQ6R3RWGAjUQKTt61K3KHNhssFWI0yHtDnpLe0GwcXbcZVoP2BoVWT4WBKIkS+Tl6BvdnZ7ajRRGz0LiTrPt3uXfeMcAACSlpm9t2o0UCNEHIiVWFZP7pyExfgkAGa1+yVFRVVrBwpm3xj2HEUdl2PzJO/8V46RSYH+hfKhy3xzqczncEQjpMz/N/37Yl1nOS8eTCO17PI8OirAnvmUM4x3j2yo27NuCDqZhnOR0JYtjNGyLLSFqZVb1/YW3qmRV5oWq9JKf7g08i/rTZAEJ5ocgqN23DKJ4xdEFLfxpBjcnrgbOzlMx/xJGul2V57vW4iKPlANqr+0OCr66uAFiq/GnAka23ieJ4/faDKTHPeNbFm3aDABEV1xSbnCuHHcz4Miq52Z3a4/AHeJVr9Er9uAzbvzaES5U5tseXfyEjg1atA3EUmHEv8BexPqH741dcPYCxwfnsWTH57ykL/VWQeTsEpVYwjq/sHfbwq/q2+OmXyK800f2agqgNGnwgRfLKAPglCvLmsgyMxo6y932HFW2VaYcYc+ZQMH45O9V3k9b4duD7OKfZdCJHVeAKB8GqD0nRVYcChFNHja1Y1ReA448MZ0+xauLCkl+O1lMLU7axmavRlfaSQWdLB7BFRbAuK9rA60xf7yIuymaWDHRiJKeYFEBZDVBoK0rAdlEDjUEWDGeVG4FWr31AUFjZDEddK+oWL+6SJt2D8Z+R6i90n3+bfMsYM31l1pREryR0mxP99ftOFjV5';const _IH='eb60ade0947fe1172874f8793e8fef428f6b016d9d0e9461b06c0fa2d180bed5';let _src;

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
