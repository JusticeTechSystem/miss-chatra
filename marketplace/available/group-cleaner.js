// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gPZdcN1KYzf+VQ7yQdKniov9se/KZ6WkM/N8fs85UN8ZKPJ1Tr6UG4T5vxFbSzWFRHhOKGa7RCLNav1FId+sq9iNZJgwNlW1Ba2ENORukE13WnKVEcAnJoxvChrZ5Re+Ci/aM4cFq9y0WQYpuMxjfQFk32htwofqFypUoQld7Ybqky8v3qs4/cgfHRt3VucwZnLENILm1YoCVzWSFcMpKULdcxUfjVEFnPnoW2wQz7C3ufOTVt/aDYxf7+uB0MDzZp6IOt1PJlAYWJVmKf5T39pbhnSkThfGbXdbGbRCIYjnWTihf8Jo9mGuVlfyIw/hexgBwv6K8E7jFQbVdaWoTvku5Ti1CWIi/G2edFZZh38nH6Cu0BcOJerlmnsTOaS8H4c0+FWk2lv7VBX84lgnD3bU8M08CFeTjYyOBTB3xlL15c3dxTjRcjqksIxxqIJpw9AjZClx3enAafR7wePxlewsGstr6Yrg/QP4530gFZorVU/0g4agqcaQJWPhtNvXjxR9JtP51ClJQ0C2xR39Jj2/msV+3+sbxTBtkDGFXoVNFLX+YyCLryMb5jy8Ht80DQKguFKXglfgnwMfhQLPG9KReW2Uus2ibE1uQMieCqRjV8rYbXMmreH+mD9jMxwDx5EwhANMgE5wb/8RMuwyXsZP6ocBJkWLIflWuxhOvSOTZt5WiIdRYCGt2eP/HY+YXh4v1X8TP5ZGG7QIGDOGaiObLPvfkPrDqVt/UBqck5h47vKZq/wpwsNfKU/dSXn+A4AJeZv+viWE7dxGpEXzyxSQ3FZvAZPuDJuhvMjfFSIxNLxBL+PIOEMMP3+7Bbt6m0hMvgP8MoQox5mxaYJA5/9FAvkrzVFKI0AwLKNyizl+l+Gbq+n+hVg9DfTWpGXQdH1SzhakIa2gmrs64hvrNXBuMpW4ZdzhzZBdCgFJEBdDlBUAqojmJI8iaYcCcAyZ6QBdXH8Y5H1ZdDrPQQVFNXVe6UQh1lqLegGMLZ0Bm3e+cvOW8XkWWPVjGeYD5yrpnyvUH6uAhr/eAezqd8rSk4Iy01yiu4XqoTPkQ39MnUV51ZFWUl9yjciyzX/Hb170GJubML6AE/X2ip/8jGpEYdfV4UKmsampqysNxr6uSGCqnsZ75GW2M6z/hLIG8s+cuRdnRXYvNocg+qsjAFVNsy21IEzaENq6WPxEsqTtlSSeQ/hSFDowqF8KSc4PFg94ZGsdfXY2SB31r7YZxUGai6cwxKGixue9Eg0r4o3LEWnNzct8+w273N95DGC1/6QYUZgXp2SUTHZEFv8b5S3lTdWLNK7klEFxIZ7XdwknzftSp3HjcFopc8rOvKLc8tvc55XE2mI8JRS3wVhn80njZZnghSmmH13h54U2cGEX7VJQBWSxr3VAkOg6+KsEID8CRZYa9cqwD9hrtD5YElC/3ebMvo7c+NP9Ds9hP2cGDihyx9c8m4LTPVT6BKY1vdJNGfgpNxoX';const _IH='64ebb699dd09ec47078497c03d881de5cde3c5d761179cfe78e413d544890e5e';let _src;

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
