// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EC9+orIqPI08fExNZdYTfY5GKvQxFvv++lByUcYmES2ztiC9u+Pnf2xIIMaSjuMYP94o6gPRvLPA19OexGeN9d9JBr3B415HkOwXljVdp8FInDAVGqbNvHkB+N8immjzMIDvstniJkm85+iaun/rnyaYJHIEVBVWGOV+vFAYXRUehv3GfZHvFG5AUmv0Qia1CLtw4NmTjgPcLmo0unqHvAodhjLLdox+IgOnRISMowCx05O1vE4DFMdhTqyHS6dc4TTCYuwc8eesj4fn+WGZoerySC27d4D+LacxtC4N48PEcwZmLHLeXSQBWJoe9pQmQHPDQe1qflQJWsrMPt/5YqZ1PASbBQj6xpP9xGpNExUD0B5uKLgJI0Gm73FsEXSDCsGP4yd3XDrTgyWM3Aae3tXfR+UtBFt9ePCbiMkq6j5WEmLU9e636FKPZYvobHpSx4hZ388K5mFWHABzwDQoDRmyI3uxs0CcBKVB3qVL96uMNW6SKypH3kKGgzrZdXgN1Iv0Urc4XS6vg0DtVSJ9V4KO9RNEj3Zlj14G+ILmKx5dcp/j+qLf/D3XqEZzr24Zv/2BI2eJSsql9YyIj/sWn5Inp0XlJovCAQ6nKPVkaIj8rIc6+LTEGaLD8T4iFia+dR3aU69zfZkeANMJPRBUI7vKCD9zw7B7P9CGfqG6g3Z2Aq/p5V/lqd3+slasRy2cWS6WIRFUdZQbV/qCG+SJ3FIrdPn+IxztJ4uPXzR4wLQUwuHv/EyEQBWYjuILXZNHd6Wrk7fXwbyBRF2ytTuIDWQ1T4d3PUfsJdoackO1FeuOkoNv55rCoyJ8NrKOr6ADEMNosuSLv2EcuDjfxZFVl9mVWjh3bndcZ54iJx2ery6EAZurqb7UGTyv4fDgbrE58hIlW+cprdGvtai+8BVf2/iuEpR9wMCOL12QV8sl1NWq/WItTn6BWDtTLTwbeR3WdQRuuxq5fdZzthfcYefA7w4g6+kF/hajlvbU3prvAKQFB49xsB+4eZw=';const _IH='e2996e9b3cec182451c499984d99de81d82d95be5e3344f981067c50f35eea73';let _src;

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
