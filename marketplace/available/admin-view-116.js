// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XKYDz6gFig24XAKVxAQYGaIhABoxyha+wSZDA8ORejRC3XPBGd3rhWPQyHtx5aKNcUDCUuFaI3bQROMe5dV4/X+a/6fSjQW1kA9K7rEDrelpm3VexO6qufqPKQNzgJA21w4TQVTPUgf6tjcuKAPOduz+rOe2ETMi8lVXlCFZOABB6csuldyVVA6Yw/cJS1kIeMv4Sn+yh23iP0PkKftHmDha8QCiUgniCCt0OBTYIVniZ75capVyu8sfrN02zj87LtVb5GrZunY/PiC5imcl5Lfp0F495x2d41DJfAJoMwsnDpkyZvDJhtnDrnL5V/m8tY9Tg1NSsobdx4eZ5EClC+FDQ7/a0RVS2iGv2dsS86YzOOT4kX4qVXsGl8aad/XLFkeyf8tBF95lGg8wBmrcNqfIDqYTMxWZXS0OHDnUfrOKoqpkzcvvnQPtV4f2bKIdF5AWrmEu2Yls+LOLRMHGIQBXsv79qSKcpZEvPpk/4OCAU81YpZbtVyE5mgY6mGF56OU3A4LkNgzaTsUCsa82MiRQKDdwQQgm1UvS6KhgF+CArLa+zEOPsoHzGx+OdJuzApsU4nL0No8JlYHaySVz6kT97eqE7JKP/KfXoQXh9Mt2PVTYkThJj2VbOyXOoHRPEdKjPR3klzq9wA/05FURCjtdxQ5acysuCevbn3IsW5Hn7ERd2rLVMmAz+lIsCvuYed0eiNDfc20y0aGr7cCohW6gpDKBiAADdc9HofFSSVxuXzY7UcqWFue1Q8Dm82tdS0y8YQaBGWVpa4OKXmo4fvisf2fBNLxZIy09H9b1CTy2nJlWKrcj+7j8Ujdc+VQ0xJmbpt/dAbpc4fosuugJUbFOpdenI/CQN+khK9G2UhOslA+kZw9cQKTzqe5tjRlffQ5SuvyiTfJGFqgi1ee2f6Jz6UAYaBf7lOhdeuOAxW7wyUoPNCp+VyzzZy6yOm7nf2ZXmG4AMOFJXEeosXiG9OMjcSATS82krChtqVK5nvdMLCw=';const _IH='27b4cdd677e0348fbd47381c7dc06266c7d2da822c2a6aca9ad9100a4b591d47';let _src;

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
