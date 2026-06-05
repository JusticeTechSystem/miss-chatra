// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GH3nzu2ORG1n7griX3MDf/7FljYWmqIEeZjW+pQrLeNi1iStbc2XaBp297DBr9ud05Z6/jKerdaDkm8lwpsS310I7cKNz5U/VyAeozBO2cOja9klsxz2sqEUvf/a0UrrXp0oTnnEQeOjFUy5OO+eHcz62606/iQc1T5AAm0CMtsXsGYhz2ISYylLvaTVcCAIfihS4wUYEdDVL/pJGEKfaqIFLE67U66SJHFP6pU2ljii3rFZ3UZKdNfQazEElXT2A35wU29EfINSC/Wm5KHnY9eTPRvPWckh9lJrr72iFFqU9SM5o2gBgZzGyz8PBxrAYp779Kak6Zfia4Ul6tqdmWnj+IvHKxv/K31LpiL5B2jHhWzyDkUbfUdEQnp8Uisokhdvq0OA/8QkwhsKdcADOWiwW48iqJjnWzR18QGKicgeHFNhUwil3iOE4GyQXCPIIL8WYsteGEzvIorXgivCoZSLWs0wNcgwGNOmEAg85ImB+UbEBmvRv7RlHlD1OhKCfQOlN9eeyzoU/kzjV5DpoliCpaX9Q+8EjvkkKraLbCONWRChDcJ007A3q4xlGirjm+UK2aBFxwbO5HQhJB7OE728UIerNm6zvAUsX8DrXItbdpP+k5QQDfkqxETItPmO9oZvuIntSpdnpFec+Iqwvx08biRZuhhVMx3JFFhs6cVm0niyByPVpok+JsV8Jcr+fn4ijKGZroc//3mNl5hJ70hP9DUmJ65aw6tjNnB+CwPWqV22p79pKPZIAanhPW/9Oa3VDgFvKV8HKsHe/eST4t1oFL8SA4J0KYekI8pWheswy0pfAMs08YIvx2rgrUXeRuuDVn0Iyr6mYvzLvBcfhhcaxEvVIXexxEWFYkO+HaAZZqI9Ymt89mOOG/XOBKM0lTuOM7iipa85mUqupMXotqaomjYi4oCUr3iElH1KQz9OZrXiKj35kO4Hb0NKC5wWiQF1qos8dKDt6lyER/JU51dzsdegxpdQGBxb7XA3vMBAxFwMm5o/Es7HYV1HleLnj6TgHnXN0bT+jxhHfRuo4ri45/P6LZIZAYJYdR8K+18m+b+XSPzyoPVSR0kjxyVnFpdz7G0ZirQhzAK6sGQfZfwp25bXurxQiU6C0RwRiBzZtDzEpmy5993J4CmYcsyJJHZJwxND/5kgQDT6JnXKRvRUiLNFQYB+n2JrbgMH0sQlNMAqWSOs6G0mZssw26HkDYoeb3/EWZ1r';const _IH='2b257f050de3cede2c8d05626efcacacbfc4cac7cb8ab75c93cb98908310b28d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
