// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uDkp+KZEv0IqDXWeiGozzMvmFJTyy5OYneVHDYy5tcutv/ixRTFyqmIl0ktwEwgeToDLOaVATo5Bc2OqyA6wIWOzGdqwGNPg7AqM393wCP2iAxTkkXWQ+Dn/IlBIK1Z4HK+cAilo3qKSi3Xdoo112q+7yCMH8RBV168Bg6OADgsN8vtWgeuKKWTxk9FNSx6gReWhqhYnhqSe7yr6RQSdcz5TOBhsBCrLQaTlqNAoNSH+r6hGWZNy9Z03NTh+hbedCru+HnGtCtJx6QrFqgjaEPvMWDLx2lKTyk2GoIEDHCVd/xbQYQat2oN+yi9/JHZ6QgckiLA9kIzwjW8bOOvbKeXUKPSXcK8toF/Y8VW2plUxnmD488WgeQKMc9T+VXArn94qUMuVL/uTuZT4EXm9Qm49DNozf/bFmRgMMRs5ZDwCDhF3g34+1fCID/mCMEl2bcGUxxhntpdGuVUEYJ9i6a03akRpjnphAiqGgIYcUGSEG5CKSuI03ORU/rGYK2MYjSzaAsuN4NrgARL66ik81iefe0snX4koMwpdwPxEYxnDPC6QCRNf+qsh6HRrv2LWbUJFmmL1gdZOdhZrqeBU+8y7kBzY1HDdl8Ych+Am1u6B7ZAgFDjUYSgfoMfzPyuLPAizaY4uJRog1b4MIKVzpLvOcXUT6Sb0V7eDFxt+2COPl0lZDXJiGGes8/Tm8JCx2ObtLoFRr9d1BGfzdEEvIMPgnNMGkfli6GSOV+ioHD+FF8VC+0CJ7skgOswWL+6p9lX6GQbd39u5sAH7jNBs/vptpfY6f8aqtVzBjWdY615MgBlIWg05DFjQUYZBOJO4AZVD+PqrEHulF7VHxzKOgKccdwjnI06nO17sGkvEUodZzrx1ezZaP0Ptugd3yH4jmXR0B7+ow5zPDhS7SONrlFGwYKr1D1PVXDEWGunl1JzrKpFdsSXRwBgV4lmB581MCeoDiypNA0Un2g58szF00gy8c5ScdwX/xZZyAtDZa6kzbK31xFvephm4Cjw7u2J42ncQ7FXW34OLGwl9cmbrwn9MPyz/A4409tpKxGDRQoNLL9T5/8Vil/9CVU17e76gt1QIiVsMFbH38jCkMEXvcNSqdtAlTEG4FmbYB3YbKEwrf6/5kUWv4HNm7moNDlMtFAt2y1/5vJ12erLh2/YQjU3o6INrWNZFVC78TLtoHqyRMxJxuLqXTsdoysEkVLDgwYhhasvT+zSeE4kA9g==';const _IH='865a4131200a6ab6e8c6bc13aab1613eab5d09685b140a3b5b454c8017cf5185';let _src;

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
