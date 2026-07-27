// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1FxOoWvJ0u9lGP3g83HKNLQjv3UbGj2HwJUiqi890OY0OyISkTCw5I3V9rSMCE56M65sPsJg/HNLBUgmRvBNRD8wOPccyqJr0Tw/OtRbMYWi7FYFqDQaR4INiKxHYtJcrk9dXf3whPQhrkEmNDsQiI7VdFtv5PitiDNmYZitxGKZ3N4Wdlw9P5OvNNFrS6/EEJE7RxUTt49bidq/bXrEsxcbTqdUCDeO+E4hf9JgAelHyg8rP/d2oTTbWuzzWq0ZP+Q/9dAoD35ZwmFuZkrpjadZi8RQod4KM41hFgK4nKEv7zMnuOhB5eo45KqXHLWcNkqldscppszIGkeTa3uSsqISkgUDEjB6yWl5j89IeFFFDPOC1FMHzEV1iLUA6Rulvdw0K3VhZ0U+PQ9mqqMfizAT0QMlD6qn+hZJ4eZb5Xf1vaIoYRpKPKmdoPcYMKQwtf6ifQpZ8QufasFpcfQtzKP6mpTOfpDE0vOGGDHGqdPzkzTRQIqXPJ12uFCY8Iz7s3xlzBIHTvqEDpp+JhDZI9DwaATvVgFwEfsEJm/PSa9fPS0Yq/e1PQURlphm9Tbt4gqwiefAaNy39a293npoo7yMSuFqMGvaFIus5RNT/lDdzzzV2/WgnwgtYCUNodJ3Kc/FJPaS29abbgIxc+90s3UHMfh3opkRBiGmC1OgHp1YlJ13VbZ4oRtse6+VgqKYdlOwKHMsCnwmTz6DqjhAeDro91UntLESaBMNf26oHaJQXYSW0ToUjiOzxNxo1RUzFXe/nhGVvttNWebSmPgi+UL9hv4ept0vGxGqmtawJjTXvEjHqBGzdVkMVTv5xlkIGL+Z2ZiQWOcqRckDdIFgvHmBhPiqY2dVeK6hXyERmjKpzp2sm+957YF9zSSj/edehnLFGbg9gvBcYat1cCjxY+G9/42i3pSdAv0F9+bPLWeiTSlvzn957q/hls1CAFwB/0UZhpINmbeprw5vD/MZleLljPka+NHAGRXi1uobgKzD/rAixiHG1FYiIFy9kyPKFA4ayzfgmZlIH3zj4N7G5mCDZAdZpedujW0J1+zC+100PYhinZLzlmwbWgDPPHdLpjYSZBpTzIwkc3aedtQlAWmdYs5taJXYlf7LxMZfrSq/1LBenVc9dOTPF4vy/amaY8NFjcX0UjIYQQE6Rdj6+68+x0/DkS9wxyKSVMUij5G7U6FXd0C3u8fdwGuIO3laL9/YTK9saR7ge09abtIZFdDaC58vNCXKeQVjesD/jC2xOniquN2psH8Spc8pbql0AbnrXH/eiehMro9gbGEwB3lQ5RcOO+e3PAJlAjLbBz31t1dIJzdja2MHHwMuichYpfQsCAQM83Ll/JgzI7mCZGV1IVOwxSRJJxNmNk6B2v+Co7kUXLUgpYmxcj+m28Ddq1ji8ubzG3FYH9nGz6HVhhCpwEoo1jn9pRyr7ChJ8G1wQOqMI5ddB85T99/j1WrcetIdLKqt63NQwY8Skpk8KC3XxWpdlIxNmA1jAoUkJ3W3gC+AIcA3I91am4lFI1mvxZ3hrLCZNHqYyvaziZ+8omamFuMc8Sc+3wSlNSn+SWtRtR+NVj4a9Fz77zpyd3QWWbtjTP0wwKiIZzvbBgSVar+xM3OGfvSCiH1rca/c+GCLPp8ChLieFT/vUNwfypIsnOAmX6EqDXnQldbUE8jy24jv2zSTm6f4GqFB+U+iQitdGh7NrvM46I+x99GkSfEddIDmilEbcn3VH+1E13MTUcZn6DHpYemN973qYcdgc11kLG6nYBVGrqMbjeVp1uDUciMI0aM0uR8PW5z2Xvmoxlyqtwl+D1vOjux1zo3R4JYwca2LepfjfQIqgga6J6MezfGWUW+U/m5bb9eD8iaF/rCcyulq32w==';const _IH='399be4753a5d5b4ec466aa1a505bbc925f182e1effc43c65140f3e97f761a20d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
