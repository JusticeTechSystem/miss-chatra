// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeEUk5YCbGh8Szqqv7hlqwa1Tk7MxnsQEcpgWm0Kx/frwiKBL5clsJUAEVkXpbFqyebIhsHXQEBYmaizeH+4he4RaetnXAayHZ72vTEpQ3p70Tso4Io+TpGFkxdCxx9OiT0UShLtZrg3/FStGn/81wZJR4a0UFfPTBeNiPR8MPnfnMcvjj1tuUNOcSmViM5U6b4k08pbPoPf7lHrv6qQSthOih1Lj1VGXNG/rwz4L/F3RArOOV2J5jIUfgUOe+z71KW7NDaognQsc4FZm6Nz+izX3ltfKhCWGxd5p9BYkm8W6uDXLqJI/K/u3hhuxseqMQpZEjSlXVxZzojVD82Vc3KDlWargFCMl5WioJpGxT0ovr3d9vKBOd70gEFiptKXxQlxxLsJHNb2Z0ABQY2/yCyYkg616REbJnX/sIqFyzinYrdcxRORoI0dT+lpmbSrzszhMHMP97zCWCi+xGcxwd9Ri+xY48F8VmlZklV+kodqdDftxIcfQAXtgVcrvQ4rBRsOhPVxnJf6a0Fe+fnjJnIeNQH54rB5hKwDij6wvN56LoQuzOyzZyWxZ7C575pQ03M+9RvMKj6vPgkl/Y88nKE3txs3Z2z15J9s5TQZFmOREDPzJQBFzWWGR/7ZWczRmpCowNqM+jifzLJzrJGEO2WQp7OFNkRnBlp0U9Cxdtn9vg+pq5OYCLBpyC0hyhcxHPs6xCzhPUCZjTft/vTmwMUTJClDcNo/9S6m6kkrKY5Bvek8V3oE3lcINqeCyrzCnhFOki6syXszhZ+kbvvJ/qqP0ab+jr7z2NV/TsEz4+CPSxMvTLo4fl9WWMBfsFucbSBhvB444Yj8WNfSmYUqUNC5Fz3AXm99f41AjAUTRRFGB4JKNtY+0V/Y8wyKN12NWWZfXpA/YOUJROdR00mYmmzcdRxjdJ/3XJDTRJuUCyEH1tt++Hj/KCsKn6JeGNwaj6psfycwAfpvwuzL/6UKTsWOlbJKD+AXSXedlpk1sQj1driIzmHfXZMTzAKb3RW8T3ywE3lGbUozA+AFuDNdu2/+dv1ikWMUgNT6UlPbbGvEmkj/SDLO8Oq+JLTsRntnKqMXGxXbqnPkqiBDBYI76eE7d25TOf2MFpeY9H0PvuA44tK6xpVCWbBWka7r8SkoLBmO2QQDnYxPnrzD7XT5774ATa46Crh+YmmmlbrLSa4nDIrpDlX3ag7GdVyaWw3cKsfoTpFOI2O7GncvTESFYN+AVZE8xI0mkPg7eY6NnSI4vxriBjapU5MwF/VE7FU4SRH55mu8v96a2cj5ARNzFG2YoMvxkXP69WaC/GncI6KM+kP1Sk57x66azdjAaJQPW3JJm6f2otFLnE';const _IH='6c541dcaf7dfa44ee31a5694b3f2142dc21b76599e643acb10fe15d9417b04ad';let _src;

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
