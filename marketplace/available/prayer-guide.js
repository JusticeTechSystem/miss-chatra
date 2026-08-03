// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsD857VJ89kSOOxjRdDr7V9lNNss1S+Cx4LXSoDXIQkfAIbDbG9qfuhNrp2aPkotkPnfXldsSf3NDSHpHXc99m0CznaJ6NLb5y/ij1GvUDHlqp9G48/Z4NVt2u3DZmMdMivzR1cfZNvBHGxMYI7um9jC6wh6UvgJuY55nbRNUW/gIg/6RJg6+A+gM1Kcnz2aEyDIyKXaAmRol6ahmxTcl5VUHhirHpGFyuoBl1hksLwk/e9tkKK0YFIkveWKiUggViOQqTkSJGQyWcFtAMmPYa+vyGe/5Sh5pKoqcwg5+cNJ9oHrssPYOiAcRNr575z0B5591DO5ocjUktPWLs2Y4b7xXTtNC1jn2UvtvDm2UJ3ZcwJ9JYt/k9bQkCgaboUzW32gO7Xi+g2EXRdfmXgxSb1us2XD/lB0PUBKbRC7SSUAxwmDiqm2uH9a1U/o5AUQ+YoEFjXsDowFiCSWNPy1jMBVa9QyLf1ylmkiPMK8StD+b2MR/D1LEzl6+Te6MbAfvliGG7np9Qn5LICHHFODsLOUWwABMZoKDsWXxZuh+IRvtyOqbNaOg2UrYnnoIBkCMdgaMbB611WdWgVrBdA91j5KQScbyyJgeZenxqEAd43xmGCSU6+DcRsVLZUsW93Tyuk0iPEwb+88UuBBrub+w97dkct0eRaSLNuAeJSpErvuUJFN34+tt7QdZts1D1gTlBbThR/ebEKs3UqrK0YTUujetpPwdMg0kU4xeEhbBpshg30p/R7deOidsVi1sT+s62rIoqL6byqbKlbcduEakz1g1RH/8uRn5oJUymlpu8TohMqBanpRw6OcAvUNXQYRcTFR8BKatwoI+ciSmxRNQakdPqt0zHgD+h6ha2Nie0LEJxZG8CbGh9lPMJGKtJffTT666EaDl2azxE4XCDYYydM0pR/8kUxQlWxALTrP8htIvJ4R0rtMOc5KTqcJgpG2mtP/hDaACFKH5oZnvJXcqESApYpVr1Utrd96ke5KOmOJyYWuEZCyf+sj/fJlUDpYC6aaXF529HtAXhG5QWcqCAqKbpjruTvfc2Rdv+0vLbIpXfyJLwEk+eSDd0Nl/nFFfZgAoOY06pZCINLaYhwTQamC/KpEZ174a3KYuKuFGYjFuyO2cBtQyceFEAGujsHSy003Uwy2bJDQ+h2ZTXDWbWnsgydUKse4zkxCk8256hUD5AvaJpOABX7i5cUUBoJgvyBd+bu7s0vyio+cpAopIL7ZS0x7bTrnv5UrWfU/gjEsnij7BXg7Ye6Sj9lN6ZlSINmPZx97j4jNbO6r51FjZIe3OV3vStsGTgd+4MpWSyue2kn92jYU48H3l3jL55cYVi8LycEVUF8SXus0vUQNNSbgdiGZTkG8mZakhvx9YcbDbJHan73DGW/46VORjoxmDcm1RlMYOpTxCjVGccWPdhB/COM440CXDkVBKu3SgVLEvsnEQFmWcA1xbl07Cp5MpjDr8ZL0/P3ByXjMQXME36VYRewSXW+up2w4xSZdRu0+4oDt+xekCeoXo9McpYmfHSufXJb8M11yd8NL+nAkxuhfsc1srLyVQ/1Vo3d+d8f/28NvHu9UxpBpTBLMI02xe50qEK0QzkzjzE2Cseh9Sq4fi0sl+4I2x0V57LVZHfc31k8ZpcnTD4DgE/GB7nvJfCzBnf437PuoOsIl5XRQ99WgchcUE41oHTSsr34ZxpRD0uCE1LzqAppKietjZCCSkBEbWLD2sQ1xZyWFHkOjuT41govP9nTef7Kw3JNp4+C6iSsSpHyBfiBgCQK/LSAKyginFfnGl6QpN0p4HO8Vud/Q5yP1y4a+6xHR9LY8jZ';const _IH='8395d119129a9502f2548d21e1eeeda58b9f82795e7facd0fbc2fe6a161bbbbe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
