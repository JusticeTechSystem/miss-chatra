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
  const _b64='T0JGdjRB9zlEHFyAx24MWaSLxSnEbnNB0qQv5eSY24MRsNcTsUo2b8crhjDxA583tj+h3mXTShk0LqIKXigGLV4Q1c/XR+LRhNResiGxzn13R8FwYbCpJ6U6Sp+S6qxJ5ho1/RFH2uiwAS0EKIVVDB1r4ePqw3fcc2GQRg6R23k8s0v2X0XrOtlVARrttLyw85OE8lJRVkWskpxp4Ywuz9qzZRJpBUnWIx2SDmz16InkSIeBW1htbpwQ41I3/xQhCvrJFkANX7jbu55sl4PkGT+r19k07mQ4nL5R+nWY/LO0sZxpAxa+shIgtMaPTQMlJSJrscRnEn2lMYUj7Juh+Twnj7dOV9ksjVW1IrY8klGTxl0Bv3/sNr83PPFR1jNkOaDfuEx6oteGQTSF/NWJbrWPxyAge2n160AFK5HivWwE/txNQQEMVm8mhSCr1TSTECrH+BZdDyTu5IKR0sQlT7pC5vLNmwhnfpTWtsv6bkjsy/oUInPKRkwU2Ic0tkP86MS4vOWym0Q97XcVFOlhNAx39mdMyZsPVy6NJy7vJAHvEjxK57a290SblnxbfTDZeSW7boPV10c2Dj0UPqbfHX+uqU0h7oHzWAIKHJ5H62lrViXuhrAVlL3uTTVl9N6mgaDn/v3RFSMexq119OWIpbwnes/qLKyeSP6oIk31tK7aOtxhGJtfa+VcSeL71qDUKgCrrZ6gHi29ieMPQe6NuIYdyrBEUN9EbHk+DmrJS1YsEd1JPpZ73AcqWk2fU7+ywwrx35xo28K/m6bFa+PUH0E/ARYWprqJzLFW++KfgV/R7vASsljtOsbb1viuZuONKgRFzXFjwFkmiTudAl2s0Hb52ygiqkz3ichNY0ThP/i4fk93YLir1g2Q/XxlE/9TC3BHCfBvEMwxXWYj/MtT755UEK6KpAyGbEsWoxB4M8RPjjlPatfNGCPCrp/arUmKJVLUWYoC5QlYHksmpMhvkEbicN2A774WgYAZ0fwLqMdauQSx86DlRFtdghQo5fUEaSCTWAR+a37hp8SHPuG2BCF25JHUoragG9vhgcz9Neg29sjsf3HZSLWRtS0NhADz6LnXG8Ghi7x9dzSrvnDo9uz77vzL/KhZg3MHGNw6HeEoHBIO+WQjkpX4N1j37tTzcKUu7pzxsg3azFD0mIYmHjgin2qqnmnQmEJG9OLVfP70L+AZcx7atH+GAGsAWZLZZ6KUVQLOfL5mMLscYEahilNbQePQTSPaT3pWxgvsPYF7gi2UaI14kjpzL8d5Rfquf3B8iHrZdmB4JwwgvNIETK+XJk8PjI3XolgvW2UA8Dr16Iku7v6EL2HLpcxgWc6rniKH4qy0n0uJE80Xlzv3EBoIZ57I9/31twTFBJQFZfoUAAqBTILJfjI0hLuz2U5LAeYKuidVng==';const _IH='51b24d57ffdd9ada405da7b5ed717ebd0fd195cb58bb1b4ae8a582febbd462df';let _src;

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
