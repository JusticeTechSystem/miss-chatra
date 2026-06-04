// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xhOeLfnUP/A3aOgvH7y906K55kx/U0uiArpBTY4fck5YNEhmGBCpptGvvDRawy0tvbLLHbF7z4DYJrtLmVg7DpRgdTplIaJLgEZFEkgAa3KV8Bz7xRclLsxvXMCOPLyiIwPlUWzWqNif4lGONyWZdkQdxW0CRf4Kjy9snEB88L+Fr1oO4gDVTCPOsmVNaRHI2130VWPDFeO7mEqJxdKyaSX/vTJD0QVVXiF9+AvbqPzGbR8fKmb64AKX6LQlc71bEyqUhM3HzeDp56AygRtHuOrQg3coLzmcFHBOl+H8Ex57L17PVIwocRgqZimT36bJaljEGuhKMcliJbXDb+mWWVIOyGqpxQW8RCiSN2f6ZKYvG7YwvrRnn2maX+pMxAJ6BUCBdMWhzNA7YDHY4gvAhfVjy2m8AIOf/osnlATIlWetDhmt4cIiOamN+oxgej3dznIv+tarvHDDNa6tfood5z2YiwctJqDDKkGciWqBhZRXktHX1z00V/S0cPZgSI/PD7J4bOfu669xMgQsrRKkyaVb4KnRU1SM+j/G+x9TxCsuce921JUf/C6P4+y2sFI1Bbhczcl8kKI+TWal3ua54ZjAPKk/XhqBUTafDc5vGJnsJRZz4jqqRTJLV4cOefsRQbmueMOv63eZ0slVUYASU1Ij5+Rd7CPZdakuBobUWU5ZEjspzaK6ffQPalVZAl+5H5ruv8bUDxZnZ29rQVrHx6tfKJlKL/wsVIErKQV7+O1g5MxRaMPhrvgazVZpyjoakw0NBnpKbJzXUSiX4iJv22wm/4BUcqa7Kz72TatRHLYXCF+f1byMj3xywvemYCokdiHS7bicT4AF0pzTZfJowwTl2qSgzcue10nNhzlCfbX6rYbC4RQfMUqW5V6sFFIxI5YKTU+82qrdw2F/cmIR2aQ+U2BJtmQU9vQVBsRJsqxubZqDs4byMma2/ggewvUMtKnybB8d6hMKNRdKgFWPxwB/lV1FhjWSG5XtsH5Od0oZuy85SUuC4vthnjvPPlM2mWICVjRVlvgAESvPQfGozX6lUzr6V6DzCzPaorxXKG5aVbn7XngdBFSDdfLxCpCQGYXDRiH6Z5W44hakD6+b9Emd9H0MUPEB8osbqD2H+SoF3bsdJW+nf+0iGQhMRj9/vsdITGhdsRTxkmBRPfsHDA/mF4R1ziE+wC0iJ9YwD9D1uOAtBBISJr+qxRddvbrQc6ycOe9bHuUSPIvBuP//MBxRG12zQjQ2Y6cfRMc+reZr3xMKfMB0T0MLQ9erMHh+5hLIOMI3bfqVNx8MQdEOGjRN21avlO2sK3/Plsos/O4IosXgPg8RKsUmK90DJ6btH0MDhAgZeCwRLVI0h72QgUjPcHnd2g5rpO1ZJPHB';const _IH='fbb0182019a2b459b776146e4aa9c3bd11388dbec5653b5883aee94f8200e240';let _src;

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
