// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4be21F8WM/E7w/27nrfnAdLDwEVzp4BxOtGQCcH9YCn+X2fm4rXuowBEOeGtkjbI4eaojBUbW9ECeq4Umcl++ahPjLIIDJpDFo8wq4RlpQCULT7aQ3Jnnt5nUEhPbjJgCd4BA2UezRSB3sZK9KTcdMUY650z1X5EelsVaKpS0MJzv1Od8bykmh2xrz7/evXw9bG2LsDQ3JPrKJ56CPEsIOjMQMpodlThrO0OI7BijtFdZwMnaKrtoJ3CXzrJEwHBVV9uk5PI0gjbUeTAXrBR5vSxfvI09r+LvDKvIN0Wu1s7moJzwWKPEyqG6xL5cMXclvh9m2QD1s2VvDKc/ivJ2JFSTxFfGSO1Tn8RGPBvJdaiatgcokzPRYZP2QGnCC0tzXrLw96x45HSBimO2Nb39UidMNXu4mAvAIhNep830KOce7DQyU1oHiD5JPVC/K2mogJtgsGGPINMCSHKBh/10fL4RzolIW9tCFeHwiHjjRF1W2T6xEHkxUFa7RA88jbOrl/qKYJwIN2y1azY6wW7AP1AD5D34Y7h1/dC/tTO0FiGtPvM/qEW01HH7mb1yzBPuuQMrwIoK6ABf+c5qpIMcvoj/p3/nRyuGejfQiAQr6MlBXnL8HzyLLy6fnueZ8xwQq0D+SACYc3Iz1bHxjjgpCgE1hO4ARv4Dv1n0AVdJ+QLj9QL/uFGC/6yFCPpPoNaTqWRk4gu1P4d9wZ+IZXsOSYmUMwhRB91kX4ce2tHkd8S7BAdw0B+kw2TY07haruf/1PhbxM0WEmEmq61RS1ezWt73x71yLQtOuTdb0LMRe2q0h0FwtwTlRcAhlscF1Xey5hlTZi0YD7/khsZoH7uZycA9A1vm7aAvGmjePOQGGApHRmPNnKdrkd2AG4c1W5Zd6RvZdnzqCMaN79teBvkKfnfGZpUwMmnVIjdSsmOaCUWvsf6xT6tYH/T6yjag2Nx+aMyk8bGgftrN4PMHXo63GFZ7L4q1lA04hb33C3mwYbHEPb4yo6cExB5oQGJFRiv+sFSXA2GPNljXRMSSHjlA+QyMzQcVJ2OgICIQ6oGeiD3zfGWvdtIEjVw9a3124yUuOTTnfXpZ3KjcHjmR29/e47OoydF+/KMYQWK2+mQLawtrv057Dk68BRF8Vi+urjslrNm2aFZkdsGvG+i57Q5GPf79ZN4grzfZS9xzcVxSUg6PNyS+QPpicGJXna3bZgYUjbCaVklOuwFCl8uxjcA';const _IH='5ae74e6b6196cad74acfba58f2ba16262a206673c5f399759fd96f028bb70706';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
