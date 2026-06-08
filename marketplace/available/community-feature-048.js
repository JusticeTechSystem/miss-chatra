// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPyg11ENJL7bwdTwiMlNoaYcflDGsQqQiCs4Cu8hIfc6xvFFX0R3xa+Cyc6/7HOSOR2ZIIh4DZyut1D8GHR0zzRihyIoUdLH+xaLIniAiFPwT/sicJUXcsTWtdyliZ0G3DJVMxBdLosUlm3Lz27cr+Pys2HM+IAyvKVwLti/KVPCFm5lyIFvqrbVBVos334VnFj9cgcQPPTIb2P8TezWCfoOe2SeFQrED7gXdIwAJ3clrfAx7u4VuE7wEzNVbdKHKNhaLIkUzeloJJPwms8Tm5ljqdiTCmbMxuJPrNYjJQKg5reVN5BGqrbXVkxFWrbYBcGFuGe8CCIGYTSqrEARhgeeER/6gvfW84qs8MUUvOH32hCvC37EnLtZEx3vtavT/vKF+be4OYp/uqdnX4VfM9gSLGt/McjXHZuXBTOUylr7YTLI9GySpAEhQLEXmCgh5vHjP/8nq7lx/aZnKHB+l5eEg5HKImuI/DQWu7oRKBAr78kE7T9JNoV95PqSQDIb29N8pJ12RJpI9OYkVSY4I8GBmOq3ZMXVyLskwBJHkpVvN5kHeB7M66JOf7NxM6vt2/twPsNGgjVuQhmySP1kZHVf5HVpYVXdxixXE8DdQ1T0c/Gh3aprIJ+XhjI7e0l1YfRHk3+AeSF4udgnoZS2PZcc/fS9OjCWoszJJDpP8vo7L7Z2KYp7k3KJtqckieCEYhRp+MVWbQsxoKfP+rk0RlWBWHBa1m5eWw==';const _IH='2762611cf2dc5dcdafe72d2ca930a83b36913191180642f2e4565e6c77548493';let _src;

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
