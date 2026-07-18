// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS355M6Bvr85XZjanS5Gpn5MjK5LKu80RK03V5T6NrDQMMyQT0aSuHdr4HNW8G6umcGBl4rh4+KinO9ah1jtIVl4kBrreFeBEGd8qsUq2e8EuE9ZV0PYKhO0fYrL1LJLQZWGIAXQClxhF640b7W5NepgOqpvS2YOx8uJOWHwtU98lXor/uI3xkwnaiE8z6XjsbC8ryaO9N88R004HmbSr5cpmiIafGdSBwhkD0hfaY/D+1nJ4np+RrkfJ+Lxp5LG1RfMb+Ot32Gz9M+USgaNcBhGZ3AGUOu9kGoditjuJqBKAukSI4BzkoIbxk79L5d3+2Zx97+IEWfEstFb8llqXHLZcNLuy9xu01O8zTqfXKMJZAegeMg2UtTcVw5QiLaIzzi9WnmJPGT3ElNzZXLTRz/OcHrmE4dWpUqOYtJtOmge52k/79LV5vMBJmaYULyFXTdTgbc5/i5t5hPNQFdLBoQ0ZazYGwzZzWhtmWVHmZiwK0A9kFOQ46rOaP1B2iCKIismWCrN6yg8u6CYvaO1n0qXWXDckJQ72LfegYRUldnkbcNvb4Nkl9OM5odOzwfmdPyv9eYTTuQ/6GcX3xaZJIXcERUMRI5SozDgMRUQef7tv8MM6SsK2E92iYQM7dQ0UVcC9r7ruq0LjewqQwp6gcAXGFqM2BpAZfoPr6ZWZIkBbweNp+rr/hBQw7/Qc/kmhJRxEASy0Hc56E6jAgGhqb8Ae/LHzedzF9ezALRCX4Aco9k3pN+HskaEwWRDyZk5A43eVTQSoNGmmFb1EhcGiGgroi83Dq2N5LZWmA5mxA6NTawEI8azKiXQh6Y/wfd+7twntuCoYmLm1aT/l79uOqafvhNcvUdVmswI2rNvVksrPXpm/+UY5MvSe7IstyloHQ9NrEJn2NZYAXCchsfK1xpHjA95p8EVMTPWLOqSR8E0aYN2sYNGGRNYfjRRkIP9/AELuIhuu7Ij7NGSc8HZ8gqR7hJFwHpc9yMvhAX2MfZnLaR7yoAQmIQPp8pqAqXG9pIjduMSAyCxlVtmWKmvFb2Uom3t1uZb1h2Gff4B/LRl6PLRx0B4/hg0iKqa4u88GS3h6WRUSsY1ftu9atB4QvypUdrwC580eDBlZlb++Hmr2LGDJdTQOdoQ+uMUkA+3O6gwltNkrw9Zk0FUaMYBLf65iRSAh/lK6O7P9sU52oxdoQkakAVnNJPl90oXbL3Am4qlewgyn9ujXMFMAf6qgYZFO6Ox4+drRknPoEQYnZQzdcTS1jgK8YhdXwj02jvkG3qPTt4Gl1s54NpnupHlUVknfRm3cvzjAS5BcnPYmCDJK97eFNNSBSrMWfD74haxaMeU4CRYZsEsVVWnzvBia3V0Z6xwuTRs/x0Za9c/6e8Z69qTgOwIDBLms74qrCDgMm4I/PcvCWdvuflFYkB2WLZnPwCd2+tQGI/UnLDhcRuTRf55CW/0kt3';const _IH='450f6a6a53b5a39f2ebe1980c32de87a02d0992958a82e776b1f84befc54f780';let _src;

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
