// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NV+7JKCnpRLkRiEcnB1ZXhyW0aA+VK+yY/KJCdQAXNOeaknp2gAcECMb+dXWB/REhjOPelPhv3e8ey44ypeg83cy4G7MSP5weohZatMJSKyu1m+vMk1wE6ETTb/Li57MNMf97HbbvScG0OszPky12pLzf/wHNkkg4+brLPHQ+HPCVhdx4Zpw1yHcXGOoiJgAOyTqGrydFbBVYMCT8IngeS2PJkNqYEazYIV3xEiPqayjwS/JnSUJX+rP2hyYvv+g2XcM9ObAj04T2e9jpbmu5r4SVxxdhSOTivnY0mR5uwPGfiLdb3f0Pt6AoP+SFGcdEXntipFQIn2as+zaVEImcDq4QVxFhHnLjLZCe1GVie2iHm7VzuZ+Ro+o6hx6DkYur3xRZU8MH2YuvSM+il8/wVSpwv/kgPuOzNg8/BVlRrJGdUhHgaEqazRKuPMug7UrCCN9fwBBQtJK0Zvuu733xg6VDiXXv3AcO8RJrZWy0TuEh9DDCpufOM+8IN3K1B8aoCHs3vCLXt5TgNJiiMVnMS96Ud1gm8+m+zb/EGEuKm3AhRwduk2ZIUubKH9om4C1KqbDHKx9zzZCNWyqKsHFMR2X3KCTs6p7ar7tYK0HYhE3DHydUSvBFhrWtl3G+FXYq6vz3h+OG/EwZ47MUTnheh0j+oXIOcjyfNyBQsVy7vst8am9EyNw38J+9aXUeM0rnowH5NLq9FHGiLLs3GfTs1+TqEtLjoWjSy0iAGt/26Ocjl88xjG1mIDspcWEVwHPw9R51A4NIY0VYFogkTkaHWk4RRUeBuMHXducKh68w7/f+HxCD49MlfwaoTPYE5IGttN5ws9KyzTn8i3LMbTxAXTODGw4NZ1UkGtZxvfBRHBEUoDnV1Zr0DuWfS+UZelw8M9IWRpDp2f4slwrm3YdQ9jqtLIez0Ks+mbzo6BxhXDsJYSBkAtKIfpijlA8V1VSk+FrDV93xpaN2HdRRisdUlfa+z3pQtcSLkZt63oPFeGJeGhZ71untNvpwYvmVLMZqTFvMmyex4EH4zL8u7pT6XMgp7oiZEH3YgsN5UVrca97aoiOlM+83eKmXxvaHVzJnRg8NPuzfTvqBeSP39swXkN1wIGJNR2y6S1jB3YP7H8tkE9e/v2ImXgmQutPqJmpoGWQUJ24CrZF3X0Pzv48yTqnvbiy4MKUQEAdV6MyPL7XKuMJH+ebkopoKQZZ6yPkUx/wT+HigiGP6uelWmCbLJjR3ilaLngFtjajKRM0KArO6JTwgWUEYYm0JapxRjJ7iv1WMhRgOp50cvbCcVhPWmciCUHlzEPZ4eKUZossyTBxtSuDtEkcgOjcj5tvLSTJTtXwc8DIIJCRMw==';const _IH='6b90902e34e61a99e7db22d8b47e4a8d4a5d1fcba4738983e3950e893fcdc487';let _src;

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
