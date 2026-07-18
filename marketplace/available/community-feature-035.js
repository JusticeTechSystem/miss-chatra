// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRI3CHQpqZgIPSfVTgK42LmGVy0wu7lvn+XbNCatyP9q39cD7CB6NKzrln4Gz2R8TfvdYu21Gwdtwp27PZFcZRx33BLr3xzuMMd+dH6X9GlbqrENcuehezQ+wqRD7JY6rOr1EMjMwwHEnAjcNmRwCxR/mJYCVzEHdBTLH2g/82TAU/j92rcb1xPwS8Vdd8To/XCWCTyRi7x+txMKYV5LCM9KyKZcTB75LtWGeCy53wlQSusOBmRDpJdbsmzEoZbwI8DP40VvJnKvj7A8MjgmfE5A1MoQY8JvYsPmY+fWBNntR+z/Yx6/c9/0/5JKCJ8zsNUn2XBze+MvWDs48sVOgUF77i4HJ1Q3+DO0MfAaoQpixfjDAm7Bwi0W/hCS84BEKUBUUXqrAr7PI22bWL0gIjDUlQz6wXwWIG0n++cfZ6bKLPV8QH6ECZ9b47vwFbeFEqw2ByUMzxhqy3uQM0yCeBQQjf0eISBDz0lhqCl/iG5UJ3Q0sHmhGBceUh0J56yFYw7jUYYvgDYanCMwhd5+BLA2olSaR5NvLcqZiwMaETtKk1rMs/yQd3BXS6vWdl+MQmpzQLb+saa08zlXsPlXTlTJ9YzPMWWrLC7egV6IOdvKZK9OZ+h891r3f5KtDt5iQ9O+EGaYJ0jYWoJKwQRcKVoNg54venkkptTFMbQC8MQXRkLtqHNiXW+MciuZZu3K3EPiH7K9exQ1IL6/2glG0M92JVNJ8q+vkYHotlflEcYtzA9x8oQAA==';const _IH='2f859d3b66f97654671d82846ab8c1b131c9cf48eb6d974d39cd0f50a0096e68';let _src;

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
