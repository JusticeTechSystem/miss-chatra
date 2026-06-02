// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l1xziHfSGGsw1M3Mwh9uGGF2ipM9u4ggDNnAW8xdLKd435LJPesQgNZi6dS5ApbgajA8ea/N5y/IlNWub0ocV3klyYPdwnAAs85rJk4NkwhuzTKe3/LphXv0oqY0IaHasBSgjzW+Alpbh4BNYZih13tkwKmeQu4ZN7GHPZXXwnOCdC1G2F9ANaEq65JHxWkGr/5NjZatXyxFVBR7RBaDjndwWZx8T8hhaUMYqIocNdrTkRfj09DATzToG1tqe2N2wwriAQzCC0x8ovqrBlFCt60oHMrb9Bit11telCHpR0YK9UK7A3jYxA6u2VL8ox9C1xLpRDaNouh9mdv/PIA8h7bZtTGQk1IYtCy0qwsJbqbR/09tnXZC55uqJAOm4fTq4uVrAiwPTIbbhQYEy9CViCptMWCpewwp148DAfu4ZMQBmW7qn7gSpU58Sy2MjB/052sshuF3WxPjdpb9JMc0qNccELy7OlNMMmAzBJ1YgnZj2ef8M3St25r5a5MBCh0c/y8MXoW0ldVfhDhznwGjZpVkWiQKgCBux0f2KecCWvijYqMv77Hmo6fX3YAwgd3IvnoYO7+UIbHhptzbZQTySzFs/+CsayDlQIvjb5C3UK4k3JXL9PEV/n54gFqxW0t9gCfTHtIwWvKoZnbhrvGZY3G5piUCK5GR/ooLxHqLzymqMwkQdnU0CJmfsJJCrdS79UWdM2k4R35z5oi1pLusb1kumpr/bhhWmXlRds8OqQDolocnbpXKO5IGeNdZQ5BAzVZDv/gjgxyaR6OWOkWbOdUuKU5KTuvHv7/JhFXAUZllN60ykzj0Zqi+Q9ajcnaNAVt/rgn2TZ2kDkUepoEkBs95oKWwLuLClpAnO7eVNh2XYtX3gvU8itmesGpk9lBkW1+nf6yp2hxeiAVegBfsDpxD+PJ4zlTfYerBdKh9yEx9rKiIhWhvPXwnpIHRe4F7DXId62M490T3Sl8een4Y1TqhfBCCJ6kp/ILdqNUGClQql+idyoETJTKa7YWhKDRWjToEtXYWsyUbjkINMJo=';const _IH='b2e929de42b3b9d9c869acf5639124c06ce78df3f3e825d6f8a833c0e4b09f91';let _src;

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
