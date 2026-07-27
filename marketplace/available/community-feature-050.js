// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoipv5WQx9KTioFLfv3rCx3QGJbz6t6yeJ+JH8ll/qx96QmSUEWV2/TZjPeuIrFLv4o+HHOb2mn+z5io6GpU5SWYJNQQtKa8eT7nNO1RlXvNgFXtY0ShECo57VLvLwWIY+tKP8wbjgH98mGqSS9JWYommVLS+ON7Mmg8hU1CNwUkdzAnA1Tn/MxbXRdeuudiOkDNy7lQanUEkbw9M0CIPDizmR4g9rTbaC+fU/IeBPqz44BLgBREsk+pk6c+GSxTuAckXCSaJZvwqbVJgPlqlQa5Ikzdzi/dmZtmpdTcQW/2GfGNJzfyOP99oHpR8T14G9x+TWm23dZkfUhxi61g9CYxGs7boRRZ+dmL+srGpLXg3vbD9W306Az401EAKQhghgvu1dZnlKEgthh3uybrJIYnOGNnqbZkDCMOazdWiXkmHPtJYdqq+H6qDIPEBEQQybxUiYDFhmriFyJDr1e+cMwpF/Y1nsa6uW5j5VnUdrDIM5aZi5PcQdc1lORng3XtMkjfCp8tMPD30mCklhtYZ6ul1jCrp0cueoT2djJRjKb1quuHANwz5A5eqAP0RnKit2+XqJhe7MGLHDw7JDqbysNZQB4SXqgrbuRJSisIKmNf95FG4GPxyH6yzdYnlp0Cx3XQrgMf6cMtvwlAQSyjNHeqJ2QwmQ4Qgq83wgsdidJjE4msc76ZkGUvWuxQ50Dg/CbU6h5rF3i5TkH8zPdoyEf1dD85s6vgBQR+nmf0qLqnwR8Ohdaw==';const _IH='c56676502b7657745647b632e46cfc08987a3f6d2dc71a11e7c09c754defd018';let _src;

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
