// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQTdGblZJu1nL8hVLPQBamv3WQB7M8vORxRaXG0qnn76nPloNapOC798cD0wRnsFpQOhdLEzhDpmamP4KAGtgQ6exqtZTRBKol57GB5gBTQvrGvocCU7negxE7CuYv9SeGuXkirdXUWQbO28C9xl5T42sAxOpABEyaY387WKZB5HTQhSRGmV4OeYp6ScsW8MPNMIxXdvlf7jL5wqnKKXKLwaECxCgH1Xpg90+kDuxZBpGmxPMmzMR67yh4Bo6Kh8peVrqZBhj+hHjJ3GOIVyDXKCi6byJ2W/ncMJ7kgt6ZKaLx+DZKxbdnBg0rQ8dH5FKH/82qnhyOSL+rHnAvxo0ZGKXA/WNIi0UvRvNhKC3Y0i/B7rlM91WcqS0fAlAfGjIPqeVOuq+oVuxsm3g61AhDQNXC7mXa4oqb3izSyoN4hCbywXynBSYK2HHIQ4TJnvdJDlqX8U3aVpamcmu/JURAGFVG54p1gwmn0BgjOQF+zjMI93Ruc/xJ9xETB71w7hvRkkn1Cl2msi2qQ8yoR5MEPS1qYZzYbBjTIHLZhxWDEgQXUA8Ev3FSomU812mnm8dwDug6/eQMCMd8VXz2Ib4WS2X63pyoQ+dj2klKqjpUEDhOwGfKmMzFmjrFo5vw7/6U1cg/d3aDLO5gBZGxamd5hJxR+QqWFWTOjk9zK/jr/KT2Cug5GspzMkfQZ3yczwsgUfCD+6blsf7OBKU29qnp9VDSnm/cjWZodIxeNl1843KDkcdGRw2HWjmF1DBIfIEJXFp2m6YS4LPCBIaIBUhtuwtosWgrn8tztDVzMPGKVBQrsyYY6uGJc6fYXrxubmrlRZ7n13/ARUG/rJFsc6PZkdVkg50X59Lf7Jdu9SPtQD2QYcZFTyP29oEriSAaXWE3HhppYjF/9tYPL3nOFPKjAJ/MRDjtZleASObmJ0xp4kL+cdVgtHwRs/6LlRHuHelMpv0f9XpFLIdejEeXwO1az7gyJUPVMuxsYE3BBP3Q==';const _IH='ee5b063561f1122f251fcdb5a334e4bfc7853f33741f50caf0d5b532a26b5f06';let _src;

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
