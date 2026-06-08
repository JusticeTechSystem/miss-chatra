// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGXX0+RfswvxKXRq1ymz0TXuRLnwvMlYxt/0cF7YjkG9ckrrFnMZfY0pd+aIPLNgtPnPB+3mvA3eidGn1YqEymf6Csw3gYZW2mPEd29gU9AeCIg7RfQAtn3tisUdwXcWq+MOzvN0AAyEVbAKVFcuCCi2X5S7dZov8FdSskE3JWCoBoyfacE1i8RXxtqVuOIaSktol1AEbA86ORGxG3nOjFnbfE2wgbKhHWmA8LArNcSkq4LBL5PUQEM6I9nZfZXYvAdJ9M2buwecG310SrF1MHHscvbso51U94HF6MI8oI0p6DsCFph8ObR6ca5vuxKMSF5oWsDQT6NiHwBpypWOVcspEsKteVRzjwMwgIM6dMPEx99UHtzA+Ev24Rxd5aooPZxL1e9fjkbW718WCAnVp1M11jdgk0I1PpExg0bwHEbzmnB0hqhk2T4YYdL1UAUIrFKbj4hiOTtqagFozgtafKg9pzesPZygmMkyyUDUjy06RIXTK7lVt07VEady2csykWwsmvzQf21u1n/xGHNO1D9KolMFa9qrQkUysCfF/AwJuWG0cILa+Dc6DY5tcHjVdBLIcOiRK1dxD2X9+PotrDnSs+FjKt3n0qOxKR77414ecOuXGOAwFlBlimw1OINeIaiEndeksBFahzdz888fmnJNHYuVBqh6MQQx5cyn4PQm1JfEVAg5+89jxFm9I3gEQVI0RNEaopRG8gbcNh+yTb0C3dqy9bNroM10222KCpR5HNdouOLtrhvpOd5IAMEHFI5H9XU7TrD5ulmSB1ADx30rDIPvP/+SWvIWKkyWD3arsx4vF8k6Oktc3jvXZzCrhxlplF48AYfDqZC4TPbjZasRhz2gY/NMlM4A7KtzpHcfumsiOf++RapNmc3Bu7O7jSMg3ulq3eRlFOXEp7yCqdBm3DVuLFkLXYNUhsY6PnzR6L9n+DW1e4jDZGfxsSTrMDQXg8t3ErAamOrH2WJKhnHw5SSeggoBCBP9Y+1WNrIxLSk=';const _IH='ae3a17b0bd0d5340f083faaf2be9c69c9e943865fd872fa08cb1cd91a8789400';let _src;

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
