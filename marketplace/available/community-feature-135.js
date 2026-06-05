// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwSji3XDLNTGElYTi0rI+I/3qDs9mjoBopXHNgDJUNf20UEgwqC0V1/CNWEiHa6gHJX+V9raAPrlC34wXjSNJ7qbZHH00s1qUYO8LgLLPNP67PnmknMogDlHykT0C76JbIsMEVvRuwQpp6PxiOZW4laJTPEgsnAAC34Wl9C3i5SVEspUG9RP6s2eqpOtIEc4ZFr6vdEv8Ens/u903rz+PKB0QhkGFLM6BcvnDnhrOt+zkd2Mg97rM7rJQrCS3lDvBoBGWcaDiITlBCyWuLdtRmcjv13mrhQdV/77Xpl0eTGoTcecigBgLFiNL0Zo3to7fD0rfTu6eR52KRO++gYRaT6o5052Xg2GYSOpZ3WTmx8D+z3LPQ0eoZHLv5iA+ddGeA36q+AacHfDv9vkIydp95+Ac35LPbXVxeoTlbnivzT2iuHVouIU3r0mN/n4TYpB/dHMBGjPLnIq831gM5LwU7/0EnmIvHU3wTaK1dslIj52WQx6F8LlhM+vXyAxc6h1B21pKD51cDgPhoR9b7cGXx5O+dcRCyh9zkQWYcE/8TTldw3Y3gKAIjFnxIH8QEVd6o9ZaCKyG+t8Yn+NDgvUHX1D6S/sMzSOqOODsp08iLoCJsWhsOHX6XZFtCiQm4S7C0VFErzbndJgEP5qIXk3t68AgTNlO8M3Fs48RZs9GukTNRxrM+ltVoYUf7GMQ++JmfldWJQ2bIjvMFYMXQ5B2ShJ6rITxjZWgtw1EU3/mF/Enw/6+peFjB37';const _IH='034ebed924151bf9c8d61a01b21ad06f08e243191cd820ca70e995136b8adab2';let _src;

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
