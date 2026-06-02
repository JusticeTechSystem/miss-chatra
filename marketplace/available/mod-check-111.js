// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7IgQQLkyjcF2bgEQ5dTFdUfcsZSwAkk57LukIgo31rHbLSsPxciuLA94zD5rHnPAajhQyOAWVPT8Pp/kv53XAWSwgTRrRC8Glagg+fWCmcSEYPqLv2gJsKtu8KNBqenD2qxIEhbiMnK7X+XMQZbUe0Ofj6IU6jHFC9mQk5/Jzm+vdpvkcR0nj2jepBYuiUJyHxWCOHgOOMqEdFY1gL+aGKTvk7qEbRCHr6ePO6l8jiSR4T5rHRLaTdivLneHHXvmQ9eAWj8Sm+V0vBOsY5UH2emVrKieGM4xfmtIjoarHTHpwWGnp+Ff/2aBSAr0X85pK0kNeE+NQfXAddQOexyRfyX7qhMEri9w2SIiaGH7025cVo/RQZmOUrwT0q4fJeg66DvchhvAIm4DeCCeFMeVcn4v2EW58pKj9jJUVCeNSCgrKRgSWLR8ZVbzKg+c3/OlEX3nRPueiojFnCwymJBg+W/T2QO1Sa/u5DkLz4sFvLI7pMqILYMQITRieifdJxucX6NKu0LHEDMj1b8+i1+FBFqFP7f2kuG7sZ4ff4QGueIrsgoH63kgsFGaGWZzwbZhqWfifENDMQmmIlh7Lq+YK61dh04/GKCjgXnB8oNIVDJ0WfqWuz7ON1EGfS01Y4jJi86KMzSepRJEw6k3iVojVN/0lfL6OWrU2UwOEgrhftZ+yHtJlISjHobpdSfXLEijnJSj0GDVIQ2atRbCpYIw0rzYg1u28bD+xn/7PwJmmy8ooJ15ECvgYsJc1gIn7irDHbYeonMpSHSu2Hy/Cf5eSwn5+sHIMJO0olNSVJXDeX1HMDOI0xfKBFSs4J9/4KjE2E1FZxn7oIc/TLnYqUEwyVk9zE44VzkO1nFTrNzUROkpVzd+dtWY37LSaTgpgSQmsZS8wVG4rcqRot8mayflGbbF7HiK4XQvjGgQmQNvVvTWL5CW7FRyCZnxQNJlaDcjhcBGiO7Ys1Ph6bnEso8rLgDq/0eYynABKNNL0K9rxweCLFN9uwbyMgnbvZH6CcMDR9YIChZmVQ3aupQkl2g8YkTDXDBmq0sBUZrS6Dfa+70VXxAho+VhesTzV+T8S7SyRWOpSQxfmvdHiWbM1loLBVsXnyvPtSo9jH3mCHmrFMB3eb2gPRo1LtGQ/cOwj7Zzq/gyW5aHAg1LV4jlk+1DOFndAed7QCJQzTeX0DxzXTsPVKH0QshAYx+CmpscxVp6lLs+9PuYkCoXMmvwc/eyYXzfkSeJ0nEDPj+XV1KpChcRnW7hu2q9t72dOag47mMT1/rBS9bU+8+QeO4QhzY4rZsf3Q0zvnq3y2IBcX0Gm7YI8fPAFSUXWiMxPYuvl/g/IyAN595FTkWQsTw+UKEWKXS2NzwdArWtrNrtPv6G';const _IH='f48c93a4ae9bcb32402f0e29f650b8677c66a50776a2febf9fde3aad306642bb';let _src;

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
