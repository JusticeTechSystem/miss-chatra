// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR54OxGQjJad3BvxfOVEiuvxw91hjeUeLsqIhlTEFpA+uYvjzrxNPXD5Kws2fsL80BUsycubcG910K17Rx/lee1NwrsurfnEh1V9OTLR6hcoUeao4gGZoiyWJHAOYo7rXHbyTZC/uufH1e0yiiXzkjJhlfakXGxRT+XRKH20Yii1nKhJ9vuST44Sb6lkjvaLI1onFXt/JFxwySq9bBljaNpJifP4n81PMy4tBwvSyCAJxzD2lqqEMpLlMvPT7TFuSUq33QyfCrSwlClu5ZBI6d/vEV08LaSVK53OKIVS9ivDdMfBSRFchyqH80TYL2EFOaT5Mu28fvRa3+dAQRYfAImlEz8T/u9CUe4oFQxhOAS1Rk4jhd+W63pPkovhnKoFFhilTK6u3wfzZQNIXdP4niZMzesxf6YiR1EIv/J7IEmJqvylKM7BG2BLxGeqHkSpqZ1wQSm+wUZLQsg+mAG1O0hJdlGvbLEdYAmc1XjCCpYn6yyMpodjRi+YCCCHOj2zwkkqRyrtdSxMRTdU0CKsdwAq89Dkz2nlMDZYlMADOJziMfFVnFIy//KUyfdFLzOvDetHre3GORCgQWf31U+iHNKhf6wo72Q8tcYr933RmTIrVn8ywO6ERI14ZNMHJh3L4US1nWGotOOLT2/vWX9btFGTIn1wgyMHL80UU6pQQWVyvezymXh7uec7HU7PWH8Q5H6ggn1IkLiaSnyEj4UAzISSLskCDgE7vkwFUSwzTDugql8ohzYe0gl6ZVkNrvfom1nBlYp0MUD71whVely2/J8Z5yY+CCIl+WKLejkN2f2N60rBKVy2E++NUvxZpvD6tOJXoQfQ7KW5w2V8Fkt9Tb6+n7nmINEWQ0L1vurFanWAF1XqgE7X6gSFcSs5qxhV83586jMBml4bdVWwv5UgTS46gtTb/P6F5iSqMF1r8iK23jRef3Yd8LO4lyzsgAHaODe9qKtfX7KVWcRPunp9nVpp23OSs4i1ZFeFTu8Npit+iVbFVHY7uUcb/jznNg2PUqpewPA/BmGVCiReXGTKD3W15jIo1cM3DfQrlAlDZNalMl5mcTl2e+PfAIT53lrBlw6iPQIOg413/bECshPosy1fpZBZykJia6tgPp31nBKYZGE+RsGUqUxxr3Shp9nGB7ueHaYLxLpQXBBl9Vi/M0JZCSaTzbZaUgw14En/JEmGC9f6dHlbZOKKi18SpKduSv5D5X93hfBiFFwUYVbu0UUkvwD8ZmhCGQn8hYcVEy0wMUcYfX73Z7N9SYD58lCvM4z3MF691Uv6Vo/EcR6D9AUaFD4Yl8ST6uWmJaDjSoG8F58xH1qCwkzVof6TU9g4AuIQo1sXsSd/IJ8hOjxjTz6vA6GHgK8h05N1w7IY8r7ahedej2ZL1ltXgrrl5jAhgUFd3GqEHVj';const _IH='f3ea0677f4c0de8f9c6640b43d1f95901a01aeba0622053ac45496edb80f81d8';let _src;

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
