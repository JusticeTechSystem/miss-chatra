// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHwotHEC+I1BQNGaIo075CNESLGv3wMczFOGyocS8cVqOqwm+rlPhMkoXJN4aWi7H7MLF4I2TmaJFQl0L2vfEILc8Yp38KAuWcA5x/IDTB2xNIbBCzNnJ+Bw8tZO1PjhUmgj3mUXzANMGwvljdffsFRWyEmK5Uwr+vmZlfoK+sosglmVBAN2Ns+T8mkhY+6xN/NySH/dfd8HgaYb7+2COkHLRh4w2MqEMvKt8FbmlNsLEz6H8krstwhi98Bq2gS8Ll1tnv5k5JCzPkzxS1KwrFSa/DbuJ3hltzM6d1u0wK7wcjemzhuABd8goU9hxv9zzVMojvGpRzUDG3eiCpIYRX7vB+eTX24spVpz29GTGa6cry+rInnNJwQAH7HaDaIMWdYzaM6hoFwX8hbQcc1qvIeXPd5BLHSg7I4xb65NfGxZZH96sDgYxMsC5eNz9pXMZF8A8GkQYCwWWpBsqqRL+APEDmjY1R+Xf+mDXYovVu+DVHxTE9YVBkTMtpqiOxZbGVTL+VLX9O3QH4liUa9CvHrRfhP8Nim34LMo8mabrvmp+Gu7JZF6YkjaPxV8+cm83oRZxPHtm/yUudQ7g0OTqwHDQ/+xZhIjSyAYCd0mEW3Yj2VSOCzgkdPDQXeMX7NNUgINFW1zZLRaqrtAGYyKnQvlnd2Vcwk6SofKMWPyRiB0NR+6o5e5pQH+tfCMJ+Zz12LSpQXRafGtnZ5Ad5NLKs5Yz903C8eCiydXU9U=';const _IH='3a50b61da84b59cf8056771435225f67fd61d7c3ec05229b8300e617d11fc813';let _src;

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
