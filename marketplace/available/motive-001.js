// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ2BQZrsTgs2eoK2T8gjJLotS/kZX1elg35eU5e5ED3shxh3b8+MGM+Os91XAOjlUIslvk6RaQ51+p4dGjgQI3CaJiNp6MzWq4fOaDhyVkFYF6KkP4M1NU3ZJWYTFTa15J1H7Y9V1IRXL96lg486/5ofJnY47LURgDg2kji1AJNHEzkHqLVQ1VRiUq8QAFK48axCEZ8Hd5XFmJG2XadIU7J298V96BS45DYX4WFgs5G29D0DPzAr0LShI0YeLQS4WSa71oqIMPLJSO+yQl0fircYzVGMnOEURP67brORWlGLGS8DYxS7BHXLTr1bNxiUNemmPyR/AtisMc+Rm70SQxKKDS6Z5OCw7ijNat3MUk7s9wxrMmf6vKGPoL3MehPsQFCfE/NN1u752lxicXPKfF+5sHKFdIi1qhm/IpWX7ir/Nge97XGJ0vV9aqbqYULyW4dqopI7h9R3W+AmbbY72xUIGxXT6nJ3wyuGOf01hI7Tj6M1SrCSva/EwQtZybXAYrp9qydgPRJw9oYEcm1QIxI20tJeWTt3e6BlfT7DZbpK1YswtnAwhjXWeYfDrpuX/BxrKmo2hDp6jj6B5yTTD4zLIF3kNtuHlhMp12jqoGVy4M8eo5Vap63HLzhy42rNJ/wXlxwpkzI7fZdZO1ZXJzc8EAygAEfyrfwQDMioRjDvMIdKNmtBsAXjZIiDue9Zqwmwc43SVwpxdb3C/fFrStBAyTfx4I9wiTXlLCekMeMMNqE7f10FScAp0+NQeWgmvSsHWnEVpcLDvikU+iZZhODt/cpsx0wwnZy/9CP2TDN5a4OkOVPAtXM5ZS4ZOeJpMoO/K5z1Ph2qRvFodmj3WJ7yGtGfzOf6/dlasoT+UVJQqUp3dDGfidK55L3lcd0GWiWqtrlQFie19x/CWNO893H4JAMqUJPzr5lrAwd4JhpqgXjaJVON2DoVvGniVFcWRtXI1k4qDQM2YDYQGpLPKr1okz/EWjeeh6sQrhmzz+xMS4eoU9fLAX1lYQ26n66I52+HzS/buh9lBy1Nf6ow==';const _IH='37de80c4cd40675187e0cb90cae868674e854faaefd8a9bda0d93c2c6dcd5682';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
