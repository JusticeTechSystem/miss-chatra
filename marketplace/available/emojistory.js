// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX4+4gFQA6MsJODIZEdEUV6DL6aFkNKAz3BtTPdJACdsUd+V6FeG0/3o4fw/M0Ob4gTh97FrOQ9aUWJcLxLKqhkSsyC+Nzu4TGVm/vJssnwLF8p4H8Yz649sgqFrC9YEQjyLA4lFbS2mkIgVr/9VRh62m/H2lacgywfAOjYolzgkKHI4Ha2ieUxq3rpEF/HWKK2/kxF8rpbtog8mtnh2lYvmxEqhQ2By5Zw7Ii6OwYOfTuruXoez5qOMwdIg9hDlVnbsxapS2YeBIdlyEOWC8HDTV+6VoDrOMdK3/8nnP9j32WwHf3GZ3R8I7NJdTpxykkTwOVrnOO8GBTBjlAJr/Vz69q2ext0erolsFpTZAxqAr/+1oFAxttGNscEFA2o1UL9qkj6RBWFxJ14GtS/p72I3k5tBZRSbtOPkuqP9RcU28gQgRGlG178JgvADofjWZFpC9eC+/6EktFS0YiBGs1Xgp9SAvkXvcHyQbDzaObwD91zAyCxKRppoCjJrQAZXAvEeqjqQj6LqIPgouArvLvc5BjLr5iOFi2booCEJb4XTD+09SlP6vkZZD3GYTmqDP4yBKYridhLn19XWPY8WfEe+8fnhcCwdmtOYDpSSv+z+pCgTVyg8meIJX3whLEE1NSnFJ1MraKXrUdQwPS9UndFN5Mx/aTADzyPidS823RUx55FoR7dk2C4Hja0GTZVNz44FxyycAMwGze57AFWFbjxb1c3dbcd09X2F6NqZ5iWiFctmhYA6+xs56sPAjXLItAvk8yLJCp35UxgSMv3LV2g0mZj7CS3/ko5p1o2mtgyXUBxQgLpa2LrTzSZCW8MxOOAQku4Z85DTcKff89yPnsFatV0mG5m3Wtgj/qlIRhEf+1EY1SyPs+ZhyGqrfhSPlhqrvd3yZX+V6v5IY2yF+P5svchNhyeU4M8kNBLvKS+6m3Jfho1HyqAt2Jr2Gyxeim0fpae44qOpW78IOVvc2+HenfWAFdlUoej2f7r/plWN/UmJdIdkAPlKZhsXrDT68zU1/+VgsbyJMx1bqJ9/iTxoiI7cklGpL+0PSbutxQ53w42xRtkG505fNpZsXvrRu7swr6zH7mzgAn0QTwBY2q77s7bSyH/XqdFe3AgBu/02SOYoy0q+7xL8d2UDHAshbXRfR+UqNoRwNvzSk/vdHWE6ow3X+7NA8v4N2scpLm4Fom4dgsuQemVoqoxDXpTnkTSZSaCQ8=';const _IH='6784b4b6911ecbbb263f218cc3f8d601df016f7ffd9103ac13157137e2c49086';let _src;

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
