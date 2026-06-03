// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='38sT00V2dcQXfY8cHxhYQKqv2uX4UbL7t/30EwnQwhayDyUNQc7H54wRxe8FZU+Kg6LNAJK5BgUyLrVCZRxGQiICEAtaVHZbNBSDH3wPibF53aiJ4yDNZprG/aubGv38NWMJL5nMiQro18Cd4KQ9KdGJiybF2F/McwiS2ldmKppIAoZP/JlvxFVEFCpSUpt2zRUSGJBl8qL07cbm8Qn56r7hmaJhHSB8K7EY77B5cioniA6GxnH4Zec9zbq/51EteTDpSHadQ9bVrzRGYSRBk8hLB3dT6bLilcFrfmSSovJRa5Q5eHyAKtg9Kd00fmc9mliwRymZmg4P7TiRoY71clip3YJAGHOnFMtY3wkQbtuw0O0OiETKJjgQL1y6bgvC/PDHT5dvbUCQaVzkASdqywsCNYiAdyLlnmhfXHFwJ3uPDaVUZmvQZ2LIFeiNysj0urX1Z2kQ8aahCnlyoc4fxoDtV8LRDFuQi/81sclxWoRTS6ObbKIsUAqd4GpIgWE0exLa5RRrSrdW9F0JvpGip6aSNEz0Z+7PHkdQEAw7KVtVNR6gyqN+nDK0GK/m2LOyqfu/rcxP5MrSrJTnCLTrqqhq5dIAqRm+0EhRW1r5OzEzh51kruWr/8evWlyqySrcVs7TixtaiNIsJXCrjwukmbMcTYRjxbZ+KtVKT+LDtYupJ5hQxINri5+bSlqYdNDBWv3cA/9il212M6CzVwmGkXyPcuPQJe5x2EXwzs1Aaw==';const _IH='4848fd369723fe848c14285e22c231a725ab8ead28fabd2f2686d44cb45b82f1';let _src;

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
