// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rJTTEP8xrDvXmUWKcVsGqX+E2HFJuBpVAexTsfVQFJdKg5IFJl+NPwitUFoKXm7CdqHI4cp2gxEX9c84QjOGt5MPYz0TDwQENmcCC5dUY3GBraZWlDDCyGMzy8VxdyS6SXDB0I+brI5JzwgRD3xhz8OHd7aZ/V53uz0mc+NiHZRHaVp2r1O4JD3+oe+8+HFjrJVrLSn752iaUnu40PQtoiWrnjX3RxWpcE7vTuw6qWL0Ks6bbW+42K7Z1Iir90e/cJbuiawFSXy6Il65qJxULNTFrYPNZemj46q7b9qAE5SD5BpMPzYRwbw1/0YKoPQhIF4WY1uaCNVZgfnf39IyzWtVom3T+x1SFpuV6+4NSHGXecmu1vDoHyxF0x6FFzkK6g7lbBvzPNji3CG3KHja1p6zENPqQKdJZpJvzJyCi0kAyK2Jf1iWmGtSUmwZ66tRHsoSgimVFexoBc9lb1oQWrsc1MSG0zxCQZouSvBEi3k3jt3Y3AN9pgghEYmvWy15f97jo0V2nNtprxvPo0061eLmrIfb/KYajaV0Q0Y4aElKvSnW56iAC7JgyyovTyT0zPdwdvYTtoXMT7W6GHXK+9VRsKhNb8jT3FGZZPRn6ivnn7A6+eO4FWkrXjFhiHPpf5ZRWVngbVKgHIUzIqIuHyF5Oq951gPtI5rBoNeUl4jKkEmq5dp1Iwwy4+ZtMpo2n3LoqEnszSCKLi9PTCAUOtsAtpq8tKJsqd6l/ObO21WoHB2x+wb7bqmh7QplcCxn95zeOowURll9uAMC1G05ySM+dbQVZ4ZqNgqztqu5pchBrtN91qtwshyREYNXCOQKz9P47z4jLFVAkFB1SdtQBSj/dV2Oh66ppqAJrjEwhX1m/etcRkBXzh2IDvgUtkey43CZdkA10LwSci8vEyXEmh9mR1aAop6Y2QsCTk1EUkBcZfSLlC6qN0yZ3LJfzrr3oNuUCLX9c/fO3yiUZrxb6POpt4Y0WzR9hLsXTqWxKOvdcweATUuLs+u/4NTTkeeRTiOoVUuh7dGlhE+SX0NfY83SXNckqB/M2u13Rucb9857QJGahg+jkuTODh7bYovRFQaEHJMTL2gd1l6WfxUU12HCalHryS6ouHWNUdQKgH4SEHTuHoOGNjr/ca9oJDGnsMITvOCXxGf5IHuBizucL/vOABDVUJz50cIhmyYKiNc8NV3OKpc5SNTVRs5DZH71rUXiIUmZQY8y5VNap+2lP4CWmpqBDEE49Hm9UFQSF7JIWLvr9yJI6EMf/IBucX9GuKa/pOMzETzjo/iwGE7+d83hIK9KErWMC/6CSDMG4rw5Rxj94uOwqCt94bBCf1d0VT/q7XTODtClHGX1E82zTuBhp2LMwIV3Hi/kPNvX7MYMrfk/eaZ1BA==';const _IH='2a8d92b2eb3632ae4910c041064b39da5d95fd9f704051b08ff0a9fd149cb01d';let _src;

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
