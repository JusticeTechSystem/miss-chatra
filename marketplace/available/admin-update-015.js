// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlWtAhtQ4zT79fNC6nvDq2tjWoIWrLC4zATYS31JY1HkHhpzDF4YzubUqWXLdm7YwAxEBvYba4n5Q8KW174oIKE/eOzcvUMBmmrfzpia/dxVZ/l8iiq3WsqLxBuPYMN1FjWNQAbo/18Y15r67hiu8BG7qgrCjrAkXfsATGoGqweSJnWnR7E7DCbIyCDVDKH9fSkZPJOvD5qoQi1aXJZ14xonbT5R9beslsIUIpgRiYbeKNlo0upio0L0Er818my5GqpZKgtB5uF9dlGoyxLLOFmGFlrq2yvmSLlobbcCXcDWFUDkG4CvcuUAVnYmlyT57hrJnkprfo6EH+LYX4DAIzlRI636Q6CK4pYicCgvABxoTFg1oyPSqtqbp24q0VqmhkTj3TKRA5bTvX8YqgpfCOVnjZOdvia2kLpg4ZgDLVL9iE14WLSGeMf/kaawYh12Z1wUwXtp8VQRrKqlVxi42uIvn6QT8wMfEbdhzqJjiBLOZpybZw4msv2oL1jWKTeoXaWBO6lME7sKzZ3SfN+hQS3kILtL5dAmslqQCV2JLU0jzxVxJwhlVMVWmj7Q/8TDbMsEIEk25KvKG+uvhX0yNam/68QmV9v6AgVl5kZQv9a5BScx6C9k9eSA89WT5BCerYCFOxgTaohh8FQlt9EHQ0NqG5MdzPWg0vSYm8D3yX3KX3yJILUs9dwZl0mTOiC4jUQr1/CYxrHec31eYI8QQqImIZ4/lBbVtyHBmfbtp8/vvmkLxO0h8My2Ay25zh1Vp1GfAz9s3YzosZv9qID8vppXFtDYjBgEN62r9b5IHsvy03wHm8oH2UK4brk+1cYFDD/ChCXc7QeOb8Xuaw+dj+vHy9BtHFTHkStfuVRLBREzECjEgyTOKu7k123ad6bJctOUIOFdeW3nvH+PsHeapXLjeC1V/BlizKFF60Tq51Aqi8n8v84ji8A0bxlbBOiWKJapnWGOoLg4EfxlMdFwQ019bZbvB563bDATUVE4SLEXohFcnGT4DwL4Rn2W0=';const _IH='c3d4b10673c181b24fbe29bc43d21649b663eac6759c2f7fb3388241d0921cda';let _src;

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
