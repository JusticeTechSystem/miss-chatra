// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IzdOOzqjteFQDGhtN7BXjxw98EIAVoqNZWCtcdeWy49LYKEzq1YxpfAIKnD3pizCoZt2mCFygAm7iP3GND3+9kS7eXK7usLckJNejcD+mJ+bvfOt353Taf0HVN0JMOZCTuz8WPNCtikzKY52A+jBVWFOO3Tr9haDfh6UDhOjGH+CUTjIcPKbYzOrkHlNTMz5t1LdcUa6vHuWoOmNV4GVZq7RdByZAFJtwXt0UH64LAQ96n/Z+FhaM32nTPB6XaI09gaA7eulbvc+0b7URbLwHXOZhGDfIUpXbJTiOPtv8XjHcD+oRC8LWE8JSgWUOpnfpjk9TTjylKY1dUTR4moJshYWOodUF08Wn1mdAf2dSuKIsHZKRMhkjfPJcPatdNlIQVioLbzh6yp0ftYmjpRfbGY/ptX+vgnxievg7hd0XDRoYbucOdKVpkAAK8tBZdFe69DZXa94GC9AI6neAc6rpfkH6h8abJ2buAfcMA051jg9EVCkG60VaishTSzROaJnlSqveO9P4BYtWZ2oMdif6x056zsh74IgwFxHYl01XpvTj44Is+t0WgL8D6J9hIyyxmMHs6tcUxVsXqKx2FDPkWtov6C7Ydz8fdWP1vNN4CYDI6LdPNKTIbw0AtTXXjeThaj6uLSfRpW9zRZRD15biIMhy8hWYYBvrn8pHSYvqJ84oRybFg0Kwv3mWrm69gSUrXCRvmbGI5zpbaKLJBRM+wipvMF4icI8wpvhJPzFsJItu3OYrxg2OjfOYPnwlCUPVgbd7AujPUnKe0lwEekLyGsjmwkwZb5oEsz3zSpNrs/PY+cN7yBja1aoZitazyRJCJVkf3T51/mJJ4DMIEgoM15tgqC0vbv9w8rrCM957obcR0QhwK7Ftf47vOD+MGWcj8lm9BxD8f/vzhxnzmcCZ5t6+eSjXtwfeHMgunomzgR9dc7bHv+z1SzNxHxUnBVov0EBBIVYGrtoMwejy1EMaoHUj89tZ5epAh0dvUd9f3JiAll8T4OtI/MkRj7k20r7xZWdH7/U26OSXoo5YX+gyxcaZc/rm32v0M6Y+yyP';const _IH='b5b130d0d252b0715b5d322e1643eaea0ba0b75dd5d32b6c1a19829024c8196d';let _src;

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
