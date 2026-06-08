// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='La0/TCpGDaYXhqMdOqOK6PCUyEGWaujtfFdnEp4+aDH+FLAsgn39zXqBAeCH6e3Ma+4cWelVoSvGjU9JeVzOXklbH+Jf5Z0M7adh7smo1yVEh1RpaSomHvyQ/AS6MjWDNslguD0de7itCxmoH5WjjZrIHwxZUJNAQly9lYXLvldYnFSgX1Mv513qx0AqyqIQazC2wUMQK+XyAsuBQwJnyx1USLaneflMCxbEqDJmP1Dp5o2lur/Om+4GvHI9pe5qCRtPb+grgZmShsGB2KrSK806QtGTbKRxYRKsadULhumzjoVH0+wv3+KuJV5J5EBbWODBYHLpC/daNyy7jbuiPMqCtsXPHEG4Rp3ywboPnkhzS5dZXHxwnCaovlf9LTNugjTDqFQZmnfM6LI25beAkrMAVQlraEseTCqnz6QURYk0IE3BuuxSeX9YiL3QtPxwalFcOeMuwsHzE8s1Kk1Il6bKbTTl6fHylpVXXooRUBgIcpfVM0+GrKQLox76o8ZX+ZXQuN3MpjYtxECebepKYt3A7/vGtWjQWqjo5//w47z6NlWOoTn/8vy+/OJEWd60q7Zc2uGuLmgLZxYwFOVVXKMOQ1Upiy6mGy/NTZBvldMSbdoN3xDPii9E99Y7ugUEkh1PX4RqoYnVgcjF+KQeHr36NIrBQ3GuE1GdIOSrX09R74LDk41bjLdJE6n4RlyBBiygvcJahFRBIW2W5rmA9bfQZGHJsp5K9D948Qnj8/3TFubNvzMMUIDyiKHwfBpAPL94qZKs84DJu13BOFD2oR82eafe3FVwbJ26vD5xpNj2sQRy9zOPW2AX5kmnqJjmbCcMFJFkxOiQoACdRGTQqrVRR/ZLrpXZO92FV8yOPgNPVs9ajwYHZ6N8pr1XbhfVOTGaVydVvsGxYdTKt4ufc+Phumkh6L2zNhEbRugavonKJTNnuOZn1WJH8BKT++5qqNa4UaxCfWx9HpSRbBaP0PEt2JW1NJMoOZwjn27q3DleohMvtnz5x1Ij+54HpeQHHSrxPwOl3FkIyZxAK0RRJ8ylPKRItS8ZDi9uQ9xFJlYgzQ==';const _IH='1584a8705e24306944273a1148bc3a2c22da9774e9ec496c0d723fa323de8cd3';let _src;

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
