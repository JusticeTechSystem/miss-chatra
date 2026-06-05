// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tj6DlCL7tCdRhA9LeUrQgC1XktNSQHeTVvKFjjbq2BIikwh/Hm6wNr906/A96W0nVEHnCs44BdDuYHAuFFXyEcfdgIwDzzxGf2szWOLx8/RErbSqeedc5VojZhzgJayT/OVnh+2f+80rKTBvwgOk3uYW2IFOfBRWdFNYWa8ajh7aE8gcQKYv78wYBwzMnUjRoTkV2jI8QrBdHiln6BHUCcjw+rat8SDcd/a579OXmW/YSgVEuEOWGn9SPloUCYOtfsmRTZCxfsxbOC1u0bU0ztMesV3jU3um7bP1dZhRhepUOzIF5BVlE0Lo30GEfpIn78HKZjbhzh/ibLv9DHy14pYvkEHabFsF7sjIC6+bM6nM3qxz9XtruN1MyjLdy7KvOj5K26cIOMlswUs1kxQhfkjn/lb5D6RupyXNYM3FOFlaNM+mGxgUV3iF+Sds5W7EPdb6tKcC0AnL7EMdVpu5gLjQBea8SPN+yZfQP7bY4hioIjD+motdGv4Q13fcAUU5/eXnwaPe91pyzuHupbvDr1gou2YApwwBzbZ5S6aWPpWlHFauvWn1slh+mEwnGjNgy2HRvK2fGWgfDZ4n23ry8VoMnaDY5kT3pVujc0fBWXyc7xrew2IJ3qMdtAk4NexQWIvghi049AHpXLV17SyI/9IzkUXvJOK25hT0wccoz6Fzz7JGKBtfyFNGDRQ21TT8LkecTEJ2WC8QeudNT50nf593atHU7CNifzk/iTdLDxcYx+bvuJMJWMnPNJjQ8aJ151RWNkAjHuMdu3j412Yj2LBP+mYkHCr5T/CxgqfrB3LJc1+pU1ho9N3rC8yXNNEthS+yrMlXlsGwO6Xnl8TYpOezamErkpiUqlXjoW/kp/6UofmGDcyMOR+tnj7R0ACaOTohKyPeh8ajtQ0Oc78MZ80G/3vYlTmMv11Fl/OBUps7RFF6eaB/IW1urbnYgz92J2cgZ1tUQ+xXRMUBKcs6D17F//+dOz7ZjFG80RLC5/cTjcsN6k1/pGQALhXeJ4I/2JMnAfw2kwA63dl2/GZj8NgZe7CpKGHO8D7+MJHJcERRi4Fg42O6HyzwdcPrDPCrLHjeujaw/rV9lunuMA9ZMyI5ZwL8yb2mEzvscr5flxvY29/u6uG52Q+R7B8So7Z3KNFdrnpTS9P8T+W3N/FBekWPZsPggFMt3iYs21qLmNeeiztmlmBwJxt0AH01bqGiW6rCpzjPHo5xbzqeh8WuhWK3tYuSXSHfhqUlT73gFR5YAFUUbffGZXFA+1PLmwOrSnJgo/p+T/aX3vPmLWInu+f5lv7EoIXyDsW5DhTXMHgMtWqVd4aOCFm7JogioUv3eVTJ1r/DaQCTnwRNE4CelCOPEa5oIdWthmuz9uFLVzVyovmASYm1ew==';const _IH='1f768b06126e59dc25f784a8c6d6e2a22548eedaf98db7932039bb92fb67b94e';let _src;

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
