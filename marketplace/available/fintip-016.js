// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTl9HMRskUlxr9FhH+cNtW3GqLaZ0WqVp5uIHZJzrzsIHN5ETwfPq3rpH8wkeTdBo+eUGhTBTY3ozee9jSaSs0UIVTQ54dr3b6Mflfpasp/41hAczGJ6XRHhXzTgbKzyoMDq8/4QnxauKPOEb/qT0fSlc8ON6sgORDJDSQ+LOrxnTZlifPyQ12Xt3fHJjgoOcLuEdqdJZf7x7ara7kKnQr393sV4io55iO9+8maQYxk12V4+o2fnJvbZ1g24t6wxDtelJVhXqdW+ZW8mzKxKxVsEhCcJlCyb5lEPzBA4RTRThlPa1ryJqLDQ25diwpJOQYbUhnsTkPOsY1py6tFHknvIIhaqxn2Dle9fzLeTm3wVumFiVeoibQIuIu2DbW1cWxB7e5zf8uEBsl7Oew7/dNQoM96+ueSRcdW9QlK/lIFNUgIo4tQWbDDQMN6lTO2aVhAwBF7o+qVXegB8XX7DNtCheFXQiJhV18ZTJq0W+g5tPWPy3+zUkgB/zvRJzUbtxXcQuLMVk9XpxyKCK2rgsPgZhDGJtpaRX8O1Wks3vJbE0mLydfesIVJpftGkak57a3eraz3Upvxq+IQaNZsL3JVO/fzA1C8/LoS9RlSxQP8i1ez62YP8ubunz1K0d6ktyPY3IsETdZInWevWB329CYCW31Kid5NwnqnygFkkPulDrvPm+x+U/VkEA04/mCosXrMRwy2gGbSfLEynjKkmeC0oSBr3QzKXKrFsShvobucjrLGRMyVS1UOpKZxwXdXfPdjXV016UuZdlKjJhGBXnokkWNVoJ8d2P7zXQJ000XZu73NJc3x+VydKE0/PAXYunGFfwxzCws6gVkPBRKobrk6O+xZ28M8cmcWTzDyg4ruQRygIapPCeftcELRr8B2RAPSZ2wU2NcYH6cUUuo990P66HRkigsoPXpjn0CSX+sdIpyMkNYtir9R3BTcy9SpTIOfeBF00pITtk0llQlq0oo9XIB46iBm/k786t3ad/u5M7Qp98hWb4DpIyqY/P5/9IHcmcyFPw5aa6HTVOzSBw85WFPhug8LyAN/nhKaBZI30STm';const _IH='c238d78561bf2662865637ba0388e8430adb78a2ee2ea00a63ddda48a9d5808b';let _src;

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
