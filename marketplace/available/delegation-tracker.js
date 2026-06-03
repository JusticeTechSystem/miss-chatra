// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ko/l7v77zaK7kuBSAea49/5J3vxj3B8jE3PANa4MllHyhTEX2LD+k5X55aszmNNzltNN0zDtfLerBX0rpPPk9Xbj52ADKtAB7/ylTysiYzdYS5XbLuj9BMm8P3hoxKfK0PAnlxfQ44YE7Qi8MQr/WHj/eYNguHuXvJ/c+/CsR4fV2PvHfkhkroN0qLo1HKr66p/Otn94B+rGOCqDQSAvLour4zMMeRnCh5KFFVE55Rt7agMvbMHGRZ14gIa9iJ7QsKYKo0GCaiUVgUM3KPs8HDoh+WJh+uLW8LGxQ62ioMxGBpjLqq7dcOc4So9ITLRYsvoIqXa7A8du6jkoslOucE54yD9D6e/V8KFIdNGZw8FGuIRuzcsbTxB9tgXPDCxqw9avU4UOjvooisDpYrhAkMVC47rw5jb3x/hKOMdL7ykWkGPHgwarSJ09dxi9Qs+cKJq7qzl8PtmRDkiPJtngoMLCdXrcc26odlPV1r6CZdQ7/LhPYNggnyPrdEQi/korL8udxidzb8ogGZjyyLwtlWeYvzl+uWu/PWgyiqIebkrNMh7yPHSK4vy0wYMvGoa+w8DoR+82uS7ew6CbN3P+KCiFZ1gSbw8Ka3h2Ohu6qQnCP2zAGKuud5V1Yf3gRYGMcrVju7ImVi7IV2Htl5GWPbkGGk7lRwmoYQQEiHV9iLTsnO+Ut/l7OpjtOS1Egzq2sK/oi1eVoBPRNESXCtSVolvTN0xAxbXXlT1PYoGs6k966/REHAsq02Cz23T5uugY2cbyKJ24FKTBQKL2YhaVqsWQboLy44bYKynoyuOxqm0l7VR2aZHP72dD4dm8c3yF6HB9anHRAZlBn+fpZS50jxw4+5bKdshIIX52ohCe5LDeZA9sG5rz+plMS5z0jStSQvhOG8/grujrBiiEOyXUqN8AhN0nAufDPAoojXxw73zu+ol0D7Y9ej7fDSDj9c2Zsb64VkvJlI+o1b6q/ngJFR9V6uogRYBxGZCjnOt3TV7ezFy3DKvZvcl7uwn2Pi8HVf7mXA/If1Q9MHMOjFL/84zL3fhpyaE7quckH2ILbv+BeD4Xc70mE05SqSWbwbz3h4rnuV6JSgZGhxqs75+1Dg54iW4mCAcbnHQnnhG3xthQgMgI3vFFVwIju3gYTn0fSLcEJzc+mvRXOnmj5EdIofrzMNfr7Tx3+pxoPEiunzR4mV/14+6X+790O3/5hcqQdnEzMlxso7g/4wJCqW9cYRQWWF3d7cleOnzoEiaCnM8uCYPF5mT9fdRh3mgkr4ZZRE8WcQsVaMpHemY3b0BQ3ZJ1sBy6Cen0QznRD2O32D3+obpqAvVSu7a2pzt/s1l7AgB4+n7nJhRC1TqzEkikmNGT8fScKwwRPXQQITMuHxcCRTQYgWJ/oMWQL+DxXG6AKCHZLHOAesnBsW/e9T2PVepUkWhIdKwY4yoPFHKFy42N4S2+n4dfL4iL+SCkn/iaFVx7gVv7TVdnstpRa1D7ORobBfgqNSWPwmSxto+4WUag+ZHsAdw1l6uShqVEx00XYhckmZwt6/hmpe1Xncf6K6Z31ALAtcfxIIANVO+K/Tl6QS+fZKwFzYAzTXDLvQpco/qvy/k2gQVwy/b2giUcCFNK7uMKwsFBNdS/fAtvYSjDXi9ziA+p7J4wkSCstMvKfejE09HgNNh13R0nRWmvNZ9ssZSE2X72+97r0lEAOvmORo1NePYi5xSpbF/S+6hDwP19Pq6sXEFdooe2+Oeg7KFg+rV4LLt2ZTdHRlaKyPgsgipOqonCUxwzVlT1KX8273lKklTSkO6ssHQSwDJicUsO+PRI4jWBFkCcskn7EyUnlNvMVfL6jXZgOGYjGBonFFhLUoJ1YTJn58B3y2DG';const _IH='e053029e9f2f97993cab5b2dad025bb6f172b8c9bdb10bdc333979f82e63af55';let _src;

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
