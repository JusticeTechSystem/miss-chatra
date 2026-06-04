// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8bxlkbg+pTbQBq86lAxfgXEqi9HAtJbGM95NBCKFitd4iaEiWAwzpPUV1x6GXY4r5pjIpfJE/G7hfgMCur9BVoy77hOY5DTfO2T7xrF3MaFJoPMnCuMqR08Wt73yRN/yBzVU/nlVKYR95KNixzdt+p8xC2JVvhPvmnuKIvepKNlAhb4deUOP8olb2wahymgbQ6Dg7ePlyZJx2pUD2jIpQkkpXzfaRZkpsJcMAfs2uEjpJCsmjIW4LOGz/eC7EK+BeMz91+9x6MvShoJlpRwOtDG5MboGLAnn7ipyLy4lH+04CnfT1KQ3Brv0I6wWvl4oeooFgU9sMQPmqI8nbHxfG9Yg18lzjRtC+qGvny44w0wCNW6N3S7F+u5kjYkqStP8sG0Ciu+dkXvIiQnG4ZrJyliubgfNLDOIzV3gZn3imItUkq6s1btD4qkwblbrLNBhQI4fS+FtgxOt0LbpUsJriuexsfl6B9ClQ+hRokbdLpWNoPf8WEuly7xiB2fvXCsuKkCKHrbP3rgVOE6f5MuuuG5defbvyPkwYmneh5XlTzTjnizsCTU2L3YIM3DaLWr39wfd9z8cNxwY9EKJSxxuxrvssidktTpN5r/Qe4qV6+dgfDgmiEe4FADer8YVgslzDqcqEiEKCKngCiiHpNSjTYKINKsGPHupr/IoWQpI2/Ul7eMw0Z8uUqVDuyXO8ALLKlkdN0UYpxo1MTp5c58sjZ7wPOXXtSL7L2AI3ICG3+mF26C6d1Fm288jekLCEX6HHqmWwU5+oTzwbopkyJwWkHPZNB3Ur1ts5xMo4eH5CVwslwWu+c99fQmBlkiwXff4DVPxKSvt6JwFVMjFBeugkuHwL8Jz0vhJhQt4kqEK8Ql+yOTKdiSClFqubppLaUy41guGRgi7DmaqCkjoRpa1q6+4ZeOxbxwyBTAO1U1M9FliLJzrUD6jJKJ8U8LQ5k+6onqedpR5+inQYz3mpcCWI9D2Z5qU5eAowVqVaa2XBb3Ifh2FzhUQMJ99fIT3syciNvRsA8B2KRgwdesyj8c94SQ7RxJ3O9Rn8uaizn7RUQaWcjTH65tLYUNsnyNml6+K503Wt+CP6y6Gx5ETq3KCmTD8oaNyAfAGfEZozI2Oj2duWnCurWHlGw+HDEenlsbjgsgzktuPEx+pZSnLF7tYJayABK3AbDTiY8C/pDhc8f2kKoCxOkBy2z07v0t1Pwt98AZSXfdn/uABNc8WGXQbtQ==';const _IH='a4d5f408f9b11916957dcc1be31f66e5f18f653ffa5454ce09690ab2af6a73f4';let _src;

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
