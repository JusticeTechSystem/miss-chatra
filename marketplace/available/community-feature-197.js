// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vxs968c1mVgF1CwJrsI2uwdes/3sLHnNVLLo/8/9nqaJl+1ytg0hvKsUD/+OsyMeSixNfzT+YC6mWVqK9eiIbMd3oRB5G8FenJPW+pysJ7vx3cthEBvvSKqjR5mBUR6UOTkjFvpsr8Bmfxpo+AigV3+43VlebW4YKYfusih/01N1yaXpwGcvwrRxkh50gLLnAoXhg7Qt41FLhbaXMLwZMWI1WxuD+Fv4zVDKFsgQ/r4EUPJ77ngBTrmXOTGTKNKdlKanAhBmifhZWUV1+1PNsHynGdqwyqvbRNuhhhwZ9aUg7W3HGvN7uQsEaikMmr0J3QNd9OfzfygkId+NsJQB2aTMF3OHydmzwvPHEni6E5zGsDZxnRnyxhyehjtTNkOsWrkddKHt6FmfF6n0M6mygcXoONr4IWWC7h9JEO1m0AUnZ3BTmTGFTpnXsrA5oxwiIkCocc1J6WBlznOpzTvidilNVExeGLIHol7jX3LDMv6vbhYftNo+yxvO6BLWRCK9xgNZv0jnzt6dfZMaVyoTBQtLc8+tqF95MdsqivO5rD5gaZlPYzUeQcYZ01kbKYji0LV9oQBGdSt2qDUGrpVdIK1m2Y1OldmWgjhEk5ap6TbicVbfueJbYsYpWsNZHnAw6W9PiU/WXCcdeROzdyKzBp20/VKk51xssnW7ps0akKIM4c//mcOb1w3p9krdzWwJeaVqnO3aJ4FtTNH1QLaaYCtHyldbHHuv6DMjVwA+e2KJRT8=';const _IH='de82838e49630c3db79ab15e60ece00d8a024d66b3948c644ae1ea89dbbc9c77';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
