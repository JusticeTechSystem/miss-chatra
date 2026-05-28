// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GND8pePkX0ieCJkBkYwuCzC9qB0hFN2FVqNFFkBDrWYLCn8ee9CjprUq2lP1GwFQseTgolRnKuxlNnFi9sefB2Bn+NtokM1ImjBjYcwFqxoJOlO7ZFZhleAmOPKTECx4G8RW3Q/LWWpj3KBNbVlNYcq38gGfJh+GabeAzbqul7Fhg6u5GSLani+1egE6xYMoLM+A/2VMtWfHkZ2zKfzzfVoLnyUOoat3xcpfk9Duy0Txn+Bsq2oyXJyQzDJ0DqmdRem6gGgJvETYWITrf2PsmgWWR/l7GgxOOo4pr4QwDTpofCMJSHjfjLFEgbd7sx86RT7fyckZAKMbzYpY2cgK5hoJUA5ddsy2gnlgjw7MaTRVv3bR1gBzaA0wZF57EEscyufHjRKct1bFKIR5dBLLdXLfxgHQRi/ykMiapzfBjmTlv0XamZ9++VvGmO2fHPmdEOg9xoy+booeCDX87JPUiF9PPXnVRSn0ONtPktXMpRo3YEKSPIrSb/of9l5nQTjhcrQCGugW6YGR6nrQsnsvWcLyGonUuRD97sX4g73LdE1matutDmAmTyjCjYEmvbbzWyizaJXW/XMkxxOE3cr71zcMbTuQXkPoJXz0cDWOzoKVuMS+jmU3oQmA/9KR0hrsc4tSn38VIrSfqlLnEJqH2ptUOelEgWuyEz4gjRMrlZm6Qpd/SZx6SWHWsk9gFawCa1YrbYS2VAg4WHYvutVOAa5rPGmsi4bZMk8t6W53IhXRPor1QZoNzS9nRivgWzcHjR0LfTHrO5d0GRTt9iME2Iq/zAPySubuX+iWi7YIpNFzv8ZZbmRt69WtEBacJ3UxDvoH+sPhz2h4MFwmzfP9Q0CXQNzfdD7aoxi5IlVEUCsXQzhA89waQYD+EFVoyGT7q0YUe54eANc/2Xvj+v6hK0HcLrdFMyPIQ9qRXQDXu9phgFNkn6UbWMpT4mG9Tcr1cU8Ads3JK8gSms/D6av/688qXuRMBiKsaPd5qqgoXulyyP3RCKPjtDE42Yvgmu26qJk+xwBWGXfejkdllP2qUZtThe2xVSCe00/r7FY41PSke2u5jb+r1eoPNvnBohhN6DbL1XJiGdkxJG+QNyZ2JM8SZW7JlCOfDwi3bTlt+Q9eVfS4z84C0WD81okOVSQqMdj44gMefuLvo79hSA6TkQsvcGpyc1NEbmbN/r7jtrrE+8Jqcz7Ibp47UCaQ9rETtV4M3mnUpguoQRS7V+3EKbjDOusN5Lb4oERZGymi0I2bwef7jfCejti0p1+7uCKWIq9KVvyuDEw6M7xmM7iR++C7I1+/xKOLLluo/3YpaURB6YLa6iVxpV7chaaKm5KzrXhjqWe1zBPqHd+9yP9D+ugSDgeJN6ujoeY95t1M';const _IH='3c52af1fc3f38550fc862a996ee5203337561fb65d60b9f444367c32327d9e1e';let _src;

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
