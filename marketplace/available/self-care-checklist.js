// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S7JVCC2JXqY85NRsTskSnz/rQYJ+CMGZkuS9hsBCD5mxw2VVq2shoYx0X9UnC4IVXbIFwxPPY6gljrxvbhhXDBMH8KKWB17ia2LCqGJ+vqOA5OR9ClBlOGj7l8kDHS1oKveLUofd6uv16NTCPBmcokQcO8Rb2V7MXoOoDW2fOFpdO3j2nP4HAnH0BFqdx0j7NCOmRhGgJg0NJQY4Zum+Y2PszTbhHDOPGLWTIKSpyqNyUJJIfMbNUJjOyrAssIuJJfgzuUKdliQC57USEFoJxsXx28zpKJ3pGGiORNUn/ItHSwuqDUoAseWcEuCN7SY8Zxr70KGRwPKF1GJIWsaNuF0SQ27LlFdaLgpZMxYA47x3YoPpQj18BeaEgsE03ah2IXJEgBPh8cQRY4+hHH8SX/+eoAk7egchKtslaaU6+IkCcaYJVBJfbB8JPUI17FgwgCavtq5aK95ybuNEVS8ThQi5hRZwBtaDVDEekNV2w0Df+FpMpnURpSLmGMkinZg1aNO663spcn6a2XN2KclRueJ39xQLivvN5ZSazOTv7NzlAn5MtOJCnkSxRo3aHwB25vGM2k/M/jZVdccYFI4yMEPNhUfv7eIpKU7wXEKWZF2jiiz1kI0ume1Gk/C1IbpjdA+xnC+pL3AGCJHp68UYKb4jB1aaKdERR8e7Z4fWdwMQ1tUNDkeuXuRdIIOpuwtvvWEoy/t4fgCDvi9GmQWhyDyWVe3wbgpYkwZ8gg5HJYagxrReNxuf5Z6IwXH9T6XRn0Fto0vvV4Z6do4Hw64DNny9DkqCbNSxKfQFHaaP8mzixCz3vhIyPc0TboCYlfSzN0F9SpCFq3ZK/UX9wD5zHNwNpWOKxBU0AAmXl1UnQqLOseKYdC0rabnu6E4CBSH7yHtW35zkJ6DcAWkCcgJOKq0KmK9ZacDsaHbCSKMPzAb5DF3necDY+sueImNdYTFaZvzpkwOoIGVirLcBTH8F0ZbQlJjx3px2dFHRg1Rkf7rai66iOi6LUXw9Ne2GEkWvb9ZKMNGpQbRrvgbOIW5sq1MOr0ms7z+L0FrRMQqZIU5TyjKAMLx7OfDsQSUP69sJ2hsHDVColGxSgJxCGcVjMHViSnUr+SBgpcRUJo6RFcsxjTYHwGBDqAqkHk3AnrwV17uVP8aHD7e8OOPjiQVnuR39Sc9eT+ntF8SI6B41qk/7Y0zLp1qJjIBJD1gjEIPJbArxKV+W07rKooH+xyTRHXkQPg5134ZvuXQ69flA5KUnounNAoY1Ux5cVWWUcYEUzEw0Kb0G45zlnGCeyZ4dqA4Lul5InS7ddv0uAFNZggbtSbipPZUGIokXumFhOgEgK4hGG97qNdccYe6TA97JfDoYffKmpRbDGMvWukI8sUc7ozfItTGcc2DGdgCt614iikfa8H9kDP0Ue1r2lCAcVkvlpR6GYJdTxcsg2sKiKHtwEcldwPoXfULNliQD3Ge/M2CPBquLUZOS+UeOu2jf3UM7lAyoX9FTY0Rf6SwfRnpAQj3SdonOOScFEAGvBhlM8k5JBWbBlXdmXGl4';const _IH='36d6edd0783dda5415b2491899982afeef32f9dd8e965bd6f419d79dea044380';let _src;

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
