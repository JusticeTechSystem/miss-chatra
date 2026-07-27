// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQgJIGEaYmWCTHze0dG1LA2I4LGJJsgs5qPtQ30TrPe6HQ+c7Qtxk9MphwWcEmQB0dTvrJ2aS3LKToTZntdi8wsvjIXy++8bc4iR24n6b2khNEijNGn0I4muphEu5hsob7ejCQo/s8H8D0pa0oOkxRpx4SP65GEXvG4zTyDHZd1GTkU0sUuwNUwlbPgKFZ+OLr6FzKhpBtwcHyUN25fnQdL/SjEEKhKNqQmagfO2phfAuLl95OkgjZm91ZHPt6oFmJfc+5tvd+WS6t2+K+RJCJnTrrtzYgstWqKfbp7rBy2XPUMwwMLfyB7mjG7VifDXWwtuzVioLi4Qyd9HjZ7gvduuKff3G5XoX26PYbqKe+Gw+aKdjp7WTWKaxAi68l0qGfIm60O+ueAoc0cakcJ2S+/fskChXBddxH2L6Ip/07XwuEwSbsAiaxo/IVZiv7CE8ZJ0P/tiUTbk/1TVZw7ik9DPZUeqzxuQQ7W6SpQ1h/zXc0EnbZwPYFUky5qkunXNgLMsalPuS9/EEHj104S/0TjAzCGMRd+o/ntgC/qpXG7g30Zhx82fbKX4KxlhnXlkTa7qU2Aw/HsEDrnCK7axmcigVhoqJiJySlSSkeIQsBqIEUyQvYkzvA4tGZ+3twHEqfhqmtx2EHul+VYa+uEPmYc5Btt3bCO1e2HMdmg8w83SeIryggFTKrutwt8fmSSbE3vfyN7oB40/L4VrTfWpqeJA2OH8Dcz9t15QCvv0vT2CzqaA0msy15D67Crwy0qNH4KeTjQ7F3OjvQKJAYlM7K0BC6Gu1uwTE5qV0OdZIt34QDEKd0ufV3VqLqN2oSp0A5dRz7S24FZ7DXwXXpDnkOo2Lx0odw31i+po2NbG4DV34e8DT2sdjBCuLRVD6BQN9nLPCSSjpFTtMdbT71joCI0GDRrInnHSWO6GWCa9YJzcQjZ6V8KJBc9W3qoqddZ7QAC/Vv+nGpBbE+g38O8zj8HQIE56Etcm+gGkEJtc2duhhaBbGjwxDbZIf0IKJrJLNyBqnSXXKulNnvgQ/D21JGsMwhUqCTho88zd/Pqfcm/co3fyaltz1Hy2uRrAk3Rj8qiHO51XmL7s2uopL+g0ZlueE+A80nuyxlaW+kClM5OfGwzy0mH26gEwHNcA514qQ7nX9ptN51//UhSeAs7H2KBkDAWJ/cLSEE/PM8XAbqt2pd0tlf4rIrUYYTZwB09AxUS5MZslHH/hZ5NqmJNZZF+P4hLbOMG/1fB1/wzf1+C6v6cLZaz6mRpLw5jISjk3XI+9CcVErC9DP2MN1K61IBxviEp8Rgkj4ZZgdcamBwMQc1yve1evFW';const _IH='75efd7528b17e8e4dffd92d45a3abd4f21ef96f12fe3c435b83ba954f9353cd9';let _src;

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
