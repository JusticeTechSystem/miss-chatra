// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xio4CzzBkPYPfcj0OjvNf7GprAsC7Zn9L8e+GXrFAVMon4uqRLGojqz/KLDmBEoasUpgjJlUy9UT5KSSKJ9il5LAZQmNnnEw5nLv/pncxiF0HmSzcaB/mobasy2GzQexYztuhBy3w0Gcw6SlKr6NaJZHGcU912jSDhPYNe1EmIq0GRid7env/WUFvjem5llqEEdq4d1yMzMrwfD5G3pFrG55k8qDw1+HsG5U4O2df5oyMurUqqmksmdDkXDX+E7HBD4Mk0ImsZn2GajUCRvThj21h6tVFqsa74GRC44S940z/8ifg1kK8CkSwWDX/86MXv1cjLhrrmQUFQL9QZuZlX2O1wUB5yXpPH205OG2qJOiP9L0f693jgdvGkCeOOufezWX6SyfAnKJL8iTIao8jVAtLHqh6NJPUGf0O4ehKpYrFjGVNB4F/It9ZBjSdUzcH804qv+c7O6/NQnQmPzHvWt++mrN2y4HsnJaf11Lf1fTWXx5GxyDcu7cSUjjdxyoGTMzwPJAykoTrrJrLOBA2OiwuvVB2qhthxYZoqDaaClpPKIwAZ/KbxJKvcYG2T64hsSu/iPHF2o+d07pMvjxoaFAtrKW8ClfyoTygzaSEScLKHPxKfGz7zio4dlSWgygc+QsBjuLd54NWmugOn+dgid0lAwb881uLuy7ZbfwyoRc9JSPe9QJIp9HOrUsjNHgTbQ9Jd5UPAmEkzqhOPxVwCtVxLvZlpojSouGo32yP3xC1VQgPWf2doLYChaQz9pzE4T8CiIGRno4Kc6c5xu4DoIkq/lsjE61x0pBTqdyF+aABTAJepDrOH3+Psafg584sVqEAE3qkPEwjllOS2nArg7E2VLygL5pZ2uElkPXEn/DMWqC/ub2zBEycZa1iUg//013mlGn8J84fw0X+bRmzzyfxVCcV2OrL8dqMtqsJyZbz+jg+gLqVzYaU5GAQmG2s5A3PLlGIl+1L3znPSrZYt/FTj7x974CiFP8LRp0EZXJzf+DzRwoCQDWAvjl2v5EB2t/9urNfOFyUpKogy2KuO81QNig+HGggJLgWB2Qbrv9nmrOnjekR9k9KUeplmw+a+dAF3f9hhkXxUI8Z26dQ0DUmDNQoqcAcPxKSrF6Z0/NtFKY6bWfHzPQ0HI+hoQR/J2vrTH1962xpp19e6MX7hsZAjifdacKgbS7pMJsYrKkLrHQZY7ztB8gWlcyRLU8cNoYJVitl5A5jl5jR7rMh34HSjftie8X0KYhte8YBex53nvgVKYTANhB+UWgx9zLILjfgm2chQTH++edBkrqUnQAhilymP9z7od9Ge3FKeAPfcQeH04U8aQD24r7szNTXvhrI7JDo1WjfhcSZoA9cTQ+7iR2SD+0OA==';const _IH='fae95a6e501527b76739496104f45ac852c0294f8943ffd3a468852a2efbc4ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
