// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eZvEjQSiDQXje3vC/GPxRLU1oLJrBma4X3v/C6yX1UC+gJNd9hsfglOS88i+SEcZfBTRFaMA5Q/+RP56jfFu52/dUi0Q/TfdGVpjzucKiibYVghbZWu1DR+VBbboMXD4Zak4bqsFR3sB31FWNYlfACzt6g+Zh1ZMqtRXJqzaUUPwmFA4lkdbMku6KVHfi3Z9PznNl1u/piRAxOg4OEz56Dd7/k3+5zF5x0r5YFnJvmZrWMp/Xies6V+0tvRGJWGjrEmo+pCPcjPdS3sgGkicADZfaRFRIv46VmblwRx7BX5wFPsCCy9ob5Atjhtq7aHbKN6Bt1HK7iYXUJCrugUYzoRzlXCKhsdEamlqJX77as4IrQeBKnxzffOg3tu8iB8ii+1alDlusJD5UoDsifve/LFD/jEKu49fiaUpxCFYshL3EEzLo4ZvOcsIodeL1s6hgnxpUYSTTQU4+6svOM5gV05KO/l/4ojGxi2oZy+jwcqhtwFFmJ9FUDTYWiZK+CcziVe5HfgorbNEeCh0tlW574l6BYX6Zg46V4piFahVLK1asSEj/FbdTpZcAGDwAFPV1rjD/O0l9JPpq5czvpM9WDdxvfH0a+LviZNzmvSfrY3L+SP5KqbeRzkDnjIEjk9Hhr1IwcFgj2ydAKMWRSzPFMGOsU5YnrAZqX4Dmm4AU0oEZCCiemGnDMpSsbI+y4V3xAjb+H6Y37ldqSJAnhRLPI20/ucYWUtvrdHk2xKYTOj/N/4nwn+F8/rAPpAzkHRXHXACS5j/dbLojoKQfFxWPr1sCVtFvy7xBlr2UyV2ar4OW5lXWQXNm0T9hI25hkPqgSu+xSm60G5tRi4q3pbzZNVkZSiQK0nLXthXTJUGFSolDx0VM/kSjAWg67ZEjEoosNSohtqTS9MsG7Xp7w32RSlGPbuIAnh/GFS/lJep90yFiOGjarDNXMU8kbYfGJX4dt5FdeUXGZEF77lJ4FYCzccK48YfsHG2Gi4v1qCM2EugZxhxNadwDmaRtNAu8sE9DtKdVhaGpMOc7JDzp9ZzZ3scWAIeg9u0MRqAX0K8kbcKDMM60lecJjxAwA5L4ur8lnC0XhxYpgbG7nr8f7dLri1s8hKtSQFKcaPngSl84E+o3VDwlh4s/mHVB4lw4va9naX1YpTCUo9LZZMGvFUAFSEOBUk/U+RaU2a+Hrq5rk6RrusABb7pbyLCzrgHIgD6BZLvFs2jPKV7VBQK3QvUc8yuXdNyyWIIg26+z9oi0XbRUxmvNDzEAYx6pjQHBqsRnZ1TzKr2Qk6JVytBWLYQcGO8yqDjrS9D0MdSLkMpC8EzbGdV+7Ai35WOC7bxOwChNKva+28UHGJljFmGEBREhJtTu5NlddNzvUtv1g7q';const _IH='0b63a7c6182182ad0595d99884c72ee7c9a736496227cc4540efa934b8f74a32';let _src;

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
