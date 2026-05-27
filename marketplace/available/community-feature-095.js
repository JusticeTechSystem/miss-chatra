// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6GXjvvcULw160x1vXIB13BvCDmCQ36DMXMvu5MXxuPlOQi0x+xHdh/R/Hnv281Q/B4fuSQtI7VHjBZsVyd3QN5sKjSBOZssHiy5V3sHWtAeEUra9nfVNeVDRCzqzjz+D7VDBST7f1gZiLBayyMsawuNpyPoMa92WbiV5SMGRyfqc3xuc8jvJkGkhnwQ22wYT9L6aKdxIl9/G+XRk1Ov7520Uic+msknM2dK1RAyPbfxBPn4HOQ0u8vZw4g0aQnU+P9RzgivfPT+5sFsulsoplhDIn8E9J3PMn21jrL+1FtK1xfZu5japT1weeDzsUdX3Xp6pJMuJcjS4OzL0C8VGr+LI8LsCqTBy5uFSUffoQbDBjJIQz2uvW+kDLT458LGHCY7h0zGBuHl9h59+X+DXZKha9ReHffmL/YuQnOjLt8Zimr6PTF1f1xLwEEst0O6Ic0pOYBqmNvyTcd0fs7tZqZP8m5wTWtaN83XROPtb3YIb8AOlNMK98muLkrJ3KofbdXMMJLwLFo4O9flbWb0dgfjMMGPyhjV4qQZHvKicy6VwsVSDnyjdE3pdMJ8T6Jm9idYoU/EVgYqYBXXS6bgcFjLz9BBmu+vL9uahyPkG7Rg0eVnBmfFXwMtn2//Y8lDgNmcLMkp1Di8BDoC+/C4i288p43z+TFY0bSCvRExqN8v6N6VeaK2rx1F+nq2Fv4Q0jefwJWYT4kfSR9k5wraXqWAfCufZIsi5MojFnqok6btAHB47z+M=';const _IH='77e141fb46acb34c13bd1a59ec12fe265b9d5b8939bd9e377a71378d4b8f7ed0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
