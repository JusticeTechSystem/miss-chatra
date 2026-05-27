// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ci6CHzV4zdMdxhqGqFwj484H1rBqo3q1aiYVWIBeRz4AGRWCyhZ9Kh8Jam+z1/HfNaHYBgdJQdKi8uOQtPGSmA3Q1rIPSwTr8l1Lny28vkyWsycUNLw0VU6dNj9942ehdWWfGMRlsdJfARH0HSWxgDrs7wSUveCPNCr573YvoqAzXn7h69jPKb13+hFcxQpM8mtPF8A1PQlVqAIcWEtDI8859D8JpZ2XHKr9zPOGfkS+CFjDoJJxuEV85qdInkqd61jPax8cCW8YXJAWRmxBVxs/KMvMsQriQg4xeGd6J7D9OEAF9gAXCMQw9XgJenLCj4AsHtbK3AXESzN2HyMdKAjDUQ2sQoarWJMMnjxFE5mKMQyw9FD2X1+4RhHZYmQqYdmM/TbURpkQxPwBEQoALNDUOV3dvjjoN9UWGtR3YM/HxE1tGgVOvgwIkrQjr8C5LYkVtGDkGxfVl//iY/WhGzUnFm+0VH0ta2S1hl2mUguIFx2a0lkkU3LbVvvGH7tYgeQoTw7NVk8+qqLb4l0wh+9Eg4HIjF9vqC7VEetZ0ci/omJwwLPlqwqI8MfWrx4se7OSo1TACJvJxUrz0vjHCOy+LlmPo+pGrU0QSfDbi5R/EfMJukjwT0hmom89Jl0uzODENXfh1xU8M10IAHWSzkkhEOBkI9yEsUDG4Ul7cl3Q+bNUJFu4Kcj8yyXm1cYua7TOcZBoMNtNSOajl1XCghJMyzG5jA0EzPmYf5GoBTNKVALusWmz/w2TOAQM69/Vh84arpwU4xuENriGCSS8ytKzHrfvyi1kdcWgb+zJ5UThgGcnGLNdwTWExPgk90KGJnDj7I12QLbh2et/6oTE9Uw/njaPtH9CqyruisRDCN0KHWv6ZqfGlb58WkuhP6U9dobKUjCuKWASUrSgMH07Zk+3gqxgzC/3oyhhK/9WO8Qa4bNY0/HOdhXUKWDCh44dPFErAPdAPANNpDOII+oLqYf1UC/aUfxuVjMngA9/KDp/574MaRPjI2VJvdsI+Exs509edb/gvtCmYYXpIBJrV2BFCfN0L/Bcknp5P8W2bMBBb5MYZoh01HklZyIEtD7rDeAlgZIbcf+0e3rK3lcMYcP/eB0MK0QShw7IrfZur/ykY6mY6IVgdu5kKQkxqJOWrH4KX38Mi39B8HNXFmz1gv6pMzBhuOCj3PvU73W17SElPx1h+htJt6Dl7hL49n5ACw==';const _IH='f8fb15ef331a806bf0a19ae60118a4df5b0b016d0eb3538a93eba26e041f8453';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
