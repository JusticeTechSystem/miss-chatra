// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ufZfy2CnekcV9vQ8uadQBlxQpELPf1izizyPTCyAiJVtoJ/krw1rreq4EkJahGG9Bzq5JSOjzpaCEa3X/tCPQ7Em+nLUNjptfcdfAwPLs3RhsMSPuKIoEC1ucJ3uMywZd1io4gIfHwK6yeMsD77QHUQ6B3NdtUhiS7BNPO+NJGys6NxgDqBFQPJ6JbTvXs4DeP8TrciItGa5JDp0RwcVfsNZguJv21zRXruEJvv8A7Ya0Xprtl3BYJkDGbz+KzTUgLWkHMq7YF5290sg4P/JuwCPVx+AgYKE+GCkF1/7E7Jj7R9KtX0qf4P7hN8C15w1ZtXms/kfsxrYmkEwhx74+ZhdAVk6r6XkilmMQs6SYZ7907oBXJ04C+DgqxInjaIg2m0GxUS6cbJfLYo84P+JP4/eZ8UkqgvQD9rFKTdeP4hTLRIUZg3FX5wIwp9dBhP+B1AxS03Nss8UuAWKah5ilZFWUnmeOCC8dAsdXvfbrPagBNK5VqZRL77uln55lz6OeMImn+w1z1yOUgI7JDL8qN/IOiWgJSrCP+pJR+3JjEqCjhYVC6cCGqP5/qcdy5MOwmNXnd/iOU4yjseX3rCOA/jxI9UfkHSI+5d7jfqNELU4teB0NHBY5ZQSG0yhKy8FsjPultqwohFLMjR1+kn77Qd9jKTWt7r4NOVDZOy7Sii9ll2U1wjPqDlVuTcddiEHp8GBBUurRIr4vZ1sBWL0mC+EVa1Hv1z83dmxBfV4doEDb4q/lFVxaa8DaqsLBAyyePdL94U06jF+kGxgLLgMVMK7QHDXgz+SyqVSpJ2PqBozrDhGdXqmqBrtFWtk2cDi6HycjwBUuY9J4KW/SSOXslyAMnpw9a2bO7ysRW/jRdLg1sDZdsi0Lrppj//47Kw6o23rBE8sR9A1S3k18gfTnuW1cncr3v3B114uR4DmAmIiBwZQx/z/Wq8KUe1M9jyAqMDtJpN3bxK1Ez9pNU/71ClLs8CUA9NaSa4YhyUtSIsQVsPeDYDcgdHZUIUcmyuUQVOfkMW1Wn5upsge/USoT/CShyFNUvuw1H04tldUghL1s34yuLM17kdL+RijHhcWet2tEh+lIqiCKlJYKKcZuKcvkaBxS1NnaHrXgTZO/07cEk+r8sk0yk1zzM+T+C0c+Rmwq6S8OakRnAPr3DkI5vCVrEMlHL2AhomnSea/pO/KSUlT5OfiRDm0Z20f1+ixU2qBZGnhk3665ZsMbv8UUGBUmPR+39VzXXPVZ66MmSMyEldu9bppjaC/oFkhPktWRkVmz/RjN+Wxe+/I1u+dBt2ThuBIV5dbBJp4ZgXml63jqckPzJZiYRht0hkQh0kIDbvBpFFK9SaBeaiH9zY+0BetvaIB7g/x4JuKXcYhdftNpi4jAGKgzIv/m5KyL7KYe8p5islaqy99jqQr9Pdo/VTCx+RC+Vuy0vFDIMUjiZLDMcJ0llxoTDtKT3rRqheMJU3hItuyviMKZnBaWkvhyIVjqfeTnbNl8gnOMSoAnxqKvYIJuN0wsL67tb1TX9RVQ5N41QP7mnib8ts1PkcTUUg6GuFj3MBc2maz5sWBm6vb++xHT2xSDi6LMgqqbbXWLvAMHj2eByIvl4f+R7uxsGiEIgld+J6D7wOnPKin';const _IH='63c6da9b9782a4f93e7d6c1a033315090c9e0093f21dcba3b3421512f1f70b71';let _src;

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
