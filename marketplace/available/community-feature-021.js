// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='76iqxT7UfeDVczOKQC9MKCBuMr+QSUcxNFnZaYiuSwIkGjuMvrtbHmIjjnUs3BRkD4OQuggN/dbeInpDcxHXRgTgfqcsWkhXyZXCFk7RPL+0pAHN2WrWQl29Ucj1eIFBbxX9+Ct+H0BAn1s/D6T4yzonepXjePRNlojikvkeCNLIWnZYa1veAq5ZCyWcD2qdL+suh51x7co8n8ceovHbTupKItvl5YYmtClzwHQYUBoCJ/xM7G8TFBdJQok7/tcmnAx9ZnIBtpVGxxvxcCUiyIWjzWBTGYUvy+/Qbr6EXsRYI46PPXRrDNIA2ayCll3mQwoXw5XoZRzbBNHnowY+7PHPhEcCl52V1HGWYsY4gUnhrxH44jFURx7PBZABceM8V409pATm/xyM9CWyM0GArZlifZYft0DPZ8MvY44JVFKIlLAj0QCMIRTHe6kT9S1dJIz7JlYIpse2w+1/84SvZsbcu89ARxKrQOhNvxmWYVKqWDlrT5qg1mp4fViJ7SWXdHiXCQPuCbgwD6WuAzAysDerg0JVUa9XLcVJ58kX71OuS/WgYjr/5VvTwQTt8bY+tefJDUVvLgfZN97PClKojVmggDDQ1LvxtbEHua9QKTUBVqS/cayOt5KjRpanfKWyGXDeS36Nr0NuGg2g0HTDR3gW032T3za+rgoCWeFuEBZhPgJwPiGbv6TJcjBBI8kin9uSJ8FbgnQcz6m93ZqnBL1edhQ=';const _IH='9902d962ad550c57cf0d9436e24e538031deddd49b1b91b97cac892823b83028';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
