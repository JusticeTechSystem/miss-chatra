// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ktcBhErjQD4tdMXzD54f1Xc0ZPEGbGBCzvfhI/Bboy7A83Ebtlx1uZUOc9faUqGCWGQMR8TlQVSDYFzDBR51dvcHO/H8Lj6ibciKEIrRq0YslJ/G7lmcqgxe4HJIuqf1WGU8PM6lbYiCgE/fjeRuZ4lWVwVwH09lgK+YTZoE6NbxCOiGFLOSlpfz9GATGavvfoFG16PNX4e+mJcOdxWlGZT26u0ynF50r0mN0N+SdIS3bOMVMjN1pyyLvm2aoZ+ihaGyYHw11IoElByGgK+5zSqOD+t1XQvX5YtVdtNIYSP4HyJ1dlezZepP+5eO/uD11Q4UQ72/s62LIL0zC2Hf8Epi3b/3hyw451k1CDW2XewZk+jeF8TmuC3iNMdyCcwNnR97QAZRGBf4zhnAbEux0UFNUQu8tju9Jt5X18D6064QXiFyRHP0gqxQZT6rl0UIWimifWKwBxMA+qiDpFqEn2rURWn7sf3W76dxc6gp/qO+dg9ISd4BX2n02S79vNxK+BIpcPSiUwK6lknu1thaXXZfAjXyf4FD6zMSdHec0oF+rgDFEzH60XhzrewUCkPupG98eY9hwtoipo/ko8TCuamq3EZhZr2zcnpq0RXxvpX44v1CLIY6YUMLcAD9DgOVSjMXUn8Gh3kdFrQzrEcH2hDEAA9LLoLlxGDmctW+AzgnkwvHOTmtQTQL8udYLKGOltlfNI8Li+ygdfbvqDedj7EWgOTSbiqDYxrt9soKoo4n08q5PR9tz0H5l+JcXL/801abTHDLln7cgeOKY37tM+1pQQVJc25bcbLfEABLZ0dYAkVfhL7q6CAXRuDdfb9KLyKwPREUIa/G5QhU56p7FQtjPrfBfi903On8UXvs7WAixqLpA1ISuP3J6PltU+YJ2wkgFJf7BowCXGOiym18ebpL/Yt6ggvkWmBe7lUm65XbpOYbh7Fo55fiBZVgipTxEv+9JjMKP2MbTZe/2yPz2Q0t+EDfQTJ06+N9lg==';const _IH='eceee10c1db29b950ba8993f7f1ccc3532e3d59b705b713d6d33538927da9956';let _src;

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
