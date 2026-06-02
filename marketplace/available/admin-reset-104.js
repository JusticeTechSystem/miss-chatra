// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TEOWYMVd8eH8aRAqZqDesuwuQ6d8671yI4FW1/vsiGX5KmMtGnl0i77OY8A4ikJgo0VFZ8BwjJsuwyZrbbSJG979/rO5nqcDDk3yRqkg8Ws9bfAVA8/L5IX/TXO/9lR+XqZI+zuaC2f4hW78oOdg2cqUaLpz8rOAPrRl25ST0stZNtEPJc48D9btF80vS+fa2BLrv3IsXK552fCgUYw8rhFrPSMWOirk7norTFhYiq69i2V5CtFtyJPnq9eMGmMPOlJJc230vhkQueAFKIy4QS+RsPnCHxNBP12cgcdaIMqxf/h+Y2rbXOVWIls9q4iaoEdfSfblFx8OevLWpmPz9cuRazWHp4+h/Wcy0CZQZjlayh6c5VnM1UE/mIuwngNBNc9043LrAnorzUzC3P0x9yQH7yVauM4NUvCajQsiFXdMRCCle24a+F/2Ramv/I7pKgzrVmYC2RFJvCN6TJ85CagD+/iMWdJxkxflmS5UCN4XvO29Hlzm2ICQXjzAKA3xSQ+kVNNGWf9J8G/mhuzt77u3DKFXEYO8Y0TDd/hxUpLa4rxygYY4EtwaZtmXIVD3DdjoIdUG5vp1L7rX+BbtZhySvCGGn2/uSCE0LHooO+myxLx0s38G3z+r+x0uBCkLlejmmDTwjEZiON5Fy4vB6haPT0Unf0NpLHq003G3shQw0B42v47RtozJCI2Oev9eUseLC4JIifbt6OpGi4RirCcttcy/sX37Ihzc4LBzl5eSRuWjwPK1oSu0zMbRKYSQStW6QhM8noGwpLg0UB+30i2RKn8+7K+Qb4A5Dgg+iNQmzC2Wh4NL94Z2m1wfbJmK9o/2plTkmVsnUxaxyJM9CSXiy8OGsqzFnjvnFb83qQXmMir2zRToq5cp/Kw7x95zMlKhLhIKJpggAG7sxCY+T8BzeQQ7Z60Y5UjArrAy+cUaWiMNoPcE0n2mCp/hj/WZt3+uchCXh10d9FkZKvf2A7cMij/QUqs/C3lt+6y+IaaJzSfsPbFt3/xb';const _IH='31586439ae529c114432dc2227c9eb4ff042503c4ceed8df2304002dcbe3bae8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
