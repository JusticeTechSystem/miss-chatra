// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8VgnXOTx2Qq6HNwi80Pzi0YTDnl9Lbg5znuz+HkdYbaSAks1xaoDIOfk28E79o94HRIrVINhYkwJw4y23x4TrxJoidFnCIZq+ie68TfJKTwLu6E83pyWyoHgc313M6JNxNIFnZq91L7q7Nd0h8kc7Ewq7lNrgKRSNV4ukjrF4MTomHE7znm4LeDlRQwpggb+7Bk7/mX1X+iTmVUnMxJYxYwoHnAF5X6HB2vTRYpBl0VOvWoBS+whptoG35ArDg7vE5wdlF96RSRC59P5aEB7+I/K2Uizg1ZUD7qQkuTDoSDhLWXzG0NoyQJJsRIL2DlHIe3weo+KsCta/2jzJlD4kIYBgW5ZNTocnlmoGYogRzFxAt4/zphVztpOFkM2AMLp0/AqPoDYKqNg6LXuH3DZMqH6qHHoCSodJfe57fsrgzjCKApioUUTdkz3rTvaEFaVV/1LfZ6832bJqG8wlaQ460gfRDGVKXlAen1Etj9CUZQP5NghT00JaLCJF+3zIFrfaVZ1QMhM7q8+Qo4L6T62k0PGDProaXVMyQo1Sm1QZGP3IZwYyXdXIM7zh/f3rNqlFBlAvzqDQqxgaGz7y8gudFLAj2KH5iQx7dIMpw9yZHsf5KA3Mn8SrBIDNyb+kpSwhDZvfmdffVz7tU9id5ESBmcY2Hu6OVNa2wZDt/bCKcSK/RcqmcACRy6odT8bea07hYyFJA0v8Mzm+arVjcwZ7Ts5UwUAPnCVZ1oHwzXoPJiHt+Ss/8XbGCWY=';const _IH='a4705b72f478ab9e0aeaee18c04fa6685ddee7ae4d963fa61219ad969eacfb47';let _src;

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
