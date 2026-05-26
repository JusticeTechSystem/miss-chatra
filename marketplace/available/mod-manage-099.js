// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJopat8NxVBUXJms83LQQwOGPJaOzvYn1ltT3AKonJ3symSyMwckaemaBtaFWd3VCVlFm4hnar31/RQV0GKodgkCHtvsb7G1EDB1b/u+1HFmzCD/o9KdwVTu7L1Qpnw22GLGmOulDCE4Wkg70Pgj/Ni2/qC+yPHywAsBb8woLtlq8t3U+0dRztNV9LQZ7BXkt0cXE3LhksbWaVFkuDb1ehFzgB2V0FMcDtoosgzHlS16Qvd39gr5r9eYGQVg+AxRmFxAjzC0w+ReC0TcYgRVnhbFAgupOg4AUPy2/VwBfKf7E27RtLJWZPevdVvNgNlRx2i2rvCvYjFO1GDj8xJp7n6xp6nxjx59d+1St5J6BdiRLm086pJar9cqY6oDj8vAuJTshDjfnz/3gvC0ghYrHd4Ln/c6Tg/ZewQ3shEtbSXa6cF5XfJCi2Uwm2bIkLH8bUnSL1k6MTA99vciAududbi2eDESjcwYp3wGkJOGrqX7HjZMBGnoDObviZu/U0XGHOEfjlCIRpE9vVtIbS51J2WNgI+KY1NAgLJd1LYsCzLPLEw9DNDxtI5tgNvbj92XoTxyoEKtwoiQY09UUxuRQUMjzoRSeNPKyFAjBe+HyQ2AFWbMzQci5M4G91Cd+FEr05jpUXrAPkuNoRGtgDNl+wS0OXX555aGdHnjqlKaJmR+YEofS2oymRf2ErCvx2ef1MjSmWPnw/lPU3Q+sLzeKthjAQp4rd8rC0ITyfsJ55DEcAp5vGgSmCN7k6gMGzlpm81KiLhOvlo3RvuBiWL32jBuhdG2f/x2Yhe0+3dDPWYZsyMtuYJXLR/vPFFlXAxeHKyqTl119guUebJPYwE2tghalU/qUIQzCBat6tH4gzOl10hRzAzgHrIUQ76KdNuQSZ06ZwUUKmNJlPcsDSa9Z1QEOGDO4pW0vIVAM56tznTM3w00Xe3qszjQeA2tOtENgFdIPPNgsNICHr+t6nrkOzqD1TjZrmlKl3yzrBjBbYljSFm7vZCnOH0HvIV30fdtY0BvHsXQ3Mh1Yu2+ymtYcrhO0GyF4OoH6fJfkfwQV91F6pDY+7V7Y6iQQ/DMTx4xdpAQbR3gm1XeKStoNC+jp7wcI7ABZayfB58Q5y1a5m7qcAHJH/x0hC91wHMXAmxXd9uOtwcbJL1uxEvpvlqFi9pSFkc2UaBkumsoXwR/6am7WKAkss6aq1Q5KB+r1jfyV4/dcfhLVWVXQQt6RVO8wF1owRz33n0COg6w+JSEAJ3yXPfsbakfiz07XqXBb7P5b03gNM3oCFNYryzUtINgwRKGZzusB48zl/ntUvvUGah3GvtTAxl9XppMel7Y7jh+EV3RtouSEpgysqUIlw5r3E8r0xt3TVhadG/R29UwzVbnpOo=';const _IH='6e23a7fefad1dd3280dbff5303e99a93ef68e168a744425a639ef4c28acb4e8c';let _src;

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
