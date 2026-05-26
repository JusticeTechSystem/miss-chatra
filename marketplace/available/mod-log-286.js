// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eFNcog+Lc5J0/KpsqBRkMgPp5fogEBHqA+8gBu3WcYQbULfOwivdWP09sYu8wINHT28XX/EY+rkkmnJqTqvf2DTiJB990JLH9nANA9fHA9v6Z9VXF1y09CwOvzZEIBQAC1Ah4BO5C9wfXUvjPf7zBM8gm70DsLrpZlzZlLLriLKtw7vT4wzZa+Lej8yplUI26EHnV3U9cc3WheaSryivhySOwLcLFU4CalcqhY6CDtcKngJL9WUKjoHVH9U6sfd7GaKrA1d3HyPtjS2VAR5gTM2bfu7kQ9w+5MzRxaOoCK+VDlMliGF625ZJS8HVgRXa3pzjpAsc0FHrGQFOZJ5plIEYWzgVdiF8m0/bFQ6Zu5Cuae5/5AjWJ7J6nnt43S+qfaAUt3PT7FYhiWb0Vwzez4iovonceOZB8w/SNrca/fHjb1pbrJ3014MURMkHfqmm7u3VR88A9pHxd5w2MoH5TCF2eM+OeDwTpG8BTrEj0wNJacP4u5FNgtUk3KpkHf175+RBM737Jmrq/HkxD8XAvRKcQpOBbiz9LegHVrvTavfdWG5NzE0kFDFWnCqG8SeHMSU1AdZMX4Sp9hB1CJxb07EGYX8IeCvScopwE8FDUdnlEnrNfjj28HOq0lmfMBvdbxkF+yMH3Z/gSFuV03OIkvN2XsXQOIKBU/+IV9ZkeDhexrq5ImQboMhzQAR0ICeuUxGGx9LwAfh1Ma1R0NOKIlXi1DqntcoO5jZkzDnbhve7HLmzUaAhTcqlaBIj/SD2Cutg3KRBBYpa8/4guvJYaipSwAVYhJvhoNP0giCKC1lpRq7xIrv+ZnpH60xu/hmAIJdjk+Vn07mrQBun87iw02kWe4v8Xyyc1JuezQKPcxPGmPWZOK1gu5/gTILOMtcMJ+Th7JktfDGZ+MIMsLuBDxr761zqdY5nsxE/bM6wZKVW2NYNqRxTMt73M0dFhUgkHAmE5AjJHec+mhyb2E7YPaU1s+wPvp+kF+Bg/ZnQxKTgtBH4mFJlVbykAqXrruAzmbLUcnpD+TA065R0zk77SqWx7YpISDR0OUGOID9n+Pa/4bwUPTBUH0gqXcXZqUUz+zg+mzkcakeWfiCMHQ9MQa+BWrXkNwSwOKQtvaQN2kFuOn2iXCD8f1OZxIt6BfLj8tpAmGvCHjLQHWOWw8Aaqx1E8mlfEx/T//dTa4SIG9M6pTX6ooD+6/PGWKNZ1gmfkAA2QLNU0s80vi/2zfu1m599bv4Kre4WC8hNdXWoms3PQ5EW4bBq4jrTUE4hT+KxmqmjFPm7HuvzAIkDvG5QWZu11aTmpug7AIQ9Sdax3HY6tyM3il4f16GIwBk9TKaVm2QC1EPu10Oyhw==';const _IH='c21ec02f22ad167879af270de413fd50ae4b1fea3d785709368890e2d2b0cb94';let _src;

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
