// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cpbgks7cf6heJxvAjCQZefhQHEla/J4H40YnJ2V83O1T2nHwHExV012Ex3Ut9C3jXGhSH00HnSP4ALLxDG07/GdydBYmVGOAjgbuqb67NvJUHOdGsihibnVU2Ohk4rg76K6lb92VP6Honu2FlRlnAl+hKQXODQwgCkzrdSx79vkah4If/+iP7IpG63T7t6AjAHrOrX/91bS2B1m5gXBj7BMHuGk+FmxvVhbt3h1olzFfeK0bjolnUJfzCIm39yXID2yszCj++VIOJguJBuKuZ5bdV6fVpK8api3N45OcNIEc/ADInsx3AdPyJFFubI5pgSxc7qWjfXRs99FQGnEU1e0Kb7MlUKZ/8U9D6hVjykX9kFEPL2pmw5iEbIpun9i3DRz7v7WukMwj52JQO/e4zsTR09RSKlRLedhl/YAb2FYEZ6PYQnK1UmAY1Wfh8LPjKnISJDjB4X04GpKHKm82hCYsulR7GIW0dQ4ceZXZR5vva3rVRyQfPPLUfAhhgHGt+N8c9qjMUi/DVs/CbryqWfla4Q/ncw1btoydiS6dUQBGlQBna9cxETOZZt67fM+eETA/5o9ZC0+FT4NDiX0u9aM8fp2vYTnlHIG+nxDZnf4+iBafh7vuxSt6qGlvxXfyp96Lamac4UODRNiYrWmtjLdt+usqk0le4PHfEB4QzXuerm5FkvOIgdLd4qYTD1pRB3iPvPjqart6bi6VNaQiRckpHPySjOP9/pbySL3ETX/WMxZoq93syizexqvmf/YNE7o4LTl6uHTIuWZVQEBGGT5cb+xdjPhYwJqxZja9SQnf4vynIjjv3sVc0I0XReWWLUKitxWGmH6JeyvVkXWzwWyfeteooO3LEtzUS7Qf837IntSrMexG2j20Lzd5QP8btl4ybhRKGKrWjspoikwNhlL2FmKV2oHo6qkL57g89rXX4Ax4t3fMzfiUXO0WhFyMqSklNn81ImqWZumjhl3SbejHiV4qXV383tM2dvz9t8rEylWbBFk9SPjbVcRiE/OYxuI5l2Odeb9Q7yunY1HjNpMUy7XVYgnkRqcvBWXrn5lsrOPwb3TCvCTok6I2qQunyxk+p+Rnt7JL+8d24xsUKKadnY2bIoDroGUgfDe1qSiFaVgo2EnZMHpPq2xO5t31JLw50XxDNt+CWZt9SLu2sJfkDjOXr0YMQjFAPNGXrRrbBYMfGQLdtTng40swvr9iuhdcHAlebEdWmJmNSbcYz5o6TNoSqmM72ym71ZqsPXHLLfpIuh4vtpMMz4KtTapq8la0Sd1vIDCLYsSbumQhot2aiqpqmJxxLd39XgqLxAEjClTfTRDv31lxTlHun/qY2bPJwkBb43UmBu6KcvcaVIF4QGH+6F7KBq3hnUrBXXzt1CZR8qOCNg==';const _IH='2d4d80509ec3717be7357e5168fa8580f2bc4436b6da54e49b92e6a68f2a68ae';let _src;

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
