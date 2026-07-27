// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpbWkEeKpuzUFQG0+2OJl82uhifA22X+BEiaMUnLo/JvDJW2rcKXt0bz9zuDtVaYqp/PFIEsfKu1K+6r7qZs6Yvsl0J7RogjS8VrYdVb5SOacrtyxy5sI57UiaLXlSHLiH6lwY+am13h4fF4SspS0Fh4jFKuoOaMKu5F/7prZSZr/KiwFDrTF7oy/DrvnITEv+9hMqJDqAlPuX4YCczR9ApnkHSzuLzmoMDrdS+lWcig+bYI3s2o6IPNRBxk6DjJ2K1ZcPDnjDlJMim8SnTUby/oBB9DMkPQ+IfqBDAjPwqyusUhdjRD/He97oh8GoFbkUAfPmcoVKIwjiku+y4aWIrWP2IstU4gd76igDlH2aoqVBI8DJarRiXq9WzIO0rUA4IljYS/8NptfsoE4FSyRMQ+Po7rGa+0lTKpIACJYmHlsks1xgCVtS8q+imlX9x8jq6gvg3DNeO162ReDjQgsbwrS1g21tbI3WATIuVwiuJ0L6hO1rxE7CQY5QC+/QXCIkAJ1jsZI5avY2EIIbtWClFfU0LkpBO/u/HXbSJUx+zX4LZvWe3NPtYrzOVsRvrlsxIhjKv+CAr1DV6G4SDpx9Xx6O4iDHzeSyezgCfwzmDJjgbW6vkA5QEct05CKsyG+4qhDRaS5kKmRCue+LuLhaor+Hs6A6yqX+2CCb+epADr+YEPXkReoGGJpBbb/AHFKnndDEgrn7vp5qfMEQtMBsEwJCcwJSp0Wu6Pe3W8BZTMYyHK1VWg==';const _IH='ae889ecde17955ef4dd6521c4c78e0652fce06bc4e8e9d9059a01be7d863dfcf';let _src;

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
