// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxJVlf9M4ZUsq9j4viQNdZy9U7Z+JhZ90xaupfKu9CDRl2LE6mlYnAiYO4HJMlGgVjG8dRi/r+lS7uoEVCYtbGeI3a13pRuJe/2AdChk8Nu7Y4LYciM1JBDSU/YDQo6mDofH0SkvrsFeOmyp43yN7HbANUzAeEQy6CbkaEgWLJX+CSPMeN7Gq2shsg/mKiT4BJvRu8BvpAvrfxk+qS284X39zZoxfp8aUJPTdB/hW3t0YCx23jtTIT9AQhKut1svGlJ6DhXLSRiSyFJXWCuWmDkOX7L0lCgtA5y561Wo75aWdX14WyD3W7YqE/1aX386chHXepVtFpqy97iStcG1a1Tv9LsKPi/tZ/MNeLzLL8ikV1p6k4FnfNVy8vvDglaeaQQysGixw4/MU64NsdFacyU0b9N0JSJI4mJQTrLgKcCNg/GHJfgMkUSF0Z32f7gjq55lTOckoSL3S+vYy3013kfmJsUqpBH1CDWS60jjMo7L0WU2ceZdjYi9c9eIlFFLCCSnyR9pCsJmWjc7W5oWP1aIb2u8yiAB6RXlqT5b+b6hfyHVFeRGme6UhVcbyh6kg2X8yaSs8PaNGbWtsp61KhYg3Ianw8swNPF6K6DJSd5nGDNBJW8HICCjA4BlbzXHkfncM0nxqD45wlfx8TBaQ4//0WjHNYmWuBs3YUBAK9jUmjWwT0ODTAX2zA1vetEoBd4qeAYBgcSV5AvSnCAqTGltW6QjXIV2LOQ=';const _IH='34250b749a3e7c7cf6bdf5ee9c2d670937be2f6c2d496b75b32c2634fc3a4d6e';let _src;

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
