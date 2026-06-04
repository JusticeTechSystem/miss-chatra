// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w0nl9iBfGZlzgtGu8gZUrlxadODqjHeFPkwyf2tG75RuEZLlLOdLHxk1lNHyafpFWXcqBX8jTA8RcTx+mEyzSPSx3KKd4nfdzRwN4i4xNRa+sddiE+2+4u+56t7UWvUCOgCqSoJy0rcj/9b9+ePixXFoP3NBcOalaX06bnWsbChm1FuKGnGNHY6j1kftA1m1aM4KHEr/TJ0FfDG0168l29T4W4Aa28lN3zH8NUrk9VOlPzYVRwYGiTF/gcGMuIRPa0pVcsaccz9NKePwf8Qr8WNPUBaFNANdxUTqRytl3K3I0T7T7Y6H99AIMNUnn8PUVaWdC3uWgI1KyqNu6kIL2lgZTLG+cJVGJKa575lPQ3j64C8ltawu8pmTCpYGQmcZ3+lCtNcfsyISiDhQOzakZUINBvTOTvdSLapGq1lNKEuV0zIaOVnRQydFwT2SRxKW9TP3Abant2IHHGhwiWgFyIqyE60+fosE56G+KKSKQ8VZ3xhDeLfBRpS604NKUmsjxiOC3qBP4mDZ9j92ROQ8kLBUO/wucRT0bAi/q82dquq3aKbAiOxsObg1A5rcIsNFLYQFefLmvswqG26JrfJ0Plk2OISRPyKUhtaN5HcgitI90sCU3utpHTR+u3YSX+YkVdA15FU5KejQgyJngpCye2a7u6K0NaZahofoHn1BbQcfoEuashR5VNa7pauom2mCOKiRfVkS4Gp8kfhQc9S0xN4bv7fQ/ScckMtgUaUOyGYeZp5At5RU2DWyn71CRy2lhYcpTAwpuEMsdLtyubYVp5eNdsWRPYYrSh+ElztY1ixkhth+Izj94qjyI20nC6e+1jYw4RAuG3ezX6zEKxdbOPgLWtPhkqR64ZymFTfK5RmowZ97jmn8xnhzwhStMmEDEBK+s5vAxj+3mxDOYiGvnxrM/Nmym8zVhOM0GKr0Q+9IJeXkm+x4Zaiv1sel8dS2CNcCvnAYKU+xsyK3vm8UP5Yb6Ax5jpuErt4N466Q1tJXjmMfCheUoRGJEH9jAcqs/TP3E688cIARoGUA4YBQ+ad+2AJXTNINud8z6Z0f8moQy07dn6m/0oAgUApwZNKwqUTYHgFHK9O+6DYbdr7/BoQ6wTJaOplZ1oqWTFcFCkjRIdGLoGjDKybxZ2dn91Vetm2ATuhoOkoQq/qPAxFV9ZKIRdfo0mnhBYYntdpIQSpUU/FDN3tw1Yu+59TH/oJf4aRPSsbHwF1xODIgIVOS5Y4br+Dh5sfxNKS9dFyriCQFjVVKyEhIZ2ghvReH6O6yzxlRo36qfub9PD9PiXl+SWQdjxUKttfCTiQT1D9SGMxVfBLYbhnneWUbKe9I4C1FAE75Fhn6i/z+YOpor8AUkz7oOdbogWUlmLZuhUcw';const _IH='b5e7229a30e583d6654765d5ec633e81a76b1daeb0f24481956ae84dd5dd2a0c';let _src;

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
