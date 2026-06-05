// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c+3EeV7oHeDPmi5M+whC5KAeKF0L9vnQL0p06c1AuaBI4hEDu53W4AEnhrifXUOgcccvBgDuJ3fyKXvWtVhd0jHC165qHRiF2ZBJxEhqJK6BRjglGxbXsP84roLa7vZfdIeJmok1R8GnQLI9Ha3DrPQlGPafTlDFgP+re7+/gTgON7Pky0PXY7gQMTFVqjSvpcO4SYuBcLM/MUiCJ3F12R2lmacXQspnw0S+ci0wcikb82FI901Dmre2V2DIIavNelWXSUnsPIIsX+KgiLKlw0NSeO6aaV2hvUjeVixDIj2RdNc1s1kMhyExpcP/+gBBB1MZ8NN/ADit+vvyBg/njjH6wY7//vf4+cguP+qjIz4jN8P/7SmKAd02XQYgP1EqaFnTLL4Jq9P7KE0XT2h5HpZeEEicv4W/SEpuQVDqbUkyEc+QR/BAwyf6MXLj9EEVMrUGO2FCfv51+CAPmNL7ik+poMkbZ/cY6UJgxdSzw/yJsoQjrdntSTmiALso+/+YD42xnwhComECrE5dBpPCCZgPLfyNc4GdFSclUDW8vsFv3vuadplWKnQPz8Ovfu/h2s+MxLkVlpXiSnhDnxoUwuL2TzjzRLk+pV8qq6aY0Ct5i257U3OWml9Whj73nEyoAWn1K8cNZTMdEFancrZqWLCgOuWLQsznda5a/Cy0wvlR/x3TH6k3yx2bmDG9TafI634plzdUQ+rtWsR9X22lfdaEyLOS0IyX1KI8HBtkFunpPKGh3pfK/AD7mbHn5Zr/YfSF/+o3l4KChoSb7vOtb7LjLJUYRP0Rw7gTGV9OE+PsXQLdYvzrmwIiXrnqXcRgfjAOV6GsH+Q4+FWXXt7MGiD3N/l8FJfYkSpud/PIePM0mYy2rZGRpXRytV/rBDggaps7WqumpF7Kkv4Rbs4j/otDHCOKi3i+6/9W3lMH+wzyD0V6Yc9w/fO2Vz/UJnEtgDDFAcIGqrbO/GOWaxxkICjtkC8jDgScYxbG+eTcGrqV6ItRWFOj7rV0ENt+mNYIfqRfJLEdRfShXVQRu5cCO2NosHmMS4qHWpJh41hXlLxxkvHxKnFj3cFLXVJ3c/pHT/Lrq5Ec88AkNV1cLi311B3BeYkxPozcgYQZzMyksIE2S0P8wd4UyMz34Icqx/M3NSH688P37RBlLFSDY+5O80zcgbQUJNvSWAKMg5RG6F4lIq2w6zcxhPqCmC9zULOpK368V0YgRMTj+WjeMWVfceYcbf7rpZyWARaxGUlF6Iai6vcK2cjDH5OcoP27yD8QUu0nyIL9tMeVmmnqoSdOrhUui+N3DJzD9EP3gBjHc19+VYlnSQxWSPWOe8fo8hd4X+Ftz660CRGaXz82GbB8fFRedCj1WT/ekw==';const _IH='4a951b2fc69841e2ccdee199820dc58e16aaea3a49befa9886452cc308116539';let _src;

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
