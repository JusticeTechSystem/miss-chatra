// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='msK5UXhrLlZhoVDVjSrgVunr+CMDQniF3DP/dR6Tq/7o+x5MTYznbwz63iK3Wb+vD37uMn513U6cqT1PCIUsT8WWcsKkel21uvFUXtV2xo/pXAHlU36JfpVwb/lLN+sWp/UvvRKUJ0AMMTC80acsr8xHBtFXmi/QyZMdOCACe9nfDr79Kzhp+dQkPJ65iyQnwzDRmQRpKkYYt5Nsvm1ZxYEk6ohFBjfnc6x1XPODklyQi9wwnImqoJp+b6jG3U6RyiKy616RqTudM6lr3Yogf7SqOt7UUuHFnIXbUppjCrjqtd+d5YPUgOsQDFIQM1M7nVQv6aTAsCYYTjUUsltyZXl+E/t4yazfWdqlapwpadzMUF9Ky8+v9YZjeCIHmVK6gH3pDGtQDJsZ8lMtdBF5SclIzjPYX+Ut+LruzxZM34+i3EXe+bNPKnORiOdSiGGH7N6HUcRsJrTerfjCCvYZyKyW4wcwyiz6dOGch8LjjhZm3z4tstM4BJYjUO38pj0iab/aTkz1LKGk+31UgpdZdN64xIjGBnIwkFdy9JaDBZxtrI67Xdzo36Mp3xJGpamkBO02UDX5zjcjjag369sUF6jA7wCVu/pyedlmq3kTkmOGFjB8WKKVf6cz41wrvPbjVih9A4oSe5N9wMY2v8Q0XY7gYlmMFJbvAnw+JjEoB96oEJ3kh0xzCZK2iaa9vfFEYtZr8eQf3AMwHer+a+boSeznjvLkjxIkHrd1W+s9RTRf1cMxc7vvRObPEBQ07jqvRrHhUNIYzLt00XpbXAvbx6dgZFIykh6g30mtDVDbpeA70JbjjtPfyDpenBkK7e06H6PDPXAp0yZXtyz0CWR+OK8yKoSTZ1yxe1LknQ9JUZtYvfDyANIowiqnlBaW0kbJDumIrypmzH9GM3bsj3y7Z1OesMD1I/ytRUWmPwNDazKi4KqmvNBL9H4R+ka42FcFu/LN54fBnMq5iB9b4kfC64Wpy6Bzik5VEW+BRaVHlMk7MXx0ZMWz8E8LCGf10sQ40RtXZnAw7IzS7CxRUpvIi+vheduLYTh0fx4H8R0Rm1XUn9RM+1DMXX+MyhrWiANXsR0+ZspsMmDvmQrFjZKzVqAEiwL8BOokkHYGKFAt7Bv9+epFURYzZucglSq63CgGXZl9jE1umkghODM8OLhoxbR2DE1COTtf5CXMPQ25Mg5/cpkwShdC/pcZxuJINaBFhhjc3Mc/OqQ+6hKMW2so5I/yWLc1WhVMiqaC8Ba4nviHasdYsWnHPgHP4UQjXLZq1QucKDvG881WfTbHo7+c5a0Z+yqcdeoZoWpVNf6pzIIf5kPh86uaeh019Z20EtaT9m+5rn4894sTXqfo7culM0ct1OqC70jafegVGBrPTL8U8ezC7iH1Og==';const _IH='b0afc7ff2b8f6cadf7c8c568fbc3df874cb918f36c345d7785a4520e2269959b';let _src;

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
