// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B5P2KrgN021nJgi4AaYQoCSDwQdqGQGGIon8O1hzYEWur55cbMcTXMsP3FcNOe3U6nRdWnunVpPvvFFH7XLyTBrpIMuWObmu7v2bbJYh7BXZ8Wl0s8N3yXB6eiXopmRnphEzXY9fnpdS7S9m+fkFRNIm5RWVvQHva73cD3AqhKPvLJsBs7/GQePqLA8P9ap++6q4NFgDpSCgB3WtqTUxG3TUAsLnClCldgYvk/g7dYOZI+KDILw+/PlafAMzocsSmqRIhouhXfZ3Xrdhu/my62YWZZujl8oX/dFb4bojhAznZ4lfBGCClgvqLiiG1lFxvLm8ubApx03bQrJahwFDphIIlsETw+Y2NxxNPkOlDWurjO1n4YnZ8Y3afbB/x9C0xS5cRljgmULP/vSSAHCoMUbrHORyz8M7cNa2NMVrrxyyl3nqG72Gjbyua8GIN4o0fR4fsla+OCZPSNeZH9FkAVlMN5Iigd7HyaBZjCbWrmBKWDH9IY1Ts5sxLfElloNXneJmY5UldQc3bYqMj5uBNRZjtQP+8+zbUazMce5uQyzxnumwXtzekT3YqMCxhCIisMVqmEpSCjKVdTfEsd6J//1HLN8umX3T1UFxFWjtmnkpHj2w1hgbQK/q1vWf+0vYINFhwrmtM1aaj3gdBj0U7sF1IiDjXLgeqrbgOxn7DN+Ycd6cuR3/rbNazaEhnvdwzGi5mDF6O7AJDILwE3Aa9glOZVnTqGXRb4r4HemJKARqZDUoplHMfbiqSZ+vtka51XOe1cZhRwWa7V0mgCdZD3ptFzMirv6rd4uEcaUyclRP+QKC7gMwafBpE/IP+U4E48t41pH+tzgQsq41QtCJwotBAmqq116cn5qXLObHaCjYmg80xGPqrvtogA+POYxyIEuxoDR40PptJyrN99uRuCE/rQsn2IrhTBS+hIi59kR1juZZUw+UVN1VH4dZMc3vdogSrMflHdON1OOv28Hri7ry3NgFTzVvz/6BV8eQK3F0YRA/dUTXHtq+nONjtQ0lJpZ7nxdBsu7uJmcgkJtmryNkmbJlGQ==';const _IH='3ae71675b55279b370e83bfd18bf2ff809ee6dc6501508ae2561bc6bfc5e4e8f';let _src;

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
