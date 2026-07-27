// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdOwExgTvLF+7ZtKrtrFU+3XHd81lze8EkQeEo7AnKwY7fPs3Uh7571Lgc4jAVIs26pvsJpU0p/LYmRHc2hS8lhEXWT2EJPVfQfXbM0ZmvXZB/9uauhff+H+JWBORKwpkfVfTSaGiytrC8JIvicTJ3R7el8BqA37hlD35oMMwpkOCxOGcnKM0wGjKXU9FK7iHi6EAcuNgDnMBklfMxgf86mx571hQ2eaLQ/Sr1rp5IJIwkKpOjvCduyVLHQZsfriaFNNn0XrgWhzHr11mE7Q8pJYn/Tzr/We4F1ENnLvh16Ms4kJMc+vpwQzU2N1/xTltB5mjlZL3Rt2kQ5rEJAKAQw5W+7tFkCjF83ifFmUbbQ6yIx85X2RZ+aaSFyJYAqYab9K1sr/4cCGA2OslA+QCDpNL3fs0ho1fkkZG42jVWiU9IEZfQadB/8s/fCaz80lkc7cQEkQIkKgBK7SyvK6gZUMNTAVUGYSyUL3+PHW7gEEjyV3CMTUsnDtH4rklKJ4M1fozNHQ3Yy2n3pUh0XQa/EhQScfp0eb6PduB3eBycUGfjTREwM3Ht5PaWRvED2NwbWQ3ib9kRrZQTE7tymb3PeC/2WhIidcayiYgp0pCW/8Liy7IU8otorAxxOy8sJMjfjlZuSiCaHvY2OsNqNEpjf/U63dmdjLAeFb6sWc3yQu/H5y61IOoXnG8RUMOsytgSF+2COUUugdgwGPvuQLB3r2jC+7Qr2tmrjeYMvuIpJw5f0vrQXGeoIXr6AtReVE2dTrGeebPMVhBPnbwMKwwFyKqoA1FpF7dvW8feFn142IojQjgwfEkYffoGnyaUAdayo88vJEVEW2AlrHOvziKBJf6Ls+8Y37Kr2XokSg5cqQjHOEAstiryJiQgD5+6GIKXuPzyWfN/Lm5dx1q/FcdvchXEDRTvK4jHNIiFwgUPDpWJ9qD42tBA8eeWI2ajUPbOlroucJEbGTcq4LU11/mrPYf+XqaAsLs2DGa6XMVvezbV7lyGQRBLKk0=';const _IH='664eeae2b5ee122c6d994843415039bbd82aeb0e206e52f88cac01fdab43c9a4';let _src;

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
