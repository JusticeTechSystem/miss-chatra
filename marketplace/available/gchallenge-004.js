// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwnP+9b74w48Pj43msC9+E8vkI6p+SSZA3oVCi90hyDF1yWxR4Qs6T8+ZpWdRQorY+5LZju1yfnMXW0CRJrDSRKM9R3b19T3YFMep2H6sAYXrSxrhMx+RKIFMVatvrDiDRao0LmMGI1BM7eaYp7pjHETrXJnPXHE7F5P7iwDSZTjxWUai0VPIFx8sOR8jrr00Ctoj/swWksRDGPV79rdE82jbhaQ1gX0FKFHyNbSb5KZ7jRHdCLEEb898S/kySzkJ3MM1u+SXwlw2Z8MlreunPsfVIsvPzlDPFsStwfB3IGK5ZrmeLP0fI1RMr/sRqXLU8QgYuC7Z5GdOm2scaofWdAqzV7m2NGi9ko17Np4nrCADJ88hLHug9XH1TlhrGfuPyJFqqEoG7/bg3LyZLLUEr2KtDuN6WbyWH/AjRr7f8edC7m8BvJzGn+H01a2raXzeL707Ljj/OKugiYauJ2qmZYKqcd6suW40Ql+6lKYnqMCYG9b8bCJsgDirW5yCQPGbE86ZPzGi/R0Ujxslm8dRqYJFrMq+16BKk2iXlAWekAa+gq5TYi6p7MG5+7zQ+5vLK6q7zeyrt5z3YdA84BcE4idztha5lZdl1iQVdeR/pJ4I6Ut2lCjEHbX7D';const _IH='a9c29e3b37ef3bc0752b653180667f1d47ef8b7b4e00d75704597fd8445d42ab';let _src;

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
