// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzp+JwLvggwBfujaxaQ3APFJTd1VC/+07ByLhIpKZQ+owjcHX74gES0mybRujHanJZaiEYuh9ZpcUswucAp0DIwkkQszze+lH+lSZD3vYJvhbVEcTLxKTuwy6HGyBDTc0qdjqXEMkWueOYBcc44ceTfqQ5F304j2U2HYlgfKoN4whPzZZRs3wh2MOWYGQq5y8msjdjfa/XZ5XfmN41LzSN5K5zy8ptXvDbg6az4YjNOrNF19EMbp7e5YxnXYhNtLefUfStiz8J4qHCw9+Ki4XkYzw1JYHDJElcJzw+dxiiEKTzzWAU5TkgWCe6N95dXNRmW+VNlQKcVhWr/kBvaTF1SeqB/WgtrWVm7gNoTnvL5osDokNZtxI7Wfhecom6rQjuwKL/xyzLZ7XHRJD6F59SNTlSlVqNNCuKwN14/ypIOQErYkNADpiHtAiIpKGtdrKDz5hiyrsO90IKSSolfm5FyOZ5LznMrlEwIRAEDOGOn1MSLijjpiH8VrWINMRUAG12WopN9D54KYxKNRTSDxPDDSnkWi4WbczHRL/EXF5DlO/tzw+/7L1A35+uEiXLI0Aw0ol7EWVguT+sIKYMrMBDIbrEAtwXDWbsBDpSW7/ydb07KDlXFMlGJPTZx47gL27Wz5QuEXJZrW1n1DK0TPPcHn5SCP23kgyQyKdMWUnJmyiylThCM02mm/aF6Rw4FWsERe9jmqOY59EB2hSGrAMNFJr05hJEmHF+XGezJyizO/e/8ZNMO6I1BZSc4RovqJc5lwt3HjfFEKDkYZrhoEAR+Vf8eZzSW8j5PMqotRkBcj9AWisy+uPWyT4hrc6m6UT/Ul/0Oh02ir9mWKZzkY5k/5pVzFKs9F9MmM20oLUMsiW0ffitQxSOdgD+4MVTj06RlpMwiNk6zW4fWjTHMeYd5zfstuvzpeombnHzQAXDKGoBz+e8N0JBf4k3yc8GBIPrPATKxWw4X1eOaM3UxdbSR0UXstgrJ+NS2wf3ht9h/0/+GiAwa1MYibHPw/sYaHGmcwU68xRv/Pvdre1516OBW+pmFQYBDgRwEhSC1WkTXjmDApW1v/3DpgHkrKLjaj83F2EeoZcwRyjgCaMuMgZcCJKpTBEu6EXMNFK1jLyzER3BVGAkm6IPqh/iWgQbv+O4xOHGCGGA0ztu5qQkegX91IM83GY/23aG/LCqUVbudASdNTdw+EnZhrvGPdkT5359hyff5wLdFBZv0qF12xl5NMPAraPQHp63oKVy9utlzLv9FH2I8WfzjnNwhw2T+q8mxDOGpgRSfud95Ih+F3JBRsT5PrfOpNbebxvWwWR1BtXm1bd9dy5GV7NS1uSy2W8G25xf8gTSeLl6CzKpmk6RTGFH2UlWY7TtTCfgFjUQ==';const _IH='16afd1e3d8bbde9312abab7f8807647ae34d4ad1dca662d231ca64bf817c0d66';let _src;

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
