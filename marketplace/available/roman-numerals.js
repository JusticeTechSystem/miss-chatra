// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ58WUI/InmcCYgshchguAxOnf1+9nL8uQencvYL7B7S1kx6VomUgsPcJ+ZGiIOBdY4RhM2RUkxN7E/gurc60FYZmrz06aFztN6g4b9iznxl9jtcbSABL8jHlvRW+Tk/21BZjVUir65ezhcJg1UP2hA8vWccF9W1k58PUnb47eldgdi/jrYhfQ1+gqEsT56x/iNQiXK6cVzCdNCNyfR9ijm1YFK0Zg78zkzxbA909iEVF6aFH5N44u9SKuYjfHq1TXU3N4+VSUNqQJMnvzipgLEk4SQgXgg1GycXT+HK1yzdqkqUWZGy2TTNBFl7VJ/1Oa+Texura/PtgdRUrChxhIx5PyHQ6CNk02hJeKqs1/lRK6wEYv56CLauJjAK0wMrhahu7TZxcm4a9aWdKbVVlBQRtGgCGNawrB5ioCB9eOWntTFI1a93DlRedFQFu82XjsBhKbvQtvsC2OJi+EhBrYEoy91GMFvmMRPt7YFQfaawlHLgY7KOVDnPyKW/cIJv5B9jTnodv8Myum/WtXwb8MWjlXHRyzuwtewyU3GF/rhG/+LXcRRxGu9+IRA3zOwYPVgD66w==';const _IH='37bd03db7db8521a1669b54fbf05fe7e4393c8788f8aa5307150ad0d54d82593';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
