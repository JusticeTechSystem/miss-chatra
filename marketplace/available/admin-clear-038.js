// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K/Si+xPbzefOJgLoC8NGZEfQ0oLcz0+uuxnGFGeB9hdzVCjwKMWuBGdmNK6muaP748FF937EtHZlkgGtFHEUBYEBNtasojs0AyISO8HeiQAwz0fJL1ZqxGLLUso/dEQqwPlxFO3Kw+Iw6UeptSWrwc34U6CKLKMT7bkrScNePlar6qyuo0l+u7Ya063zEMI/B8qaDWklKEzOkzC33+2/vX08EMaG5vrWn/7MJmwe1AxCZRoGZQaPxZtIUyt16Y97fQ44iwG/dhIs1OEv4gm+977ikJxaOpRCyP2RzdJm0t7uQoRlTKUqGVXeXyI0BURaTy1Xh1Qe5LrsmaePSipmasRIa0iQXt5HaNYyhEobcAnmqnHNuifcwj6c6qhQrC9TBwmx2qsRqUc5nFFu/O8Z5VKkasjWXNtfCRMYXynd3lRL5SBOlOF71sDwLOZ08+dd/RfRez37r0AaZWFub2gQ8kpyXNmvZRsm+WdaUMdgmiSU/mX8keTm5QPTbXH4+0H/cPvhmqoS+QaoRUfSZfrq5JFSuGNZCve7yq2yGpCqNQlGpxP08wQbb57guhExfcmFQqojC4qs//H9hbu0JEUxC3WWVjvNIGKF3jMyehgI5veSYIHa7vGEyvi4CTuhdmvPDwZ4KcIuavW2rlYK7lje/cwS+IdAts4OZ9VZ98M0w10Ps4WlmAhMprL3CekviBc9pVL3No1YNq29G3yXoNnkFAl0Q5SSh09FZcSiGWWVUONsgUvA/T51nlSSf7Qanwamttwd3AKUUrmutKiSwzKUF4rEqfrtiiogiJfhXaaCr3zm24tClWq/z284V20J0sKJZhyAuPY8DHgfFJ3rfBwThDxOaviu0pANETvS7WZ+XCra8vW1eNfbG3xNKYdfIUUpvjgp/c+RWDpJRPz9Z1ehFnzP7povq7jThYlv+N1nCXr+r4G0M/bDHIVKAlAAs8JdvZ0p7hcWSlh4GxJs+9oyEZ7FDB7mKWUL6GzJCN85DiboQw0Vy20=';const _IH='9cfad1a2b2f37882cdcbd8d0a1f309ec62a51b0bba8caa81a73a13d4880e5235';let _src;

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
