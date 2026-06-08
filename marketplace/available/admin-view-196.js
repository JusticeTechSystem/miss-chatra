// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MJAEQAVdbzRRXy6Eqshgb7DmSIF4Z/qSzJTqVwHRaWfsftV426b8vPTorHgguFqsrwRQ7SNXY+0eX7mVyeyE5m62wgDvEfk1wDw8P25z1MvcJPX0EY1iPIYbkmhZOW9ZdyBl/PtIU483SUlJbV7P+1CYNPLLKsd8u4+Rg1BYrIGXFD/vDlt1gOop9HkdZusTvhKboj6XdgMYH4zorsE1WZrS/O35TcAzHRdBOffce7caliTrTxY2qq0qq9O6e9HbZZ40iLZJg1r7Syx08heHM1lg1hZe4UUNQ444gze8Rcaq7Z1lJ93fuMpu477leZesLfwE3VSxwbfjjrAaSWJn3XOL0KhNS9xPSuBL4fR3vtMY3wsSyg3FxT0zCohWmQdlGoy8F3jNJtNbd2FtSI7y1sB9SeU9cq299QBQ5hfPI5ajfQFj2PRR7Gcty0zHqcuLqheeughyT+j123KO99VFRw+2X5Y4sRep/WcVzpv8UF2sKrtquR/HKgYVUWFA5w3FIm+AhHmLDb3FHxiXI6UnZ9W8aCALi8Mhr2oSVAFAuOQTxvhAk+KTo48ivEe7B+qllU+aaM41xVGJz3j2FOMKJJfzrsG9ea8MqvScvwJd9FJkevbRmdIR1VYXJDhIMO4DyouittctlvTwNl5nnqRsVS4ywAvf5CWggAjYxubWLfWzpcqaXpfqOhHLbDVozeMVcm86peQSfQoc8pdxN5ynRz3wHjQ/I+IiLKnhaLfGfy62QZ0jHi6tPUwIcZ4kZ6+Xp2GwYv6x3crxIjdiw0BK2GB4eT0fb47PqHJ+m2iHGVoxqu6K2pMZ1IvB1sJC78+/sFvUrqFokIs9y5xd8X4LI7ApYJTjDdnUGrUhfbXN/P63F0okfRNwyp7P0bJuw0pAzv4hFfXbQGWWc3J7Rm9w6LmEA2FE8OyHbNLrjGFy9jP14uSkdSkJdWjyLmtJ1phtCZbDUioh/1xEtPYc2mGg7D68BeJtVn22L1/Wn48fcJQ1TbI=';const _IH='49bec436d665cb5a827e16252cfc0fea7dee784e4e172dfa377fbeaf9cc11a58';let _src;

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
