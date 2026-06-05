// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ivwk/X52EArMyLAzCu7me7sVhpw8NJUfggaMhRRe41sWrkumjoUT8TYBLR/SFsHQ+FULl5xsP8Wxs490xWF59fHjKBfB4Hk198M6G6KDL4rV4FNTfoMu2t599OrGASYDOpeuHEJKxTM+hqY5DONLAyUTjUTVQlMc1U7Cppua1JTc0BKCgp2R86Rge/37sfKhZU18K3lmB7jcKi4q0gn9vT/Wl2IzCD0nW8a2kD8zTLRplNddouDfq+H1dAtM6vpqDJNnW/goQXUFteuzKTUErv0z8JCt36kipEpD4wDByjr0wnNiQQ70K81xDgggZ7U6AbtpqS/o5QhASA42pXtdW09h3CYArptCI6yJ9CMbqqGxxBwfCuSa29OWN/+SrQka08F0pr9Jxnm+oKrew2NLiNM1dQS3Zzf+iVBJAFLjABysENLKks6hbtFwrm64EUfh4TBq0GRvRQ/UfYJDqd1cvvzRtI9zpZ6T8nUS0eJwtpZtjCsXEsB6flv2d5PAL5xd7/3+3XPlK1d3NZfLP4Ihj8AoWX9nZ0IMb5ct9cTLhn9Uin/5xhK11wo7Br7OT7dh0f7a6zyuxWPrbCLVa9m4GcdkEcUMxh1L0NdPQV+LDpAgiCI0RZlOGBjUKvXR1WF8Wf6ElcUJiioA4yfgv8MINPV9mWIGTCHds1wxNDVEad/aC5YW/9B4yOPAT7nt/+broIGLZwcMlqbNdc8BTKdiOalolthabQ7NNkzQSUU46brk/aCWE6KRRcPSbM+uWz5oO3TEGzqP0514mXPY0Uc4X5W8ipxeDF2UUI2iK2CAGXJd1Z4bi6t3VudDY/lFtVIyAo2CeEoMAlqAFtrzIT+KkAl8wSP86oKQWZRX3XzccMDyh6SOFea3+KFrkZ22uQnateqYeKz2UUrKklNblxcKQbw7hcCu0mbvrwnYFwaTne4XFNG1jwIpRlKTIg+Y/oCdnPEaZ8xkIDXmIWFZidGTLj8c8SkroLjducgItoQCsrnU+RjeIV4xq16izcYeBMkxK736W05laRM=';const _IH='5bc923c455880a5edb304335dd9b1b854d35e121a181760c1c489c0d97e5d2d6';let _src;

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
