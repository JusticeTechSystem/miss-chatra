// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aM5l/L8AzQ4q2dNocsboVAg9vWE+gN5kiQUbZYQr2Xzr9IKuPd0u9Vd+JEOgWzSfCINmIAUjAqSOkscMDNA4E6fEKu/6dCBBnHSHpxI0w47eAXdUAJ16uYJ5qdl0e/9m4dw5/tRRPCfMFxjKQK5nXIDRUaLUhJGfhS9k6yPGqayvgTPAtnN7x373GJuTJVxgZB9mXlPey1DZBxKevXTgxidAZ0N0QRQz59dTD01GE3XYkvJ3JLxiCC3RPRP0pLppyUI/CUZ6O6FPrQPrWEafRvlfNa4Cq45a7kdm6DGp2N1Kc8ud8RQkmaBFwFtwFQt/x/HZhSmumtzsQfhK/ubj6/hD4G3hg0RLrvDpnAG4jUCADcLDMn8eIbNcv7JJ59KJ3WVm6WXE7Hl0ipWiVrZWHVQ5xcQFstt2iGPMLlmDDADO6ZxypLQH4yHXlzYgSMOKluYm9ifbp6XJfs7niUPGJ0Gl/i+Lf0HNvRdFX8UzJe/ILxe95qRLTQjOGA8miGenVoDpEa9pvIlonf1sOWFCgkyI/xCoC4mMUKShFelnTXpujVJrGUAG+HksN5Cgf+Td+XaOht9gHR156Za03P7zLN4Tm6VDJSGTgV92O7nsvsb7gjW78NodzWMXet5MgF1waGx8ailDduWSj4biFmzL9Z5onIZzkh5cDdl4wJFcbl3vkyT1RkgIPCsYJEHJPK11cLSL+xlXtTHelj8LaidHnLPv+4GkBHv2TsJnzvw1CfWkpoWTRI7MjiB38bDOkCRNvfFzfdu+giovzYVGKFKePLOEQM0li/rikiKhrdD75nf+EgbmvJZLuAnGIc/AgcCAXiWgcZ/gRpl1EU8LCimDgUBNIZII0GUanFbZEfKkOQg8KxNdUj/NLzFj97tB/pL4Fkab60vUOv8zn5LJXgxPMA+jGr6oXA2mk5aiV0wwP+0emzBHIZrAB6kFe4gj/vhj+xC3u6XxTeYwrGrSp4gIqDh70uSnDj3hO1XDHgj+ncKI6CsXxkK3WkKad6/rBOwfyA+si/jJ7VYZUdYkAElJm5lBYTh4RdC9ziRfpJiA0Tk38R+OPcEjk/cjz2o3uLZhXcy29R11OgxF44NTsR/2OD6sylG1gibzgPXU4q1IGucvgGdbaGRFAl9U5tvJRvGLp0m/67lbKNYNIAEcPXJCT270dmWIY0dHjyLOnSY1Q9RDwyx58ZUPcKUrtvy336mS0C5/ZeiwZgf259qCvpq08x8ktRimwKgvSB/ATn5LCMm8wRIDi0rvC2hJZk7pCUxyuEU1xDcysTHnsE/Hehpz3gcOngmf4/UBoDRQetHkg8MS3wy5rIYNnNY02aNSFGtTGcBxW8+4ppbz+jp8E4TIqktgT+XGkyOyKzKqN/u88kjM8TnZcN42zq/xZ/SG3bws4ZA=';const _IH='6b2a97de698eea4c9415e0f4a07db9832a33a98f81f566582abdcf8ba04ddcdb';let _src;

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
