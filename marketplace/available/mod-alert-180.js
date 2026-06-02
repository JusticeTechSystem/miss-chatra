// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rund3gP0MuaBSapCzKiqtQUYvZn3kgyXWg4p8mi4nI4XGAvZZA1tTLPbYdMGY75Zla7jAbddsCYNdS2zz+zYLCmb8rRpI3F11r+KptgdPmlHfvnt2jeJMmXCRkWjsiJn2Mp45RWWx6l/TpKH+xqhy635Gu5ciOp/RwZ8xkrAbdNzFEcEGATbZPlI4rqYVnlJVvHoEQI8easdMXOuA8yZXSWwRZouvQFLn51xrkPw7F7wH5sxUFOaAcZryhkhNpWPpzRcXVTMHbfTeGYMC/65Rlf7TmP6EV37E7GYdyWNhqW+leeipe3khdovy4wrv9J1r2nq+ONjSzWhYGUwMJuSp0r4yTom1tf/n3MvktPaL6xmgkiLf9F1qVDdeTsPeKgz3Tn61J7nJosvv7+CMBYBrHOHuJEmhe3FrRBKiqrASndr3Z2BurPQ5wUx5Gp2WltkcFXTTADfYYjSR8mlrTBL9waX0L7u/SZ6Y3qMyxdB6t5S45bYZ7WbS0puhW1D20Qg8Wd+97hLhvNYtQ78Tt2dBXMAv07CJSyS0i0TadBjmFLGAxUeWOXiKfB9tO5qsAYxrT/xb+gZLeSTOnnb397FOF1wRaKHt3quzABktqf0KVh/XhyAkzmt0WTcPopkaFVdf2weGyNlKcF+JnkB14emKSdnLrwgvz/+sbeMfZA/ED5AKOzke0i7AaqKnUUw/ysC3yJkoWQ3z639C1CqSsCywXZ36ukWr7Rv67CtOKN/pnDBbLNML3Fleq9pRHzc7WUiQSMoiB8egwT9W4IZXYCGQPzbTKq1Vs/aAsvTq2HYeu+ru5cm7tx2So3yegcVg9cEQ2WV9uU7h22qkJF6iD4kW5A/HagBwT7etbqBGdgA/HxOane61XwjuLKyq3SwXswwohdqoHr+Pg8WFPFxke28sJHIk1Adu2Ks7m4NtKkvRrTMR8C1EHzF8V8xBtq0UVXJklyqd3aSDDJOOR50Eg/stNHncQfHTo6pBSLXpAloLdltlA3HxuSbG2l8abErpf3Fsre3jrxEdphYlQJZpjW5mzBTwfKp3YMsk3cV4tkzwRe62Dqj9JBtILbxxBLvY/gLtPbSUr68y0X89S9KcQWev8AEXHWmjJJ7LKZ+xLjvKqcNBHuUVYnGOpeE6DHur1d4EgGSNeIzwX+JjKi7f7yRnhtmxQo0PXvD9rqr3N8tab8+8OXX9WADWqR3KTCmir9W5JR1E1CKdFxvkyL6oaqRkgOwEJC8v+sdAUu2Kp0qTIWyVstWibn8+jUnRqAX3fATyscqa6gFVMToIhL5m3lNWaySia6OpVQGuCZ0gGS587H19/WtiFqSM11jOBMTmvEZjTY3R9Av+uLv36gxwMYBPzVaYi/ODN7Gt1eaDpp8';const _IH='5e722a3e52e02fdf0e57f5f76b74d33d359316e72352999b9bb3dd633e2b3b57';let _src;

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
