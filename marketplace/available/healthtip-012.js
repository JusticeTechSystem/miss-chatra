// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hy211h/V2n7I08c4ZIsSO2u4W4frq2fMQmLcZWtwD8vGjZRh6h430V/IVO1bTP9qBI+0LM6GLVik9XSguOapiy/HCLLjhU1kEv17EWUzi2xJifwovkVR3e+tlaRBnZWEgV++us65/E9rEv0YM8/N9EQbXADJqcpKD7mWvp/KXQFT6ncHLZkb8/yMVdjCnRBHzJc5Tk1laEy0Zc6vGvOH5JY0Z/qmYhwl8UMRuDvNPfmLAdWsOrCY12c3ylLtnObxW4YCDJHdbZ8e8/ZswtpGUiSnGkK6zDZxS1PjlTE58GiSiYfYxMmFSAjX7cqLml1lCpyytsvobfcilOKExjGtKmHkeZXJefFCG8K41W1X/m1YcmhSFIjJMbu1ARnljOy5fjmv6ObWRMZ3JUbowCqip6QAN0hjakmenxejU7hjVBYo6NbyeGmKNIUYFZIfHWgQ9JFH3jX1U2X1HUnfD6SbX7pHbnY7FpCpkZgQVSt/rlsvNw75RCZCxzPXKX/oW3uarmu4+ZkPW7v+IDSyVpIiXl1qSLurCfPu8l+IGWUdJptaQTfZUsJ8j+vsuPZRqmQRzM3l2btYVAZFU34RPC3gg9p8sXc+d4W77oJJtQqZvJcDEsKLLL6kWZZ5PhMDPk+q1ibhsUGe0k1M1bfCm9fgOpBN+Mmx2OoGwG2YRgXKOwI5qT0EsbDQz9wIvGFSGelpb2EeLFhfqa/4nE3sKTwTUEhBGDx4p4sMmB/SrJaylc+efxF3myiQ8zWcwq/YokisaeoYkUd8fVEaELz3WmMnBwRmxrN5KCENKM2bmkPdi3am4z/LhPad9I22roR5HjIKT9jUs1C3EyD2Vmp1tA69BYrS14YPgsSV3LHR3WUKk+UmY5xp6agksNNWrzEg+mCUasuqETMqF3iZXOj5nFsytl3OqKe/R3JAKF7tbGEqLcV+mO7pVaG/KbDLcRI=';const _IH='9a4268e806fdb911728df2083b76a8c04325e8104d3e745fe9051e8f55e7439d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
