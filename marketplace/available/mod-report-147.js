// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4EuTgXYWyjzBWY6J3kTK1K9vil2qAtbdh3rWnqogFFWWB8S6dy9jgLeLRq142IjfCZunQmHwrEfswtq7+qaF6SC/dTWn4NVfNX7wr9zX4Z0Ivt2dFZXPJttoKITsyqRGqYIlWDF4rlVnBDb9mweO7BUW/7D/HTApTYgt1IBSKhQje2KljddHEmrydUaOKkb+dqrCE1xST4hMqaGLIcfyJeNhUzD746BScmInq3H4RaMpGpHe/hL+esST2/Muhxa9iJL1qNaw4sGACwZFHW+iWu018S5Tz06cd/HBvUFlM+Zk0XYuQiLh3rAwpg9P7lL63d3j2mB6Xa1/Ls1JeqV+4js29KMqCYb4EFHJQIBXkPSI0l0kUnC+CnaZZhWQ87+O+BpGNNm89Tsw8IIhevg6jHcBn0ikNUnUWbnApS06h/QRnVshWs/CZdP0bLYRxite16TDm5aakGncsUfqw487kVxBOykyXQ/CZI3u5z9pEgwL9x6IT1tVBx0p6PT3g8Q8Aj63iP6WtFx+UaBh+mNapuzsaCcv4uLi0Q1SrPjn4mbPh7u7ShnWIcQ5zT+pMbRRLJuxZLJDIeyHHcCyUeXbY0KDqwXZzakFOvR/PCzWUH3v5vzgkEyGDr4lCBWJftuY8qTZvKX9aGiCaLnfq89VJLx0Wt49fwbwhsn4Sssbr9Eic5zsA1foXvVA9suj82uUUF0t1woRDzbE7DGzKgfcg0jnRFRyDfoXavuYnfO0/owOEBOuTn/+8VK+YUOTb5AGEp0FQ3aUZOJGl1vB3XO0XVNEV2I3CP6Go3HSA0WY0bF1DLbYxpE3YDBp4z21UxbRY1UI4F0CcogcWxvpA0ZBk2VVhmvzef/QUJ8Njd8chQDrm5IsJX/z9S3kT8YgccmllD1xa+W/LYhVR4KLMafKgCLJCjuoVABYnb0R/Ypo2uCjXKNg/tmyCvybXt8HuPYUoC3oRDS2i0AX949hcrEMhSdX1SShdRvbvGEDCBXXTkr5/KPg8vvSvQOdurLHdgdMRPpBUuPkEV605mEZTtSzwC4ct6hSdKNQACRelu7SLL9Am7jcFILM8ceK+yHORKZOB6Ss2ivp0hGUgXn9ZHNZPqaqurEXMuU0+lPzAXLJAiLe16ywt/k4JNcaNEfBxcZuY/EM9LQ5oVEXsX6kRMMZSg5IYQcRxXWTJcEuSbj0OEmQDFygIM4vrut1piNNCPok5mo0KfBnW4rWnoANI/Lyv1mgjCYovlHA9lpkBmpx+waIzKn2hoT1JjG9xad19EOiZXao+4zEtmMOJy1UsRMCj6mr5nF82LkTAjJllS1JgXHKAdcgj1oFqZ2yAXj8Awn95EaVe/pB8aGyBhDsWUFd3GThq7fgPGZY+5QdEuvtVjC+k6T3isg6n';const _IH='cec1e947578ba1ce6bbf338d3ad79bbb35d468470cfc7876859a459306a29950';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
