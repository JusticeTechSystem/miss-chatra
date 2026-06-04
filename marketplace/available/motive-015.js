// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kYt+5u9qNznWDy+30/pdJPvwWal3GCTvfEDWgg1s40CRGpiJNIWmw2FQpaDz5b1omJPMwQWAXeVktkJopiamvthr0gZRHOCwH8ryOYZX9yhr2r4hyde800i+OG+tKqNtE+zWLPenmBPi58oG/qyjSALQNTxk68FwWzfdyL7ZS2BDB3+Cz3OXnLtf2ZDJQNcXnR1EjUFnaHPG40Zdydld+FbTjP5j8t25rOzLivtMdg6vC6JMvs1rhDjgEFCr3eou8seKwMNvjh1uXq++TRf8nSbZC5QljrTM0yZQJJaahNfg9elWbCd45DUch3can5iTnJvP4kkNbIaGOM2OWNGqMLmtHwux7wNc+ulwlPES06fSMt0eNddotIqptcCuRrJO5f2tN2k8uY+xG6NtaaLCJEFDdBBDw8AUbUHS88WUxdlQ0F2xnGHomaomRbuB67eETv4bnqP445FlMY1FleirdGYdM65WxQPYUTKoQKhtG+hhfi5NGvreJiWRqGrzn4XInxikQHeE6g9aKibelhGZNwp5sbCG1xYB49pnlbXlTJLMzBqVz+zrAjCX0d25V8phRnu/Op7txGN47rtwLZGY4Lzq+Fx6j/uC0bn3QlLUZX8exBoiwiCDzeMdgPqXhk0K7oqCg4io+U/YJDe+44L1IssuasGMpdsPlBRu+MwCyvfkuyWgbITK/fl+Y0QbwEKEfgjdQr6yr+YuBXEOdCtF9RU5i2I/W0jqO6zv6CDfXLuXDiyLoSwt5vdDhLJCAxjx4ZGP4VLzPAzZiAGjdJiYGauMM/LJMnjS1FrcMsRD8xWUZeNhEgfsebFjryZBqgp+n9rGDDoPgMr04QwlA+JsusPO9i86Q4h3AESsGACl1spv0S55oZ/UgfyEYf/Rhr34c1aiKxDVH+gCc7z7LxJ0NGmeSfX5OYUmpQ/iQbPRi58CyOQbfrs4NJjbah33qedOpk+5Hu5ofJMlFAsBlXxZZFInxhKksqtxj67TSHOcMt+2waApsXy/u6qKyR+Myx+eKpYIqmLWlPABI0D3Miy34SBF';const _IH='5682deb35db868806743eca268b013dd8da6f053b4e30583bce0924d1642dd05';let _src;

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
