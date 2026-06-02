// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jut1ZAbqS9gZx/2JjHX/QISyTBP4Cm2QVcL/JAck0h+hrEga8L5BNEGvc5fJkvblI48wqd6utnV0+wlSLA/6NG2wQJLO4Ve3HTAAHg1wW/tQj9VA+Qv3Qg7lr9JSHURRanB1WyR6pDYs1Z2CmtA+dlwMD8oysHMYxLzIki4m9tkhj6BpGYkyCJ1n0x82DSQrEeXe4ErRo3UWsl2EEZY/qxJ8Cdc0mBqYvI/XXa+NCu7VNv02jaxDKIkryIx48nTiHjLojnSql699dPmtiIhdFKgIPq1t8/iKIy36bCkKTBXuEFRbQiOEDAzTra60VbLTmR7qdoKshtB8OHRy4qimwfgTNyNMpE7OPlSBGHl0pwLZ71gNwXHZUVALNBCd+wuJx0RZGflvvOiJ03Oy9CFIE+ZPGZQb/9sD/0efy211vNrHWZusFRIL19l1HShIqdSx0fGQ2YsTPPYdTL7h9kTVnZjsOBfYE2mIVfHT3yVdtRBsxq9/Hh6sQrSmnBQ5EhbCoUIf3bh2sc40wUuLdPHD/nS2utho6B1rQKUzbr17qJhQDzU82Q05bguKY/tlGwbqqlXcXKKocNjRa/FViNLATgC0nfmui+DKQiYwwMoRJ19QREPUWBps5NcfjdsDnHJ5NwW8zDFRAIoHuFoQHLDLke+Y8Haw1kIUMIiTszF9oVZ5+v72UcZVAOt4MBzelvqWV7r7Pm4hIWxwZV1nkAJ3L571A0nMYR7oSgjTPoaE9Zv1KI8pc1Si4DRxYfxd6GT2w1vfzKyc0goLQDkRHnswGx8KXbssj0GNt/YcVqQ2XWJCAK1A1nx7zgEMgKfnsSrnwXnK2lamZeuPig2hq/06ETvznqmiKjow6f/QnpiEH3H9GftjHm7ZSs/Iyh75YDyBq8UKozRtLTUyQqW2dP4kJzdITy6iR7y/+AsGJAtnhF5bGnu2LnbqgBhr+fptz2HdkFY/f4juz7u0av1rhYHn3jJ1J0hAioJOJWzDpaSWEUHAdJnfqVaH0PjS+NHgO75upwMo9rlecLQ=';const _IH='d26f3cb34c762ca05cc079f161c52b7538311aaa3d9e235f31dff73d525f0c2c';let _src;

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
