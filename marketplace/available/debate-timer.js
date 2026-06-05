// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tEL0HOIofJa1j/YafzQuQd5KtCV/VIemTAqbOjmjctbolI3upQ55XW9iglzE1LOG98Dm2pHX3T04FBPQJPb+sUkPBzweNQDdcIJt8mw1SJqspPJuyCA1GnUYNsM5cSjhqP5ijChrOGNKevLdpXw/pxYcl+UCWWmJF/C2Pme63osqMtO85y8s92APOsXxiS7POoiLYLpkY4C2r/O+98mTVB9eTmwR2GP/Mxf3vjHuPFGiKGvzAdTrifxClHM1fw36/vAkekpmb63jx/EpUZzgSYFES90g7ww1tiDWT4dxlRIduERXPjmet2sjbJ/thPu9q7smp82X3zWTCBX2wPA17VUwigixE9F3QUJGKqpGyfituZU7iJ9kXzHCnu3XA6e/nMGv5CqodsGsm5sjDA4aIMaqd8R05LKR0DG1X1txRrEqqP/iYNn7F8cBeK/LkPMVM/ZW1ZISHqFo+vrztHhdKDUcaOnTXsMy+Y3iDCQRH9R4n32iN+k4KuI3Hd8TAXPK7XudPqnU7EZ6hJwyE0l9OFm41L3b1wdKbsfIec8q704Q2ZG43/aPVbfPQiV4VzOCDA2h5dP4+Ntyj/VE+3mURzjTu6jP/pFB7uqGnenLankTx7w9DN1HiBnXY7aGl4j2t3YmnvAT+8PKbwc0olHE9b47D7LMwUokrO9PADoEgeAAJoXa3n8svnyQ+tBwCIgsePBllj+GLOLLJMBAdnDfzxo/Z6CT0b1g8wobKOFdaa6+uY9eUY/v8/o1S2g76R5rkhN3fRga8lHuzRYrXslxug74XB1xo6BzXl/P+r+c9t378TGFwdIKTpOk6LKk4oK2ONXHWaklzGn1d7L69ZUYUT8EIruSeQOtFMog8tSDtDyAJjgaiud8I9QA90CZLFHjMEoedznJrLAQcjq0n/HIjfvraprr/xIFPSd10FER0jExNkdk/ioXOM+PE2cPl+ROgOsaFGb9C0F9S7q3b32f/XWlq53QwGDbdu9teuKDyJ7n055Jofn16TSzAZv4aaDYXTibC3CT6q3FPHGl77rGUi3nwPRQX2bl8slBXO1quhMarE8LwrgmB8vVc/JGWk737br+k+IB0lpLqUh8XF4roOVMElJUO+kTqBZplL7UqyryCPZpDHBE+bGzIX8CWiUsaot1bWxG7DS8eixUGOdeOa3VFL/uLcrTSJRtpPLuYus/4GuuTQHo2dWwQ/s+icpYtZr32rX/lKUfYlM2IeJyG1lJQRgRaBGDZnFsFlIZi4yOQap0bbIglsIqK5EXMR54lw==';const _IH='bc64d389d0c45e500a36090bc4b508ec38ddcc383eabde33699a944ee9a5663f';let _src;

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
