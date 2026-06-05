// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJTOgfEvOwlcrGZZcxU0lzwHG7w75TqadTQfvMFigbEm8KMYV+/bSyp3n0fn+6v5ltDN2aGM6W2AYL2sUU4QIYNS3YpnvCW2Blxr+FUIvLpf5bixri4airCvx1alb21ckFSv4kfrQfnNJYxBVWlHLLIyf7n5QYE4nAUh303SySBe6Fdb+MtJHrzmOd90OcTGrJSpi8KLfqAU801NSKjQPQDgoPJrpITN1IFuwJH5FYjARjxXE+pn9zWUwBzny83CUPURqaACS1RQYvYGlO4cUAtvZZUVt6Is4bpdV2VX8GcEPZeVd/Mi6Z/WRtyJLTQbHTI0Et4Pqp4aTVh4hKwXdrT+iN9KfTZL+qBpqhqZpVhhUzR8LV1ElB8ouRK362niRQN+oUj45eDSPBEvdmH1jujaXN5xUiyJXdgovolSI+gwox/YKdjhk6l8iEAMCEJk1xN6/7HjJHXH3ItCxscQrJbDc5afsXwtZ7tZNAeNQ8s5rhTKt1A41v+bTSbA7aov8/ut2Mj91fAyEk+thKvkoESwS234dGQRg53plQHbtc+olY4lT0eb/MycBLRcEWozaCQj0PlauhFIktY11S84KkEVcgDI+r/arB7w0wihnOQ6Mk2PArvnb85werqhVdgxx7OtxTFSYovF5dE77pXKQxQf2VJagZoDdg5mCrRVFk8Cf4JbivLfh49k+0hZu5mm3uK4s8I0Pxmm7mL98321VmVVA8YaWdPAnox8gvMNHet/aJAzcujGiVFDkU+zruLMQhmRdl5qFzOErVMJmd+XJ2x47iklMNO2DNpF8R/kAsSgAjk3EMv9KJuaz4HYNkapQl00uOpys6tPVIzXvZHWwHIiOcEg95LR0ZlU803He1KnNo33VPfHtmoJThKVhY4M7UUHOCdud8FHqV6Kaf17L8Rzq6NvlxvJoys1DM3EW16qHgw5D/LpzeUOiBCooZrZrTehqXwNdmvUAgg87XQbT3hJ+vKdz5DwJbS4sDso6Q==';const _IH='bf4f8f9cc2b48af088a615c1abb4ab481dcfaf1b3eafcee271606a3b69578728';let _src;

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
