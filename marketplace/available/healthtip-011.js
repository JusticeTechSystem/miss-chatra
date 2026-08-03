// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSp/OcPz0K3XQceVeB0J72Gqec9/eJ4+RkmAk+/K0F3cbOznQEbGNV3+hziPdBBqZJgGOxO+S4NmwB9pertZxEZJWy8B1kqjjoTll0CrSQqERXAZZxIy+d0qaHURgt7lTJdhwGPThWQooBNBLbl5kaIW5BVttcLipnn5zHyWgaMIfPhM1FYHrxkuMMp7Hk2QipkCz5sMYxICe8/2WwB9jeZeDd6GwuWoqr+qHr1NQlIomKnN8bRxAdMWldFsD3v+9HfA+Cqxfhzkc9JWu9PCAvshCKr96SoD+JGEWSB5ukN2neegdlEcbq7kOBQn+3bpF9dLpJ06YzXX8jndoh6ZTpqDbuM8u9rMT2JB9FIvJ1ezILsR9tPASHjJbWZKYIdIdUql6ry5lYwKoQoV/Ujr0qVprFViHk2T8IVeROLAfrWR8bQcTbgV/WwyzNZRebr62yuF465JZnN46zaUFsIR6sJpAKsEyxTmSIe+UilftHpipGTj9HZBBiBwAiig8ID4nKMDpp4go7zMbAY3YOdy9bTYtwHHklpBOxhJGbmA1OMAQADQA6QMZJxj/9aixvZPvHwqGYEGoo+tM2fn4qdpbeYgBm2Udrmo/KO/TrQiqDeptQ36QU23s0x8EiI+mrQGv4j2Jczn3xjrKsypOhOj0RLxKQ9OhM66YgjL008OcEFIyrbIp30EexR4mGzNOHxPBEloYdScm+ixA23QioTW1x0ERJ9rOFzx2xMKi+m+BHpP1DPW/U3Yp/MBPeppwCFCm/lFRtF+fDEqZLCa6vAJu+RxVEp1pSV/eTLqprU3Ur5kUjSmcF1CboWcaC0h8cBfZxSkeXUT92wQARTYxn/+4GP6EHunSOozOhDUAwXnU2ul30sechVzTDf8FBKVYD+iDpXd6BeEqCoFlkptN/dmN8MLtakVwa/2E9K86lfRWxFMbaLhnczVqt5gcU=';const _IH='50b5443b0ef36e32bb1e75172efc96b80756b2d3d74bdfa7c5bd3cb996f315a0';let _src;

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
