// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRsEFezWGqEJgX1/iRtetXBXpmQvFoB8L14K6C8M9pVGT0ZIE01jUPl1ZLZf4MAH1Kt9rnqDfUXQjr7mJCnOTbmQOYK4aa8LjbXaivldfbA60TyqDHC4sfz+O4/xjwSw/TNVQEASjjoBHwiXFfkV5/Ka1JrDiRBJ3xI/gd9V6nNI2MtfvCZ7AzVLuMP8D5FSDIvTOFfpY22niwKboImtsdvF1FrmxhBoDKqGYBDRSPYJVsZwZ1y/AY7aiq3Hm34CHqkYsYo7vofoHQlu5iLErX38HGOqvL2qCDD78f9LSi3L6OTRfS+yboEfHSc/CXsKK1ad2CipNMtuZnSNOfMdy7nxvGZpokofVtnB6So0sVSZQY3h75XsdW7sMjd1nQxubncB76XOtMonTBs4JAE4BZyb4BUV/bfnOIncegX1TlC09wJOB1P25hr/M6fuNhbaY1Aws/o4FV3SbrN6JK5dvxLoXTMGW7uVE2mn1gtgdnNG3WdiR4OOS4QjkdM6/WOEdKa75fguZ9uwU/KbtdQP2ce1w/g14YfSqOks1ZaI1KuiPTB5S4RStzULwmwa2ckJIGaVfNgkQIZ2unzWS2uljk5qjY4duBoAwZ8MqTAFfs+GL1h8ORlwfpXQYZyLqDmD6Mk8LgbpC1c2iDuu7jzno82H5v0p67yh3AWK3DW406h9IcCWLPpHJ41Fn02+kocGgUloqfd4QHgLH6DAZV0rQpu6cM9rqk9NyMhq7hEYrcH5NtcCoj44tFgxd5boblHRR+KHoHJORUSsCdrJaXYAdFff9JzTfXss3/0XnfQ7a63be9xMAbM9fEyRJxTf1CubZdNmf+UtZxtfgG906amMFHTB+nUtEJ/fjUKtD1DF0Gof5X2k931SUj1NjgH1o2ON5tgi8WTQyFVI2rT5FxVNQKLW5ZfMEwGDwvCSN1lGs15Ht0gAuSByph1oB8ErA1qm75AUtO1PvsiB77E2gltdAraqpd36RT04J+3XlwLaGdI1FJjuglstjQLhmm4feIJDMFMLzT80DJgW41QlSr8VmX+HfKqpGCsGF2ColZ/9F9DobwFdvbCKUqU6jn2Qxp07OsZDggo8bsaKbPsP1od6W3rF5S+ftxZe+0lsFrKiyCFF+bidAaHNlQQmtGRY4hYIt9+DsGuop5zNWDPPZdqdA+Fvl+gjpTsNTz5JQgu65IyJBu9JgkYR1zyaGElDWplvTFZDfS/TBAfA==';const _IH='b1580a4fa6d300c1d9a8356475d7cc2de0cfb8b284cbd4a31f12aa742abfac0a';let _src;

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
