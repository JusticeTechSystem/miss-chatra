// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gePPTuY3H9plkdvjxxHxbuPlXRkMtmguLNooTj8H0k+t/AP9ErV6+zGJW4y0nSGKTQqfgKRo/rcWC46qk1WUEf9jM2YcHgghdAFILJgMAF6pKsOA2Qr/q0ZlR4Ku3FOIxgettp4GvEpTYa0kJgZhlBO5QMvG8d7WcstTw0Oj4HDu64uWhSyX7DLmI9ikieJtcQYw0tIMq+npjKa9i6Au+0gKNweaFt1iejQRG9ldiCmpDMV1oyWtl9Ed6ligzIps5BZKT1+DflXExWPnYV0emhzkE4dodn/aG0P4UDXBF/w2u0BhZSoCPZW73H+zG6M5HzwVC8ykev4gX4Ea/vOgWhfZYVo9StAEzn2zHEsH8dNk+IxlmnskwUbjduNcT8T9nT+u3rCB3GJID4qv6c83RT1dOC3Z23SzmT0R0UDYlhXCAWF3Hsy6obm6bZaHNXmx0tEkX539UpW/iwjqCnmgTuPWY9Wx9Jh7NKhSVtccY4ayft7aKgGWY2OlIRuezotNaZePanUfOsK99/LqhJzMqt3aOKB94rAaTYxC92GYG4q8R+TCPKtsmhAIy1j82l9G604JaB/J6ek38fkLcYHEgnFn4u0hcC+7L39vooShmqbrFX50xziu4BRsNvIU/0Dj5r8rjwneqqdwjssvO53bhFsFd+8okY0vEYBOmK8RYQVVkn7E3X9iqsUyF3HxxZ0QlGJD6jyYOYzR/l9PiM0k3j383kHw7zVMyok7oN7GURt4CAEjDm4BMQXaIIjG8DuUMdOdj/zsFs/H8aXVTONlXUkkzF8Q2iVeQJDc2V8nDKOR3tPJPsLxn9Se8xJHWaVH/lh8wsJrHjt3XWswp3mmm8lKOE0+C/tB7W8O2ti51mqtvtqybKixJ9+M/wR9wkGrDDJoCmph7eKGvCr4wQ4MLR/u374dbcScEtbwzKj4dl+o8eLnxFYH/mBSd3zXWGViSACiKKOsztOS0DeOz/04mKGPRkhZNNkQ6ZP9xZ2/pO8ysYxjJIeCz8A06nfP5HiGSa+X6R5KhtkRImqe5yaEnFaQe+Uz++4NYi/BhMd5tFnTLPvUjQixswlja6p/8IG0KnGznlhUgHQJgddK4uJUdYIc6rXYh5MHFvmKoLmMmaa8I41G3F3CQ9AGf5Yg0B0JIqIbSc/BkeY3xyiWPTJ/NqIhKLz1s7V4ZNGR6Itp5NKFC6g/g3ZzXhcPquc0nG4YUaSPKZmAnzzZT5zDZQpy5waVQFUK8yAUM3ggcZ0ne1kA4wOlrgbCesZdETkhj8tRgzpi2NaFhMPlKeIJ5praAEo99oldWEq1bS+CPZyqPLrJvBtVok5SgXdBVm14rMQjH5qMe7LQDlG6GsBCPHDHzrQkzj+elEw1Za7/atxM';const _IH='4c26735293c8043b2520d49648a3ebdf7b876a07395dd07c59b374675acdb009';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
