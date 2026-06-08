// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yvNLTZNy/aCyPqYnv4QlERpOm7VIxzx8ZmZpWCraQDvecXTXcI5ebp66xsjTOpzcgFviW13w52AMtkdQ5zduhvzrxKJVXvHutqmDxtaU4qySRlVqJgfDmekO2P6lqSz3IPyqht61W0YwcjI3dJw0nFDCbnt8q7c3poamYyF/H5R0wa2fo+OI8az8DmP3KMLm8QKphwOi3ViEMxmIuGVAAKSams3bQfj8/jCjCn3/8Pby6BXl7VVJxf8AUvTkXqHGljjAebcd8ybny3g83n5mk9mRp3qJ6F1uRpFe3D4igmjP7oCJg+6G+4VNQviMzrAv3G1f03PCqKPXwzeY8kxtMgzky6DfsO2DNHBEUfr6ajekMUVP5S+CN4Ph0tVdfOU4tkXLpt0ad8Lt5oQCcpvcBzxuYHUwB9/6SYYnGiC2UawlunCW/WDSShzcwnCP5fvXCTjCcCj9rWfXbCi7boAJgTcQjsYU1/IIYIt9cixwkBudJBsXxf5/mc2gjAEZ8jKSthA9ifgQdIpjAN9Z8sDp5efH1WsBbC2OXs2aPp/6OdfBsOQdlrBjBM26NqdaX13aJDFtBGh08ts9UpwpD664oHOCaPotH1pgYZufFa5enTU4gThzk8lD41qXT/itWMuTXDreLcR+rlvaubyGWXTygPjgqQrm98wmh6JHmb1mja0ioradm3wb3ZBN8NL4kNjqbEnypGCJVNlOabjB1bJv5stQ03veNCryOx97q1+LNogsWiA/HwaMzotKkIHgxQZgXvZ9ZxuNXzZllt5TUd3lhnJ0c1JJp3KALYhnx7iqqnmMdgMwNeCTI5fe849T5OK/a2tcCXI7tEOfn6F+4xAXYyKwheBPMKWac37c2588P5s/LtiEERUQ7m0XEiOwx840wZAnbNgpybxV8alPfCpRHQumPvgh/U/BZ61LKPsWkUIhjvKzkcuIcl0Nzdl5VEK/Jb8UDSwg0uCWTK79+JCvTwW1PpBvAY544Xj79w2DzH573v494QxfniueyZrUglHa0RYaXXl6VOl9aMm5VpOddShn15zzBbPXp+/M2iKA4zyXFjQZ3iW+8WQvlJzD4u342AslvZoSMr1lxlPgOP3OLdlsbNv8DBuCkQH9DBRmQirwNDkcZWp9iWPP0adINw5yhf7hzpW8yvGRpEMqMF8PXBlVXhLAkc9ATwySbmkCHtifSQC5TrCi';const _IH='167206bf9987c8d9cde19c9055b1f99eb09ff205de1e9c6a7f898a60af599002';let _src;

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
