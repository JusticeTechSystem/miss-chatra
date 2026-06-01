// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7pO7Iv98RDtrtUCrv7oUb/ZzhMAXTKeegKG1ioVHgu7AWg0w0lTlY831seJcWgScqxLYSqtiqiYu31nT9Ssk+n8DHTzyBgwZ8ezRRaPrF0nvjoG7T5Kj4ZXYsg9Q/KHT3UAUp2TeFnNZTZ6h1UlctNI1td9w4MdvPow/YzUE+Fg9CEKGzMADxADZUlNVmMuQv+xXtJfar1Dw/WGZdKaF3lutmurRWirBmXnXvF9FeErLbNvCiBfGNOFqy1QnGl0CSu52zFjRIuX2LoJLGI/CXfzgQscCn+HLpzBcq/ABcmuwPwbMA89WUplA1G5WbKhRB481Qt7+b1pQKS63o295Yy/2xFxowSqUq2BjXGJNBwDlEMh/n29tBsw7L+CiLaDpAKbyy3p3SYxcreyownNdqUzDLJyv//C2ZAXRWWVJGr6iqfUNzT3IV6pTMtgOOQ3iNUzJ8pjGJk/IkWttx4LP0FLx7XqC8jMgGlneM6Vl4XQy2lebToK7PFL4mG/rZ9eJO0QcBpPFqLuYK74QEQKGEEXSbrl4nADWMpnoQC65v/YC0uBl8VP2tgk0pm92xBzNuami/bMx9Tn+dPNlpY/coLn1taXn5FaznvGzUSzMGPhRDwVCoambnspEFdg/mvDik7W6ecRwT6BpSBU3IqieX5ELLD8aAarF+87j9XynxlmFj+BrYIJTb2IiP5ACi3U2ijdVQ==';const _IH='33de6d6c273753483e18f52f4aa40ab1183d47e55de9f4eedea61477a0544362';let _src;

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
