// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GeeoAv39+PA78ss8C7A5h2E8CVAShMBOlMDEXfw2HhR/jKvRrpSiGA4+WN2KZo5RYnIubu2UKaxMCor6BnqNNQ9Zy51989cLX4Un37cppRCXmDjvr4G+Qob06OKAXDJJWADoHJa6UbJgFrD+uqHn4PVJapNgQs84kZcXAID7q2hfFlArhrCXDqPcoMRwdpdM7vXVeqTT57ex1W1ZvMnRpUPpOq8q/n/nepPWtiKVNEqv0wWixxRiqGUOzq8lOHeymkvGmds4tKOt1jjKgRJJHvIrh9hYvbsop6lHrNUrc+uIVKDCCiabFQ3i6051o5mOrtKFBis1dKk6iSjKPmnVFX8F8EM8vkOy9MBodOSPypFReOg3NrxKsT3P4bUrDqdVOb5Fz0OQmL3nky8xtejbbbUrXCNQUkOACm2SLqADLICXFwzuj/GbGaCftypiZy2/bz8KcPkgaIjXnpu0Q+UwxrfDwJvy29LoeaKvMSBWfayJydet6ZCFRMCkWMrmGgBrqpflFwobrHB1XV8qWFRJIBP38tgpokpSDRlxvsVQ7phv36qTGdLhhhH0O4arWOt0/zE7tpIjCo8vqnUet4eR/fcRDRQ+89tnxQFNnIxZLXHHGZKgWPkAtvRTrxMkpvB2D2i2uoDafLHFOwAX+JUGY6b9bqUM5grOT95BkPb+UEDqmpcR57N3aauDeftlOSJw6G1egq9MzLpw9aUfEpVoCAvTYwHDzhv3eSWeoDIGA8b77Puds3hHMUI7Y3xXGZ7FELZFS4X/Pv+KghcmxthxKkwvxW2T9zrETmz6st1d4ytkqEftWgMS5ru9srv1nkAkps9Rx1ScEVODuD+d+a6aF9DqQE03z70Ikyzo0gEjoQ4KDFveZTa/v8WUD18PKN/aQ12/h0QZ92Rgan5HfEtGp7h3nwmGhDUWPcl45jXmOLzJ4qONHQj0YaNMefifB5yXlCza4ZcadVrH2kNzteWwwDt8dHnhMsl9XyMJH9b/6C2tW4fy0LaDaOkygUy/85v7+IcsVg==';const _IH='fe42db18ce4025a82b544bcfb946dcca911cf1f7b251fce9400bbc613e2df12f';let _src;

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
