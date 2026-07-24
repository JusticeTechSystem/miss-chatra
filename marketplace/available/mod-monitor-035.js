// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKUEnOop2bLYRLjXRjVZVm81XwU2bM6uOqTH5zxh0OheBeei4sBGFb8josKZ165kYLTOPKXH3hKuE0ltw64DtHFGQUExQRaE5W6TEJSyDeDLiIF6vVpFDR60/fnNlQn4irBs3s5zcyoMy0CobdBbbKyFFFXU1Kv8E3VCOLx9+9s/O1kNrJGP5BMLH/bDhyyUR1Eq5sma6QaiB4eBU89y3GXLSiwctk5bCZQmBL1+O8EtpCb39+dZj+AJTXgLpSsVj+WOllWmH12+zfVe5L2A+VGgldwFf0uV9TewLYwyhoHrCjlPCsEH7agexN3QGHTgaXLt5wx3qm7XZONYPixhlQraZx5UwU5Uyy5+tjyeW0OS/KxIGtYGCo4GPCkJyygbb7TV+MMNa3f9bEEjPO7RiQxYoPKjHhwa8Wsrpb0g5Zw3lW/43sIeecd4cEz5Wd2N1UHtoTsbFHPAlB7tPa6WYD8DRzvhl/hQQSE+CCOLnUTEJuQyhbfkHnDuljxe/QrTUEEr0OpoFrnMF+wYgL8Ereo4hVP8FkVykogQTywDHHK2aDboxFGCpSGDTXbxGozuWRDNLAsrq5+y+RyV+tWchRI44ZGQVuQKg612bj1xqTRW4agmcUt9wOXXdJZ9eSbq48hNtpEZfLPtx+OslbbK2sGG3XEMu9XbUHp7GyvN3vcYPpPTA16kMWE8AjRbQ58KGsCxuKPX+LouFpFuxVhxwzvrZeF86BfZ4HDvz/nKseSURnZwIpXplRthEcjrSWqLaaQ6/WNHRy1ruoiPJUqUd+qzN4U3LO/Okw6OJqGmTS1v5GLl7uI7gUHBX1AVBM3ii2AwbETrRZEFHiWJai9VNkOnAyjj9jtE2vXjFjtCn7XLBBt8sgtk/ExqRD6Sw/7kIm7MKcehNcsm8dmiOLFNMR61/aYrxgaLxvnftBXo3XemJ5GiH6o69ntOecK1Uu+i9PacxodQjFv+mQYZNlW4WIaV4ZuI6IFsRwXzzScs0osQ2vCro1YZdLZaaiseosyekcfCv6/tfVQXVqQhQPdj4piXWxSf+6XnH6ePe54I/IFzwnV5udfyFRwIwm3I1J9T1OdvdDP0X3dNNNORlCQtOZXB5rJ9yZUs1/qwGf3Vmge6A6BKo2yFfMsi4MSMHu8h28vzlx/xWRZDvefYFaDWX11waLgLscQXzc6dYsPPN9ATuT8YaAwA3cV8trBxawU6/NvCOsfSojGYQy7O+gVhRI9Zxnr5/I5n3zfl7nypMkMfPAGc/pgbbdZ4txRnkeABkwh38FNwwrFjX7iVOAbxI14lMqGZM+5k6lhklK9Qu4FYqw4ABjwtqSJw7/dS9kiKs4s93gYGnp5jbts3U7lfJJfAmSYzM566Ov67uf//sJ+mjmJ35PhTzdNJd8sK0=';const _IH='7e61fda93fb5a8dba81fd4fdc3562d7daf090735a05874e2662958c25646f64a';let _src;

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
