// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kwGoizh03e9KH9PIhX0Ff597Wx6kpoJzbfR28CoO6ZK2g0bjW+bgRjthR9ztsIjLEDXGfScJYyIWnvdF4WxmFyzwpypNYksomGaMvrI1lhpsHIoCvbvri91yOhF6/zMu+GM/U8HNkw9ZJ8sRYoYuSrvDp1QQ62VFQ4O3AnhuLBY3+CUqSY+epFu8iku9m5l1dfy/MssBEkT4GLSYKcigsQWh5M+RDSnOBt8zvg2gwPdM6iz6Ix2+AEeReJofKOwdZxY1FYOt+wjigsF+1f3t+CEDO6OkCZKiMwcMHZk6YUslbTlx9MA31SbPy4FL1JhMQKPu4BuoryEq7EPP7rxefuCrizbHOHmfFkUETOp6DFFAztajdwfiPvXf3kZ8HQ6BE69xSJCqwYXr96jYppn29U+G2Bx8di20j5p7p03nlwB0UA/Pipy3otM3hRab/VAiqtnOw4JMWWZsHQsMbGLfTsd4CY+uM0QIU1IXcXUNAVDti8WhoNEhY6k3cBHBldDf7xGG+Lv4RDoP39a61IHz6YonuNOF+MFbUvgDDP3h72Q4XH72y/TtYVrx1A/B+NIf6RJWHSwKana5NHiGnnmkQy6t9vh3xU7BFzyANp2XKjBtd2NKQefxnMFeKMBjHPlrqYu9+zdjse5xRXCpz4I33dfDVNuWJj+v1G1SuneCbJnmxyLe1q1u/zRAJ9iZSad4xgUwZi2WjZuk35ss7vbQRJxPto+DzUcoy12+P50NdXW2zt2us5Kvnf+GB0Q0I4XtdscsPog2a6DwHqvp26bDbmeKNpS/YXeMeNfptvCe1t2Ld1bs8e9ulgU1EY6/428g/MVFbLe8JXp/0+m11jEnvuQAra6jnkJDSmOf9Q3c98uoy7jn+iROXUZEoThz8WKICpSeLOZcbAh5zsCaOpZKUdVS1adAEntZU9GEIH+PD7Cn2lKKNMwppExin2PLnOTJjhZFz0jUJppfIGTwkwntoJWRdaAKQy3Sl4TAaBncOAX4hD3p7p+fyoVkRSuDMBHeOAD33LgBYdpWayguAHtMgi4c1Kyvz4VSwUK7xLSmHhjjJcgQYYlGV7qQiVd5sLjaNH+3bKBzlN1ms+E9Qh9kbfpdII0Y4v9XW4yYlt7cs0pNZXyaLhFAc3RTo3NsF1sr377iA4TZJjyXqID8UUuPeCU3b1zosv7Zec7hKyAHIZ65xXSGGLwagBeB50s+otGBrFoE15Xm+VVz95mGddS7k/BEXlwkUI0yM+cvea6Y3hzGFlzuQEcqAL4ftp3VKSVxOx5D3EDe9Qzhq5j67dbG/zIfsyjZmnRZ4xoUaKeY1GpUR6yJFFzKGCGOZzEAf40uOmAlQAKABqWNkqooZ0p298wKAeBXuRqS7KtiMxxy';const _IH='82592fc0262faed103a0654b54eff681319be1705460de1218688d77f75d94de';let _src;

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
