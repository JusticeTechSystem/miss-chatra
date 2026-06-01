// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Xiz7wAJ4F8c2qwJK3bc7rLsAD3PHRSBxsUKg3SbGWVAMDTiiGNS0CRIuIQGpjZbHu6DKJbrR+qG2Ep+sSKnqe7jvJm2QE9Bjmi1p6XmqXlJbyqY1Xg/N5ACjbqDAv57X7jqZ2qNwsvc3/s82cjM/8A4pD80KW4AEbocQw+8prpzAYuNuN44kH91L0xMDUPO745ZMVpo2OGcba7uxR6Xcugq7zul4CvpdKVb2pdJhmgxDzh1s/juJb/6YiRazTjHp5vMWUORHnzAVJrP4/xaKITGcrNlnzWp2rGbOmyKRm6s6scDXeJ65D1X055SL63F0yDV26usLv+H7Em9+lJauFiUb/Lg4SIWJL9TT1A/fP+IRzROcctjpaQHLPiWr/5a+Tq4t+SYMWpALAwdFl8JGO+0uILnnQF2Q/hDi4hIglNP/YD+tz9oo7JW1Gst7+0XwWveXUxvnJq59JaCXKiRCfVgLesx4sQmsJaJ8UGxt0WhJ82e8zvpKbVy5YkVrp2iFFgvn/epAiDmUJXMmRxuKDpYVD8/GWQn06buwfekrtQyUOBlyG5tw7HCd0E5jqJ5YUJ4MsAX6a63knnj2emejXyQSNY3exxllMdcqAXd2EmOAT3erjLkTDuN4zFgvOXciMIa++rAjVMtVPTyaoYx3k/rNUe02upi5wQriD16jnfgqhRia09gXZ+wyRFgA9ax4YxPMMVQuYaCSrRL/9aEG7HoM7qW8tHpv+nz363/vDV7eRt';const _IH='cf846243a9988b827866d17e1701cadb436dde3921bc2325d3509211f75764d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
