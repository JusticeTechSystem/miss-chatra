// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iv8HYZYuxbO+hfWJ6U8EuFJTktLMYYUezFuv+v7OX7F0EIJ5W5YelyunIbGxlQngOObN5HK9hRsvpovIwCMv7e90pFWTUbzB52Tk3xO24gEXEiBjXv6v2PWD3BDzjtRK9SGwPwdrl1P4zWMU4j7QHzasFmXsC24Try29wjQA+oQ0pvJ6e18B/LUkOsLoUNIBRFm7HFNmKuOFc9iGo06ux28XF3EwQQ9QJs4kxwX9sdvjNrD629QZTFIVkAWMyNy/y/DlDRDhwLTvPLfS9BXYUBPR2RvjhZ3stRP3Vu1mCydZBuHtDjMU6lF316FXryYnFvbI11hbuifjNgpuP3y/HjZWiYLnASpqDDYKUIWb1luMZUQboO6aEtNnR1ZUPgDuduv+Eo3X0w42As7KBSHdyEN9HaTZtaJNrohQljNyhUsZQ/jG4LpA70zKRYXAIeSt5yC0jreeqqHkAlRAoVaM74CHiOlQ3/CGEuR/Nq8q27F2ppTbbVdJNOIalZmmH4KSweoPLpvWAShi+7hGsVK3O04G7idnioWJXqAiRH3a9dDHez+pCaEKqOW5fFyH2V5kSx8D9TpjI65RH/s//oe82F32AhLKYyabZk9jgF80EwFONWyANQ7leFuG0wHTpOz6/NZahyPzGjn0bGAMYi6aWv4wadshxBvzcZFi67Zf+kMiL06zSQaldXbFvrLDRg0dyBqqpbvbeBMXeRtOwsR0FqRYrRE6QqWNVku8akOe/+PkiEkLvu+eTNESIeHLpCjqYML7u9n79FIWPvIKeSromR4JV2yMWhk3n/Ee4Q8vPWWE5EfGTQ/Yma4uwYkfxDWVVbEeOJBX3dAxGsM7FuRANYBn8NkbPdyNMWCAg/R0mdC9Z+marhTtsjV02d0j69/okZwrUe02qUUcaI1nePfDzNzVHkTMdBOghN4d/Bn70TA4EsasQxT2lJRWq0almlShzS0k0PAoCkWhPAs3VKriSnrD4js75x0S1bUKhAA/84b9esVIz2XaYGDhYKwIOoYURh273xSKBMM+2yVDRA0lg72HBVWwXMA4QJxOeNL3TGvAGVbrjkGoITO1ZLnM0W+l3VSIZnyw0Qc8iz5L0edFxOq6FT2aXZuNML1MNiMP9GdCUNkDCLpb5Z0FmtL9Eh61tN0sbs5gcGTNJwyruDpGtbiK0blcTIM1FLMlT3eab4W49bDfnAKe8P0tkT+ycNcwiH5uyEgme/3e4J+mvKpSOY6PQWKL4TuS3iqeF0BMkv6dAnpXI0UpbzgINBo7L/ZZOf1G1Ua9OkMG2yafJX1CPeycRookI4MPVzQTnSTsdinub9iinmYmKGYWC42RLXW69hjIfpbPRKa/Yev760XLwyVEqRvmeY+N7QKGvn5MRyCuha+YzHcbyHJJxsjYSlBtFFMHdNZQl4OmxbIr5j78VMPjAAxMUv1OulKraM5Z22ci/mT3rTcip3iGUlIquMOrpGNHo82uFAu796AvltTlGJGj3buYstF6DoE1nwpJ/j3CmKacR9VssC2T8Jw+Gp106yb2fe0arLwNT+wfFcLE50m6b0Qqjp/QH1XBMo7MlQYvZDiGHMECCWbuNA800/PFZ/kwbAhswKvHW/m1T2NeelP64IYFuZKmYAGNuAQy/etBmQwU32YvMC6Gp99LbfS+gkPq6YDq4ULLQ7wyT/jTpB66yeDE1ZV5hY9imTUh8w5g/JruAfag4h2NdExVqePOSvSfI2dECG/4ep8vMf9kA55HmeRJQ+YO1TCzdgxS4M4GNvS6vAW0YoZ0GRVtEngOTXuuA/wWbX3JRJuSwfFkIPEnNsN8DWbKJTw5xs5+4r595xQ+mlMM86pntqB7qiXgMmFaHAK+dA==';const _IH='65df10043ae02236b3ce866129074be37b44d9c1bb4252692b24b46ba1a40d22';let _src;

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
