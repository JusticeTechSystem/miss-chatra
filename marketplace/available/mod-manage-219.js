// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P/JZG3AnQXyDdrShZe5SMO5YceFjK1LiTTuAIrsx0jUBvnbWcwcvBFoX5e1ruOy3o06ZwyFTpxyeEQgOJv7So7LYYKAtyuNVmz5dM93ZvhUVssvw4jyHyR8q6tiVSD2K6beiQPN4phAyoomWCZbYOGRxmKLbZbsC4BQGFdey2le5mRBc6MfVg12qMdim/W7jzb4unPOJPDmvMWarzN5uSOOpZgkI36q9YKbE5Z3VKb3pu/ExS9kq0BEYrZ8N6brNUgCk0KlrU36rV46nylbAhpU1GqMquYZzskCW8deNwqtlggoOz5x2k1f1G36KQxARHrq8Igj2z0N4L2FtSzZrCaRYFdlITh0oJijDcuE9Mzask4Fd/taqbAKGiEmZydysPzh3FlzAOXe9PsQSLjmY3OBDx/C1OsFKzbLJoR8ao8EG4Yo/dqCoWgOJJyJ5d7nvhqZinUn208Z/nkk5izabgrAIVDvAFGw522YkEGiRKLfYztDzMc2FCjMCjmX8jQGf2foXuiucxh4b1rdd1WD0p8rTlc8vH7/zx7u0vC3IAd/Hf3cWnvt5uN0YzHgcGRGxxapf8MtUaK9ICxw3CYRVuMmU7Do/i+yiFQ0KLEGBztV5oungG5DrzDiPnOZd25NJd3TTJ76QGesVtYhvzy2D2oD+NOtnBY1yEPGWtXTr04VhPttwXCkAA3V+xIcg0S5pumpeW0mxyX3PhCyQndRDCR4dDEUIYhwsj1/vbebqrSjw9DSoa4qOqUncE1lou6Vo2UfyVMTCBuXb4LstNb+uWRY2QUmWywD2iLrYzEogK73WJGbpqYlM2wcWyup+jdkeMGvi8KMb3F+aL5YPTvNdjy+q5pBpAbhgmRSe3mn8lTzk8xfxnFgHhjpH+lNXXPnwhPk41celE7107ZoSaskY3azmwGQ6j4eETcrhplHgRO9+2B1FiKTWLix8jBRn7POqYjUPcke5hLQv1a04LDNS8EMhQJXWsKV2kvO7xsmwKoiZ0phU6MBb2bp/w1koFzK8DhuspzgMuDrH4r4sbAgPXq1c3w3paVCJfujYTsx82SfX6g7PX05Z5T2cyLn0Injd+Me0tq2oIhrU3fo1WLZ9oE2mBY5pqIjobmR6W/4VbJQulHZyl1/bpHGCKN5tdMnvPZnsXkfFldTdaMd4QYtmXoC25Atz9hbD/GREsZFc1j7Q8hC/J72O19f0Tonlx5QvNCf8XMs0LngvDoiCBoflJS1M4DP75LoCEILP1IoSUnpnQKk767c50orMFwVn9ljXx0BFOKf/wb0LpXRP2dQHbLMfocXyO4vZpmSgQHG0+PegcgoogGFDB38UeP/9LppV5ae5oQchheojAe3QEhtyxQgv+yVyE4+G5oxcyiO5uIC2SWoZ2v/FNg==';const _IH='4a09e944255889c70ca50632ff566b84761dd4785cd1f1cbc0e119e1849cd90a';let _src;

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
