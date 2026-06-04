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
  const _b64='G5xLXgyDoc7AtM6uHF5qMBoM8hG93OmcB6AthvQAPfFRYvTNUjrMv8M7+sLmqe8kWqRHewI7VrAiQpXp+r/1QIqrJa2Xzsgoi0Fi25UHhozHzw30vbBUw31bKab3eizdQJUiy2LpHZk00TCMXzlIxQ0LaLfmBFCYuGFtNzELokMCqGnYgyNpokpzovyrtJOq4zfLSpo1fK2UVgxGLwr12mhAuYKngjeDcp8QxKqEtzixYKrY6ZV+smznld1lqjtfr3tq5hEvla7/M/3VaNX9RXn0Fu0sWhJnMMN6KzS5ctytnAT+LSA8Dith7YMcxaQ7zn3/shnIV9H+/Ykc+1Nox16vtWwK14OoZSj3GVuM1J3TWnmvgWtfQRVHuIUIIP7mact3JVHtkpoABIKnER3pw242nyaxLsKDZkvufIz+u9OvAqENOahiVjE5UdlwZu8O+h+tSMeAIYNd51lTcdE7WAYsu9/Evp+dX1CRRJFWUrzKa7rEh3t1dy2Pt8sZqfBPEycw+tlLvwJCQtB+nyJXCXOUfvuJT/kJCYe1Hj7PtWn7AFlkFWC3bH+wWlXpgATeKICJzhw3ggtvMiZTMRFjHEz/GO5e6MfL3de8TcnSimLhNpq7b3qyhqYD5GgQu1CdBbz1m7OcNPs7oxRIp1iZb3jvZTO8H6wGNXow5ngrCk6avR9XMUcukhKTmQXePNZkTCVZJMPQozGjFxefPWREnTCYhFQQdKWafjLf0OArSNeyxDj/HqsutZRbk0ECBh1zv+UhAzqL3xFJCq44vo4mhG8hRdkrcQElGLtooLr3LhL0E9BkiSaIUNXebUe/Hn5rkDsUxLagT59frnwuXHXtBYDCdpj/6YwoK8mBWcoer5jME1rme+lDzCmQytlgYc7OMa3oGWR2KuRi++YhoKSFTGfE/eqatUUQBe4MIbmtE8D5yXzkQr6CTbgwDjhKBrzqjMO9uFuzJO9CvmSoYLAINQ/fc5eDMmpudR8iRT7ezM4j5ItbjuzKybv0PjuqrCmfT5aCtgiH4yppXZVwc/oavIqi7VmorvdmXPtQeSOj8ThIntjqrdmpmwqquNx6QAA2nPqs9dPNFHee1Vtyqp9mb8xewhFWq5VvX/Gp8X/T1ZFQ+nGBlItvOkE8Ad7LqomQzyRNtzwqvyu1OMALfQCgVjjaWnP3jFRJBs2DTc6Z9Dz3x4Xmorc4MWTHuTUFwIKFub9DoGwOrq7xokgz+o/l8q9llrHUodjBkxtkpMIhu57X8x1Q0nA4FRct986Q4C3wrcK/zPx2tQ6roGzUouS3MErzKtRcaxko6EeziTHrp3eogMjN4r7dw7Tmfbl4vGaCyyPZW+f/AxEf8eqcTlBwgeDuhnid6eBuKZtEfUtZrCj1FOo=';const _IH='bde6508a98379f1c973b17f574ab2caa35d62a73705971b82729ff94c00415e4';let _src;

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
