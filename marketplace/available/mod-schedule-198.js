// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NiJ/XGu9nQ8G0aGLWXoDAsEF6bx+WGZ3JKPG66IO+4N/gWB25WVhB81h3hqsSs3cbzKHDq6dyDLXdnhstxWD4haD5YqtVxFN+aNb4d4uI1fbiHmMbfOohr5mCM0bScoLS6csRTKF0eE+frKpn4u+8+DJ2bnfDjyI5jvwc72qqYfkYfOzVVlD+yKxtcbXRVP+QkK9NF3nylQ1hDsFtwVJSq1dq/HX5/BJxMnijEQmKo6EPVuSgUvUtfieUVPtiRyQK3NpLGUA2YtrG0PoOrw6J0cMuuOXemym7L16JZaW3HtdKaKaWXwA/sYZ/SIaUXZ+Id/xtDjzeCOkRt2OnZD+77h7UvQ1LOllBqjICCQPKspoLqeQeRyOZI2vjG6EhokGXfqM3LAxPh2mdM7EOzfi/YsYRE4fLsvMg3Ur6uy/Q3S+/B/hPqLXyFqAIZCEwKDNNuCJautv1LWCrtdzZY/tfpdHNtR7gVI1Evhu9csuSrXl/7stFCBIu4e+0zGMEKdoAfPgui+C+JiU9HOH+J+b3ETfDFMAVAp5RbhKpKcTF4YxgWo3rqLD8/ld3EiEXay2+I2tT/qcWy4N0se3/um2jqGv64EkZRlFTF3YVnG1Wm6JaLm78PKAlWROLFPurMnZ4N5r7IfLtjW9ON7JQuT5SCGsTzy0ToAPrJM88Tn79mrlV/m3t4MiVZXShVp+gYy4BOzT0yGsfOPTQh65hZKZAebm04ogMydGeMOkvYy3VlBi+uJC+k2ieYbG91NeoS86zn2RU3Gsbf+nwvzzONSawYJLbczt6Wt0pXuJEqV/X+GFY/NUvkRwKHAbe46GooKAYzs/E4m00V+ArWtZjUe4xRiYLFzLMshI7PQrwlZ88qjVvNo9EkYRcLSgmZufvwZ2DmeulZYQ+LW2aVWx8BMnTD8/Cj67YzXsrH4OyIcQhSSZW0+nG3+wYhHDixZK0YH7OvsWI16RXLKYSSW9jqjFM1DPusKBiGwSxLcFX+rA9ToQKIEbp82rWgJrRQR/fLHBN5AvSwHsqsiwifgag9tUCFB0yRni/qLTchvjXz6TnSz8gw9kyuG6v5Abxfb/SUobUbZqXp+YdabjJV6pwZYW9312VRd5u1lG1hwPLNAoAQePpok7ytoTRUP5ZYivd1L8nVf4SHOtkigfravv4Fun46znBd/uyp+ll8RMFOFKCEjWcubqygfY+AuS2COXpJncg03rwqD7+CvZ1GFAh/WWrOuRTwxCy/dB5JBeX1ffD9uUJaFsjsnRgIp+5U8DrbKPHPjalhbIvPloCv1YDXrBEZWFbBpJRiULF9ZxjNfDpnDMp8kN8e+KAVPeBfijPEnj4qmyBK0Vg8n6n3uaKKHeoUGRQk9xZLsomF7hZkEBKB9SLyrWLYrluHiDGi2phWwiLwue+r5SubLUPOMs';const _IH='a72778775e92d9aa0ec7aa5a6bbbf2cbbafe88a0e32fb72044744a59347321c2';let _src;

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
