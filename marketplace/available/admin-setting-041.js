// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Hpnbcw4SVzszswekCjYCGEqr3WAvahW8xXNg1Hvju0eJza8+qZjM2BL4IxQwM1QzrEhjoNslZgIZa0+uV3fDjVxjxK4zxP4Hb3s5zSUiLZ51J7LCHIYwLnBViwTPB2DTtdKWYciXQuznfmXvQfh3LGKRt4ALoLujGC8kzU7oMbDJxCHbZ/5yONtcxQkEfOt716B0TYUbx2vtYaADYV12PbHSVdqDXowuBwAhUESLdzM024+Ctpqal681Q/j7dwjakl2oH4PuiIZMJ3Sr+K7SgeEt15yny0BymmZEc3FKgfspsLDg5z9PSwCn5wUm+wHIQalKDBQGYLR00HB9fFECwSBW1P0vM595O9bvhwDrcd6Ao8wx6Es61GLvzInZ44R33ZBM9AHdaHbcIiZislWMlQ9LZySvNgxpqbzwdJMxxtbnIgUxHxr11jk+zpD3VVOzf3yKb28MoCJKQ+/3iEy4qz7jNjesmsw1JHqITrraWrq/p6vqWLUJjUQIFxESK6zeXu52j4un+lPWNw9kZitylwJyy9+QHZ2/VnDNN8Be/6gR7GcOEBOp7Xzhpz+twV12XICsSmsn8zYmVGYeCHpo6GU7tZHbLNzdi9+9rGbvXz3wobfavCbEBhdPRq1HpF8r0J1iSFJKCsFG657bONmt6JKvorQ/aZZ73b+wUiXa6zU/OJIDcJrnrKHJHUtIhyamjuiRlOLLqPlMvQsSzK7oDRIVLiyPsc0tize0niudXX90dxrt8O9/xmHiMGAs+SgRn6uRunl9sNv+LXDxvXmrdjFPesFGlUXsx6vcnuely/4xj0xmE32vAUwmweDUMTaiOPDXxN6bXdqzft3iBu8eGNGiMRB+72Qb1WOcx+pyPHK5cEXL84ViKjVeoW2GcTVxfRw9z7EanrDH67Pqqm3lDV0o7+EMlReM5XQ/lz8yB0MId7KSbpdNpWPQRCOP2lcLPazzV0pmSqHnZzeDKWlCxiC0JhI/E4YJj1/AJJSx4+gziyMOJDUSxCBSocM4nhpzD8Ntg==';const _IH='98091b5562c1ee1f4e12a534d26af10537ab2df2070b3793a16201af96896fd2';let _src;

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
