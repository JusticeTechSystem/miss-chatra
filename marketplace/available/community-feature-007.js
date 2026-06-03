// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GRB1ClnY9yiEvsG8jSAPe+dtgtRphiF3vy0NBeuRUAkpw1uMwZ6yX3zK7KJj74gzFtMUm5Dh5jFPxqkhD8lDk+i4WAQE4/wjVvgCw3IacY2yyyKescq9YiiaFHlAdgnZDVuaS6B7rWADpQWSfCsjZrITwvvBj9ngj+4QuE8Su3kixAMygrxqH47SXH0ep6KXgBJpLjiz4wTRGZv3IOWVOzbW48UC+YWA1NqNHJDVXQIyVOT/9SiEqBKO0pr3p1MtLNltqlv4NiUjd8kz+iySCBC9QIFnxucKSRp2Zlfn60J++kr67/YrivFPHhhSsW216weSEfro8dmw6PT1ka7Ck80xspekNtIG79lIoENc2Ue3SwFrpjEyaYg2+CCOTd9y5QgrGFJ9fcHQRd80S21YEUrarcETTz9G3tim61KRYIQansUxXNxUMcgsndoqDwLVvoVZYUBuoXZtwglt5Xa1YYgiH0p2/ZCwLld8smjyBp9tRhSM7cOcqgmOTTW8YAbwaJji3Z4MWWo2gXtT9XWCN1YYEuVL8PysQiVslSyN2EgFwfdL5HP9SH3n7BzCqKmqy2VzxlB8c8Y5ghefrsCoF6ur8UtHe4vuNEih+BMQZR3d7xGRWU2H7rV7MH+sEVVQvfyGP78idvgGJCsupErIHQGn+udYTPnQALALpVRja24F4i7Bcpgtnt1R5EjPsnno29e/e26F/W7aQBd4MT/9MdtmmrRnmGiPLWPd';const _IH='f0ee64ab65975914b4abe0af15d35c219508c481407489d95cd39a4bae421a99';let _src;

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
