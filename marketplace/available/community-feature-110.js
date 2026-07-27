// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUpN32+i+qTo4XMDDPakEtNz1bloPm5bJIu7bnhFCwZGwkDDSPtmpwdOKUcSnPzpvbvyPpPK55gswDu0ueQ/ynL5mGR1Rbkka73NOOKuxBFf7YrsF4N7MWCXa5vKsfxLH+vIDMeI3EnDQT4RiOa0qaoLZeLvZkkw8ZttQyU986xBeoVTC+AzujmXRxN3jLgxorVFkhVnxOZT2+0nk/X/ikC5F/EghkO9D+YPPFC8Bkkk58Kdr1ce4YPuVkVNAQ/WoUl62X0sg2ogzypyNkm2T4Kiis7yA82vp39RekZ/MnrSP2Q8DcHGI1rX6hpT1JBSevszkwzarUDy8m2bCfr6FL5xcJQWLbO/xuiETYiLwi52fG/nB1FElNpWiMJ9v+vMQ19N7FtvgbG/P8LyDLHw/YHPURfutsV9EQYa2xkRHzMQpFDCXyXMRTGhMet1Hv8soj/EYoXeE2tYVz7eUITkQneNKafcW2yM+AvuraMty51wMM2tI6bwwnt0014zvgUx9dZKmQA+Joiw+d4izrPVPuEDmqjUnirvPHbYgFW+s0hd4RkFjQxaDVDXVp8yuNy6c84xLtJ5nyk+jlQ2UKq5VYJawglHNij5oWYojk4kgB1LbeoSpJ9aHokyLm9/SSwdnzfsomfABxaHVxdG2r6o5Sm2/c4lrBAUzV4N/EisAmM1C++R/57umUwDLBaPqxKAGZpOMBvC4Q9D5A0kXu/FLXnpQiP6R4FxAsJ7UvTkrXZEmiIWds4TZ9Tec=';const _IH='20c31b635c7decdb1bcaecbeffd1afb1c6135ff0696f553f4564a1836474e227';let _src;

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
