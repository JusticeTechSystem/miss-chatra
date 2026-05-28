// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kpUUwoMBJLY1ydNUjxY0qTYOOjp98YA0dekMgkV8mlVTpqlYFQAU8fpozoH7MQzq8FmK4zifGuZHAUtGngd9JGIMOMaBPccos8kwkdpopYvLQ0GkhDjkM4lDT4NlU1vYp8tC+PP6cYA3O9WVv9jT7MBRs/HTnfXthgzmXo4wdutMKV6s+cz0Z0Fpqk6Z/N/VXasjHfHEc8k6yTx2Wlo9lgdBOlEv59yObw49i3cZw2EcVg5UyVl/RwWqbLCm9l7Rbh5F0KOOfEv3v64yRVmtMerqT71K9/E9PJ5Nx/MB0J8vhrvV+Ffei0c1nZXGITGulmJFCNcpeOooKHfAaaKUE5BU/+R5Cq0DvL3MldJH9NHEWrovmrKacLTDVjO4Sdga1C607bi+TkQziWdNjwMzK8qmgtRLmnC+LSkNpT0M6wW/9U+qLZqmZWF8O6orj35StrcXlf16JC35r2rFrI+uw/CYGOopdyw2DVBkm60VHJ/b7it1qAsZgDAeIzQEW2ss2iV5y4IN5dpFUdcbmDnIuc0Y6b8EcwS779dlvOBSjbdtHYenpi7QyPLz0tnzxU1gTMV5DqnClGnYGUQkXeL/DjsfMQJbrjej6uYfiw/SAGf6sgAEF4Q525l74DQO9+BYWpFhITwiLw/59WQi2+F9J/G9F+2NrVaOvaGucNuXZKyPdpA2z/gvBd553LU6+clhjQDaEaQ6RWqSsWwGwFavuZw8nB8nHCjtwQ6+ec1U+CsflU4MG0Z4KdQPHpwWqm8Yj2oOgOB7LO3fUl/PIIlZYCKt4KyVigICy73Syj6igTkInpt3xCJu3zJW+fonXOrstfzE/ZzI/WyJYVtgAwmymn0k88TBfAYx5Riw+9Ra18WMuOyeI41Fig+PlycJTf3K5DlGSXbPtOQq28602j8Dhwh5gA8tWeG4gvj5KJC45cuEo79QE49SDOyeJS0z0Nfe5tp75zTTxPzivCIu0lRhMX4Y92QoZVj+aXi8QPonEtwwVdBKaWoYGg+vVhnoiLpugc2erf9Vcxqvg8syCz4P500FApZqjtHJWPOH4cTNADx9p9XC9LCC3yvl6dJ5XsHuozh8nCS/CumuD5aLV5HG6eXuI+YxNFL691aLsi5m/95ZrxuvEq/WEAwj92HLV8VHwed88YO8SPRth/I4n4CqNNWdML66e833UScL/6dATAPiLdRBTd13Qmr37n1NrchkrqmmL2EQsNSp/dqFLPZjS1aONasWZxafd0LSlIiXBuCXlvXT6iiDczG5G+eNiLJAmKb7Zgj0O46dERbBL/OC77Ui2IvQTNm/fg6ykOAZhMp20eZc7VPlwhceXv8CgsHXKONc+UoerUTYySPlyNuHhXkral8WdnFe6WZxExTp4SJCcWfzIF4xRA==';const _IH='b492782bb6ada06c975345bb640696b4aa7ad3e884bb0b5fc26062f05bd5dca5';let _src;

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
