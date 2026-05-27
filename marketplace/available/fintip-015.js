// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Vpx5U5WCb0j5I/by40JMP52tF8rdLow2SYs4SYiMkH8QeWT7Q4q0fqykirzCal74b1/06qE5SPpqM7wvw7GPGit4nf0RbkpUFbc6e3oIBAMmrrbRosAjn+iFkHAgnqqxoijrsqx/AmCFOtORtKfY7V080wvIpi1Iopo+8YqrK2v5V/PTSZDPzbZnt4SutAI0gIDk4GL2UtbplGL7gvFzj5ETWtNyZiBmb/IjEsVd5qHn0cFqFiGq1rb/pU65kAGDPWCsuE6PhUtncy/lrRSuyb2w8//GM02V0j8u4p07lPXjW9K5Aehpt5jE47Ht2/Ut5N8UUoBZV7/HjFcGyF/jzSFEdaZMobozQbSBQtKpQmE6qlUrViqaN6YhXe5RXH0T/J6DIiTxGP/jQjapicLJ/NN2GtVYkM+adlGzauFP3xk5E8OaH0k4bKi9xBCL4DJUpj+jiZIL9FOktfeiqnXrtqxaKtPlCLFke3NTiZgG/vjAzzKuFJ5C3W6U3PCdJrkmrYnfM+JOrdi8cEwLWLeLRfnHNEUVwWaTCLyeytx6PzLLADOrbzCndMnp15xDrRq6rEb8X0T54U0BFrXbNBYFGSP1z1s9u4Jbfqlou6DUmhzTkOceO07FjqPtnMuj75UC9OZ8s3aj4J71lWsLsrC7k2jEuppffhmtlSBSU+KIlCDyGsY01WXjooYUYz48W+eFzH6zqgMbt0NOeyrJprOrnqHjN3lPOqC6XVBRLh9e+gInjI40AJPSAIQg+6aQikMS37Re/Dji9tmGwEHQwDpMeffHsXjQhzoHqUPPPtD56rCUiyBR41wNIihc/N8EMjIpTHd9THupAPqL+GDHg01+bhC+SIAkBYfJl9L7h6VRNHyUpqmWCWT7viQ8jmie5VFj2Banjhx/JQeTzLq7htVpFifzBYUy8IQp2jwkRForVpFtXJVdpOhfYivh9RbkoftW90kvEAFdZvGKp8/A4rZr9QGjvoVQ3z+RPTF9whD7bcUQxSqsj50oyAba2PbPjCEk8BN9UtSQV3WturZD5kot28Lno8X038g/uUMB0nouzDTiA==';const _IH='d1363586225e981558361b2277cc62c666bcd30628f466515dbe750a8190b7bb';let _src;

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
