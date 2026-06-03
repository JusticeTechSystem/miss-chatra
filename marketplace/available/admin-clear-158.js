// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G+vqMF6JoGjU1WJiD9vdN/VJha/k1ONAvLdrs7VevDZjDk43FSY7oagk13plI3w+xaJleozGNBmErpQkXBmjCG+vNwKZYeCGYYh5CNk0tjfjrRYII0tYzeiTNY4rBDUaW35SWUMX40f+Mmh1WCaFYQIIXH+xbLekISPBCUJAjtmiJMDT1cNcXh5O/ySbReiNZMTGZQnod/jA9FOV4Rc/7YpRYZeM7E2D1EreBpA9E/6tuPojHS8xjv37evP5xsH5x/1+UdLPsFGn5T402SYwsIwnvC48Cx4cUQ/LdKxRKNLaA2LBIIt67MjsotwlP2wryEh8Z7paXQvGQA2dhYQd1Zp/3sqTNrALJ4BRGSbeRvuAt+BI0IL2GOjaZpI3N0SjzXRPhAm91DYW8DM3eBpilbdqgf22c7Tvu/5maqrjdi60pvnVvNA3oivzkNDX+MntmqIUdQ7QSKu+CKewRMWMppRzgVv4DDW+2yO90yr3YJbEjehqlejv0rAURc3B9upcPSIUU56EhdmWdEBFsx9VDagMNm7IByWa6puWLH4RhsWRKnxXGFnqiNKhLgNdx8TCuHkRfSHboITc1xfxiHFF1kg+IpUoI6Kxz2yhfH2KAgKabN7WqBbrppyyCYleMrtZPhNxYP1ExucXJtjc2WuS1Aa4ddGn+lHTD0ZTWRGD98a6IVPEsHrhcYop9qHbaiQVcsAKr24x1BIkcJYcnTdzbTPotOYbT/PWmrq3yN8wEwP1sGOPScTfhwlEPZuiokBoDzQ7UD9dMiS89Yf0yktiUsSedM9lB9y7FBw1UBhVL35Yl+wh1VX9Dh74tsAPe4pkIme52Ntsom4bAHgZW2Yko3Gb77hP3Pg5EAGSXdTs1gvjOBfBW2U3Ov3GqVUs4bb8X0pH8v0z/Jp2qgjfumv4yFBUHKzC8FLaPZ1MitzbTHWLg16nB+du2hGlssqED3XPhP9i9DteF/P7SZTGxz049pydzeKacDihZBmVa52YOcrQGeQku1wSt1DJ';const _IH='9fcad310b90c05a24b2743304a3f7a2351f94d46fac3229dd8062c7a1bdbec72';let _src;

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
