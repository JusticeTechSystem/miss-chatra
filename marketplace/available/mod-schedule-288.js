// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6wDehehTWuPNHFZO/NUkuraLRiVEYwEl5sgxWCAoCTcK+AOcJ8KicD5ErzckEOdwqsLxtbZ2T53yiLHDqUi0Vb/FzQ4HPXwd5hzlkww9CGB9bpLlbb+7SS+IvnrD8KcPL7d0i/u3bK+FfQXm+aq/MsV4vuGZNcZjdm74VSIkZIqEiLQRVia0JRtf7hDBGrYQgVK4jr1LAd+2nOoOdR4rVMK0M/3hu5xMXdPHHWhADXUunzTP3+tephaqdHSlf/M3RIlSVcY6K9FtbtHKqRGsHnz0hJl1l+WgBolqj/JwdqPUWPaTpNw0xaPdh8Wg0B3ytWCryypAr7fyEjfgMjfxEiYcGOTmlN/PHgO8HIRFsejPc+QvQfBBBFo6wMO+Ctc+fqtAmJ0rCRqFsKTCKgqSxBXlX5b/ikiDDF9/3EP4urPd8E+QaHWIvmTpiouL0m7MJ+JiOt0fVPLmlAcBxgQUA+re5DT9cRybgkD88yEqLBdUUPgWNbRBVz8+vSJ0tJjEbkBO65Wr32YVrYS700x9g+ZhVzayUhkVE61UKHaUPV8oZNVb+FkE3BU49LbSFKGp3jV+QSaIdyZ2RamUuN+DQmPCaDwPXxRPQs6Uz2UFCwpHRth3ryG57k1D35Sc2M+4bTfIaEJabf0/3TQ6EW0HbHBYgSBADfVE2N2cmqbbYF1RuTlaQcNKUdcwfGHEevkfjVxA56GXitz+0IT52ubOrzFEzV39u9rEEmbO1LLAJ5vDa44ZXOPE6nARt6AJFVc+YHLMLypJtw0xkOCslhNYuU1N0IA0OJPVaGMRfedm7NYVa0Tn5UnvZA9xm/F2RuPid9yTTnAhZu/VnfuEFYWZP7J3t9ZPoxD6z+0x8JCVPx2O9ptknbr4T5eusrNdL9jVKXWzPwFGJZqFVOWqjeH7bj2/19ehvpQV0N2WoVEMhy8Zn46HHvhsogZSFB2rb3cYgWoyImcHA66EuJ0nqO1AzKrIqrNu4cO1W0X2l+B7HQ6O69iyEIGxSQaEWZCW2vC/RxrSsBo6ye+JaAeFsOuOdIW/hcG5VkEzJX3yQ8CxxKqZvWzkTMS3XNdIK7+lPvbxMrye7glBT916yaZNV9QoGO1OASYt7wmDDktSgydUH0Qjk1amgELz+WAUhVNhrwD8Xz7E5sgTGmUGxmiGrITlaX1ShD3bobwmQY176Eb6s0fKrkh/mF2qOoHpqqAr46D2NR5p9NlmQefNBOE41n9nrpwfQ++InOjevoO74wyuoIOVQ29qboBpTwawScDHTWRlLUrEVBl+bjyEI9SSCtFEsGdeToZG9HsI+GYWkV/zqcqUxs81wJNtAuww7CoNri09rivSzLIEVgHpbfa1Ixl/xkIzIgdHzjUmCkkBjp10YaZB7lFeMVXax9Q0U/SBjRIKZ9+wUVOPRa2WHAdFg==';const _IH='7c4dd1e6abc14c80045bfc49b3a7d080a1fbe8d7448069636099a55fdc02afef';let _src;

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
