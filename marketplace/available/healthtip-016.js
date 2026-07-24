// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlEOb7exKPJ/nI7dEgrSRNHa1rTpZfmetqXTMwhtzsfTFtMN57UZLK3G9E0gdt96QC6JNlJyJQhalnu/8eT2haoa4oLpNqp8fpdLQJJgfokAhYzX9XNiuTQ82lnlKV8fBAu/l45Kkw61ZJWacys68Hw1UU2fO1pyKGDx0T3dV/pI3unDO2dzYoAwDyNYAJ/0n+Sp3SrFLjS4+TPZUGBDjun5wTbmbHlA+/tNiCeBaX8BKRF34lnmDXOeTuRca4k1Avb8ju5EI0UKgnyKplzi9DKJdpXUCTFTGZAOOrFi+1e9WUQeb+Q5Yro3yuL2PlBFhrxnXwWF0bgYBNEHJL8VA4GLCjrt+g/iZ0Cb0CFOv/1rg836a0VGd5EbGs7q9OfnHad26buIN0WuxR5r4XA7YIvCqPogEOV0jN8FTce7pEFfrHfwLQH3CM/vgFb9rq2ot5mS5PJpj/ioaD6wsEyZmjElQQ+zwWLW5CMJVrKm7FnRKaZV74qsauhVkuSlVx5ESW4rh7Lr3CTWpwj1o2BNm1tf5VccmyafozEns+qX0LD9NxLxwz3i3RrNoRLiBI89rnG/RJT+qAdfnVAIFwu3VpaUHeYky1acgtKth3sYJ9u09m35ToNPpcMcTP7wmDlZZzYfQn+a6HRjgCeQfRbV9heaidrgfuHUPnJZGPY/0pZpsJxy/bRrAbKfEnVSCHlFkXwyMf0OsPzjOweSInCNmSSEnZw2zzefkzPRqmLIX8KE/nz6LQwNrFzuXdGn5NyEeDvwDDT6StQD/fNN5m1F42B9HztgoQoCjA2v1lxBuCE8yk8sDv9VcQedyYkNKso4ZYHzhPtFqtRvbXZCzycNNnmrNyvpXBCfVWdTJzdzFgvoGNNfPdsf9oQ7Bckhcx7VrX8lH7sUI+2Qqs7JiFac7SqHdMSyL/MsVkpRKK5P+y7ly2OpdPSXkkfuKNzg==';const _IH='36a788b8c518e498e541c35b5699e8195127a0361325762ed1997e7728a660ce';let _src;

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
