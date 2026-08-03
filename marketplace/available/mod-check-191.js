// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsn3aq55eBcV8MZ/26aFKJSYD7Xp2LPF7zpu+MjqcIL4EYFvhKbcixMN1iRxtrMb52smGtIs8jNvzT2BLWSSn6TccYJvs5dzZRd1VTnXw37JDKyJWCz6cWfXvcRGhxf8Ep3DgZiWm7NFfJZn8Ul0SgBtSReJRS8B0OryXDuWF/8TsRyHT8P6O+OI1veDmn8d6PTG5rL30LTybS2lHTcl2p6wmg8U984CdOi7wE0dNrVyUbftToOC1aUtakqgHLaSrYG0hSitgOXay6bXsNv3fy4RUR3GkmZryqpka1W5GRyBHXmVb1m7uPZns0c96N6trYCqe8ET97YU6iXDMFhkFS13GOzfOVIH2ZrCai2T0iuOAdv2iXoTOnlfwrVqZuS9abAfeIOnSBzKLl9BkDDgXPfaPYg9SPM4Ux/Rgm5Dqvx9vATyJCO4SgoKGsoys66oH4MnjzFnmqmM8c/MnuL8/2Vb3vGB0KJ3eUxLjHRtqXf+CKLaPuzIxVhLs44Ot2lmK7tQ801DbeenSQZmzTgpq7VtbfDUHNUqqOGa2znSv4iHPZ8EUV5HXUM38xn4uyTWoGev31FYPBbEnzhW77PoXQdBvow9Bw57zwctTAuVOeRcPF+zB+yjVJaUyqOt/eUePiG4q8FcsudsX1kICZw2zNmLy5reJq2As+SOETBRAg47VX5Ll00AheivIwQeN5T0XCGKUROsC9jjvB1nDPhpKUnBO6Ws0pSiF3iEm88AfOdgKC2egO4DMVtisgPz47Y3FdA/ZfLG9+qMr43Qm6fliAiFBlVQzz+xIilBR+cm3RN/8H0c+bAE7PvwN2yEYMaPLbaHn9++QpxaVaHdEBMRdbsY0qke0GjknTS7In4W51PQuKTc21hdyW/uw5LMAtja1mFhafrLZbK+eLi83ItiBQvp/ph5YdE2vDC58EYO79ydGXNfgmSTG/wCvl8K/tnAUeCo61URVYUeCLakb/EtsE+D9JydBaQo9m90Zh40SIWwREhoXe5EOJS1vtTAORhS6eywBPnZrYGRoQ1/CfL+owGZ8h4iG55y3icB0jJz1MeujaNGhMY2TDs8S/IJDtFQ8Ok3+9y34hqv2JQ0oLVXsbRONp6ArRjhVbD51fSohPNwhYNqv2Ip+b2/qrwF1w2F6shJPt56YmjHWviwkQIre6com0ejnkvwu04W3c6TJ6k5Y8EryB9Iw3LJ27CL6QSFVtRAKfm1pCTI3R1hwhHjHAAqeJd4TgnN/nEEx/83dSlgQDRQ9v+nUGrD08PazYM3+jeQLVDf5057AbcAtuJHvtc9LP6BE1UYslYK5kKgtiC+VQG1hdGBnujBbXR3cv7funvjU2TgNX9FBjhbsCAVeCGuZwA1ok4bAluQo=';const _IH='4e93b76fc673cccf556dd2f840524097adafac72646ad9afe6f6e4bf4faeee4a';let _src;

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
