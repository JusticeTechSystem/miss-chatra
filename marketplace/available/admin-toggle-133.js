// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='23Vpy58nfoeb2GPyyLLgziB1R8wJoVWhOl/1N8WkOvOQ7hdg4E/waP8S0zFJGy2lINBbF2+O/qk+0t+w0ST2KYePrVuuJk0NjAoHS3GJX81kuV0rjQz20bTiI1eRAoih5lLqUhMzKlE2eNBKNIlpQ9+afAI9tKOmc6VPDzq/rKX04VLO6WABeuQqzIPE4SSzSWBwBS89NKUpSyFgvKOt6NeFL0FW4kV0aNDrVHuo5RLHemUYJdUNlnOjN9iejL2sfJQvzJ3Ueg6Dzz947wXgJI28/jJl2neIhQVODyWUBiXEGdYAtn1JONQ6kB/7t7yBVwC7MIVmBNfHn8sF4vIqGRRIkDRSXta/rtoVfl5a3gUESPT9aW30NVUW2cWK/cQoEUFTE3YbD5VCfwU2qVyfWnu84682rLxEazoWiC7t26/RuRGIY9JExN7IdcTgKOY6OF6HN3KDxgzWCaT+PFeh7YWXRacGZE5w6tvXm/F9xBmB95NpGJ3f3wjZVtOO4O7Nx/ki8cT1pCvLeji2rO1tX+M5pqtUupdymA3qB9PDRekxyRxOL0sPHkADnPDxFZCaF5S9Zx5S1koAfgbmaAf0BZu3vMOoobgw8bAcVUPCHlthP/8FCq1EpQtFGQO553BVWgyUPPz2Yoak2IFK69A2xWBZJKIxOn2LRtlEszN3PNk8puC6AlAWwMlnoZ1rSH6VugYkRvxzrm85RXQ8E4ucJYCQRNE3NbJPP+8XmR/QqI17wdlktxZUZTb7f1GCLl6tv9PqvegDSOXr7tLvZvLavisrBC8sWXNYinf01FrFzv8q6L+RzCu/MMJG4RRVIcRwOy93gErX17jj5TupNjw2ug2xT9KGUBkBxLzfLNH1btcA+4BB9S18H5tayeAijiHy0C3xYsws4kqMgBLMGLARK0TrMm7JL0zxc/JnFJO/R5HGJ8qeqODabUmhnS0FmiNUmQPODE0MR65RdT32AB+dRfAo0qVcyOn9+RaX+XuY7/phKv0ZX3jMAfPk1bYMn2y2tQ==';const _IH='cb749395a570c193bf62d7b4e5891a891a7e37aa0e0ed023570bc37fcc871a7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
