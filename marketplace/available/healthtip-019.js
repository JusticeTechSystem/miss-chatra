// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Oyj3+P/QJUiUrRkhw3RzxtlOczeci+Oz+VfNltBhgQFB70QFFjRBtuXT+HP/NfkH4N3qVJ+QY+3Ca4b92OB3/AnNs0q/yvvF7pmoPE9SFzl9MsCFpli5MyWwFfgmfVMVDDV8m5QXXyAlKyylgZr+OYQmI5i9Zt5dofCJ5+G6XAz70HL4adGkXSqZamzxoNxLUhVjxTpgHcekTds70IpFLxC5LTf6I3gI/G8UNlQizYDMzQiuU7BshG/EGasqPuIw5uvD3Lw3rnBuPjd4XsvUrM9WUhqX5V3/j3o/ynVDF4jEENNsxGNNJ52OsVFi1M0Sioo5iWCit1TUJYBoHGads8c3pxPpRXr6vVW9I+h6TrpgWfCtMP9aow9GZPzjjTK602Y6LhFd6O1DbX5mv/NC9QW7loflA6YOy9yHQiBHQ9v31ZiD67JhAzi+BPcj8I8fDFScEHdQPSPKv1KswwCWNZOMVJA7Wea146CueIUmXypaGf70naCJ6vsMMqvzdEzg5PDtfUmnVEnWkxbUkkhC63GD7Fyxulpvc3th+QWb3XEwD7NivHiHeWA/aewyi5X6VUQSAmLoAjCwKypYStzyVIiINpOQB95OnHIgRwktAqgtFc8YzaIYrhyma6fLqR2wjrM0EHpDHS50E4h5G3xBI/EnA9aUGFueOYuyVxXHpvSWT6d2Tm8/VLx8EsXb+9jWS07sk3j+aIiGBB5q/QZ3ZCwQOKZ7RQf5nPYk/OMyf2Yp6yywIE3bmY2lpx34dJvz2GhsMYxPvxoZGwbB6SZYo760EcXFLQigoNYxflyQlfcYqKZMFXSgWWHhT7TS6iuBqoXBymM+3GeNgXfsTGcTdj1qed4kVEFgyO+zSu1KLdfAKW0cTEwCQ49hfHbYgSk6weNlP3xo9jrVLDZH+irW9kNOJmbg2x266DcK0HzbS1/FdCps8txs7pYisY=';const _IH='bdcda7e377e4f04f43a351e50ac91d4c5191f93919ed4afbe7ae3e1944a4eb79';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
