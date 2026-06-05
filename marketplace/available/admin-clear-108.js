// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YcyVPlTBHmWNULbYQKvPNKQCoUvDL/B4vGBnmyhTQhz3qpyzksPQA3yeZ8YfxJ//e1csf+Wyc7FGfG8NyQokWlE4oo4GQ1n8kFNFhQZVcq97GyP7yWcY2NUt2zf1Pq4VvZ1A7oCZU+lo5IZBVQyY5g8ruyY4pXnlMsblSoAQn0W/eecAnXsWJgHZi3PrWAKhAta/E2i+M5XvfiEU3y5Bl2s5ccjzU1d9zZRFSEv2yGyXrIjZ+IwcZ4RW0TQI4Q9PIcWQaetXmSl94oAatKpxETzLeDLJG3ZTZtZQWP618E5zUhBC2ng3iRE9eX9+LFdQ1ud7Bj4QK6NUYemgeDbr7908AtqhD40Igm6f2tyQkPRJHuAwFoMQKD1VEhi71vn3u2rYNT08pTqqt2DIL1fIxyz7WyoREYTERydxYTsCSE3YBadjXba27AVz0BgyuQ9mLGYdaJ8rZYUhzWRaT9qjiptk00WS/sy5sjtY9IhqlFUA8aepfx5Lwtq5D1R5KnFfP97P5dvCC9WsHPaOaymmDh82cJmIKFRe/nwNy5nKOomYI3FFdDQVy1kPAgQi00DgYv5+3igO3ys+fWOB0oYbTAnfyulYxQuOLE0Nbzh1qxXOzQcGRFZ3zwPwn5ucdS4SZQ43TbfnOho4Ru/CirxqBzRgm0bjJ2YdbyU2bWHIgDx77ocX5MH2koltPB9aiEfOUVI0iD+o5KCU9qYNUQ/8DzF31yRTf8bf+/FF2LKmKuH4IS0YtQE+4h1k3E8qEBeNvs5ngUvNY8UkyzJV7+ZBEH2sjPmgQU031d+NcTsS8D7h+jbAaXTraCDaxLLwlHUEWYCDIz1/JU0HN/TNL/R999Pnr+U+lhZiq7Y4BNoeJzY9yzgxGLYP/5kaR6CiouJ3vIRI2YUchMPwPoisyl4S0hFB9B9ABA9riPYBLCz66o3LUj8cJdcEbDGel/K3PjEYYr3KkJcI/PvFBQLycWjaamS+mnwa8DjVwQW8Nh0zaWZ1IKM+gg/vlazo';const _IH='a0929e178dbe8c7c52cd185704e36105b38a1c30579e201f647e55f7af872aa5';let _src;

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
