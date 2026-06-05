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
  const _b64='ymR/OAX5sVsJOF1zlZ6Zb/5bCki2F58ISdpVyN0fO4g9jaRhsqskL4L2ZZaLa0yhD9gXmI441VIfL2NnMoZFWy31wo9h4+W1w2g2IeAka6ZYuk5J4PRddlrbpG1P/8dxyTYVYd7vuCMpptKW8QUHbmss40QV7KcOXVj8uD3wc+foDjJw/0Yr1K+XbnDAymOKm8xZqwnwYnSczCBbEU3+ZSkoUXY0KuMOiumIpKbkZdmw61Vx1gioTXKpDYfbP1iSHOPfzhuiwdTBm/QiU+LtIUJvMb07SXisTs+1+Gi9U+xO4VjE7Jw9l2r398nWlrBoGBaApFQEdaGXMMPQN6ztjhSgxgCnP/vUeBpUWbj3fsRXzp3QmRQD98uILgnR+mQj4b5Xeyxiu/qr1gwWxQKKOzvAsnyHDNqTOEb4pnsqZdInObOtwDZtEgTrb73/P3EljnM+v5lkpRkVlf5CW/ekZcBIa33uN/NZESAlUxWrdhTyYeLkqSn48WZ+S1uZE2zp7vvMSnGn2r0adiIMHDpGEkc2Ih8gZTxwlo5ov6frpxVyF1j2daghK4WGcVW7OOsURb4wAs6awoJfHjGyNscTnF/9VItgPTjJv2GcTUglGSfK17piqeJVmvo7zcr2P1EiZMB9kSA8LEAz+8Xb2mZm1pZM+IQLK6VdJ3Fd+oAXHm2JoXnZ5creaZnEmBYduUVDPeQu3zYh2pfBAPBVHZ8a6SvqYsWePxAfMNTlTTba7aPDGj0bRtoTqJVqDnz4DM/IiciKS9zA8J38Dgrf2gX8Zmk0fjMQDxID7X80RAW0ViwNxxvZG1TN1YVRGCrJzjKvF3XIMAV264i0b4PRcTlokW2SfLzXXQXhlYPDxqC2p54/gt+yFsXUEtP9vTVzyzngYpx5cEwumoGYywrGiJKl0X16dgyhqUMgkDxOk3LGzZhX3KkiBLrW/OS8PDLtBfkZqWu8Z5KNg0W8tO/piaOS3FEpOvbpJXvJsIC4qXoWK1t/qeK5lqrQBijnSL5l/kcvcLCtiAeBYK87/pE8sw3DMaqSY5uPxiM4EakHFXIH54IQ830V2d1+r+EQQJZZ57gIWXRVQtU512s5TwTm7CJ5MrCsNZkT6MlmCOjM/BMHLV66jF11N0XG4dQrrTaTGqdERdZ3de5KHEcPeApaOKPGf0UJYZ/ung62sWeSmvRaJpMDfySUoBpd9Jyx61RmxXwRjRrhI69pWLDJ/Dz/l4gQ/JdvIc/r0T74NCL+51CeyVMgFlfmC00/wAIkbCVXYT3Xt7GNOkg5j1LjHyDzEoRrriE53+mNXp8RYBtPw1nkVlwlUV/um8JdSdnHqqwO9UKqaH66oFRE8kWWePAVvDKR2MVfLt80d7/wulgGuhN1';const _IH='521e46afff053229296dae05525cdc650045391c78e3211b34b2ab5b318bfaea';let _src;

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
