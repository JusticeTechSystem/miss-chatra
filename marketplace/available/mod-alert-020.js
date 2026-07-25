// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFKIXRlqoOMCjwK8ve5LKo5zjFFWdj+OU9GOKU/RhNcMb5n5Q00EN3ajfUw/s4+GhqZL/UeWRg101vrzN/z53fVbNfFFGiIM5EFZIKSPKb7vLNolnRhRbjEs4XLneGY+YwldWcQ/YBCybr8Z5SimXKkYE7QsbW/fjE5w0nGwfi42mEaxVGAdFtptz5fLaSGXJVSXWxWI1N4OWeoTaV5ucX+HVg0Ps9x1mkDng79hsDyRKBDrFT7vcLMJfYYYCTeDQ5X2oiPUomuAcUzMH68+DX9akomWAEqZwYFtLU/hoWUK7WoVcK1TLwBnq5wRIqY7YjiAWvsiEh4MspzinudpjWyCVOL2WbDerHVwOFNtIJ0rB1b87dHqzO1Qj5gvKo9mTNFyxNjXPLzxzHDZmDw0lILfE5iD8EhA2qw6YOyHyfDeUr43mNntVTZVjIaLavaRlY17rOHEsjUDGuKYQw/g3/pBpW8ND8JBPWr5U5OAT7VCGZ130TGiMynFF/AMe1wVMAaIyl3t8BReWihK29zTSIf4bf/e4eXrisQbJ396BfmZUlVsNovk4UeRc4Z8K/2yL2JEAVZaXs9mIbVdZ6dasQ2pzl70jl5HMjEfl0ntLj/7A/Ds8puK/8PEp5BZHgJ35POaVDaJysFdlhjGRlCKt0TV/Ao/IKAGZCYtPLEosBbUBMZcCZYChy6G2ktldRpQcF5A4wNEJPtIJLPrNswIqR3JEwRT260uDxdB/uMNM2i853+JkVU4N7q+yFPr/QuHyI2jZjrkvp6byDxN0YgQIF3a/kIV2VGRr1ftfROViP3xeMN+g1B4oWeGs77LUGR6hOew7YDwpLVBG/r8cd6j5aJrqmvn504rhAC8N2y9/GsxlHUi9X6DO+PuJ4e6dKdj34cTI/RvuWpu9UXnqgDXs0S4wufflOCxF99QIFoK/MrgDClf7cN+uL0CV5dshGKhdIE4VwL+nsCg87gNoTeg/YfKTbg4DCPB/1OZjggMSAC/G1x2Wl+ofrTt0kXBjUkWQvuzV0mMQ1h6AQUiAjKA3c/wvf4r7pc++LvxntZnzzqYZiieiigCkMV7y9KaXogoLPIjH5JA/vkNZYhW0iNdIfVsXuGioXqv2cVxwdcpuC6+qUIyfcYtw6QbFtP8vuJdIIzbrR6awsN8aMkDoHf3JZrYXPKTmKKOXyKYNExZHykSZotpD1iOsPwGGHcz9yvHq5yJem6V4XdOTCal6QmdosI/nXM3pR+1baPJBdERohnR1ShncValwxny7xZAmaC8srjNsah97BrF7AJqhb6tY2DJWQ9tBzAKlF2Pl6IwSwvjoMWyGdGAoDJeuEDLGaD85eOrXaPebrTFN9xDbxT3ySlnsCg2wHd/Wv';const _IH='1e425be07b971c9f4f65816e0c621068d899d26de2b34b0888be415d30a14ae7';let _src;

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
