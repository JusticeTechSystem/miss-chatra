// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRS7QJ2piqRgaiShupgqocoOfW/PDIYyLRZMh1yIZ39cbSd7kIuzSmOUQfuTdRIBghhpbVmV4k5U5VPnROLMvz7HznGPS6NuqLLXC2NlW8fFDD+5QrP16MufTejuIMZ6x0mFQUf/3+sJPLpR/0gDQSp0sfwt7WQXqqpynjPb53SS0/1TkyDYhDoOLIamIqKF1OyXe+FgBFfTQANKH1PcRn5BAB9muDSWcV5qd9oNlWwrDP4QX9s3+Wm5CnpMyJjQENtslP8KWdalc3XG6A4yrfgnQiMmXV3Y0onc3/gS7UgRp70rlX13AWY4NUN6HhgPPbKv1j3vmUV51J/aj8/Ne7lq6ZRFCZhbRiKROIZ2TCUN997iJg88rx6+i7/G9ZsGbDDQaH/umN3sylcHbMqLI1mNtlLIWLzI9MefvmWLIxTqwcVguv+AcHwm40BrC0gk4L/R6mNzcHLKbKHGIka3Q62WZ9i8r466SH+3f3Ih25RP04K+B/K2MFeS6GUSlW1squNEqMd4E8ORgJUZIw5dLd2gDSoqHXnsy2u68lRFHgjGBlKOZSz/3dnTPw911yYqH2VRrEBCxN1Gqk2257VtA6dUtrZu6txLXawgKCpEFVRREL5Dn2ho3/HFW8gdywxsZ81W1iKg==';const _IH='8b5b2a4adcdb8485e53f188217da694951af5f20e2cc387922aea9ba61ebff18';let _src;

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
