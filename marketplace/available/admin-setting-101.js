// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oVUkxVuJUdyMbLOHz5gS6UxRxv6IGEp1hh1/rMXGKuldRZZ/ZaTHvjhuqt5pVHVCQ9DihmqJ6XbLm9woA9O77HEF70J73EzZKSuR7rtmDPJVEYJp6Y9zkcEUS07QPdhwWpF8h6UNixcWisx2bsc/3S3hh3DIVfyRuEOyFuvV0uQVBh1aXXFHJRGeuqeFuDl8gvGm4GXYkWk7jZ05Y5EobqFpbJeEriAStkM1HQXItcJSSTkHVoIWBM+SQauHR9zZwjYlHIaznwocKRJsuZSoJsOIXOPxBjs4t0Wni7CgvyN+5yxDJjTWMAnAged3L+4AffPoIqdGhAbqHf0NbPUHDgQQm7qZpJDZ6qJkbyjVToeRePQUfhnuSjXB3z+IkUwqPrENk4h+1W5GWxi5CoIeSggCJ9pAp+VC8ph4wh64aSh42TIL5SfaVCPV1zQC/3O1ea975wCAcRIBJCzVzk2xpFCnmjwo/ak6mGlcpIf0dLog/cy7fyGzAZ5EngjDVt1d1iTolDpZ+MaZT1MV3IkeeJ3W5DavS3zvBOtUvQ0MMGFsRK86D9ecCXS+Xee2NAMy4porptQ4fPHmXgLr9Q5UFb0KNYidHsKGD6izhiHjtri18Ptj4avF1FnG5nW/qdCeH1GaqZI0iz65YtfAreT2n5/SzEdHh8FCfBZq7HOpj5iunafMhl9rKfCUxqmAQEHPjTjrgAJV+0fcv71G0K8Nxy1xZ8BkKSARNUAnQd6MC+basmP97Bf+q/0KhRWMyzHdnUm9K4vDT5Mn/pCIUDjGB/eZch9gJJVFeyFjV9HWyzkkqzJXWjY25j05rtqaPiMb7I7qW4C2uCYrzgRApMKujYY4Jrt+53AkMrjRRR7JjgBGdTbJ3BLs8n++FEAeloXigUSz7/aaXvqbk2PF0ahN0mVM2y7DMJymZihrUFDJOXUI8MIoQrvhuzhYSRsaBuD4p2sfUaUiDiwkvkdzHm6B3BkVhht/kDm7oKCV43oSRnX0486Cltd/VyYJ6EhfBHH7bsgXCPVyyqY=';const _IH='861083ca6fd19ae4f2c41dfb6be702b9864bda34c3352a769d28fc6e4a69150c';let _src;

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
