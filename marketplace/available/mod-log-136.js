// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQm1Tp+FYK9seX1darRbYcIUr6zbcVPfBCnHVUGWTpx8H2zLpgxrJxmbZDbjHLYpoWJscSFfJBHLKCxnOLMzhSti4eWth5euOWyNoxfFXd1gkcx/jkTYjFqMNCazok8fr5lRlCr3jPfIlfME2er3q+x2CHn7RTGRwRop406FQaK0W5XmHnzOMMM5P73fGB56feKFlGsG7/Hv6Ctzk6JXu204hSPM1WjqSCWzJ/cA9agAF6pxpgSy82BXjcs1FI2tNflqPOlkhKIY1PVC3Dx6kNhDo/NKzNIyQchg7tL3M9U+xFc1rnniHVk1Cuvk6mYsnSSoNwFWmes0ZZ29gsKoI2yas0V/jVA7sxAWW69LJv8Nu6/JWv2y6nR9W6vmdSmO1UHXKN+J+xdhBtznmXlj0xtKONDJ4oHcjwlZtbGhPPdLF9wV4pBCxxqsnEXkQjORTN6fZJyW76U4EdfWuC0Lgg+SZiLWXemWJDmyEzzu7h+OwWgXG8Uzj6TWu+/Ql/xxk95ohRR/ImsC4XJTSeWixL2fu+ExYYgQdKdJ6X8aqz3UkoRJvg3cp4/KxoDnG9hFt44ySDfchgS4JtqzR8qFY0It6FtB0d1YaZKMqq2EdhVKaJtCtcYsre2mAbJceSOrX1OH97sDEg/VbW77/gCHvba4c9ACJRxxNV/qLg7/eyKzrr71QMLUaRr7RrZ7OCllOwZoDUTJpUqJ1926catR1n4OmnzsHsR04qYhYwaQwMZMbrVd+J/sCOEfRI2YlN2Avuc6nfJPc0G3m3ETzDDksqS3inNutSBgITNlLrnCIt7CWI2u0eQpWhuSDCORkc7iWJSHig6JasMfCiYY9y43viBSr1murav7IMtlh+YRRiJzaoKQntNmjB5xmVMXltsppSUp8yWQ4PzZqFKnOlVopvn1xAUlfoAigve+q1I2ZIg1FwQSPpZ98j9r3UPUBMhZaTYl7TEfND1soSiaQstj8+A3izpmM+ZOaAROuHNMW2eyi6AI+VlsnfY/hy80mwm09ZE/9F3TqAzcSvpmiBGOCRv3mlTlKg/6ntbGmiDHNUwQgorDQzKsSXLEzLLbhxOlEGIPoR6kKtUXJ+VyEOlCnUF/e6yFsxyzaTR8A7pdJYQkwt9p9E42XuSFcoQw5aRC7ESXw1Zi4DuHfUH++SbyDJZ65an0aMBtKxoYsEak/tT48CSy870iEdbO2hvK1uKVI7IWNd2VA25GhKCBpVCN+wb23/m8Vp1T2/JMcmYJmZF9/CZuLUsRKpN8/kOQtXexfOz22I6CvSZsZyMngM0tuq65KvEDRGNaMmt1BP3zhCBlJViEYxX2GR5YmnQ+z250OX02w8x3G4Kgjeg';const _IH='db0f9cdc466d63f2374308688dbca7f1428839cccb68faa1681a6c4a9cd4eb7f';let _src;

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
