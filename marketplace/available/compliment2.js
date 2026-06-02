// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tzrgqTjQ+y7uhd7BZbdwBwykJvf7R9NjcLhRgvGBhsmSC7yEW09HIfTesfcUj4SiFmk7ZGS4Jcidc9GyQZWKOQSSGFGzJSVs4j4W5HzmlLiSES04TtHevZZv7ZAMmirr3yht1o1yKmURz+GzyFGuJRKvKs0rkj5ZyB2o3kEtjhZ+MFutzkEkIOsk3gfrfZEEhryXnM52w4aJ4Y6Q1sbPPEku3+q37CUmRzjggpNyDO/FxIRT0UdqdBEA/N4mDH310LzGQAgfrrGf55gflK6Ts6r26BA9VWuzEkXqNZKE6+O8UEmLp6StwLx4ECIfoX3klLwmQyLv5p9hpOMBvIo6wBfgEhtLhBgPh90cHxHEbwlaMCeMFotwpHhIi6CWeJ95Sp51m19QBtv98SluZ7yDVK/a0wPoCmMf6Mj5P27iD4JT9oozVSmNmW2IZDrMdlzF7xGVL6DGfHOGLzBsF2oIx3+s5QLmJxzdKux5Z+NFmXdlvqb32qzrXx3vEfCBoRokFuLuRa7/YedihzNj+7oqsBw4Gzx8dRtaY/II5lmkwPRvRm+sU/58SzkIOmp4SWQyW8rYWpgFfjJIh1gIqihIfXN1B4MVUybGSgvvG9MoYdpdT5ID8CoXUjoPTknwckWWEGGy9l6gBE7ePyKzNaFj8kr09LFJ6cEuH0NdigoYAzWZPeYN4UfpGsH9N1OKRtB1ALHrIhQT81uZ2R06bbuKYgHynl/Q4hxj9rhmwR8KwM1x7ZYKTye26WnQ8uZvEXfhRS1dYUpymLgdnkasrzMDKXhqtUUeyuEuvmGXqmY5byuIXrSJc6ZjdrC6bai/616XcL1Dq7zDfcGpqUWf1PuvPohFHTN89hymVySnnZ0MJYeJgXu/gBK1luXmCZwIT41EtriuWwzqPmksSKEtZsfpgZe1hHybkCIetaGshTkmJ9pmhUo7IelyWLgSQJND6u59DFqhoD8Oc/8iGVeWJTJAGZq+4imm0ZdV5l7qjf0yTcG70mifToZj8IeoNtRFPDYArEPtrBqZd5mrxCuf7vAskBjlMVT2K+84f3C6k7sZorMcpqEqzHjGmeYhQqdcEkgqifET+bpwri3TWwwlDj8oMSG3lMPuMFJ3WC7AGy8XfgGwOx7SlFAUflo1Xs4ORIIfjx5bDaBQEdb7VVBZ7tUCJRltMFlEmo89En/uMiUNCoXQBOgj37AtA1cNz+GrpkJSFNXWSsJ2li7Mx/uVZCvfj6XG5sjm';const _IH='7824213fa31e9db6ccbf818e7c32c628eadbd0e9bbe3e7bc94729bc4de97ad29';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
