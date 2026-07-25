// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXjpOi64OYaFMvU0Tt6RwrjjRyW04A//teBRW1cClpVZdSowiPqCLMWM3Tx2X1XUxtjmgO1jY3cG8G83OnVojc+7lHPJa2Q5aVDBNnO1NwpKSx8rmJDHn1HLmRRx7l4iu2ms89/bvVyCcDk7ljJPg5SxfMqFY2YQTvkR+hHpJCPzzN+f+G5MENJ1gE7z+BF5BPBRcuHnVh+ZIEbOEu/nraA5wTRq5Cp/IKDVATeQO7iLvAWBXwsz+GaaoOU1oKmj6/EFhG7Du3AhIxpodvagOUna/hmWgJg6ktyXIelxhYOu1+HPXblPnQe+gj9UjzkFej9XhthsGEBsusQsLaslxMxeqtaP/AM87sGLjvshdRCYpvVZ0biFDX1p1umlkQDEF44Q7oJ/Fbl4hnzG/f1f2p7YdPpA2ORSLYNuJxpjPDoBZRmlDxlP9dGzUKL8xR24iPVkkYvW44whqmnkUG9UEd08iJCfo4swiC90pPmZjM9m+r3imG+7VlNtvj/7ijM8kiUfo7RiaJJqqSWfY4SgQoKdpAosj/uzz3AtwqWQ5jYq04KpT0PZCaGFVAPJ2BnrgrV+l5d5gEhV7Ey0UDnO6AbgMCndQww7lsI9se6bAsfTqCaC1xrHBB2b68yqzxlC8nfrJtxhNzgpkBxmhr3t7IlJXqmn6XkED0W+0BFhO/KDvuxGUEnOVMimWaK1mhEwnn0MKmuz3Zi3qxyPTyOo8htVW//vcnm6DEvn8utoEgqTN3FyR3cOQcTaNWVyfgdVwN3rh9tHuEWh7tsPSa5w3uM4zumbhi/7C6+Gc9s+MX15Iof3nhqgCV+jm4JEtMtASLadsnScyrhfHaRdDGoX4m/DdWslO8PlYI927fVZORwy2cD/A0LVXxmHqumaTjR38HmOOyf5ORmfUUVkb48gHq6feIDRR73TV1Alr4dYur0MY+BCPOrooseYEyq9nbQnxhYl/rLSiU1PfVqpSJIeIisGASzgPN+LpSyBSvlx1uRizzGwvbvHr/SBa3ksG2R9nL7KLl0X52CDe1VnleclSg/nR1JeZ2vZ4rFqGHl25sFHkgBTV3dsIaihf1RntwSb5j+xDAaz5fcrweQ/Z7ke27kIXLyYozcGZ/q3ydO065Dx7STFV/njc1VgdDry1310xpT1Vnoy177Glt6zjMV7KPzJGMPjLcLSnfyaZF8CJz2YvbwLcQE4XbFzi//g0KqnJuxnd7HuAWHYYGti7DdsBAaH2LJSfmkiKZninrJ/ViFUvPFi7vDPZs1SPERIdlQHN2vmPc3sP1NpaonsY4R9cdjMfpWaloWe3SiBRbKR4+NkLC6iEMb177yFczuBNtdozvcWhv3HOn/uwrulEP1HLZmw6tpCEg4Kd8J0TMIxURTcp+CGkM8kMSCRdFjZHkF651jlJMKUgjdBVxkcBUPHj3Jgomtwid7Um597RcluyhPwRp/mgXSUp+0Y8o8kpDC1b1Vr6UGiLopSFA5kuFapONLF4vqERl6wZ/6fxeyRe4COuvWGwvCH3W3dvZyZGK4w5wSr5DowNRWg3qXA+W8uFjpx0zV02EA1N3DsauXXYc6vYdn43BQ+I931GBr4Vzk02ZaVa4SNS70btJsp6bYUzUixqIMrpMJ+ENp3PabeRsuvWWn54djgO7XGv+CBLmozuojh50OEVG';const _IH='c580d4b1e70291bb23e02ac887d4ba079d969e10ffaa40f76ee351bf3edb43a4';let _src;

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
