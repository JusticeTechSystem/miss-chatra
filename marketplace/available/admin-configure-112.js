// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hK1CrCSpO+4g44qDEul6SOdefi/k0twEXx7Lg7hRq8KuY2yOQ9uvCQNObVitR7fN9YqlC/tfGytXWAsRujXxAAWy5dZrLnGkFsKcMI5iI6Na/pE2/mkL2DG2rpXHRWtMBpyDBUfXZhI/4lCy40/rIPTupQ+Nv3t1W361NBn8vugEIH8fTHuPr4JrMcbgfKPlxH6aGJ/9wHDL3Mw84H9jySsIkzDsZyvcB/QjHgoimRqkcjuuV+vba0vSYMDK5XWAL+VnaqBJjcVGKltoGyOHLEJrJr7ca958JNF/KGztnJd5rygRgQH3rgsQpWkC7r/vWu/UWnZvbJuLjCj8OEqCw1eFs4QfX0f85Co+9s006SPFUJy2Esanw+taNIqimhqVorj26fIvNP0FeexDcP8LkUuVps/9h3H6ng1XRuI0FzEGYE1h6KfooNS3dS9dCDKk8XEte/3wUXdrc3nLnmp0z561YI8NCbXVWPDYB2noGqrh/+kVIMwBXmyCtIuEAKjYnYx88GiHpHcOutRKcFzX43qdOEOvv2dCskRaH1cnwNjP5+7RdQWDOf+3SHfB/aMhouT3mPCYf9dRzCQjNHrB5COH0hPYuSkYi29LKtwMh7BSNb4xoIso9JVSv6RfKve1IVii41ROD9qMaz/Fm+nUwZdTAV3tzVMOR/LkCECg2hdkYBVFJL8ATxIeo8p50Es/CjPvqid5uSJrwFXRNhb1G4us7I0gNEMQmgLXqCaRfzO5looQAUf94oPwNIdQLLaWRxIOJVwFK6I9wrg00YCpPRxG7Q3OUbDLP9ehJC4oAPXp7CnAumwXPXUwVcRqmrkh8vLEmnrSWmu55uQY5eWVkRevpLa8hv6ATF0AEyo2miEiA7SAHOxoqzLK4uMdEZFD1f5AIZXjHooGTy4pXgIpo6ucApdNVY6JXKkMGhr0mMX0RVmk+AiBbBmxe/q2qWJRHXC49MLaNn/uYcpudzNANHKVuBV6WoK2fZiEaG25bQ2PgQ1+Il1inAo+qSDNhoFXGRUwcpvQz8Cbr46up2+DUqM5i220qw==';const _IH='dba19827a4478cd987e12c0a06c6c4c1c4417842bff260bc3a79e4941ee422c4';let _src;

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
