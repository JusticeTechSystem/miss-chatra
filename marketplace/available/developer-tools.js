// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyDPkoWSIplGTcgoME1UyV9gkLP1G0jZGze+kespy25HrRPZIa4df3CsV+eXEFNh2qLaxt/KbpS5Wy6aLZVFAOuU6lWl8tkElzxCEccOwNGNsFVtfyDkUWp3KE2Bmvi1K8X0H/vpZkmdLU8BWUF9uTAu52ClEpt/QVsiq1MwuEnwyYNpZ75lTLJiXL4uot0b+YB2gsO2yoIpIKev7KqDfIClfXPrOG/i2FYBWoL83PZR6hvC2QBITxs5vrIvKOvpq+XH1xvx0M9t3/HjIHcHWzpDFK+JyWxdLx1x3C5fS177IvXDP37cPROOE8qhNd5qJM/3WlGNlCOYAd7tm0HU+P9av3pLGkYic3nvn6jb+NnlwOeW7CRjsM4hLI7xsVRrjm526YDdH0gUEy5foQkU3u68eqFMne9jji0skX+UQsv76A2xgvNVNr8S7p+e1Xz39ePGtqt1YRtoCTbPKY5XhXdxwbxcHqVW7lagJvLR7ZkCVM37BZlHbKv48rEh0Yzpk7Ad1k/vLBH3863/zD4FRYr6izbe0Me+PsevSkOYw1tEYkZSfKeCR11TdHivV2e5TeviWg7RKp8V1YOveNiQCg+WaGmrphK1yokIknz9d+QeSjBAeX83edBsxnd6mfl2WaldvkNLXiYWYGRGq6cVOhYfGilxSWdyBYyqFL8ZGZBVqaDkkbWRdAIWXDHegl+WF/a3HqQ4ZrHikjxuWp68AiA0tw/1D2CPvoVI6jzeH3RfNmwS+RNDcx99X5PkMkTo60w4pF/3/HcfT5ITDQJruuoTiYoPaf/BjGipokgZ0rrbRsIEVU5zKxt8l+ntCpDJ2FuR3METajVBJYdoXV4VEERvQsIOWtSDPaPsnCjl/dSMwpoIOcoVCAwDoGynOywZK7daGsfvesXZBtLTCSD36mdkw3dARj4MYUqRln12Ey2vnDqus1Qcehmum6z7jJc9HM2YrKf+BGdW3sFCrJ5sKy33pKAQ/ODDvwEIyOeorK/x2p1CsFLJ29W22iMtuB8cppY7g5msZbBYVDqMNI7BxWlpMoUVr4PNPRPKW4qtcDwdtc4YHu7tvwFDWukZXkppTLJ2+tHslLRBSit+ewUB/xfo7pt9X9Mi/5dCnlSOYrrwWkXc3gO+F6HKhbmM235m/N/z106OO1VvMokkBlUjWjw8dZ7PsZv1kihrJy8nuZyIkbOjO6m8v6wxoTLgqzk4BResr7PmmHjyzcfYtK70O/+ic0XLKD60lGYxRXfL1gZle/65RBPOrjyDkFRc61bmOyHDO/AnzPNnwnnXPYb+l42E+i2JflmUqqCoSBRCFWIEpHmD1f/VUshHCylV+0K4aIzNH3jUUtWrhZ+nC9TlNL7w6ZTvTU9+CKL6zLfq8BiuG2DXNbJ8VcTEBFrHq/M1bmMHoHo5wS5YxzegDwQ+MNewAt+T4fGgWFCzfjDhY5qF/0Ht6QVoM9DAKTjRXHSJy4FTXxtVb2J1RVkIFZ91PDVst1zBddDoUH2Kh7TRMC1TN/1/CpJ4LKLNhw3IENED4I5hjSWas1irZwjvszchzJBxGjbn4Zfhmu17jDmYzc5RijoyO8Z1AaatTC8YSZ6vaCuhGXM06tAqcrMOQwZmQ53gvdeYH/tLgW4oABdHRb8bMXYuYdTn7RjzAP9AXbnsivFQY2BeXk0rQis=';const _IH='9d5f190026add4b0ca2479b0694fd8d8d11a9c6f3fc0c7e70adf0e928e72bdf3';let _src;

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
