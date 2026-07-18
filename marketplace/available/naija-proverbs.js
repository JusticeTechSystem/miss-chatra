// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLoJ6EzGFLDM//ut6D0mDWA94kfRXYHRF+KzmUazcpWshx7OvvosVGiD2cDRshKRpdsKJhGcHyOHm2l7dQw7li6an4n8O/QYDLpsTH+T+HnMk6FFix5vLryX+HJUvlpy2jEc58KbB5g6hDOpq/qDrQoPXaRTJP093merjitHJZ0hISHWaAb074/DL7MZtDd3voEa6SfUGWJANFMc2MLoBuBv49zRCRE5Y6ekCN7iAqO1fB5zB7w5QI5XrNvldVJddwEKNc7KudbqFS/DXCGtiOboMbqDALhtgRGYQpnrMA0uNRLmiK0b//pxL/4u1wvXFAVjnro623RXMxkQruKfw0BxGFnHURzTz+0ygKyy+QvlIrOskx/dIp9jHYqoPSyf8SPjp5Emt4I6T0zDUGN8elh+5IeUgmO//+syfHe6fbIJCUPPm3ap+Vt5b9PG+HcJpxOmuYRiq5Y7r27O+vgVBtgo9m8VoXPM6sQDs5IzwmQLkZLETgBBdKyP704gtEVbotBxidt72yesR9SKg0B2dXhcKlKAFs5ga+NfCnoT5JE28QoHLv9xKFARyJl68BifNZcWZr02fX65KjFBUPq4WMv762iBqmvWwlnBmQA6CUdSbgAlD+EVFISatPSaT7LbnHAGR7nU5910poCPhkwjES6T+Z6KB7r3HB/YGpO1G99KCrKdk4QifvXrjbqxWyDlZw2LuizgLx9I+Nuk8UBFHzKuCblCyCfld+Z49cb/RAJ0u2w9cKMqUvl4TsbTwEfKGEbctJRiAwb9mTYlH5oZ/B1lvSg3IPBff9rtRISu95FsaBSCcbl5AaC29nf6sHhLmYAzmh01nmSE2HrZEgWt+kbLVNXpRjFvXLsjh+qXy7+v/GW3WaCllEenq2Hz9OVRtAzHVp+28ii/mDLCgzD5CZRQkXyjwHJaCXRo+210Vrb7ZPMy9RWTURljEbXjfJOygPanGT9ax91od/CqbmFRaY6h42JIx2rifyDM90FBjP58NZb+MauJ6fRAN0lm8EkrldmcnhR5ytPkvEWHubU3CHpdRAYHDdRyuQJG6pRpYDP5CabaMODJwXoQx8NBkPbjmqdkZ8MUm8ZNZEBOxuuJBNMQ+GrsuJmZJ7m/5IpFXz6sQ0yk5Ro1caXvGbJIfw2cLJQnO74JtcbQQK7WvTVaz1hAN4QC2ueOraDAm6rdP/WuWG8RC+X4AQK+BBxyNpzoscMIGLK9mEmHveHw0E6L6yva3lCX00DX+QaJHvox0UUjMTCByQ1W+yNY9HQTz/Arf3uQwj+lzhv8RnZWaD9fmCXmwwpBdJ8GKjr2tthfpm6qXYlgTC5B4trInw+yioiue5gPbNiQXQ+VZ1mU8/Ur/ZETR81n+fz3WOQ83WjHaVud9kvPI5q1HqW/e8yY4SNINcH2tqRK9RMCME7fUWCKwqcUzhJlJcoj/eMbFnU1SNoXY1dVDkL8HyutUDuYXAmVKxDW4yHzO06HQSJcRXgrugNHMe+qVtHulm6FCHfExzdRHzAOSxuu5PIgh+C0ny97QeY+g1l3o/WdAxdQxwzdSmUVruTIIyplVM4kAXlQTJqD+Px+Dyq7uGZ5i5wcl2KKq2B7/VWEB9xAK4pV2P5IRpZNMfb8xIg+f/cxZKUN1SFAlgkPbW1AAbRGLLtTTMHSMKQ4r6zn8XupKb8tzJkq0QEEUkWd70eSq+31f5ZG/3F5LuTfEmkdDQmjs=';const _IH='ca7d723bc93151084a063d5f89e970a98d5afd040d49109583eea83e6270e6f4';let _src;

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
