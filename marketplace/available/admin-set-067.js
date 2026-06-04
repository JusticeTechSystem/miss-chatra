// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fUkr1UFgYJyH+gmIYP7TE+YSBoxHKJ+F9VeBNvTLX7j4mpqUMVsDJR4R/5HmaSVa4MsY7uBWosndlUv0TEVFPF3iBhY4Q8NqXl2MHSeVADyDBPhUdL3+GYvW7bfIUAgmPEfy6oUlg+PpdGGjhi397S0EB+1KS6ZYpRJkT9YGdsrecYz3+z14i+9z+Zrxhl+rlM+frGvBNBYnonHpU+BNIS/MbyUwPbrc24Ke4JT4E3jCx/i+DtZTqg+s/PgCPhMib8SmTGFkQnJbGDmywrY8avuznawPh+HFkFWpafsRiXrOm3pqH4hdzlbjzgqfjVUJtAEqwmRCP0l/wP5CE2SgH+V7LNOgVR248u8BanIrzqvL6X2S2+OtSd+2epXAKG95FY25hQBCOn4FkDIb+Q0uuv1DORVbr+DMr3mgEbgT+jwCTGnQoFGYcK/+c2XlG2tAWwrbjAa7jM32mS0xuxzy2MVYhgwzrbQXxbV8HfwRhZ/YZpKZ+f6TGuEFWUgf6Cvo5LtTm1/cM2XFv9iasBWDS8wMln5JQC8QcAe8COBYOFJAGQB2uZtO29qQ83cu38PIF9ttdkYpJtuJJGT9D6zjtD9wx82bH8mM5kt7XlEq0UEZDDlb9REflsJt7LJULgTlKt+qMEfC1JOJ0DbriUIozhYo++uLJnk5eslJXujCn1GHlUSkI9t0V4E6hhOjuT6D7btDQ9xvy/l7wH8vzpYydKZ1rlpK/ASAGSIEAGH8VsgsiaeKD6soXD7UK6qiDFB2uGgQzHQwsBEBbyRrSb3VILsDvfe55nrUB9tibuAwTQMFElQXdd1iqSDQSQy36uzVgszhJcHhbt8HDpiVBNC2AJgvtH0aXONV/bFPuU9y9tTSpkmZfqZKbITBPjZ14hA5dEC6fAmLTCyfS2NenmzIFO6xEXKv8ks7v6mk8XNLqWmdFf6i7yk1rKeRlosWFtIuO+QqfBbjeW010fsJONjHh0EwRzxTUJS';const _IH='549e8b25b7f73a9421014be069c2ca1b6607d89b52cbeb3511843410c2f8bd5f';let _src;

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
