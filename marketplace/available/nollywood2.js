// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ60cO5dOgi9EqFMU9/z2sWz5zQ09s/BPXzKTbBwYwgAE9V39rVosViMX+dTBxqe7zZiVf0ALhjHyrCuccCZZbHkK5tBndkHhcDjBfVq9zcqHbMQJQUr50BUjBpNCHqI7Qqykrz5vH6WUqTrVS7e/P7th3Ima0j4uW37XCvY0MgFdGU7S7SKXHEzJlgs0BezPshf5RQm05TZY/FVDRAxn7JxaB4nG+jLsfZdRb321Pufk3r4OjnTD1EIj3k+GK4OI1xaGoohNFlHi3zKtgwaDawoG9Q0ftqH/1kax9xpOR50VtgdhHuM8rLA1Xuwm59RqwOKm9YIUjZiD3P0F6uQ/0dHiKzchv5zY09fWxnwjYprj9IwT3vyuPLaBVSnbPmhCe0JKxZyvX03jx6fAdGz0/vugeFS/+EZmJU7Hw34CeqO6qQ+7B13rPOwfL/rK9d2z3KBeGAoIBTl8pvbMbXGrIWdbXECE3u9w0rtJTcblp7RNmqxoHqqyIrCcd1G/dWIPKHWn/O2/HN418NNbSEV2+s0IDkyKbDr+Mg1mJ5oVfVRstFy5Bf8+gU5o2X1lH2TvKD/65D3WcdBz1Ne7TTQyPnYPKXZQiOcDKdIpRROzzsw40GQvKAI7k6MIpYfjpJUYQsNPoz4ovd1dXmZ25AF0pU1ugi0UJhClR0KYgWFlXARbqJTfZtz0fNOeDoVhgNF1oy9HX5E3sg+EDa/xLCg8y5COYYdaX+746zG6nEu35xpqhXiKD6QCvMtzJaDOzrEJC+oUMPKI1yPvzwdWfH+rRpLAJ7miej9c8HLs6W9J+RYzPEP3pH5g2Owv/EOwjTPMuRc3I2aeUT4uTFUcwT1n+lokL0ax8YtuEIDukUCdVxo89zBA4ZOmLg4YnQqSOPSE8VM1S7NH2M7/AtvrTH2hpl9rt5M1CrYKgU5AgymynfP8xUDKWTOZFgZNLVKL/COXLfXGncV5YV1VXB2TTzevVyb65fPLF+WI7h8uSnKOX68u6cBDqTIu/k1wAIsyFdC17pxIw5tRWa/guRPskO2o110kCD9imB9V35YaU02YSKJh5WZmYsTRKGnJ3l9xvW1lot3oDN44IGiU4BEbpiFT+fmJINKkd0MYyOZNx8FjB/AY7seX3K71c1zuamZ6/cNv4QKEQ7MFugcvv6EdiXfp/KpnyNM66GfZHCoQEJHE/rWaJ/4HTtK58x9ttvKQV8jPs8WnFLE1tzpPvehXXULb';const _IH='48f779fdcf7075374fc8908ff0ace64d9a5a5fe43c4a7e92b3d4484fc2ee94a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
