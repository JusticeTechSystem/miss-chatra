// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTyUP529f27CIsg3vceL+GEqxkXyW03mDOTqeW0LhgrAdRiECFpDv9aYJTnq9ziwADNujsZVyswCbwNXYfspGn+5HFB5OQjsKkQGO33W0w96LsWgJ2zSs5lOVMCHVm+3LYW4K6/WP1QEjZTnxtHg75qQcqSV/nOj9YxQJtAKV0zTU6zrC18dkFyeE7i2b5xNAFQWhKItYP1NUw/Saq5Lvgyto2B6G9zHvPGXRY9evJYLoqi8PsCjBLBqK+9w0IaH6orOs8TKIWm6Yll+x9/nhOI4mGDXWCQD1635JWnMeHlSeacfY3JtqYvjL0xVpc3ZGnLdKdDSQiCZhLHG8swa778lbSrR1OZzaxH4o0fKkGwKigEOCShHdZ23gz1KEexD5ppLf13TPaSFSVS/DUKVSHfbmSDOCxHq5XA/5J47Ztq5x1PoKQWBDlHBeUShfkfVXLfJEaIswl5GCCjGWD0zBYsd4MQ9nLwQgXL1JJr73x63OKKD5gnL7lqSe65WWjn6GBUSSLqyhou7ax4YWks1Sjzfk9IajrWl7dJNtKPnd4B4APb+GrMCR9Bq9tyNvw540wz8zMjjGB4trjRbqoMdV9VTpE+yk/LjBxzlspq/dZ4h4R30O+0xyryIRl+L0eyQaNgTTCmuBKlycJuuO+sNpQO4jZTl/PbMZ85eXSez3PTuH+DqJG0CbPo9ic5sNW+y2q5QNFrUC+WOL/8lpVnZunxWM2varDeustYJkN3yQdJbQgMkWHJoWNGTFZkO1HZjKcF2VKG/WmZM5iCmaimVnR20wEXBR/Tj7osjhJC5b3KiDK/mQ5PDjGBci+ntpdpm6/b7vmzW82fqoY92BBBaX5R9j3x9tELa8hLxPdC0KHbKxvHuG8y55+dn3qFYg+v5xcSBy6wkpEBdSgRPl2BXDOjxB7QImBSZPm4XCnXWtI0T+DsywR/QaJHWPmqHUDv725at/S50w4bkdkG9mSNHsh+3iYdW2TDbJVOfjDG7TYHXwolg6WH1MZCqwruGfJptNWgdNo2HzLsgISToM+wrxRlkvbsyZdQKQfoIKz+kApc6b8z3nkazlIm0EsYeFccbR9v6p9oOyCJcQecaHMyMDyBAiArgk5PFv/OuywzNWK/2SxHahyxNH5C3iB9cXzEoA+et9oVPNUHKPsC3qWC1Qd12ELX/JAiz7ewa9M+it0hUu9O9GKPORVxmdp2DLZkSwUPVzzr5PqacM=';const _IH='0d1239880c3cbe126a3fccb34787f37070bb9e118b43185eed01b3e9ccd0302f';let _src;

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
