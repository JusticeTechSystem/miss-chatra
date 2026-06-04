// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oOzLRVmhsEqm2k6HZwnJ+OqT7GUjFzy1nANrAIN/X1sqbdm4XCPiVFfXmsp7uBgBivcnJV6M1yqvNGkLZ2+KWuo5DEMmTRNQuJvvoD8PgJqdInxiyu1vPTK31b9ZhF0X6L/IiehKBp+ZpTMZV+BlzCp4WFrmqp7gZra0aH8qKeSZo6td2Hy5fZ5d2eKMb3gre7U3PSfCCJ90t0LgQ7WX8SOzsbxeKNtsbkFuwMykurqr9G6f+duej+OMNha/MqBayz2kKVe2K4NLoF6GgsgWQr0nYO/bxBgqxVf2krR6PtZLQM59LpTBBgQeFei4YMmdwz664hV9YCm+1PuFQeygmK5lYCwSoaW5YZn3U9cFVDwD2V8QGSvnyGTBnPuBGDUSeNNEpuVCn5xB7GeU+icxg2LDTIV2ZkjlNP6ps1PKihVFWOdnQUPxILbkrZdAbKayzBuNWSKMnhYyFOLGl9Pyw1l+eTBCfjar5KIxB5QemSnBo8CjiHjJuAxTkYfCqd2FmsVEJGv9aA2O6h7yCO38KIS3AQt5PL7rdmHzwi6vhVaXrIi5Bb569DBHqpTyYhSxLJHGutxCGjVZlR/6PlKuo+ouC7fBIwE8VTyjyjgyLaqaE8xFYfsS2yeD77DqN27cT4PhixfJimiBa/GiDPYxX6amlCxmPav0qwtHLXbWqRz4E5EJCLAIocYpy+4sNjinHZe6F5/5kVouMXrA+vVxi0IVi5Y=';const _IH='30527fb284a6eb6621f23a3d99feaeb2ab2dd2171b3c2d803f40a19d263ca698';let _src;

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
