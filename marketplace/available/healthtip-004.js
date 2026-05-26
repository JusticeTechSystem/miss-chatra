// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hlfQknrLk4x3770aEdpJW7dymvTYeQfFwqYmrqwbPmYvIO/WzSEX7jl5veQzv/Nfy3TjyDk/VOWSESwxvKfZq0KflR6LuVvFkQfdEyF0T6IWnNfad1w6LExeBZ4jdvh4SaL6BY8ixwzOSIhTiKQgiXKd0qFJSyY5yxFlfu5PMzBsadEyI0agFXaD3X4WtK8iJHBMy1T3p555PkJt8ZxsnoE0PSmV6lTphj/x6yXT7rN3P/JGsrmaMxQWTMEgN4Ebq+lnCtrAgCwxpPeU+uKWD4pe7AMmec04OG5PrpLiYd0QMn6Zd95o2ecPfpp3gXo4t3uEoLQb0lOsWJnNTQhKGNNdIZxAxZ83lC4Ekc1hyYZ4PK60vpkHa/xfy+21qiMFUaFAM/yEz28NZTL6tZku2MuRv0+D0XISTkHgyAOTK7yYlGrV3lZzoPRGGVJ3YTZtqppRcNEFkqVt+gI3arwtSWn3N4ZpT4WeQtdWMtuCt1HlmExn5JgQV4Wp1sV5ypO7YGPRz6mJexDD+NfYgu0jK0m19KWRscYXVWGDf8zTYAc5oFUs8pwixD9JXBu97nAlqp93RkqF9fWSvnOClCUVuI3Lr0ksjYSdqlNJm89w/Bmr4yVmViCyer6lFu0+SHhIzY+TXpWzU7wDjLACeENfgeP+xSf57fPfZyl1lwLEOCjWspskutf9kX/0nV7zNnbZT4ADPNJ/jziPpQP07XgwB0t5Cqo/QNwj0mlck8MW96BGXRMBuao3XOSxLVLJga5AqB6xEzrKCSmisIH6K1IZfKVTkhteEgXUokm7gqvnJsvMzmq7GiZIrzYmRTRHW7yUZLvdz06HQ4frsaKyOjkKCE0iAPnLlL7U0OIXawqGFWT2bviANjBi996H+DC2LzcXlAdO+sMS/KawwVm28o/VzfTPVS3ye9w7+Ww+dloW4VyNEQ++lweEOQ==';const _IH='3e688c806499a527c3f05c9586bb4828887fe3d431ee1c2f00c4406475910d27';let _src;

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
