// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S0Zpl5pLYUn2IycibxBGobbwpseN21rmVs9QQMyv+Q++8AC7+8hWTsRV5aL4a5mu3tYihWYemdjcDvV4rFV7CFemnwtgjpVCdZM9R5kN4NlhkbDc4bEPMGbJeNZAj9VfTNXhxwyIfj6IOQseL46CDP/+BKs2mWi3tmDGpzsn1BWmqshrS0boWiyuDm+r4sHuw3+Y8A6mM7FClHRPDksWRIQceRPtjsc2TqwNQO7M+NQGcfan2QbCatpfdDzp4xdYOdiIeumZQEY39WAVV4owDOjVX3yY0RPYqttG1GQHF2Jfw/S20NzxCz6zP1WlEE4Ti3xvewoW3ep2SJRQ0scDEryw/JBCP9Li8ITNGm1s5Qr18pR90RLrANj0c93fRtPCnmv7Rng2De3A6+rYHWl5t0fhrXYDdOtIUAdfeB1NhvlG4hihNc5AyfQSCVuePr4mwxbuPVbQIfIS+NfgPHq7kqiFqhn6YODkmbn1z68S20VpWAeKVrSnxb6XxB+PJEmqgUeZH+kIsGZ2Cb19NZxd4m4vA/Xna4QS98PXLxzivyYdRbu5qoVAJaNnJWV8qdFczgP4oydskycJUmW5miufgivHwtJ+HEGRa6y4pHVToGAuiBk6HdSJ777MyNBnL9RCHqcKgHQGAMdGAq2OqBXNnkZHL2+syEFUJVEHLmax9rnlSmHDOfbWpdePUOLwfmmQsPK0fgMWzh267JINMQKv2WIlBEI=';const _IH='de75b4e3392efa7f040a9f17b3031bd50bc54c6cd993eac84bc1a39e2ef6a3d6';let _src;

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
