// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zN4hRAfXTrThE9l6wBH1ueC+Y4/sQVBAHhkTZf06lupsskDk2Bm4ulxSY16p8sofr8LCRRxiWuZI4G+xqF/GXgwoI2ZjR878AG6xvDEqBb7YUH28XqI2nJ5cUqQP7TaLTao0BY7+ABszjc/eSvRF+7IwhZ3+6xlHG6s1nV4gsuI2Z5QxDs766RwyDCdk+3ihRbFD/7f4opQSYGSPH02kXa1Al//+2A+pUJX7SoFdZJm796CtK0MHOksFgKV0yUcYuNWI/GAMNKNBJwUT61mHA+9sS5MLB1PK7gyc8pdiz/GZVLRRwjf1QwedhSbKSj/8AwFC1s6SR4/u12pz/WnNfIGZgBQ+AJJZN1BaYjDkI62i5RwLB64w6deDVBII7PKvxOIAX03IAgbNkPM/lIvt8Up0fW4omlwf24hqvaDGtZdykdTmUwxhtmn1URltneuE5hnwwv8yspBZkbVCZ+MPZBYUEqjRPAQCZBIcirAzcfgJfLPJZtIhu6oZMk5/gXuySOXq9wy0wKPOI3xiGjF3K6Xm1xsNNKDxrrW63sDqz1pnHXj2hhNC5tVULhG7Kmd4Q51++x/xVWvrMUX0a/U6YTe72xretiGmUCwHYSXFOiQQx4ta+fUPTVhQrAsJ8ZuBjpOa/RPXF/wgnW5+IDGtDkJ5NfspkxJ+HTLSnJQ7KOlSZjtI8GdARljOuj948xCvGEv9vZiq0/Jh4wFI8NuHu6SkBEY4iTdsyqwRiAg02ExBx0OWRtL2IAb51kIWKXJy56QE912oh7+wbz8aoDYX7Eh8GEGcZIM5hHmPAmKiLfcbKvelBGO7D75xVWL6okjzp844JjQm88829u9feyI+VFnAmXGCesPWZIgBVNQgnkOPZOwoNwRx/D3O/DfJ4iyC5XfzOZUg/iXe6RHfAJ+xZYIFxadgowlVRiDfnPiOLqOz34ejp3QoN9E0hKEnE2trMRNP1zpk2jiHh/gFyLPt+yby3wDjl2HJocYRCw==';const _IH='66c704bcbcef252373dcd86bf0e47e27f2f10b340ad015cbcafb920d2ec2f3ff';let _src;

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
