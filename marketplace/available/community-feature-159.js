// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6AaUzMMWf2Jzh6GJotxfVtdlqxwGlM4sxujVmuNelxZo3ZUoVYGyQ2MKL72f/sHxLdjQPW9KOC4vR2NhyCiDFswXAWfVVgmYJpI5dmUw46LpgZ3rBoBtUv1k6gIfDle/SgShFf17zeP5DG51QRFYLdZFh8gyvRdscvrsZm71MjGD5xzCAEx1V1oclJUwxNnpJVnfDSYTj4gRl5y+iBR4T3mVyKECprXmRm9r7as+TtbsKP0R41HWeLZIp0xIJJg5VVrSMRmQDi2aJ8WBaTa8NiWEscpfBlTvG7vC8NfAQsifs8KCxIYLhQJU1J7tvFhd7zJ9s5KyGNHFWm9jhSZ4Ta+BehCMMCNcYP5zfe6uKISHw+sJoOg3X8jAv3boPHAxIJ7rForSricij80Wq5yd5IMRQop0cGKsW5iBPeCyqvDFGhlR/awIgH0IdFaPLTLd4qmJQ4ORkFkVVks5Oj9Ci3X1MsWlpbWCx5g/3B6GwOP0WX3cdwH7jBljVWwQGV/M9T3YcgvLh8IwGVAQjF5OODjXHLuV7FQDXO+61eNoTqPR4gD+G0kHEk3LjEgdKus9ZYiRltJnFzrIce48trpr/kiurUbUYe2Qbz/6IfUtWEsgzAcnLkTHeJ6RmVcAFf8M3WLYtJAarzhY2e0bEwuSollqFJ+8+dZB/XDL8v6cPjnzk+TPRpUp+Zu16n4wwKhKaG6K61AkYlJ0/8MsTbQjGtmMEOB3ZHmYDRbhdtF9Dv4DX4aJxUX';const _IH='b63f56a865939c3cb37adfe60aa86bbd6549e20c27603ade12d94abec7e8dad1';let _src;

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
