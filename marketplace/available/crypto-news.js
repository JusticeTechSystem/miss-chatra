// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFGdOl0RIH29sWFP11OV8h6q6sno7MEvnvmEZ7HTCmbIp2UAHt1DNOfykKoRFaMaoHOpSzWEsRyrPWKfseSePFK400oOiZ2KuvHZJI9e1Aon0TtyQishNRH6qWesUYbhbYmnkau7bSJ0S/JH192yZ2LBeC2aEPXGVv9w3IKu/oEwvrdYRwJ0A6Q+a2V/FTcQytsU1k/qCSE9rsg47mmbUXXK4/4FISzyr16Uqw60xrC9RXK51suoXSStle/ztS7zljdM9GSTl4s2toL/qlnoa42exDzXfcMIK984o1Aq0sHq6CYj3hzLaGzW2mKy4cxAIABUpjavx9KwZEKBVGWU3VxkFyCDFlo5JL3Wfw2SwG2LTP4ZfKn4mwpkRTZZt9bFbwD7JLAHcxO35839MxB18Y1AwAXre7/1evjyYsPBHs40/klPjkF7iYr0sh5BLFr2pLx3JjdEwKD81Z7KDN85Wr8/OupiqO14387uLkOX23UG0yHOcOM3Jbqayr5Zan9bN90/cxWb4HiBAivfKjDRlCVCGCcgwbqcI8Ti7G0xcOQe+BqB71wzuNthMRgHi42UwlAp2nyixXuTtUujsuYmM9iNHOq9gsTU+mjqh1Tf+ZaOcPtd+qyR7qZ5WTLQFSotLzJYOL8GtHi/UXVYfRa705rm7FIteFIvAOvQvTF/hOSiEZYtGCEx/HBiWmVx3Eu/PUoXszh/f39Y0FTKTSGAV6U5Sksz9MRmyjvzW/bK4SJ2kSGVZZxOJuC9Ybh2Hmd/ZfoXiAMfWoTKJ0MRT/CZDjeYgVRHRP+YNuQGWhkn39P4keyo68MJocPOnqx1Y3jLeSzeyjQO1od81zu/yro24DnZcA5qWF91aLo9FpUrlLWphYseAV2froxzDp8tS9/V/AUs0gxgTJBFLyHXqOVT5m9WO52gi2P7mh1YJU+1sYSSs8yYohpBiPFzX2YshhIOYjXqViT9rEGnTmlFiAPmKyinqDVJZ+e1sO/2v83T2/FiJydQmJEn/3JMmJX1a10wFov8RWO/GQQD+JwS+WiLZuYCse2acmqvj7JQNFDcgEiPGRWMu9SDf5uz4yXBBZuih2tRM1tLkW1sq0L8djxtJN6U1u91ls7b7Iw7ako72yVhG6GzKCeyjLnyBvR1C+lgpLKv1/NNtzjPw+iTJF/F9U/HMon3BOTNzof9XVAz9dMbHTVIjPNA8fOMr6EfezaB/z5oiZ6tpQdGVsxyjJY6q49CpmFtsLQ+hkFwqzcS5Y3Xou0saiNKsQVrpPmGGtQYbmIABy0SowDfbEsdNERg3JDTYg';const _IH='e16b60dec38be05e9a184a0d43079ecef5fec7b66a130fbb2156bf979ed1fb75';let _src;

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
