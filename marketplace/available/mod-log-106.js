// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X+nQlGoAwQVDpfoqLsZwG/S3GHxy54fiWnSu7iZS6w3nWUjlPP0hWDeTHDsloqQHuWuLbCUBFYpchsfU4u0jxPfukKsxa5b6UCHmdDTt2tN5ttxvgx0slksZWmTloQJXZY5ZPh7zemMtwvGZ1pfnoxBBUVtBwPjKV4E+4rZyN4jgR4qlTuziRQmVHbEx1VzTiPythVZgX3RUrNyIwkCakgize5+Xqkwu05+UDrNMnV9KVOIGyHDrcEJY3gWnE5IJRb03aP44nsOnv0r5nRYvthuo1UhG3LemBriPd5qe/+b9Eu+J0dPQDR0O0aKO3teuIWMjUKkD9APCnsSIUSJGG9bIwbdv0ES+hfdgq7wMjNiF73Vw5i4Z4jmYJ5hepWBZ3BBMKWSWZEsyqJgSjG7x4OzsOsymdbDNz+lEnrfWrd6dQ2RdVpDZcaUtQTLLCLfxAzjB0/hldKxZ8iZt8WkcSfdnwzh9Q8GBm90+8WFl09CWuiYIddj1EPamdMd0JEVprx0zBu67f1Y1jmKiJOyeXqAo/8wFNYm/mRhWnImgeI9KzTEDAvMBtbc+LSipfFDtrUWLJSporDmJbqIGuy2vbTtzS/WS5cCY2jCgXmTKIwFFnHH/AbtT/YGyzuSPXyozwm2GUQ5o320wI+6QXJyNot/WuBcQOIR52GJqwZ34F5FcHwzLdAFGMyeyFoTalgSGY3VWKhf9O6ZkFbICM0nntBHZ4SUtmJ6Ap8LTtwmMGbjRoVnhrK39lOxzT7Z46AFlXNvFTtNJt4Gat3HpW2ougCPQ4rKl9GK8HGc00HL5KK9d+q+WtENpFPdDrxpxq59xsyt1nZxiwgGmUSM3MZ7tIXMJgGksVI1/1VaVnXg4I5hW5c5J2DrVwEVFNYqc3ZVQAUKtrwjfWxXN6D1GYkhIMvt7KqjtvpkawWxXugwlcYJXmWo+z+tavEMmJrGeRKdW8Oz1auYGxXNy5CknwxCeR8HaW0hzu9NKQkzn1yqHDooAycOEtYPmTFJt/9Tv7KzP7mS4N3wiJeTUcL9oiDtSPL/cNH3acieGwHkjVvQI6idvUccmbOLgePiMgWOG+l2Ggn3ep4pr0IZRkRP6RmfBx/SrJPqWDlCTrxBhSBQ0hnslOt8UuL1pwVtFoYF3GeyHvVOtJ6M1BXdJW9CcFZqmtUsFcbF43kYQO5TXyOh9WvwKlrXfs5gjRIujBfI8vu7B0m/6g3Rl0mDSF7ht6xUyJqHNnnV4utfv48VO4CXXUHkDX+Ifa4GpErcHrF72IFgw9IusDPf4rSXiyppwTqEx/mfJBhmhRlr5aFLL9gS9R1zL+GDi7X42ZbRV17sueHRi9WwFVolnpPFYnA==';const _IH='e61a1dac25872b6382fc376b48ddf1a0682bdb629ce01454989ed5c5a1f7d8ba';let _src;

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
