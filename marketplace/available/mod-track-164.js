// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8Gf+UgXvLuWfKVkknAVvXluEaWLb+FfGXntyAtIKPTxVGpTMwfz6veg+N4BFeiRWQqUmus5kGUK48RXzZkrovagMEiu6znw3omIdoXPyxQAVGTXva1/P80NV+VAw4XimE788v+16vc0leVfi9CvkPyH8CH8bP1AtKdBNHADmmszOUr5HjxpwJG4bxtHHvrmqr/+ct2DoGJyWRGcydt5GIHtzYvHhoyRCXZervmsjA1K9T3VUi8Qpg2AypB3r1xYzhSTT8Ag/m0Nqat8RG7GtNbT0hlaodAYsj5PPEWKEkhXlmyhYuiLTwcM5tHMAuN68MXQWuIl1Z+XsaXSyd98gh6vyh6Kwps6YEhFatsJvYqQXpXmFUzPDgia6BfBagu5JsGbjvd8qVuQmX8+ANkn2mWFTrtnurBaIywFJvg0DFmYiOlEcqgV1DnlZCb99CQnLQHGvWGFrV0mr6n3zfLKKqFFXBi0tXp9itEyl7FTGSi+SY0bX1awyV98Tf1Qx6bX5IhU5F0jKRZERj1xM9awXsc8QRlmFh9jNNiAkER9Neb9gjavgbHd2CTpDBfzPf/vmQV3Abp07thtnsK7ME+dgkPT4t/CdVMPYve5oNtcUKkhZt3o12miOKrGVRMrbmqPOlqiIHvnHYhNkDr8bF3KOhzMJofpGo5SwKVx/nTVmgHP7w5vQ37RY0Hu9yRiwmrmgC6WjPKK0JzEVKCMpCp2ItpVBvBkQTm1GIutMl06hqE/2nYAQDrM++aQu0tbYUAZxz2TmBEqyMvJdcLotPCvhqn9TIW7Bys5RJh2ShInEpIiasr/U72WpeO6z7oUfOO83Chyq9dAwhM0CVCk+u7MuvyMFb1/ujyyL6DALSCLYP47q0EZ8Z28loncBPb4mbRXcnpugWYXww3Dy2AeQmRUa2+A0sOa67/Cow6nipHjgjor+Dp62CNZlJfrNzmi+wzzMEKRysbVJjANM51OXpFa+MsTDtzt+/rGJrguTj1PZw/qyOHJmRlDAXC2ff81yI/3f7LZn97hnz86RuYILFwZ6yD5OnPV6Etbgmby+l1a3ExGTZpzmMyevYgWeXB33PcpFyg8fTRuHK/2tQ6dbNHFWrs23eFInZwfrc/d2lLxqPIoQMqvz+xeklwOF7Wu5wW3q+KFfgW/TPa5P0OuoVKYdK9KCLVXJ/w1QEHI1g1fxPp/zVGlRpRVOo50Wq7EfjicqWFC43/YOkVCbUJLNieF8kTuJ8Do7XcFdQFjuerlycadLzc0nI2sgYGTJ2d/pys3TB32ptwhuGv1jLMwFqX89jdfWtyd5f2y8rUAh8U2HYJp/aZOWJ8hbMqhzbfCom7ta3/4nlF5lXcCa2CsObzIlc0ZwYSAi7XyizIF1hujw=';const _IH='3ae2bbb27b22a2a32ee60e06cdb2f15581ad4d3f692f431f53f5824eb78a14d8';let _src;

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
