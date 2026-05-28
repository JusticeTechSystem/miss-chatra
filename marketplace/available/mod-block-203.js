// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gKq3QzqghjLlrEQ1vL+ZUAr/AnigOikZE8onM4GRPAR5q358MTzISuja3sYr3tpMnlKI23EopxgbulTqknDY+6D772U/0Swq+0v1JhA7sWE1CNnRBxLR1YQ1Sp0AyeJmSiNVBtlqxtgdLgzcVl+YzdCx0j78Buek7D+O/t4aBuSQ3Unimc9KrSCm0rt0/L1Gur5XUl6iv2hL0bHtIs5R3Mvr61hd+l9OLKKHZ7+1u0fu5VGPL53Mj+jznQUGzBU/lNKTz21XOw7p0k/bDffmdHkIxFpRlnDviZLBJaHWI2zI/8XOFOcdDGDdg+hsMSuh59MiEVGTFpRK1+UaSJK07LKQ95170P1PMjQwVDipJNDtmL/hP7B0dq3ExrVaVfnfGOQQ9qn549Ft+/A+v9nFp/aihU2LvATbKeGUx+/o3Kq0vApNPEbYxVpsmg0zdZxc2CTEVkSEBcyZq5GgcKVgmOac+z6fYEbzhRMnQ63haxt5W6f6QkRajcfnRm2pnvInu6iuS6kPAircrXgIhDXb2maO7clOk7/kGli1/8keoQEqYQmzLe52YJvNx7YF/pSnwb0i9pKydiiX4vVvUEHEkZMYYACACWthFJ0ECbgEfzeHmelB66iutKhwsduHttqEcEmYgXR9+zaNSqDD8VbFE8oSqAHvvPXZ0sPqofbF6OSSTD+i/JO56P9dgvpIKMfg/WlnSRa+f3a9R7I4i2heQd64vF17hUSwu2znqfjJWhOyddjCJd0OF86niJqRCbuteV5ksarr1QcSNDg4xi4T38BX3nOXGZiJjdA5FCe1wfqrpCR66XuekJv5Ef1/xVzNg7ZO06ujJvKOyXTxTTvnItLTwkjVIs7+a/GKOUrYzblzHkY/rXNuvtzx9Qz/rvXw27ABxXuXYplEeNEHIeVcoVBXUzcxxPZw4xarJPn+oKoao9KzVgm+yzm+pMHa662pENOQPrdVptWEIsNpvmeiHgw30eFd2IjPJibKazibmXrbuS2ga/4pgXMqgHrzuj3v7AnY+1wrwuS8pBIs984bFTH/4abRnAyj9R9hh7ztJb6+jTnqGCd7o5hD1sUXCoMFaSA4TzDXPxxNEL1nQDD9veAasWkuy+Txp7mm5HZjjmt4484Txh0hHsLAbXQALcUhSZ6mi/9BN9a35H08i9ef4y57nwx40o6FH0ikAdX0Y9dY4izAZYcQsHsyqjPzad6qmTEzOcXoj0xlXBwqWNOO8V25zOZTuIjX+mR08E3lxPDl4L/h81Ei9UF2haeJhqm6dvjRo/d0GKSdcMB76rGEtyeQL5MAVpR6m+HZz2ad75B95Xh6+OjVAlF1p0Va52fwDiARVdlt0rdy3xM4P841s0yQ4OpBD0OjhWTNt//y';const _IH='cf55c00fb4844b2c023e1d656f9d77e43f45a4dd5615d215515ec63fa2d1acaa';let _src;

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
