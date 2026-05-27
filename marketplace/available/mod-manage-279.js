// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1tuIoT0iwm4fYftfCn5VXgTdqxAbR9U1BL9IYFx8lJyhBObz47Bux1BOQYCkDkPL+E7H1zgS9VUREgRs8tjpLsjNNnGjF3+ZhRKIc7fvOV/rylwFgzpc3X1I2VwTRk9Wjwz4/SDn/FAkHmIo35pkKx6DdGtdlH2K8m2QeCGle0cNGj4S5bDNwQ81/Uueut+dPa4zog+6kZ03CaBBceniZz87I0O6SpzwePqdQI4AGtVl8Vcth2c2TYtm0XtzPC3XZ/QAEq7z/wwPURjKQJkDuZokwDoBta+mUSsmc0uakmQzFx5AyAnOLflE81OI82IKyRMnWhRD0tU8LhFpFQjuySgm9+lOEBC71bV7a75WBTipa3N4Ah9djjCYdguqhMb4gcBEeizuWql4eNzuIrXihtqiJxIVAIvZjhjtn69Ha6truWAabUnaZ/PW3iY6meyaU+3n52AVk4IDngTGPLVS/TNGFnuKPwAhzANyhiNJz3gZB/sDLZf8vbKK/sPH25g5QUC8m6AL53ieTzhu0ycW8cnti/aixZupxQbi5ZgVicU2p0mtYnaY+30aCaRlybUuxUlaS9S5KYm5RMqVpgarLCK99teDrTH6lyVCz4w62r1BMfWDLFZ7Bog7IkOwMkkAZR8868YYYa8RbuNp2yCr3RhufpwtgQ1e/68k2xT/LpHJgQzO1z2ZBoWTDh4Nb/3d8gLxHOkDY0uW1buYUBo1IkhWil5uI80hNoCgRAjyw1ZtzFFR9F2YQgIazMTnuAew9zVx2ssHgZntLIRn5jpWSPeO+OHpGoph8lBCuyu1ECzNkM9qLgyrHaPSh44dnT7aef/9T46ACWSMbNsVmAM6fulEMkfT+mKTz/xYAcNeFwN5ksOla6zEk51Xqc3CPRBrzVe148mJK8RrKyIeKrZ7UHIX0U9Tv0QGzoc4MMK6iSHaUApk5IV2O/WSoAOJiRN/EOOxlvJyOS2LXk3tnTId2LCUv7NPe/ATvxF45ABcEA000lCM12mPTgwmsV8nVtalcEouWCTHkp5jIbxqH9/7/fn4qyjW8c3WN5wN8Z3G+7IW9NrCAzPgeDXSHlSEHu3Im2ALdLtpTvOVuy566nNiIOXxuPUSamzzLw5d7KnOSSw6jtJEOX95nCRGzKPZFv7q62OkXABYuds+6cQi/Yi3ZGkUxsut1A9MztGlBdt+4RDL1U+3f67HLTARNocMEGWfTM8XubALiubbg0Vm9292KJpbwKp9SsNaQme2DxGNdIIONsA/3nzvrBIATpRLTio7ZVpckVfPyDvhcORY+b1euJrc2hLoKKD9Xen0/EB3pxcY9Mxc4yxVVYM3g97YFSWO76n+aT6o0fMBFBni+5V4s3bLqp+07OSmNN1r5nIGCwkd6A6U7M1g5A==';const _IH='d08555274045daddf804c461ba42afc85d8fd8a0aab2f75bd0514958ada83599';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
