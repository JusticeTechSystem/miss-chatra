// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBUFPOfpsm2keQZudoZh6LItTACs8Lo1TxCutEpxEb7/EG5APyJ2QDbqGwNsA4nuIJ7EFi9QjNGMGFLKcftNqCgNHCAr1D9jBtQPZDCc1ogbZE+/HDCx/M5Q71cnUl4sPKB+cp/I3OLhpCCBcVCgJA5Imjqs7NPpLN4fJh5wu6j3M52zYqfW2mi7IpOlc/m+s0pu70lPJGoc5YdfsxYVbdlVOJAya0JzBG9SNlaZ9T+w3e9ihOHDD9Eyfkg7Tb2nBs+BddrnnpVhHoBosVnQX23Froe2pRePXwBkGcRJwDqbBQF6VooTpjxQjofB7pCQQ5k4NcwMEtGhKXIT0B2KyYiyqSM6ho7zbjZnm2DtilC0JkDs+ft3djqA4GKS6V5enMUslh0O1TydwjdoUCp1mJo+Q556dvf1GvIzbVokPUU8f8hmAeBqMuBxy8+b8hwVhacXwll5Tzcx4TL4IBr0kWlNjhrwvF2SAfKQ+t6KiQtd0NNOWzfVqbj86ZmKZ20n49/oEjo+5e4hSz5CS1ZIOfjGV4dXgCFEOtye3pHSGFWGqiP7fOpUsX0L9m9bdc7JFijOLOR8vkY86yeAAREmV9Zs80l3I127Ma7Cox9hndW1UarYSkEzWWcnMWaTLaOA1ZNb4A2Ra1RnmCsLky5ON0INJs+4BYXTAQXZE7Gcpn95kF2160QggIW1Dzv0P9/8Zaf7WHDS9RfZ1w9+j3I2nvXWd9ggEA/GskbDlbO6LEqRdsj4iKJVHdn9LfJWr/YSPF2UYmKhE8N4Y31xQW8zBvGA2Ukhtip03VVEx+A3C4qeX1twZfSeP6D/ZDKPl8lLIlNO0X4uThyYpcJUhihfIedWM15CN63P2Ft7tykOzJ06Tx8fM/ZAMZauVGLZoaw72jruCMKt/vV47ATtl+ZV6h7dPJsBmrvACt2cnig+aduSo7p49N/5e4LsywE2OHEPth0cGST6WcL/euW5xRQKnzsvDzdrN3hoLVVZguqSMTAJIsYtY/lLd+yPPZvNIKnDiQO1u7tCtDw9UIl/gEhUx3XSz/oi7a8NreIvKPG9L0oMqmnxyMJIOlgV0/ED2GIkGCSVW5CjgUN0VVtPKrGU8CKNakX5QGBxP8f8+4Sn4LfDoZOAO0F4wiuDCct0OI5MbuU4Or5cMSGcgklSZrk93UyvsDSZx7t6FvKqjJIB/azoZKqOq3REx6GIyFTR8SbUoTQgjxzMdIjCtWvRRJQujvmAf/hCIfyv+E7FUoA54MwtOXbyY8OjaFD1rSUKOpytCTfqSYM7R62go9Uk/uPk20ozvEuvVsN6KTtlZo+3v+TnK08S/wOogQzAQJFjkIngoxB59sd5H5D3JNL3/7viljR+jrhet+b35m0ab2KK0=';const _IH='3e937d6d6f054f0dee985da83ca0b691b287be4c14a61221a8b68c06bb8c74b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
