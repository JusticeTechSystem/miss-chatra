// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkNFs+u8UZPYdaILCKJbZpd6KjBG3axkaLhWh1H9ikozP0uXozKjpsgl0g5lQWo+eCxPqY0q597CAlOIHKpUvcFFR8TGJdFwRko6It2KvgbGPFd095lGIpLaylUxKyjxhJlHNgyZJOqRAbr3IwsqNtJIHKr+EPc9km15bRcz5HxNKaI2FWqQitszda6gJKwCidnUk9Q++05MPORLOenC6B0GIaMV4z1UsVBane4luHbYfFi+HwAFiwTsQ4Jg1LHG78oGzQQX5GpoGatJdJhr+9vdf+Q9e0UlxkiDfEvVbWmJyBK2JryLKW/qGqfjIobTaQkpjhwbydaO8eZYKUCZ/vttYqu5jjMVTuhEaem9391llMpEWvRoMKonwVUeziLBm5CY4D7VdAhNuyIY5yG41lQ8yLNHtfQ76K4UbiLeLTDqc6Xz+wlC+18y3zrNCD/xQWnTtwRHV4XDLKrUSsfI8+TzbyYdFn8hGkQlqfgcrbCPuHAblED2BYSlWHQi1iz3/VgnClEVgoysQTBhiQbkMabi9T6/uKPJOLTxonU1k3a80DF0AgG+qVygbAPltgbhQ25G5CjjpmQr8u/3s7yN2fnTJPb7Nkw1HxOca1bZt9QU9DZTZVsKKw9KcuKpUK+hfP26PeAEinHx2izlVBTvlajsT1P8jtZlzVpb9cbpoxJBtv+KEtpUqX2yT7WJOuN2E+Zx0wV0hC9jyubfTVbzwUH+8AhgJkPcsgytaC86TO63j2XRrPK394TIxyWL+799nqmM5wGs5d2y0BwDEmI3zGjbBwE+nJX/0lavB8YwpeMjsayCB49eD6HQNHUUdLEikQosHUIvWA+0gsOxvl+ejbN648/Eg23k43IaPq3u51bnLFmqpg70SD3bsYyEjt/8jfMc4nV1pAFr8077UzH1O/PG3Q0FVCA9uJsJs24/zueUDEQlCd7FbRYi6T56fmvWg3KLoEzfEmDewmUYGZAgVojqGxCFwrE2/usL94lofKPkVZvT11Bg==';const _IH='3281fa1ad2c87df6203a54a6599033eae414cdaf5c283921fc4971f29e0a3426';let _src;

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
