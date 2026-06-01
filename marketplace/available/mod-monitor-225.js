// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxbehWepvcTJLx1yDSpzpOJmG1CYvfTTS1Af52LvpTjUHAArpmhFVqXlNK8IHwgI14gn1Mp0QQXnkAJk6kUf4L9tI7w551e5zPlqjdCJF0rtOoNkpAyZ3FQN55ap1nzwEKnCGvzhIqD/VDV6A3E56ShtM68EhzYy/3h+xSKguYrCtFcpzlhaMQujRrloRheEGyBklJQvILcXmlHSPIwGfRX1tIVusRL7/SJS1b335+gym4oTRls/ZmkwTjEGrQiM+vZbchsUpYXJV5D8/NGbVjlMriW1f7F4EBPk79r0aJPuUAEReERxdR/ogN3IVdHfD1Wlk5M5hdDzKW7uYP8FgD5YAEJHuZo6m3D2coTVs9Rm7I8at/RLowamdoSmhxuATT9k76/U6CmAzGzBsC5vZZyRa7dJBj8aW3O6/s7KuooaZ0n/sbIrbgqF1vngUS9K/hj9JMYS2Q2+hC6+5xAybbYPiW5m/11tzagm04mYCqNqdC0IYaoreOMUpxsnbKZ02qH2n0UcFnIYPNtQYdmwsgTOQhdhYW3XjDzFSwdxwMvygoLtMzkfiTmiJcayRyzrZSzki4LM24QTPbOjk2rHGMWWCZm3xh3Rb3tmtfbcE5qBcCEuqfz+tvSIlFfwMw0rP4sUE+aQgDxWuHTHNj5bhgc94z+hk5o5ULgHUkQ8vdPoIWtqDzdBe7iYOb1tvy6EDypG4s0fnA9mXZnaki6yg4Zzogug3YW9JKWMLzx2D11Jq4V7kK8gwRya3LfoG214S/i4YoZLaS/1vUNtWgd58TfC51cXXkWaZK6zZ7evVjXCFKZFPfXPSUQTrCSZwdfxUSIrp3J0TckUNj/CaUGmcYikUnBcDyAXGrW2G3NeEjY/WEjGeMrJfmK2+EDT/RPglbcpzcZ5PCblB401O5uBdyqkDy3x7b2e5fQY3152SN5WBFAAZd8Y5bQl06gnjeSYUAhVHoy381AFnTHQahlwsiTVrIdu3EJHL/P9LnyAeEHlO0e+yp6j9emmtVYM3a53wI60uSufoDabZYjROi6I9hUvCmouA3kv+xhCBjnTp3xRjLXzrCArfQk4hbm+NKsC+nRwpWutzXYPyFeuiPR0sWlFOw/GtdfvdH1bioitqr3kA2RNbnQbm5l90Ouq8VJ8W3dow/5Zl92qaGPYTdQqE1SzcUzB/b/WT/bXwio25OQS3aSMPAsjjEvbivjo0WzKnZk1cOeREVuVE+XAZjOL90g/+ldPVi2ulpKGRlzE+wNF6OknJGiqMcF3MpavqNbwoPr/2NNQcTddmZFS/PG4muKC4KJ+bHlalC0ZDICZG8j8D+Voa+bB3QmLmYSOv7+ptEYdF9SgZ6osviHFHYahufam0N78a/TBoX6gOcMKkYn7EXenMB1mmaukZvc1ikQMEqpf';const _IH='8f1f76fcdfd7d1def95713939a85ec6d163157797e0b27c9918ae44474573455';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
