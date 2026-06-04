// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBYd8LFrg7KAbPlbzU0OHhY+VEIBhB75NvuCk3vAU96q0fLSIvHOjyGKaHWGOPRt3OcqRtZ8jIZg/g6eP1uILaZlwae54f0hqqWKuyNf61tai9ra3pRbFaJXhR0fWXU9jk4l0XwxkmcYc1Oj+bGOPsXI92n5HbSrEpdwWqutuqx32WK8hDi9MPgO9ryLcNycjfPzlmyeFohbhWiagFudM44XV0DzO4h08vdM3KSu28hdCKV+cWs9H9i9i/JPpbaFFEvtZgF0VjRFM0TLiScbPo7EnSCLVoIduxAkKzEsvQGOPZ9vzG+tei4jPMtcnybVVCzLUTxf53nUvzywzp7lg7gc7yJFkx/JUcBWKHyZzZqs4LkqT36J8ettMwh1d3mJrrU+vSBiN7GSppEHiYMd1NF7AUgM8Vd/AE4IIW4WwEMAhPN+oJYLtQ4aUm9gZ6oyTWFZfyQbzcQKXs8/5C5VATZ28Cu/WLW2kZyEN/J7Z43UUVnVep6Iz88NY+J6d8FYgRWAHcIjmH25kd2+eIQIFbMXU5Bz+uN55VF5lfsr7+QLOo/FExT01S64SAan2xlqIn+Jjn5uPXr4WKVwHWo+u1+s9gCw0FGUTi8e1khS9YTwh3FwZbDPWuLvATEFJm8qp7H6P2YrlDKQozFRWlfOE8z6YlFrmAaP6RswISDbI1LHd4BQPenB3AKruQlhGJle+ln1quG6GYHxlcoFJC3mN7tviUw8iXS/XoRF5cTZmnFtayKQjW0N2Pn6rSE43FWGfT3PvhVMrKUapUfyKyArIWcvy6RopEgntwyxfxhYUtAGHir+EH8i8JFMCcXSyduyO3iSvyGL564xngCMXIj1yhxAGpiwDCf7Q62THhbBGcdyIvHLGQc9mxMTFUbkRxVFUbtDzgC1LMVsWjmryQkkU/iqBuZ8ijDFzzRhrktbBTzQ3+Kvm3xdByqJzXBqZqPzp3RZcrnfnGv22KeficFjOjnbXti/Mydt3OqnAzQ3JcGDMR4qvOKHEdwX7EG8zEW9CxGOX+B6K9ZNHUp9/WjUyCPrLuniSLb9RjvcDYuA';const _IH='4040f4210a3dd805fa5c72fe1c1617f24fd6c96c3ce17e8031b7ded327f74cd1';let _src;

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
