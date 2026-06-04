// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SxxRakSPA5gc2qqar2eWw705Wo+fdE8zd3LTVKh9cKwhm9l1xP+8DNqgur9dwbcfiRRRPPo7RYHOCTJai5nkLmkxvDKFeg2QpI2rWZR99+yXTagGWHPprG0BFqm60m+ssA3Yfkfz6t5BQIMgpaxYEIWYEh8K054UO8Vov1hfLnhZLcNHBIGs5xmciCw+9eMr3/pa22pThJoOnIjpV65kvw7X263QKGbWiN/MYldptorrBm5Ld8lSxtw/W0E8fveIgOMPT2UUPB/WUCthY4Cez/YaVUKwga8n64HJeFBpESvWjD4cP3qqz2+2/Shcz0B4cgZioIo+neLQ5LkbGpEsZO4wGySVxbWBeJ0buQXzezWQt7xjdVH22DiHunm7+IiN1E9nYxl8sEsmTAce/1WMxKe3n2CtNnYwRRVohB/wZ2hGBSJHXReMuKQdduxime7r5TNR1zElWUB4hgXhYAGQW5HGGa+cNf801Q/COsu58uG60gtNhxiuZRXfhxyiCo249ZMaL2ko8oF0l34Myp/19kTCDutKnQqAbkrWhEG7iClQtRRo4PkJ3QdxVRgAvB1NKzOMAM8A9NXQaObulKmxdAg1DbADI2gQ8HQdrRV/ik7ttUfH+9XLyQ2RDXxRsn1Eo+yu9l3cYbYzzB+mKZGuBv2QRQYdoIV8zUvPeT3tfnRE5GiCeaGcJxx8dHvxAq2MGYNTtGiGDqUQIsaALVak9vC89xSoOK+T';const _IH='b60ede30adb190fbe05d927f2b27a358879694dcb2d07441d9f6931612649af0';let _src;

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
