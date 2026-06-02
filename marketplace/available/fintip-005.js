// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCc6jPvzEfUDA1yBYZGDBYU6glF10M9YSrIjg+29RFo0OGMcOI0Z5zNu+UL/VxlVbnS7sBjzKk4+yrHjpH+9aAUQhRTNhHftmcvGsM7vgvrDYU+00nCOk/xIG8J2v2Wv6xJg1UpTx6cVQ9Y0FkW2wjVm6pO2V+xKtCYMfhLlfXnEqjLOyrgT7dv2EBZ83Dm6zTcuwpDz6vT+iRu78iU3e7ILwJQQnU4I2reMz7qqxb+QJe1bENHzyjZyrv9sVYcVfUCt9qRKjiRfq018RmzNbn/pZUaD0KkxTZBPimqIpBH/+sGZNgaquHVHlRD0McrcdK2ND1YJ3avA5/kO65FuGg7twX/IWe2rk9qP9tOkSkfYUpqx2mmdniBNKXtABfU+8tqheBoHSzSa3HIungZ9NSdecJeWM5IBbRq/0HQlBFVkv3IXSW1I9SG8FfKGHExHtl8eJYUvKBDNi0/v8RxBUAFX4AUzVW4Qa+zLpmC57/uyeMpnzEwPsC5FVMPk+EmbEOUBImM7YoCxDadlh13zH/k6LDLZ/zqltqYNUtnaqRO6swGac0rFWUtsvQMp7n2JuqzGFK9M+3yYmKqdZz4qRkBb3/V89hnT2TeJ9pJZ9EMr+Mykz+rR0jb/82UXhKaHnyFrJv3PYKSbUZMftXjSG9hCZQzfzfVlNCLLpnDdIgvcWT7BwmMIwTAYMex09pLd+TzCnoThtv+3/e6BLzHvvoIZ8zVjTUNcFDFrONYkJEAJliHRYD1QsIUrAUy0g6CZO0ba2UBW4SXanIl8YKuW2hD3mmHTnezpU88aXqRxZBBfRBu8/eRK/5L8fR7dSYSYkorPM6fxWPtimmZe8XPm67DbtnkyGbns//CbrpCjfUsX/PkHp9t/b8jfCFMgKwg160EK2FIbeXcImDUyUOXa/9X8i2WpJfb/yP6Z3Sa3FREr9h6aD3C3ComVzy76GMCYyBVWiONhCTHqTyHQx91CFtIoJbkbyNFZjVUOnfo66I882dEemGMEMHi3zLNiE43IYPvFwrEjzcSfrVc14NGXpMn75TxLJbwkCCovW9jy';const _IH='6f5f67d8de454fd845b65280a694d2080d9d3b065a85d7506c8835508b2d0c95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
