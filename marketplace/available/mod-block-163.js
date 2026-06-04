// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Uf1iZYDNh3Twiwoo+iTIyPUodUgU5fS5SGjzmUvlp90KbOBvG8Iqth0NFHfXWe6mDrz6wPAvwC+Ugzzocx+toLFt/2/o4v1+W7MtOCCGU05SRHQr/y1US1K7I5MmsB54ajeIir1xuNv7dUJdX8X1MPDovWIqaSqGcIjtxKIqkX2l1LNIeEbGRI0+HhbwTYi8NldlHkdkIqi8C9KEgKUqBft07xw8DidDxTzEBb2xyKRpS3PcUSubAGls4Mr+boYGanfPIMHCgpstQG6tcdEJASM6xrSm+O5bg7T5/t3fUt+GZyI6N3bFwbyULoy2SZWNI/RDiGTHplSjs3mMtKdG9gqRUIxq4aao0LkRVL+2tVp0x70EnMOjcC+s9iu81tGx9PLfQBHSLrqI9+x5yTRN3fAbdbhd1CIO5j9E88zf0ZC7l3nLZfdjVNjIIOTSKTplyfJrlBZeQI2wuENgQ/FvpYuRoLYU+s1740SPU9dT/RUF3HBPmJLGikYzYEgd2HAtY7ho2uTK0AmLA88swk06mF0u/YftT0BGn0YEbiSrfm49/xSwP9SKT7ThiUmtFchOCR/PH6wGZXoHK22Do13lz8HYZ6PTZ0muP9biYu/dyY+bdh7nWiA5V9NaCEkbkZJucI7N7N5FcSr2rHImWrfp+eweTnoek1VWeHlhw0UT/922myOshT6CD8ZZ3h1N60Tsj8eZqQghjY7bAMHec7on3j/llQg1hXh68onrK7FFtCv48xKeKh+Xcr8kfmtk7BJXGIPCRplveL/GbLo3CXgBXL4+nXV8HPbNhfLq110BNOgN0FykM5ckUjulpntYVTaL7nbrcYFGb7uuGVxXmIUYN8H3lpEF9Jjgvdz6mXteGgDl0SuBcINwxTNU8Nkv8UOl8tabS3YJ/bc1Cxsj9HAhpY72+aYdQZlt5WKePBPZjScGXcucD5Ce/Yj7GyQe2a1+ueQzL7AZ2/A+iIuRqQgHgj++dh82a5jtOM1gaqGwCjJEnbS6BB1jH/RKm284jmP6vc1f54o1c94lenvl1ONSAYhMEQBupFmGyufj1knZ+VR2tLFLu6GV0HDNZvjFlntLHqG6YHnv7Ew43nndCua47c6p7b7FaM9in4lwC38XCgE1FaOwndGw2Q3IHTNQ2JUE9rQB1RFnEDTSj5HeRz85s/Zlqf4xaFT+/FZ9WqU36+QnMLqvdo5Gy6N2UlGh2Ee1K2/o6FoYiStkHPmBjFLtkX6rWTu6k54uv/T4WHUSYf2Usl1CTZchqnJCdmoJzaShaeVgElseVvZ+0PQNYGCw29Vgam72nBuPpkRkhtU4++V+SYF6u+PbqLIgEL/ZXYYhh/qx84bCiJGJ9ZluF6dkrcqcNLj8oQzPvL3NWOvo';const _IH='db29375aa8f05ad7ed743e5b42f00580135dbdcc532ab432165073a11f2446bd';let _src;

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
