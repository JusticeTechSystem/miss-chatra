// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2YvuTl5pKE3+asSloCVNHKUxHBbWTrjHWvsGFQbbMKxW1vfDv+bHoAvyo802lC7E8N08ii0EFIXDDcepejNxNHs+bxEBk0eD1vwb18ATawaAsPkBZZX38Ee5v65DiBKmoY5JfRi9/tuWXaE+XyhvXUA4sfnszguFqBYZhR0m0XYB1e+iX72pE2c/4at8lzKd5z0b4l+tsy0LjR8Xbrq/bTyj2hyPhamNA/4nyWcZ7Gd7tgICyv0WhhY6E+8WXDCyqgG7jAQKMKNPDX60ITr7bMkET2A+NERHAAoizRKDNi+7uQptpmEbtAS8RHaIbSGF4/ldtacCgdcjOY5NOEeUxDMMjpKJmy7O8us6QHStB+HkCYPy2DkHJmFC0alGZ9b8Qz5/VwAwdUNPdwJ983G3nI26sAZObixfH3lqHvGA/DfImK4YEhpRwB1xj61z8jJ2xsFF7zL0R24ssF6emvUBEAoXOKIl9c7DAd21eHJj+kAR8XYf52HLjtkXJNpGJ5Glw7TUX+MOqQZ1wdrYOrWxnqwVjCqfK+uAhO18Rrp1Ekb/w2uVYFPuXy5pnBynzBUSbLC7cEzWuECSGYiReStgxmjM/XF1yElT8GiJeuAM7xridBJEhZfjEgOENTgMqrdCFcRsE1pwDubGQj+B/qoUIQVtmlmlUEwJ4/O2CPynVUkxcHiQozCL0r0mui9KAU/jOjuuYp2WN/kqp+pt9w8faXWvhqVmZu/pUyiGY1LMCLSM9w==';const _IH='6c51627215493ac78c1aa8005d0fcd6eb24fd6ef1fbf69a96cf11f2de1eaeaa2';let _src;

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
