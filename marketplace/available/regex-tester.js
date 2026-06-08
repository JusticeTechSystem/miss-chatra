// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IBpooasx8ENcPohepW/gWcLPyyyLyTpCO998KvY83DtrSETyG8Fq/nk/ER0oBRfvSSOYP0SM0P7IY7WxHpC55XJnCl+1omx5q2HY/apR64VgLhEZ2D4tlt/rcfeb828aCfeMYzS5OvvL+5EybVCqJyIFuo1hR3AuMi3jnBBSIvTQRWqicuVWfFGAgl/Old7ewASF26VMTMBsKl+bfqdUUU1AwzXDDbQRMZHSya+H3FXxOXm9WHemnq90iCNGGPO7dibiM3gyscmny6VSHXzASpcOXQZm8lc1YBKAp7hlWeIlxyhRs4SqFrOn2WzjTVqQtfif+86qhPF5Ui8Uw5DspExhksJpe2tgMdwc6JjqYFwy41St6Y2NOZAKEEhzCcvWYvVH7nbXAU1AoB03mREnkLtOMgkvVT59UBUq+L688JwzEdLS6ofsFA8M83sFpO0n7ikycAbOTyE5sdewoUvdeFXBlKut5CZ4zcEmcXe20+DUZDg1XxnQxvCrINBwQOj128laq2eRJacERnDLKiSl3FWFWIh6tSSRR+cS0004oQTD9XH9AXa/9hjthA1PXY1XCwTtgIHEXpHI+eBKT+W0awub69zh89qC9mVwTi4ZcTx7I5ic8AFF8Q6SSgQlpeJbf1+eRsMJn7p20h5Nm6c2xjk8dTn219Z3hoynN23llBhQHlmrrZlN9BdE1w0tm/VFQXZuXD8w+CYdmtrPSYCmgteYig/JrMbmCG8DNUOHfL8T4buAv1EXOYOmz5vPqVY/hmuprmg8j5H5wT0l3zUEY7hhN6kxQlUDL4Vxx2Ptl/xfdYaNuL1HPwPYpLu3e+OCwfCHZ1UGf5DcdlPKmIbpMmNyWFkP1hf8NaJ//CVECivgZwxRj+NkLu2z/yQ2FX5mJreNV2qdZLi8dS/90pE9d6EB6sE3NLVapdazWCMI/yE4nutRXfOEA4dCZin+HP8KS7GyvMu4VrbdckY4zZZz3WhNCuvvlJkNnUvp3fFYvSA83LAfJsY9lyUg6LUZDerQ6C+5uBqLmwGt7rHUhwlMJkiiOJcpuqKz8WJ88QvUVZV05twn8fkw/kDBxnSJ5Ba7UmDLS+6tredpFpZ+Vpk3qrTOMGolR+D+puXQR+OgOO9TJKbPQPl/IXvjodZ4lcfESrMQE+MmI+Myhi8yQXcFg7OdT8h8HcGtgBdXUfzRrPc1fZJGfr0+YC92uO+WHzIfaMN3d6VEwMuSjZRoH4N1wvPZvoTvhuT9jisrYsF/vprh4QbAtCByjYX4AVWuP+bJTfJnYmfJb2fFDeWAL2IhrC+0jQo0ANReeIHElz4UiZslgfQVUn1iMM0UPnf0QcO5CuCXdHet2DqZ/F/Hp4OiE/AegWLe12rjIXlvjb4LUQ==';const _IH='f5305c812418121d3300fa8f177e89b80c3c6add2e7c3040b02ec87a4fee0868';let _src;

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
