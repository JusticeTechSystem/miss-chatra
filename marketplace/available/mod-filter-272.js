// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hEdOb7yaWSSHWdG5pHcc+9aHLtbpyimIn+sna92i6Lz+64rj54iV1QrYZyO20zNH9ionwgqz0v/FYq6NgWGGW63xWbahqAVI97NfLFYOl3RCkRvVbdfm8F3RzwCMMmlPfox+99adyhxiXX/qCzqLpwUiJQeG/z3ycEKXnvRvalAILXId8B/uV6ST6rDrD5Y+4aXPlSS9BBJpib6GqNIC4W5+2kZaS7MVoq9hV2x6oIELPVfFsUL3Lfeq0kaBmuTsbLqjYu3pelKvX3HvWfqGFSzXlLg6NpvYrZK/i2dSBetqRN4vM8NlSj0CFf8X8BO4r1DFlIkJUjDcojkYMcKhA9O7xvVXRCsdp/P9endeGsYmHLV0g01GFOK0Uk8F07XnParuSsXKKCMCHZHTJcS0UJqYkw8IYpXUxrpqaBSGbLYR/3hcaixdW51FjlPkfB/Lw0kdQyZsECczHEhIl+lTRFvWge9qBVu00zM/MyRaq6tp9rVQkYlL3VbHDyBsZBY2/LZaodah5e1mQbEhuW75II+oBh8IJ8WcfkyV3/V7UZCTDicQnjsj246jx5Lw6m3cQKeEsIO3ddFeODVC+F4H6zeniFQSlwPKK/mJ7aKM2oyQ39aGTTPoCrrMsXJsZcNF+1qm32t9+pbuSSjDPScqT+ddRlfOqjfQ2frOpV/L8pxwYG1xq8c3drYgJGMeVPzw6ILTlFPdTlvcjVogVcaA9oxU4HY12VsZxSIvz0tdwlLa3KawAgZqedqv5VX1MCk0Qghvn7LtsK0JNAA4AeB5b6zJGVAVeS9Ied1sHmxLnvg1N0XgIxKOljyhCPfjSS24+o0wUkz3Xl1Zn/h/UbL5dFv9ugDT1rYGmIyxMLnDMyzBneCK94ht6KKKSYPFVg64HaSmSX50ivTL+wo9S1Ow3hVPJ0khGRCnBzVHF/D173jhTBzJUY+qZaFprgPVWgU5MSc7b48Xr2+k35cxWe3NILc5HW8JQZFhiUrxl5rZYWgPnkfm47zI4N+658WCyWMwcxa+NNwqlFtpg/EGZqbhVYxz+X0jm1yCok7WpwDkvmItluVS856rZnQk1K43TF3Qigg64D9uyQ5SC0v1TBn97sFm0yuk6j6BNg6QGnR8LA9zt1rTpD3uxnRaO2s/wZPNpw4mj3TzELKjg5E9JlNPGi05a4v3i/VnaqI0MSEi131UEW6mCwtMUbrNmIMof/BFJYo2T/VPs9i1gOj6G0UFrGMw48QK4nufrTEUhRdqBwc5XHL1dCN/OC6xWufDpzz+MwNJlSPMSOCInLyVT02b5N2KMSbqb0T6/v19ZHQ9yWW1ngFwSmQRpMtgXGAbm59rSsyMueZawcDcjTtg0FS3O3I+1fBKRFLh3/vk77TeV93ahCsA0a+g2Q==';const _IH='63171cdaa4e2f9fc99a11850708a163a1f7363df3f57c920ae47c1c0170c556b';let _src;

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
