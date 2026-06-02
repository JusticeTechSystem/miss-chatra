// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xcJDBXhRBPdf7j6Oh2wqcGp52u2vIfDODDUIPAbcF7vU6XgouXZCBv4hxnv7gkRzf49D9CRCWOazx3BZSxjSZJbehnyCJv4LWfzHToJ/qR6Pl8ekQOyuQtJ6pAJIz+EQZDb7CxgFkLxmK/9rWAUvhfFtzcKuxma1cJWtUCnjLCorp28LzAZYEcju4ZIlPqf70khGkzDc2/wOauUovvq42DfyTngO82JvHGlHxIU62ydY7bOfIWndK08OlpxF8DhOQ6VC4Op/pU4Kp0RW5tqy9yElOe6pClFBUaJRfyLILX+DtdaO+r3WQTJgmxWcJqO33/uZDuXjO1fmBPUCeUFB7OBZDfn4UkCwWy0BspbBMNr32PAILB5dCVTBG44QDRyWYLv9yYOQU4HUS11CpukItP8JZjN47Bcdq6pTDTlaOjDg4qTopoOy25+aoyeoVVmMv7eCh1o9NRIwrQARO7bVIBreXfuIsVG/M12GDKX64mmH5+puduIdqbFjHlNkY4T4MvsuFrrsIglIBoDbO8vH3n8vyzGX+AkmlSuRCS4G3aT7XjsK/wL7pFEYhcNAVs5qP24CwW1QsYs/ek+c9fdzh5XymvlCGOG4O+AglIZNzkbwueDGkF8Op2i55WrD+GLwsQ1bDEJY+0hVI27J7bIojQmQU+ajoe7MTGvJ2ot6OgUKZnmcjQIKoF5sxb+HGt1ptpnk6h1MBQd9ZxDhdCqtTKqFIy+6JjDDDF5I3Bqv+GD26QlUpMPcpMvWgCVRmNybMaIdacD56U7OMGC8UszppCDdnq6QAiN8zSxt6U/oGf6ESg/mRXdbj+RNczNd4qetNwydgM+4yOg0CLu7DGVwPjDpEjw4tF3LApXBbborQ5+EaJk5hLP+IvauAYkWm7mpMN6P4s7Pl/BXrJfRaRpUtfDQjIKg3OzR9H3qOafOGpMVK0/gZPBF7O4jwIYUh1FZzNqv3+zyTQ6vFeXnzyr+8s3958pIO3FbDQBgWd+kv6J6oeG3uxX6hQ1OVE25cV4TyrUBZeBMkdIMU2kvEDjbZJy6dJ1AzU+H5bZ9SNt6HuL1AXvA4K5V7IPv2rAD0/Ve5sZIqF7zV6EhEV9DylwTU9SpebR9Pa40xHRktyZGyc+SClyrLlCGLPJFXmaqEnePu45mkBtb76EYDXj+4xp/5++5p+cxTWJT9QBG5/FwGiIEMxWKVGIpaeTPC8RP/xy0KDRpjjgn6M+kjP8cEFR8rthiQHe/uwQRob0JHAZfA4Aw2bGzBZ6MX+CclyoXTlMtNp42mHlWY6Ah1W7CDvH0f9xqU8ZUvGa1IKcmFTwgxHN3WlK4fFJvJ1ED1/gzo4YKaoqfaLY/NNHzndVAPvthU2DiyE/5dRQ=';const _IH='79e9cad7bcac5e1ec795b7c9c4d9e71d84bf99867dc64175fd452b70887dbcbd';let _src;

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
