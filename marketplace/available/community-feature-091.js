// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ua3/TOn81pPtGYNFw0rNGe7IdU0Sb1Pl6YEK8bWx5q+wlzz4JaViHftLFiQbd9e77Y7be4vSkFLiIRN9ZPmTnQ/nP98PZl0JpdoQlGga1TFVqQjYj+QT0AShxj7LDcYEaip/zRu8PTPo5qj6aYFdrb1c3o62aLReOdwUhhlXRjXfyBp/8BW1HQScK0he78RSBENlohwu5ePBQX6wtp89jwHSvb3MKI+xQXb0oytpep+aVhjnTfZAo1+6+FAizoHqZr+cBekei6Ykr3FSLSZxZq0zEZ7+8JrNjpOPZe1dPSQOsXuTEesN0jFXtMRK1ctprN//aTCdaJNi0YkwZcCyBi5xfUZ/v4m0KKtJ9T3Qxk/Ligb6v65rNPm+MCe37itPw6hgL4s1s2ujeMXZKyI3PAiwkOKwP8UWZBnzSfkhk1aWnqQk0FVjnOgN1EL0E1+lD7THxxEySCuMZNN3Vbj+6SaUHcW3r2n9H72FCszytRHukbVmCpUPjjs1l2PkrcrNHOs0+9apr2sN+NO2gROC0GSlctzBm29icbdlWFv5E8v2i9viKXI31gANsugLJIrhqAr/bS26iGROofsLqBvd77OdDXAGPFJokhU957vPwQbDFJAeJH2S/0vHPLgCWOJr+jtn85fjECRIjSBc02JsxWBSwkQEYFJ0Y5hg1yXoQteJBMwd8h+ck+/209hT33dktgUYzP6xf5X3uvewjRNR4FiRdrU=';const _IH='d48824549b6a03259b84c21e4b826b4691c8f67c1ac9b8d118143c738e16964e';let _src;

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
