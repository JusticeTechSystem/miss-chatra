// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L5qFwWLYs5L4X6fDyMBHdNyYSSBrtT04n8o+137mgjrQOQWpjmP8UMdOV/Y+xqrWFH+m53Mymp9O2A9ijQhQwzBILhqX3uLurwSCu39N1NSNnmYNFv1iWt/GX8qeUkLVIBd94uLMDLAinRP6McdX2d0TD1RAvkXqZFY4cKluQ/uGMQUmWil95+8ch73wK5JQ9M9PaoKPx9BS41tcrWOn4PJq0+5xG28hOggktucMqPdu7FuTZV7P9IH0gECDGxAD1kMom3NCZgknbV6Yk6//yI7J5ZY57r1EOTv5K2x2Fvlh/gGLHM8WDmWyNLW7YqY/0SEvMBfMGT6VmS1dG1YscbwccXu/PRLRTI2VVRur5yE4TDMrSAwpslDuqW0CIbPt3asKMtReVItoG6JSXF/GjmeEIUR4n867gcvu6XP+JHwmP0Jinv8e8UNojAaL7xEktJd0cH6iApnjunMH76v7JuDN51v596MQ3JG1Kels+i3WApgwITIsF0yDSev69V5t8vZG+MoNVPCtNZC0fgufS24XvMbOPpDDFgg/J1iv9jQk0FusK3VgE0PpK965+pDXefdBhXjzEDIUAUhcPLKSaF8ZzRRIV1sdi+ZoT5gZvxxO7R4msO00zC1+uZW+GgTF8aSzs4HtfDYVoUUoqTxemsgZSyVup/mETdT7oUN/FjjsPMjy6JpVJiDzOi3WEFEI+ZgyvvuohkrHKLKFN0SF3O1hBNf+zq4ztN67xHA/hQ1FoFyu1rf6XJYlqzkLAlPi77mIIuGH/UdHHSCKxTj6zhrSB4MjEWJ5mEihEbEFnbkUv/6Gh/4CXldK9IzeF3HA5GZSgeytihA38vBlfiLp8iNeFdEw3MBDvNFbBai3eaZr86iGUacavclihksgP+qAmqcJEs624ygPaV5C4METxdzomVO+OBgkC9QrvlRejV1QJl0qBigr17sgfiASUGhl20vpIK2PeDcocEdWjzfT5nwt/AbxzO3Nyq5UygOUMwoHzILlpTpHanFBssOk+Bk+0UIgwFIHSRRiKmQD6GISpX7mMHae/TjXnQss1SN8M3DUQd9s7ECZ1Of1lh941LijQphuHdAeiB5DUPfZaiyMwd3Hwo3CiZovMEwhmLUgW60xFy07QEuSOB2pjfyN9ajQ1gj1mGYvJ5R2pmbFmCjw55U+Zrxf0WqN5vL6auPLlmtLDCcnecOm16uisC12JB7hsLmbFpaJ8WW8D1ZPq9CDPstx9JgX+3/zGknPJdDQr9SDwJaDPRh/a5ToE3VXe6uWKE8bWbKxYKNUcqhxM5e70OLI+8eZSD2bjtp/r1YMMZ3Hd750v30w+GoaL2CcNVLcmM2jb1fCynSk3hxDI3AzNiSSi+gaVPZ63tfyTxg8Wjzm05s=';const _IH='e5e19d2850981372f2845997f946221f3538173d58d0e33f66c40f572cae196e';let _src;

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
