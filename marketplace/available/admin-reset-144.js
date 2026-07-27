// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTk0lGH/g/ATQzl82IGDh4nCpy3X0HM7v+BNaN9Uxu7RX6xRLBh5PDHvLmruZ9RviJYFbl9+36Sm/WbLvmUpQQg0/yEh2XnStI5sz9p+aJsAYqOw5jUiues7Xlk2dEb8CCshhPoOgaJfTSa/ZvR7VsOvL94t3ZyYo4PycgAam1OZRx3i6TXdJo1vl6iH3POilHMWvkQ4g5tOxvWUW2Xcm2yeLHtH3g4iZiCK1jd5orzWqdybcy0PJ5UHr3ZP4EujxUuD93VqjasLcPPezYNrvwJoxNOIEB5zA0uTzo3+eASUNBP8xmIeJihznRyDd0T7yDElG2/EFuDewYpz38rflg1sb/+XgAXrKTnilZ1MdtcWm5HnprCf9H+hFC250tMDwzXHKgZpJjEl7Q7nLt0+/yCSuhikQd93fNHae1Sd89dFd3VRsHrDZdsbHVw/ddWy3tg9+jJqU8o9oa24bkyFk28p8If63Y2iGdmp+d6oTOJEyL35DBLjf17qoHpkbkzMndrxKviU5XqfZOX9hTdH6eDvETyjA2wNSG8NKJuVLM0il5dekDr5NMWVZU8OnvRi3iWdSWcE93nEGZY05QI8u4I02HqddgVVHyqXy/FmECub4yU+pOgHs4BQUP9Q/RFm1k9g1ZDOLw9IkbXKnOVuBxHFfiYk8q41ScG4x2SNYlBk+WixvCkzU/VoTHj2lZ9SxzvbehSB7+iTk0EIOEDYScgHY8p1T6ezHdvLT+FkgbLNxAGR1rxjsWt8HwPrzujrUu49CWCb+FohgtU3z2jlWDlmbvg/gAqW/YK0ClTq0A+CEi6YdH9I5E7rkTuw3nbLtYOUQvraaj5PjTh00CQxRFWz9qVca0Qdt8bZ4kcf2Vwg7wfad/3lHF9iR9MFHM2KeHJXmmR7TmjWx5BFWU0soci0yHiT2HKUYI0ASEPHvepHVpkx6pLQEIxveto0XEg5elrdcBCJlbSJdqoEdfQBMNn4L1OVA9AJgf9Z7BPuyqMZ4D359p26pye8U8=';const _IH='e9fbccc276edbd4f91d3c3f9d74298cb0901d567225202fd71bdd3dcd057e10d';let _src;

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
