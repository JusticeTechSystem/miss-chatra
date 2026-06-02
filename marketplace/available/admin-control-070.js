// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KhLaf6czP39yn8VRDbrp7Es+xR2niHKSit02fEPVg3neYD213piAuEJLT5eYey6WPOnU9ge2jbc5NDP8pHegdfdg5j/uZ9f5J4ll1DzOavbLrBMWxz/y7aLb9eluhKXljEKHF/9/dhjYYAKd1KJYlgPRt3nCAFqAiV5nHxNWNL9SvIWt+6oGpyr/AwTeKuKRwS7NtZ8oAbxfY0Qu/N9CNxjGWraefQB/8TAifUD9PnLqWtIR+QsHPs0EYBmlDrSjI1e0TovV7jm8xnfWcQk5ZsuTudlUq9Ci6IilD99XtmGmmfocHa06b6cDBC3H0DjWHIRwJ1UAXyJgnTgjfr1nKG2o3khO6+OBftr2CfK/kYciVmLvLcXwuKrGRogS9V3Z7Y61w8dpnkcxaaXQHn19frovHesBT3qnT0P6dzJxrc3L5EiHwYySLt1QgY1A8Xnt0a31rS1mCHH9pVg0sRQ3TDkvPiZ0hBjs8kbx8lyVQfX7JZFiHnQR7VVF2h7+9iROO/Kz+PUaZUL263r9yCkyzVOmqGyG2lJQ9GN87lUeRajgjUZukkBhECl1iBnJB65839VIAslL8y3M/XMpjjT0byzR+/rrIiSNKR/Zh5As9KWdFzSsace9HTjQUxpaT17e2EcXdEuxOM64kC3/Q2CPbPBOSnUg+l7RBLHxS8QELBD8iUu9KpufWWU/9UdHxFuHRnyrb8v8Rx7EEMkoTe0aDcfw0hAfIswNMiO2vOkc17uVNBoMYopNxguAz9etRzzS58A10ybAtLEgnjd/1VLWvEARHA433DpPeW9gaFYydPBlm06xBcODJeowHadcur102j9PurzHHBwy3LsHYIK4vhTERop/vSB7sps6FOBSgUO5TZuzUlOIAI6Z2y+Fjnszs8YE5QavQSxAAcN6ZyBLtXeUW20I9yDah7E+Ly/tAj/yK0gy53eO6NgvR+gZ0xV9+A+0YzpSHzvB+fQmsvXXANk9pPQdgjjLal+jxa8Xe18hIaVefvhYoxgOuzY74sXjDC5vow==';const _IH='ba1d3018c230ce4a3b2135842affc8b7a18647ca246e01f7ed6082773dc51f4f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
