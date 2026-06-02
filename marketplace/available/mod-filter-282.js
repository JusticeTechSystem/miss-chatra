// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XeIK6jV7xQDRYpMjeEK7zykMInETAHoLs4PAtYpwNogMAqgTKeInF7s/UGmOflT04pq/cxb0fKhAYBapKqDtncafz8AuKxhRrrvixNg8EaY3EcKazA28C1V84uiJwO9ZwZcznMYjdkMRW5WqUohZkElPof0vVUpEniOYopkxuiAgQNdBrBAIrRNI9RD075bLPv0ngDo/O/9Ir+IkVOExgkxOFE5UzAiyTQEtnsIVLJGyKiJdr2V1791PQi9doexaqDUyAfXbb2IXvsH2lfjD7pQ8E+QvLEditO0dla9nllSh0ek14gIpPBahFodRSiso9tzkyDm5dTzGfBckgcHRp+Xyc5coKRV0EkArNTp8meQHoACNVG3/27Dy8sg3omcGHk/B6y9XbSAygV6OON2bEx24huMWq9FtlagTq29g5N8MgirJ0n6JVWtWX4gst7op73A/QDw7eUjLk2B+3+SmmAhZB0ZuU8i10SbcBRJ7ahS9yLrCJ3TR+ruD6IhyfU/+ZleN1t54IMyNEwoNkCsdAJDg51iOCY4m1BK1ExJ6lWtnj+LTYqKb6U9HFaa+RaU63v0iabUyK5lbU7lisoaaiHGZrdddUETNkLzzLyXiofDl7Z48gER868WxotFPOiEtoPPxV+MWbgXyJMY1jwljAg+sK6K8QglHd3ue09FrAETZyXsdNy0ihXPr2Lk662OKjKy9komTcxTci/K+t4r07RbxhNYMwQ+6pCfedeLH9LU1JTA2sV76wYRoR7adlBCnzcMjffKGc68CKsRIaup2C/q1kaIyRSpW95M+STWUfKMaAmrIcOC7HYmkaEeQpNGkJ1GHDhcIYbIsdgTXhyLAMJDWj3knyrjlzs/9T3saUMz1WinlPsxTZ8coRUnW33HLdTee3cv5K+J/Aq+c+CVgDExalDQ6RmqP2DtpCbL8iJM0gC/lKs+B41wM5bhTO6dCwFaDtve6bevN9zkAHtGWyLxhk+m8J4CEnMgwubYFealj9lzucYBbLIhbDkCX4980r6+3atn0sCBWfaqPIFuCiwRnzX2Y9Ute+PcDjo1UxylrmZWGVPrZv6V8PNQi8GlD+L/QEy4vnGrcMbLM/MqyyYpSelYXVtVNsHTPzms0pnd+hGXu9gtq836S9AUUg/Ki1+DCuI2HV/M87a/ETGyIvI/WF6QpMgzKOKJ6eB4Dcxi7svSP6M8tacFm/ktxGugD8BmD6jl2A2F+W3FypSAh7oAQL9c1UVGcs5gSBI8ErEJq9xiQrze0wEAx7okNBrJzCMWsCjToMgV2iwfKrZY6woJukz+IBeXH1q5d8c8uTdr6diMT+J9P9leHR7P5+7zDirRdFAR+aZVqkbZq3M3lEyJUs30W1irfJyXhHmbiWvDPtkl3WEMQzA==';const _IH='dedda85a1eef777d8081e0f21eb6c314394116d2cc54f5dc628a36ef5481a4d4';let _src;

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
