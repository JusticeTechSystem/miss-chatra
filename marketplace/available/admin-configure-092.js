// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WuMXQYMEfQguVkDv3FqPuC378kbrTJo/6w7698mM4inhrI4RDIF9lRmeGDst12XbmOyAKHgrhCF2Rzv3OqmiVU1m/zrbR0cbp3nBffA2v77KLPCvTVijCWy9We2+3s663a0FCoxBuYC/+BuRAiVahKCyYFPMbr8CDRAGhzsVVgo2EikaX+fvS5kTDzPhrggnDFrt1F5w/VQ8/atuTPnhlAsWsJWSow5mNUVE7zRGofif7lwelhf0l5rsKhiL7uEncTb2aBzT/9NLjTZD3kT/wK0MEO761jCD0m7Qz+XbgQlY6KluxM11JWjs7UzsDeJINfgiW97TF3InbiCn39OPNe4oosRjfKXxFR6kjrQ6KdSiAHR4ZtDCXKX8ORL2ilJupYXpw/w8CMZdOE+zv4dgmbkYeIQWH1++QsxZs92TL73Ok/O2Ywvt/4Ecf0VylIP9dCNQPAEzfD9O39qbOk/6pGaSqs6JDhzdPogeiSsXeXJnEDsfccB7+/o0uIdNNt6mtpieCtlLNq+sEjcwr8TM3LztywhukF2govYYgDDm5YpYFQtkRy/Yw6r8lAev13UAO9e7Al2jlmNRNdgl8ii29zrxSnurGAR03edKN7ATn8ne8xW42AA9/J9YpWQexCadlI9bUeBAefehwaFG92NnFZQFDMQunzE9UHiWr2XEiymsIxRYn/OKxUUG7TLCjso2FkIUQeRqAxpdFuRyX/dG5hbWewe4yHSvpFFKxJsOXKfaGOe5V7TCDuG+KEBdYZVbdnMslCAqUEqmS+9bhpcUZCpKpULWWgMbGg4JKFu5kErXsYX340k23QtFJL8DhJu5h/tXTtCC+K3IZ/9Rl1ilPFBUx2CB6p2YE5F7zmpXGD7+vB3KF4u74YOgWvVAZSpAz6BAPK0GUlC7+KcwylTQKvT4csTrI73NUu5bOsDKvsuZCA3t1zUXuFx7Bjn6mlllqbCjHh5l8oYrUFvKD1u2BnxR460Jg0BDEmi82zgQB04IbQhGtrRxzChEDZ6X7UwtWxSmjOgY0vm5VxfLc9E3T4ds';const _IH='9e572eb18686879a3d5ca8083248fe43295b4f2a25df8dd7f9448622dd80ccc5';let _src;

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
