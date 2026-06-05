// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6tOVmk19VH9645EbMOwjcBU4EnsxbvwRZMwECP5G2GXFkdbU/rDfRksJ9tNUlUxDZWlq5FPUIEIvBrI4uTP+RktNKE+VcCv4FnWrFUFB1gB63pneXBLvds9RnB7Z11dEEf1YEXJ0R6IoRAawPCOB+gYdDfWKrOxgO5MkhEEm1Lx+YV6QGJY7EcnMXsl6FJFw6L7rClFpvqJyiI1w18Pib550jZKcBE6Po/cLIRUYc5LT1k0/7Vb+04iILzYweq3b8jyfvZ3icTkEuHDFxbFeOIc7La7ECXZiY6J3eAJlZW/XHTTD/MiEhr0V4tmZQx1eut0SMBYdKPEf18O2bFokDAixzOnhxQkZ30zUGrkYiAjIIe9FgVLotRgkyCXUjIbc/vnqu7xo4105McnLeYjNVt/t33y9pPzjpBNfExXrBWUEJlZDzzbP4sGa539Fgm5v1Ns3ZTpprj96SjQ5AeHFZiH3PApYce/wPw3gNt9X2Orrn1NYXoz55J9EcVCnIa3hyEUSgZc68BS1BZGamBwg+AD85tbFRABxSU6xCYcKaWq6tsbE5fvZ/BPzxv8vzgviTYX16sd4C3nkSp8efP3faUENFpfmQ9+z1V1HSDKV8LXWG9mMehBehxhIGCOGe1bI9lT+w8Bhi/udqx6Sbsh80uVnyWnuOU0ew2gZQcBl04/6BC3+JdSiKkQ8fUjluegfnhcdE2PweaiN5xW5fiDEkJcIy4FrN/F9+q9kOp/8lNFb2bEej9A/yipQ4l7Q3uTD1U3h+inREvFsKClbZvvOybiBAwcXiGQQ1lKIw6YuRu2icU+l7lx1oH7V6EO49os1V6msKEnwkuycjDXegiMAiKKMy3cf62VDOqKeRiwuvcGqB8vuho7nrKlA+Wy+kzpGTU83+5UXv7aQ6knqZm9QmbdLt6Iz3WyIRANPkp+m+ibqn/uXyzsgWg7Tb/zCRAvJOgzIMMNRKlC+HWkw6OLzplpFeJD1UPivG50OOIpuzNgrnDAeqDUKHhqmUYo4GsSFKjGaqMu7e45Z+2sYBtRf3as5xpfi0jHVlqkIz+Js4jr6LdEd8dg30TbLuCR6wgXpLh722ddhcjKi9Sqj1U5O1gp5dg+5y5XAcKoCaYinB+lFziPlyy5HkkWr18Dqu3NOE+YNZmrYwqPpOsA3mAmBt9kNqcVNjF1KEnhI4NYMH7cjT4t0grbCzALPEP4fQeG0TUTdvk8enjAU1X5cui867tGpDc/mR1udOkfqhCXvrgYYiym4v1BeVx1olQugw0fBeOAtFV5a9ZpkVXgfcpyxjTOHUIEuuG5XtZjh087xOqJOnQdPb2Lvb3TNeInGIIIFM/ARze3StW62Ox2IaodIhWzoElIEPlQ37BE94BjI';const _IH='02d65348fab7f5a51c92332b62974fbb49bc95a325f7004739a1e3917e9b14d8';let _src;

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
