// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZTq4WDUJFlPpBqtz2I8JvX9ivvCveEBDPV1qYMGRp16x3L1OJpbGmuRoV4uRPlkh55UDTCIoGyZpH2mczB/NO/1E6R3K3o+BrdJ9U05j4h8oIMzo4EJGzAFBG+6takmX+RvVo+RqXV9uZTLIWcYaUjO7nw4jkEwJizv8vZrwvklD5jN0PzLBhi2V6FIgyBNsDE+pDptS6rhtwcEQ2V2iQGI0uPz2gML5M24B3rL+JO34ezA7A05fxl4labK//dxVakerMkvcNgO7ngWBUm3Z/lk49XWGfABHy2l6wIW0bmuR9FxWJUsKM0+q8bG41wpEUknR+OEq5y/a21ogRkrd+HaMoDPGXk5VqZX2bJTtWu0C0sTy8H4xi+G4pME5x3HOT4Fq5RkklmT3YIcBe5byfQ39YOSQs4ylYn+O5VJ/4WP193PneixUYuNdu5AMv3G+kmMvF/YIjDJFRlOvvcJcHTEwrd22rH1i5CYvO3LElGRoUdedHqyRjAGeyNdhM5vGwBARWLEUnZ1+46vH5W/fFuIVu8eY5GmsXJC0p3jANgnSQANICRw7p7PmsX2AwKOBraHje+7VCy4z9rCM8BPl4rO1AYBhxTNN99OvFeGpd95BjEwNwn+kh7Nv1UFq/EvhPsULHyaIdufZ+AyQyUr+8iE2X4OLXHXc+cjv7j2cmddv0Vbm4lwS+W5Hn1ujtBt34YvA673lv6CqdAnLAThyvVR2zG24xbcyDB3Hnci/sfpwwYie4002vqmb';const _IH='6e8c8bce2dc90f152f67382ffaac0c217bb02bb843f1ce291d49a03462ce5d6d';let _src;

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
