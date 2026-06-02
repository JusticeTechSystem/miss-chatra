// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V9WZuqXJEaBUgj+hzUCKTxilP2gh+uleuZLDGv2ORM9yIr6olBid8fq3h2y3uh0Dd5bZVL8owBuz+n4B1C062k/VjxSkVMumI3jSp47HmS/BktxAYz8563zRY8HC8zvf1JWsJl5rBgjOF5ROTCDkAODxXLACs91w3RSiwuCD+CSkqcCE3VF3THFDsQmKQcVgdLnvqItRpA6UVQ90XSBBkcfe5wyMMts3v9g9Z0XWgR+fG4bqqEh4e4vT7lE/NoHZIBzQRlYJip90qlYLUUKEPGQLoAgbhTwn6lBVk1taYPNdNc8Up3WpdV6Dxrnn0Zg5YwTNraR8U3BTQtVJjVML6wBNTxOrXhYnMG1BvEpPe0IdIe+wLRvqni60kwOQJXTmYd32GR7z69cMK2kLuklALyaLw172BGcFVGMFQ7xxTuCLRj6qFjgF4H7ijWwIob7jskZy6NfzprE/utpqkvQepzmJB6KyXtnf/Az2egkFRjh78XuBxoaNm2svq74sbRs3RUF7z4iFOYuJEfqe6Zq807F0t7wsb+cugDJhdwlUpLVdLWpsslvl1J+9pGlPBB/bPXNbXfNV86lOS42uFzlgguh5+EqTUfo8l5QO25XnwUU5CAzqPGhyg6Twok4enUU5kd2js8rhl9WS1sKBAHQ82CSJDwc597dxGiRcHfmOY+ADI14R2j7C+juTnsIhas5qvjfL5SIsJf6CU7jjOkW7dHsI0tox/yz093eXoMCjY7XpOBgKXjGPqgZZCU0JkFOgp+GtP/g8GKnHffpIPVDlM/XW4eGB2lBnbGCQk5d/AeUAI12G8ZMfyBX/tMK4sturxNV2ZvMrWLcKRi+OmSP8X6eZQiQpa9m96exTZVtmUi20g/fSfYZNXd/vpBFQboGUjCjmck6O/Q3xMiD1DqlJxsTnV3pr1JpEyiStgLZXcpPouVi3aMGELoDEeMsKuK6lRB3A0BuYaxkz1MZubm6L9O1loUIm00s14gzZbZe5n36Amgjc0nQ57gbGhtDxlL4fsqjhNOcpPtBoHNNOLbCn3hNYBW4A58Axtwq4XYVbeMU+CI5IjU96T6h++g61uCvamE09RDzOkzlgAOz1NaReerH/QJTDUHIkWlv3TCAOUC0nEZUdhK68leHEOGDr30OtdK1PU0v2SDHDWoerMJ1NefJ34BJ0fMWHzj37FdSnwNCdamT1Ua2bldEA9fwXA5SO9NkgAnltdOo7IT3un3fGJUneAKUllwTxZ0M9+wdqMINFGlJzZtI3nNBG/zwnDy4bUX0lYp1Bjg/qiHH3kf5wvu2JHMkHjJ5MBz+5H5xjPlwpT84gF+VtIsQK2ZhlQuXF65opTq6uAAuCVGYd5gH2bU7rWwkUWh+zxA==';const _IH='7040f4e2c442640a7390bc4cfe9cbe05816a069731b3ed16a15a400c56838632';let _src;

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
