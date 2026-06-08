// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k0Zkt7EgBEk+xM9twldChGpvnZTI2+60BUu1Tc7yzeYY3Bant/XUkSdYBE/25nKLWGBr7tpAhtKjPKo8cM3yj9ljvNcVFzm/oCK5rgVrlj7FPJ5e5xILQqPj1Gf+w3Q6LyZijYe875OU7C8pn/RlTEUan29Yrgf0r5uxkaEcYMDzZMb52Y7UcTagg0xVFVbyBaPmCIajvcjnAAw9Z0diz+nlOCJRTVllLEpJiix3s7Q66q/m71OxQNUlqMtek2J5nmHNHCVrkdje/u+6aOwY3/V25n1QQUrlDu+yJ8amYiQL/Xh3pICOa5Zs6suwgUpBobTsccv15gyUfNrzcGIYZIbiiclWSbFAZXT3v2pNU1BkhnGG/u0kWWEquQNf5L+22U50K8NVJMKfmQxb/04LtMJMldT1NmIE1KKAc8JkYQGdvOl3uNwuLV2fys7fzQt+0FyU23dvclORNr+fFlx4n/TOwizuuXk6lpSzwPuLcpFqMrri812lnlNJ5AKTxikKQ6M4PIxSisuBoZ995GS1o7o72C7g/z5qSoLAvflS8joIY5XqvGsANTypPMduqhG6sxXzBbroiEQrHq/wJpwlVTViqUeANlJZgGC/L7T4qSNLaB5C9llo7kMq9iknk/+MeGzZWgNCn6s9mBUkfjfqe4mtMQv2hiPeWl/b2Ua8BaqS+YYAG+MZp3YibVMrVGrXzR0nYfnjXJD5NBs/Xb7Uv3g1ufhGoh5mCaoX6s/e3he8KZSl3ZuDXPv5/tCRBsmCGgrNfIZsJW3KAX4TZlb70THH07hj4osVlDUjAnivU7KJZiT21qVjuVvS4ARcQNKIVgJoRfhbdV/Mubt9I4yYGANXhhKvuOftHToLw1T+A6AWCWqZrAQNjFDP4PxeYzNN1mvNg+t/2y4mTV7llmXqC+xZMLMZ6N6aAjpb6xwja5zDMxcrdjVAq5/5DT7LexwrPzxuNxGDMnUtpwzKaEhhO+HuBM6vxFDbofCNKmRreounNMcqnT/kYszKIMJ7pUjIWzLGBqjNhkdKVr0BuNYUQTLnHUAjeMSd5gFrgZ3djFQJOPAv1ThcCrs829tMcwdHoKt903uKqdaxvu6xX6JkA5c+Me6ylUhJJiTNbABWFxyOvSBTsU7xezGCvqfxwIZ7SspQn7PevtmdzhCXDRnW7W+vHRVurR0GCvLqpWyQtSZPOleo9Cem1wVMygMCzdy5HjtajyCDmgy5USaia72+g/ecZ8PftOPMwQ3BxnNdp0HtyjEBr4p6u2fDwYe3';const _IH='8d70b7a2e3fefaad4e08fe8e56a974b6d2a34593dd8a050decf1e0b75d38b2a0';let _src;

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
