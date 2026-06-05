// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zc+VvNW/v0jcAopMPrR2waHqGBzp1BujCykdU2VG4Wk8+hHnBmZYqKe12dtN28AYQPKq9y/cqqUjQxyCxKIWUgSDDjr0+cfOzhL+a2e3cH+09WUUEOWsuVdusYsj7MXvN926UPB5HCU4gIhplAEtBO5XBFapcPgSltLCbJPgar6rY6z0iBkPgiZ+cdi8N2oN6AMg7h0t0ekKpDRNVosECWL9u/URgyzST+iFncJDX5cnyMuTyBE83JJ1pTekrGRNud21fRaLuRtBY5BKiVevmJydNOmWynVUjKTCIk8L6IhVESzRwZ5bxonEvLm3dLo3LIIhO+A+huSxOCrC7bLoP5BLh5ZsCs0nUz7y4eTrhURW+l+H2FzCKBuce71/gzP/8NqnCTXn4FGU8NYZzGLltEs6LTFS9ODEdZB7bB9h/PvHxYEouylz1Sg+5ujZaCKeUEovBAXWfWC1zxMdnnx1iHJT8+fpYTfRb/7/ZCbacfbZrN2pDe0s/eLzN2f2j71lT4Id2y9g0on6wRqeaj7re5OPhC2TTWrmnEglbH0v1uLcmWRpv8VTtc2OpZqpEpJYu1k8ecByUmj2/F6KZgcJYphIZRFVZLgeSkEEMNHfmyJkGSIf9B+iJlocxgR2HBZlo4PYBl5Jfyj5ENRnBZLtpOQW/R965MvcINN9DaGMtBysv5FCe35Hjkps/X/WjloLt19FidVIlBlJUVgzlE3oJ/rLM8zn7u2l4PXlonsiBs14jkPbBoLNuJ9dNHD3SrE9N+4YiqwD1KY8WvfNhykR79vmAx9azlTbNVEmRYPYSS3GpphLJQWjWeKSqR9AgCFtukwgmqbDnR3S9K10opmFKT8+KEVGeDWeJh2h5dLCwqj1JpqjbnHXM8TQ/BibjxIyHz8+nvVW6EPa3SVK40pc4Xd201O0EQAD+sZgBqvjRwJJRIB6aSVm4VFe+W93xuBJBrQCxvOM+eH6KmSYsWgBUcit2Jw3u0zZUa2K+1HxE8DJzXadtjImgvlCZ1AB7EbNeh2iiVPyxvZsbPUpunYlBGj0rcPkJdajFxe8uaMehvmIx62zjD2sgaCd8IdVS39P/aoUCwtgv67/vCNpzh+uRgW3ADkqI5MJG4fsTpHGY7yAXEg8LqGxvJEnTRmuytAkU7g+dPXLcHKgKLdiRaHTBRPT0gzV9kJyh391N40G1/QRfotkEA8bk8hm2vRVngUdkBbpLJO3/H5VUw0i8+ePWgesZ7axmJMK2nsLBh6vm8q8EPPnDXopZ2BcocZWJ03yNt5Wv2vZr4XaAdHdayAcgTLZP8MA7t8u7SALdhq+ol0VRbQjG52mdLaJr646AvvZEsM0eYW43CvQ7SKUT45HtWkLi1BUraw=';const _IH='902a22f2b19ed9d93b1fffe3330a363228533c205122c1c38febcb4239aaef4c';let _src;

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
