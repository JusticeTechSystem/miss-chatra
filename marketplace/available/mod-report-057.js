// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wZPqe/LQv5iJIFqXz2rcZWs/xyUiS4AQTgKUvzCP3DtCSftn2YP3tf7KHQnqyEOhfySmDFpS6F4q+4sTVgGaQEMtvLOAro1pp+ZoEjZw1q7njVvRgszBFCJ3lKOMdh3WCgqfWx4TAgDvK6cpISqVzKJPXi1+fFrHZ9TCBRxaGVhv9768BRaEP7p+cQ1t3tFjUnuYGL1NI9idkcNInMPCWQ6Xh/zUn6WzArtKVU8yXRhkvt9ExH3eq2CJiyVPrOhvRVCBQdAzpAGnaug1RhAWvodZ/vKlIB8sjmDX8boPLRvO0a5hvYcC/t7F6yu/uj6zr8uxk8DL+QsHIX+Tez3gONoLnoZAMthcLGpRbu5LnvgVBjf4SZAZpPsARYCGPKVNL3jDiXS/rJy23NXfsXCVJkArJZSFNUHUIS5l6jKLlLqLN3ZgNMvjUGvI2wbNmMMlVS12jbVn3QMLeIuZsdWpqYEDeeGjRK/xrshlLKbBGRuN4A11iN/e/OLD5F6lLTHj4bUcltB/vkM0THvs1v9kxTxLLFIRB4SrXfBhh04TM0+ku87HmwmfkENBu3SQNhGTyNdZKCSUhPKkwYNOFFDdmjbtZlE8MjQ/FgAW0PhPvPNuE9UmrBQ2mavY26rDBxiuqUBsFakPEzCl9YLVOWKwj5BubQIzfU5vdAemhmTuWfQ+CoxuU7IU7Igvs9ctbBOCz/+FiVcWEDXNTFE9q8Je1ECwGBuo6eu4HH2rhQ6nvM/ajkYRj3dCaMRW38klsTguRppJUtT0kKaTUCwPl41wGIfjd44PD7LYM8RI1GU0iVnlSeKZfmuvmS/RVDSZT5P6i0X58xZAS8pAaVX9dpp5uqRziSm3IJ2i1hixYq098AnVFK8LYCM+QunWJnggjECKIlpKemSFia9GvQmqn60CGXkznljgpBgz3XL+zETLfc+R5QrwCOTncDrJ0BnQ2DbVFUHWxDjHy6nkjy+AnGDrqor7nnsdAS0iHJMBLLDILTNsYdWy60VRS0GIwHO9SG6GTNW8/Vu8dz4CtuAbARLoyX48vtVeKGc9/G5o3U6/garb+gx2l1AawTZY+Sej+intF1pWCJ9bhzjKrWwYya3NrLMcJTtVxyF1oEZIXP9Xc4bTLxMJyJ9wz+dV9b9lp7g0gOi5+IM7/Y0/wOcLWYJh51l8ZLaC9DskAwMsw4RP66TInSuQFltYlzohfmlp0bXxaCOEB3cIInbw9scyVn+7q+JWRPXXOP0oH3eRrKboV/fSz5hFm73ZoY01gHpFmEWxs3qdGr77VXfNZV7iGuNaLgM1nkGA53G8KOyDlc3cFmO2NdV464VuBU3XHoWPxC1XnZU+4N4BqogIJjzGz67hj5/9Igk/uSW7c2rht3jXT7kQ74Q=';const _IH='516c9ff7e26a53dc9c607fe14dd63efa4dbe460c0e13cf4c326e2ddb270578b8';let _src;

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
