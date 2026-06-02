// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pbhxFy+mVi+kLhpaDiVx1PNX6M1yxpgseCx0eqL8Ox39c4rt/4wzVHzAFYmB8fZiKz+GJw1GZvweEuUxP6+5CTG0xg73ky1UCugph6vQdIxMBGURTObjK9k4yfTUM9ZPPBy8wLalfbpZi8MWXJ+hYZ5XBPw/cmh28pCc1DDXM8zEkeBDrukFr/mqc0qfOOX7ZtSOECaNlrjlpnSoAhnBIgVruILHHs6+cxROAJxANKKplkbbfaQi1R4NXGQTu2KCRDOQT32JjC2h48dRbz5FJWOpaDPXFL7YFkSAfUG7l1rNmaCDBxSlJQt+b6npgUlRnGg6z9Do3KrAOKeBFHTzVzm7xSX+jwxpCOk1/p0BUjb79prQ10QqwJO7IGU47MGtRiHv0rlXeujWjFSF2Mj9m5EocmBvDUa1l8/Jw+vnEZjbHxGJnQdVksfl1dy84kouDyyXwtsnvIvcni2coOkt7c0GmUHK2AefutyzcTHjsU/8Cji6Zwa+4DK3ieyTdo91DjAhVG5Yj9+Vv5C53bn17LGYPXfS9qyeDTyICY/D+1vL2DsNcsPT3vSHoEMNGMKpuY4c0XKXRreKam6Qfa8eZyBM2yDC4WpWRSOSH3y3IQM8KNNluigH3uhFd3aaKy0gOdY2scdc09sI2Ln+eVANaXlRKpyf99B2ZkY6VC0UV6cVD/64mwJNNTnB5XnSFVKeFBR4GnIkIXoUCiJpOTsEYISzEucZsfxHK1BINEnFvZtfyTeUrQU+8At+bLOxCY5Kv75tbIFBLYiRN4s9wFzUWSWaRWdIES8nft49i/1SIcTqbTw5K6gR4bpHmsaQmJYzracFfh9qqZ/U3CIzBTrmIBNXVTvinX3BgjkZxeXfoaYz8nTKZcRF74TyY60akcmypHDvt0rsy0olC2lWQzLz8RhYoiwDYdn19pk7TR1OsQ0LnlJDXlFZyYtNNXaddMhxCt0JIz98lQJgou4CGZGEoYhvIwIPs/6W+k2julxHNOihURJ5SJ6EnfbVfTpxgNK1RuQlFF84KDZG2PqB/MEAF6Z2xsud5w==';const _IH='2b96bd056f610b1f40f799b7ebf0a802b17899bef33c0ee650331343367b7b4c';let _src;

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
