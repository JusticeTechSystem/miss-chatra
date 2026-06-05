// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M2e7TxFlcfXsXOgStojaodWJxqGYT3+GgWV4w4u5fUYRBjMRWcwV/1VXs0jsyLfS56+umpTyl/+72+vctCn02A5WbJYPMLeEVBpy+I+WtxXQUDw8DAn+TkcsKZOUAn3H9sxTLPaoAFiGY09KeS79eEbsL99EFil/bQbhPu3wBMX83BWRW4g3TUkzCTiUeclGZ7trn5pGH3r7Po4qifyszTP5yKPlUm9SgVr0t/FNehAQaEAsNsrAV3cAl1EAcUUb8NMWKaDVKoOaAeXidbJYr/hQHyN2s5OZNH2/bmeqPnnXWFxFVbPOXI4nwqwcuf49JCfV0ynk7kIth/a5LHGdSnAEQ6B9+N+VBQt8KctI3+XLL2BZxXkdDJYD056ltX+Mf5IArP+YU7K8e609crKAZUUKWCqk6YLMJjBqhxWuV0xAySBYc1xSiCLESN7Ck2wmpkeJMLHgc5zFkFdv/nAgUviQgmwnZhshZs5M+z/pHNfdlqNtLj3iEuRcYcLbHfzvOVtgRXunFG4jaaM5ynDT93/ZfI+L1mp4lFU0XkKHxnnAAYQXwZr/IhKQNx/Kkf2itngALo328voppaISTeqJjPnfIpcovj7KVWGQUoEgdRST8qzB04us4JKVlF4dsctgRlJ1XTpey868Hb3M5twMyBOkDnYNEsqBzwKpKgu9S+fZVnKcd9iPedOe8JB03gVNsuaws4PNvaXxbPlXqySe8wSxSFASV1OQqhKNpj4UjI8pc/ovXF/z8QHT9NqhLuq3bOBZAgY3iSGZHPg2tMCZBnGN9GkHMcZFPtVBb8YZU2Iz9mKQ6DmyNUGdZXaOFuKmI1/XjGbuP7Yn+VuviyCZc3e5zl5IUwfnUb1NKab2drSLGjzui2So1UXKS4yNNpLPd1Y/fbIyKrRw2Axyqg5UckeBp/JbpGA9qLtmem1xlmdA3cQ3YOzF7ypZcNGbdNqC5HkWsNaYtgUWQw07v9x49oCyqGGe9HWxuVdoexpH4bXVxsEOl3DxuSxBZlQGJdxsbLTLBerajXYyt/y/M7W0Gvy88qhN2JDdWy/FMsrCKf00QoUElu8rHpKA5OtRqomRwaiGbHKzYuOFAt1E56q5/qhObjdRN9MZ6k255L9Asx6hjo58Wxp2z28f3T/Hb0SDe/qKQlCpjqnyK+mBNT49XMqovflHVSzAsc3KPyf5VlK1wWJcd8LgR+h2PnZMxBrW7/COplcPBO/y7WtDpv1TAM1ua4gOOJbZANWUu9P8qTqU6CUBtChds1e7ToL3NpckdeSL/huRTWrKfXW067/U5oNNpmOz0beJcyaud/+0uU4l/i9Vp71QuCwDUFT8q8d0vWQE9yKOArBQKsChwStA2MMmP1Gpf4KZjI4Ni2UP';const _IH='41c15bb7f223958eda6f6c2f6bdec01fc2f616aeb7817cf394403123650223f3';let _src;

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
