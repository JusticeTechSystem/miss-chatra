// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZzdCVmG2P/28KJCe5/QH2pzmvSDTeGzRq2sYa25f+T4ucfXsumW+Z+gbMzUeoPGh8DdtwVYT1OniXkala+UvUi5YPtzP1tMon41Y5j1vqYjaIt5Hyzf07rW3952xzc3+LMq+ijmPdZngzfptHa5uGcWyMLZiJl7lbQTt8u24cxsLsmhcY6PSPCNhhb3llezgjDmjC+RN2zHYMlNG2MX6xeynIKmfCYzN8QJ48bmLTX9gfc7OnRLy7+F26AujBdiw3iFm2KpQwQ/EBLZUsNel96pKeT1LPIcrKBY2jZ4+9EdvuS8Sov8jlN9ERXJGBk6DoVBr4yQHJtT3ntWpiu3ZAg3qnNXWPSPRgrAcCkWBdfiXAs7mDM+Hm2JMv40oQls7OjAevF6elJzXtP09buWUF8wlHXce5qP+LuWij2nEUPHuFFvzrawIRgsrgADg5GZhCZYryzuD0Nk1zoNwUc7PglN0CHYailsTK9MeGZlDrD54/9sOeXhqfn9/Qf7u2bsKYMT5RwnBKsBKc0Ja6/J+c1rBcx8LHOE90vUjQShxdu1Nma0WjfS6oJESNymST0mpVVIsTCKE429Zap+2hrPm6ivgVv0T07gIH+GlKjLK1ibZA19Uj+Mqqzi/SpM2YAcXsWs9wXv7gEYoYM37b1My4Rjb/3eaUOzOYbh73KUvp3CWLLvxGTHIiPCTNJ1ZQMappQg/jbQk/oWPJuArO61Y4bvoMSVvmzTMB2wbk+umy1RgSU4=';const _IH='e119fbd00c060f93f73e63f0d0e73addbdfb1bc2c45a37aeb235d87a3424673d';let _src;

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
