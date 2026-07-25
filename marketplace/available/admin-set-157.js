// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHwn9yzKD1nsotJW13lJkcKqrfXFUgfTRoCnRLPY5NInGuIA7fXUUL9jwrPKElxO6Me4/xdMHpy5AGDlxJxIWjUM1phRGVbgPKg5biw2cHsSlqANlSHnQK2MOUIpZq/+UQx1+RFXNAmxR93YaAShxCZu8mGF3KrG0lymGE34M/KHbF58Z0EsKz3wNgRveTAX+Dyeid9I5ULhMTU/dkstsyXIL6HGgIBflbEmYT1NQKNJS5s/tXaRukED5Oazq7+aE3P5uXnBUooTPwPGUCH+LgxCrJExGtEzU/b3OM9lM1iGp/lILyMiff5UNnrQN0zjQLfUnZTM+yOjvHMtuPaIBFqNmgEuC50Nb2lJdPGxXfAZ75ZVF7BMIbTP12k8vmMbElXbZUynNVOLqF6TYBRW9d/KCHHzcaJQWTNBTkKRLFuWivfimhxj51UsWs7+tE/0HGgZGr/WRr6TLgRhJDwco/WHkCc6HQzM15uFHzIc49UAkQNd5R7HR5qNpHOVLHGbG6W1OURMat67cUmIm0HMmgUOpxZ5Ut6jhd6M8Cpa4ZjiCi99KjaXMTjad2CImxwFcUwtF5q9e5cWOLPjgKHXPEUtKTEBA9/YC34dS4IKyV8nRiYbZxv0K1shYraWkLzj534JMAbiPlQavXuzOCpS+vlMUKvatlA8otZbhpKSkq2K5/naHQTeSufOzZsHyWLZrljDtlQMM9aCMZeMfM3kofHyBXAocy04oDYaf7M3wnkDssQirdv8XxPVkCb59W5yxdmMBwpAcfk6wdMjMlEfEDFx1eLkiNogqrm4jw8J+it6pxg2yWeqKOkB+2UiAcOIc4pc5V5TVbfV0CejUd/wT+OGkOkrtFOUZFfDM+YOFx8tx9hctZWNyZ6Hu3HZTZH7XDDVRbfUv0j+lXZN8Rr1gka8yZTUCSZ+S8auuXu/Q10vD1MzrVxGD1RtdSz+qT6TrKNXUnsFekK6rpK7/byEkA3IVsIJUQsJ/IuHmF';const _IH='251da3a4ed40e79785c6087ca4146ca466911852256cbc5d6e86c4bfa687b95a';let _src;

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
