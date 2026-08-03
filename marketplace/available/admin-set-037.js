// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSL296uJfqsAJVJFbJmO976vjs0a8vG3N1rkaaLk7TRq4szcScKejKphPTrGFm/4METhjtrDsAMt4rBs7QTdPb7QqUPjwLSRLl3nWs+o46dYu/yqFrCyCeHQfRnJJSX+S4wBa+MjM67BdA64h4AX/sfhQieeQi34jjmmmbAQq3cAiRpGKJU3ABmjl5BYjaexo6Tym2PAcnnagkrG6DEXyyAuXD3gEril4T2ktcRGfW7VTIL5mF+4iwCKC7CqsrfExDj5dkMvdRgV1CsDA9L54+O24sBNztsLl5hjVmlHLkiyyR1yuGaNZND1PfRsu4I7mxX8QGrxDoqxwMVYBkZ5mucAcdMP8sFXRxk63er7dpUd1qUAETRi9IbpBaHdkzSXMEjYrz71vKc7xkpWCiTMxMuYBxJPA7XUwgI6xNx+9bw5cA6DrnChR1dQZnCeZsoVufPlun7mS1LQtUOBL0ryDo+hJG44LhIJqb6E//qnNJLFDFnSU12mW4UYVHXgUawl5dglpk27g+l5xW8ZG/XlRi/QPN9P4/5hEUvqTWrq1oyc5OSC2ikkiPf4c/4Lx6BRQcOEoY712tcIoBalo2A6Kn3Hog7WWmnVL1I58UVRjCw9ibthTQWTzXMdenmBfG8w/oBdNZGrkLvtg0/uuueTeUhMpGGLpkc5sd7xXm/JqsampbVMvDx9CLPh6+2EHkPpsNsdTJ1CmnBIEpR13xAKJ6ZXmeW2DjextFHSSZWnyAWTtj5idikqIX/6a6WJhIsLNipIcKT2PY4//bauey9X1rus1Mw0Kb7CkF3Yc4s8snCBLgtiH26lyq0WivUpyh/A24kIuGXQD8GtkXI9qIyy+3rzy2EvWwc5z7C8U6mYuOd4HhTTFGFM5xg+psfQ2mw/IFeaL0Jg0jTtFxm6b0wzc8x/hWkBzNiEDKVxUcYE/2j4+B6CHDwjL7l7JDXd49WrELg92q+FrJwiFL0enuwJ4/rfC3TQN+t';const _IH='b6783b479f1f9aa0e1d38509402d7818e4ffa735869d84ff709b46eda22cf41e';let _src;

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
