// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bESKCdUt5Oyb4X95XofvVbG4LknL9A9pOolQq3h/VXdNcTdQO3aPGw57Ar9U6Yf8qCm9tOAMoV8+e3TIiGq43XPwR6JTPEeWeiNX5RSmeDe9azHu3JHMY+tQm4Dwh07Hb+cj1J+fyOeOsbZc/gIBX2RCKdXsLD/tpKkVQpdMl6XvjD4cYSHm59nD7I+S4SA4Fw4ANmbWJefLlwMCbizCbmONIHKMVFNBgh4fa5Z+fGqLGERWAxUnkS3iIU0NkRaEuzExuIrBjtx2KmiocxukuDBO46b9uKA+qPV2MkvgWK6gi6femFp+EiEeBbPT4I6mQPuWCwKb6vbBt+pmWvI6eASWk382XRphORMaCXwOsxplL9e29J4nmcBSH0i49W0rA4npsEBVV4pKowvwaGPCR+t03bC/E1h/sOFDMmM1PsWGkpk3sDQ2JAJHPxSu92ors0SynzZvxDmw3yopQUHXrMO72SQ7jhDzg1re/Or2JDnujRRtGiHSj/8lM2jJHpR1SY8Jyk8VMEUCF0rgfIF5xgJEMdNWM9/ryjLpGQ0EVr1yqfuip2HGA+43O5Rb6F6db39B+r31n2DcrKHfbTIztbdJd02kX6xga/5JRmQTAbuYc7k14nSj5djErkLXfZjeBlSlL+jPrj85NA1cBDo03/GN9dbMBz2UtA4FG4y2P+581FiPx3znqPrmzjIh+3m3x4EIFxn5y0SZdTwqef0W7KyxgTCZYsCs+OHFjmyCt99GCh2huQswtF8n+2Ixr6BhV6uGK6N+q+DYCZP1vqSu78Zq3aSMIeLga8JJV26jhNejRfvEStE0Px0isC40jOKaX2HwbGE2XD6TcnwEcdyDlymNwAsSCjc7NCfJFTPZH0HlYEGDLN3gZ1TpwfPEKZE1UyPKlxlJz4Astutut1wP8uJ7AXXa8E0i8Y41o4rkqBSVODYID1HW3Lc6oul5thka0kg/1B+ZRYSoYbY7kVCXXJtuZgS2quMkAo826J6FyBZGe7fznbOF+k5Br+XhTpoZaiGMwPlqoO8AEv9QnvhL7Q4hFq1cqaeBVAOc9AxE9cLQM5f3WG2WbqRRZHAbcareR70LDTex9kquTpTIDlTEaTKJvGbVzHATaOrXg/QJMNXQexBqovtlA0V8kc++XC4t/buHWBnh9ShAYpdRaJ05N5MFb/gyEj/ApKaJltoo8Pm7f2sRGim6txYloSMImoOuCs/5si//MlWD3BDALwvi/n2eASTZeSuwliRMwFlletoSMONa8r/1GuJ+GCkLkytFFgobsnppQrXSQpDHeB2TaHHBenlKYoNK2lVK7eRchWuPLJ4q1++JZujWgiWaL5paB03wnDniW1jPUYHbBKRlNR47agD1PEaxVCiMl8pLfck8szfqi++Yig==';const _IH='8cc943ed3c796ed39a37a488d1ec1796ac626d22607de0e001cd7d5fa9d32d28';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
