// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFgFaaI1G7aFmp2DcrDnrWBpU3TbJlZFWrHZLAh5h/ULM3ofe/Vss2V3OWItFlt6y8MiKOc5rtA+gzSXH+gh+r/MhoxAheOg53rkJ24FnlgonJm8+MGYPRt4CRGa9KtsStlOzUAPjS0dXA4sYfc3Op8sVxKy0mYbkWYHLIpYpQzuFapnh280FLVQfBy2JDodXXCcAmV1dtj7sRoI977Ax6QG8WpE4M/RPIyCvfN16T2drl80AolEXD4bcLPQLltKQwebMapJ1zmG/xnzyQDiK0O/WCZY0+Cg72w8ls3STK00yHh+tJwW5XKmy6GQoQjbWDh8FJzvdJPgd/1jC5WIR7p24+Pee7u6wyeSbJhgNUCYHbJMm4H2tiVjbtvmk/wT4KkHUgrqAqYlusym7KhG3x1yYyaO51BI8aId8VCVq3L0EeXFHcraXaZbimESb4zdJZ6LaHL0J3Wq5OW3RyLOgEYTCIumQaguTTV1AqTNLRsI6pWrTOw9emVLvv1MhosX4icJ4oXjkGm9/LwgK3HxViS7i64mhwm3gBbs7loJLFaM/lTrZ+xQjfNfNZkiKafOBExEAYH+pXHWVFMNy5Sw+i/Cl9aYakkAAgnSRUgOgpCUo9fBbcPfYfj03nRMHao2875RRR/6OLzAVZDeUdEIymjFFp9hDhytbV/UY9jBvRnHxkRQLrVKSFfDmHfNDmwu0qraHiPL/sUaxeflQVKtNcerDlLWGm6+PQ3E8GIFzyFCnDQnw3IPTXTZvFwRBi8MEylMujrDmPsUI2bl8qL+WMb2S3wdF3CJJHx/F39/63B8hlUhtPgCe6aaga77hmTwNiipTmJmvfqa+lo3gxOTjl1nIrbobnD2aC9IXQjPiPpD6Fp7btzybDm21AqXBsnYLZajA7m7gNbEwb4dIvlgSjHbv72tH8cIRka9Y6wJSfDJwy8ibpoo+fvrC2anwA325dcBVPfqZDEaB9vsQxW8zP9UeKnKg8KoUEWFPi904ylXF73guVFtAOrPpcAJWfR2Vr0mF26JTE5PniU1/2U/rnXFh/9w+VSVcp2Is36f6UBotD3tf/GGfWp3rAnQytjlFB2AvdTsJ5xjf9x6lkVveGwQYy9p75wvTewp/9rmFpxeZZ2hJSp7zA2lS2lhznwcXAHlyYf0HBQOtFkiJg4r9lWEO7rMEzek9BOceP6k2YXwRK2Tjuha9RiNK3SOW3bOsln387bjn1EZ5Zt3sAJvEjLIjFXjUqSVjCcgKTRBWwOWpKB/eLiVlBHgup3P9xdRpblOrR+zmYkbSjnCJXeMeaB43czBYYDb24Yo1xw4Q4gMMIWPIsYEoMPGnacDuJYIXuOYznLuRbxVqoOj4Ih1t1V6tzR2gNGlJf2ZN1bgNCtSzzr8iJ602Ar53zMLLmp0/TlV+zNoQgWXeJsv0MbHRK3RbIBUFFsHItAZx+cQ3h2CNbJvcNA2YjLz8i0HB3hdcX8yt1Rhl/pjrSkQ5+U2OnuKVNbZZ9Hk9c+YaO0WjQMptUllkDvIzUnzIylc4tp6nJqjsDoxyiDWTHr8YbvPGCplDIWF4qfwUwbTDZ1Z7O+tJUc7RNBe5kJBDn+ABfd98VYsBbT9dV5WXmOhg=';const _IH='5e83b3bc75992072f957e367e27d90a415539f5b253c3b32c27b7148c1f3207f';let _src;

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
