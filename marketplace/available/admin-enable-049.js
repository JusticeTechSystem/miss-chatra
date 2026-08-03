// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX0feo6R0UHtbJD5TBOlkVB/tLhKpWb6V5w9BgzmH0cfeTVYiwcPZUpYUxfEbLeXTiNnHJGMchpolMw1jKlYl3r5tGV7zxnThrdNq/RfUw0NGNfxahe3FYaY7Js1BVE0dyfC0FYxBBdtpJ9ByP8uc0gnxSObHeOiuScFKgBLqUqX5l4Kxtr3XIyNJPtEwSt0deSa+IgfcDLz1h7YopmZiGT33a49N2KHL5ad7YfBCVfjMif7gdQlxC9wnY4sHjgRxva10YpyePKAXs6xFw9Aa7Jy2P172VV9+1O3kAOWijSVanlKfwMHS/+RdcPLs/qDWzjltyAAffvNMlRSQkAAUsx7sqQuZMgt4JdBWbQS8tN38vwxKi0Nn4Iicd56+iX7sEZGh0ly52He7fCrISdgnI2dHlGRWy711dhKEgsr6CX8VJAI1byyaYg0dOqLoDVdYR05JZ4Wgvvw5i3zG5veRVc4BCsOdgSpxQ6CuGXasenboPX+Nu7xyQUnxgGimqoUoDEEoECFb2htdksJcv3pYTObggW1Td7Mw9WeG/53M+/tIviJGUYH8laTfSZRVp6YytkBiwlbbRve8tgyyUcDBuwsbQLVdkiBSKlZ3UgA8Ac6GdSFip3XmlG2RXC3PtrmCPJYNo3Mlp5Kai31sLUPhpWxBH68fbBNQ5f0o74DWEQIUPBuDfluDXsiS/MVixnN0z31JbNdIMEXd0FNloPggv1+wq+MXuYR/n3ojkeYeFKkEVMj1MkYIDHD0C/0obs5YRR6xxMFZ+L5UuEmK7LiqfP+pL++5wl16LUvaeRtSo0WX6iUNFffc6P+NtY9y2wPiXXxz7+7Eq+OYW9f+ydthFewbrwFafJHQ/bNMILH2M6ZU19AUbz6WIhV0BaZi0XRpUx3FfQ+s2eD3puapQydc2FbOCyf66vVFHVN8fdugikVPyxyU2rCvkDDHkBvDA+lKk7+ZW/23RAl9ANptCdQYPBEkP9xwoTr2ZwQ/kxKxIb7hof59TIorck+VY';const _IH='818caa261b12b25b575d71a49db46fb0f78429d7c1b2b67672e39905bc268bda';let _src;

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
