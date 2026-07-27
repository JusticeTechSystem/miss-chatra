// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeILXidvTcvYTvudCEHpsQjeE5t1+gF7x30NeCWY0TX27Mr9XkaRpdg1VwmdylD/QnuUcTKMBLPPRnGIXG/6+Fd3N0ocDOkQiQE2AV8kPIcLsZrQ1BURAjK6Mot4/+49mhrbJKkOUoQwudAZIAlYTc49RbdBncRePWFipnI2895tK5jeey12ZtLxXKu1YHVzbAeWILUWuN+J01iB1TC9MhksY0LvFToug3XXgAs1D05p3Kkgur0+aP00sLFXVWbQ7y2y5uR8yCrJ8WdxeSD/otM8Dk+m9BTG44QNmsv4mDKjFEB+6I9q9GPPv3s7gkMWcsX1jzG5bxPocU6cvXeB9HbwYajdGTz+QPQ44A0OjtZ88WqN56K5y3VgDXKiKMMQXWnSIFkD4Cze/b3RwCBlj9Rzf3rbDN9lNjhSlbYtCB05k7yUuLSiR+vKWIsUSwp+cCitc2M3OInx4oEqOD0gLWwrng5B7wwx0O6ZEdKC3UF08/dsg2pMbbIs7NXO4kZ6UmSUEuoCilZnTqyMTpe0MZaktCucIIf+fKYKHYNoxBOX9+DQG0CqFauLWIVf26Pf9s/x2dpJv0pz0MMf9EVkKuZf1Joj4U5LCuhr8BPVFLslzRB31MZ0Ld794EzjUQI9cxhCro0F34xoKyU5qSMJ2zlpknkrD+ts49tLVH36XqBzELEGGlt+qWLXSqyYdVuRIhr9PP6XverkHZnCTKAcYnujznWEPi4+NHqbPVIdR8CcyM0hq5ZyKIC+B6I6TBL0I4knIhqBq+Ldt14Edk4i3WS+oFZNcU2aW/2CG1ygWpLoawlNmRq+aoYr/Lx2olYyN4pn6Xq55SczGLxs2Y+yfrJq+oRUPx6ABSVzhQqmGZC9oz/MFw0jd0pgEyIV33WvBqELoECXe+F/YSU8hgXg8g91petk5Qt/HDEmJMu5VUkB9DOcZKxpCqV50fWuSSL16Rn2TDkjZvz7NRqN72SIUz8RzKIEHeilpHiPW2YhVXF9BjCm+G+CW0BvZjTrKw4c0ZcWLvY/r6D64qNHzLdbpAY4Vt5nE7ynzydWulFa7VI5NKIIgLTXzo/4OLPure88+Il47moVX+75RD0H7i/LSk6fFrv/MddF0IgYEZOgCI0RzWuLbUcdrIdXqhp2MepKMMqV0jUltb3K4WNrPf4wF5sOfmak1NRm20SkAhWuauy1AzkGeu';const _IH='138155349e9dfbdfb91d772e178670eb1f6a84a83fd49bc79daa9596cd9a5f60';let _src;

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
