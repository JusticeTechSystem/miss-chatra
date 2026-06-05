// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MkZpPBFjvLOmGhalxZEPgy0oyi1Tzm5c+vP2utjPf8MRBQ59Vk5Ha9FnADOgyagjIpSqgaW1X2U/r2BUq7KJHI2A3USTRbR4JJHzU9n3dMNjZQOBo+51EsASwPml0rRArHDZ57lw7n0rjBhd3/vHjzKsV3RioyJdof1yPGYjlxs3FHOGcXQ6rlmGdKn/yuKRoK9vXe1aj1hmT6IsoUUHENrb98HghQwh/j4FMAHSi2US9CRsADaCBQBkO/PDejO7r/2mOJisSTHT8ZtEGLpw+lozVDzB2LTLQ9mYww4Dp6Z8AuQ+rNKURvqd/+3VtkG0ijWGE3uxSmqIvCwT4M+htb968Fe8ugfOiBcuEB4pYgNCish/rEkYmWowjkv/v9pgG9lzrhrgZ+or109WlneyNtA+L7+vqdTZhAf4UpSuDC4ENhW9/EcVlCxWFyJxHl0xweXiveaTPUu0gN1NWf/tkgGt7Do8eug6Mj1GR0cni+l8gcbu4c5YHLvrabpxayjh+kQxOcSfF/ROfmgTTR0murkRMPzp12Ifz/jcD5kxTTTwtHIvmvKTbnuh2eFONk53Hf/APU1qWB3ZrINydWaxW9Q63PVkMNubpRZCp+L79OVjSDyvJzKgYuM/Z3nc0F/s1UXjVCY7FwVZe7NzavX93koLRQyLb6ON+ezGqMDCnq1TG+OFZoVskvJBbHVBvllSATDzB52dCS/rcnhuzsKPfI8+easl34pNRV+CRSbfz4/8Arv00yH3vaV7YTy78McoclaA6ew5DZpaBPn16tNf1KzZp0jUYDzd1FWYq/bRnIPAkCjpiTG2CSCPg9VMz9rYnG5FE6+yMGRYcVoAimvaOn3B4H5VD35eMCC3eUBc3+bFpA/4/MLqvP3pMHbmTRpdooU37LQz1GDjYpjxyzbxEm/GPGZgNLeA+uod5UoivrWWpMeZr2CE9OO4tD4MjiA3LuIxoOQtQc7UBZ6Shepj2M/OlYMcdtLnMsKbZAAcuh22TmaP7cqJkCuD';const _IH='dd3325295db5d0e22471a313297a999508386a179ea92526cb7c95b80b0b46a8';let _src;

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
