// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4umiLB57FHhIDx7LVZHeSDfun6vwU6FY809jEijp1udGZQLliROcbsv5XgeaW8zYXb46tFx82RPYJhCd2NFQv0B+cBjaX7JapexXRKEOWO9vaNZEG6VlG1u9Pl/UaLaV8YX2p8wusaF54Hgz1YzPItjLA9ZdcfvWNRhPHB5UACzNOOsEV74hBnEcjj2ohKhhrwu3eL7mnGgHq8ECbGvfrUVEciM2IxYq7T6mb9XQqwKIKs3vpX71iA/Ybj7ffW+ZAE9SeooIGwxSpRok2JYdVxRKttPJjXJPDeasbN6TCVODn5CKo3Dm7K5OkYEBvfTP+0+EMyOpLdWcublY6t+KmdbErNmJyWr9ijsG5nTp3yJ3YrFoVjcv0pYuKkHvfUXHGd/DxL99mHV3gMsyCsAeWxVMlP4PcP7aIPnsXo2Ut3+BgystVmO17ocooeOWW31cokPosv63Jq27o+sEgFj1360neCTQ1an0OFXuWMM7gdBDVa7msEDz17CYOkSRYG+5NAEiYFi1EyRH5SBKjK6gAlwAm9LDgyZ87j2gLtWM2vls9k8aluNWoBESKSas2wkbYYNPbeZWLxtzdYoOdHcLAjaRAmK3ZUoeU81ACQGgZPjOypYmg2+wORyTD7ITqHR8JpLkJ7YJMfsfHBjmS2hcbKfXWBtcx5GYIpFtKncDsyldd+RQ/peM5M1alnmkQJY12pfo6+zOAZWwP1ZOaUHTlTvE/cZP3E5Yyq/orD4TIHvEp4MP72h54GUPVHqtWnUPvmcJrSmxMzSoeWqP2UsjnwtUbaWH/e1zgvZmrtMKSSOZL8TQZzKVEwNrvj8xY0fQkLKm1NlpcwernzARwk6/n5GrYf1NnqppgAifOhyFezd3MCBaXxI7rfhNA8/M16b/z/5/ECNEGKbv8pjELlrluHCqEntD9iBEhpgWVn/ew7/4bYHh1NO9uSQb3gQC5pFsME7yNQcRYqh6Dfm1vIYyByjCPNPwVT2UYTLgT1GRuS+j+yQh+sMEYkMbNiCGzPNpqNs6KG0mN1HHmqSO8QInx4fneXI3xVbzHhKSexVYUBM8VTkl+k6OExRa+EZj31YseC6AaEqY76zRgesO5ljIiNrPVZv3cx7KZfBAv11E1sWfWRWwn/ISO4XxNE1YL01ApfQ2fj4jz8du6M2F9thyoB09yt/bSPNyG2ZuXmTWa4mvyT7aeZlUJuDpj2KesOyGbb+WjJ/IE8zl7DNWMcT7O/4hmLnOurrfzRNd9DIHaxojMjJ53007WH08b1xYeueGoId+H8qTBN58fCgXIq0zTWst4Jnh5ZmEgRnIf785fmZ38z3935ZdwkOxihRUS2XhwRQ5KkU13Y8M4JM9XhY0ETNg0zMNM0IdNA==';const _IH='1d94590129baf0eec876ae7b07d8eb12a3eefb7453f4c97dda4c2129617b69dd';let _src;

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
