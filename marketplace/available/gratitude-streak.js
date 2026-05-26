// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c57oknqEIb8v8hXgjmHJ85+VPlCNMBBdZhkf0Nfz0XTw3sn/9Wo7uOAcuEtqTi16QYlC9IyWKLEqwFFm3ByFoC8xhx9hGgqsadhl2BUWxHQ6Es0Bx5BBEu22GE0N6u3YIDXv2eJTYR+FVOFqW3+AvIhluw0cUfibCywe0nCwy2sW2hcsbH/yUgfiOB/mKXxHYWv8KiZkJKqBc8nmSOhqFhyr3+DHw6YPNnPPIMr92NIqOw+j6/LIVPB3Dy+3Z6e4U92vOXjLDpYEA/7G318gCmicBJ4uGv1rahsYySFPJVXhBswDSi5sYLRPMUQQsNjN55ZtUN4xEDFXxRe7FDlEH0L736bwI4eLwYVXuhQTSJZoRiZ+J+tHj0VHnYSJ8NAPb0qcGHJ1oMAk7W3LRCJO9av4CTgsO+8F646fC/tbuKT9u1sxvOmqk63FCzCtUqw4IXCvpx0y0ITbMBg2R7Uz0wFRpAOU3yvi8KqKsEWAXV0ZS/8b/mDg';const _IH='8fe97c9c32d4ba5b667500cea7e289c6ba3662628b97699935216efbebf77b1a';let _src;

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
