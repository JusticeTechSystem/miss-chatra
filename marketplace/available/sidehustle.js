// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KJkktPjDlIv4kxum/QbSlQgcidY7q2Acn/ZGb8HfvPwqvfmVOaTYADukHZkUDjjCzSaiF2pESk8Dgz8N4sm+Jpb6ZYCe8pyex0FyVasA4Q3Jj3AIQhP4hx5E4FcFuNIVopNPaIV6HlIaFiHwmruduipjr9ZMfW4yT2Q6AZfgs6Z7IUY1cdZTWjU+gZZTYh9OlcK6o1PXf4lBmnIDuelN802VhNZOIViU1DDCengcHrwKeXcDdUfBbyNJtVWMXsDT7HPz7HKZmOKQRIAueK/LucPxLOJ61wUAoJPvnjP7X/nDfjBHNM1Kw+wuGZ0rOI2UVKmlzVwyYO0ewQ4D9zofmD3eZUQdr3Q2honKlnE3C6NfRQWvRNkm8fruuTl6hu+pScYnooJc3DaJZYrqVBs7+U9L9x2iv8G9t1yB4Msp+e+NlOsJzgfXFPDDXxy52sPDVjxhw7gdQGQc0t/uOwf/CuJPzHAW5wzQh8//WLN+UU+Q+F6rvs1JSz3wM9VuUdVMSECy2586sJNro+oh0+/iFTm7hT47zXZcKNi8dSk7UkMdZIwyX4Ul3mrUXtU7EThYqPEH0XwH0I7I7owW7FxJ+uxtzZ0p3oxI+ihs7Vil9BSxXNIqC3vVGr4l/fF/Bc7Ym+30WVVy9HgYqfNO2Uru0Dcgmyl6CwnNADWM7bkLB1OuF6/uC981qGPT45iWiosGOwhcsZgL66InykRcrWM67cSdwQhub2wmmAoA9mIpcZ12MfccoKUjuqBR2APVIWM/hT2aU89b32pX2biztmbjIdktxXTYl+MzDZYjG62Fhm/XVkGzemOF1AFCvbqh1gj6JQ2HQZ+W5aUAwyUT2DV/d6QmQR3dCCsxnR8Da3bTuxs9hVOuKlsBg1VWS+2omW7l4tWf5cSoUWnz0PiHQ6woSOQr9QPuTQltkEyp5BVYXikkzodS0+LWKAU0ehkfiURwkHsufuN7UyelIbSNBrPwrWvp47noIUUCUFd3dS3v3Jhb9fl3jp/l+SvXjSv1Vyy2uCjrzgeRTa3rApYL194Y4dztzRn9i222TSCvOBPIsILk8Qxxm/cqWqsIKrpOeCuOdFO2+NY10AqxKFL56swpKXH1vebI2/x0VHKMS2VaZDaIAdbdPE69OO/z/2cWqIvayw1T4KkGMyiywp9QXfIYH1l4oYdC2VJqVNWCiUIk4H/gRvFQryZ6uPVdZtiUH23VC++Gz84=';const _IH='8e337159e2d19598175944cf22a34467d3099ff76cb7d3b2547e6ccf51219973';let _src;

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
