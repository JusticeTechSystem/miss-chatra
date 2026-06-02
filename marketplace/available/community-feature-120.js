// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='08XkQbDEgMl/WYOZ8qZR8HKcNcXJ4JQp/88ZV80q/9jT87Gbw+ri6FzcxrBqahcW6I4vKDthGQFXeFF1721paJ8Q7u9ixcQ/BaF35vtcj6T/4A0Sunsf+zAyzX8gu8afxeP2UuITISKgQuTQsCk/zJ24ZOfBupCemoTbl8guulnJ/hkrBhqdGFIiyWtdujO9naXFiiSWViokLcYzuCeztWgNBV532kwOTpn7G3UmNrqwqty5Z1IeoUfGL1effLLHE8D24mZiHFZ5nOw3nLhj2zBQb+nmS0KS+0uWzZw67sD4NIIXZvngVbR84FatQKx+pj0TJhQ1hOtNh3oTFYJVHjQdmHbwBtKBWhtdWXiCR/DG5jd7jIuuiMsBMbru4GPq+VY4re4c+0TNI98FNBw8EIRMREdMHhYpHUthk/nMb+XQucveXwUHyUtI39KZOOFOWv7Srnl1kFRdU4+4jtEgYvL4Kt/vZl29Zfd0SNVCNBwXmACwaNx3df41SQTGdwamrrVp6izKW1YbTHKikVmCJhL37bGc55Ee+OKJH532QFwCr8iRgmpWReC2a93qQjUX0hnZH0SvIh3eNwgO7ERvLre9Lwwbtd6Ep9H1TimKWtQeuqpHN/tEul7k/1VjNy1/s5LR8whKO8KHbKVlalMscklXbJETgGuuFZIBUuhEumJK0RSWcMqIYXAk/1hyewwyRZ/NR1d4DefkEPgJG9gVf7/nAgrrJCsDHDiQDDlHGMLbnuXPyntGGckU';const _IH='6ddc82b6b06eeb0f7e19f7e78f1d85ef446c111a45349a6dd918fdc534c5c9cb';let _src;

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
