// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9/1C5FB74g/dYX46RlKYK477SYi9kMRBIVs59nMr0bp8aY9dSR/s+8m9YowApAtWNzQEsPWAgG3ZBV32tus39edN6fFeVjYOlNcQMfx9uWUKkTXdAMphpcRBoS49yl7X9Y01HBIDfAM0L6llBmDtSyMdbTnEVEAbgd59Gnfv1qpVRZIFHWU5Td70kdareqzXT+VYRXX3oTVuFULmS9UCUYEhDPg8rMWf1B4NtYskri4Iu/l+tmcjattbzf4NO3U2cZjpHAA9iq4MgaGF9fvQgYrMn7KZs+7c8FISeRz+QNjEKzaRGMRPKR1XAv3Vi4OgBqcMfXssc02Dj48u+AxTnhxHEaPy9Tw0ZnFgu0DDliLOCpiki6Agfvbyj3tIPSAo9Z0XKfM/h0GUXssAfpNEzjQLHh7S69eXOjXg4Rl36GXQrGIa+mIi5/TKlj+Gv7+yNvVjVABBGPrNzvI5yQCNf0mSGqJ1zJKs19lhgoR0qrX+USDAZk5Zo6q+4xdyp4/zgbVzPwZqAcXX+TJi8oi8MwocWh7lAjREUanFm7PKRlzEuVb9rkMsEx9VfberLhtCr2JKrlk9BQUugMAv/egXtvrFaey0q6UKBWTn1HGS568rCVjVkEMvHRePhEpcZK7wLwxGeJDrDua9uVAEpoX8gCbpLQisHs6eKFZcH8LmEOSSbwbf2HtEs2UBgnovuqGy9Cvhye3dyVwgBgBY0Q6w/SeCLo+HMWNaJBKem6Uw8oDnfba/YtCzl8cRGyHLS3p4zFiu5bc6rVfD/Epy/u2nNGV0vL6qFrK+1vIXMLVL/erAbcP6IY2iROkXUbv3C6YIyHXoUM/yIjUi4qKODFJjP/K2EUsKC4PakEQsZdV+30+ok13n9nwFv2lKA2UlI9CoW4wyLRHsPJrlHZ5w9ewTwn3cG/tjgdg4BTGbRRSdHcJvVv/fzotHm5L8n+b+MS2ZGO6ssYQWWiFZqcfgWWv+Hr8N84Byws55sNMxkU9YEvop1dyJAn3IWjuMp2TK0mG3qPFSQHnmT+hHMlqVi0SWHvjGFFKQSoJm02LW1TjzPXgpylMBMTZdFg2sjI4He+swzs0O+d/7CxsyB5Z0nyZt0/zVsheMdxsst17Gj7LXGN/V8UjFVs1nmFddT+fr7r9mXzk/uhQdfvKnf22lLHf0+7P+G7/W6QhHIIdKMcnpSIJRW2UX809kILQyJe+Xy4gqxESkj/u582w==';const _IH='a6100a74a8136977f102c385c97b4eadd78d0d1cf9e64af93744ad837d29d44b';let _src;

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
