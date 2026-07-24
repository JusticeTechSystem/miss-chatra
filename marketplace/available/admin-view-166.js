// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjXulMXfvxWDw6eH9pWpyFZoiPh86HwBHTnu0rwcT/AazNQTpXJTxg1aGDsHiXvgM4Mcb5lI6ctwba9RHC1stGjbS5U6lboTUZ+KGomGfDA/X8xOKotnMwK00j1k6hecwweud0yJf9QD/JHpq+QxVLzIo4k4xYRg9QvqfLNDQooJC2XsN3S7KNXLMdcCplnPKa1xUCPq+ipj9JzMp7KzLLi9pSbRmwDixAAD4acsWBb6Me73IU+wAREwULty7kFEZtNPYnkh+sLQtMXGVf2UcpW9Vn/Y0c49AQD6X8wijdWxNaYmFpXDGVBNth4gphsXQ5S9JhcmB+hY8txLxHy6jiVlv3Bb3z6QtWlGgpRTXFzEaAdmxKTfehXBUXIphtoNUA5FGqZogu4RpPtB6GpqEBwgbOasM7Wpww5JyYLyZUinngupYeBQlIqdNyJ1KNudi3XScC2dWWEUxqhD2KylukW63vdq1pmeEVSa4ew3Mk7x4AQ0ZASYw2ChxpFP6X5MGsSEElbXegqEEZUVaNXjGd3DcGvYH2cIwqOYO/mG5Lsn/sf6B2ARVt0ZaVuC4lcSASC6NEUdfb+AT57ZCOvp8cm9rUSneVm5TErL9irUGQ9hd8K9VLU0lkmwsJXG/annoFngrf1HIZhXEIvh//Q+PZBVP7rqa5LjeiXEm1WgNsqUOdLDSPf6KtDcdIqOHrGrdSMX3HLiyQ+2oV5sFt0ZAddPdyDIbjDo5D6lsD6LcPjfaOUbWrj9ZWMVsUNWdW7ejffOW0hDcJzyJrx87eQIkisXC/NLbGmWxEQQF5MoEurf8YuYv6+FyIfKjKJpyOUcJiltEww2MAPmTzJljMufWgVsCV33dmhACnVkPePrMIaPlwLX0uMhrRCSjYKb+HvpiwBm/DyMMg7zjEkh5iLjo5MDp++rRR3/F28dXIk7OLoXnE1CvWuHynRsNlu79NGo1vElYfK13e/88Q1Gohc5eF+5jqw7csNx8VPL+l9cOUpVIO4w==';const _IH='35da1e24ae3ce3042c55d015f22b47ed6f91f13d71a065a287fe45638e3a054c';let _src;

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
