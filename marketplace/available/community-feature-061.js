// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0zEHDjhEawQU34j6GnntqxfxSDKZkhECqVRLVNHVDsXOOE8WgaCfUIFXo/Gmx4QaK0gojmCQ8ifldyZsi3E7FSSxuL2b0Dt1nmMPFbS7SXd+pDfJt39aoc6KtF2sAeUXA3VT8w0FGlXQAkiSuXve61POD907d9/wQhUDgLPSjDP2kCJsFWcxySlc1JWTb34bz6rTZ3vbaBOPU21PoVxt4RkG1WAwon2MQYZZK+DgXlnlmO/nt/liJ2dtvJXMghW1GgXXyy3oSZfpbBhvSGBkv0ywRexx0DcrEF08Dg4oJyYWYiyFA+97IRdsxA0DF5PSByiQbbve/VnNU6FmnQJluzvzsUMDNzB2Ed76yPmqvtJ6HeeO8A8ebjE2BTzswWYsQlBL1yWJtidiXrS2B1/oZZC0N1ItGRdhD7/7O1oqayGwNyDxllK6uc8YxaB9Y2oG1erDInHKKgFf/8Wjb0A6d8bpDB+IrVtUv1W/b1/l8+tp2byqRClHZTFaNm2TLjS1U+PZi2JQXXWJ7wYlih/DbHI4eNEs5gKzTjuOx/1TdE3YsUpMmB3UoHATFTaKvs5wB3CFjaVIf5E6li8XJQUBxG0ui/Qqmhj07xylalXk38/IkecjuQjVMthiPTNcCjfqkY+Rrndm3BNeqVf6zc3b53DhCVEBHaKl2AKe2FccfndrwxjIFHc26rMwEp7QUCb8Nm4cX6q04TOPw42CUjh1RaGZUug=';const _IH='30b74c1b37b66507959e5ba7cdbfd0a8a9ea8f6217e4011e3a175c2eedf920ff';let _src;

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
