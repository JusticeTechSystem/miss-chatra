// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gKt8sNanlFSJEPRmH5KOtYU7tJYqgnLiWXdG0hvRk5fXMSH2+BmPPgTWDGm6TYghmM699ZV9kALoRlmgKXwLURrBmsIianuw0N74sSg6ao0dqOJd4ipj3o1s6lpHXygThH+3nsRoItQj1zPBIGuIZWFpjHGdrbCwg5Z4apFAp4r7tC1rZw4WZmd8+zaPnaeNhyaymRMjCxKhOIf7Ul8dCfYrIopZQngHKd4sFPBkqCaPJl518d2XH99SxHgvGuDvTWQn5O9rsz47PLSmXUChxfdxnSY7HYBasWr/v1ViIimoFHyt2F4HcptPf71idGyzNRvUqXI7B4T/lofych5oLLhNCnWyNIx7HF0K2ayho46m7L8dPhF7fc1rKfAyOgyIrPwwZNteypCnIzdQ+F9BFoUc7vhmQKYXbi1pOJwKMu3y2R1w1C1DIZYcmteCvR4YNAuVp1wmvMV0bX02EmzjQD4hS5IWtHU+5vawJoULJOnNh+W1PfywUmm8Zksu7FZFTdPRKtAk7VRInLj3JcUg2ayprgu7ln3SEZLe5lopyuh6PtBoKfAVwoZj8kZj08V0bsQ9Toe8jS4ft02iFO7z1V2+QA8N5OFOSLOS+KcAEFv8qulL/jtVxojFi9PtCP5/6CCOtl1BdKSraIoc94DYT7ZS+X0sEclKfyMKlP/FEDeG4xcClVhAKChgcUGPLY23+n2giJvhiEhdaBjFJzkFowD7FbxhqxxlWRzdsgQ5uTUg/GqWWo6CuGYVeSq6jsKGVo1jhvFYA22VdLruLvjz/2J9ls5eFUX4I/PF0Ovjti4vKGfZpb6KVgij529K/RVE2C4zwplbgzM0pwVllBIuFl7op3lBhrJibr891+gui7AS99FJ1PIfofDdilQpc2XIhyjF86klikZUQVKegYKEUd47IuFJLt44Q/bGYWrvEjX+AbeJVOVmrgyO09UnkBiQvF3BgU1EW3Z5nCWRsnSg4jwGgo230AFIhvtRGw44a/aa9vFA2HbFHvcj3oFRz5bdLB5QVOljpIs5N4jX7zPjwcmsLSChUuRxMYGE0+0sy/Up9nlRxdtvsM7S1+wXCqejb2FyCIX0n5PNesXOKFxPpnWOd51fWUDlzq13eaT5ltULUWGlwo0ruBahAhTJmBodqodtjWOrkcBEmeFoB/NPLTQT5v5HNzpgAu5h+yzZFLxqkChSz2Z3+OKP6U/HzmF+Y+JBSRt4fJh+0hThOUfXNQUUeo1QZ//+Po5XC9SvvA9lhEuR35V+9QWizrWojtS1Lj2ErO0IpCPdEQE8WI4srAW6VNfqzBADUohqs1BXcRxCEEUvmNWMmMwOg1PbkHahQlQwb3+S1tIc7ZkHIiD9Y/jdwBH2tEgwfxmDU0Ahq5fs8ypoAF/Ds6Nin5dp';const _IH='7e62c13e1be3f8cf584992a1e625d11215cd4db9b3a4b488be49a4f056fd503f';let _src;

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
