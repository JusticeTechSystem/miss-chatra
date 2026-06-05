// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J2+2wlvqrRELb+L0MiDabhX8tYUcovvtKHSOFpxm/JzhCtI++Z5MXZiHVc3PjDhXeNUEF9hZLRtcUUCPzLSZZbncMCpEoeFnuWCuAlDtnsq4/bpnFdc+eFUSrTMKyKWYLHUt+ftUq1bo4uSpfZXJov3RORwNwPSmJTcZK9fWfLgkbfq3wYAyf0Ym9F4PKHL/Gv5ygs/W12W02goaa1sPCBL0Kx5FVHS98lHC5g7hZKKENs2s16PMuoOgxavmKgtmfG8wgzhSSz2D1rJffjTiBYJFS7Wth8wNnSdhQaGJJlCFMzCQ2vS2weKWgny+P+oIb+Itlnp4qkvcWSVhtCWp8C8guw2QD5bKR/RU46POFlnP3ee409iHYEN4ctNTmJzVEi6JnPeUtR/zvDZj7EcqmznIKnxZYkxF9rVSEs2DwCmlnNFn6cvacx2oeTv4Th0d3w/RwDWBAuOqHyLeug4qZNLRkNc4/7ZwLS9mzKSfSoGkvCwNquw/iPCICaBQu5iVEOPJnILQ4ZWniNFE6Vi8/uhFknCQ1YGvT8WT3vBY9y322S8S3lHpmS8auIfCf77peM8ACkTTTzo5GvNQTdbY8h5Xz/LbMT2Q7sAQTGigFC9M0Q/C7ryU0VRaXImTA0TTNVxVVPQ8TmIjuDh2AM3iCXiZA/86BxmjEfmq+/klyU/zAgPZPjKEhkAPen4mj9PbRauX5t4VGLuL8TH6/m0UAm7R0nedv3eik5R+anbl0zL+6i8mihVtApJ2V8nwn1fzul6f32r2wrIeFoVH73aZV6wy2hmx7Tnox1N8+QjoticS1uCjpYvSh5pGJvlSOVVJx70xlMzoCaoZno6+EWTHw83yebgp5/ruPDG/33tuI6kuJGrwX7RH3WuwrQ5FSx7jNLxSWEgpcFwHlfkDk/0SC/TGmI3IAT9DOCDT1LKsptLHbL1E5H/3Gp7RXfbv+8z29sTAa4jalYYmKDFtzbVe8lFwkz+JL3vGmxtc2EqsEzl1prwoILcR+5q6lnNPdaGWp83l1cdUQORI9mZhWr0tKy8/Z5b/8Dc1Ef1vx+i1uCf50cjxbbU4LivCzbfXixnkaYelwlgX2CundyvxJpkB94eAILctgsjAI+M//ydeSK4pmfnhSTZteKF+UERgj4qDqlYDc8iOsmta+MBmbEa8YUEBNTrkrr3C4+F2bYFopyTc9S5gIniWu/k2zdzTYX8iFfbxfZIieRxjYTQdicRU0p1ArZ2zqOuHEs9hS5SxxLZkxs7dw+uvqJZRugvdjL13WyX/UWT2aEp5hP4wSaTZTC1GTR9v8CvkplD6ocVb0XadOlvOJbEXmUKiK0ih+94WnIQXoBICkITuA58aTRYKyCDHOAmNipNbwMeQ8HF0';const _IH='5b841f842f9d47fd285ee54a61e6a240c645f4ee071c80d63cee11e4bf102533';let _src;

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
