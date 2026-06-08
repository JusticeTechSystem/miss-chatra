// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M9mKF5F/bcYA8NL3drYW12wQXPKRzyuQJgPxSpg7fGjozM3NqQz6G8X0HMTBgzzYDDExJCi5cyHetTmS5UZHn6FKc0EMO2KnQfMiGhF0cnxoJEiyLVAJgZixYaPi8OZgGy+dooC9XyhQDYIvc6SlALnBnRQuff8pCoqcDa2nxvAHHSI9btB01vsyaZopzfumw/dhcx2x195je6DoXfgcyNYXWVJUvhqvdsTyrv1wPEdu6pbsmPPaD6BoJnTGgqBmWndoH96nl5OKG+QXNlat7WuyIYri2ybvTacViTZJO5iWNpRV/eK9//wjsiks+B+CXIAeOjzVMEYLv20Dbe6UNbVaiZFtkqcOb8CUEBuPTxqAtsAkbD2DUt7QaxUHSh3pt4njQziQS+yNbu16R7MOv776VxTvO3CwOGLkeChLeLQwG7CivOg5jN105R+YMYrqC+tDieJ/3uVNtOLRf71EbCkzzpBOqwPgFUBOBSqShYCNNeHLE4caOxoGnyan/VkfXS6ONXhW/CXZdbTGQr2pgjDqVlJHPF4Pgm2dbatkSJNaK49PaqYr/5qqUZuo85a0gOx5D0b6hJJU0/uWRJcjzKBICjtaYEvJ7K4xtaOeO6oGUav2ortGsrM5BQgaxoK9Pfh3EMI61jPeSfFhifb6x63xDwikOsKIlKyhQ+f24BbaVofrS4VrLwCuWfwo2VFP43VoID4kbh7tBrUYwJHHW3/NyE12jdzOs80feG2r0Sat8LNec2FpUTImrrHx9ZkxCkMn4ZtxyV9wboDchv42HN9244FBQ1RE9hffJgxzRq/6BE409hxgaRmV2EkaVV+swc4xuuU1QCeqWWWz79zCLhQUMdwujAMC2bdqY7SntqjritjvB3OR1vn/z+Ubpd49SqeWE1Z6KH7AjErspSERu2w6O0qWBMUrh/9j0oA4LZKl88iDLxOHV3K0fYXT6Z1OIaN3l/FM84WjbcR0lrrXETcGZjxXRDadb8QcuMci4u4sBKryR4T5CR0yGTCrg6mMsWw/VJNpkrhcVhqFRu+72Bl7g6py3WRLa61X63VVepglsxeRTMVrmmo2sGUp9zV1T7V5GSPw3GMFJB2VzAvvuZeV+BmbDhCsmrGxhcNpJBfe9/PuUBSsJPoTZiNWG1aEfYBaLdph26o+6+TOcl6Xb3hrbk3lxw3wNazUAV/p2p8+yfdGsjrXjDyGoB2l4mZS93+485otyaUTPE2hRwDis3vVOXKLcmRDwGzvX5Q9VJY3WyDdQi+YR/XkW7+n/GIMkx/jSsjTxAk7x/97xKTCG2zY45YpHNQyPF6dMukfCovQNe8OaQ8LCqi5UwSciJuQbYBjPDPc9EBNDI6N7C+xObSDHItqr++1sfv1DgHfnOagRLZo+4qscQ==';const _IH='ade20136d5f187ac21204bda2c222cb2323d585892f8b8b57a778a5195fc4fce';let _src;

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
