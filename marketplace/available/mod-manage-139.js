// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9MT9GsT3ChJ+Bm6xOA94y859Tmka+jQj2LuTtdoO7w2uIx9393gHgPkuwhRi9KsQ00cM1BYeURpvOsq8OoQqzXr4Bkw1PPi1yHZLifMOg4bdOYCzjuzS/2GCDWOq1e/BXjRunYxhM5G11+qtwoDBLRxcwDNiMs4WsWryACFvNcKm2WGOjZ+Ae7L7FfOnevslbYR3fPrM/1ZWfeeH2je6AYZRxapIDdhfji488jEjDvG3zxsXYMVgwngonZfYSie8hQ/+Vm8+omIiqT5zX6iD9ZgyAiko0lTPnGvsL/LioLtigcT+LdxUMYT/lUM0Xgae9pkSfdnPJqju6M00h4D9H64FvfiU9++HQd9CEg1G0bnHZvv+c0ABrOBy5QYNdwMqwaw0spUTzZDYsbTrQsvQx8Sin0eM79RUdKdD+NrnYo4t4Q4XwCzxh4ZAS/jrRrF38Z4KcSb6GfOyqmKCUogkq373MNAw37xNjzHrsux2s+zd8V2RZkbMYe9WOlXH5etWVvzfIpy98j6CJSJbE+4drKQZeEO2Xdo6G497aonfymmXZwp0UPub6KJQUkx3Y2BjRBB7/ujP9UNg8jo+TNs9KXqIUSvqt4mEtvpyv+qJ7swe2kFTmwzcZ8mujroSU2NopGLV7ChE/g2Yo3Anaz6S0L39V4tUfmezK1HWp+eZstplONydv+tWinW+vmfWOmaQVmc1VkD8s6fVKYD7+OjSXw492ORSsZY9SKdB/4IVN9Dh9i7sPhi8sCA4iljaPrfj6r9hd2n5h5V4Cxb/ZPDk2ydq3VIzSKNlPZeFbk9+DpdtjDKnoawLO2z3RaTDxjH6ghIm9dCnNmOFnUFfmqSxLAP3H6LmfAa8i7poUKeL7Y72U45FR9YV97sJY6aCVe2dG7XKgnJ9A/kO3/IShs+rBvHn9oac2uNT1XSoSCYQOKaVN6kUpppKf9I2kj6UmGvzQ7zWzLMna4F6vK62p809TWp7QDdQpJU6hB6Pmn6R6K9xD6qp2GTJqjSLDqi1Y2fBW1cA47ZwfF+oCjv+RuN+gILuf1mH3nRCm+RLPKkGwJcJlW9nQK3WieQzwYgfZ5ia5qd0WWDZATQayQLptN9VdeKxW9BWYEe0ZcUAJskeDzHyljgk/qxx1uVxxOFeX6X2rPgZYrHoHFUkz+v5wDoDpUdEPk8zbSTUFiegFtFd4dn7IHLyG8Tk5IoiUWwmBqaydp6iBXVQiSfod4XS7+WtkdZ2PFw+XzG+vnqV0joM7iUkU363rpP4CkZ9y6x27OsFv/thANhBIMfkMa9LKhOdOUvKF5a8J79UFIfxYbEH3jo1rr5HNZsP76TIYVIseyEy839ksQrCp8jMydRSafIg3osrsZpdKkKHiDvsLQYOB1isSfAb4uUnNw==';const _IH='2b27dae1fc4f92241d90947780caed1e110d190e885e2ca8ca316caffde0c141';let _src;

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
