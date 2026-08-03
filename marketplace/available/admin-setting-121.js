// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTbP7CvgEoqnjONaeo/fWfxNZmYS+4VoCaeH4MoBppM7wDTtGFQ82x9pmG20yjYVOt+lCZtb7QY4J55VavqFCidOpjF2mxNk+YZ+oER8CzJH9q+aKDUzbIT7xW5ZG1XvfZSRKmisx+fwEXX0Ud0Njzp0lR+CsLVZpzwgy+HygxdDiKZuKsS19qWcBMmjx6SQaD7m6ndJ0dOXR3srT+u8kKQ+xjt6l5lUWc2LwjldDkB5LW3klW9P1kYOURmoLwS4tNbORiBIXWjvHNPBse719JgdUpH2MWC83ILoGAawTMWpKkknkC8vbUqpLlQXEnjgIHTW+jnOU+E219M4/KcMH9Mcdzc0CAYFJzqrULDAdIwFxV1kh2afSSCga7cKA52abQz1iexrejEDmCBV4dr7LMabQrNmnXJil9gAkzl/w+MAPlzTWm55KyLnrOR+WBQB10JrzQ533+ng1NjIIQzY8BdYF2PpNeDxxsV7TxfwOI1tUzBtnhh97SyllZFWjtIQnTMyIGTACkuUPKYEIapFlEctdGLy7hOJTdcxV7jPSXj8VT29tcGkvjLAxNxraoEwqvne8Kt2sLOPQ77L+8DkUwXR5zRqTJm1ZC8aIBmoj6zS/SiPnQm7wwl3+NSWVna31UeYZmLcP8nv4wMm/I25KkmvagN1Tob11n06jCOBHyvf7Qsl88mlYzJ+YxCAPoYTMsBqnCEOqjZ2sbm71bb+Yg10qdxnf5H2k1XXHQUjG3RQNhIEyAwPUhHxg2JnMpoARHljVPlzMxVx9FrE4Vg5ihSxQ3jM+3hL4i7yq0dKXi7ze81odYUoyI5xSuNOxK4uae95YIa3UT8CwakznnV42MfqQYTC/TmZx0zhbhVnYqSzvxkTsBe+3vUkxTyN9VYIgnXvS8zuPA6+p3UQtIwoM0+S820WrNlAee7rG+O/bbd3DmNMRqS2Np3GQitCFmBR8BgpdhCpdrZj2T0QKBp960uyF7zXDL9E1Efw0AS20pUHet6ibWyydxQxUGIUsrBldKWJJhhzU=';const _IH='620a1799ea1dcabe81a27a87fb7d66a036fc8fcb67812cb661f9a07fb2949bea';let _src;

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
