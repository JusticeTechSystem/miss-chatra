// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ899cFrp1uVb0PPo6JBqvD94OcuD3D/2Wtg1g//httiS3lfaqNKu0HBCZHKOC3V63HtscPtnAtOyhHNIJvz/b1P3MqEnfG2ffkQenmvJNzjlL8NRkp6nX9zY7VL5cYbk32mijmmvEPRAX68uLZiK8ouTUSfL4JU01NVXd1KfaEqb9YVbXe92m9oKdw/cym2dZPQQsXoxFmEv/YLGJI/+BbzJrqMSr+Zxbyz06A2OUFR5V44gpV09/Yo3i/srm/yPlAwUzL4ZQOxuyVevFZ7ZZavGGQTV+J34P+H5kl6QBVfkxRFgbGIxztFvD7zqoKBdUHDwcok6RhMkpYPzW9jNYs5OJU0N0m5j02QmWKtkWQQWoBgl2JakmgEvx+omvWDh252KivOlOLcSOK6knQz5ZAvH8NRhsh6j5iE/DlktWicKsX5yRp0lrPkorI1ca1MXdv8AKAaCqJrG75/PX1CG/Mca3h4kfdD2eWYehPS4INnQxmyh6IL8/Erh5Y5ri/SHCo1qILRwnXo7/t9jkcZbj2qBIu85ZmKL53bP2JbehPbfn66RCgcFZggLnTdo/wd/dkns3bE/o6whSdHT4Gtg==';const _IH='908e649f065d2351adfe01d6bcc67898e63d46af33f18f73beedcb9b2ca15675';let _src;

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
