// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0tt5TMrBMvD+OY/iGUDJtHVi0pd19pD/Um7cndGQyOVi47KE6a/L0WTq4mUrfqeDYUwh2L5EYie+DIwxIUZykUTsAmiasPlFYGiH1+iP7IoLJYjUMlEAHTPr4s4WLMxafsXrf6xnZemjyLPICWxNxKBcmGiEJq9JeeB4xk8b1GITKMdEdAcYfwpx3H5ONP6u3wK7hGFFGoG0G4608guTt7Ht6s1sV5wX4zFuCYhe77+gya7CzSuk0OjyaWKQQJV8vowGLZNBZRoyNd1wh2ma9TwV7MjKGpume4hPINeIfO9SNo8oEKFzzsIKyzs+jM5DetuQDrQcS68LNf07T+QKtn0seZceQKCEh8WxBhfcLf5DiHhyZxy6F6dd7xQFs/IKV2dLDzqLkWlxyRy078WrwiDz5V3+/ihizRMPYfW3JnMpr8KvJIeQMqUNCbxJfc9jUBdQ/sT95LRlfC8OiGvPM7m3bL9wtsUXlA1ExvRc1qwQuJQNzxyLLxEFkp5E0ObDKjgpBG4Tup5t3IuDhLzfcKGZkTpbtMvQtgUOllDykLEd2sX0vydGuNATxLoBIRW57BKMJIJmOOXW+DxL+tQB07tMQg8KIUmKlqZmS0nIba5XfliFTKZGnCOuXUCEyKKFgqKV2FsicXAjaK+R3jSw8RpO6hqIkja8e+fSLten2W8TQ3VPnHsRB/eHSsAEBN4d1GUy0WhxAmuW0qvEgbG23QSQBEq0poFXxACZt4tR0MZ+8Q==';const _IH='0c06a5209a5dd9a943de1dd86150ec3cdeca2aa250712979222209b07b29ad1a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
