// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0uofhP9i3j97VlFrnuBWKyTpL5PiKs+kz3jigmZGXL0ZTp303j7VimHRKSvbfxPSVwsXs0Vqba/A5IHCQ+r7nQMw5e0vlg7bZ/6zcR9I+DMg1SeuiJjMfcGnuaJC2X3Atl7oC/4jTPNCXH6xxIyvYHwmEugNb63Evr1Tmyqombf/a7aarKNh3kvFaSQRafU5cixjKJtBF/dIEbaBPam8mj+LMbTulhNlhBJd+QUdLFauDE3VBoZ2b27eoHGo6QEJ0iKkIJhiNaEffxrcyLlje1S4XwRZ8M7awjfahW6b6whi4LBjJFcuNO4ocMuZol7sd9H1pc5NjJbUOxTIAP5YCPKedvH9V1YfaLCLqo+MQQrivLBXtxafjMiqgRBOfuYnjkBNJ3nfYzKmbPw6D77j1DZTx1ab+8G7aEhPYRgOjbovFXYwKp6H2mhqF5omOXcQ9kmBQ87uim6gkL6vyXCFeFka7v3V2kerYIsgCt3W1UjKvj0OMbw/Jke9fGe9sQKT/Mt0N83Fgw/ufxS4h8vPfP55FY/+9lW0X7CL6i9kXAHIpfMI7RefsMgl/ZKBKuS3P23975JjoDY8IO5f79ob8UscJ/KxoE8BypPaYckV0KLDeS9QDVMlHkonN0rpygobk9uIxPIMZJMLwz1Q1pZ/82mncvcsEtxqw3l0y41ShQuEtnrF8tDXuXd5Fb7e9Krtaw==';const _IH='f585f49cf1d5e57aed983afd6d2cbee08887eaadf9525dfc9c3b49d0ed4e6df3';let _src;

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
