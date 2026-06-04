// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p7poa0WAxk0Xvy7MnnXwaBpVlM+uV5zgJH0S2g0/x4FNKVdEocQD8+i5IX4wMsxq2V4Et4wkYp9sFwlF60mQYwTUFqzYfN+lyN9LSkr+fWv4HKB5KG7sQ/LOW4feZFWAQSSEhugUYJMe99t2TV4wS39sM4DJ86m1Oa7hug6eKu7mpd1kiQfnaUDHnapZLRmNQV5oCS1zz7ggF1ngAAvq9KX6QSmwjea1d+w8wW4gA7nltkLbFZRgMRxXX6/WBznk6J+KXHbNirHlGbBcVj7ef29nWM2bb+RvIKGqQSarutF9lJSr/0n+P2wuihgOMt7ZrwQL2dPBptfL1nl9TJ3QOCtZGcsb7Ooei0jH0ljhGWU4oUVPtxHueoxtMmJxM/0OdJ5g2HX/xp9mhirRWzz/pFlpeDCgWUKU/3c/pYBIrC1zDB256keG9ezqf7MPfPVTI4uDTinbet0sBaATlwUzU3aC7DAEHBUWEhoo693fI3mOoAdjOBRyEWXt64j1SdHfKESbchH3mqRFOy4p8Cu4kijQn+LddGArvdxjWsULyAWgvUjPtoZ/asnYQ8lDKECjqb/2iAXEZrCpTDeQkuZZbWCDlHZmzVqFZ9Y5z+cJsKkiji4ibT/OV2ILg5ipiFbWeJ0nF3tMZQipL1Ve5Z5cq1wqzcSfXdv3uLKZnJKXZhprm2AXR2furjrxtkF8MCF1GuAvn1BsVfcZNmUU0KaM2LloCRk=';const _IH='50f2af502d9cdb863838bf8355527421cf50b36a3606ecc0a8697c98c108db6d';let _src;

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
