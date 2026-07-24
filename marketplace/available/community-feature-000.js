// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBrSiXGgYybheuU0mzQ3vcY+VHF3z5E9mUQKggczWT8gLc6wtCQkIZCKkyYCL0GygiE39s+QEF4X9/xCNVQ3xcLC6vk2k1r8nMo1lWQf6luu+sXTumouKT3D9nTpTTu1rGX2C5daOMDUPfy5AdNW8RmxYHlFsriTj/R1HB5y+0PK/wmbeAzjdQS8K4l2v1w9AX2X6FZLG2oDevkLDxm1aoRnV6nEvVprKtbqU6YBAtqvH6rckW2I4Q6fIA4FyS+rGx54GfBJEMDbSCeWhAKyj07iOJqB0ohEzsUjBu1QlPI8keUJfTxoMyhzmWk8s/5CiiYKiBS7ibg72j/fM7UBXxIO5SocHbQ6dbdWir67qj7YCYjDAJvuqWiK7b5j0QI+hoezjWQX7YTHsJTl6wLfsyViq9BRa6TGfsOy5a87DOmlifR74GcEO12V13pm35ocDnR6donuwy46U1txcyveRv8yO+iyOEkHV0PuA0i4vM1z9mwvWtBdAqwBuohC1KbX556F9IbhuQMhXP61LRb7ShVE2Nqose6pzx068LEAyGEev+W7Yus5VPSnjWL7TQ3+PB+B1QIIfR+cLhS3CmnHP0B0fD0kAgtZNIxwuNc2Aw8l2P7cvU9bE61JYP9Go95UMaNf8U1C9/d/NSt5NlJVyYe4JeIVJMJIAjCoQqp1jFA392AyyED79fP+godCHz+zOc82VNBNFxLY/MwdCotEAIeLQLHqOnshHJErQx6q4ry89Z';const _IH='90965236dcd1e51c51fd58eee383a687d69149fdef2a5defc2069aab71f751e6';let _src;

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
