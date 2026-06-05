// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OUDgb0LBvz+lcq0IHutFfv8W4k5VEzalXfyePhXnnJ7/B5etpSngVRmYtAaFHgRaNJT5kFGGpDwnp/PxL/VnQradmOKdUXiicF9B0WSvXo7sHO19AtmL+VSaybUxQlaB2DIfapl/FYj68DBYIZ4vwgWof8HFIcmf+lRC9S+2Rsq7juxqez7oC/2EX0gaUZCCHXAS/KY42VG2xVbI9wmhDtofMWHJ6Rt5YSHxj9esShsN4ynS0OekcsBLYi516w8T56g78yO3C2h8x0SKIfnYVSlJ5tp3uOF39LsZTKHxJcW1m1YQqwJ/uZHc59xA7sPajgpjg1Rl5cRjmXzOqAZTfOm9FElyIbHmr1ljr2gS5CwkgOHxMHEMicx/FU72P0224vvFvVvf9or4Qwm14TrkBj+p63lx4X7jYtYafBPzrnts+3TtYteXe6faI7sLwxCE95P1tqgT4CyShy/9J3jwl7sWI81RAAtjny06MT6hYbfZ4wwU3GmcMmTVm0uyAts9nlLtMsbZ5BXXfxclXLh+U41CoBVVIUPwkijOu073tGZHTYrnCfxYxolBLzGfWkeJqYfqcpqomroq4SLR9+GWclB39vhDeVdSA7vSvmQ3FdnxBSbzZ98eiNDmINOt8aN6oZu/QgARmlzX0k8+28PViF/Prl6oGYvnQCGhuDTmZI8UBmRAELhU+mWPHJ7BZlNns/gdNg/cfCOjkxBWHpvZ3KWG/N0AIO+SrrFeXozMRYxnp9BxKbtZ9sc1eggg0Z6UTtFXsmrKz6IrPGJra7rQRczqCkoTP4QPXX5ycJflXJjONw2/euFZoWE1j7Wm21zZOM9m7uRxniQqow1Q4Pup1g3xZfCxW7otfMFL76Q/fGzTwFIc/Fdj/ujupwV/2/8EhXYPLCSiUGs/IUp4zX16k/zmln0p+tOZiyLy8F9F+DAB+uEUYo2EL+F9fHHgD0EA1H7OMC2xYCO+zcvWBo0a9JUDqXMg+Q9lBN/EbzrB1Y0w2WgL9RIOJeyj';const _IH='7f2f3570655f2998e1a11e38c50f30f1f020b4fa52cee1f1ae33785b1d91b908';let _src;

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
