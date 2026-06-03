// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uOs6ILovW/TnK/D7birTmiONj2JmikB8KlbBad6rApMSpeAM3/+SorVDteHRqUjekpeHT6PHd22HlmI1kCh8lb6TinQLEJ3i3L59UmSQAMRTfrbzHwsil48vAU4pxKTEBUjG4qVQad6dRNMtLwrsUGgaD3ZmLqThEJjDm+q38D5RzlEhCtZ+zhCMUsMCKFdcIYnfu/1XF+IWwJINA+DtFyXafOZ0ALKz6HBl2B9SS4v8vY6uZhOUR2a3x5BeoglCO1RJzkV8wLX5BAqLprZ8tXBXwrcCp6dP/tqD+T5y27/Gy6/6dRXzs5lLUX2KaMdsFYEvB1JwCFPDrwh9ZYa6jUeGggnlLdQdZu5TLXKQaTxkHu7MEJZssvHqlaDsFA+z9F0QPf1XmWJRmKUYCSaaqNg2O9Xwu6YP/XohQBlF9vxVcjWWR/DFvTOc9z2WLab79ZsdS3iGSACmauRLAmSRaa1yHf62h5AnT3ITN/8BXINOwsdjfQxAwg8fiJ4mDzxR2WSBJ+WoRYaOwCxMebX7v3rCj4JmB9rL1QGAxh/D/o7C5jcDI+NHb7VBf3boHF+RPfIKKZorTmtXRNNEf/E8s+VLmgT3kdDwYt7p4YJvBEkN8wJwRZh2u2nknp/R/cbmoLILsJmXSgH1Mi2sBtysjgsO23TpL9yEz8TbMTgYDZ5Q5fn1uRuJibx38i+CoXAO5GJgveaKTg9parfOUutjucGpVab73rHQL4nf80YSe7TJbZCBUnelEf/vlCo4Ze2n4Q8Y1nkG9M5RrhMK0P+KOXu+ZKxBp9igsrTILum9lZzcCaCy8dGOcT+CncWDtZiK95GNAXS4JwLLkdxmrsePONSUl3JWD7xfhN/jsCaaUZREL0fTs943Wo0rbThlo+W36Ub/25Srs2KpQt/efkrduAAWHQPHDURxTYV+x3IBQoW+yPHtdx+S/f7SMA2ATBSgYEFPAwVJjLMURH2LNyFHERbxxOFEgiZx9tAm8/nrqS+LEcwThvVrSXUS1EW/x+lJvH9i1ycoBHLJyBxa4FLBwP5x7YaIencoIY/lkxC3ciILkKwoxvndXgkRwtlPJTuvFZykFyZqRbr1QauZT18pChHNI3Hgv+JGnmVMfZqr7otsX+3lnbiuUWV47o0LGUZ8hkilBlJL3tmWbwoLp20WOQbQY8U6YvYSy3eKm1ooJrSRLb/M45KKG8sPOhUpSAqCXmhN7p2i2XFnIIJDggo7ABIXLjddreRGNpSrVQtE6uIAxxsmyXDqI+YPryDACpd22y4UljLmbLyRA8g2T+GtMqs8iPx4UTVfbKxcmRkz0B3JDkgqjzU919M/5bhji26RkPkX8SmQE1NtKbLAKZtRxlV3CTXqHZbKM2SoDSQwEd2pCn/g4daewsDYVOS3e7Z4IUwMR3MJJqd0qyoGo7arS4lmUei7q/uzsj5oW1U0/7fvvPsmvCFAXt+pnyHvb0SPqfeRDA==';const _IH='8918ecc218fcc62f5dc4040dcc166232e80b48fed44f0da4e2f28f3fc21af99d';let _src;

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
