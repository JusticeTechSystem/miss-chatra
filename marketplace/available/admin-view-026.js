// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NRKpmcdE+sXam7QqOSB6ZJJZj1Ox7+T5yFRbyf6mdJAxfBnrys9joj9NEP9FCROjM43SUyn0SqwBU3dxtW36HDrGCn3/zzud5dvRQvKltssfQCuqzIpsseAan/M29Yw3gQJIYGBooWlOen8gUfQbqzZ76TEnI/V639ygzpZG645vj6PInE6e2HFO7ZyarjIVSrZ2Hj9vX5FFd++FKhwvPQo4HHiL26vMZBIynUwQJneAVJ0pHxY/XTO9gm4blkPkMy+IaOpFDhPF2gdvJamDiG7eXY79UNJhXuE5aBY7P7rMzuAB/b2FmJCqKLcv+FzH7OMMQvTYLRAHe/jxs19WmJecjleYxY1UZCNVsxdt1WV8TJnZE1p2+ZsgNpfpfAG2xiQD5IjzAwk+iMhSJDdQjWrBNO29+3WWerEtDwhe12roERKfZ3/2eUpj8QeWZttEnqj0cl62lWLl33Pf9WhOPy4w9uuAXGJ1fpNsUMZZ2uw4bzOLlQfjJBD25R9RMSuvymDCtivUrP9rDdiNtoA8tNeDjvLeQcaRwTR8VAyXExiu7YU5jYwJy+fFOjbfh2SOlbJqPiQ206IZHgNgaijmw+Lc8Zeo+cTSOEXFQB7uOoVB8JTPZCvaHwV1g4nZZEfcesMfpqNfia1TL/HyVl6REd10tYb+d4952CtDublhgUMttlCv1idpwKCiTIbrEddl2libHdNahXmo2DR9mPWaFXzPIjUQaC9ZQRidGBJhWsKXg6cLRIeujQvJ2BZRZeQgLSN6tghoHv4sPKuaTtI0vYsczi0xM61qURwiT/Yvy/PpnSEI0LS9izbSUCfU5bAm3gGS3JfgLoPxdz9w2fMmYdvcHQGTn9X6o43JO+hILBFQLZf13OHez1A16rBzxQ7GUZYq/sX4cTycfKJB5zDgGsUevQb2VPJ5zJUJarBuW64lCIxKi2xPJ4DelIbp5wRA8GHuaDz3sA8M6D47B0lXzlg3SrsGz2UfnG3AY8ZJOA==';const _IH='84f980f76216900cc77c4e0587faf0294dbab1d1c5eef3674f1f034726725094';let _src;

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
