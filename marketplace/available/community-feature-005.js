// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMoAWRd8/EaODU1qxIeinIlijW4LBYV1jrHfAb5Iv6y/kloYyz/B0wPFhgjMd6r+PN5y1RaBo2oC7wlnMfDXg/WsKpcbNAmPZbSjLAXHVxU+X/Y2DXe7YO/X2/zZvbGnfOZBn9KOqMNBZyHJmMe6JJSZ1pfMZheBpyO5mHVIumDhee9cAs1r72CcTXT1hcDDQgenUN5I3BeUSs2WfOTX+Xfz7+RXoRIGc8OPjiBsrI7t9x4U2Z4sgutbLNUaikiYfrXQIiUeBX+J52rA6U3WBUWJdk3uu2nSbOFC3AWpGd2h5y5dC/MHVkISBjnxDz49qPLJIT3SUa+bWr2EeQd+PxmgezTLRzRiEhTwPVJClyvMsif5VE2L692Vd/PdRViHCowxWTiI691KT69Ur92XEEY3HRvhTqsEpHGeDY+gdzdoxy5cxsUvZqn/7Gzj2XjV+ysj/s1YqVwbb0jcvS6gIUtrOzjcLCPUZWV5Ph9U7QPQJHdCQzSQ3DBGOAk4eQL7JHy58KSLXCzNpkvhJHu6XBXgq7P/XgeWvpoWXHpC2hUhBHnVuAYxIKRFevM+Ex+A2QLsxKgjCYUPjq9aKxwgcIrIdxalGzhr+bDhPtFnetapSOLqaTwcLGMjlDs+kR2wjFGBbKQtVw/3Hrk7uCGci16pjjN/OMbVNQnRUiO+jPvYhokchhJ4uFYip8HNJ13R/KN8z+nZGKUYE73pH8NdNDcF5xo5yoSnPWkUi+fn5Dm1pt';const _IH='e4144c74bad6e89c84790618fa4efd2490a8e4e47ff0d6f5aac998b060ba6afc';let _src;

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
