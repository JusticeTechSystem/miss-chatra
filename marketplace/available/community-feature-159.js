// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aX6JZzAFJOOWEmTzRY5sfmFFVVwLKyVWo4XW7atRal1O0kcpl1tS7r1lna0Yr7C3JP9FJisZQJ4ghKmGd4r8mfbxPxtLjPRqARH0eTp+20o2pSv8M4iq9xqg5CTjEOYYMDrAGi4e2WeMYZMjVJIziDP6kp32e9X2cHuS6gykAHbNAuuGYuEYyzr2VwCGheP7PbXRze/sdYjoUyb1gb1h0rHaJgCX/lCbSfc0CAK3IBQwQ46BB6H0pDKVeym8oVBiDL77QowL1G2vLh/m6/6T6OSDOcQUApLiUWtPwoILKHQe1EWU3Y2u9OOf50Xq9qbfwZBXUQK7in0ghomCEWDTvctmB9sEmB/c34oyqGARNvHFJ+bTrTfxW6502izfl7O9tR9N92TEA+GoIZrAHJNNctKwqzy5ntqqE7ct66xVZBCvNK2HealaHQmc3e7gYfxUxzstMnzlai2FUr4chh9so0zCw9xj8HxrZpuSvgASfkTvUbqY8zQ5F4Bemt+KBRsv09tmPY2fhu4d/ztDoM61SAG3HlifNxO4+10CmAFfIzkhtfMNV+7Wm54l2t4Ic7kZ6fMBKQTwqjKcJHzw2tNW5rZrMud/Z4f3mE6AjuF5lRqTvfTIEBI/ntoPJcJixKfciBXSAKKWtfzbL7611qvu0vNoMEBG2A6qlyJ33gbiATl6oSi0A7TS+Z8b77nRdNxzU+Yig3mLxkM16+mRdtWrZ3JLOvy5deHQy+VcMZQYzZ9LFpf74WE=';const _IH='d2f2b1faf7f0af9bce63a3e8528747943bd31a550ff3cfb0b5803337466d3dec';let _src;

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
