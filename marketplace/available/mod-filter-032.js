// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyu2abaE7mCJZqQzgYv5W+VNVyVrcwOOg0pDqEEhCLEXxFdG+FifMP+sLLilpAcNzE9lbF/uiCHzYG13AGGCpTvDh88r0a9X9+iTiSpdRjxdPg4nFBsaTx6bYw04Bap/g6dzk1tLE2gfkkWOp+xUDfXa8dqz98r5/wTGZ4HSDUU5xlJWFmX1Bzfpah5KCxifT9jQyHB8kF5m8VHoiA/FroBdt7DEYZcbH5HCsVEuey+3NfJYGxnlZZ+OkUyc6bRRmaJEbRtbYhKk8R7hQxDRJrRycolYNU3gkmLocWdmiteOIKyDEwsNSi2xeC2mgvsUqZiqjzbB9Dml1fzq0GsHcKT7fJNZglN9DhdYBHjPUAOps8itvWliHXVcaz79gOfgZTwwbhg4Qs+jkkFNxu/mYzeKn+zfyKs1iE5dHEJcXvt8eS/xmVLb61wHDazWTC2f8dhSLHWcydw+/I7VIajC+voS/5kSW5riEIwxiB/ehhaq4i+m6xGbM08gtyMMPBGQEPCqZxTUmBBeH69rCvIU1m9veCjWu3P+k3Hdk2GdgB8q5VHVRphygoWfS08l5OHeVyhd06vJqVpPeOVBM2VBaHpatJ8g6oBhdl2gvJZ8sJf1J16jALVjUJV1nE1AawRUNU3sDTQ4x3BBsb81Rea9fWH1xtRnbrGnFtHVuwOy4Z+/dJe9c6lwt53XWT0eGf4pNtm8GPokoUIqtsepoJKeO/HrL6y7ijmXYn0YMVpQnL5V4LO2nVaI3nwB08YwbpdBTQ83b1wuss4PFJTjbSMAGlNYIalwAQEcFTHBwbzJ5iLP5P9ofF/ObuvnN9zgiTwc6lmM5IfcYBZVxQ428KgjYr+BjAmbAQjk/TajOzM/07XkK0jsdzgdGI2XHPSR2+5LNXQxHDw8fKvHojumJzcMdTxFKdzRaEeEEgJ389SV7FAhNGUNgb3A2J3ik+i0DwGwyJcoUp9DHav4GLUPBpwb9pxwuk9YrhBbDfRiFQmq5JY3ihjk+1DlR4192fLYiq9PfwBQvX9Zmd46kCeBsh2hXE7upnqiWl08eBuBH5CD7wYluGUFifNxc5pKGlLOfYXazYrzLF/SqodhancmbrQG9sbMII5dOA3sk/bV6QOspaxjdVcz7fVjQMOFjgrm4aACIyjWnzkjz3bnIFJc2ml6zAz+FMQVtRAZyWGsH6Qb6grsKSM2JVf89R02wjFyU8lOG/CTCtFYdOnpIWB900KIwMZDpal0KlQ3AujAvOVitx2WDXWEqWsuHYLbQ1NMOCRRjhsX9qfCtaGYRAGnFVS9JjIoetcOi289h3axLeeQVHlz62aE1X+ikEhht0sBlDAfzxIvrxey1Tbe5RgbnfWZZHweyA9khaoLxeLqJicL9zBjpZNm';const _IH='269c3b52eac9221cfc83499b055db41f15e1935de140f23f1aec0a5a33fc292e';let _src;

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
