// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4p6ylZBO4O3YeFMBDXgnQOXFq8ofBOKiObXVne119FXFmfNMB+yGSoCvGnQtTYh9PZq9rGKDHFbiRuv+q3XEdmyIDVBFbvVVHk6D25e2L0XoviPUoJ4iglmRq1LBPzg446z3XUSgfaHwGodartkncoLKdupnqjaV3ksv7yzvKyQUXxxEap+sjsSQlu67S9Awlwi28z4wXmoifQ+nP4IChPVw7R6fRad8nU87y1joYA87E4OKcU3tDMrgeEEyz2dx3TyvAwYKtW4dW/ELtPds/GQvpth4FW1nKTL+8hZPqz1BibdTzKPR/3VAfXVi/tlK0bLOxniUrZXIqhBkUWJB4T1RItwF2bgQ9wGX2kRBkQ9DPj690qizY0d6y/cO/jbYU/0eVLZGSdJd2yo4iVcaVr8Ry/oB+ZZm55rM1A/nJIW+ZIMxDzqHuQyK9zsaYxwMf4EyAaYs85atqJZZfLtiq+oG3GK+PmGCr0hyJK97oKJMgNtAS5GjmXi3tmauPl+BA3UtivD1UaVZ9ThFMywfvAYs1/oHfCyX2iV0pz5HjCzYyfOuJah9UdkrYSmD/jRaDS9ytbjUZ3pXYKi2QP4JCr2QFrUavCIwl7Ytxl9EQ1d6hPYCqpYyKOKRzuQ9FIE8WBuinqqNu0R+9J+6ecjI1iPj6Tpq5DTGhN26pfPTY2HLjMJi9G6rc/wV4JVZYetJDRz5lsUoBQbUFHQXiz/Zeernv1bLVMiOOTSKWMURs8Ru1xiCS62Z2uLgGRfyT13quRNLQ+vYhVFR5Q9KIEvgZ2OfuTlJO4oINJbrUK4MW/gArlg3/1FE9kQaRFH6f6LTso+2Oget7ewFWdkVX1RiH6e2AwK/MBb/w266rtGRxJ/cG8+JXcUjt9YRiLD/UneELV7ac6t1YnJsoIonzpLzJ28vevyMjzfDjrSQJC21y2m53C+jt70kYY9G9o2odXqkKReN+G5T9KRU9YTAhKk42+2QYx7WxHYl4FlRKmrYeMPm77KN0bmomg2AcXUSF9KX9EcReGJYbaSzBp9RFGWfATL2uxGJULXZOXpKghYHVbJ9SBzUyx7EJfieTwvb4Z6vmgUnO7ocsKKjF9qd4NaM8ePhqucR0IDyWSGK7JJOLI7QcY7f/d/J/P+ikEDVy3oU49PZP3DffobusV8+X9iX/oKhSAHo1Nh9hLcjnz52hWN/GfnNlmwa6J238N4hYbmQB6m6bjV7riOEu507Jg+QTLC+uhiRI3HgM5v+aNPdxnp6rIWNsvVQxFZb4TNZbNYZu2cnUzsIpQfbcC0Sq0vxV8TNhskmgVRU9IwyrGoS+/mshrylmXaNMwc9rvKXtEH3Vj4zgcyC/rOWV8nGYI29jBBEJEz2zkTYo9ksTQwj+R1XFUVjhsIBx8PDM/aLybSk8QOfed6XZgknsFLs';const _IH='45a9fbd7bdcf7b69c7438d53ce9983c669f0ac10e215937e0e5624fdec6eb186';let _src;

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
