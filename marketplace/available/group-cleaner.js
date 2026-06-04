// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8mnlVXOzt473N3ld8+Dn1gd+dkRC4YddaUzo0zzeJgribejTVMaLcVoZKaTRcVvRW//r8Z1Lu9d9B+GO6rjY0zP8rIujOTJGyQCnhKlra/mAOlpRTTIObcT5VZKSvjPhtAD+A3joy/uzwvp6Fwhjum+xPRbtyFJz8QXCPb4owox5Cw8WNTXcWK4pF+AAoGe6awcVemtJBH6z+1SgOATQ8IgxD2rCvY6ltqQk1JopSWp2hcY0Y8+La96HxJX0wWYyCvgcDIHmzMAlmdhxyKMz4HxB1H98140DidlWKC2+Q996A1l6ByY/ywAxsUI90p/ADyIwDjoj762LlXznRBEQNwzipU4E3hXEWhD9z1r1I+us4LsxGQBv1ZN+NxtYj8DEZ4VImMlTMhpHVPxxlbXCUNe+JNV04Ysr5KvDSuYCLkmGlE2J+htJLCd0S4tp99kbx41eFJDKldhvJsowVi75ygMJMmP2BTrxik6BMYhJaaItbG30QRo5kWwmDY1NalZQbin0nqu6cDc8sxIvFgbigDVyslM/wrwAuWd7aIzyZKP8PGGwST0i9HF7rvBffQXg+pPWv2EgGAkBAv+vX6ffE8cnXMURnlub8BwPw6PffQi/Qy4XsvGN0/9XdDYfl/pWHL3zoto0lOxpAP46gKmSbTaIHlBF47wxz881UP7/Da2PI1Qv5xzeTTnhsuW9l3BujPvX9Dx5XrMz3AZK/2Msv11n6YAezkjyQu84acPjwTX9b2HabXaOf3KTXp/PHVk+dRjli3FrLufM4MJW3BVXL+1/mtY4Ozzk8+jaQqO9GwlDa/2bVG62AO55E6DMuIo7+Rbi+8Ig2dLGqoUjCkiFvKo91ULRB2MvOubdyQqgqSEom6QdFoAifWHmdSV/rLHpnMn8TLgcOwiNeZDUc+paUSxGiVX9gkPtQ6N5EeTDcjOZO5EtdJ8N+HAZpcwKkzNhWAb881U6fMxhB1qB/g34eUaJC4hXISbsEdzpUfA7PMf8q1TxvlUoA/DWuOLWXwqbV+JxsnHf9W2OALg08NKjuDGpv5yrO/tZ4ONDxgOv+pjHurYB03ojr9cOg2qLjkMjk1o7GLRN3u0XFNnzqiTVLGLc0orviA9C1oCja4dlmcQhoU/uH23JjfYQRk/KvhpS6tuvQnSejXEnzWTph8o8GQiI1C53xa+Th33V5c7Dh1GWIif+6GEMre6WeitVROoy7+vVjcN5sCE3vZbgrjtBGfsg4CqQ9Fcl5fyisdpnfA+nx34pCMT/sXZXQHsGxkjc5XTYFhcmRjB8R5HKxOkWrcbe859OU1sadac2TD+a/SFkXicO/aqwmOHfcw/7MMpdXURIHP1S1TcgQWeBCmRLZteh0Znch2tKQMT5Yo85Jpn4XTeIxunNYQQc9Y8EB/x/43ljKktytbxe68fICyUAUh1JyryHgYF/eRfs3XEtZhbqaLwkSmhX+Uoo4D/QMjUZuQyIrXwy';const _IH='5d7ead9de6187c803f41f83ce3f2779bfba655a8abf7d17a75dea229f6997452';let _src;

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
