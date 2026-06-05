// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CQ7KaroINzZIjUCBDHNWWc1zNZ/V7fgTcujTtO5t4Iq2/tlxGXKPUlFx3XAJmJ6GZOnSHW/7OEfOsuDO1J6lo0+AVXWvJ05VpfXYW7druIYnnXgj+Mc6v4u1pW/o1PjeEXVR0Z/Sv/ZGEMKsupQS6C0Dww3nw7T71HnBJr/Vx82PY+iOACOZt3dEq+CyavtMsHVi0eqDMEg949t4xBkO+7HmqG7/nC+z7wmdLYXeMcu0pFSM3+I4SfLf8+KFsg3V8yYqrwsD5ZY+x+HTEUEWwN3Q3IhTD3yOJfh66LQwYXQDaZW29LTqeRZ0yoRSgbOJp4MSgA8A9F7n2HqI60TdtQU1hCqPlkcKtKy1bHzZXTGvPdd876hVHGgSw59CfOQlU08sWdS+tPQo9X5Jqd48pcFDIHQsEhvu76BPjtSacEOrsMH+OZWY3Xh3Hw8Kv8nRwEM82RwUXpjWwp+NQHV+1ehr1DTYPae51prJ6o6Ldd3oPU4evJp8S3QTT4nQ53Xm9oMBcxwcYvTbcdxF7neW7txiZ/DccYpDzgdg6doP1s9xO8973Wu+RRw4GOzplmYMTQdMNjtf+3AD5iXaBQuWDMgkO3Y3taBAB9DeXTP92wznrBZ2p38giyS23HvZxVHvNZzZmx21yl0VxIaRE+aDK0Do9ydQYfiEgazSx6y0scVqOXU4IBbIHsibL+lI8YFH2CKKzzG1xZr2WBdWb18jHuIjarxPCvefNd3WkY+wyXBUnJiPvD/vS28kmEHrigCT+rvL1788LE2UQ48MNJRzVdQEJFBd0gy9GtPtToyGZJkrQzDUNtD9ue5KsVE3878duw3k8hswj5NYTWjCyk8YhCTSjIdynhepgbp8xaTu8f/4laqCDprQAgRqNAOUoHsI81wCEuc+YywNYd+Itqz5n5ZrfSxXheNgKbGwD0NVCysk9zuJshXa/GPLzYSKXHTGo3CWac9JilVUKN9JD1kPMEMLszxBG2CtS4gtBnS4LLQ0FVIqSat2By9b87bNZ3ZV6iISMA0UHCRY24a8xQMo3/BMC4O0bfaNr0BxxZGtBdUhAplAMoWzjXYbDfj9ezPR0R6YSsDz9P/KNXusWmLRyBk1Vdxhm4tqMHjE8OXV8tLv1Ki6i4mjaf5yd9do1VQAQPQoTO5/3L0Kuf99uV13D1YzZoi8ryhfBO8cawzLfrX712LQb4w9iOl53r4yDP6jcOGIZw==';const _IH='c090b6aeb178d83187d1bdd6672ea4210972c3269778c0897a9d3aa68aee8dff';let _src;

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
