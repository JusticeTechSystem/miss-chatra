// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lmdkBL2rX26XocFR6nFASKLenS/6Z9OVcLkiaIUfNr6/UTP5Eo0BSLty2Fqcq9yTXWP01Ow9J1mbywAcQbKH2kRncsWPnke/mRg72DdlXEej7j9dbVGXtkXMrOj8ktre/JOEybwwa+tPmD0O15vg2tSiSkOKXv3CnJwsrdAkevxut3HxcHt3XEtm3+pUQ6+m8RbOC4QQa4dwCoNfs6opb9tp4t4/coyNBnEYpqo/JCXXWsjTdDyPCZ0L/D0tmBs85ANFcXwtOCB6qQaBQ8g1nszbO+tTr6nhZWsO3dty+HHJTdATqWZ4lNhGrbz/IJL4EdwA6OVhISZkRFO5/yaQ9Icylm2x2JxmP/fhLqwReZIbVuGXh/KW5y41nRdKCyCWTs5BywYiEsENDL4GOGCzq7VEuRoc8Apkc41xGDXtoJ+a+LMeMDOLYjaz1oy2W9I92TYZAY47e4zj4I76ijKMGJ4Y34yb7KbGcmV3fPHv+XUMYzymqqQajtOouMTMVh1tBrEmz2bgXlr8fs/VWDmxTqQSo7C2Sn3abzMALnxbUa0UprvmWjh2neadyRhnv8thBZuDUxe+afWqQw35UlaksXuDyTKdEqhJT/WKlBWZ82AuAJZqnDNbvVXG9YGuqUacnDNuTyP83L/Hcu5gXNjrAY3Fx7pQnxcAfx7ZCJfzZx0MuIenRdx1zHAJPRRjgAaOCwca29CSTrkfTX4QQwViZq1PhkbX2V9Ck5pu3xYQbkiRMI83+Yoxi5WBICUV7lEfyi6YkFONkBpqsftV0LpBSGTLRydag28oVZkEUpIZ/mvmVWDwqZ2ixW7+zpPJwfT4q9Kp9U8QQs6+x5b75uoOGqWrY1AoXe2fM7jxOGNTlZS/IWR8TYmmp79AByw5gakJVApTx6b6lbIgzx+gHWQ8rNGeOTl9D0knpiaer9LT4WLnH1EEs1nHEWlaZfdzahg+ppwctV9ufX0NWpSSBGIXkn9Mo8jkn56K9uZAwcRJpuZzv/5BTsBuvPA6B3Aal0UaEQ==';const _IH='d3c5c84d5f55bb942c14e350fbb0c173b40c6d322847282f4d881e455c98eee4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
