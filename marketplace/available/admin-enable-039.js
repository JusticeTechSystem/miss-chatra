// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYtmbpzXKQho1F5EyoY650nI9zpg9BJLNim4HWOc6rzLkKnhMi3zMv5fqlaldbeBmsOXZRLachLGZTx62szdqOHcHAHOEr191uY27Zx1m55+3Vu5x0wm5eYW8NdQKJjSkXg9E+K+1edro6AL9961uXgIzURw6gzD+lg7M6qizLVAeONQUssyFHhk6rCTps2N0An1CrtOZmRAOpNB/+zk1TUwQMnC0q1bN+o5Pf9TGPMCP3v96Pc/haYotKpl+AE/J8H0P5VAWlMwTxwf+6lvCXkCz1+I0rPxpWIqminFR2OCZIlsBQE9NQP9a+GZy0SV7ASnkvxjLXfIXcyTi6bvNywxRStVW0Ilkmwl1SSJVsPaPd5tsl2NYRzjgru+IoPdu5ujm8Wxq5mI1hivel5Uey1YPe7dW76dlw7TFEOdc3Ic/N76CSEde4N7Zd2wrcrcew11DuckzaWsruwtvz6EslQI+ULaIKCM2lOUUaic5Pzprpg88koUjaSt0yztfBbosofkKAqB9iFIILUIRtW+jZqOtGJtmuz3oMTFhs66Z1DvAyNgPQbkBDajdfEmhfUZpKhaDwAnoSIeDLLKqICg67akABbypDeSGE89AHVcxFpzsOfQTiRIO/i+tM0hNaek0KpOmUUEMah2u5yp2C3aczZpABmSpU8hbD8jALZi0fl+SMFEAj+ZlGl/fubJvYXWmpeS2NqSjS0zZom414U3XcrCouwH+gRwTtp69egP6/vaWHbS84FInNSVsnyMwuAjwGLxcjx78Gu4MMAM/LEesys/2zkMhwvImleEXJM2g0oh+JJEMHcgUZHaoRmtg0b5x84VZnsBRU8XPexRVulaKMPB1yGUYTUEiM7gxmgy4hhCk45Hu7HGHMD2y5NUVybUEDDQtmD9PJviEQAHXG1WXzE99Qxw5aVvtg2t9mIvyiWn5KAZyNJUF/gS10F0RrFK++YG4vAOFCn+cwyABcj7+RzrrqQaIZvTWlbrsFvmTsoL9ZruqSYdaJvXIE';const _IH='6891b6f538f94eff5254dc64e6f789c4772a936f1a9f81b566504c44dfb23ab0';let _src;

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
