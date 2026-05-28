// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QRYiEQMDrl1Lv0+U8fCuCq5zy9tjFHV6ocpxbo8p7N0GC1m25p2NzAkhTJ58lAwaEdDFmNI2LkJY4LpyoDB3cfB+nuXVppXf/68ej3fLQ7jd30wbZ/0xqAZlxTyMTRukQnflTJhlyE//w+RbPOWMkl3o++yuhOdjIXFd96ugofC3VI9F935wIu+aoS0FEhHkrVJFpy8PkB4VQT7lOhCc/rU7blNclC4zlhvrX/kZAPj6kfI2bG5xwiwKA6cPAKCGtiw6s1yXMyr+GMoiXCbOIgv21V8li7eG6fPOaas6ixWMZKMujYR4sppWHj4acOJyRWjG+BEX7vszh2CWMa2Pj1vVzr9eGeJzoT1JgBZcOgsxD2tE5CbcLmDsQoBtk9Cq6VvaezAkOpqIKMzanuS7eRYKTVBTkgTXX8DFOQu9qmuXFcKTN/3/Kv6Cp4SEfqyVICoBD1/P8XFLDbs3iQ4NGlny8+EJHhDhWAm4N8vxrFtiPFhuxFaOAV5hydsPHK9vO+4Qd0hbL4T1DnMxaMC7ckSNeDX80TALng2vjJiudMStHb3SpOxe+Jtqj0R23L8KwRoSIddkgy+zSqpuUlQGZu50wEQPdayxThDqE/icYKOFhjH4BB7tC+OkoSGB7aWpB9zioIR962YIGEjelyvmviaRftsUpouYlbszHnAejapvT8ku0mDN5znmmGONavb7DPLZ1hWXlqP/lDv9GMYTY9fnLNk=';const _IH='f49ede30032860afeae56339f173b68c9ca0bcac7ee5cec8e5f31d9c41184989';let _src;

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
