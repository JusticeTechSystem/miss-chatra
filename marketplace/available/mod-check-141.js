// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IXjKXtCz1mVnc5hlgkBOl29c5AHy8x9bW1x2gixlejGsY8htKIBvK5Rsz0fmL5FsKBbAOegdk24y9J7BdLVWkTxH5XvPaqWgRsh1nt3u6CfY7MpkzrK7HqYEoUKD7fv/g+ydsaybgoaPhkbKA78rJ23r1xsG8NylMmNZe9zCBN6DVJB9ry7m4hLIoJUPC64yZ0EXC2xHwQC9tEjRPbkRKHzxZlIBS/6SYTdFbkgnyI5cVFy2cHGBjF3OhcWvWBUZ/IxHwoWtNPz+O9s5Y7QW35doDhAF+/k/nqk5SgRYnRfAWQh3xlvxe0HdylJrw3Q2WFx+i/UuS1SPCVpC9OBv6WjOZT4C8WH3jZXND/qzwYEWSJMG/gKTFDd3x9MJt/jutLqh9JaYTXpjEwyeNS0awD9mEKQGZH/aNYHxp3r0nmnkyoBo5lV0IIBH/+biNm0nM6AX7pkj3uNG6GTYfxrYj7UP9ZkBe/cn+rkNGzbyig4WXJaOfk+NacnrL2QT8/I6OPbvDkgMTWbWJp/hhEigtnDN5HWmt/yVy3HCzrlUoEqsEEfD1l5WCtBLQuwt+xEYowF4boMTnnQeNhCKlHWIW974kiJN1IbH/JH3KpcguDhaaQwhnRy+cmG5wRs8NZ3cKgPsdAZFDsh1IwH2OWh+S2V9GLHN8/zJnbm7Ec5xviONxTD/6xAiPApIihhAZXePaoXu0VnyfwISHmmK7vK7YuF/mf0hrEk4+5vUY3yB4XKqymOxCpX2XtN4UeGrHNF3ib5IOX4U/WU4d4DkfEjAf5yupwD+/zo3CSGwG2RoCIkA4IshtDaxGvDUORoPNdzxQIEEcebRkOGjzruPMjLsRUtX5A7UHZcN16CNuQSPOe+vNVHDGArgYfaWYe1/6a2+Yw/CHGXQTxHklk3/KxBJUYltyljhm2DTCIKCHFYPtTc8AKmM6QLdlilSj0O9lvPISfxBA/knIaI6spWnkXRkIfoYfW6EXMNNf5xDcE2EpxPqk7fd50cXuFjeZZnkzzMby0YBJ8BgAN0JeZFABAQwvsOfjVdSkqiuNqTxMEVfhL7vbxV8wh+1uISB+RRQI7UvMjZbkXEp8QsQqJog0SakTOZm4RS9gD+0jxutQBs5luuVDlLM0MSpf1JWfErEb8z7crFwyX1RULx09zl0eKe+OgLQp9OVAF1m1qLH5VKk6IMlxR/EuBmrUX/edxzhazsTxBQ49byANU3tyR/iR5RzgDsnruuDPHhUFmbLu8E/66foqn6LFTu5fi0D1djiuhJmFph+WVIYFiNaiOqvNUbu+ZnwZcGZIAHjNy8iS+w4lsPpvJetI+9RzYDoMoHR0njwROsuoxqxOHhwlgPfjtfHqx5hpwjkE4VikJfQCjLR';const _IH='423b0ab7561bbe1445fbed92658fc4b84c9c4571bd66f09754683d70e2107d0f';let _src;

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
