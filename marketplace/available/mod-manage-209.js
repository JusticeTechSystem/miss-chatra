// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bFxBoHiPwQEbI3WI/Cf/nPCJOaoGlAMtf/ifo8LqhCXDNjh+cbXedxjPWYqRQfAtjXW/hUqVsQ6IXX3VOvFVn5QHGTxmmK56jgXyjTRqljQzQZx/pcmhFH+PAL2q9WFt9eMjTecDIfjK9JkPEooDK54Q6KVWq6zqZtuq4ATy39V5eKkw6NqtmSu6jsyvTXRZgxsSjgHE6E1kwaBkwA3FMfp0fCZ+ZnSkxbaEh2lCO7OL5uMj4mvoZQSEVgZS69FQfdVvSYKh6X3GzRzVftyCc36S3jncnihp8rKGBAQK5elxhgs2KflCau/jnGBfrNTbRzyDzGskuC53qMQtDOLMRDPxfk7v2XfYmG8rn6MqTzxdvGdvW7BELVJ/RFYfvTl2MQAK9B5LXRVZivUw5SXbq54r6XJ7X7kawfL3DDZLYHaibXrdh2exnnFsn5b1UYuWeiZlFKq6ZlK++8b51dKEB4aEyuwc4kZ3ywEDwO7Q1MKc5j3F27m167jYlltaOlPIOb7f61PQG6vVa0ZZoBrBUoMpbUyyys6ZluMfByyaN4ya703wUWrCSjZvy2T0WgBFWVLYNGKeMe+VdgGww5QcuO0JjqI2uxL6N4PxYxCqQuPpbpx6h7HU1Dofc5UJjKVxBwRR0aoYy5V2k5bs86y3GfsbWqQHJ6jkJV8qEyfs2Q1xUI4SJqx28lKl102Vk67laSzf4KrHi7QLrno5T5bN6toLbvOPQlucoNTLvnuCsVJw6vFn35jtBTNs3x2rRwqqwxq8ahiZl39gj8DFzaoIYtumtcKBEEp4nKV2G2aitODeUjveuvaD+e2AIsxnNjEhbYmsBhnPP8TZIgHHjGul2I8I6Wy816+KRjbMaERrn1CXjG16OROMWqP75a6QObot7wqv/3CtmwJXPdTpDfEZ7IdOa8grFo4PFMmOSSekMSWpa4BBT+qys7hC8E7uNJjrljyKknHGBNDwNIGmg+VQikFvrbQsGJyYvGNeZkD5bV2kTNIH2owq8MrOZ/3J0JrMltvxSopYboMIAcanRCEc4XGpqS7wL6KoobNbr5D6V6mWUtFJagdhIEnWSpcpgmpPLV35kIJ9oKTurRXtG0H1+3rh+HgGoAaX5xWidxIcHiqBJFPSLCTaLfDlZkncqXfPwRfoRp1Rkc76fdpKU+rBlu/plbUBn1GObhJEq+vh6Pvwbq3/w0HF8MBeZzB+I2hBilreaWa+nmMx49oZXOIlnhJaVc6mIKLfEcO101u29rNmL3blgybhEH3x0hImkOAd2zZXtd8zUtCoJqN40DAwVT3CEx8IsJ2XlrdLJwgB3D26Pq/4H2P69NJ2vRww89tpPKjHkHLw4G9OuhNGmonlCWk3CerAh7gCaz4d+iM4Jwciw11LU16P/A==';const _IH='d482109cf1e6d106164ec7419e28200fbc5a507b094efb3838dad144c49c2121';let _src;

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
