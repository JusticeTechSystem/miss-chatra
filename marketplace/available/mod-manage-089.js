// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1EtxwKFNhVILiPbXlOsc/2YnIOdY9P7j2pX42PelpxaMFf6yhKzvZ2dSG9Y4Ky6npI0KKq9wYG/RLEgI2eQ7dO5rzdlzD4M3ougF/8S4IiBKzuqPhiz/vNLCzPFJI37FY1atz8iXfGygG1KX5uKxYJEE1k21jx0zK9QGVcv3YcICcpTm2W5X+hya8wi5B02z4LVRnA2YnC0aPAPfOVrIOdfFhDh2C8ebUr4kYwtEzkj+RjML3K/WyS9KmOdTPEWYWyE3SgziiJbuAPrKctoAR7W0nWOCuhLwfZbhhHw9ZnpG8VcvslqMneAIJ0Q118TQHucwcS+RRt/vCX9iIBG2fmSebEruRggpTJZ13XUge1t2MR/7/HKtjSGPTiqBKSmxr8YBKlhr2Y6jlF6jYVeooW7NDrLRKJRWq8i6GHLWQTG6BJI3QYJI5jdC2cC6/UIQ0OYfh4A3xrL4KBlWxaAjL4aIGPo7Fo+FlyWxAajyRPBTZxLHcwkqvjcNCbwaUHDDySl9rJzlKFu9mEbTcayq8pNCCWMaiLCoa/7/lzwhcNl4VbSu38rBujYR+CPwaPJDX5VB6eNKTHRFNdtCXf0ACKRNxdYdBe3aOAlWRwyZkjHXE8DtX5t9J8fFijt34SW82aGZPdF+CQN0UKvWkgWrNPcCQmz43hFsX832mf3MBnQUi3MIilAT6aEcMQ+zesvuZnXol3sQm4NIasdP5fCMNkoXi7pBK3Tz95YkRlyzwdZu7oWI+mMp8QQMBTMjT/e9DX2TmNyP6W4lUjBo5RJtIaWPwvh0JuF8cSN7656xhwCuDtbTusJY6TDuemc0wPT+pmqPZMjTEELETp8ZUl/Yv2MPuaAmQUr1CzgyRe+TgROCK2vvlp7zWmPr3LmABHQXAu5kSk8bRG7HU3kmreOUvDTD5CP9Wjgol9ptdevMBCzmIRrgKf6Kb0Rc/fJo99Bh0Magyzs0lOffbMd8wi2G/G06hTbpog5sT8KDZl3yK+lO4WdsXlLYxNf8JGDezL/bsGatsMTtbYGMSy8pZD8s0YRVWaBKChTgXoTOMSQXynoMsUM7YEGBIAAwOVnLzOZjUtx4dx+EK1zKfZJkLai2yl0zFtKRY3ftXcFj1A7aeGvT4OGIuXeCFccyDoU4q/B+t9bwH7vg/Q3S4TZbbn97YtrRea2tahEYmAjb/v9KiFMovT+YY7EWchW03rHTwr3l3jvLVt2xxKMxyDZLKfZ2+UWhPdNTgwuejtJCnYuGryGEtC28pwKMClWv/M8bVT4g+n3Z2TJfEHmMgvEwbae3FJIhruiKWF6LVsqgo8yFFu4UnyO+5zzaKuaEBwQnnCBgCQtZB5NGvfl0xpNcNSFll5mzu/AZIXiKSFsA7luz+9tiXNc';const _IH='96f5a8ee8c268d8c777318d0baad23027848265baebb75b4d1a4e404dbc1c51a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
