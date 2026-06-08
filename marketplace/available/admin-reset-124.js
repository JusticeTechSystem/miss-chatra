// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mejf9CPPVcCWJhoGnGDNQFKmaaQ6qdLGi2F6l5bHKn3ONrG0jR96YgNndbtZF9ATbTgX0izZOjc10W57n7uF6RZi437AMaVQDUJZ8Kc26ze8sN1cIgDjaHLrPr1e64oDGpRmrCVUoTJRQxNmxyPRzU+qBr5Z8/Y7yIVo+3ZOuB3/apLX2C8LIYsFnaFKebBT6fdlY9lI7YAmeccdFZeFHP3ojtsAl1slX2uKgm9CKVNEpxEHY7ZJgA27bsm7t8vfmqzlF1bIpfum7GicOrKbA29MtnGm4lbymiUlD6T9ix41zzb9G3qH1eFg6vErpfPFZR4uhwWIQcPzJtjEOeHUpcn3/IQj47FOpyKXIVIeW5Qd8j4V1sS/0gDL9oCCeJR7evj7bh+DIsLwPxYuZ2zmofHXXBvNevwRUqMV4Q+rlqCL/Ox9IQCSn1t37Qexqu80qBD2Z9PtVCN8wrx2Q2WVQtj1OkFB8VCRGQrvqsdxSWm3U+U6MivEL5ySxK3Prnz+3TWSRU88PcnzZRc+TnlQOEL1/Ab3qGc2VnPtYViA6X9jX9bGj4gUPnYeNTkt5dEVI17uo1D5eAvokuLKW67NaWK2gcq893zw+9+AWZKsU1FO6roY2kQuJQls4rbQ2oHpv9ZR9ea27Ga3zKKjyNnlzDuigzOfJpDWlGOzVsYmWP7OEBdQwJLC6dvhdH3ZlceVO7OxszjPtEcEiV5k7iFco+mBdGjfc0ycIiAz3pCgJ+6kGhGybIYQb2E8eLX5c1pY6uMB+xxOQS0zZTuyxwEFNDDpDTO3YqQbbaTBLVU+s5c20x4yInPonJmFmW6rxt9ZZQ92FdDjVbDciqN/eulHazrUgvxH8hsxkbNzLBqkLWoLGJnB4KJjyhnrN4XphPCoqmrkpqs+0T43jV6Xi3GADZG6PUa0kZCHYiD29XDtrLhBGED+mIDg1OWufa8KxzWQE/qnNIL6i4BvQOXWkakn/GlUqb8leU7APFdexEJBpB6we1SYWi/yO8Qh';const _IH='9a372ce93100e91bf370d75ac7552dadd8bdbb4618b808612eea6992a438d543';let _src;

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
