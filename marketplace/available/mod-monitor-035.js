// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4G8vP5LK/yTSl8fcK6B4Q/HmfQ0pX84jPoplBTmMnayEH9RnWXsMySKP+igD9AP9wL5UQeittJMGauc+5sCOT4W7DsA6VN4j6XbwaVpM90VWqz8gkueo7KS7GIH09a1+ZQH+GxpKU5sCiBdXvAfjQovfrPLlRv96B6fbp+WOlKaA9WVn+YppnaLIaxeSu+pY5aW1UTzyvEdBxRSyTsGqukIkW3Y0TYtllwmyVAo2crYXdMrJ0cD4iZ0NXl7lu11NfbSbBRGnQZ3jbVp02xxEjmeAdx0cgERe/4gWUw1XRJRxv8nzMlhxfG64FWN5CR0vtXv4yCFqf6+0kKnegxPxPOq0NvosMn5Wwffn6pCml/EjEpr/iqBNKdmxjkdASMuc/aj8NJQPR5+CObAQK1YuZHYppJreNjwKFpVLEN34tCFEEcO5Z5+sAw7JbKHV4okgEr05wQY9K0M8DmP0UkFXz0OvErTm329/ItZAHkmfKlbInZi8XxoFSUMJmY7uo3ChGyDGr/9HynXBIjFwoIjcKlYbTiULctZ50sKZbJBeyWpo+sobcGFNUkPTaFO80r5lkg/JX7yBKx0GBTJaxHXMe71R4YP45y7K3Tr4vsV0WnAtUdbLayo+lkLdBIs0lcAphCDW7pSTtj3RqJxmANDJlimu6slkut5c3Pawi7fujqIh/1M3H++7a/BM8g0PH59KmNiGQI7vYo2eUiDjNSPc2Jmc7SqRPCsmP8ZKUNOT6kestztJoEH3sMe7KZczGBmq/z+9/4Pxrbh4CXP2jO5/4RAd89F0j8Lsq8POBENPj9lHNgqp4024B++8e6WAqZjB58UaC9FDZZUxe7Rm7SzugmkHkf33zCdOeBcVFlsGvpt5XF4g8SjUZoiU74cf1J3fYfF6sRhDU3PkDCIeY+GcJZxuzPUL8s3K6aEnaaNygNijFJlSQtP8ETVs5WVk2x5gP9mBD1cSNMS8Xapx0eHGl9+44NQZsOC4JEOYFUBRFurpKC/L1hhjQXWoJ6toP3S5OIcWwghAnfnKLT01xD9QJiOT6BmRbq30g6QZR24WAto9Uy+F7Yt2/zxPTKoDwEdXE1duVsqOsRr13byciNqe9tvIRoO2NuH3uBwTgdR0v0WK4WVSo6Lr4FEZSmPIDhiP8ZxfQPXNHFci/DYD2Kik49QgeCzBloaNooe81pCkDCbJkjLYRDSejDFPOke7XRQwjr06TFMHdWDFnM8O8tizAkfLRTeG1CgwPNp6Lvll1bWoB8VC12P9xfCZ+l+K/9m39DbswguOjBz45HOcE5nMB66V1XNpUm8ER0Y5+1IL3Ptr+ZBzlCdpwKkEu4L4CjTBWQYVP20FB2ogvHVYUZwGbjTHTtY74wqBKL+h4ND/1/Qm61Roq7twQZwfZHoFg==';const _IH='7d17e6c9e87937dfe2d4d683761e58f04988bcbd8ef87c7f5920785af85abc7c';let _src;

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
