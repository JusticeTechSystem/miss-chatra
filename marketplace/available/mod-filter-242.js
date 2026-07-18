// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAIl59ajTlS0FDuNicqGvJwUrfjIOE6z4ndxkIU5rFxYKuNJALrmDQny3RGi3rYNmKYusLzPUhS1/FfxVUUQNplYiTPGZwuDbwYf8Nmcgs8nM3XFGkL2cAPnfXbHDGX+NUB/WlO8rtJCKh6R81Nl2azNS2myXrwWhVnJqcnJxfs/je1g8wf5k93GhswfeIhnRQF0l/uj21lXCp2cD63CUFCYEShS2/ihY1950iikum/MJUsIA8DRHOL75Rork2SZ84rR7aBfX334dNodzfFgnSGJE7/2VmtH1BgdEgL1rTJ6YG7Zimj8xFTia2xDIB0QwDvIEk5JaMImL7Ih6Mqz4VSoPP/U9uFubtGICGUjMBWbrh53puCrYLQ+V8pQHly43TAQJN+chL7f/h7WJPMJ7NISMwecf+/sEHwksndKZRUsHFGSKSeWJ9sBvMd3enRnikgNEmiBkeBKZu7QsslD44C36AjUQz1z/5Yc3quuwFttt0zZDR1XQ/QL8gRiER0dm76LI5zPyr8bLYO5hLTRfEBYRuWejr1EScHZWk5UvzmLlbCvi3B+T+GPyrmCBhgdfeNt2ZN+ljKJoyAMKv+DyIlePHU8DT5oQwWf+yPUWF+3ZOwZyDpVehsHBu/eQFxF3KEBUlNHOt1g3gp2hEwhRuN3ZrUOw6r5jupYibwrFZ+64/P2WOkgi6ud7xPoxyBXbRaj+4O9ltKqacUoUjxEz5dlF4SjOzAx+o+Nq4AZ4Wltf+B/cf9/986m3QsfZUeCDXL2l53avaySYdt/Z1B4ixUYUJUHy1DjVTizf7DBKx7Ae6fotgvsdebGdlMkF/rhLf2BrzJ89hi6WFLPVcIBBIiCyyHkzqGCIGMh9x8UpRorGLVewIa9ScnAddw5n0HRjcE90H+/iTS4onPl0FQ3GVu3cpvcNvA7s+hPkFcBiOJo2LVA8lIf5ZcFkKCNc3XiCrw/67cJR6I2S/Mu0578oOABhuU3zq7MQAWnABwgGDvPMr3ymGS4KOGswVur4SpCd5hBJkPlji8ZG3QDjFSrWxbGDTXJLGqHwvtBnGq3Wxk/7fmcV1vnYcgFqokDxB/Hm+bt45glR1OyVq9XV2p0OtZhT8PX4AKTxZ8CJZ3HJ4lWjqnFVeRQhZjbxUKj4/lji97+SsRUlu7v5WlF9FDbOc4kVRjW/lw8307fgVhF4+fPoVrTpvJIqzmDkfriGKsKWFbNgZF1IT6/u/EFDtk47HjMLRfsEH4b6BdTMbwxPHc9Ayjv10Pq5LwsrCbxb53nG2FeloNopeix9k2Znb77xKdwWa79ATPruxL0DMI/RnJWgyQG5OP4rBUiOi4tN+8ql/L2oK6trzy1n1WbqKtfXq8qhKNrOD1SmreRcd0ntW6OXNE+c2nKfi';const _IH='1da8971179239e4cb73e5ffc1d89a98d16420fda24f30d0f2cf91697be28e1e1';let _src;

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
