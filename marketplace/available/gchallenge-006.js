// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I75qOv0N5uuIF9Awsc4i9tHU6XjCC7J5yBNECd56lqzQueiovJk9UR4sodrNAbRTvFcsYKf2RO3p3LXtfwqd0RGfqsE6DYddJLXZ6XDA6VCF4ylbM+63Bp2ud/kwCymIesOF5HKQTNi3DaW3NZbZG29ftTjCoSS0wROR5aBMxu+gqs9ZnUg1fJWFkYqE7FVX3/S8K6uROU2bvnvCOSN56fBdYxVI7h2l+qRJ7Gfcwhi5Hy7ihocBCD9vAQfBzSnA+l6Iob3fDjK03QnYkT3FTvgUiiIquLjZLFHV/WtpHuwxh1Vgv30G00yCrh2yXVqWMVY1RWKNTJfzP/GSN09oVAJQ78+XrJE0Pk1xzPF6VNJba9qp1MBbA5JmfIeZJ8jBJXkgAD4De1mJlk3v+P84DcfRn0FanpYracPbk2/UfniV5/5E8HHafyf7xrDiUNqJmhjW8Add9jKvAzqynGiMSD7HcKKVYYkfj8YFY2Yyf75Gz9kt21VJMDlajaPU4PAWQoJqkPwXyPKLVYQOmD/IFjEa2KBvtT6TCTTGfSLqqCI7o4yVaEhX14Vvf9NxIky4q3icrS3G0Ya7Bk/5byTm7OYR1ZGNTf33ciaCfeMNfAmnEkyKayqf';const _IH='f4c5d101770c5084b78f146b5ec28576c3708dae9c875f1fe6b9dcc806f16529';let _src;

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
