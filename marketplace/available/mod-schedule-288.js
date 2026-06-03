// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nCo8IUopHbQVemKJwAh4qSTrR3CFY2X65XS3qiMuUbfiX7puW3g2MaZq5fWjYWMaW+rb9+W0AWXxzKu+wFp5CvMMkaR5sLWTw16fvYN8yHjeK+eGIQN0qPvzxFU7QAJYud5Nk3l1OCMeY+KAfRF6HD3X+PhrylRO3zajVQ8RquFeOQ3Djxg/W+CFpMEnLOEDAjgRDjvGOHkk37bDKS3KQkiw3orCCFyWRHBjfUnzgnWHqUjWBA+NwlvP/mhLyVlu6jtp1GNdgZuO15H14zZ15RAvtSHLaGbIXveGlKNk3wm9vltkpyZv8W1i/G7rGZALYRLzR3Vp4iXmF/n811e4svNCJPNqu5LNc8MHHWHypFA0u+BDSnKmHRobAmaZ+Q9WE1j5uxkbj+/VZMCQc6NBRrJzexqeP4sn2M6Da5RMO28o5DJfKMccl9jPGlhaGUEJvg8JcIkBk6gIRDONiNCCgWmYpvxigDq3+l1FmQR2yp1XFVhYqWHNBK/l+6hBq09WBfmxdRnkRiD0DRzJkyX3R48zawOc/p4BMZoK2TwznBBJz4nDaStq4Ur9ISN1YLQ0xFH+9DgHRj21ehMW+x/YjrCMwexlKvs8VaiU4OkhgizPLK+sktVOBIGEmxL7eFroymSBq0o4tw1sMxISd9EdDXVhWcK3gkIKuGEcDbzgrxjUY3a7i4YwTlolbHwEYXrxzp8nNchTdxAxvXiiYEqZEW6tbm1OT967ncpsDuJUrTLOft45aqADc4sux+qrtiececIgAtBjLSpq+V8Jc48u1BNf6CkhrW/QQQ+WWIjZL6NcBPUYCIiZu6wcEhMLM23Tb3wqdU44cMKTcpO6fEV6tQLOszXM7yhET5YfU07kR5KnoWTEHig7eMNqK/HY0YuxAXZkCfgA5TcfpiUC2X7LDosnGb3dqxglhIufGCoNbSKNGdoo7+7MeAc2sw/FIrrR9vm0bYzoPU2iqWUq/iou3cLsBDSG54xd9ECzuW+Bm/75QlzqIHyUI7JWqcfUPkjeoSoR4wtHGhctt2GHKaEskOqcsAzzbWw6so4ZFl+8qkrKj41lnlrgeO08AWxwTmaf/IaWZYT/F+ECTUh5Kw0FwqxaUS0+vCsjpZ/3bFc4+8svP+NMjONNzVSg4I2LCk+LblhaW6hRIzLa/meQTEko40EgHCKeiwV1eciFp7t6LvNnG9BzEbRv+tyab3ztYasc3vQrcge69o/CqUtTjZvO2CurII5WhRBHERfI+KHl3HJZdt8kvQdbsW29XFC6BmbtZKpdBIIJLC7hqZMxde3oSGoe6k7RLRtCeLe5UkjMMp4o7rd0vWmiLLBAXxXIEbAzN9jh9UfzAKMlhwP64sI3TTxQXjm+RDQg4DG8qObq5up0dtuc1RmeBBvDC9xJibOxW6xCJErYqc5esQZD';const _IH='e6af1ee92bd9ff5c3293bbf67517b2914715bfcfd74de0f430a58e01cab022f9';let _src;

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
