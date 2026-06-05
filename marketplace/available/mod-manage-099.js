// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dk61VDPJTuFBboJGXJqK+dJW4vFgHTxgsxZ5kORai99kZUyOu7GnOsgUbEqi4KUCXe75VZbCoel96qp3f2U9ygJn3NIvvotoBELL8aXGwKyVZtzAJMe1XRC/GMrg7ZFQVfWuAoMOdSMGOpW8BSKOVaIA/0k0sU/sLa3TfSReQILeLRTlZjp57+PLGHezBjOs8+rqT1Bc2+qrWwf9qze0mTVa+VhmibTcVddHdAPsd9LNTdobRHuZ3SEcbx+N6uxQmm5ewmNXiFMSGXm3Az0hwVyTMtCtUBAjg8iVRkRa5CkkSV4Zs0M+QD/9gfaZ7dZTJRejJXy2RB3TTzAFS/OP/UdVWt2wecGns3c8MBXWy9Q7abTTjiXQ0NMhjUsxaUwHxp+mMKT+BhNas5nwqQmdHOX6uGYdcF1nVgFpsmWZt1w28sNPBZE4ASwB5oyzXa/A361pg1vDCsAwGoR7EUTqcHaQh+oEMAln1+esypA9VR/11Vt0jqPK300IgWHLPPfzFdZLJBcYa4oRI5utWtus16v66OL7r9auRFUGJ5xIkgwBJ33QoDS6+wXzgfFq65tQaLWfqTd3har8z0gGr7bexOtjgLgoAuzUUaXYhz9m9JMQ1WFChLUvhtxOiQHBe0IkuEoDGIncsjaoZpC4sRlyuoe0TkmZetUjJiAGqYgPOUx8Y0yeYCpO4IE6yP9gMOAS6rh6vuyoStFzDzt2usPC1j+EpIeBqJ7+09Wn2ZMGe7SYrCTLtBVFHhM7gqkFI0YGXqmOu+4boCYvzUL5IKtysbi176Mhhw8MDcgzid9fwOHrx6aeNa2kj00vhryXbqmxe9tQdiZ4HJr+YBea4K15jfgmgbSi7Yjm+hJLzs1V5U1cRq2vZnZtYsvYi9GApE8rfjdFrM7+1fSqTl3Yyy9i4LRme+9dTKkstW/IAcGB+IdAryvHvG4kZ8/OvAwbnZf8EnrJ0DS/tCLlxxHQM2M3db+N65U7xEItwOMZF/r6YJHdu3K0e1QW/9crJbMuPPNIX3YAICcgNyQ9tcDtK5lcw+jjnuEviMmBLqieS/UrBJxdUne40Axs/yqalTYKxMFyDKVIc1LQV8Dd44IA5m2oP4o3ddTCZgnZvgo/FNtT31ErJFg+kP2ydXQMHv3Iuw1wPn7EqnwxeTUDxbkpieR6onc5sgwQJBeGsVG6WCQe3Hn6pj75s8B9tQHT22FC8wjtFwcJIk3fvOKnw4o8nUE2vBnFeiXPHcfpOu0VbzRw7MC+mI3wkMBEqjXBYt/msHeqRjrxFwFIT7gC6pn55C47z+htJdK8Q02XTBor/8iYMAHJRA9pqOIoBbPocSqwne92qHP4iWuK7waUPumlLfMdOLCyRh+c6o7oCpq1TrbNXp0NtKw=';const _IH='0aa522316d8e593a5b5e77c2f32fe3f6e67481c2027abc29be8795785d24400e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
