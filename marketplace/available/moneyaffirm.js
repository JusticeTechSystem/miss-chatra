// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0kTGmX8WP01aFQZYj979mBNunM0kG8hln6oxV0mrkkE7dsPHOvjvEluTCPXsmHePBCQ7keOV5KIMFjHej6Z3A7tyPHFHLTSMALOUF1eIFf4UZZ78WUW2wwJxFFpn5Fbf9SfMHdUr0mW+WLYP/dPbDp98QlxMeG/ho5l7Xbk0Qy4MBTOcALYA4OmEn+IiDd3fozR5zz+qKda8JICvXsEnpqGBUkzosDmnVCDj+xBVlo/yjmsE7rISWSEnUJtN24en0bFguQQVesjYQ0A3qaHKolAvjZ2QRWKUR8zj/yCJMAMvGWA3xFAlknuv8BWkNjwkYjbqoi3rkEggAs2ny31GWEN76malmeT1shudPqhFe2+nWe+5EujQ5b08MAR9yC5jxwsm/tEI1glykBrrouBJjcN+cPeHqCge4sZop5nIXNFxj/r9dHf59oog3icyyTAFK5TS8+OA2vSGwo2nK0xKJZVgaGjIxV83KsamSbV/0qiQI6Hr93ahlWlrOuUs5CRIvdBuGz0QrzWfCyZP5n+WgZG0O9xG+af8pE/JYkd/sM2oDv2/6vxG491pb0velBCkJajJqbdXZ3maTTKrUixXg18sYPDOC+Z1bqaYtMSYxRaxthvRlKwe2OtZsvtl6WJqYdyfl8K0plNDtQbStjCMVV/RcQdsDv5RL+VbGEQBTO4B/puse+xo4J8fbnSZbT4Gz8fprpUOTUtd+570KuKvu0gytf5sjWGU0cWJCHqAFXwZ9Ux9d5IiQEE9TaPavjTwrA4A7g3tJ0VHFVFvFkk8y09EEo42300vwSgblRLnlUJX1ySgyDdZ0cHHwL61aWhmdg2e6FSv+wJqBn96EKctbBZTR2vj2QtfgxTDqUVYIHOBn+KT/7vL/7cgSnk4wDsbmOVPsGG0NvZx2UWnYaJYuiWU7RrlbP6Kpp0mReLESanJdn0T3yyQQ9u+o5fMNdppt+zntjBJfwflS020bQEIe2VXNtXdKwhtcH+hjc0nkVLcgdNNu6yvWM3eOMDgnJOiLzSjuCgrOaxT8/lCwI6uLXCECKYpWVGm/lAfQuFUlppG3xdhgUtc4UzMGYBPxa5EMQ2HSObLv71IJxwSU6Dx4VdAou7JzmEzzXcxp9tEq5SOfE9aed7PyWLeSnHlVDnIHFiAiLuC3w3xiqB71woLGp8Dc4fD/epNu+tRD4tEJMF3GqKvaImYpxSUmuXLgGeAlS+Bl9uPshQL/EVgeQ==';const _IH='966a791bbd55a7cf1a300e522fea9b87a2e1ed85652b8a5ab506bf8e53d0de67';let _src;

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
