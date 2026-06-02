// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='85VGIsWlUlp3pves+UHelOPd7d5/upetQ4H4f5P/VKyrYxd9nb1SCH+3rskXPHXq14SS62AYUZLBwKXrYTAVzjQw70X47UgBZdcmS5yq293e6Xl1cVwg36MK507FsjVbOrpGa8zAUPewfCPIyOXEI5cDGQ71utRjTNWw3SBGoCnzVRYL5osW+eZWD1fmVhtN2ewtW1zQpCKf+o+4AFlKEVIxrekoB230EBNDz7R7XlC25hIdkvRJHvJWQz9BrqD9hDhhztK1EJ3ypUOPOmWLea6EK05Lh2hScITsv45AGmfy2N1IiCEuEgdirjd+b/X5BOVz+wOi1Ra0gFH7q1/SfrvuPsxFGKQQM0l6A443E6Zm9WP+wK0aUFlBd+5tTQW0sYjTgoXKGXqSDwUaF8OAJZZ9vKyXFjrgfXpFZkqaFbYjEDx0ydh4gY9IrSCAl0KqzQqrEoE1GpfcsWYTh4hDXRTxs8xAQR58u0EkUiaI1LERKF64JwBWDeXLeWy+KznR+yadhCELKXWfK/fgxgKJuyf4uS/ErBwGPLEVecc4PJIaOP00Zvs2i/CPB3aREf4k5TJ8h2pGtxfpbKQcvvt0CQpQzQTEMj6Yfo8CMXOKbRUkZ8i7n84ec1z9o1+vBd6MAQ1l9bOZFhkBeKNKyZV5SWiCyecwYZNzeE0ONYVBa1sqz8z2sokdlCIfI8vfjVE4wBabJ6Nv3AWTT0ucKBCxKWMXMmjvYfWEPcBTWAfO8g7xtSptzSc4rKtWBee+oCq76a6B8dsUo1UQwxpknhkdjLU4GWaQcoNJ+sWPuPktL8CSXpJjTtUbJ6RqR/S+4es0Nf9/qSEiFun0RZl8+F0A1flD3ORozt8a3WDdKrCVp3iDRuM9/bYuPDA6U6aWTv4g4EADefgKcZtc3vBYntYCBxpHgPSj5yIMsUt9TBDNMaQMS3ZADDPfnq6F8u0czQfbR6m8eFkdOLj03slIDGlOk67dPJ9euDWnvyzonBv57Q6FPf88FpbZjVD4Mj+6M0Gs+0JwosrYHQ8wmES5EjzRUe4ALmby0Vyy7QMH6gE8Od1KTtOQyoYPfcE28p5yfxriNJKlQg9YdDiuGfMBbNtp1M9bS3ctRZRkG6i8LdZRylWuBJn5tu/qibVbC2qnUkpwi26b4basM0Luz/vhNd5zo4uQ884PC18Wjdj9VouwFMl1uEkq/4itCjQXQUa7U9rT3Xl21nMVl6L/BE8OTjarqJhhhl4YrENu7bP4ilwm2oFcBiheRwxedPdEqJPegdeNxmjFHUSY1NPnZmyJbaYMW9qHuf5Xuklm9aXbG1rEcynfa6Tb241GK5wNolxwVpGlHzhR/6hca0V/Vwo2hles/+F/2dwMALqcNDDbX9E0';const _IH='89e64df36b0a9a5bb283d9c741fbea915cfd48c2b0db5c3ab3793b5cc5488ccb';let _src;

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
