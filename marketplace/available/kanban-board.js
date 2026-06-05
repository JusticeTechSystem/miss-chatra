// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cSgCHLEX9TFnc/bF9GrYUcV7rzLesRMLixjhcV4By2tq9zyVZ26afWYwFNZVFa5GKqc2fjKESbvsh/Xk8OLVcv7YjPAQ19vghuyhT0gfNEh2p+WVG6vvM3UU0ePGd9HdGz/6Ks+0Un5fufCPlweJD2MglSTtfQ9Z4KIAD43xADU4FRG1F+MhvuRooMTjmaQL+B6AGbLmBt7QsrT9oNOLsLFwIfJgTb79wWhOBkCoYFkTh4XOr7Zn4n698R8CdfRfCpU4S7eqnw8zsA9ReT9V7rgpFw6h57lPDMQyVF4RotcMsT3QRtykqUPSXGT5VqrcfZ1Klai0OlIkd5g4kdzC9eHTmLizpuHKftNrMgEGqxQntj3S3C6bRgBVVzimYYwxyT/dH8bf2Eh9xkWBI8kFieg3jdzr5oouMsCI8X2rlgTCjZNvfuzRTgPS86P5EevBK554bDRw1Lbp4QAYq/s3Ps8zxVMPCbdZKZGYPwiveoNqssREuEoGTz5Xt1SZaPRvp58lCuicTJY7xnUjEqwSK+9vh5u6Gpy2wBpVX/T7R7UfjSdp1Ab1hEZcMJ044vSwchKA36hR2vYextOb';const _IH='16f35831d6f49399fdfa2ac2d43d96cd96e355e90c27558ed438ba65aa54d68f';let _src;

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
