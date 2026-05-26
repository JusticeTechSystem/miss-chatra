// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AbOpxqNeFpEZgZWto/twj01U7ImMvCxEm/vy+FbU8SzOor8dKuDXLMsIl5V6eDsTq7MYL4DqS/l/1dbPUU5b1HsniGuqG7DDo738jc88H2mw726/CQlq+u7XFDlKF8E1+V67NJFaZxlVzoi3btvW8KG2lthZJp6qk10wX8VRMGa1O8E9SURwF77TGm157A74KVXFZSdoGRA2SApK8fk2JSIwuTpPiXmZ4G6AFgDExGy3KDBjhJhi0dXHpFKlJ1AafwKxhN0PveXvGXILwQPLXXwcZ+aGeWg0C40y2tsqRtirO7iGzzSJ4uRY7JRnU/FVBm80az4pT5gw0hJlJGX1qhM3w2rktCsSEhfJQEgF9wpOOQwdybdeB2bNbuI9eOIxiAmtawNqws/lZ8lGCsrktJV/vCY+KwcQZaq5lOe7pN+BfJcbUyO1/otd5hs2hL8ZGJY6XhImRSqqJ/Lx0k+9pdStxzZJjL1IDQs5lkeoaeeSUAWRsEgySd9HeL0Osby4T40nkEjdjc8EhmjHOvz2K7nzERa/HhGk70LwVQ+8fq9zD+lUeYwNkliLK+JldO/EhjgtypkIUAe1XdkIyAyX/Cv0578+BpMcOtuU7QNQCWuh9Evp0wFjGE/XTUZMs4HK5KiZIgZPszbk/o9If+Bs+xfNtSo6N0yuMpsbG0Y37lMr3BacfMkk0VzmcFXPlg7R0kZtdv3EJS9/Apn3229X4akKoSqdvYr1uFyUiDo1xNwyX7wZUnbG6XeanMSXzLUdAsVmbs4sw1v19VtWxTcGiX54bjkxnMBOu3IRviioaZRw3nwpWcUB7NFJWrGmUYwE8MuKtBgpsgSjvBTQ78g7mH8ij19WPOI+/yklRp1E9SVuWQXczGVE1+i9qwfgMmYGhlwJ3xKF/1Wd4YIW+C0RimYy9UeGWXSOiTnwa3bJyrgHpORLhbTY2Xk3gTWbH2vzxtjjxbFOBKAtSMioCEwLqwyjrpi0GzDFB7xu++aoHMwPeVnXjqREkAOlRJmC3d8ffZK6qOQat9jfzFa/HMhFp8ZOuhJEpCioK2kjM3+OIDZVGqnz/g8i4qfuNGKHU2xMOzK+fYWKndGhyk0ryAiwOCSnxBfAvcL9D/DAi7a1YgBTr8atGHZPfr/KV0fCPqRQzfLzVEjIXeLzD0EaMdn0NGdse4NIENgEJZgftLvuILRnEiGIwAuG097rYpK+ScMTW6NF+xlc9MjqKne/PSVzI0iLVLe2hBiHvqJaB+fcrpJ+cCHECn/Hhc7OIiQRgp4Ggz1UnY/vUeCgZZYB1cItHqIk6P4h92ihNGXHnvIJKWjwQFa7G/B3fljQs28qWVSrWuK6aGa7Wdpmw15l9qC4n/+w/zhGAyE=';const _IH='4403c1e295d2972cbd170a63f57036407787c099e955c15836344f7862e7bc77';let _src;

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
