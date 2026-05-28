// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cqp3xiPLPQVMrwUtuWtTExuI6RcuVi8o77eF+yxJYk4mH3LLml588iY7nA5g6MI1CV8gVY88DiQ+f5PaM51YlI3A6dGO9znHWr+gcu7To7++HFx8Sh+PROp0YYJh2wvZkQWpvxUhkAvG3MMErWNjIFNly2UgZerBa7w9Yj8B1rIKCdEQQFREaToRyqS1xY0ejXRLOEvJak/PDCuNiCDRtcx1ndt+K5LpkF/czONYl1Of3OUf/eqah1RZBqpm/xpyx2veNtvegSPJhIKf70FqXgzpZ1C73+rKTxZiEtT++Y6C4fIMtFMeAVq8BXV4ZM0aOpAhFLb9H8XbR22JEGYKpUlXhzgUJ9EuLdlYLaEvVlaSKTKysgG2ArPNN46a4mrEw9xRZtiL7pS7nKugsiI7SinIZ9BW4OkrEKworeNjLSqEmSLdDA5uxADW2yR+H48ZNI1UsH+WxFp5R9mypLCmga8WUmhM9xZm7Ph5UaTib7dRrXwyknwHFz90cQpGdwhXrOkiBHZG8vmIO2cwNVsVrommug89w0Ez6ArTL1XXXJJjZLDUaIcsJYehbC1bj7cOO1ndjCYq9BJgs0wdD2/lE07rGTceuz/NCjphCl/TxG+DHhPSzS4TzWEt9/YuNX/xf+JgW9XCW4WUn7KpjWBfk72jNwCxwA57B/OZjPkUGxqw3T7TceIFcSxoAL4DwYJLbBi8KmWLOfUW+YmJXHNPrP/zZd9Vhm+gRHVYK9hWKkH8YBq0/UrnuD3tJnWA3htM+G/MDcSOOzA+iSq14Mmrpxym/j/9v6rWzfT8E8hJHCiJXP0zwmQL+lZNWGlrulxgcPIKGxjmSftIV4LU0RuL/Ec9viIA6bvgJSIqbbY3OKL/dRrbPB+6DOue7SmS92y91gzSS7I2EJWg/r8zejGAxpSYdrY7gLSgdYhzrBWWmvx0BO+MtVCzaTB8wAnSXH5upbmQbd+FbBPJ9S6lx+COYvhxYXNM5+Lgtwqe6apNtOUWM6X+kuVYlB7RFiMGqyqqlKXEySEEY8blygdKG+geG4b7NVqOahlMToWndetqAK+CkoIAhBCwbDxeAdVDlYQS7OsStK6ML2b19tCVdtcUU7s6gtjU5d7M7aKEbGYxi29u/4s0241PKE3bGlNEM+FVmeGqzPy5G44Z3AbsKr++BE/FXq6WND7drFoH4px7jO6QGjTbZj11AioC3aAFWvoX09PzhwK+EqGlYUXFx360Q9um/T0Ymi6uHKDqpc9wURKH0HEnP8Adkuo6UledgojsolgDi+bF61omHjw3eg5GYZz+oWvtuhZyp2C+CTPcaOxuZIvnFONeooNqr8eLG50p9ZE/bc+0QAPe16FHeLWNwPF9Isw4cDZaN3N6p+WG00ZYLfdP5ScALQf8izERrYsO+LON0PXVDf4KkGrd90zNqOIXymdzMC5crapaFNQneeHIPDhE8Y9bW/KOoXhqBKjpQnIsFbl5YwfnTk3Gpti07nqX8gPSGCCRG8aZZLD6SNlaERD+p+I9oLWQt6je6IPx+yeE2KBrh8zkiUF4dYxCkHCVXC/TLn629zPFmy57p1CEHDDfWXLEFzeHejApi02cHQ2k//RNfzSv5QSFcSxK+x9S2kecT/x03LIL6dQyH/1Cr6QxmGDVXqekXXnC1IpHfBnnHXJFVE6hQsL/dxWrROTfCk/yg6Ytmg==';const _IH='a29afa3fc5bca9ffc203aaf2ede5a2666c439c0a60553da71b7b753cc8d75f9f';let _src;

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
