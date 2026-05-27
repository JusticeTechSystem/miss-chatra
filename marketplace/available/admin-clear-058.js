// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxmNenija2APcBd47sO5aR4VP7mlzEYFR831klbdAQCP/xzwwOlEf7riJgrVYinAEpB1ed3710fVic60+EId3iA9yplo/Nhv47oD5V4+gIKwvR3Cuy88QuXZu2btAWlR2uSkB/BHwR8rX4WZ0Qcvka1SF1StBXpZhR65AZGl1TpNODyPMYPpQHnHvjE1pGFYx1JDJO7tNBdLNfrWJypnEpQVximR0l63eT+eMJfDyHMjSDM2Lh31Ge32eMC5kThDzWqYc16MfzRusnb0jrtAcrnDj86i502vzMqXBmHKzVU3kiBzVLj0EJwL8bTmVClL0pFIgXfDRDTJOVciJ9tPavIrafJ74ypQX99AdRMmcU0cYMUPUwp0QyIutN1lessQe+Kiu6RdWx1sVWPQ1vV3Kv/dIN/RlFq7HJShriPhXOT0e6ZtgKFoQmIK9OucNXXTBbf3T/xToZ99DK+mZlWPl8wIazFC9Jbr1rSBoAzl4oqEdaoafxAA06OmHE2z7zkgpSM/UrTfVtoFnfVXMGrXv37L7bTiVU6n9T9l63VAwUE5KYxBPXYUon1bn/rWOf8APdXfzXqL1kHsdQ4fT3gj7MHZ7f8E+JZaq9M8j4KGNmmYkeZtgEQsOsqtvBlWEAaR01Z5YKDwYxeHqYPo1WV/alCugylvV7YJDX2IrgRx9CFojtmK/A/eV+4floGVxlic4d5x8NTm6pF4Vq2ARfmelHJwRtU1+5e/7GRim9+//a8lgcDngf0LOckRZDjfS7oUsTS+p4hANUyw68LVsADNtDtNecrpjEnociNgB6vZgl+TYK6m7jUNsm0xd5+d5sVJSROFY6n5os68zz9Bjha5MQ6v+zbW1QjWXwSEzeXdmErIRrWxWtfdjYMlhr//jGYMuO0F3afU7UYF3J0Wk1/f5IVAoLglYQJGqNvgiMB+HqSdFhtCS7x3snKCIkwDfOyuDqMaxRdGRXbVq9uOH/6o7NEUEX3xTa9tePyNKTc/k/oBn+rxvhM=';const _IH='6585cdcfe1e6defd2a836317a11479059b933f020cfa7600ddd740134cd5a69d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
