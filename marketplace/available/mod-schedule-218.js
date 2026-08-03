// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRz4QpFYk0BGdcKbhuSoOGHI6DwwBU5GCKL2S4LfaCwSOinAevlkhjRyyElYcNMmMpkn531t/P3yqcGFatcnCxBzb4xQ1i/AdZZL2D/TEiYUDZrPfx9LZkhR6V4l6b17OdecTzLbu0AI/IOMSTcwGdJ9VvneFVOimKAjNem6ShrhNoqKMKQBbT7VHQJ5qVO/H1z8l6t6/6WOZucOkQHu1ZDTa6CV0jQcU/2gziYb+o5h1KLW45qqaQ/bXHdzXpMRH0bS/cUlS/8pSB5J9A9DezDonT7JQ7K8l0n81iFljq1J3JySTfK1IgVh/WSsS1pKCdInJB79z8rDcGTucg1GL0ISLvfFfQFZce/96s/8nf0X4Q8vOGJ2+PAf+xoosxM7hQKYWsCZ0NYJujvXtVkanE5x6Xo6sbVf9LNXJ54gSPmeIpIYX8zLnzYmHrYpMZW+aazIp0q10ARVp0eqEj1BJajsoXuYoLdjUNWJx0omgqgp50Z+4lu+GvXea7nRim0KY6IbiEcQhRjjHIs0Bs93zTcqRkSIa4rpo9Vaxy6GJxD0HFLLQ9SMbkP8wZlRuH84Jnhq1QluiKkljDiuBSppoZ+BDwCMIt8skF81p6tpKVKK/Zl4/C+83ZooHOkm+Yh774+0wB9/7n8iSYBXNDCfhmR/I2SK8Ibej/efpQnzjvxUmNuC3lL03/zDTUueapF7cZFJ3Iz7pW5VjrY3r1/uy5GT0/viLJP/GIixZXT/4EJIojVqxfI44qrprxNiHpXKibgMqAIJjUhAWKU0wBiGpgWdcb1RTK1uU1EP3KFJWn4uMLUYcQ7BM8UTVvJ/m9DkW7MeKyrauIDwxZU/55ycNlT3mve6hYw2utDKuuWYY0fyI0xtPoyl1MFs000q1mp5ZFxb7KEXffy1TNYNwlz6aFh06pgQ28JQBgcZxpg5qkAorHjTJ5x0N86Fp41yvPcNuaG5exT6pwPmVotV8ZZA1lM+bSpxlImkzOLUuJcf2jMQ6Hffh/ZUuWpl371ha2obU0FRABezwJL+XR+qmxMGZDRmVEKkTDZexJ7VNT7ND3nd1W374qbH6rwsqtBasGN2hKHbqZfTtYADolUtYoI3XrlzhJ5j5tXvKhM1MOojbaD1TMb+3Tk5EzUCV+J1JaBjhwym0cTAL8TFuExqeEDVef+s3V2MsWAXaeDrI92cThZ9A5Kk1QPbxLslDk9cGO4Dmq0YsuhDMoH2Y4vJrRmHWY/nEpYDnTkv1yM+fvC5QZ3Xf1jI06r0Vh5Qhb2ZfNJUx95XWz/T18MtyiYbdln77MKl+yPEN68LB++ebCZmZcsL6Am2PCqY7ZE7RCIYm+wGrnUvAJsrBFfCuGuHWBbiTTlS0TlU/Ezr7GlhvRlpZeSTKeeVveUQHT3GGG2MEE8afivf39S5ssPQSA=';const _IH='23dc89c42ada8bee3578a74ede6b7c2c9aaa7bffe3130d689cdf121ad90c2037';let _src;

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
