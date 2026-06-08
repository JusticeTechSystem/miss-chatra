// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QaeYwtmeBw8oKidhv8Q1y4bJ3z4jd3ssr0OSOdzqf6f0TEFguCzgJ93elAZhHVThr9p8PwIed0eUkpUCiIy67RmBJc9syxXJIB4MuxyDiRFkfCHoLWtI/maaA4xcskUEP9psPb9mfvLqjzsmegtHxm5vUEmARVf1DyPazmBHHXJ8Cbh/L8bug/4vVKXVIEjTI9RGXwZfq9tfXL5133ZNrHFf5B6NJRVtLLh++fdXLy/cWfZDr0q3Ngzh06mCmCFLyMXnYOUNKwMZ6ZrG7XoAwiGyQ7fGtnkRECQv1EFunzhpt1q4mjCDCoqGE34jPsv8Tn/i+KbJqwevGNqjaHAPwgURlmHsComekzMD6rfApElL8I4zgYJVP3vjSQer47JRlQ0TZaq8uPYlbxOvJi/luG0T68FDE+uSjHgoOeqCeD5x1hNaMzPeqjzFfuzuOPLA3GSVpQJAwVisAuUkwu0Gzrdmswc2kuBYJo8Mrzg+j/RYK0JGaHKfs5QF1FF2gkPfBoZQrGvStIflnuUouCIAavFrS6s3WByrScljaO1hZNPTKOLDL3NbHRFQZvU4H0DtuyXLHdNxsyfMcmsyzNf33xmZXCP2vaPTD/p5JVULZAies/2eDAz2ilnZVlovuGFZAsGIikcCenghpZmJAAMW73gmydePZ8OEeedfKeuZupw1Qy9BA52wcG83Eblq/6GuYMmvsaeqhLifh+6uspGBTx4XHuY5a9fk5TcYB4PAIVfxAwUecj9p8j1x9WvZ7qn6jCKVr9aylfSu0iRUlraXyZZ35LTu5uWZcSF5SDMb78tfdxuxgvdsqWaCi0d5r5/lyOz2o/gYg25amhLmKMWWTvC3asrHCk4LabZkdGI6oHJaOPqzJbu+8jrjL4HphOf+2PDGWteVkHEGZUkJqC73rWhpmz6lP7npc2Jr6jY3HE2ULu6KvV42EnRRKafXZ5IuvyFUF2Ui1BDp95GVa6ITbKMlu4HgcH/b3MlopLFh96xK8vQaRfDsyw4lCxvliHZQ3Mc/+NDcadVj9cfHlBH9Wo+64Ne69wzlhRYrokRepYLqMi7FeWel5/vLV4C8RGt58Q2wi1sRHnoPUxexKF7qVaCUWxf5+BaoTaDlnc6qRLhqxjMqVixYsstG2+RiPS1RDwY/mXYE22JFOB23l+Ho8nPO1XyTIlOWk3XvAvQYp+k+Hebsbi96RTsi0jlLcUDECmpNnG5aVoQ=';const _IH='95c8f450e23fd8cc9dfe7fa599edc485f3651caab5582942cd3053a2412143f7';let _src;

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
