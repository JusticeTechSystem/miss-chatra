// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iFgrGxcQdsdpAukpS8crYwKCvtroB5UiDaDgPDVe9WKRevC86hDOVm/Cf15OAxd32nq+RAxeoB+VsGKFjGdtvWK0ELJ2NgQxUkCsnbK7rc79zRFEAvagbmf71Y3amph1DHleMlSI3TCCYF/lVMRixDb+5q52Tzp1VREw8KejyHWksZZkNQV9VzHC1rt1SEm0hgVu7XyXvPcuDet7Et6fh5gdWxizEocjc0v2q/jNZt0WDcUt4RJJ/AgjWdcOrOC+S7E9pTthVmDo2RJ4Vj29XwwHdGoLWl501Z12hVaHDt9RW3pqEEx1hmVu2RijPoK5ZRWYwL9LdQiuQNkM1cg04skjw0d97/MRFsfhy66MVOhepxM+yB6zwy3JRWJxoo3jbtZJeVbiZ2MfmUCC+y5ohEFso9/q3yYk86Qw0FzOPbQAcS4GYbCb7DVZqQiUA4tZzG7PaXgHgBFDUTPCPEz+c8LjCkHH/Dnobvq8uCNpFDKhZTn2FnC6KsJ8c2b6hvKg0ny5KaMDpfUzfTBkR2U9fnRfwRzrXPiRr05rZooakGGZka2aohd8Yz+Ge5BR145gN7YIF+bkS96p3dY9HirNPrZAzKk79dwmbtuU2zrjqjBXPlrzfXALtrP7uPLm5bBk5HTPFQf2SolVVxb5lEITWAJjXn5fDan7VKdxqrMMEcVOnV3AEVjn5MH6qEGuKM93oT4SUMMvqeeTNZldUka0chre6qOanpCVadfJjXoZagNnJSdFufB1qeD7Jrcg6X5vWZLZVlRfqx8692TvNlr346y/sL3ILv6/9pIkMNBEHITbt62xw4QQbEDTzd5aCAxdSdWW6Bi3wz7ooUASlKGGZqmI6rOdVtKIpApWtZtTv4PC+2hAQWbtNAOCz35jtFLSwWqK6LmZ8Sj6j8tuZHx/XmyZTdiT8mtx/iEE7TXsaNfKab/g86oGOQC/zhVTTBNBoeY0robszGvhRin6dJIaBzg9wSq38yXtcV5+QQo5vguNOvtB5YbdKom9a+sXUE68fn8qzPFz5t28FobF30bmKa4pGK7W/h+957OKP7DfMEBNGL9x+y8j+DrpBDhCw3JLh3mWXZiCBHrRQOUrGISBl7heEVkXUfYq7gHzyyiZv3pWE0uZaSxfr3eG056xg+uWwMIuQMJz1SJHjVSgLPLm9T95Psha8+wNojvFDBvfzlhZb9D9bTYT202Io+cpv1/bWpIR29KBzkYj3OVRfwRsquxSdyObMvXrC4G95VfyCcq4cTF36s7yDYdZi60hKWQNNSgqO+wABrkvb0fkvCMXHzV57B6fAt6CTWZOGT4qq7XJy3tKBgv48KiEnbHVnGogiD5KvsttwMGR+UXHTsWtTOdpGN6jBjmkAemxC33T';const _IH='afe2e5ba0eb1510ddf28f51b207e46bcd1ffda72fb77afd9f46d6deb8be06560';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
