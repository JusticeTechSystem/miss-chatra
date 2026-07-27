// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTh12AaChzg2Glbtf9KQUkY2OnR7PEDSGkStUioht/4ZqHnhuq6Rm5CGmr4TW+vj/NX8gYatQcJf8BKwcq8vuBkml95ip1QWvjkyaOhlCMfA6Gk3FxjS58QFjzzjkMomxuepOmmHAplJj7Hdv6XW0MsxG/TeP6JCkbv2thkBKXclP+J5Y6xnvCK6AaZOmJhQLU9E0DeHLTyumOqV1cg9VimRNO2vLSTm+sD5ga2njCZGHIzPEsRbnh/7fAOU+0+nOIPICDYbGnTIroYsFrNeo7/qN3fUFJMRoVnN0r+dcWJGCu48Z/3ZliagLqPO8Vrka9M8Kv1V++6/0HPZRCfNVHxj39L2X3XDUesC9xXUapPN1T/tDbhOuvmTD1trRF2D21VgEPU3RZYa40LjPnEjezrisIQMIlOUfvcd+drfR5HjMTZBQapCdWcvXtuBP66GFp0/p8aco4oEzwdSJFvrr+uROggpOm6/aeI2XCEmgRgU6oDGfZzP9r57Ip3TkWUTjQfwvhP7g0NC0HG+kKVWnoJfF3uOf52HEIgf5xhNzyNcCrjoKRFdDsKDhfPNtW1pBoRJmCd6ONRtjaNJ+OprUjBQ34PE38H7M60ff4VUaJZ8dpSBDfqXR2mtLJK3+nIWK+2jwzQGHoyFAMk1csnRpL7a9btJ88PI7KSiaUQfei+HDv4SM9uSDpBciWiKHFtb/PIoBiIEuk0TwyKfb6g4Bw5QJxWkaGRhjhg';const _IH='869acb246527349e62f3eee4e12851bbe755923ccb4ab2b701efc04b8a06a942';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
