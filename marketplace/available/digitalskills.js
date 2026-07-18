// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSByV8y5CPvi14YbvtfLEpDUNAbKfY8LOiLmJx4Y2uj65U0KsfRpuYLroZPxDBpDoIHI6XTfd/GKmmL1nd8Og3GRw1jSy45cNZPjGCMDjgFaixi7kQyr8AKk6z0SnBt3BbQrWEE+LIvXp64vdFFJ/h5CSgBd/YvJlUx3qGZMDyDwyukde4QfJ3ny6I98zRTVA+cEtpxaBzPVqa92twrfjB1I3PHcX23cNkYu+8U+L56uUZMrYrbGwM3QEq0GQwEgc9X7717vWelzfgBppGyBStMd8///AU14ImjRUi3c+0QCV8H23lKmD49Rhz3kblyQ955you/jjhwOlxm/6QF0JgtQiGywXqOD3UhfT3lJi0WebgCq0HgssVabQbGKDG9NlAZycdFNf9XENAThrkdyACJ+WKRDjM8oE0F42j1cxLyvSrWCohrCewN9uoWPJkJ59ca56GWgcLZxRiEB3RMq9UTAGudDtq1d/nwqWuAG/A0gG8K6DpxDLCcvE3acp0WYBWc4QCQgvEykk6MonDF0KAzgNnniI5LLaS66ECWh7es42uv8yEZhwaC5fuAjy6Fkj3uRBN1SrHWRMWvqzcDKvyroaYJGwO/2bKNvfBYN/yWyxwAnHLcer+SAVK0HStbeYBHsvkIh+5CDYeVCYoflNxQaWdA1REFDO3jCbTIDagTxq79DkVsEFFFvazb8X7aaA4aW3TLFXAFi0/QPk2o/u5mrDqO5lbmxs6KoOUQ72DdRyQ2Wgvdtwg4uHUPqVcz21zehyWO3QXNf0EGZkerYiIc8ifKQVgM8jvGLipy0zcWEr5l5KkGFlRDQa5KKH2gBKqbuiYOA4j76gcsR4/cAnauwQViLSkjh4oZSoZy0yCUZGnfIbWx1hPiOyx46L5qqyokN/JBH7NffEl5oEwPnMpIttzxd8hrS69RFJwG9AojJkaYVAuw0ibVX623f4YpFfT1u4cNzj4nWzuEZxvukc246QZkLHGqYfb/jo3lc763tSiZUilNUAGq94H1nsOZ6o5cfJZR9Dcib1ZPMM7uXvkXk9NBZA7S+Y7f5LwTJr8Rq7LEbWZ4krHkC9HOKwHyoT99NtzC5B4FK6Bgcou0R24i9mfVDGGm1AEA0zZwN1XIo354rZoLT/eLNTm7kRUYhCB8dtexetJr8vLddypX9euip1ixFNUe/3hhILYotrmOc5gToc20msY7DLAVyok6dsSdFN3FE1NybiNlRxqzpg==';const _IH='637069ed39d29e62961be3afba6d7be0b1ac2625a07312500442a4d7906b53f7';let _src;

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
