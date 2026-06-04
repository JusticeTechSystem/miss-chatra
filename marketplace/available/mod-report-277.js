// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xt9bBQjIVMly3X9tRa9X91PffjxW/KcAGCBc5pBk6BQmpD2hLOSVX3vUhXREcicP2W8uZkX8gpcX5/GmkcabkYMmqt/mfeogmkvYH20qKzrRWSGF6A4QofYmiW/9Be/MLlC0BY5wbG6vqB6eT+XcBMGvi9Th1VpdTadLzUnV1Ko7F0RKVU0+8mcZso34n9M02U9EAbm7Z79higKq7VLZ+VKBLCLbNusFv921d5O3NU5JS0HBNPJ4hYKWsvIah4tBDeTOtYw373e70HIHitgp/m50guQciPgi36Y2je3lCJ+/8kIk8Q+xs9RbfT009p05T2m3AFPqozoA/Hp7p4kyxh1TmqmjDnrr+tIhOEYDiqU8Cy34Wcty0Qw15XXQ5OEe3t54EB4R1FkcSWouWZDAF2i2QIbiVkpqclEnuE/zhka+jgHvA7iiKt9f94gRtaduDwmLcuR7RUlfjfoPCF5r8lcAACJaFdX9WqZcDL+S8dm0V1kQjgVoXzq+WBzbjIBwc/wN1wCLIx8UsPxTmcTmXXmtqgyG///hzkjUD0Jcezcks45pMrKR5aOZKjU81HRzAoK+uo393FjtZUM7NIwpKu/ppm9/UldFXVzF2isSkODIXIgiNZ5f7RP6MCF7vxJoPR19IYntcuHneUO4KZgSUbGfOotHsP03Igu0ckDNB7i/yjyDucC7t2NwfBkoVjeVJL8wClKoEFSwePvLnkwlV2jf2T3JlGWVGLy3cOfsOejrzciCeety2JUP2/5F/XMAiqPFy/lBUSAtU9M27BJ4F2sDw1QdakPZ07k483eY8n3N6TL8fY1KSBzkEX2lUDuUA8pVpk71BO+L4ojGRPZ50NQuDbNkxa92F+bxtBOcopgeOUeQAYkOeUh07XusOyTtz2ExZNNFav3ZDFlgXDTfSZaUXcU+xkvxbfQJex2OnKSCVLShXMih4AdxYI1ci74cKvfmE5Jwo23eqcKi6me8ysBYrpAqKKbrcrMh537vOak9UV3zzlH1MShidAbFfizdnCU6dQd/bsNjDxEadZKdRX2DcHwL47YDu7qWdKo6LJtg/IyfO0tnZDcMB0oRk+aymIXnTr8OY7A6en2NcJS5IUESQuDQdORSWkEsfPvsl3E2carwSP3oOwa7QvYlfesHYKqP5nobZ7vVlweQfumkAh7CFm/fhe7ENXYfdQ/bQazug4Xvz3L/nNrSU+f+csjcgZLLuQ5dJAci8rBNRZob5lGWL6B9ZnMvlqlPqwR0+ZZPUpycYzzovnitk347d5HVXGXtbRkhLLb+ErUv18WvMV+RCn/kXt3gtVZqWPOBf/9bLDScXJe/OO2orjj2OLUlQIvRlh8EdgHX47rAG2ghsoVz4mBqn++8GmRn2X1CJ8EwwIYtyrlZlA==';const _IH='f8d5c441f8c6a329f1c8a9508b27758ada96139af66fa4c29cbb15fdebde7c12';let _src;

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
