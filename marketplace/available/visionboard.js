// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mp/1/MmTYIiJELdg4PkQ0e4yJfoRIGLFqtc/pJsyxWpQn9FeyleWgMGNFlsLhI4pqfpwu6oybTcb9cWnvZ55pSumUUTM8XIRZn7nGNbw5gkSqGqTKNWqTv0am9/AYe1NiqUcOA1+1xebJoRJTPBAo5cwZdQAfTd7QN1vCRUNlLf6VgS4khY2cx99GfHXNXQqMPK4wRc5tt6bmCEJLiAVo5iG1nVKJc4MtimxmZHjE8hNItXcDv0WaPLybi6So4vzvrBnWLe7rBxpvAMZj7nUQO7a2B0DEXOJDk+NrpL9rCo8dAN/3WDHxHoRiVwHZrmuBdVwtqV/SKp3pcaMWWMruHQFXkjmnRxnJcvaryaJ8BbYZjzky5H+USS0BFlBPoXl4Do0cZSzrnwqZlKbVyiMXxoWUmKttXsFTsS+h7/Md/pZ+oTizyurt2nWKtj9CQacY3Cw8DLGA1fEcv4TeqxBq96UCwgGV6PcpgkU0VVq+rMkWF7gzF9Zv8MmDuCebEFxoQbcRpNFYaYBhKk6rfPw/mAQfEjc1N4NZDpNGPzff+jbuzMifcB4OQoxHfXmzYFa3+ijEWx/iScap3riWb5ObmPngNPSAv71HtA3Pe34DHFyMUBUBTo4ahqQehjmdrj7yVv8E65zQZNXKCc2iDnQNtlg68K1hem1lReGYXN/7jjGkGIwlgQ/48kvfybxppp1yAnoyROnsszzWXn+DbJuZ4Gaokn5GCRlar33KKpMFoufubuADTt7iDVAAS+bzei3CCBRK3ERxJX4I2DnJV8bfELEEeIPMltYh05oiaFxtDBFo9LVvrzA9lGOnB1Ez9gYpgm8FDv0TsHhDVn/bgX3uw2GiK8kIRfXphEmQlcg/IPBTBxjnRUqjt0ZGav0Uget8qthfllPS+0oqOQbJmGUTML9LWZUsxByQHgobbA57v+zDOIS3QrsjKNreaYtO45HpfzqFCBz6FslEDk5vWRDh0NX5R/0cbW3/moE4lKH25zvzddbJJ+L6i0sO2NFmGnwBPWK10kcAP36sQJ1ifI8Hh1gBJYBOWjW/uggnmNKfryP7frgJf5ao8cFN3RxYOS9CtX71Y/dG9ktpvPb9vPlCGCFMG16/hJqPd7EkVt9q3p+ddERXGYbgVkw91zjSq7nsI3NApUackJO/GtjdJx3SgPHexwNOKQW81TDakawvkKIShjGfkn6gPk0vPD5WpjpwXg5';const _IH='4c7ef3a198486f599ccfeca31b6a351d6227a86429f9b448880fa942072b05b7';let _src;

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
