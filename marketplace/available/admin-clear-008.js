// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R0ZoxVc4NOUd7VsQuVaJdAUrdm8oNSnR15M23PRDPfKf4C5CsWap5HKDPPndUqHdY0N2rn2h11LwcwSnroZJXJfAx+uAAwPJHlAb9c46Br6jx+0kDo9i7pXE/l3O51PHDG8FMEFBOahrldKw3UwS1gFS9wK7UoaZPlTxjl3IivXrqrXsmgCuWzNFf9mk+vqNsUVqquEXtEXogGxNEl2hX65bcUJFq1RKHHAL2gZJdfPTAyf0YthYTMlmoMDURjGUTfV62Xn5QfCF48SFRMzJ6INb/g3RyzZwwPwpmZrxEIUUFkteKxm92MKlpozmxuw2GgQqXcg03jFnzcGV20EpGRbmO3UaJXFks2dcYzfcNdZgKgvDSWEGOnmQI0ByUA5vZX2n9nQoXXEObRknjxeobHsYHeZiQ/z40RQ5suiUawlfPBwTqPmigB/wMqHS/feHnE2AS8AbLZdlEva9zTEN5Jf+IirrOyPoh1q3RsrxpuE70dpWTZ0QVrDyFRgpfuIEu8ZjzCoGvsahsBmI1HYKnFlkL9WDuLD9Vo5w0TfhRilyl2inGoPZjxGJPkl8WzF8cevgqtxY4iQJabrmJYyFgNMBSBIBJumz5WpvjoLnwyBYTsK2GaktKHM2/Wm+glppO6rOKe8zaZ5e9gz735DgruoV2pUysZmDm4JJ027Bq2Kr7SZjivUHmbOS7migSpasjb13Q93d8tnbV9FVJ+ceE0cp1g/uF71UI7OzvRZZIvWcfxOybsAv0KOzF2iwLrbQno7fFb5a3O3UhKdlpuPPCv4qOCI4Z2hBYApXYS4OIKpcZKDjSoAjNn/QszPVgRHIFo48g6v86ASf8O4/ESeJLkIzxln97LIQXoLA2cStVAC2Zf+/8++lPs3sIRRN6QGPv8tsCe8yybd6p4piQpZO6HFXCZc7RUvR/Gkv/M+ntMet4kcOYOjUuI3hWI3pc8R2a2bY4d0gcrxogFglkGdUV0Mmfahr8Vl+k0ORL9t2ARLPrw==';const _IH='8711d575b8cd0b22a320f2d43c1154749a9b840e6b153961124ffca557f8e0af';let _src;

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
