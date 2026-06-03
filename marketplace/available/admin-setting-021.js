// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXuSn6tvjwwqMS4M4bqU6hgmmpdw80x/Y3y7H5Y6ZpBDrJg5dhnjcxdiUQVckLbRMJQ17z048TzxEPHSkim9pDhQQngsxWB1vV18SN5ocjTR2nTbktNyhFHO7555zPhBA5kJt6nBRXFznd7RVcgloKiIU3yvK2f/GjcxgETsFUDhjBFdp/6B4NLZQlU2Kus3dckNFsEK5PMLg6oJH5H04SMpMUsv7TwjVhE/LacsG1z5k+zNOk+x6JR/iTpD/FiLxzX7D+R0fWyTfqdMRz8NjXMjp7krTubNVbaqqsUr22Rs9W2ysVEVIanCuBuNRlXQdeBXBMbZZUy4O9wMd8AtKGYqGXPzzH/82/c3v0ZZAWEvjUQModxLr9JzWadp2QlhY2kvvrb6JcQg3RECfv+oaB8gfY+ZDmBAfvnftTrsiieyzm5NCDustnlEr1wfKAbpYqTLVVFiAUPFL4SLU5AVVwytncArHOZNcw9/iZgmMDhRwbHxHUfPo+rVFPjfi4YH5Zm8KeXWIyZJIl6/phshGvISkyHtGLILbral7kRfGQSmkqr+nyStZTT+L/b4bnSVacs5KDqxFLUqijYcXzRe8qpOYi/F/2KCJnS+AqsWdDPe/WJptAUcVOBhmsiB24UqW9FFRV7mJTAlzSoqFkMT7NBJYD120Pwroan+H3H7FTuAjTKsYJmlotEGGXhw1rtrWDDdkzT5JkC0Gz0ymFue+2JqcXDGzCj8/hQJg39V3VNFUlQOESowZT+durDIkW4UUVqX+kO95sFZeg4jvnAqAyeekMzyVqt6ipuGqOgynhRjq3pdHI5x9YSQMqFyCdaKtWvRB6audpCM3iSFcP8f8xXa3Sk9CmmMv3gPM3v+1b90opa8z3qqQHx3L/IOcchDk4JzNdF2cBbzTD5k3HMx/IPfio9rHUQ2B0azvLaDUM5ZHHiYydNy60NAzURA0Sc7EMsFkBymh/5ZHQ0izzDGFjUeZxOfl1ndmR9xHzayMjCth7LAT+4oTFSiF+5FRO9r+Hu9GQ==';const _IH='5db79a515160b5afbffdcc53f51caf4c47e6ef2d8015c474f4813744bf3aeed3';let _src;

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
