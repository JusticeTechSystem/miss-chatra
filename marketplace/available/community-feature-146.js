// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ph32fXgUboV8RzkG77r/PXx4urcYybnwMZ5ihmlds8xhrojiiXZpt5mOBWOvWCtFUUtgLmFOGufWigueAHQ4Xb4qroVG+pj8+froRXGPJf4M0312ofX+sH/DWw4Aoe7p/X25SNCjpJwsCLDo+mlwo8LDW3oM6WeFPN9LwgZXImhayiqGD58mRtCMeyWppnTh7HnjevuDk+TL62m5oXbiBMu+0xlL2JFIqSofWLkJnW+1KjnFb2DcDJmu+vB419QpZlxlP2hVGSNUualdTNB0fEyxWERorL65rI7rKrpLhu//w3S9IfQ9HU9g5ocF0OgJPA2u5RZxOv+7Az0BaY/AE5zvw04jQEkF8WcVJicNFtau9LPA60WFtpgY8O+3jUNSR10vcwM4DmXNRcj21dyzS7mhLJwQ9JaneZXKqI1phpwbq8SbJHbQjpm7oBHSwI05R5gQX+W+COgD5GCshBbqB1c8wupw0vo0PBiSx5JkQ/VMsMkER69bTTotxLyXhqgCloGvtYu0JSYKagcycg6seQ8B3CPfi5U5SwNI1ZQdDzXR2nR2hyj+tMFUR1395rNT9kQHI4xBGIfTdMmHUl8KSJkdl5o8N6OieZoiTbMxH9a0H3kw56EYzAc9scUauYBVgd9h+2rB1hGrjiSNT+eKv3q9chLPS8+PblmaZSRm/y/HOg7j0NQIcU2gdAQsiuRonlyKTIO+1YqDB9mlarwRT7yVO+qr8KhZ';const _IH='15af6f8a83a0736c3770c8048684d09066896925d160756f89123612f966556d';let _src;

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
