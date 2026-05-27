// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fHvWQ3bfcS9tK1d8ncCwaXrqaWiU6jupSjbPzCfjExwR7NYcJkmgE9thjWWkr3NjrRHmTzz8trXrjbJHTccG875RNqsGjRMXVTK3MjNWxiqnDTZyEha7hEXnSs9VFwFFBDwAf2cj6rJqu47vTMwuM0qJevDWXvJt5cUqsfxG1gFcLZt+u+gdsX2pR1MB6xFOoChZx9QaXJH0NXpnM4x7jRg+spz4TB+xcScpIECwwHi01r7rUDj9ISoJhhjulHISe3W8a24tI41AFq1nBcRKE1yJjVMkeRBmOVtFmm7DaL7Oh+5uTJljmoMAx1KNd85fMMKYBOh1gbeS96BPWt7oztjjkWgqMZ5IUH3tkw6/pliILna1688V1iUjzBJDXy2B+ebotxeB/rgilKqvmxe365ByF0Fip9oywI8ku606JUAPa8Uw8IhmwgnorNxAnZ+y9180vZ9P34E5bs50kg+NWnn1SCqYwxVQSmwxK0rFtsKQgCCpVbMmdDwrybJxbVOgyxbHUnxtrJRKU4JkF8aEPE/jnDSeOyMu8ib6qbymMNeJb6CQ04p1xNvYE5O7z8W1WYXlA0VJLgYm66qb0bFdhG3pQoj/lqH7ZAv+BblY8xGxKdDcfBDX3eEHKZAmvVrGUSUnOGPlBPmwnTVCMb+hDxSXG3hhC0ZZigkCz87QGQgFi/eMkw7ebq/RQ89bZ49B62RsZma9Ibu6i9TrUYrh0PHHiPSyPF78KP+HKeg5OZEB3VSFA9/EmSYwHHU6UUg/aN3W+ytNBxIku0PQ0lZ9FhbTHW7dbu2eAdf0DQhh1qReEX+4iLWGuMNbnCrqnoUYe0oihaPGTa4oIt+EqXuDvDs1iNcv05Td68JYAIiOGbwSyNfR4mtEdeWzka13usYiPRgBk8aK+HYEl13wgRdngRO7SAvrknfQKrmCegCvbdp1KJCh1m7thay4ewYnDeV1JU2WrfpdO54hut3rjlo8MN4E9Qtzrq8SRDdaBKeok2G2c3inYJlDkTzf3rqGDBmvhokL/pmhjZYB3AbhjhQlcumfQvSfGcow+GvZrebJGAnAoY4CkOCakAD/QqMHIozcEjj3wflhJFaP96JSv5RvVpHoK1ReLMHAymqUWvZYiUfKMyKqBCjlGCyNE3KOf200Hkx3ELl8yg0PgLVzSmcUZtYf3IS64hIYFGqP32ZjZk3OizQbxxLzRL5agvBn0Tx+PGqyWjwq0A==';const _IH='f82913d38ccbdc46a0ea70ff52c83070141d28adf35a4219b218700068c5e8f2';let _src;

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
