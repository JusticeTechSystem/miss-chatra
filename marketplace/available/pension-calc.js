// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a1MpAhiuxhPcicblMfMCqrWtZFz4reS/Od0FQsIrGmd4V8eVY6YWg/JQgn/jFurpzwNiVbK2ZxzcBQNM9QayczNMxqj7ml8KA9t0s3PmOB06ZwwAzoFfNQS341FCk2fjB0L5thRb+titmezGNJ0ONHUGAuiACNnFva9TDSqBW6fKvB5jG9CsDzisIB4Onr1a8uyhdnpGWK8bWJFmgvPKD8UWgkYALceseZhaJJIEwqxVazQyZbbXFmLWNRbQxXSCtKoFWekox8xIa7iAJJHjo59h9F07kL9B43O0BG14UybXPZwKQyErw1kRllCv4JTFQvyr4BSgJXnIVzOn/uu54Ohz9SXM051YHC1nOa45ysnjDrAlYAX0BNXxg9hoHVh6BxpTaExmsV5EpzgLST5GCYK72FgFUksGcSGA++J0QsNd7seeMjfAe3snNqO39n7BKzIu8f0CYZ7lw0RuM+vEu4Ny9Up1mYUgWsDL/GnwgKDWnA6JxUsKe9cZFdDbrSRZ3jyCXiWFuesN6SfmMrD0o2UEjlZUOlGHBOYOi+DdUFhguwfEuHmmSzA4WRDi7ZY20/poUuWOhNSuTtBuqjqwTwjOBZRY235rBRXd8fB8rWTzEJsPilwqylsUd7u20EY0csbVTAC0lI9iy6lTShwKaAV3oJhWXVTyX1REKsmtKywZ1nTQIOHeHW5MRAS+7PPvZrzPu6/n8hqz85Cq5Mn019jVkoRDz9Kj6O+3TS8YMQVwuFYg8d7gaEVSoAafhR+/sTGHVsG8tB8iUtVlpJdl3Tx13DM1isUXk0agEG4JrJSubKVdgGBfQYt7NMsxSSPBQvnHt/nh42lLrw3YqbkLPgnw9iODd78wx+S/x1KJnaaOagC0bxkJEzSxqer8VNvO6opd9qQNNVA1DY8hyvlHJohn78ni0rEXlF8KZ4/Uks3LvRl3Fcmgrlk3V/fI6XF/88llZc40U85b6w0oYh1YMq/JAAU7hp0BtiwfFIfEiAxs1XwH7r8832JVcUjMw4L6DyOpTm62Ibj3p+HcMAa55sjYEZVCjEdoUqrT5TOBifPHsEgZ+Zsgwcpm1Mc2zR4LM9l7dxaAHFbmrIOvjCdH2Uf/cVdaigKIVxFIcFKbYVuiR6K5xAc/aIDvyLEXogkVtmIQzcQdgNB1/FNob7GzaowBZq3Rk9LCwKCuX96jG+yCh4akcl1wUtEh+8Tgr3wU33rtL9sAypajVgtpHRzZF1xJfJCULr6MrVfgerD0jxwfmvhZnyTGO7bvVWVka9GLbRZW9UELPmf3l/L5Fb3hdVYshxDBRbG1gaPB7EUQAUXQLpN1YmoR0Q==';const _IH='189cc8cf08e2184997e79d45528f8aa3dfd4ffbae6172991a2c3110320ddff08';let _src;

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
