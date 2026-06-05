// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sf6g8BIPTHE1d7P+rBvwSU00sX7omXREZbhPI+w/4mssCGgNobKaKD+CAofjOsj2Yuiu2zq3LBpHK2EX52s7KZCGuOtfldBCxJEbrxjSAtcpY5rP5oyplQM+pBE0G/5rPUBBJP0/VNWWi4tl/mQwnDiQcI3FQR+DVhFSpDtTwaQzjh56vRqnYiV4mjQ6hjb2+2XvE8HtNBeQutbe0XaWnIDlaAUWYgwtoviqkAOyWLyLA10nbS5bBY35qqwGkKgGTN9jlWH/P8LVkP6Lq0reJ8PoXmRFWMRhBbJgQ9zzduF51S7GjCElOeqS1wnhWRCzw5dD13vTpBoDClur0mY/1oqgdE2asEsQap2irdONujFHJwBht7db1rKCz7Qov5GLIxn2yVfEXbnLm2SQVdQrMaLDZaiFmMjiB6QYzrq13REeJqR0ytNgeMWjIR/mVBA24+h5TAoBOzA7R5aPaBq7Ho+0iMpyhhyTTMMAYliT97ICx1cj2+Mw1W8QWij+2NKrS8oRkhszvFpWiKle6lF+CJO4ZvTVpQ0SEW/TQfqh6CGEyWkTJUnKZhk842ievdehUZvcTcn9SQz10f8ZP6WVdEhaVFooL10Sr50H0VRRrY/1FstiRIfwiIZqPl1AfHpxdoJh5l/oDuL/BOjROnkpVC37ESpTEXH11LYp9IGuNT5olvopOizTgWEfHCLrg/uVf3VyFhNVD3AZ00N3NRn6KV6ijJo0QAgC8x4P1oTb/LnfsXRIO21n3M6TmvuaDS1ubqKH4hgcfmkgNzUYYEcIIUfXBBx6cudLhPA4oJ7M3pRDVV8AmTqumJPAroFgKNU7RwtZkjNV3M1IqvleJle8vWZOGrwnZXlpeAKcP+KdLIreC2sYhSM8enVKnqrr90qyK+x5ISI1oGgB7NuPsNcmXFM2RYbEt/uHVO40ybKQT96IR10Z/oft5D1pK+usQtx/3iBuNI7Bp8InliONezn8zYNveBB0B1MKT3NA5TEd99l9tZz1eolYObr0SwkrjHstGOVuENIye94TaTXXqQSImyQxrp2Y6EkhytVB1TT4D1+c/a6SuaQ1DWYUvzy5MlUODgezz0Rq8AKTr1kAAZM3cxk0AQENPv3SX1M41VcXpAEfOWzQko4av3ZZs5Ctzd7ySaBhm6ec3VNmfYD36eO0cfySHrffeQdwl7Aj+FkJhljgtu7g7c0zO5kfqlQuwRVLxHN+yZi6d6vB1+K4RwzXjijmqhWUuqm3q5lQ26x6m2GNQJd6OPI7sWnnH1VdgHtid3ZkNMichb197GayK8A1hw5gGlZCJ6OCDKtvKdlkrGDQZLYhQ4IrZbV9Hlo5QOfHRZ+7EJbIS8MeAJ+rH/74g3cE3i3WGQOjWj3cb82H/eNIJ1u4Ah02fw==';const _IH='fa099abcc86e0195df6ac14df1fdda31a6503fa5b5bfe5837c5475518f00a71d';let _src;

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
