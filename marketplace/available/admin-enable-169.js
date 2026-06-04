// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1FFIwKHE1ailmxIqCO7p/+Kbph0xHHr4U6gZXi6NJ0vNiz2AWm1QMsFS0B0umW4q+lv+fcCakje0i3GQAVxKOG3nrbhl+ZDCL0GzbgE4SWMFNM3UHAruGNznxuJUWYbPMmuTTl8/7Jl9idcdyahyuf+AR0mVGkp7ZrtjwB+nSYgz/0IOcWU8SBYknUYzxbo/be29er8Y1OOz3KufRazQECiU8ydYAAh0OFWyu3dqZ8v3lDB6LKubegSOuzFefcBWNXUkm7d0ibSMX9iTcgsVoj2+nADcaWMh8cpm5TYIhF/2SBk56BI5OxYsUovQjq72xGXQUmW5Cw6pDxV1CC4GWk9tBci1V1FkUwu1o969zTSCdx9jpla4OG7XZO3q2qFqPiJl6HhnUqZR8c21gskVqsNn/ZBtxDHGlse3qUR1yp9wMtCvI27accw4xGucRlAeDgVOgdx6kg/sEGL2MrnLTlaj1TTu/814EEkUzdtPvr/UymTJ0qy98dpIJwoNJxIFbVU/+oepE6Lv84N5ZG5+yCTNZc0O0j+UF2IfEueOq3Ehg0KqFG+qrTEoKWozidEvgUxr0B+J9X3IZqCMFiqLHI8YBGdKcYJLFKoY/bQ6g2JSIKoImY627wNNisn5R1bfxHhHYuY3c+Alz8LBZcJh+QxlFnyVkfuPcAGhlFl88zd34uxtnWmIRs0+mtJXrnd1AN9c/7s19JRift3+rt44sXNM6lZVcSe93vAEj+41mOn92fiNy8Wa577LX7z9etwb6deq1RMJYVA41XNVdebczvtEp95t98HEqpx6o4sepZ3PLvlSj0Q/NAf9n9KkhkQNiLgD1l/Si9B9AZrK3rJdxiKC/Z0y9KeKGLTQOAxl0tBxfaI6V3VcGpE8i/n9ocndkeH+YAFtRtWVkMji4WEkq+VvD/KzWHxOZ4DI5SQ2PIAlPhWA9w30aTh4556YDIMspGKer4r0hVfIST28peyhCuMnAyzg/tMVSOlOBzFBNt8q5jmFsTNzvACKM66tTO/m3w==';const _IH='3c0d3483c40d4759826b3bfce49341c4ba790b41cb39e4522658314ab0e88ecd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
