// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ31LkG1aUxh4IpV5I8YjxRaJWp2HIQxHez/HSLv79gUYhgwGe4zgk/l8OiRS6k91aeq/+TF6dKmxjj7DU3hE8oFu0rw/8vqTpRP8LirTF9YKPS+iihSgkN6vAjZPd1Nplv8f3L/PH2WtV0KKhuM9QvosEHf1uix8BY3E68ux4jqD4cjPk6ICqQ/IdzjQhPFnPlajbzZnNXtVz7ao31WAQRDUEfxBluPx0NaT2+IgCs9ikzesPqH/Zi0+uWgpJFnXuQAAUCg6J0fO4+j1j9JxW4w4XckgN55BbH7Y5+hkXDa4y5rTGEtOvVZgQa2gMAFkpHmRs9b97W8rKtjOY42gIw+9ENzOufvlR3nePLqBkGbsUoooE/9bML6DoiaqZ4zgfPUZVJA56UqLQjP/IcNDhTRaA8riRcWjiYaz2E8qKcpwgdOTBFW939rLrlZ7o8pIthSpSB5oi0CMIYpGicWivKSXU0RUFCANa7k8U6AelakFuIW97JVMXBTAP37DKcPzTmufFCtMdVDY6zGp5NTBjLCd/fb5IAcYPog1GD0QBUtJixwR5ROGHlOWaw0xVNpVQeb5uNx3lzhMq13edjhviBI1A8cQtXJpPiaXqi1LMn0NW4GbRMvjAapAxdUh6r063JtDdKUH2tykhrCtQYQwnhOrsIGoJC9K8/5Pf+5JeOuoklT6+O1NLBh9kWyHk86xo21rZVRmYpt9absuZ1AbwFZZkttzQf1fommeu11HJhF5rIcg9Q4BNKzvOrhSYdYjdwfdAimoUUwypOkCyGrJ0KgLGJX79zZpc79xwlDGX88aV8YHb2BzRrKiVM4Sz8FcrHv3PfjR2M1qh9FD45wll+lTvg2Oqo2M92Ji8wQcHQ0BkLTrYdAJSNh9+nVw1C0zff0usYlubhBg72ruNhoVPaDsmJgYknIUdax/YOWuNBptGTMgLZ6Ecu/alERrNVg3nTke/S30mEFlKC7+4uFN75wjohiiuuSAJULSmxMt1UR8kuN1Dyk2hIelubqNzytmVo2nn9V2nmlT2xpeLULCio6tqjzjlR4pQm1EUg5cH6bZa1U31OGZ8BuoWzgx26hyz0ZTz+h2+l+NxYgJhkBmaQqqaaqcJ7SU2behVej149PwMKX34aVrINwBQ5a5ELEKJC5roB0ywZR12gG6qjRXV/2dOx1h05lxI20Pxe3IdxDwzC0Md1Q3FE72vBg9yGa8suECJ40gJE9ksCvYwclf+cD3JBY1ApYJQk+rfHDiAzxQC79406bs6ArBVKXpxCu0+9xsPW0C6VwKg5jCyBwG4YK1hVkNLl7onktrIN9LSE989gFjxjxb316rp6s64hvu8pwvMQVqyJjfE6ArU20AfMZEAZ488EAIfPwACbraVA==';const _IH='9d6251662061528df36b138d357038a532bf9b15bcc9fd950e80eb99cc8e005d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
