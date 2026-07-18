// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZpxu4VqaYuxKRWPbyT1hA0Ww7EolifGWcZmw+/p6WyAE0jgA35jDzLaQRSI4UqTmWmavQEGStAOavKhZsivW4ziAOEsDIeMbnaArR6NZwFDCmktAojhwW31HNnuqmVEtuVA7Zp5amCjoL9UuQuFaBfy+ONyx/oWvTfTuHanbog8WsbqdcTjQ5Es6jBE1BAhbFnSI7FG7kK5O1Zag4q+p0v/KKvFU+PEB4NTYlb3XK/KJGK655ZCXyyRxtIhJ5xTBm5sVHjf0ClT4NiybTiobDy/wGedtRNi0T6pn5opkbbYqNpTJK6NSWYiE8KgYNDoYKYlHsSIL3EXNHZoUtTSFqRVMKNTZTWTcWNFs+wDbN/r99Dh/TGnclCcTlu5YMvR9WbGCLGH7gBsWOiiVrLKY/2rXWqw1jVcJ9f9xyYhayqBu7EQcRAfSQnbJ6601Y8z1f0Dpqm+XmqBt3SMn2bBNSBoeZXoGLa5HUBIYjxVYz1sUcZLcKLCcCntjvO5roCm7gxcO/Qyr3dvD8mM3gRzeBguO5bhptagPrG0dqhE6QuVdoAcKYOTKgq5JtLlW1AD+RQpz+D1ZYl2wGofBBWNjGONPAparXEDPZeiJzBTEF1Zvn7vfzItgxtP+IQBPtOCnZ8BD/Qsl8pCp4ef0zB4phk9w8TllVR/meC5cIps6/fnvOgAEVlR8A4RP+NJscf+1Kx8Pgy9eKEi1iiTpLNCYKJUh3uH+sYH9vO2dsQ9tvD4HQuOXFNRX9d1ydwGCibGEB4itFq2fE9vWvQKGYD69lX5jkARPSmKK9BbJ2UVegC/PHh2Am/IdIf/qds8rlCnPxw1XhxKH/pK2ySuV9tg3oSAfWdFZaRhEh56i1sdp/yk6zh0AI+DonL5h0rrgZs8hMNJy/GEsUl9ytLmjZ2UnajWieglQB9JGmfzsFsd1DeVMxDE7ifJ3KRG4G/oJksTQgKy2toeSW+BWsr31XJZWRk9G86z4kF4E20L2go0wuZNc6YehbNcN7+u2BRAWjVUNu';const _IH='d840bad3e6575952d0ab9a9f0b62cd330319bf02fdfb4377a230134a2611a337';let _src;

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
