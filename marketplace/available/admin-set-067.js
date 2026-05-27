// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9yMSvY+B1pwf6i+m/gR1JF7rMr2WQSVOrw6/wf/1Ymv5kGIigxI0JhIRUERoF/JZq8zM9wQeZTxkpvxAZV/pDAPeBlHGep9eG8qsOAkQ/ENDw7G2q5eTbEcUcm3tpqEJ8uhmX8pwi6WWhtR+Fm9Gy+asnA1fQbEpY5qUM4uPgaZm5hav5lU50ikfa7iDdSorFxIE8++ij/O5TV4ZtW8UU2AJTpG2DbYmOD7YWFDHKIddVT0iwSXSZcmrYTZZNGVOYYHn9Xe3mhJsJKcH/D3KxAW0YeLvjrjfS/sUkSkIeCDcL2IqN5uMVC1o7V6n8guA/xATxwCN4X2PX8+6F/hvjVVf05aJoIGtkCRpH6sBpVoEluRyh+UBU75JCRl2eWMrpj952R8Bv3RZGe0bpY2mFQktUfvKJmEKRdGXspvGu+oZicG+tTsQ+sj/iJM82o5WAY+8JYxU0x90+PBgxXzHpFzPQWx3m8dpSNIJKYNXNBIleqxR6EYTlVfUhmCU2cLSMqRbBTi3S/Le6LnJIDYlS8dl6oPV0cSal/PKxDnsMU7Vkger6BObkliGEL/zxmniKvFg9DDfAs669gd89zJmrM4WeEHT3CJoLw+RKoFPRLcVfLjrqogbXUQ5LG6qvZmEi9p9W4OCnmxLae9DQvko86VMTDK1TxnTco6vI9aaO1k7TMWK6JMrY/6F9Xa3872fSTQ/gR8YHp49yHqd9ym7JdVc3M0jonkKk3ngHeshmTjHd2TqfP4Lw6RVvEysk/Ne3jKaEe8HcLZ1rbyRp5SMazP442IeTVUTf6OB8awBxP1SXf8e1198GQScl3tZImMOGIuN81LCcS9ffUmaZzD+Za0t6HjEo9Hdw39gM1/G+ERecS+Ak8tUHr01hzn6eGVN5dpS9rcdt9whepcV068LZ5WdxouX4NAEv1KM1dSmKm1Ufrkypy5n+OFJqCWUHxrv3CrfmS38y1rkXsBPz3vHZT0Q75FvKI6o';const _IH='eabdf3f6fa0a6558ce6323e84086e5b47241727c2c7a4b75eca54a9b7ac101da';let _src;

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
